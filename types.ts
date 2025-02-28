export interface ILocation {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

export interface IUser {
  id: number;
  name: string;
  is_verified: boolean;
  stats: {
    avg_rating: number;
    trips_driven: number;
    trips_taken: number;
  };
}

export interface IVehicle {
  id: number;
  owner: number;
  make: string;
  model: string;
  year: number;
}

export enum ITripState {
  OPEN = "open",
  CLOSED = "closed",
  CANCELLED = "cancelled",
}

export interface ITrip {
  id: number;
  creator: IUser;
  vehicle: IVehicle;
  description: string;
  origin: ILocation;
  destination: ILocation;
  departure_time: string;
  state: ITripState;
  passengers: IUser[];
  number_of_seats: number;
  price_per_seat: string;
}

export interface IResponse<T> {
  previous: string | null;
  next: string | null;
  count: number;
  results: T[];
}
