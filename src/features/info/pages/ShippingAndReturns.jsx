// src/pages/ShippingAndReturns.jsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
} from "@mui/material";

const ShippingAndReturns = () => {
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
            Shipping & Returns
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            maxWidth="700px"
            mx="auto"
          >
            Learn about our shipping policies, delivery timelines, and
            hassle-free return process. At <strong>meem</strong>, your
            satisfaction always comes first.
          </Typography>
        </Box>

        {/* === SHIPPING POLICY === */}
        <Card
          sx={{ mb: 6, p: { xs: 2, md: 4 }, borderRadius: 3, boxShadow: 2 }}
        >
          <CardContent>
            <Typography
              variant="h5"
              color="primary"
              fontWeight="600"
              gutterBottom
            >
              Shipping Policy
            </Typography>
            <Typography color="text.secondary" paragraph>
              We offer reliable shipping services throughout Egypt and selected
              international locations. All orders are processed within{" "}
              <strong>1–2 business days</strong> (excluding weekends and
              holidays). You will receive a confirmation email once your order
              has been shipped.
            </Typography>
            <Typography color="text.secondary" paragraph>
              Shipping charges for your order will be calculated and displayed
              at checkout based on your location and total order weight.
            </Typography>

            <Typography variant="subtitle1" fontWeight="600" mt={3}>
              Estimated Delivery Times:
            </Typography>
            <ul style={{ color: "#555", marginTop: "8px" }}>
              <li>📦 Cairo & Giza: 1–3 business days</li>
              <li>🚚 Other Egyptian cities: 3–5 business days</li>
              <li>✈️ International shipping: 7–14 business days</li>
            </ul>

            <Typography color="text.secondary" mt={2}>
              *Delivery times are estimates and may vary due to factors beyond
              our control, such as customs processing or local courier delays.
            </Typography>
          </CardContent>
        </Card>

        {/* === RETURNS & REFUNDS === */}
        <Card
          sx={{ mb: 6, p: { xs: 2, md: 4 }, borderRadius: 3, boxShadow: 2 }}
        >
          <CardContent>
            <Typography
              variant="h5"
              color="primary"
              fontWeight="600"
              gutterBottom
            >
              Returns & Refunds
            </Typography>
            <Typography color="text.secondary" paragraph>
              We want you to be completely happy with your purchase. If for any
              reason you’re not satisfied, you can request a return or exchange
              within <strong>14 days</strong> of receiving your order.
            </Typography>

            <Typography variant="subtitle1" fontWeight="600" mt={3}>
              Return Conditions:
            </Typography>
            <ul style={{ color: "#555", marginTop: "8px" }}>
              <li>
                Items must be unused, unwashed, and in their original packaging.
              </li>
              <li>Proof of purchase or receipt is required.</li>
              <li>Personalized or clearance items are non-returnable.</li>
            </ul>

            <Typography color="text.secondary" mt={3}>
              Once your return is received and inspected, we’ll notify you about
              the approval or rejection of your refund. If approved, your refund
              will be processed to your original payment method within 5–7
              business days.
            </Typography>
          </CardContent>
        </Card>

        {/* === DAMAGED ITEMS === */}
        <Card
          sx={{ mb: 6, p: { xs: 2, md: 4 }, borderRadius: 3, boxShadow: 2 }}
        >
          <CardContent>
            <Typography
              variant="h5"
              color="primary"
              fontWeight="600"
              gutterBottom
            >
              Damaged or Wrong Items
            </Typography>
            <Typography color="text.secondary" paragraph>
              In the unlikely event that you receive a damaged, defective, or
              incorrect item, please contact us within <strong>48 hours</strong>{" "}
              of delivery. Our support team will guide you through a quick
              replacement or refund process at no extra cost.
            </Typography>
            <Typography color="text.secondary">
              Send us a message at <strong>support@meem.com</strong> with your
              order number and a photo of the issue — we’ll handle the rest.
            </Typography>
          </CardContent>
        </Card>

        {/* === CUSTOMER SUPPORT === */}
        <Card sx={{ p: { xs: 2, md: 4 }, borderRadius: 3, boxShadow: 2 }}>
          <CardContent>
            <Typography
              variant="h5"
              color="primary"
              fontWeight="600"
              gutterBottom
            >
              Need Help?
            </Typography>
            <Typography color="text.secondary" paragraph>
              Our customer support team is available{" "}
              <strong>7 days a week</strong> to assist you with orders, returns,
              and inquiries.
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography color="text.secondary">
                  📧 Email: <strong>support@meem.com</strong>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography color="text.secondary">
                  ☎️ Phone: <strong>+20 10 1234 5678</strong>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography color="text.secondary">
                  📍 Address: meem HQ, Downtown Cairo, Egypt
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* === FOOTER DIVIDER === */}
        <Divider sx={{ mt: 8, mb: 2 }} />
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
          mt={2}
        >
          © {new Date().getFullYear()} meem. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default ShippingAndReturns;
