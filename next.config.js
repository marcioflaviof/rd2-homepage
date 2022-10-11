/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    loader: "cloudinary",
    path: "https://res.cloudinary.com/ddfn8xvu3",
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
