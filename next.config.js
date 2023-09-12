/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  useFileSystemPublicRoutes: true,
  env: {
    SMTP_HOST: 'smtp.gmail.com',
    SMTP_PORT: 465,
    SMTP_USERNAME: 'mohamedabdelmoniem10@gmail.com',
    SMTP_PASSWORD: 'xziu pmck vyjs vbiq',
  },
  images: {
    domains: ["dev-mon3m.d-medge.com"],
    // loader: "custom",
  },
};

module.exports = nextConfig;
