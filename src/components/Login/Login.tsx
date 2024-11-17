import { loginSchema } from "@/utils/FormSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { motion } from "framer-motion";
import useAuth from "@/store";
import { useNavigate, Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export const Login = () => {
  const setaccessToken = useAuth((state) => state.setAccessToken);
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    console.log(data);
    setaccessToken("Haaris");
    form.reset({
      username: "",
      password: "",
    });
    navigate("/profile");
  };

  return (
    <>
      {/* Top-right Signup Link */}
      <div className="absolute top-4 right-4 text-sm">
        <Link
          to="/register"
          className="no-underline uppercase flex items-center text-sm text-[#ff7c00] hover:text-[#e65100] font-semibold"
        >
          Sign up
          <ChevronRight size={17} />
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-2xl min-h-[500px] mx-auto p-6"
      >
        {/* Login Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#0f2a54] mb-2">
            Login to Your Account
          </h2>
          <p className="text-gray-600">
            Enter your details to access your account
          </p>
        </div>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Username Field */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#0f2a54] font-medium text-sm">
                    Username
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your username"
                      {...field}
                      className="w-full p-5 rounded-sm bg-white border border-gray-300 focus:ring-2 focus:ring-[#ff7c00] focus:border-[#ff7c00] text-[#0f2a54]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#0f2a54] font-medium text-sm">
                    Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="Enter your password"
                        {...field}
                        type="password"
                        className="w-full p-5 mt-2 bg-white rounded-sm border border-gray-300 focus:ring-2 focus:ring-[#ff7c00] focus:border-[#ff7c00] text-[#0f2a54]"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <div className="pt-8">
              <Button
                type="submit"
                className="flex w-full py-6 bg-[#ff7c00] text-white font-semibold rounded-md hover:bg-[#e65100] focus:ring-2 focus:ring-[#ff7c00] focus:ring-offset-2 transition-transform transform hover:scale-105"
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>

        {/* Terms and Conditions */}
        <div className="text-sm text-center text-gray-500 mt-6">
          By continuing, you agree to our{" "}
          <a href="#" className="text-[#ff7c00] hover:text-[#e65100] underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-[#ff7c00] hover:text-[#e65100] underline">
            Privacy Policy
          </a>
          .
        </div>
      </motion.div>
    </>
  );
};
