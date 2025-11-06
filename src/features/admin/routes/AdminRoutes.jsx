import React from "react";
import { Route, Routes } from "react-router-dom";
import { RoleGuard } from "../../../routes/protection/RoleGuard";
import AdminDashboard from "../pages/AdminDashboard";
import AdminUsers from "../pages/AdminUsers";
import AdminProducts from "../pages/AdminProducts";
import AdminOrders from "../pages/AdminOrders";
import { AddHome } from "@mui/icons-material";
import AdminHome from "../pages/AdminHome";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RoleGuard allowedRoles={["admin"]}>
            <AdminDashboard />
          </RoleGuard>
        }
      >
        <Route index element={<AdminHome />} />
        <Route path="users" element={<AdminUsers />} />
        <Route path="products" element={<AdminProducts />} />
        <Route path="orders" element={<AdminOrders />} />
      </Route>
    </Routes>
  );
}
