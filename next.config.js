/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

const nextConfig = withPWA({
  reactStrictMode: true,
  experimental: {
    esmExternals: "loose",
    serverComponentsExternalPackages: ["mongoose"],
    serverActions: true,
  },
//   async redirects() {
//     return [
//       {
//         source: "/",
//         destination: "/login",
//         permanent: true,
//       },
//     ];
//   },
});

module.exports = nextConfig;
