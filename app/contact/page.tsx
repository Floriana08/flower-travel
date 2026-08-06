import { redirect } from "next/navigation";

/** One conversion path — contact now goes through Plan with Altrove. */
export default function ContactRedirect() {
  redirect("/plan-a-trip");
}
