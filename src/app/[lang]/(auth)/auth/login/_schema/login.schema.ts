import { z } from "zod";

export const LoginSchema = z.object({
    email: z.string().email("please enter a valid email"),
    password: z.string().min(8, "password must be 8 or more characters"),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
