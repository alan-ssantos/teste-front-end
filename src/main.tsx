import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "@/styles/main.scss";
import "@fontsource/poppins";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
