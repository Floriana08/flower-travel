import type { Metadata } from "next";
import Link from "next/link";
import { SignInForm } from "./sign-in-form";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to the Altrove member area with a secure email link.",
  alternates: {
    canonical: "https://altrove.studio/sign-in",
  },
};

export default function SignInPage() {
  return (
    <main className="sign-in-page section-shell page-top">
      <p className="eyebrow">Members</p>
      <h1 className="display-title">Sign in to Altrove</h1>
      <p className="lede">
        Enter the email linked to your membership. We&rsquo;ll send a secure
        login link — no password required.
      </p>
      <SignInForm />
      <p className="sign-in-foot">
        Not a member yet?{" "}
        <Link className="text-link" href="/membership">
          Join Founding Membership
        </Link>
      </p>
    </main>
  );
}
