// routes/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const LoggedInGuard = () => {
  const { user } = useAuth();

  if (user) {
    // user is logged in
    return user.role === "admin" ? (
      <Navigate to="/admin" replace />
    ) : (
      <Navigate to="/" replace />
    );
  }
  return <Outlet />;
};

export default LoggedInGuard;
