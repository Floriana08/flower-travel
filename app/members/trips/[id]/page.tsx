import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { demoTrips } from "../../demo-data";

type PageProps = { params: Promise<{ id: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const trip = demoTrips.find((item) => item.id === id);
  return {
    title: trip ? `${trip.title} trip` : "Trip",
    robots: { index: false, follow: false },
  };
}

const sampleItems = [
  {
    type: "Stay",
    title: "Verride Palácio Santa Catarina",
    note: "Base for the stay — walkable to Chiado.",
  },
  {
    type: "Eat",
    title: "Faz Frio",
    note: "Book ahead for dinner.",
  },
  {
    type: "Note",
    title: "Leave Tuesday afternoon open",
    note: "Rhythm matters more than covering every miradouro.",
  },
];

export default async function MemberTripDetailPage({ params }: PageProps) {
  const { id } = await params;
  const trip = demoTrips.find((item) => item.id === id);
  if (!trip) notFound();

  return (
    <main className="members-page">
      <p className="eyebrow">{trip.status}</p>
      <h1 className="display-title">{trip.title}</h1>
      <p className="lede">
        {trip.destination} · {trip.dates}
      </p>
      <ol className="members-trip-items">
        {sampleItems.map((item) => (
          <li key={item.title}>
            <p className="eyebrow">{item.type}</p>
            <h2>{item.title}</h2>
            <p>{item.note}</p>
          </li>
        ))}
      </ol>
      <p>
        <Link className="text-link" href="/members/trips">
          Back to trips
        </Link>
      </p>
    </main>
  );
}
