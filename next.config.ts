import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: process.env.NODE_ENV === "production" ? "/joshcourtney.com/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
