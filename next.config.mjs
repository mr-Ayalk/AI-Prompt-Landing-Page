/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ["1h3.googleusercontent.com"],
  },
  webpack(config) {
    config.experimentals = {
      ...config.experimentals,
      topLevelAwait: true,
    };
    return config;
  },
};

module.exports = nextConfig;
