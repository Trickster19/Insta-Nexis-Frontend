import { RouterProvider } from "react-router-dom";
import "./App.css";
// import useStore from "@/store";
import { router } from "./routes";
import { Toaster } from "sonner";

// interface CountState {
//   count: number;
//   increase: () => void;
// }
function App() {
  return (
    <>
      <Toaster richColors position="bottom-center" />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
