import React from "react";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import { TitleName } from "../../ui/title";
import BackgroundImage from "@/assets/hero.svg";

const AuthLayout: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className="hidden md:w-1/2 text-light md:flex flex-col justify-between p-8"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(0, 0, 0, 0.6)), url(${BackgroundImage})`,
          backgroundSize: "cover", // Ensures the image covers the entire area
          backgroundPosition: "center", // Centers the image
          backgroundRepeat: "no-repeat", // Prevents image repetition
        }}
      >
        <div>
          <TitleName />
        </div>
        <div>
          <blockquote className="italic text-yellow-100">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            maximus, nulla ut commodo sagittis, sapien dui mattis dui, non
            pulvinar lorem felis nec erat"
          </blockquote>
          <p className="mt-4">John Smith</p>
        </div>
      </div>

      <div className="md:hidden fixed top-4 left-4">
        <TitleName />
      </div>
      {/* Content */}
      <motion.div
        className="w-full md:w-1/2 bg-light flex justify-center items-center p-8"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
      >
        <Outlet />
      </motion.div>
    </div>
  );
};

export { AuthLayout };
