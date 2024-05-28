import { z }  from 'zod';

export const loginFormData = z.object({
    emailId: z.string().email({message: "Invalid username/email address"}),
    password: z.string().min(8, { message: "Password is too small" }).max(20,{ message: "Password is too large" })
})

export const signupFormData = z.object({
    firstName:z.string().min(2,{ message: "First name is too small" }).max(20,{ message: "First name is too large" }),
    lastName:z.string().min(2,{ message: "Last name is too small" }).max(20,{ message: "Last name is too large" }),
    emailId: z.string().email({message: "Invalid username/email address"}),
    password: z.string().min(8, { message: "Password is too small" }).max(20,{ message: "Password is too large" }),
})