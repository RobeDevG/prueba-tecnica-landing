import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   output: "export",
  reactStrictMode: false,
  distDir: "dist",
  trailingSlash: true,
};

export default nextConfig;
