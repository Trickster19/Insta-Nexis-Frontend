import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";
import useAuth from "@/store";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../../assets/lotties/hero_instagram.json";

const Hero = () => {
  const navigate = useNavigate();
  const accessToken = useAuth((state) => state.accessToken);

  const handleHeroButtonClick = () => {
    const navigateUrl = accessToken ? "/profile" : "/login";

    navigate(navigateUrl);
  };

  return (
    <main className="h-[100vh] py-20 px-12 w-full overflow-hidden antialiased relative grid grid-cols-1 md:grid-cols-2 gap-4 ">
      <div className="flex flex-col text-center h-full items-center justify-center col-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="mb-6"
        >
          <h1 className="h-32 text-5xl md:text-6xl font-extrabold text-[#ff8d3b] drop-shadow-lg uppercase mb-4 leading-tight">
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
          Empowering professionals like you to achieve your dreams. Let’s begin
          a new chapter, together.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
          className="mt-8 flex justify-center"
        >
          <button
            onClick={handleHeroButtonClick}
            className="relative group overflow-hidden bg-[#0f2a54] text-white uppercase px-8 py-4 text-xl flex items-center shadow-lg transition-transform duration-300 hover:rotate-3 hover:translate-y-1"
          >
            <span
              className="absolute inset-0 bg-gradient-to-r from-[#047aa3] via-[#0461cb] to-[#ff8d3b] bg-[length:200%_200%] group-hover:animate-gradient-shift"
              style={{
                zIndex: -1,
              }}
            ></span>
            <span className="relative z-10 flex items-center">
              {!accessToken ? "Start with us" : "Go to Profile"}
              <ChevronRight className="ml-3" size={24} />
            </span>
          </button>
        </motion.div>
      </div>
      <motion.div
        initial={{ x: "50%", opacity: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
        className="w-full h-full overflow-hiddenflex justify-center items-center"
      >
        <Player src={animationData} className="scale-110" loop autoplay />
      </motion.div>
    </main>
  );
};

export default Hero;
