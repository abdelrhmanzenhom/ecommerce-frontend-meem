import React from "react";
import { Route, Routes } from "react-router-dom";
import ShopLayout from "../Layout/ShopLayout";
import LandingPage from "../components/LandingPage";
import Products from "../components/Products";
import CartPage from "../components/CartPage";
import ProductDetail from "../components/ProductDetail";
import NotFound from "../../fallback/pages/NotFound";
import Unauthorized from "../../fallback/pages/Unauthorized";

export default function ShopRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ShopLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:slug" element={<ProductDetail />} />
        <Route path="cart" element={<CartPage />} />
        {/* Start Fallback Routes */}
        <Route path="/unauthorized" element={<Unauthorized />} />/
        <Route path="*" element={<NotFound />} />
        {/* End Fallback Routes */}
      </Route>
    </Routes>
  );
}
