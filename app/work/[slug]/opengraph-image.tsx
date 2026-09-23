import { ogCard, ogSize } from "@/lib/og";
import { getProject, projects } from "@/lib/projects";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "Case study by Mohamed Abdelmoniem";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  return ogCard({
    eyebrow: p ? `Case study · ${p.role}` : "Case study",
    title: p?.name ?? "Work",
    footer: p ? p.stack.slice(0, 3).join(" · ") : "mon3m.vercel.app",
  });
}
