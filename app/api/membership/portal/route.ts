import { NextResponse } from "next/server";

async function stripeRequest(
  path: string,
  secret: string,
  body: URLSearchParams,
) {
  const response = await fetch(`https://api.stripe.com/v1/${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${secret}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });
  return response.json() as Promise<Record<string, unknown>>;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const origin = url.origin;
  const secret = process.env.STRIPE_SECRET_KEY;
  const customerId = process.env.STRIPE_DEMO_CUSTOMER_ID;

  if (!secret || !customerId) {
    return NextResponse.redirect(`${origin}/members/membership?portal=pending`);
  }

  try {
    const session = await stripeRequest(
      "billing_portal/sessions",
      secret,
      new URLSearchParams({
        customer: customerId,
        return_url: `${origin}/members/membership`,
      }),
    );
    const portalUrl = typeof session.url === "string" ? session.url : null;
    if (!portalUrl) {
      return NextResponse.redirect(`${origin}/members/membership?portal=error`);
    }
    return NextResponse.redirect(portalUrl);
  } catch {
    return NextResponse.redirect(`${origin}/members/membership?portal=error`);
  }
}
