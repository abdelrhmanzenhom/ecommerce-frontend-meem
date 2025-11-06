import React from "react";
import { Route, Routes } from "react-router-dom";
import PaymentLayout from "../layout/PaymentLayout";
import PaySuccess from "../PaySuccess";
import PayCancel from "../PayCancel";

export default function CheckoutRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PaymentLayout />}>
        <Route path="success" element={<PaySuccess />} />
        <Route path="cancel" element={<PayCancel />} />
      </Route>
    </Routes>
  );
}
