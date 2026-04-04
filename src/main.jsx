import { createRoot } from "react-dom/client";
import "./index.css";
import { AuthProvider } from "./providers/AuthProvider.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <AppRoutes />
  </AuthProvider>,
);
