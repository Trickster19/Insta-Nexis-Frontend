import { RouterProvider } from "react-router-dom";
import "./App.css";
// import useStore from "@/store";
import { router } from "./routes";

// interface CountState {
//   count: number;
//   increase: () => void;
// }
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
