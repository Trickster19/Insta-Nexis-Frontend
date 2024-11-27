import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LogoIcon from "@/assets/PostNexisLogo.png";
import { Facebook, Instagram, Mails, Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactUsSchema } from "@/utils/FormSchemas";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useContact } from "@/hooks/UseContact";

type ContactUsFormValues = z.infer<typeof contactUsSchema>;

export const Footer = () => {
  const contact = useContact();
  const form = useForm<ContactUsFormValues>({
    resolver: zodResolver(contactUsSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onContactSubmit = (data: ContactUsFormValues) => {
    contact.mutate(data);
    if (contact.isSuccess) form.reset();
  };

  return (
    <footer className="bg-gradient-to-tr from-blue-400/60 via-trasparent to-orange-400/60 text-white p-5 pt-16 md:p-1 md:pt-16   pb-8">
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 ">
        {/* Left Section: Logo and Details */}
        <div className="flex flex-col gap-8 p-4 md:p-0">
          {/* Logo Section */}
          <div className="flex flex-col items-center gap-4">
            <img
              src={LogoIcon}
              alt="Logo"
              className="w-32 h-32 rounded-full  bg-white shadow-sm"
            />
            <div className="text-center">
              <h3 className="text-lg font-bold text-blue-800 py-2">
                Instagram Meets Amazon: Where Posts Become Products
              </h3>
              <p className="text-sm text-blue-800 italic text-justify opacity-80 pt-2">
                InstaNexis seamlessly bridges the gap between Instagram and
                Amazon, transforming social media content into Amazon-compliant
                product listings. This automated tool eliminates the
                complexities of manual listings, saving sellers time and effort.
                With InstaNexis, your Instagram posts instantly become
                Amazon-ready, boosting product visibility and customer
                engagement.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className=" flex flex-col  items-center pt-4">
            <h3 className="text-lg font-semibold mb-10 text-orange-600">
              Quick Links
            </h3>
            <div className="grid grid-cols-3 gap-x-3 md:gap-x-24 gap-y-4 text-lg md:text-sm">
              <a
                href="mailto:postnexis@gmail.com"
                className="hover:text-orange-600  flex items-center gap-2"
              >
                <Mails />
                Email us
              </a>
              <a
                href="https://www.instagram.com/postnexis"
                className="hover:text-orange-600 flex items-center gap-2"
              >
                <Instagram />
                Instagram
              </a>
              <a
                href="https://www.facebook.com/postnexis"
                className="hover:text-orange-600 flex items-center gap-2"
              >
                <Facebook />
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <Card className="bg-transparent border-0 shadow-none">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-blue-800 uppercase font-[700]">
              Get in Touch
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onContactSubmit)}
                className="space-y-6"
              >
                {/* Name Field */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-sm font-medium text-gray-700">
                        Your Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter your name"
                          className="mt-1 bg-white p-3 text-blue-600"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-sm font-medium text-gray-700">
                        Your Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          className="mt-1 bg-white p-3 text-blue-600"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message Field */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-sm font-medium text-gray-700">
                        Your Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          rows={4}
                          placeholder="Enter your message"
                          className="mt-1 bg-white p-3 text-blue-600"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full uppercase  bg-blue-800 hover:bg-orange-700"
                  disabled={contact.isLoading}
                >
                  {contact.isLoading && (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  )}
                  Send Message
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </section>

      {/* Bottom Section */}
      <section className="mt-12 text-center text-base border-t-4 border-white/30 pt-6">
        <p>
          &copy; 2024 Made by{" "}
          <a
            href="https://www.linkedin.com/in/leopoldo-miranda/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-blue-950"
          >
            PostNexis
          </a>
        </p>
      </section>
    </footer>
  );
};
