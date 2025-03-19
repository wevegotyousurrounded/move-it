import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./assets/css/styles.css"; // Global Styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Add the basename to support GitHub Pages */}
    <BrowserRouter basename="/move-it">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
