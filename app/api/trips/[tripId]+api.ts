import { trips } from "./index+api";

export function GET(
  request: Request,
  { tripId }: Record<string, string>
): Response {
  const trip = trips.find((trip) => trip.id === Number(tripId));

  if (!trip) {
    return new Response("Trip not found", { status: 404 });
  }

  return Response.json(trip);
}
