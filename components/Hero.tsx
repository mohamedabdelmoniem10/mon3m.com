"use client";

import Image from "next/image";
import { useState } from "react";
import { site } from "@/lib/site";

const copy = {
  ltr: {
    lang: "en",
    lines: ["Design systems", "at national scale.", "Products, end\u00a0to\u00a0end."],
    body: "I'm a senior frontend engineer and team lead. For seven years I've shipped for Saudi government, banking and fintech, and I build my own products from the database to the deploy. Everything I make works in Arabic and English.",
    switch: "اقرأها بالعربية",
  },
  rtl: {
    lang: "ar",
    lines: ["أنظمة تصميم", "على مستوى دولة.", "ومنتجات من البداية للنهاية."],
    body: "مهندس واجهات أمامية أول وقائد فريق. على مدار سبع سنوات سلّمت مشاريع لجهات حكومية وبنوك وشركات تقنية مالية في السعودية، وأبني منتجاتي بنفسي من قاعدة البيانات حتى النشر. وكل ما أبنيه يعمل بالعربية والإنجليزية.",
    switch: "Read it in English",
  },
} as const;

export function Hero() {
  const [dir, setDir] = useState<"ltr" | "rtl">("ltr");
  const [flips, setFlips] = useState(0);
  const c = copy[dir];

  const flip = () => {
    setDir((d) => (d === "ltr" ? "rtl" : "ltr"));
    setFlips((n) => n + 1);
  };

  return (
    <section aria-labelledby="hero-title" className="wrap pb-14 pt-10 sm:pb-20 sm:pt-16">
      <div className="grid gap-10 lg:grid-cols-[1fr_20rem] lg:gap-14">
        <div>
          <p className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="inline-flex items-center gap-2 text-ink">
              <span className="size-2 rounded-full bg-pine" aria-hidden="true" />
              Open to remote roles
            </span>
            <span aria-hidden="true">/</span>
            <span>{site.role}</span>
            <a
              href={site.oldVersion}
              target="_blank"
              rel="noopener"
              className="ms-auto normal-case tracking-normal text-muted underline decoration-rule underline-offset-4 hover:text-ink hover:decoration-ink"
            >
              See the 2023 version ↗
            </a>
          </p>

          <div
            key={flips}
            dir={dir}
            lang={c.lang}
            className={flips ? "flip-enter" : undefined}
            style={{ ["--flip-dir" as string]: dir === "rtl" ? -1 : 1, ["--d" as string]: "80ms" }}
          >
            <h1
              id="hero-title"
              className={`display mt-6 text-[clamp(2.4rem,6.4vw,5.1rem)] font-semibold text-ink ${
                dir === "rtl" ? "ar font-semibold" : ""
              }`}
            >
              {c.lines.map((l, i) => (
                <span key={i} className={`block ${i === 2 ? "text-pine" : ""}`}>
                  {l}
                </span>
              ))}
            </h1>
            <p className={`mt-7 max-w-2xl text-lg text-ink-2 sm:text-xl ${dir === "rtl" ? "ar" : ""}`}>
              {c.body}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3" style={{ ["--d" as string]: "160ms" }}>
            <a
              href={`mailto:${site.email}`}
              className="rounded-full bg-pine px-5 py-3 font-medium text-pine-ink transition-opacity hover:opacity-90"
            >
              Email me
            </a>
            <a
              href="#work"
              className="rounded-full border border-ink/20 px-5 py-3 font-medium text-ink transition-colors hover:border-ink"
            >
              See the work
            </a>
            <button
              type="button"
              onClick={flip}
              aria-pressed={dir === "rtl"}
              className="group ms-1 inline-flex items-center gap-3 rounded-full px-2 py-3 text-ink-2 hover:text-ink"
            >
              <span className={dir === "ltr" ? "ar" : ""} lang={dir === "ltr" ? "ar" : "en"}>
                {c.switch}
              </span>
              <code className="rounded-md border border-rule bg-paper px-2 py-0.5 font-mono text-xs text-muted transition-colors group-hover:border-pine group-hover:text-pine">
                dir=&quot;{dir}&quot;
              </code>
            </button>
          </div>
        </div>

        <aside className="self-end" style={{ ["--d" as string]: "240ms" }} aria-label="At a glance">
          <div className="flex overflow-hidden rounded-2xl border border-rule bg-paper lg:block">
            <Image
              src="/images/mohamed-abdelmoniem-portrait.webp"
              alt="Mohamed Abdelmoniem"
              width={800}
              height={1000}
              priority
              sizes="(min-width: 1024px) 20rem, (min-width: 640px) 14rem, 40vw"
              className="aspect-[4/5] w-[40%] shrink-0 object-cover object-top sm:w-56 lg:w-full"
            />
            <dl className="grid flex-1 grid-cols-1 content-center gap-px bg-rule text-sm sm:grid-cols-2 lg:grid-cols-2">
              {[
                ["Based in", "Cairo · UTC+3"],
                ["Experience", "7 years"],
                ["Languages", "Arabic · English"],
                ["Works", "Remote or KSA/UAE"],
              ].map(([k, v]) => (
                <div key={k} className="bg-paper px-4 py-3">
                  <dt className="eyebrow !text-[0.68rem]">{k}</dt>
                  <dd className="mt-0.5 font-medium text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </div>
    </section>
  );
}
