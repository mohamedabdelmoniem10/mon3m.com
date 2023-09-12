/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  useFileSystemPublicRoutes: true,
  env: {
    SMTP_HOST: 'smtp.gmail.com',
    SMTP_PORT: 465,
    SMTP_USERNAME: 'mohamedabdelmoniem10@gmail.com',
    SMTP_PASSWORD: 'xziu pmck vyjs vbiq',
  }
};

module.exports = nextConfig;
