/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/sln.js",
        destination: "https://cdn.seline.so/seline.js",
      },
      {
        source: "/_sln/:path*",
        destination: "https://api.seline.so/:path*",
      },
    ];
  },
};

export default nextConfig;
