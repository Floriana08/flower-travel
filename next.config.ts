import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/itineraries",
        destination: "/journeys",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
