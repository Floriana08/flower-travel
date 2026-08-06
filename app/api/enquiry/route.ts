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

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as {
      name?: string;
      email?: string;
      destinations?: string;
      dates?: string;
      flexibility?: string;
      travellers?: string;
      tripLength?: string;
      budget?: string;
      pace?: string;
      interests?: string;
      accommodation?: string;
      tripType?: string;
      helpWith?: string;
      howHeard?: string;
      priorities?: string;
      notes?: string;
    };

    const name = payload.name?.trim() ?? "";
    const email = payload.email?.trim() ?? "";
    const destinations = payload.destinations?.trim() ?? "";

    if (!name || !email || !destinations) {
      return Response.json(
        { error: "name, email, and destinations are required" },
        { status: 400 },
      );
    }

    const db = getDb();
    const [enquiry] = await db
      .insert(enquiries)
      .values({
        name,
        email,
        destinations,
        dates: payload.dates?.trim() ?? "",
        flexibility: payload.flexibility?.trim() ?? "",
        travellers: payload.travellers?.trim() ?? "",
        tripLength: payload.tripLength?.trim() ?? "",
        budget: payload.budget?.trim() ?? "",
        pace: payload.pace?.trim() ?? "",
        interests: payload.interests?.trim() ?? "",
        accommodation: payload.accommodation?.trim() ?? "",
        tripType: payload.tripType?.trim() ?? "",
        helpWith: payload.helpWith?.trim() ?? "",
        howHeard: payload.howHeard?.trim() ?? "",
        priorities: payload.priorities?.trim() ?? "",
        notes: payload.notes?.trim() ?? "",
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
