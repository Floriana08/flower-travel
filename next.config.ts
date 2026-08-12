import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/itineraries",
        destination: "/destinations",
        permanent: true,
      },
      {
        source: "/routes",
        destination: "/destinations",
        permanent: true,
      },
      {
        source: "/journeys",
        destination: "/destinations",
        permanent: true,
      },
      {
        source: "/journeys/italy",
        destination: "/destinations/italy",
        permanent: true,
      },
      {
        source: "/journeys/portugal",
        destination: "/destinations/portugal",
        permanent: true,
      },
      {
        source: "/journeys/spain",
        destination: "/destinations/spain",
        permanent: true,
      },
      {
        source: "/travel-consultations",
        destination: "/plan-a-trip",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/plan-a-trip",
        permanent: true,
      },
      {
        source: "/community",
        destination: "/#letters",
        permanent: true,
      },
      {
        source: "/club",
        destination: "/#letters",
        permanent: true,
      },
      {
        source: "/journal/where-to-stay-in-lisbon",
        destination: "/journal/where-to-stay-lisbon",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
