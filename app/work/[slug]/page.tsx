import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DeviceFrame } from "@/components/DeviceFrame";
import { Cover } from "@/components/Covers";
import { StatusBadge } from "@/components/ProjectCard";
import { getProject, groups, projects } from "@/lib/projects";
import { site } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  const title = `${p.name}: ${p.role}`;
  return {
    title,
    description: p.summary,
    alternates: { canonical: `/work/${p.slug}` },
    openGraph: { type: "article", title, description: p.summary, url: `/work/${p.slug}` },
    twitter: { card: "summary_large_image", title, description: p.summary },
  };
}

export default async function CaseStudy({ params }: Params) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const i = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(i + 1) % projects.length];

  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        name: p.name,
        description: p.summary,
        url: `${site.url}/work/${p.slug}`,
        creator: { "@type": "Person", name: site.name, url: site.url },
        keywords: p.stack.join(", "),
        ...(p.shots?.[0] && { image: `${site.url}${p.shots[0].desktop}` }),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Work", item: `${site.url}/#work` },
          { "@type": "ListItem", position: 2, name: p.name, item: `${site.url}/work/${p.slug}` },
        ],
      },
    ],
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      <header className="wrap pb-12 pt-10 sm:pt-14">
        <nav aria-label="Breadcrumb" className="eyebrow flex gap-2">
          <Link href="/#work" className="hover:text-ink">Work</Link>
          <span aria-hidden="true">/</span>
          <span className="text-ink">{groups[p.group].title}</span>
        </nav>
        <h1 className="display mt-6 max-w-4xl text-[clamp(2.6rem,7vw,5.5rem)] font-semibold">{p.name}</h1>
        <p className="mt-6 max-w-3xl text-xl text-ink-2">{p.summary}</p>

        <dl className="mt-10 grid gap-px overflow-hidden rounded-xl border border-rule bg-rule sm:grid-cols-4">
          {[
            ["Role", p.role],
            ["For", p.org],
            ["When", p.period],
          ].map(([k, v]) => (
            <div key={k} className="bg-paper px-5 py-4">
              <dt className="eyebrow">{k}</dt>
              <dd className="mt-1 font-medium">{v}</dd>
            </div>
          ))}
          <div className="bg-paper px-5 py-4">
            <dt className="eyebrow">Status</dt>
            <dd className="mt-1.5"><StatusBadge status={p.status} /></dd>
          </div>
        </dl>

        {p.links && (
          <p className="mt-6 flex flex-wrap gap-3">
            {p.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full bg-pine px-4 py-2 text-sm font-medium text-pine-ink hover:opacity-90"
              >
                {l.label} <span aria-hidden="true">↗</span>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ))}
          </p>
        )}
      </header>

      <section aria-label="Screens" className="wrap">
        {p.shots ? (
          <div className="space-y-14">
            {p.shots.map((s, idx) => (
              <figure key={s.desktop}>
                <DeviceFrame desktop={s.desktop} mobile={s.mobile} alt={`${p.name}: ${s.caption}`} url={s.host ?? p.links?.[0]?.href} priority={idx === 0} />
                <figcaption className="mt-3 text-sm text-muted">{s.caption}</figcaption>
              </figure>
            ))}
          </div>
        ) : p.cover ? (
          <figure className="max-w-4xl">
            <Cover kind={p.cover} />
            {p.note && <figcaption className="mt-3 text-sm text-muted">{p.note}</figcaption>}
          </figure>
        ) : null}
      </section>

      <div className="wrap grid gap-12 py-16 sm:py-24 lg:grid-cols-[1fr_18rem] lg:gap-20">
        <div className="max-w-3xl">
          <h2 className="eyebrow">Context</h2>
          <div className="prose-work mt-4 text-lg text-ink-2">
            {p.context.map((c) => (
              <p key={c}>{c}</p>
            ))}
          </div>

          <h2 className="eyebrow mt-14">What I did</h2>
          <ul className="mt-4 space-y-4">
            {p.work.map((w) => (
              <li key={w} className="flex gap-4 text-lg text-ink">
                <span className="mt-3 h-px w-4 shrink-0 bg-pine" aria-hidden="true" />
                <span>{w}</span>
              </li>
            ))}
          </ul>

          {p.outcomes && (
            <>
              <h2 className="eyebrow mt-14">Outcome</h2>
              <ul className="mt-4 space-y-3">
                {p.outcomes.map((o) => (
                  <li key={o} className="rounded-xl border border-pine/30 bg-sage/40 px-5 py-4 text-lg font-medium text-ink">
                    {o}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        <aside>
          <h2 className="eyebrow">Stack</h2>
          <ul className="mt-4 flex flex-wrap gap-1.5 lg:flex-col lg:items-start">
            {p.stack.map((s) => (
              <li key={s} className="rounded-md bg-paper px-2.5 py-1 font-mono text-sm text-ink-2">{s}</li>
            ))}
          </ul>
          {p.shots && p.note && <p className="mt-8 text-sm text-muted">{p.note}</p>}
        </aside>
      </div>

      <nav aria-label="Next project" className="border-t border-rule">
        <Link href={`/work/${next.slug}`} className="wrap group flex items-center justify-between gap-6 py-10">
          <span>
            <span className="eyebrow">Next project</span>
            <span className="display mt-2 block text-3xl font-semibold group-hover:text-pine sm:text-5xl">{next.name}</span>
          </span>
          <span aria-hidden="true" className="text-3xl transition-transform group-hover:translate-x-2">→</span>
        </Link>
      </nav>
    </article>
  );
}
