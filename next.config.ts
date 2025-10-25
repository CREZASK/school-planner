import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  // Development-time proxy to avoid CORS issues when the API server
  // is on a different origin. Calls to /api/:path* will be forwarded
  // to the backend defined below.
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://10.0.20.102:8080/webapp/api/:path*",
      },
    ];
  },
};

export default nextConfig;
