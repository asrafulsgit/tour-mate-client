import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  }, 
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://tour-mate-server-swart.vercel.app/api/:path*",
      },
    ];
  },
};

export default nextConfig;
