import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // assetPrefix: process.env.NODE_ENV === "production" ? "/joshcourtney.com/" : "",
  assetPrefix: isProd ? "/" : "",
  images: {
    unoptimized: true,
    loader: "default",
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    // contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
