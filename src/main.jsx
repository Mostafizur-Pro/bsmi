import "./index.css";
import ReactDOM from "react-dom/client";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "./components/context/AuthContext";
import App from "./App";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
