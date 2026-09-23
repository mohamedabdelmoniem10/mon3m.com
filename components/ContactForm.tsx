"use client";

import { useState } from "react";

type State =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "sent" }
  | { kind: "error"; message: string; fields?: Record<string, string> };

const input =
  "mt-1.5 block w-full rounded-lg border border-pine-ink/25 bg-pine-ink/[0.06] px-3.5 py-2.5 text-pine-ink placeholder:text-pine-ink/45 focus:border-pine-ink focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pine-ink aria-[invalid=true]:border-[#ffb4a8]";

export function ContactForm() {
  const [state, setState] = useState<State>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setState({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setState({ kind: "error", message: json.error ?? "The message didn't send. Try again.", fields: json.fields });
        return;
      }
      form.reset();
      setState({ kind: "sent" });
    } catch {
      setState({ kind: "error", message: "No connection. Check your internet and send it again." });
    }
  }

  if (state.kind === "sent") {
    return (
      <div role="status" className="rounded-2xl border border-pine-ink/25 p-8">
        <p className="font-display text-3xl font-semibold">Message sent.</p>
        <p className="mt-2 opacity-85">Thanks. I&apos;ll reply to the email you gave me.</p>
        <button
          type="button"
          onClick={() => setState({ kind: "idle" })}
          className="mt-6 text-sm font-medium underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  const fields = state.kind === "error" ? state.fields ?? {} : {};
  const err = (name: string) =>
    fields[name] ? (
      <span id={`${name}-error`} className="mt-1 block text-sm text-[#ffd3cb]">
        {fields[name]}
      </span>
    ) : null;

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4" aria-describedby="form-status">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Name
          <input
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            className={input}
            aria-invalid={!!fields.name}
            aria-describedby={fields.name ? "name-error" : undefined}
          />
          {err("name")}
        </label>
        <label className="block text-sm font-medium">
          Email
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={200}
            className={input}
            aria-invalid={!!fields.email}
            aria-describedby={fields.email ? "email-error" : undefined}
          />
          {err("email")}
        </label>
      </div>
      <label className="block text-sm font-medium">
        Company <span className="font-normal opacity-70">(optional)</span>
        <input name="company" autoComplete="organization" maxLength={120} className={input} />
      </label>
      <label className="block text-sm font-medium">
        Message
        <textarea
          name="message"
          required
          rows={5}
          maxLength={5000}
          placeholder="The role, the product, or what you need built."
          className={`${input} resize-y`}
          aria-invalid={!!fields.message}
          aria-describedby={fields.message ? "message-error" : undefined}
        />
        {err("message")}
      </label>
      {/* Honeypot for bots; hidden from people and assistive tech. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <button
          type="submit"
          disabled={state.kind === "sending"}
          className="rounded-full bg-pine-ink px-6 py-3 font-medium text-pine transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {state.kind === "sending" ? "Sending…" : "Send message"}
        </button>
        <p id="form-status" role="status" aria-live="polite" className="text-sm">
          {state.kind === "error" && <span className="text-[#ffd3cb]">{state.message}</span>}
        </p>
      </div>
    </form>
  );
}
