import { ILocation, IResponse } from "../../../types";

export const locationToronto: ILocation = {
  id: 1,
  name: "Toronto",
  latitude: 43.7,
  longitude: -79.4,
};

export const locationMontreal: ILocation = {
  id: 2,
  name: "Montreal",
  latitude: 45.5,
  longitude: -73.6,
};

export const locationKitchener: ILocation = {
  id: 3,
  name: "Kitchener",
  latitude: 43.4,
  longitude: -80.5,
};

export const locations = [locationToronto, locationMontreal, locationKitchener];

export function GET(request: Request): Response {
  const responseData: IResponse<ILocation> = {
    previous: null,
    next: null,
    count: locations.length,
    results: locations.sort((a, b) => a.name.localeCompare(b.name)),
  };

  return Response.json(responseData);
}
