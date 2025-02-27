import { locations } from "./index+api";

export function GET(
  request: Request,
  { locationId }: Record<string, string>
): Response {
  const location = locations.find(
    (location) => location.id === Number(locationId)
  );

  if (!location) {
    return new Response("Location not found", { status: 404 });
  }

  return Response.json(location);
}
