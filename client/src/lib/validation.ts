import { z }  from 'zod';

export const loginFormData = z.object({
    emailId: z.string().email({message: "Invalid username/email address"}),
    password: z.string().min(8, { message: "Password is too small" }).max(20,{ message: "Password is too large" })
})