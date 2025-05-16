import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://c.animaapp.com/**")],
  },
};

export default nextConfig;
