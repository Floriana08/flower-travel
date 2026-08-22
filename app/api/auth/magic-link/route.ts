import { NextResponse } from "next/server";

/**
 * Magic-link auth via Supabase Auth REST when configured.
 * Without env, returns soft success so the UI can open the member preview.
 */
export async function POST(request: Request) {
  const body = (await request.json()) as { email?: string };
  const email = body.email?.trim();
  if (!email) {
    return NextResponse.json({ error: "Email required" }, { status: 400 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnon) {
    return NextResponse.json({
      ok: true,
      mode: "demo",
      message: "Auth provider not configured — open /members for the preview UI.",
    });
  }

  const redirectTo = `${new URL(request.url).origin}/members`;
  const response = await fetch(`${supabaseUrl}/auth/v1/otp`, {
    method: "POST",
    headers: {
      apikey: supabaseAnon,
      Authorization: `Bearer ${supabaseAnon}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      create_user: true,
      email_redirect_to: redirectTo,
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    return NextResponse.json(
      { error: detail || "Could not send login link" },
      { status: 400 },
    );
  }

  return NextResponse.json({ ok: true });
}
