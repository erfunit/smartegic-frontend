import { z } from "zod";

export const RegisterSchema = z.object({
    email: z.string().email("please enter a valid email"),
    password: z.string().min(8, "password must be 8 or more characters"),
});

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
