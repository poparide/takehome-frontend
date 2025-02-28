import { IVehicle, IResponse } from "../../../types";
import { userAlice, userBob, userCharlie } from "../users/[userId]+api";

export const vehicleOne: IVehicle = {
  id: 1,
  owner: userAlice.id,
  make: "Toyota",
  model: "Corolla",
  year: 2015,
};

export const vehicleTwo: IVehicle = {
  id: 2,
  owner: userBob.id,
  make: "Honda",
  model: "Civic",
  year: 2018,
};

export const vehicleThree: IVehicle = {
  id: 3,
  owner: userCharlie.id,
  make: "Ford",
  model: "F150",
  year: 2020,
};

export const vehicles = [vehicleOne, vehicleTwo, vehicleThree];

export function GET(request: Request): Response {
  const requestUrl = new URL(request.url);
  const ownerId = requestUrl.searchParams.get("owner_id");

  if (!ownerId) {
    return Response.json({ error: "Missing owner_id" }, { status: 400 });
  }

  const results = vehicles.filter(
    (vehicle) => vehicle.owner === Number(ownerId)
  );

  const responseData: IResponse<IVehicle> = {
    previous: null,
    next: null,
    count: results.length,
    results,
  };

  return Response.json(responseData);
}
