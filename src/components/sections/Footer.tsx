import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LogoIcon from "@/assets/PostNexisLogo.png";
import { Facebook, Instagram, Mails } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-blue-400/60 via-trasparent to-orange-400/60 text-white pt-16 pb-8">
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 ">
        {/* Left Section: Logo and Details */}
        <div className="flex flex-col gap-8">
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
            <div className="grid grid-cols-3 gap-x-24 gap-y-4 text-sm">
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
            <form className="space-y-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="mt-1 bg-white p-3 text-blue-600"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Email
                </label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="mt-1 bg-white p-3 text-blue-600"
                />
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Message
                </label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Enter your message"
                  className="mt-1 bg-white p-3 text-blue-600"
                />
              </div>

              {/* Submit Button */}
              <Button className="w-full uppercase bg-blue-800 hover:bg-orange-700">
                Submit
              </Button>
            </form>
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
