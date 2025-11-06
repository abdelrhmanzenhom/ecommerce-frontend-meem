import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {/* Icon */}
      <Box sx={{ mb: 3 }}>
        <LockOutlinedIcon sx={{ fontSize: 100, color: "#1976d2" }} />
      </Box>

      {/* Title */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          mb: 2,
          color: "text.primary",
        }}
      >
        Unauthorized Access
      </Typography>

      {/* Description */}
      <Typography
        variant="h6"
        sx={{
          mb: 3,
          color: "text.secondary",
        }}
      >
        You don’t have permission to view this page.
      </Typography>

      {/* Actions */}
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          component={Link}
          to="/"
          variant="contained"
          sx={{
            backgroundColor: "#1976d2",
            "&:hover": { backgroundColor: "#73ceff" },
            px: 4,
            py: 1.5,
            fontSize: "1rem",
            borderRadius: "8px",
            textTransform: "none",
          }}
        >
          Back to Home
        </Button>

        <Button
          component={Link}
          to="/login"
          variant="outlined"
          sx={{
            color: "#1976d2",
            borderColor: "#1976d2",
            "&:hover": { borderColor: "#73ceff", color: "#73ceff" },
            px: 4,
            py: 1.5,
            fontSize: "1rem",
            borderRadius: "8px",
            textTransform: "none",
          }}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Unauthorized;
