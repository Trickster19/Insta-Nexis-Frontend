
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
const registerSchema = z.object({
    username: z.string()
      .min(3, { message: "Username must be at least 3 characters long" })
      .max(30, { message: "Username must be at most 30 characters long" })
      .regex(/^[a-zA-Z0-9_]+$/, { message: "Username can only contain letters, numbers, and underscores" }),
  
    password: z.string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .max(128, { message: "Password must be at most 128 characters long" })
      .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
      .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
      .regex(/[0-9]/, { message: "Password must contain at least one number" })
      .regex(/[\W_]/, { message: "Password must contain at least one special character (e.g., !@#$%)" })
  });

  export  {loginSchema,registerSchema};