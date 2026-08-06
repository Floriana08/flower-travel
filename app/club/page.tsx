import { redirect } from "next/navigation";

/** The Club/Community page is now just the homepage newsletter component. */
export default function ClubRedirect() {
  redirect("/#letters");
}
