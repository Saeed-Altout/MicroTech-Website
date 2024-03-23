"use server";

import axios, { AxiosRequestConfig } from "axios";
import { cookies } from "next/headers";

export const refresh = async () => {
  const cookiesList = cookies();
  const refreshToken = cookiesList.get("next__refresh_token");

  const config: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${refreshToken?.value}`,
    },
  };

  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_REFRESH}`,
      config
    );

    cookiesList.set("next__token", res.data.data.token);
    cookiesList.set("next__refresh_token", res.data.data.refresh_token);
  } catch (error) {}
};
