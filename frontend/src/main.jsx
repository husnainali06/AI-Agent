import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />

    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        duration: 2500,
        style: {
          background: "#0F172A",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "12px",
          padding: "14px 18px",
          fontSize: "15px",
        },
        success: {
          iconTheme: {
            primary: "#3B82F6",
            secondary: "#fff",
          },
        },
        error: {
          iconTheme: {
            primary: "#EF4444",
            secondary: "#fff",
          },
        },
      }}
    />
  </BrowserRouter>
);