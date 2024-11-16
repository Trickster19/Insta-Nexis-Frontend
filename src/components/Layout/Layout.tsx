import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/Navbar";

export const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      {/* Ensuring enough height for scrolling and preventing navbar overlap */}
      <main className="min-h-screen overflow-y-auto pt-20">
        {/* Add some content to force scrolling */}
        <div style={{ height: "2000px" }}>
          <h1 className="text-center text-4xl">Test Content</h1>
          <p className="text-center mt-4">
            Scroll down to see the navbar effect!
          </p>
        </div>
        <Outlet />
      </main>
    </>
  );
};
