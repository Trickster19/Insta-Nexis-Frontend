import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Home, Target, User2, UserCircle2 } from "lucide-react";
import useAuth from "@/store";
import { TitleName } from "../ui/title";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export const Navbar = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const accessToken = useAuth((state) => state.accessToken);
  const userName = useAuth((state) => state.userName);
  const setAccessToken = useAuth((state) => state.setAccessToken);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isScroll = scrollY > 0;

  return (
    <motion.nav
      className={cn(
        "px-6 py-3 w-full flex items-center justify-between transition-all duration-300 ease-in-out",
        "fixed top-0 left-0 right-0 z-50 ",
        `${isScroll ? "shadow-md bg-blue-100/45 backdrop-blur-lg" : ""}`
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.0, type: "spring", stiffness: 100 }}
    >
      <TitleName />

      {accessToken ? (
        <div className="items-center gap-x-6 flex justify-end">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex"
          >
            <a
              onClick={() => navigate("/")}
              className="rounded-full font-semibold flex gap-x-1 items-center text-[#f57c00]  hover:text-[#e65100] transition-all duration-300 ease-in-out p-1 px-2 uppercase"
            >
              <Home size={28} /> <span>Home</span>
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex"
          >
            <a
              onClick={() => navigate("/profile")}
              className="rounded-full font-semibold flex gap-x-1 items-center text-[#f57c00]  hover:text-[##e65100] transition-all duration-300 ease-in-out p-1 px-2 uppercase"
            >
              <Target size={28} /> <span>Profile</span>
            </a>
          </motion.div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="inline-flex size-10 select-none items-center justify-center overflow-hidden rounded-full bg-black-100 align-middle border-2 border-orange-400">
                <AvatarImage></AvatarImage>
                <AvatarFallback className="leading-1 flex size-full items-center justify-center bg-white text-[15px] font-bold text-orange-500">
                  <User2
                    style={{ fill: "#e65100", stroke: "#e65100" }}
                    className="h-6 w-6"
                  />
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-56 shadow-sm bg-white/60 text-orange-800"
              align="start"
              side="left"
              alignOffset={120}
            >
              <DropdownMenuLabel className="text-md">
                Hi, <span className="font-bold">{userName.toUpperCase()}</span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-full"
                >
                  <Button
                    onClick={() => {
                      setAccessToken(null);
                      toast.success("User Login Out Successful");
                      navigate("/");
                    }}
                    className=" w-full rounded-sm bg-[#f57c00] text-white hover:bg-[#e65100] hover:text-[#e8efe7] transition-all duration-300 ease-in-out py-1 px-3 uppercase"
                  >
                    Log Out
                    <ArrowRight size={40} />
                  </Button>
                </motion.div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <div className="items-center gap-x-6 flex justify-around">
          {/* Login Button with orange background */}
          <motion.div
            whileHover={{ scale: 1.05 }}
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
        </div>
      )}
    </motion.nav>
  );
};
