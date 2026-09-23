import type { CoverKind } from "@/lib/projects";

/**
 * Illustrations for projects that are internal or offline, drawn in HTML so they stay crisp and cost no image bytes.
 * They show how the product works, never real customer data.
 */
export function Cover({ kind }: { kind: CoverKind }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-rule bg-paper" aria-hidden="true">
      <div className="aspect-[16/10] w-full">
        {kind === "themes" && <Themes />}
        {kind === "screener" && <Screener />}
        {kind === "commerce" && <Commerce />}
      </div>
    </div>
  );
}

const brands = [
  { name: "Al Rajhi Bank", c: "#2b44b8", r: "6px", font: "600" },
  { name: "Al Rajhi Capital", c: "#12695a", r: "2px", font: "500" },
  { name: "Emkan", c: "#7133b0", r: "999px", font: "600" },
  { name: "Neoleap", c: "#0c7ca8", r: "10px", font: "600" },
  { name: "Takaful", c: "#a4561d", r: "4px", font: "500" },
  { name: "urpay", c: "#c1245e", r: "999px", font: "700" },
];

function Themes() {
  return (
    <div className="flex h-full flex-col p-4 sm:p-6">
      <div className="flex items-center justify-between font-mono text-[0.65rem] text-muted sm:text-xs">
        <span>&lt;gds-button variant=&quot;primary&quot;&gt;</span>
        <span className="hidden sm:inline">1 component · 6 themes</span>
      </div>
      <div className="mt-3 grid flex-1 grid-cols-3 gap-2 sm:mt-4 sm:gap-3">
        {brands.map((b) => (
          <div key={b.name} className="flex flex-col justify-between rounded-lg border border-rule bg-mist p-2 sm:p-3">
            <span className="truncate font-mono text-[0.55rem] text-muted sm:text-[0.65rem]">{b.name}</span>
            <div className="space-y-1.5 sm:space-y-2">
              <div
                className="h-2 w-3/4 opacity-25 sm:h-2.5"
                style={{ background: b.c, borderRadius: b.r }}
              />
              <div className="h-5 border bg-paper sm:h-7" style={{ borderColor: `${b.c}55`, borderRadius: b.r }} />
              <div
                className="grid h-5 place-items-center text-[0.55rem] text-white sm:h-7 sm:text-[0.7rem]"
                style={{ background: b.c, borderRadius: b.r, fontWeight: b.font }}
              >
                Continue
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Screener() {
  const options = [
    ["Figma", "Qualify"],
    ["Sketch", "Qualify"],
    ["I don't design", "Disqualify"],
  ];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu"];
  const booked: Record<string, number[]> = { Sun: [1], Mon: [0, 2], Tue: [], Wed: [1, 3], Thu: [2] };
  return (
    <div className="grid h-full grid-cols-[1.15fr_1fr] gap-3 p-4 sm:gap-5 sm:p-6">
      <div className="flex flex-col rounded-lg border border-rule bg-mist p-3 sm:p-4">
        <span className="font-mono text-[0.6rem] text-muted sm:text-xs">Question 2 of 5</span>
        <p className="mt-1.5 text-[0.7rem] font-medium leading-snug text-ink sm:mt-2 sm:text-sm">
          Which design tool do you use every week?
        </p>
        <ul className="mt-2 space-y-1.5 sm:mt-3 sm:space-y-2">
          {options.map(([o, rule]) => (
            <li
              key={o}
              className="flex items-center justify-between rounded-md border border-rule bg-paper px-2 py-1 text-[0.6rem] sm:px-3 sm:py-1.5 sm:text-xs"
            >
              <span className="text-ink-2">{o}</span>
              <span
                className={`rounded-full px-1.5 py-0.5 font-mono text-[0.5rem] sm:px-2 sm:text-[0.6rem] ${
                  rule === "Qualify" ? "bg-sage text-pine" : "bg-rule text-ink-2"
                }`}
              >
                {rule}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col rounded-lg border border-rule bg-mist p-3 sm:p-4">
        <span className="font-mono text-[0.6rem] text-muted sm:text-xs">Session calendar</span>
        <div className="mt-2 grid flex-1 grid-cols-5 gap-1 sm:mt-3 sm:gap-1.5">
          {days.map((d) => (
            <div key={d} className="flex flex-col gap-1 sm:gap-1.5">
              <span className="text-center font-mono text-[0.5rem] text-muted sm:text-[0.6rem]">{d}</span>
              {[0, 1, 2, 3].map((slot) => (
                <span
                  key={slot}
                  className={`flex-1 rounded ${booked[d].includes(slot) ? "bg-pine" : "border border-dashed border-rule"}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Commerce() {
  return (
    <div className="grid h-full grid-cols-[1fr_auto] gap-3 p-4 sm:gap-5 sm:p-6">
      <div className="flex flex-col">
        <div className="flex gap-1.5">
          {["All", "New", "Sale", "Under 500"].map((f, i) => (
            <span
              key={f}
              className={`rounded-full px-2 py-0.5 font-mono text-[0.55rem] sm:text-[0.65rem] ${
                i === 0 ? "bg-ink text-mist" : "border border-rule text-muted"
              }`}
            >
              {f}
            </span>
          ))}
        </div>
        <div className="mt-3 grid flex-1 grid-cols-3 gap-2 sm:gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex flex-col rounded-lg border border-rule bg-mist p-1.5 sm:p-2">
              <div className="flex-1 rounded-md bg-rule/70" style={{ opacity: 0.5 + (i % 3) * 0.2 }} />
              <div className="mt-1.5 h-1.5 w-3/4 rounded bg-rule sm:h-2" />
              <div className="mt-1 h-1.5 w-1/3 rounded bg-pine/60 sm:h-2" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-[5.5rem] flex-col rounded-[1rem] border-[4px] border-ink bg-mist p-1.5 sm:w-32 sm:p-2">
        <span className="font-mono text-[0.5rem] text-muted sm:text-[0.6rem]">Order #1042</span>
        <ol className="mt-2 flex-1 space-y-2 border-s border-rule ps-2">
          {["Placed", "Paid", "Shipped", "Delivered"].map((s, i) => (
            <li key={s} className="relative text-[0.55rem] sm:text-[0.65rem]">
              <span
                className={`absolute -start-[0.72rem] top-1 size-1.5 rounded-full ${i < 3 ? "bg-pine" : "bg-rule"}`}
              />
              <span className={i < 3 ? "text-ink" : "text-muted"}>{s}</span>
            </li>
          ))}
        </ol>
        <div className="grid h-5 place-items-center rounded-md bg-pine text-[0.5rem] text-pine-ink sm:h-6 sm:text-[0.6rem]">
          Track
        </div>
      </div>
    </div>
  );
}
