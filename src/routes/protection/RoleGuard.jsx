import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material";

export const RoleGuard = ({ allowedRoles, children }) => {
  const { user, loading } = useAuth(); // Destructure loading

  // 1. If loading, display a spinner/loader. DO NOT redirect yet.
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  console.log("roleguard", user);
  console.log("roleguard", localStorage.getItem("token"));
  if (!user) return <Navigate to="/auth/login" replace />;
  if (!allowedRoles.includes(user.role))
    return <Navigate to="/unauthorized" replace />;

  return children;
};
