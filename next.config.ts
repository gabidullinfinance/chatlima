import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },

  // Optimize for development
  reactStrictMode: true,
  allowedDevOrigins: ['195.58.37.113', '*.195.58.37.113'],
  // Reduce source map size in development
  productionBrowserSourceMaps: false,
  output: 'standalone',
  // TypeScript and ESLint optimizations
  typescript: {
    // During development, you might want to temporarily set this to true
    // to skip type checking for faster builds
    ignoreBuildErrors: false,
  },
  eslint: {
    // During development builds, you might want to temporarily set this to true
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
