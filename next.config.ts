// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",        // ← THIS is what creates the /out folder
  images: {
    unoptimized: true,     // required for static export
  },
};

export default nextConfig;
