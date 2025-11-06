import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const NotFound = () => {
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
      <Box sx={{ mb: 3 }}>
        <ErrorOutlineIcon sx={{ fontSize: 100, color: "#1976d2" }} />
      </Box>

      <Typography
        variant="h2"
        component="h1"
        sx={{
          fontWeight: "bold",
          mb: 2,
          color: "text.primary",
        }}
      >
        404
      </Typography>

      <Typography
        variant="h5"
        sx={{
          mb: 3,
          color: "text.secondary",
        }}
      >
        Oops! The page you're looking for doesn't exist.
      </Typography>

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
    </Container>
  );
};

export default NotFound;
