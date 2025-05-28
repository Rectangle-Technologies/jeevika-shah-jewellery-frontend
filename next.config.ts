import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "media.istockphoto.com" },
      { hostname: "jeevika-shah-bucket.s3.ap-south-1.amazonaws.com" },
    ],
  },
};

export default nextConfig;
