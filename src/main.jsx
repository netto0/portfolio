import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GlobalStyleProvider } from "./providers/globalStyle.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalStyleProvider>
    <App />
  </GlobalStyleProvider>
);
