import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { getUserById } from "../../../api/usersApi";
import { useAuth } from "../../../context/AuthContext";

export default function OAuthSuccess() {
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    console.log("aaaa",token)
    if (token) {
      localStorage.setItem("token", token);
      const decoded = jwtDecode(token);
        console.log("xxxx",decoded)
      getUserById(decoded.id).then((user) => {
        login(user, false);
        navigate("/"); 
      });
    } else {
      navigate("/auth/login"); 
    }
  }, [navigate, login]);

  return <p>Signing you in...</p>;
}
