export interface ILocation {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

export interface IUser {
  id: number;
  name: string;
}

export enum ITripState {
  OPEN = "open",
  CLOSED = "closed",
  CANCELLED = "cancelled",
}

export interface ITrip {
  id: number;
  creator: IUser;
  origin: ILocation;
  destination: ILocation;
  departure_time: string;
  state: ITripState;
  passengers: IUser[];
  number_of_seats: number;
}

export interface IResponse<T> {
  previous: string | null;
  next: string | null;
  count: number;
  results: T[];
}
