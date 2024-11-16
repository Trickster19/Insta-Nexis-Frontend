import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import BackgroundImage from "@/assets/hero.svg"; // Update the path based on your project structure
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  return (
    <section
      className="relative flex items-center justify-center w-full h-screen px-10 py-7"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0461cbbc] via-[#ecf4e9] to-[#f1f4e9] opacity-70 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-10">
        {/* Left Column: Heading and CTA */}
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#ff8d3b] drop-shadow-lg uppercase mb-4 leading-tight">
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
          >
            <button className="relative group overflow-hidden bg-[#0f2a54] text-white uppercase px-8 py-4 text-xl flex items-center shadow-lg transition-transform duration-300 hover:rotate-3 hover:translate-y-1">
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
        >
          <div className="p-15 group">
            <div className="relative w-[400px] h-[400px] group-hover:animate-rotate">
              {/* Dashed Border Box */}
              <div className="relative w-full h-full border-4 border-dashed border-[#0461cb] rounded-[50%]">
                {/* Cards Positioned Along the Border */}
                {[
                  {
                    title: "Explore Opportunities",
                    description:
                      "Discover endless possibilities to grow and succeed in your career.",
                    icon: "🌍",
                    position: { top: "2%", left: "50%" }, // Top border, centered horizontally
                  },
                  {
                    title: "Build Connections",
                    description:
                      "Network with like-minded professionals and expand your horizons.",
                    icon: "🤝",
                    position: { top: "50%", left: "98%" }, // Right border, centered vertically
                  },
                  {
                    title: "Achieve Success",
                    description:
                      "Take the first step towards a brighter future today.",
                    icon: "🚀",
                    position: { top: "98%", left: "50%" }, // Bottom border, centered horizontally
                  },
                  {
                    title: "Stay Inspired",
                    description:
                      "Keep motivated with our curated resources and expert insights.",
                    icon: "💡",
                    position: { top: "50%", left: "5%" }, // Left border, centered vertically
                  },
                ].map((card, index) => (
                  <motion.div
                    key={index}
                    className="absolute flex flex-col items-center text-center bg-white/80 backdrop-blur-lg rounded-full p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-[#e8efe7] w-[120px] h-[120px]"
                    style={{
                      top: card.position.top,
                      left: card.position.left,
                      transform: `translate(-50%, -50%)`, // Center the card exactly on the border
                    }}
                  >
                    <div className="flex items-center justify-center h-full w-full bg-[#6a98cc] text-white text-5xl rounded-full">
                      {card.icon}
                    </div>
                  </motion.div>
                ))}

                {/* Optional Arrow Icon at the Bottom */}
                <div className="absolute bottom-[9%] left-[80%] rotate-[-35deg]">
                  <motion.div
                    className="flex items-center justify-center text-[#0461cb]"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ChevronRight size={60} color="#0f2a54" />
                  </motion.div>
                </div>
                <div className="absolute bottom-[80%] left-[77%] rotate-[-135deg]">
                  <motion.div
                    className="flex items-center justify-center text-[#0461cb]"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ChevronRight size={60} color="#0f2a54" />
                  </motion.div>
                </div>
                <div className="absolute bottom-[7%] left-[7%] rotate-[35deg]">
                  <motion.div
                    className="flex items-center justify-center text-[#0461cb]"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ChevronRight size={60} color="#0f2a54" />
                  </motion.div>
                </div>
                <div className="absolute bottom-[81%] left-[9%] rotate-[126deg]">
                  <motion.div
                    className="flex items-center justify-center text-[#0461cb]"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ChevronRight size={60} color="#0f2a54" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
