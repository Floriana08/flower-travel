import { redirect } from "next/navigation";

/** Former Madeira first-timers note — replaced by the Lisbon restaurants piece. */
export default function MadeiraFirstTimersRedirect() {
  redirect("/journal/where-to-eat-lisbon");
}
