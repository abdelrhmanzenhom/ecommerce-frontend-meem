import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Card,
  Typography,
  CircularProgress,
  useTheme,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../../../context/ThemeContext";
import { useAuth } from "../../../context/AuthContext";
import { jwtDecode } from "jwt-decode";
import CardHeader from "./CardHeader";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const { mode } = useThemeContext();
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleRegister = async () => {
    const { name, email, password, passwordConfirm } = formData;

    console.log("formData =>", formData);
    if (!name || !email || !password || !passwordConfirm) {
      setError("Please fill all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    if (password !== passwordConfirm) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://back-end-prod-meem-production.up.railway.app/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setLoading(false);

      if (res.ok) {
        localStorage.setItem("token", data.token);
        login(jwtDecode(data.token), true);
        navigate("/");
      } else {
        setError(data.message || "Registration failed");
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
        width: 450,
        p: 5,
        borderRadius: 4,
        boxShadow: 4,
        backgroundColor:
          mode === "light" ? "#fff" : theme.palette.background.paper,
        color: theme.palette.text.primary,
        transition: "0.3s",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: mode === "light" ? "primary.light" : "primary.main",
          mb: 3,
        }}
      >
        Register
      </Typography>

      <TextField
        fullWidth
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        margin="normal"
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 3,
          },
        }}
      />
      <TextField
        fullWidth
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        margin="normal"
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 3,
          },
        }}
      />
      <TextField
        fullWidth
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        margin="normal"
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 3,
          },
        }}
      />
      <TextField
        fullWidth
        label="Confirm Password"
        name="passwordConfirm"
        type="password"
        value={formData.passwordConfirm}
        onChange={handleChange}
        margin="normal"
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 3,
          },
        }}
      />

      {error && (
        <Typography color="error" sx={{ mt: 1, textAlign: "center" }}>
          {error}
        </Typography>
      )}

      <Button
        fullWidth
        variant="contained"
        sx={{
          mt: 3,
          py: 1.3,
          fontSize: "1rem",
          fontWeight: "bold",
          borderRadius: "10px",
          backgroundColor: mode === "light" ? "primary.light" : "primary.main",
          "&:hover": {
            backgroundColor:
              mode === "light" ? "primary.main" : "primary.light",
          },
        }}
        onClick={handleRegister}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : "Register"}
      </Button>

      <Typography
        variant="body2"
        align="center"
        sx={{
          mt: 2,
          color: mode === "light" ? "primary.light" : "primary.main",
          cursor: "pointer",
          fontWeight: "bold",
        }}
        onClick={() => navigate("/auth/login")}
      >
        Already have an account? Login
      </Typography>
    </Card>
  );
}
