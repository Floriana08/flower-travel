import { getDb } from "../../../db";
import { newsletterSignups } from "../../../db/schema";

function toRouteErrorMessage(error: unknown) {
  const message = error instanceof Error ? error.message : "Unexpected error";
  const detail =
    error instanceof Error && error.cause instanceof Error
      ? error.cause.message
      : "";
  const combined = `${message}\n${detail}`;

  if (
    combined.includes("no such table") ||
    combined.includes('from "newsletter_signups"')
  ) {
    return "The newsletter_signups table is unavailable. Generate the migration locally with `npm run db:generate`, then apply it to the D1 database bound to this Worker.";
  }

  // A duplicate email is not really an error from the visitor's point of
  // view — they're already on the list.
  if (combined.includes("UNIQUE constraint failed")) {
    return "ALREADY_SUBSCRIBED";
  }

  return message;
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as { email?: string; source?: string };
    const email = payload.email?.trim() ?? "";
    const source = payload.source?.trim() || "newsletter";

    if (!email) {
      return Response.json({ error: "email is required" }, { status: 400 });
    }

    const db = getDb();
    const [signup] = await db
      .insert(newsletterSignups)
      .values({ email, source })
      .returning();

    return Response.json({ signup }, { status: 201 });
  } catch (error) {
    const message = toRouteErrorMessage(error);

    if (message === "ALREADY_SUBSCRIBED") {
      return Response.json({ alreadySubscribed: true }, { status: 200 });
    }

    return Response.json({ error: message }, { status: 500 });
  }
}
