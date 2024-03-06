import { z } from "zod";

const authSchema = z.object({
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters long",
    })
    .max(25, {
      message: "Password must be less than 25 characters long",
    }),
  email: z.string().email(),
});

export default authSchema;
export type TAuthSchema = z.infer<typeof authSchema>;
