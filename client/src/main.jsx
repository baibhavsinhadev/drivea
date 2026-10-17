import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./app";
import AppProvider from "./providers/AppProvider";

import "./styles/globals.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppProvider>
      <App />
    </AppProvider>
  </BrowserRouter>,
);
