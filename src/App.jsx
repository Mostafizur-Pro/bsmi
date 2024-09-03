import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import router from "./components/routes/Routes/Routes";

function App() {
  return (
    <div className="container min-h-[calc(100vh-64px)]">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
