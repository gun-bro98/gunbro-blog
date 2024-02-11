// next.config.js
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  experimental: {
    appDir: true,
  },
};

module.exports = withContentlayer(nextConfig);
