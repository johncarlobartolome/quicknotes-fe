import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider
      theme={{
        fontFamily: "Inter, sans-serif",
        primaryColor: "blue",
      }}
    >
      <Notifications position="top-right" />
      <App />
    </MantineProvider>
  </StrictMode>
);
