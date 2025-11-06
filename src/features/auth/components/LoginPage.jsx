import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import {
  Box,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Stack,
  CircularProgress,
  Link,
  Snackbar,
  Slide,
  useTheme,
  Divider
} from "@mui/material";
import { jwtDecode } from "jwt-decode";
import { getUserById } from "../../../api/usersApi";
import CardHeader from "./CardHeader";
import { useAuth } from "../../../context/AuthContext";
import { useThemeContext } from "../../../context/ThemeContext";

export default function LoginPage() {
  const API_BASE = import.meta.env.VITE_API_URL || "https://back-end-prod-meem-production.up.railway.app/api";
const BASE_URL = `${API_BASE}/users`
 const OAPI=`${API_BASE}/auth/google`
 console.log(OAPI)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const { setMode } = useThemeContext();
  const { login } = useAuth();
function OAuthButtons() {
  const handleGoogleLogin = () => {
    window.location.href = `${OAPI}`;

  };

  

  return (
    <>
      <Divider sx={{ my: 3 }}>OR</Divider>
      <Stack spacing={2}>
        <Button
        
          fullWidth
          variant="outlined"
          startIcon={<GoogleIcon />}
          onClick={handleGoogleLogin}
        >
          Continue with Google
        </Button>
     
      </Stack>
    </>
  );
}

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in both fields");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      setLoading(false);

      if (res.ok) {
        const token = data.token;
        localStorage.setItem("token", token);
        const decodedToken = jwtDecode(token);
        console.log(decodedToken);
        const user = await getUserById(decodedToken.id);
        console.log("login: ", user);
        login(user, false);
        if (user.role === "admin") {
          setMode("light");
          navigate("/admin");
        } else navigate("/");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <Card
      sx={{
        width: 400,
        p: 4,
        borderRadius: 4,
        bgcolor: "background.paper",
        boxShadow: 4,
        transition: "all 0.3s ease",
      }}
    >
      <CardContent>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: theme.palette.primary.main,
            letterSpacing: 1,
            mb: 4,
          }}
        >
          Login
        </Typography>

        <form onSubmit={handleLogin}>
          <Stack spacing={2}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": { borderRadius: 3 },
              }}
            />

            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": { borderRadius: 3 },
              }}
            />

            {error && (
              <Typography color="error" sx={{ textAlign: "center" }}>
                {error}
              </Typography>
            )}

            <Button
              type="submit"
              fullWidth
              sx={{
                mt: 1,
                py: 1.2,
                fontSize: "1rem",
                fontWeight: "bold",
                borderRadius: "10px",
                backgroundColor: theme.palette.primary.main,
                color: "#fff",
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Login"
              )}
            </Button>
                <OAuthButtons/>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 1,
              }}
            >
              <Link
                underline="hover"
                sx={{
                  fontSize: 16,
                  color: "text.secondary",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/auth/forgot")}
              >
                Forget password?
              </Link>

              <Link
                underline="hover"
                sx={{
                  fontSize: 14,
                  color: theme.palette.primary.main,
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/auth/register")}
              >
                Register
              </Link>
            </Box>
          </Stack>
        </form>
      </CardContent>
    </Card>
  );
}
