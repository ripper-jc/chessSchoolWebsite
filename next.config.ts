import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const nextConfig: NextConfig = {
  /* config options here */
  basePath: isProd ? "/chess-school-website-seven.vercel.app" : "",
  output: "export",
};

export default nextConfig;
