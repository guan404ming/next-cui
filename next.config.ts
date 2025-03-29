import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@tldraw/tldraw"],
  },
};

export default nextConfig;
