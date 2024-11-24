import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes";
import { Toaster } from "sonner";
import { useEffect } from "react";
import useAuth, { useDialog } from "./store";

function App() {
  const isDialogOpen = useDialog((state) => state.isDialogOpen);
  const setIsDialogOpen = useDialog((state) => state.setIsDialogOpen);
  const accessToken = useAuth((state) => state.accessToken);
  useEffect(() => {
    if (!accessToken) return;
    console.log("UseEffect called");

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const tokenExpiry =
        JSON.parse(atob(accessToken.split(".")[1])).exp * 1000;
      const iat: number =
        JSON.parse(atob(accessToken.split(".")[1])).iat * 1000;

      if (now >= iat + 10000) {
        setIsDialogOpen(true);
        clearInterval(interval);
        // Refresh token when expired
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [accessToken]);
  return (
    <>
      <Toaster richColors position="bottom-center" />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
