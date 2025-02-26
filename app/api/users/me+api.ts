import { userAlice } from "./[userId]+api";

export function GET(request: Request): Response {
  return Response.json(userAlice);
}
