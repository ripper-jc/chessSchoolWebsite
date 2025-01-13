import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const nextConfig: NextConfig = {
  /* config options here */
  basePath: isProd ? "/chessSchoolWebsite" : "",
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true, // Add this line to disable image optimization
  },
};

export default nextConfig;
