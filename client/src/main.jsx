import { createRoot } from "react-dom/client";
import { SessionProvider } from "./context/SessionProvider";
import AppRouter from "./AppRouter";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <SessionProvider>
    <AppRouter />
  </SessionProvider>
);
