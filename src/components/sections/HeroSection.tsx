import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react"; // Update the path based on your project structure
import Typewriter from "typewriter-effect";
import { HeroParallax } from "@/components/ui/hero-parallex";
import { useNavigate } from "react-router-dom";
import useAuth from "@/store";

const HeroSection = () => {
  const navigate = useNavigate();
  const products = [
    {
      title: "Moonbeam",
      link: "https://gomoonbeam.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/cursor.png",
    },
    {
      title: "Rogue",
      link: "https://userogue.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/rogue.png",
    },

    {
      title: "Editorially",
      link: "https://editorially.org",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/editorially.png",
    },
    {
      title: "Editrix AI",
      link: "https://editrix.ai",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/editrix.png",
    },
    {
      title: "Pixel Perfect",
      link: "https://app.pixelperfect.quest",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
    },

    {
      title: "Algochurn",
      link: "https://algochurn.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
    },
    {
      title: "Aceternity UI",
      link: "https://ui.aceternity.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
    },
    {
      title: "SmartBridge",
      link: "https://smartbridgetech.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
    },
    {
      title: "Renderwork Studio",
      link: "https://renderwork.studio",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
    },

    {
      title: "Creme Digital",
      link: "https://cremedigital.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
    },
    {
      title: "Golden Bells Academy",
      link: "https://goldenbellsacademy.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
    },
    {
      title: "Invoker Labs",
      link: "https://invoker.lol",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/invoker.png",
    },
    {
      title: "E Free Invoice",
      link: "https://efreeinvoice.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
    },
  ];
  const accessToken = useAuth((state) => state.accessToken);
  return (
    <HeroParallax
      products={products}
      content={
        <>
          <div className="flex-1 text-center ">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="mb-6"
            >
              <h1 className="h-30 text-5xl md:text-6xl font-extrabold text-[#ff8d3b] drop-shadow-lg uppercase mb-4 leading-tight">
                <Typewriter
                  options={{
                    strings: [
                      "Start Your Journey with Us",
                      "Build Your Future Today",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                  }}
                />
              </h1>
            </motion.div>
            <p className="text-lg md:text-xl text-[#0f2a54] mb-8">
              Empowering professionals like you to achieve your dreams. Let’s
              begin a new chapter, together.
            </p>
            {!accessToken && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
                className="mt-8 flex justify-center"
              >
                <button
                  onClick={() => navigate("/login")}
                  className="relative group overflow-hidden bg-[#0f2a54] text-white uppercase px-8 py-4 text-xl flex items-center shadow-lg transition-transform duration-300 hover:rotate-3 hover:translate-y-1"
                >
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-[#047aa3] via-[#0461cb] to-[#ff8d3b] bg-[length:200%_200%] group-hover:animate-gradient-shift"
                    style={{
                      zIndex: -1,
                    }}
                  ></span>
                  <span className="relative z-10 flex items-center">
                    Start with us
                    <ChevronRight className="ml-3" size={24} />
                  </span>
                </button>
              </motion.div>
            )}
          </div>

          <motion.div
            className="relative flex flex-col items-center gap-8 flex-1"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { delayChildren: 0.3, staggerChildren: 0.2 },
              },
            }}
          ></motion.div>
        </>
      }
    />
  );
};

export default HeroSection;
