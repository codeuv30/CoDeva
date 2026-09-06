import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.jsx";
import { RouterProvider } from "react-router";
import routes from "./app/app.routes.jsx";
import "@fontsource-variable/geist";
import "@fontsource-variable/geist-mono";
import "@fontsource-variable/jetbrains-mono";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes}>
      <App />
    </RouterProvider>
  </StrictMode>,
);
