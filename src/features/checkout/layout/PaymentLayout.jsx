import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Shop/Layout/Footer";

export default function PaymentLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}
