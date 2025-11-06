import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import InfoLayout from "../layout/InfoLayout";
import ContactUs from "../pages/ContactUs";
import ShippingAndReturns from "../pages/ShippingAndReturns";
import PrivacyPolicy from "../pages/PrivacyPolicy";

export default function InfoRoutes() {
  return (
    <Routes>
      <Route path="/" element={<InfoLayout />}>
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="shipping" element={<ShippingAndReturns />} />
        <Route path="privacy" element={<PrivacyPolicy />} />
      </Route>
    </Routes>
  );
}
