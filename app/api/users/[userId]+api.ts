import { IUser } from "@/types";

export const userAlice: IUser = {
  id: 1,
  name: "Alice",
  is_verified: true,
  stats: {
    avg_rating: 4.5,
    trips_driven: 10,
    trips_taken: 5,
  },
};

export const userBob: IUser = {
  id: 2,
  name: "Bob",
  is_verified: false,
  stats: {
    avg_rating: 3.5,
    trips_driven: 5,
    trips_taken: 10,
  },
};

export const userCharlie: IUser = {
  id: 3,
  name: "Charlie",
  is_verified: true,
  stats: {
    avg_rating: 5,
    trips_driven: 20,
    trips_taken: 20,
  },
};

export const users = [userAlice, userBob, userCharlie];

export function GET(
  request: Request,
  { userId }: Record<string, string>
): Response {
  const user = users.find((user) => user.id === Number(userId));

  if (!user) {
    return new Response("User not found", { status: 404 });
  }

  return Response.json(user);
}
