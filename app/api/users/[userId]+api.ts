import { IUser } from "@/types";

export const userAlice: IUser = {
  id: 1,
  name: "Alice",
};

export const userBob: IUser = {
  id: 2,
  name: "Bob",
};

export const userCharlie: IUser = {
  id: 3,
  name: "Charlie",
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
