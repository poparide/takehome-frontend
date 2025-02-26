import { formatISO, add } from "date-fns";
import { ITrip, ITripState, IResponse } from "../../../types";
import { userAlice, userBob, userCharlie } from "../users/[userId]+api";
import {
  locationKitchener,
  locationMontreal,
  locationToronto,
} from "../locations/index+api";

export const tripOne: ITrip = {
  id: 1,
  creator: userAlice,
  origin: locationToronto,
  destination: locationMontreal,
  departure_time: formatISO(add(new Date(), { days: 5 })),
  state: ITripState.OPEN,
  passengers: [userBob],
  number_of_seats: 3,
};

export const tripTwo: ITrip = {
  id: 2,
  creator: userBob,
  origin: locationMontreal,
  destination: locationKitchener,
  departure_time: formatISO(add(new Date(), { days: 10 })),
  state: ITripState.OPEN,
  passengers: [userCharlie],
  number_of_seats: 2,
};

export const tripThree: ITrip = {
  id: 3,
  creator: userCharlie,
  origin: locationKitchener,
  destination: locationToronto,
  departure_time: formatISO(add(new Date(), { days: 15 })),
  state: ITripState.OPEN,
  passengers: [userAlice],
  number_of_seats: 1,
};

export const tripFour: ITrip = {
  id: 4,
  creator: userAlice,
  origin: locationToronto,
  destination: locationMontreal,
  departure_time: formatISO(add(new Date(), { days: 1 })),
  state: ITripState.OPEN,
  passengers: [],
  number_of_seats: 3,
};

export const trips = [tripOne, tripTwo, tripThree, tripFour];

export function GET(request: Request): Response {
  const responseData: IResponse<ITrip> = {
    previous: null,
    next: null,
    count: trips.length,
    results: trips.sort((a, b) =>
      a.departure_time.localeCompare(b.departure_time)
    ),
  };

  return Response.json(responseData);
}
