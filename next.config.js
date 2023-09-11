/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  useFileSystemPublicRoutes: true,
  images: {
    domains: ["dev-mon3m.d-medge.com"],
    // loader: "custom",
  },
};

module.exports = nextConfig;
