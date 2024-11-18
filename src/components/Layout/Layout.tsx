import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

export const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Outlet />
    </>
  );
};
