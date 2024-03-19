"use server";
import { cookies } from "next/headers";

export const auth = async () => {
  const cookiesList = cookies();
  const username = cookiesList.get("next__username");
  const email = cookiesList.get("next__email");
  const token = cookiesList.get("next__token");
  const refresh_token = cookiesList.get("next__refresh_token");
  const isLoggedIn = cookiesList.has("next__token");
  return { username, email, token, refresh_token, isLoggedIn };
};
