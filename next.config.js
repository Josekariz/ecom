/** @type {import('next').NextConfig} */
const nextConfig = {
  //allow urls from unsplash and others, add below.
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "lh3.googleusercontent.com" },
      { hostname: "plus.unsplash.com" },
    ],
  },
  //enable server action
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
