import { ogCard, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "Mohamed Abdelmoniem, Senior Frontend Engineer and Team Lead";

export default function Image() {
  return ogCard({
    eyebrow: "Senior Frontend Engineer & Team Lead",
    title: "Design systems at national scale. Products, end to end.",
    footer: "mon3m.vercel.app",
  });
}
