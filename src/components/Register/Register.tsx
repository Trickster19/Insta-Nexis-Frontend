import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { motion } from "framer-motion";
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
import { ChevronLeft, ChevronRight, HandMetal } from "lucide-react";
import { Link } from "react-router-dom";

// Validation schema for both steps
const registrationSchemaStep1 = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

const registrationSchemaStep2 = z.object({
  name: z.string().min(1, "Name is required"),
  companyName: z.string().optional(),
  email: z.string().email("Invalid email address"),
});

type Step1FormValues = z.infer<typeof registrationSchemaStep1>;
type Step2FormValues = z.infer<typeof registrationSchemaStep2>;

export const Register = () => {
  const [currentStep, setCurrentStep] = useState(1); // Track current step

  // Step 1 form
  const step1Form = useForm<Step1FormValues>({
    resolver: zodResolver(registrationSchemaStep1),
    defaultValues: { username: "", password: "" },
  });

  // Step 2 form
  const step2Form = useForm<Step2FormValues>({
    resolver: zodResolver(registrationSchemaStep2),
    defaultValues: { name: "", companyName: "", email: "" },
  });

  // Submit handlers
  const handleStep1Submit = (data: Step1FormValues) => {
    console.log("Step 1 Data: ", data);
    setCurrentStep(2); // Move to step 2
  };

  const handleStep2Submit = (data: Step2FormValues) => {
    console.log("Step 2 Data: ", data);
    // Combine data from both steps and submit
    console.log("Combined Data: ", {
      ...step1Form.getValues(),
      ...data,
    });
  };

  return (
    <>
      {/* Top-right Login Link */}
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.01, ease: "easeOut" }}
        className="absolute top-4 right-4 text-sm"
      >
        <Link
          to="/login"
          className="no-underline uppercase flex items-center text-sm text-[#ff7c00] hover:text-[#e65100] font-semibold"
        >
          Login
          <ChevronRight size={17} />
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-2xl min-h-[500px] mx-auto p-6"
      >
        <Form {...(currentStep === 1 ? step1Form : step2Form)}>
          {currentStep === 1 && (
            <form
              onSubmit={step1Form.handleSubmit(handleStep1Submit)}
              className="space-y-6"
            >
              <h2 className="text-center text-2xl font-semibold text-[#0f2a54] mb-4">
                Step 1: Login Details
              </h2>

              {/* Username Field */}
              <FormField
                control={step1Form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#0f2a54] font-medium">
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
                control={step1Form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#0f2a54] font-medium">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your password"
                        {...field}
                        type="password"
                        className="w-full p-5 rounded-sm bg-white border border-gray-300 focus:ring-2 focus:ring-[#ff7c00] focus:border-[#ff7c00] text-[#0f2a54]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Next Step Button */}
              <div className="pt-8">
                <Button
                  type="submit"
                  className="w-full py-6 bg-[#ff7c00] text-white font-semibold rounded-md hover:bg-[#e65100] focus:ring-2 focus:ring-[#ff7c00] focus:ring-offset-2"
                >
                  Next Step
                </Button>
              </div>
            </form>
          )}

          {currentStep === 2 && (
            <form
              onSubmit={step2Form.handleSubmit(handleStep2Submit)}
              className="space-y-6"
            >
              <h2 className="text-center text-2xl font-semibold text-[#0f2a54] mb-4">
                Step 2: Additional Details
              </h2>

              {/* Name Field */}
              <FormField
                control={step2Form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#0f2a54] font-medium">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your name"
                        {...field}
                        className="w-full p-5 rounded-sm bg-white border border-gray-300 focus:ring-2 focus:ring-[#ff7c00] focus:border-[#ff7c00] text-[#0f2a54]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Company Name Field */}
              <FormField
                control={step2Form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#0f2a54] font-medium">
                      Company Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your company name"
                        {...field}
                        className="w-full p-5 rounded-sm bg-white border border-gray-300 focus:ring-2 focus:ring-[#ff7c00] focus:border-[#ff7c00] text-[#0f2a54]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email Field */}
              <FormField
                control={step2Form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#0f2a54] font-medium">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        {...field}
                        className="w-full p-5 rounded-sm bg-white border border-gray-300 focus:ring-2 focus:ring-[#ff7c00] focus:border-[#ff7c00] text-[#0f2a54]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setCurrentStep(1)}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft size={18} />
                  Back
                </Button>
                <Button
                  type="submit"
                  className="py-4 w-48 bg-[#ff7c00] text-white font-semibold rounded-sm hover:bg-[#e65100]"
                >
                  Submit
                  <HandMetal size={40} />
                </Button>
              </div>
            </form>
          )}
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
