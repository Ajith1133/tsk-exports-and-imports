import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tskexportsandimports.com",
      },
    ],
  },
};

export default nextConfig;