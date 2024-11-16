import { registrationSchema } from "@/utils/FormSchemas" // Import registration schema
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription, // Import FormDescription
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { motion } from "framer-motion"

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false)

  const form = useForm<z.infer<typeof registrationSchema>>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      name: "",
      companyName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  const onSubmit = (data: z.infer<typeof registrationSchema>) => {
    console.log(data)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#e3e4de]   py-24">
      {/* Form Card with Dark Blue Background and Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-2xl bg-[#0f2a54] p-6 pt-10 pb-8 rounded-lg shadow-xl border border-gray-200"
      >
        {/* Register Heading */}
        <h2 className="text-white text-3xl font-semibold text-center mb-4">Register</h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" pt-8 space-y-1">
            {/* Name Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="pt-4">
                  <FormLabel className="text-white font-semibold text-xl">Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your name"
                      {...field}
                      className="p-3 rounded-lg bg-white border border-gray-300 shadow-sm focus:ring-[#ff7c00] focus:border-[#ff7c00] text-[#0f2a54]"
                    />
                  </FormControl>
                  <FormDescription className="text-sm text-gray-300 mt-1">
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Company Name Field */}
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem className="pt-4">
                  <FormLabel className="text-white font-semibold text-xl">Company Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your company name"
                      {...field}
                      className="p-3 rounded-lg bg-white border border-gray-300 shadow-sm focus:ring-[#ff7c00] focus:border-[#ff7c00] text-[#0f2a54]"
                    />
                  </FormControl>
                  <FormDescription className="text-sm text-gray-300 mt-1">
                    The name of the company you're representing.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Username Field */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="pt-4">
                  <FormLabel className="text-white font-semibold text-xl">Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your username"
                      {...field}
                      className="p-3 rounded-lg bg-white border border-gray-300 shadow-sm focus:ring-[#ff7c00] focus:border-[#ff7c00] text-[#0f2a54]"
                    />
                  </FormControl>
                  <FormDescription className="text-sm text-gray-300 mt-1">
                    Your unique username for logging in.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="pt-4">
                  <FormLabel className="text-white font-semibold text-xl">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      {...field}
                      className="p-3 rounded-lg bg-white border border-gray-300 shadow-sm focus:ring-[#ff7c00] focus:border-[#ff7c00] text-[#0f2a54]"
                    />
                  </FormControl>
                  <FormDescription className="text-sm text-gray-300 mt-1">
                    We'll use this email for account recovery.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="pb-4">
                  <FormLabel className="text-white font-semibold text-xl">Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="Enter your password"
                        {...field}
                        type={showPassword ? "text" : "password"}
                        className="p-3 bg-white rounded-lg border border-gray-300 shadow-sm focus:ring-[#ff7c00] focus:border-[#ff7c00] text-[#0f2a54]"
                      />
                      <Button
                        variant={"ghost"}
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-sm"
                      >
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </div>
                  </FormControl>
                  <FormDescription className="text-sm text-gray-300 mt-1">
                    Choose a strong password for your account.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Confirm Password Field */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="pb-4">
                  <FormLabel className="text-white font-semibold text-xl">Confirm Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="Confirm your password"
                        {...field}
                        type={showPassword ? "text" : "password"}
                        className="p-3 bg-white rounded-lg border border-gray-300 shadow-sm focus:ring-[#ff7c00] focus:border-[#ff7c00] text-[#0f2a54]"
                      />
                    </div>
                  </FormControl>
                  <FormDescription className="text-sm text-gray-300 mt-1">
                    Confirm the password you entered above.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button with Margin */}
            <Button
              type="submit"
              className="w-full p-4 mt-4  bg-[#ff7c00] text-white font-semibold rounded-lg shadow-md hover:bg-[#e65100] focus:ring-2 focus:ring-[#ff7c00] focus:ring-offset-2"
            >
              Register
            </Button>
          </form>
        </Form>
      </motion.div>
    </div>
  )
}
