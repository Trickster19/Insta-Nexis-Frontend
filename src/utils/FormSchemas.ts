
import { z } from "zod"
const loginSchema = z.object({
    username: z.string()
      .min(3, { message: "Username must be at least 3 characters long" })
      .max(30, { message: "Username must be at most 30 characters long" })
,  
    password: z.string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .max(128, { message: "Password must be at most 128 characters long" })
      .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
      .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
      .regex(/[0-9]/, { message: "Password must contain at least one number" })
      .regex(/[\W_]/, { message: "Password must contain at least one special character (e.g., !@#$%)" })
  });
   const registrationSchema = z.object({
    name: z
      .string()
      .min(2, { message: "Name must be at least 2 characters" })
      .max(50, { message: "Name must not exceed 50 characters" })
      .regex(/^[a-zA-Z\s]+$/, { message: "Name can only contain letters and spaces" }),
  
    companyName: z
      .string()
      .min(2, { message: "Company name must be at least 2 characters" })
      .max(100, { message: "Company name must not exceed 100 characters" })
      .regex(/^[a-zA-Z0-9\s&]+$/, { message: "Company name can only contain letters, numbers, spaces, and special characters (&)" }),
  
    username: z
      .string()
      .min(3, { message: "Username must be at least 3 characters" })
      .max(30, { message: "Username must not exceed 30 characters" })
      ,
    email: z
      .string()
      .email({ message: "Invalid email address" }),
  
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
      .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
      .regex(/[0-9]/, { message: "Password must contain at least one number" })
      .regex(/[@$!%*?&]/, { message: "Password must contain at least one special character (@, $, !, %, *, ?, &)" }),
  
    confirmPassword: z
      .string()
      .min(8, { message: "Confirm Password must be at least 8 characters" })
      
  }).refine((val) => val.confirmPassword
  === val.password, {
    message: "Passwords don't match",
    path: ["confirmPassword"]
  });

  export  {loginSchema,registrationSchema};