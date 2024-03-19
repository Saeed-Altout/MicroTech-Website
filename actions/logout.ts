"use server";

import axios, { AxiosRequestConfig } from "axios";
import { cookies } from "next/headers";
import { onError } from "@/lib/error";
export const logout = async () => {
  const cookiesList = cookies();
  const token = cookiesList.get("next__token");
  const config: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${token?.value}`,
    },
  };
  try {
    await axios.get(`${process.env.NEXT_PUBLIC_LOGOUT}`, config);
    cookiesList.delete("next__username");
    cookiesList.delete("next__email");
    cookiesList.delete("next__token");
    cookiesList.delete("next__refresh_token");
    return { success: "Success." };
  } catch (error) {
    const message = onError(error);
    return { error: message };
  }
};
