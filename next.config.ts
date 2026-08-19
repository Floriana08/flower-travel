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
        destination: "/apply",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/apply",
        permanent: true,
      },
      {
        source: "/community",
        destination: "/membership",
        permanent: true,
      },
      {
        source: "/club",
        destination: "/membership",
        permanent: true,
      },
      {
        source: "/plan-a-trip",
        destination: "/apply",
        permanent: true,
      },
      {
        source: "/journal/topic/food",
        destination: "/journal/topic/eat",
        permanent: true,
      },
      {
        source: "/journal/topic/stays",
        destination: "/journal/topic/stay",
        permanent: true,
      },
      {
        source: "/journal/topic/places",
        destination: "/journal/topic/city-guides",
        permanent: true,
      },
      {
        source: "/journal/topic/culture",
        destination: "/journal/topic/travel-notes",
        permanent: true,
      },
      {
        source: "/journal/topic/how-we-travel",
        destination: "/journal/topic/travel-notes",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
