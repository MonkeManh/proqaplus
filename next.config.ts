import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    remotePatterns: [new URL("https://test.monkemanh.com/images/**")],
    unoptimized: true,
  }
};

export default nextConfig;
