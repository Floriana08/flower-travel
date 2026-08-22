import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = (await request.json()) as Record<string, unknown>;
  const destination = String(payload.destination || "").trim();
  const message = String(payload.message || "").trim();

  if (!destination || !message) {
    return NextResponse.json(
      { error: "destination and message are required" },
      { status: 400 },
    );
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (url && serviceKey) {
    const response = await fetch(`${url}/rest/v1/travel_requests`, {
      method: "POST",
      headers: {
        apikey: serviceKey,
        Authorization: `Bearer ${serviceKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        destination,
        start_date: String(payload.dates || ""),
        travellers: String(payload.travellers || ""),
        interests: String(payload.interests || ""),
        accommodation: String(payload.accommodation || ""),
        message,
        status: "new",
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      return NextResponse.json(
        { error: detail || "Could not save request" },
        { status: 500 },
      );
    }
  }

  return NextResponse.json({ ok: true });
}
