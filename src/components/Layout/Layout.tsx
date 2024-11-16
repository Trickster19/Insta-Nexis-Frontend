import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/Navbar";

export const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
