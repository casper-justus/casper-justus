import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/casper-justus",   // ← add this
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
