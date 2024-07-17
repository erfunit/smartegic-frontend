import { z } from "zod";

export const RegisterSchema = z
    .object({
        password: z.string().min(8, "password must be 8 or more characters"),
        confirmPassword: z
            .string()
            .min(8, "password must be 8 or more characters")
            .optional()
            .or(z.literal("")),
        otp: z.string().length(6, "verification code must be 6 characters"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "passwords must match",
        path: ["confirmPassword"], // This will show the error on the confirmPassword field
    });

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
