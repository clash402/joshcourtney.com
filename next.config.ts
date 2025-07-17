import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: process.env.NODE_ENV === "production" && process.env.GITHUB_PAGES === "true" ? "/joshcourtney.com/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
