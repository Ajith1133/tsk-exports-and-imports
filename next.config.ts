import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: 'export',

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tskexportsandimports.com",
      },
    ],
  },
};

export default nextConfig;