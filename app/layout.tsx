import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "@fontsource/ibm-plex-sans-arabic/400.css";
import "@fontsource/ibm-plex-sans-arabic/600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "./globals.css";
import { site } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Latin display + body faces are self-hosted through next/font so they're preloaded. Arabic and mono load on demand.
const bricolage = localFont({
  src: "./fonts/bricolage.woff2",
  weight: "200 800",
  variable: "--font-bricolage",
  display: "swap",
});
const plex = localFont({
  src: [
    { path: "./fonts/plex-400.woff2", weight: "400" },
    { path: "./fonts/plex-500.woff2", weight: "500" },
    { path: "./fonts/plex-600.woff2", weight: "600" },
  ],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} · ${site.role}`,
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.role}`,
    description: site.description,
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eef0ea" },
    { media: "(prefers-color-scheme: dark)", color: "#0d1310" },
  ],
  width: "device-width",
  initialScale: 1,
};

// Applies a saved theme before paint so there's no flash. Storage can be blocked, so it's wrapped.
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}`;

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  alternateName: [site.nameAr, "Mohamed Moniem", "Mon3m"],
  jobTitle: site.role,
  url: site.url,
  image: `${site.url}/images/mohamed-abdelmoniem.webp`,
  email: `mailto:${site.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Cairo", addressCountry: "EG" },
  sameAs: [site.linkedin, site.github],
  knowsLanguage: ["ar", "en"],
  knowsAbout: [
    "Design systems",
    "Frontend architecture",
    "React",
    "Next.js",
    "Stencil.js",
    "Web Components",
    "NestJS",
    "TypeScript",
    "RTL interfaces",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${bricolage.variable} ${plex.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
      </head>
      <body className="min-h-dvh bg-mist text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-pine focus:px-4 focus:py-2 focus:text-pine-ink"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
