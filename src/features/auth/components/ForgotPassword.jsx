import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  useTheme, // Import useTheme hook to access theme colors
} from "@mui/material";
import LockResetIcon from "@mui/icons-material/LockReset";
import { useNavigate } from "react-router-dom";
import { forgetPass } from "../../../api/usersApi";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const theme = useTheme(); // Hook to access the current light/dark theme settings

  const handleReset = async () => {
    if (!email) {
      setError("Please enter your email.");
      setMessage("");
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      setMessage("");
      return;
    }

    // In a real application, you would call your authentication service here
    await forgetPass(email);
    setError("");
    setMessage("Reset link has been sent to your email!");
  };

  return (
    <Container maxWidth="sm">
      <Card
        sx={{
          p: 4,
          width: "100%",
          // 💡 Theme Adaptation: Use theme shadow and paper background
          boxShadow: theme.shadows[10],
          borderRadius: 4,
          backgroundColor: "background.paper", // Will be white in light mode, dark gray in dark mode
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontWeight: "bold",
              mb: 3,
              // 💡 Theme Adaptation: Use the primary color for branding/title
              color: "primary.main",
            }}
          >
            Forgot Password
          </Typography>

          <TextField
            fullWidth
            label="Email Address"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
              setMessage("");
            }}
            error={!!error}
            helperText={error}
          />

          {message && (
            <Typography
              align="center"
              sx={{
                mt: 2,
                // 💡 Theme Adaptation: Use the success palette color
                color: theme.palette.success.main,
                fontWeight: "bold",
              }}
            >
              {message}
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
              // 💡 Theme Adaptation: Use primary color for the button
              backgroundColor: "primary.main",
              "&:hover": {
                // 💡 Theme Adaptation: Use primary dark for consistent hover effect
                backgroundColor: "primary.dark",
              },
            }}
            onClick={handleReset}
            startIcon={<LockResetIcon />}
          >
            Reset Password
          </Button>

          <Typography
            align="center"
            sx={{
              mt: 3,
              // 💡 Theme Adaptation: Use primary color for the clickable link
              color: "primary.main",
              cursor: "pointer",
            }}
            onClick={() => navigate("/auth/login")}
          >
            Back to Login
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
