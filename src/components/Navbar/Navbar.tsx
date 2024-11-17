import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import useAuth from "@/store";
import { TitleName } from "../ui/title";

export const Navbar = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0); // Track scroll value
  const accesstoken = useAuth((state) => state.accessToken);
  const location = useLocation();
  const currentPath = location.pathname;
  console.log("**URL", currentPath);
  // Scroll event handler to update scrollY value
  const handleScroll = () => {
    setScrollY(window.scrollY); // Update scrollY value
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Background color changes based on scroll value
  const bgColor = scrollY > 0 ? "#ffffffa2" : "transparent";

  return (
    <motion.nav
      className={cn(
        "px-6 py-4 w-full flex items-center justify-between transition-all duration-300 ease-in-out",
        "fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b-2"
      )}
      style={{
        backgroundColor: bgColor, // Set background color based on scroll position
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
    >
      <TitleName />

      {accesstoken ? (
        <div className="items-center gap-x-6 flex justify-end">
          <motion.div
            whileHover={{ scale: 1.05 }} // Lighter orange hover effect
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Button
              onClick={() =>
                navigate(`${currentPath === "/profile" ? "/" : "/profile"}`)
              }
              className="rounded-lg bg-[#f57c00] text-white hover:bg-[#e65100] hover:text-[#e8efe7] transition-all duration-300 ease-in-out py-3 px-7 uppercase"
            >
              {currentPath === "/" ? "Profile" : "Home"}
            </Button>
          </motion.div>
        </div>
      ) : (
        <div className="items-center gap-x-6 flex justify-around">
          {/* Login Button with orange background */}
          <motion.div
            whileHover={{ scale: 1.05 }} // Lighter orange hover effect
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Button
              onClick={() => navigate("/login")}
              className="rounded-sm bg-[#f57c00] text-white hover:bg-[#e65100] hover:text-[#e8efe7] transition-all duration-300 ease-in-out py-5 px-8 uppercase"
            >
              Login
              <ArrowRight size={40} />
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }} // Lighter orange hover effect
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Button
              onClick={() => navigate("/register")}
              className="rounded-sm bg-[#f57c00] text-white hover:bg-[#e65100] hover:text-[#e8efe7] transition-all duration-300 ease-in-out py-5 px-8 uppercase"
            >
              Sign Up
              <ArrowRight size={40} />
            </Button>
          </motion.div>
        </div>
      )}
    </motion.nav>
  );
};
