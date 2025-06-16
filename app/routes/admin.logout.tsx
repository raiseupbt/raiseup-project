import type { ActionFunctionArgs } from "@remix-run/node";
import { logout } from "~/lib/auth.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  return logout(request);
};

export const loader = async () => {
  return new Response("", { status: 404 });
};