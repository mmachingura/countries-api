import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: [],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        port: '',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '**'
      },
    ]/* config options here */
  }
};

export default nextConfig;
