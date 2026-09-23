import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="wrap flex flex-col gap-3 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}. Built with Next.js, deployed on Vercel.
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          <li><a className="hover:text-ink" href={`mailto:${site.email}`}>Email</a></li>
          <li><a className="hover:text-ink" href={site.linkedin} rel="me noopener">LinkedIn</a></li>
          <li><a className="hover:text-ink" href={site.github} rel="me noopener">GitHub</a></li>
          <li><a className="hover:text-ink" href={site.cv}>CV (PDF)</a></li>
        </ul>
      </div>
    </footer>
  );
}
