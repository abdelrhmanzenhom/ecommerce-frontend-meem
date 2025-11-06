import React from "react";
import { Route, Routes } from "react-router-dom";
import LoggedInGuard from "../../../routes/protection/LoggedInGuard";
import LoginPage from "../components/LoginPage";
import RegisterPage from "../components/RegisterPage";
import ForgotPassword from "../components/ForgotPassword";
import AuthLayout from "../Layout/AuthLayout";
import OAuthSuccess from "../components/oauth-success";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route element={<LoggedInGuard />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="forgot" element={<ForgotPassword />} />
          <Route path="oauth-success" element={<OAuthSuccess />} />
        </Route>
      </Route>
    </Routes>
  );
}
