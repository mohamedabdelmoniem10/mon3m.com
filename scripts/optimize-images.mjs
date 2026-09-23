// One-off helper: converts raw screenshots (desktop 1440x900, mobile 390x844@3x)
// into web-ready WebP under public/work/<slug>/.
// Usage: node scripts/optimize-images.mjs <sourceDir>
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const src = process.argv[2];
if (!src) throw new Error("Pass the screenshots folder as the first argument");

const map = {
  dga: ["dga-storybook"],
  probuy: ["probuy"],
  "dar-ahlullah": ["dar-ahlullah", "dar-ahlullah-pricing"],
  myex: ["myex", "myex-ar"],
  taskeen: ["taskeen"],
  "bunyan-makkah": ["bunyan-makkah"],
  jozour: ["jozour"],
  "bonyan-erp": ["bonyan-erp", "bonyan-erp-analytics"],
  "bunyan-crm": ["bunyan-crm", "bunyan-crm-recovery"],
};

for (const [slug, shots] of Object.entries(map)) {
  const out = path.join("public/work", slug);
  await mkdir(out, { recursive: true });
  for (const [i, name] of shots.entries()) {
    const suffix = i === 0 ? "" : `-${i + 1}`;
    await sharp(path.join(src, `${name}-desktop.jpg`))
      .resize({ width: 1440 })
      .webp({ quality: 78 })
      .toFile(path.join(out, `desktop${suffix}.webp`));
    await sharp(path.join(src, `${name}-mobile.jpg`))
      .resize({ width: 780 })
      .webp({ quality: 78 })
      .toFile(path.join(out, `mobile${suffix}.webp`));
  }
  console.log("✓", slug);
}
