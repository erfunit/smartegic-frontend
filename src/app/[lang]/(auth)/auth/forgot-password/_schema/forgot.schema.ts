import { z } from "zod";

export const ForgotSchema = z.object({
    email: z.string().email("please enter a valid email"),
    // password: z.string().min(8, "password must be 8 or more characters"),
});

export type ForgotSchemaType = z.infer<typeof ForgotSchema>;
