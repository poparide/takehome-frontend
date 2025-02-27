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

export const locationQuebecCity: ILocation = {
  id: 4,
  name: "Quebec City",
  latitude: 46.8,
  longitude: -71.2,
};

export const locationVancouver: ILocation = {
  id: 5,
  name: "Vancouver",
  latitude: 49.3,
  longitude: -123.1,
};

export const locationCalgary: ILocation = {
  id: 6,
  name: "Calgary",
  latitude: 51.0,
  longitude: -114.1,
};

export const locationEdmonton: ILocation = {
  id: 7,
  name: "Edmonton",
  latitude: 53.5,
  longitude: -113.5,
};

export const locationOttawa: ILocation = {
  id: 8,
  name: "Ottawa",
  latitude: 45.4,
  longitude: -75.7,
};

export const locationWinnipeg: ILocation = {
  id: 9,
  name: "Winnipeg",
  latitude: 49.9,
  longitude: -97.1,
};

export const locationHalifax: ILocation = {
  id: 10,
  name: "Halifax",
  latitude: 44.6,
  longitude: -63.6,
};

export const locations = [
  locationCalgary,
  locationEdmonton,
  locationHalifax,
  locationKitchener,
  locationMontreal,
  locationOttawa,
  locationQuebecCity,
  locationToronto,
  locationVancouver,
  locationWinnipeg,
];

export function GET(request: Request): Response {
  const requestUrl = new URL(request.url);
  const query = requestUrl.searchParams.has("query")
    ? String(requestUrl.searchParams.get("query"))
    : undefined;

  const results = locations
    .filter((location) => {
      if (!query) {
        return true;
      }
      return location.name.toLowerCase().includes(query.toLowerCase());
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  const responseData: IResponse<ILocation> = {
    previous: null,
    next: null,
    count: locations.length,
    results: results,
  };

  return Response.json(responseData);
}
