import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { groups, projects, type ProjectGroup } from "@/lib/projects";
import { alongside, capabilities, experience } from "@/lib/experience";
import { site } from "@/lib/site";

const order: ProjectGroup[] = ["design-systems", "products", "teams"];

const shippedFor = ["Digital Government Authority", "Al Rajhi Group", "ProBuy", "MyEx", "Dar Ahlullah", "Bunyan Makkah"];

const loop = [
  ["Understand", "Read the problem, the users and the constraints before touching code."],
  ["Investigate", "Dig through the codebase and edge cases with Claude Code and Cursor, fast."],
  ["Plan & build", "Write the plan, then build in small, reviewable pieces with tests."],
  ["Ship & polish", "Release, watch real usage, then come back for the details."],
];

function SectionHead({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="display mt-3 text-4xl font-semibold sm:text-6xl">
        {title}
      </h2>
      {children && <p className="mt-4 text-lg text-ink-2">{children}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Hero />

      <section aria-label="Organisations I've shipped for" className="border-y border-rule bg-paper">
        <div className="wrap flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:gap-8">
          <p className="eyebrow shrink-0">Shipped for</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-1.5 text-sm font-medium text-ink-2">
            {shippedFor.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="work" aria-labelledby="work-title" className="wrap scroll-mt-20 py-20 sm:py-28">
        <SectionHead id="work-title" eyebrow={`Selected work · ${projects.length} projects`} title="Work">
          Screenshots are from the live sites. Internal and NDA work is shown as an illustration and labelled that way.
        </SectionHead>

        {order.map((g, gi) => {
          const list = projects.filter((p) => p.group === g);
          const [first, ...rest] = list;
          return (
            <div key={g} className="mt-20 first-of-type:mt-14" aria-labelledby={`group-${g}`}>
              <div className="flex flex-col gap-2 border-t border-ink pt-4 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 id={`group-${g}`} className="font-display text-2xl font-semibold tracking-tight">
                  {groups[g].title}
                </h3>
                <p className="max-w-md text-sm text-muted sm:text-end">{groups[g].blurb}</p>
              </div>
              <div className="mt-10">
                <ProjectCard p={first} featured priority={gi === 0} />
              </div>
              {rest.length > 0 && (
                <div className="mt-16 grid gap-x-10 gap-y-16 md:grid-cols-2">
                  {rest.map((p) => (
                    <ProjectCard key={p.slug} p={p} />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </section>

      <section aria-labelledby="loop-title" className="border-y border-rule bg-paper">
        <div className="wrap py-20 sm:py-24">
          <SectionHead id="loop-title" eyebrow="How I work" title="AI-first, still reviewed by me.">
            AI is part of every step of how I build, from investigation to tests. Every line that ships is still one I've read and would defend in review.
          </SectionHead>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-xl border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
            {loop.map(([t, d], i) => (
              <li key={t} className="bg-mist p-6">
                <span className="font-mono text-xs text-pine">Step {i + 1}</span>
                <p className="mt-2 font-display text-xl font-semibold">{t}</p>
                <p className="mt-2 text-sm text-ink-2">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="experience" aria-labelledby="exp-title" className="wrap scroll-mt-20 py-20 sm:py-28">
        <SectionHead id="exp-title" eyebrow="2019 – now" title="Experience" />
        <ol className="mt-12 border-t border-ink">
          {experience.map((r) => (
            <li key={`${r.company}-${r.period}`} className="grid gap-3 border-b border-rule py-8 md:grid-cols-[14rem_1fr]">
              <div>
                <p className="font-mono text-sm text-muted">{r.period}</p>
                {r.place && <p className="mt-1 text-sm text-muted">{r.place}</p>}
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tight">
                  {r.company} <span className="font-sans text-base font-normal text-ink-2">· {r.title}</span>
                </h3>
                <ul className="mt-3 space-y-1.5 text-ink-2">
                  {r.points.map((pt) => (
                    <li key={pt} className="flex gap-3">
                      <span className="mt-2.5 h-px w-3 shrink-0 bg-pine" aria-hidden="true" />
                      {pt}
                    </li>
                  ))}
                </ul>
                {r.projects && (
                  <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                    {r.projects.map((slug) => {
                      const p = projects.find((x) => x.slug === slug);
                      return p ? (
                        <Link key={slug} href={`/work/${slug}`} className="font-medium text-pine hover:underline">
                          {p.name} →
                        </Link>
                      ) : null;
                    })}
                  </p>
                )}
              </div>
            </li>
          ))}
          <li className="grid gap-3 py-8 md:grid-cols-[14rem_1fr]">
            <p className="font-mono text-sm text-muted">{alongside.period}</p>
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-tight">{alongside.title}</h3>
              <p className="mt-3 max-w-3xl text-ink-2">{alongside.text}</p>
            </div>
          </li>
        </ol>

        <div className="mt-20">
          <h3 className="font-display text-2xl font-semibold tracking-tight">What I work with</h3>
          <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c) => (
              <div key={c.title}>
                <p className="eyebrow">{c.title}</p>
                <ul className="mt-3 space-y-1 text-ink-2">
                  {c.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" aria-labelledby="contact-title" className="scroll-mt-20 bg-pine text-pine-ink">
        <div className="wrap grid gap-10 py-20 sm:py-28 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider opacity-70">Contact</p>
            <h2 id="contact-title" className="display mt-3 text-5xl font-semibold sm:text-7xl">
              Building something that has to work in two languages?
            </h2>
            <p className="mt-6 max-w-xl text-lg opacity-85">
              I&apos;m looking for a senior frontend or team lead role, remote or in Saudi Arabia or the UAE.
            </p>
          </div>
          <ul className="space-y-3 text-lg">
            <li>
              <a href={`mailto:${site.email}`} className="block rounded-xl border border-current/25 px-5 py-4 font-medium transition-colors hover:bg-pine-ink hover:text-pine">
                {site.email}
              </a>
            </li>
            <li className="grid grid-cols-3 gap-3 text-base">
              <a href={site.linkedin} rel="me noopener" className="rounded-xl border border-current/25 px-4 py-3 text-center transition-colors hover:bg-pine-ink hover:text-pine">LinkedIn</a>
              <a href={site.whatsapp} rel="noopener" className="rounded-xl border border-current/25 px-4 py-3 text-center transition-colors hover:bg-pine-ink hover:text-pine">WhatsApp</a>
              <a href={site.cv} className="rounded-xl border border-current/25 px-4 py-3 text-center transition-colors hover:bg-pine-ink hover:text-pine">CV</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
