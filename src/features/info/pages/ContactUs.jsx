// src/pages/ContactUs.jsx
import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Snackbar,
  Alert,
} from "@mui/material";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setOpenSnackbar(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") return;
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        {/* === HEADER === */}
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h3"
            fontWeight="bold"
            color="primary"
            gutterBottom
          >
            Contact Us
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            maxWidth="700px"
            mx="auto"
          >
            We’d love to hear from you! Whether you have a question about our
            products, feedback, or partnership inquiries — the meem team in
            <strong> Cairo, Egypt</strong> is always here to help.
          </Typography>
        </Box>

        {/* === CONTACT INFO === */}
        <Grid container spacing={4} mb={8}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: "100%", textAlign: "center", p: 2 }}>
              <CardContent>
                <Typography variant="h6" color="primary" gutterBottom>
                  📍 Our Location
                </Typography>
                <Typography color="text.secondary">
                  meem HQ, Downtown Cairo, Egypt
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: "100%", textAlign: "center", p: 2 }}>
              <CardContent>
                <Typography variant="h6" color="primary" gutterBottom>
                  📧 Email Us
                </Typography>
                <Typography color="text.secondary">support@meem.com</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: "100%", textAlign: "center", p: 2 }}>
              <CardContent>
                <Typography variant="h6" color="primary" gutterBottom>
                  ☎️ Call Us
                </Typography>
                <Typography color="text.secondary">+20 10 1234 5678</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* === CONTACT FORM === */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            boxShadow: 2,
            borderRadius: 3,
            p: { xs: 3, md: 6 },
            maxWidth: "800px",
            mx: "auto",
          }}
        >
          <Typography
            variant="h5"
            color="primary"
            fontWeight="600"
            textAlign="center"
            mb={4}
          >
            Send Us a Message
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} textAlign="center">
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  mt: 2,
                  px: 6,
                  py: 1.5,
                  textTransform: "none",
                  fontSize: "1rem",
                }}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* === MAP SECTION === */}
        <Box
          sx={{
            mt: 10,
            borderRadius: 3,
            overflow: "hidden",
            boxShadow: 2,
          }}
        >
          <iframe
            title="meem HQ - Cairo Map"
            src="https://www.google.com/maps?q=Cairo,+Egypt&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Box>

        {/* === MUI ALERT === */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={4000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Thank you for reaching out! We’ll get back to you soon.
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default ContactUs;
