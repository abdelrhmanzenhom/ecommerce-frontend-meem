// src/routes/AppRoutes.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { RoleGuard } from "./protection/RoleGuard";

import { useThemeContext } from "../context/ThemeContext";
import { useEffect } from "react";
import ShopRoutes from "../features/Shop/routes/ShopRoutes";
import AuthRoutes from "../features/auth/routes/AuthRoutes";
import AdminRoutes from "../features/admin/routes/AdminRoutes";
import CheckoutRoutes from "../features/checkout/routes/CheckoutRoutes";

import ProfilePage from "../auth/components/ProfilePage";
import InfoRoutes from "../features/info/routes/InfoRoutes";

export default function AppRoutes() {
  const { mode } = useThemeContext();
  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);
  if (import.meta.env.VITE_CLOUDINARY_URL) {
    // code inside here will be tree-shaken in production builds
    console.log("Dev mode");
  }
  return (
    <Router>
      <Routes>
        {/* Start Shop Routes */}
        <Route path="/*" element={<ShopRoutes />} />
        {/* End Shop Routes */}
        {/* Start Authentication Routes */}
        <Route path="/auth/*" element={<AuthRoutes />} />
        {/* End Authentication Routes */}
        {/* Start Payment Routes */}
        <Route path="/payment/*" element={<CheckoutRoutes />} />
        {/* End Payment Routes */}
        {/* Start Admin Routes*/}
        <Route path="/admin/*" element={<AdminRoutes />} />
        {/* End Admin Routes*/}
        {/* Start Info Routes*/}
        <Route path="/info/*" element={<InfoRoutes />} />
        {/* End Info Routes*/}

        {/* Admin routes nested under /admin */}

        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}
