import * as z from "zod";
export const registerForm = z.object({
  username: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(3),
});
export const loginForm = z.object({
  email: z.string().email(),
  password: z.string().min(3),
});
export const formSchema = z.object({
  fullName: z.string(),
  email: z.string(),
  phone: z.string(),
  inquiryType: z.string(),
  media: z.string(),
  message: z.string(),
});
