import { getDb } from "../../../db";
import { enquiries } from "../../../db/schema";

function toRouteErrorMessage(error: unknown) {
  const message = error instanceof Error ? error.message : "Unexpected error";
  const detail =
    error instanceof Error && error.cause instanceof Error
      ? error.cause.message
      : "";
  const combined = `${message}\n${detail}`;

  if (combined.includes("no such table") || combined.includes('from "enquiries"')) {
    return "The enquiries table is unavailable. Generate the migration locally with `npm run db:generate`, then apply it to the D1 database bound to this Worker.";
  }

  return message;
}

function asText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as Record<string, unknown>;

    const name = asText(payload.name);
    const email = asText(payload.email);
    const destinations = asText(payload.destinations);

    if (!name || !email || !destinations) {
      return Response.json(
        { error: "name, email, and destinations are required" },
        { status: 400 },
      );
    }

    const based = asText(payload.based);
    const tripPlanned = asText(payload.tripPlanned);
    const travellingWith = asText(payload.travellingWith) || asText(payload.travellers);
    const tripLength = asText(payload.tripLength);
    const hotelBudget = asText(payload.hotelBudget);
    const frustrating = asText(payload.frustrating);
    const takeOffPlate = asText(payload.takeOffPlate);
    const extraNotes = asText(payload.notes);
    const source = asText(payload.source) || "enquiry";

    const notes = [
      extraNotes,
      based ? `Based: ${based}` : "",
      tripPlanned ? `Trip in the next three months: ${tripPlanned}` : "",
      tripLength ? `Trip length: ${tripLength}` : "",
      hotelBudget ? `Hotel budget per night: ${hotelBudget}` : "",
      frustrating ? `Most frustrating: ${frustrating}` : "",
      takeOffPlate ? `Take off their plate: ${takeOffPlate}` : "",
      `Source: ${source}`,
    ]
      .filter(Boolean)
      .join("\n\n");

    const db = getDb();
    const [enquiry] = await db
      .insert(enquiries)
      .values({
        name,
        email,
        destinations,
        dates: asText(payload.dates),
        flexibility: based,
        travellers: travellingWith,
        tripLength: tripLength || tripPlanned,
        budget: asText(payload.budget),
        pace: asText(payload.pace),
        interests: asText(payload.interests),
        accommodation: hotelBudget || asText(payload.accommodation),
        tripType: tripPlanned || asText(payload.tripType),
        helpWith: takeOffPlate || asText(payload.helpWith),
        howHeard: source,
        priorities: frustrating || asText(payload.priorities),
        notes,
      })
      .returning();

    return Response.json({ enquiry }, { status: 201 });
  } catch (error) {
    return Response.json(
      { error: toRouteErrorMessage(error) },
      { status: 500 },
    );
  }
}
