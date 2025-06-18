import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { logout } from "~/lib/auth.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  return logout(request);
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return logout(request);
};