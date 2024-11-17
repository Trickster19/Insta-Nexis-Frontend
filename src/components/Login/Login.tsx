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
import { useNavigate } from "react-router-dom";

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
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-xl min-h-[500px] p-12 rounded-lg shadow-xl bg-transparent"
    >
      {/* Login Heading */}
      <h2 className="text-white text-3xl font-semibold text-center mb-8">
        Login
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Username Field */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="pt-6">
                {/* Label with White Text for Contrast */}
                <FormLabel className="text-white font-semibold text-xl">
                  Username
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your username"
                    {...field}
                    className="p-6 rounded-lg bg-white border border-gray-300 shadow-sm focus:ring-[#ff7c00] focus:border-[#ff7c00] text-[#0f2a54]"
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
              <FormItem className="pb-4">
                {/* Label with White Text for Contrast */}
                <FormLabel className="text-white font-semibold text-xl">
                  Password
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="Enter your password"
                      {...field}
                      type="password"
                      className="p-6 bg-white rounded-lg border border-gray-300 shadow-sm focus:ring-[#ff7c00] focus:border-[#ff7c00] text-[#0f2a54]"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button with Margin */}
          <Button
            type="submit"
            className="w-full p-4 py-6  bg-[#ff7c00] text-white font-semibold rounded-lg shadow-md hover:bg-[#e65100] focus:ring-2 focus:ring-[#ff7c00] focus:ring-offset-2 " // Added mt-8 for margin-top
          >
            Submit
          </Button>
        </form>
      </Form>
    </motion.div>
  );
};
