/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "cloudinary.com",
      "images.unsplash.com",
      "tailwindui.com",
    ],
    minimumCacheTTL: 7884000,
  },
};

module.exports = nextConfig;
