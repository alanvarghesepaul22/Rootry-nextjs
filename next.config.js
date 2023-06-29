/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
    domains: ["cdn2.iconfinder.com","cdn3.iconfinder.com"],
  },
};

module.exports = nextConfig;
