import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/itineraries",
        destination: "/journeys",
        permanent: true,
      },
      {
        source: "/destinations",
        destination: "/journeys",
        permanent: true,
      },
      {
        source: "/destinations/italy",
        destination: "/journeys/italy",
        permanent: true,
      },
      {
        source: "/destinations/portugal",
        destination: "/journeys/portugal",
        permanent: true,
      },
      {
        source: "/destinations/spain",
        destination: "/journeys/spain",
        permanent: true,
      },
      {
        source: "/destinations/lisbon",
        destination: "/journeys/portugal",
        permanent: true,
      },
      {
        source: "/destinations/madeira",
        destination: "/journeys/portugal",
        permanent: true,
      },
      {
        source: "/destinations/naples",
        destination: "/journeys/italy",
        permanent: true,
      },
      {
        source: "/destinations/amalfi-coast",
        destination: "/journeys/italy",
        permanent: true,
      },
      {
        source: "/destinations/rome",
        destination: "/journeys/italy",
        permanent: true,
      },
      {
        source: "/destinations/andalusia",
        destination: "/journeys/spain",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
