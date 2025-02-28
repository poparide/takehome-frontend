import { formatISO, add } from "date-fns";
import { ITrip, ITripState, IResponse } from "../../../types";
import { userAlice, userBob, userCharlie } from "../users/[userId]+api";
import {
  locationKitchener,
  locationMontreal,
  locationToronto,
} from "../locations/index+api";
import { vehicleOne, vehicleTwo, vehicleThree } from "../vehicles/index+api";

export const tripOne: ITrip = {
  id: 1,
  creator: userAlice,
  vehicle: vehicleOne,
  description: "Heading back to Montreal for the weekend.",
  origin: locationToronto,
  destination: locationMontreal,
  departure_time: formatISO(add(new Date(), { days: 5 })),
  state: ITripState.OPEN,
  passengers: [userBob],
  number_of_seats: 3,
  price_per_seat: "20.00",
};

export const tripTwo: ITrip = {
  id: 2,
  creator: userBob,
  vehicle: vehicleTwo,
  description: "Heading to Kitchener for Octoberfest.",
  origin: locationMontreal,
  destination: locationKitchener,
  departure_time: formatISO(add(new Date(), { days: 10 })),
  state: ITripState.OPEN,
  passengers: [userCharlie],
  number_of_seats: 2,
  price_per_seat: "25.00",
};

export const tripThree: ITrip = {
  id: 3,
  creator: userCharlie,
  vehicle: vehicleThree,
  description: "Heading to Toronto for a concert.",
  origin: locationKitchener,
  destination: locationToronto,
  departure_time: formatISO(add(new Date(), { days: 15 })),
  state: ITripState.OPEN,
  passengers: [userAlice],
  number_of_seats: 1,
  price_per_seat: "15.00",
};

export const tripFour: ITrip = {
  id: 4,
  creator: userAlice,
  vehicle: vehicleOne,
  description: "Heading to Montreal to surf the Montreal River.",
  origin: locationToronto,
  destination: locationMontreal,
  departure_time: formatISO(add(new Date(), { days: 1 })),
  state: ITripState.OPEN,
  passengers: [],
  number_of_seats: 3,
  price_per_seat: "20.00",
};

export const trips = [tripOne, tripTwo, tripThree, tripFour];

export function GET(request: Request): Response {
  const requestUrl = new URL(request.url);
  const originId = requestUrl.searchParams.has("origin_id")
    ? Number(requestUrl.searchParams.get("origin_id"))
    : undefined;
  const destinationId = requestUrl.searchParams.has("destination_id")
    ? Number(requestUrl.searchParams.get("destination_id"))
    : undefined;
  const departureDate = requestUrl.searchParams.has("departure_date")
    ? requestUrl.searchParams.get("departure_date")
    : undefined;

  const results = trips
    // Filter trips by origin and destination
    .filter((trip) => {
      if (originId && trip.origin.id !== originId) {
        return false;
      }
      return true;
    })
    .filter((trip) => {
      if (destinationId && trip.destination.id !== destinationId) {
        return false;
      }
      return true;
    })
    // Filter trips by departure time
    .filter((trip) => {
      if (departureDate && trip.departure_time.startsWith(departureDate)) {
        return false;
      }
      return true;
    })
    // Sort trips by departure time
    .sort((a, b) => a.departure_time.localeCompare(b.departure_time));

  const responseData: IResponse<ITrip> = {
    previous: null,
    next: null,
    count: results.length,
    results,
  };

  return Response.json(responseData);
}
