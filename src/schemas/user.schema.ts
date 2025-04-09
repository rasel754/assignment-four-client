import { z } from "zod";

export const userRegistrationValidation = z.object({
  name: z.string({ required_error: "Name is required" }),
  password: z.string({ required_error: "Password is required" }),
  email: z.string({ required_error: "Email is required" }).email(),
 
});

export const userLoginValidation = z.object({
  email: z.string({ required_error: "Email is required" }).email(),
  password: z.string({ required_error: "Password is required" }),
});
