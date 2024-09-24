import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import router from "./components/routes/Routes/Routes";

function App() {
  return (
    // <div className="container min-h-[calc(100vh-64px)] bg-gray-900 text-white">
    <div className="container min-h-[calc(100vh-64px)] text-black">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
