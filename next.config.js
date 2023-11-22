/** @type {import('next').NextConfig} */
const nextConfig = {
  //allow urls from unsplash and others, add below.
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "lh3.googleusercontent.com" },
    ],
  },
  //enable server action
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
