import Link from "next/link";
import type { Project } from "@/lib/projects";
import { DeviceFrame } from "./DeviceFrame";
import { Cover } from "./Covers";

export function ProjectVisual({ p, priority }: { p: Project; priority?: boolean }) {
  const shot = p.shots?.[0];
  if (shot) {
    return <DeviceFrame desktop={shot.desktop} mobile={shot.mobile} alt={p.name} url={shot.host ?? p.links?.[0]?.href} priority={priority} />;
  }
  if (p.cover) {
    return (
      <div className="pb-6 pe-6 sm:pb-10 sm:pe-10">
        <Cover kind={p.cover} />
      </div>
    );
  }
  return null;
}

export function StatusBadge({ status }: { status?: Project["status"] }) {
  if (!status) return null;
  const live = status === "Live";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 font-mono text-[0.68rem] ${
        live ? "border-pine/40 text-pine" : "border-rule text-muted"
      }`}
    >
      <span className={`size-1.5 rounded-full ${live ? "bg-pine" : "bg-muted/60"}`} aria-hidden="true" />
      {status}
    </span>
  );
}

export function ProjectCard({ p, featured, priority }: { p: Project; featured?: boolean; priority?: boolean }) {
  return (
    <article
      className={`group relative ${
        featured ? "grid items-center gap-6 lg:grid-cols-[1.35fr_1fr] lg:gap-12" : "flex flex-col gap-5"
      }`}
    >
      <div className="transition-transform duration-500 ease-out group-hover:-translate-y-1 motion-reduce:transform-none">
        <ProjectVisual p={p} priority={priority} />
      </div>
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge status={p.status} />
          <span className="font-mono text-[0.72rem] text-muted">{p.period}</span>
          {!p.shots && p.cover && (
            <span className="font-mono text-[0.72rem] text-muted">· Illustration, not a screenshot</span>
          )}
        </div>
        <h3 className={`display mt-3 font-semibold ${featured ? "text-4xl sm:text-5xl" : "text-3xl"}`}>
          <Link href={`/work/${p.slug}`} className="after:absolute after:inset-0 hover:text-pine">
            {p.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-muted">{p.role} · {p.org}</p>
        <p className={`mt-3 text-ink-2 ${featured ? "text-lg" : ""}`}>{p.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Stack">
          {p.stack.slice(0, featured ? 7 : 5).map((s) => (
            <li key={s} className="rounded-md bg-paper px-2 py-0.5 font-mono text-[0.72rem] text-ink-2">
              {s}
            </li>
          ))}
        </ul>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-pine">
          Read the case study
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </article>
  );
}
