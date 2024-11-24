import { useState, useEffect } from "react";
import { Button } from "./button";
import { ArrowUp } from "lucide-react";

export const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showTopBtn && (
        <Button
          onClick={goToTop}
          className="fixed bottom-4 right-4 shadow-md bg-blue-800 text-white z-50 scroll-smooth transition-all duration-500 p-4"
        >
          <ArrowUp className="w-10 h-10" />
        </Button>
      )}
    </>
  );
};
