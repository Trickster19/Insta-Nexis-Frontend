import { useState, useEffect } from "react";
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
        <a
          onClick={goToTop}
          className="fixed bottom-4 right-4 shadow-md bg-blue-800 text-white z-50 scroll-smooth transition-all duration-500 rounded w-11 h-11 p-2"
        >
          <ArrowUp className="w-full h-full" />
        </a>
      )}
    </>
  );
};
