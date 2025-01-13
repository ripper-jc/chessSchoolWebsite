import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true, // Add this line to disable image optimization
  },
};

export default nextConfig;
