import {z} from "zod"

export const userSignupSchema = z.object({
    email : z.string().pipe(email({message:"Invalid address format"})),
    password: z.string().min(6,{message:"Password at least must be 6 characters"}),
    firstName: z.string().min(1,{message:"first name is required"}),
    lastName: z.string().optional()
});

export const signinSchema = z.object({
    email:z.string().pipe(email()),
    password:z.string()
});

export const adminSignupSchema = z.object({
    email : z.string().pipe(email({message:"Invalid email address format"})),
    password : z.string().min(6,{message:"Password must be of 6 characters"}),
    firstName: z.string().min(1,{message:"First Name is required"}),
    lastName : z.string().optional()
})
