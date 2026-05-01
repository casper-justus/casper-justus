import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/casper-justus",  // your repo name
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
