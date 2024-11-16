import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Navbar = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0); // Track scroll value

  // Scroll event handler to update scrollY value
  const handleScroll = () => {
    setScrollY(window.scrollY); // Update scrollY value
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Compute background opacity based on scroll position
  const scrollOpacity = Math.min(scrollY / 300, 0.8); // Increase opacity as scroll value increases

  // Background color changes based on scroll value
  const bgColor = scrollY > 0 ? "#0f2a54" : "transparent";

  return (
    <motion.nav
      className={cn(
        "px-6 py-4 w-full flex items-center justify-between transition-all duration-300 ease-in-out",
        "fixed top-0 left-0 right-0 z-50"
      )}
      style={{
        backgroundColor: bgColor, // Set background color based on scroll position
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
    >
      <div className="flex items-center gap-x-4">
        {/* Logo with sharp text, gradient, and shadow */}
        <motion.span
          className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff7e5f] via-[#feb47b] to-[#66b8d6] uppercase drop-shadow-[0px_4px_6px_rgba(0,0,0,0.2)]"
          whileHover={{ scale: 1.1, textShadow: "0px 0px 15px rgba(255, 255, 255, 0.7)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Insta Nexis
        </motion.span>
      </div>

      <div className="items-center gap-x-6 flex justify-around">
        {/* Login Button with orange background */}
        <motion.div
          whileHover={{ scale: 1.05, backgroundColor: "#f57c00" }} // Lighter orange hover effect
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Button
            onClick={() => navigate("/login")}
            className="bg-[#f57c00] text-white hover:bg-[#e65100] hover:text-[#e8efe7] transition-all duration-300 ease-in-out rounded-lg py-2 px-4"
          >
            Login
          </Button>
        </motion.div>

        {/* Sign Up Button with orange background */}
        <motion.div
          whileHover={{ scale: 1.05, backgroundColor: "#f57c00" }} // Lighter orange hover effect
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Button
            onClick={() => navigate("/register")}
            className="bg-[#f57c00] text-white hover:bg-[#e65100] hover:text-[#e8efe7] transition-all duration-300 ease-in-out rounded-lg py-2 px-4"
          >
            Sign Up
          </Button>
        </motion.div>
      </div>
    </motion.nav>
  );
};
