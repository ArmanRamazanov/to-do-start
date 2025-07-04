import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DispatchContextProvider } from "./assets/helperFunctions/DispatchContextProvider.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <DispatchContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </DispatchContextProvider>
);
