// src/pages/PrivacyPolicy.jsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Divider,
} from "@mui/material";

const PrivacyPolicy = () => {
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
            Privacy Policy
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            maxWidth="700px"
            mx="auto"
          >
            At <strong>meem</strong>, your privacy and trust are our top
            priorities. This policy explains how we collect, use, and protect
            your personal information.
          </Typography>
        </Box>

        {/* === SECTION 1: INTRODUCTION === */}
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
              1. Introduction
            </Typography>
            <Typography color="text.secondary" paragraph>
              This Privacy Policy describes how <strong>meem</strong> (“we,”
              “us,” or “our”) collects, uses, and safeguards your personal data
              when you visit our website or use our services. By using our site,
              you agree to the practices described in this policy.
            </Typography>
          </CardContent>
        </Card>

        {/* === SECTION 2: DATA COLLECTION === */}
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
              2. Information We Collect
            </Typography>
            <Typography color="text.secondary" paragraph>
              We collect personal and non-personal information to provide better
              shopping experiences. The types of data we collect include:
            </Typography>
            <ul style={{ color: "#555" }}>
              <li>
                <strong>Personal Information:</strong> Name, email address,
                phone number, billing and shipping address.
              </li>
              <li>
                <strong>Payment Details:</strong> Securely processed through
                trusted third-party payment gateways.
              </li>
              <li>
                <strong>Account Data:</strong> Login credentials and user
                preferences.
              </li>
              <li>
                <strong>Device Information:</strong> Browser type, IP address,
                and operating system (for analytics and performance).
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* === SECTION 3: USE OF INFORMATION === */}
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
              3. How We Use Your Information
            </Typography>
            <Typography color="text.secondary" paragraph>
              We use your information to:
            </Typography>
            <ul style={{ color: "#555" }}>
              <li>Process and deliver your orders efficiently.</li>
              <li>Send updates, offers, and order notifications.</li>
              <li>
                Improve our website and personalize your shopping experience.
              </li>
              <li>
                Detect and prevent fraud, unauthorized access, or misuse of our
                platform.
              </li>
              <li>Comply with legal and regulatory obligations.</li>
            </ul>
          </CardContent>
        </Card>

        {/* === SECTION 4: DATA SECURITY === */}
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
              4. Data Protection & Security
            </Typography>
            <Typography color="text.secondary" paragraph>
              Your data is protected using industry-standard encryption and
              secure servers. We take all reasonable precautions to ensure your
              personal information remains safe from loss, misuse, or
              unauthorized access.
            </Typography>
            <Typography color="text.secondary">
              However, no method of transmission over the internet is 100%
              secure. While we strive to protect your data, we cannot guarantee
              absolute security.
            </Typography>
          </CardContent>
        </Card>

        {/* === SECTION 5: COOKIES === */}
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
              5. Cookies & Tracking Technologies
            </Typography>
            <Typography color="text.secondary" paragraph>
              We use cookies and similar tracking tools to enhance your browsing
              experience, remember your preferences, and analyze website
              performance.
            </Typography>
            <Typography color="text.secondary">
              You can disable cookies in your browser settings, but doing so may
              limit certain features or functionality of our website.
            </Typography>
          </CardContent>
        </Card>

        {/* === SECTION 6: THIRD-PARTY SERVICES === */}
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
              6. Third-Party Services
            </Typography>
            <Typography color="text.secondary" paragraph>
              We may use trusted third-party companies for services such as
              payment processing, shipping, and analytics. These parties have
              access only to the data necessary to perform their tasks and are
              obligated to keep it confidential.
            </Typography>
          </CardContent>
        </Card>

        {/* === SECTION 7: YOUR RIGHTS === */}
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
              7. Your Rights
            </Typography>
            <Typography color="text.secondary" paragraph>
              You have the right to access, update, or delete your personal
              information stored with us. You may also opt out of marketing
              emails at any time by clicking “Unsubscribe” in our emails or
              contacting us directly.
            </Typography>
          </CardContent>
        </Card>

        {/* === SECTION 8: POLICY UPDATES === */}
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
              8. Changes to This Policy
            </Typography>
            <Typography color="text.secondary" paragraph>
              We may update this Privacy Policy periodically to reflect changes
              in our practices or for legal and operational reasons. Updates
              will be posted on this page, and the “Last Updated” date will be
              revised accordingly.
            </Typography>
          </CardContent>
        </Card>

        {/* === SECTION 9: CONTACT === */}
        <Card sx={{ p: { xs: 2, md: 4 }, borderRadius: 3, boxShadow: 2 }}>
          <CardContent>
            <Typography
              variant="h5"
              color="primary"
              fontWeight="600"
              gutterBottom
            >
              9. Contact Us
            </Typography>
            <Typography color="text.secondary" paragraph>
              If you have questions about this Privacy Policy or how your data
              is handled, please reach out to our Data Protection Officer at:
            </Typography>
            <Typography color="text.secondary">
              📧 Email: <strong>privacy@meem.com</strong>
              <br />
              📍 Address: meem HQ, Downtown Cairo, Egypt
            </Typography>
          </CardContent>
        </Card>

        {/* === FOOTER === */}
        <Divider sx={{ mt: 8, mb: 2 }} />
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
          mt={2}
        >
          Last Updated: November 2025 <br />© {new Date().getFullYear()} meem.
          All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
