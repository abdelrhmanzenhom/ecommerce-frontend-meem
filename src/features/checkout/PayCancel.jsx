import React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { useNavigate } from "react-router-dom";

export default function PayCancel() {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#f5f5f5"
      p={2}
    >
      <Paper
        elevation={3}
        sx={{
          p: 5,
          maxWidth: 480,
          textAlign: "center",
          borderRadius: 4,
          bgcolor: "background.paper",
        }}
      >
        <CancelOutlinedIcon color="error" sx={{ fontSize: 80, mb: 2 }} />
        <Typography variant="h4" fontWeight={600} gutterBottom>
          Payment Canceled
        </Typography>

        <Typography variant="body1" color="text.secondary" mb={3}>
          It seems you canceled your payment. No charges have been made. You can
          retry the checkout process or continue browsing our products.
        </Typography>

        <Button
          variant="outlined"
          color="primary"
          size="large"
          onClick={() => navigate("/cart")}
          sx={{ borderRadius: 3, px: 4 }}
        >
          Retry Payment
        </Button>

        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => navigate("/")}
          sx={{ borderRadius: 3, px: 4, mt: 2 }}
        >
          Continue Shopping
        </Button>
      </Paper>
    </Box>
  );
}
