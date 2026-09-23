import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogSize = { width: 1200, height: 630 };

async function fonts() {
  const dir = join(process.cwd(), "assets/fonts");
  const [regular, semibold, mono] = await Promise.all([
    readFile(join(dir, "ibm-plex-sans-latin-400-normal.woff")),
    readFile(join(dir, "ibm-plex-sans-latin-600-normal.woff")),
    readFile(join(dir, "ibm-plex-mono-latin-400-normal.woff")),
  ]);
  return [
    { name: "Plex", data: regular, weight: 400 as const, style: "normal" as const },
    { name: "Plex", data: semibold, weight: 600 as const, style: "normal" as const },
    { name: "Mono", data: mono, weight: 400 as const, style: "normal" as const },
  ];
}

/** Shared social card: pine panel, big title, mono footer line. */
export async function ogCard({ eyebrow, title, footer }: { eyebrow: string; title: string; footer: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#eef0ea",
          padding: 64,
          fontFamily: "Plex",
          color: "#121a16",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: "Mono", fontSize: 24, color: "#66716a" }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "#1c4a3c" }} />
          {eyebrow}
        </div>
        <div style={{ display: "flex", fontSize: title.length > 40 ? 76 : 96, fontWeight: 600, lineHeight: 1.02, letterSpacing: -3, maxWidth: 1040 }}>
          {title}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid #121a16",
            paddingTop: 24,
            fontSize: 28,
          }}
        >
          <span style={{ fontWeight: 600 }}>Mohamed Abdelmoniem</span>
          <span style={{ fontFamily: "Mono", fontSize: 22, color: "#1c4a3c" }}>{footer}</span>
        </div>
      </div>
    ),
    { ...ogSize, fonts: await fonts() },
  );
}
