import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    // Old v1 routes, kept so existing links and search results still land somewhere useful.
    return [
      { source: "/works", destination: "/#work", permanent: true },
      { source: "/works/:id", destination: "/#work", permanent: true },
      { source: "/blog", destination: "/", permanent: true },
      { source: "/blog/:id", destination: "/", permanent: true },
      { source: "/about", destination: "/#experience", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
      { source: "/work", destination: "/#work", permanent: false },
      { source: "/files/Mohamed_A.El-moniem.pdf", destination: "/Mohamed-Abdelmoniem-CV.pdf", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
