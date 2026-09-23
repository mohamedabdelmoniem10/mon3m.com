import nodemailer from "nodemailer";
import { site } from "@/lib/site";

export const runtime = "nodejs";

// Credentials live only in environment variables (Vercel → Settings → Environment Variables), never in the repo.
// SMTP_USER: the Gmail address · SMTP_PASS: a Gmail app password · CONTACT_TO (optional): where messages go
const { SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;

const LIMITS = { name: 100, email: 200, company: 120, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Best-effort throttle per server instance: 5 messages per IP per 10 minutes.
const hits = new Map<string, number[]>();
function throttled(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "The form data couldn't be read. Refresh the page and try again." }, { status: 400 });
  }

  // Honeypot: real people never see or fill this field.
  if (clean(body.website, 200)) return Response.json({ ok: true });

  const name = clean(body.name, LIMITS.name);
  const email = clean(body.email, LIMITS.email);
  const company = clean(body.company, LIMITS.company);
  const message = clean(body.message, LIMITS.message);

  const fields: Record<string, string> = {};
  if (!name) fields.name = "Add your name.";
  if (!EMAIL_RE.test(email)) fields.email = "Enter an email I can reply to.";
  if (message.length < 10) fields.message = "Write at least a sentence so I know what it's about.";
  if (Object.keys(fields).length) return Response.json({ error: "Check the highlighted fields.", fields }, { status: 422 });

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (throttled(ip)) {
    return Response.json({ error: "Too many messages in a short time. Try again in a few minutes, or email me directly." }, { status: 429 });
  }

  if (!SMTP_USER || !SMTP_PASS) {
    console.error("Contact form: SMTP_USER / SMTP_PASS are not set");
    return Response.json({ error: `The form isn't connected yet. Email me at ${site.email} instead.` }, { status: 503 });
  }

  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transport.sendMail({
      from: `"Portfolio contact" <${SMTP_USER}>`,
      to: CONTACT_TO || site.email,
      replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
      subject: `Portfolio: message from ${name}${company ? ` (${company})` : ""}`,
      text: `${message}\n\n— ${name}${company ? `, ${company}` : ""}\n${email}`,
      html: `<p style="white-space:pre-wrap;font:15px/1.6 system-ui,sans-serif">${escape(message)}</p>
<p style="font:14px system-ui,sans-serif;color:#555">— ${escape(name)}${company ? `, ${escape(company)}` : ""}<br><a href="mailto:${escape(email)}">${escape(email)}</a></p>`,
    });
  } catch (err) {
    console.error("Contact form: send failed", err);
    return Response.json({ error: `The message didn't send. Email me at ${site.email} instead.` }, { status: 502 });
  }

  return Response.json({ ok: true });
}
