import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import BackgroundImage from "@/assets/body-background.png";
import { Footer } from "../sections/Footer";
import { Modal } from "../Dialog";

export const Layout: React.FC = () => {
  return (
    <>
      <Modal />
      <main
        style={{
          background: `linear-gradient(to bottom, #93c5fdd9, #f3f4f6e9, #ffffffd9), url(${BackgroundImage})`,
          backgroundAttachment: "fixed",
          backgroundRepeat: "round",
        }}
      >
        <Navbar />
        <ScrollToTop />
        <Outlet />
        <Footer />
      </main>
    </>
  );
};
