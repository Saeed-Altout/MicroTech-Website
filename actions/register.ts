"use server";

import * as z from "zod";
import axios from "axios";
import { cookies } from "next/headers";

import { registerForm } from "@/schema";
import { onError } from "@/lib/error";
export const register = async (values: z.infer<typeof registerForm>) => {
  const cookiesList = cookies();

  const validatedFields = registerForm.safeParse(values);
  if (!validatedFields.success) return { error: "Invalid fields" };

  const { username, email, password } = validatedFields.data;

  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_REGISTER}`, {
      user_name: username,
      email: email,
      password: password,
    });

    cookiesList.set("next__username", res.data.data.user_name);
    cookiesList.set("next__email", res.data.data.email);
    cookiesList.set("next__token", res.data.data.token);
    cookiesList.set("next__refresh_token", res.data.data.refresh_token);

    return { success: "Success." };
  } catch (error) {
    const message = onError(error);
    return { error: message };
  }
};
