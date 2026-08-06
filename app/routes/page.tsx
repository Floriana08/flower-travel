import { redirect } from "next/navigation";

/** Routes/Itineraries retired as a product word — see Destinations/Journeys. */
export default function RoutesIndexRedirect() {
  redirect("/destinations");
}
