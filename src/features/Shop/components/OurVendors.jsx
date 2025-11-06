import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const vendors = [
  {
    name: "UrbanThreads",
    image: "/assets/vendors/UrbanThreads.jpg",
    description:
      "Modern streetwear meets comfort — premium designs crafted for bold individuals.",
  },
  {
    name: "TechNova",
    image: "/assets/vendors/TechNova.jpg",
    description:
      "Cutting-edge electronics and smart devices that redefine daily convenience.",
  },
  {
    name: "GreenHaven",
    image: "/assets/vendors/GreenHaven.jpg",
    description:
      "Eco-conscious home essentials built with sustainability at the heart.",
  },
  {
    name: "LuxeJewels",
    image: "/assets/vendors/LuxeJewels.jpg",
    description:
      "Handcrafted jewelry that brings timeless elegance to every occasion.",
  },
  {
    name: "FitFuel",
    image: "/assets/vendors/FitFuel.jpg",
    description:
      "Premium supplements and gear to elevate your performance and wellness journey.",
  },
  {
    name: "PixelPlay",
    image: "/assets/vendors/PixelPlay.jpg",
    description:
      "Immersive gaming gear and accessories for every passionate gamer.",
  },
  {
    name: "CasaBella",
    image: "/assets/vendors/CasaBella.jpg",
    description:
      "Luxury furniture and décor that transforms your house into a home.",
  },
  {
    name: "WanderLuxe",
    image: "/assets/vendors/WanderLuxe.jpg",
    description: "Stylish travel essentials designed for the modern explorer.",
  },
  {
    name: "Petopia",
    image: "/assets/vendors/Petopia.png",
    description:
      "Wholesome treats and accessories for your furry friends — because they deserve the best.",
  },
];

const OurVendors = () => {
  return (
    <Box component={"section"} sx={{ marginY: "40px" }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", mb: 5, textAlign: "center" }}
      >
        Our Trusted Vendors
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {vendors.map((vendor, index) => (
          <Grid item xs={6} md={4} lg={2} key={index}>
            <Card
              sx={{
                height: "100%",
                maxWidth: "300px",
                textAlign: "center",
              }}
            >
              <CardMedia
                component="img"
                height="160"
                image={
                  vendor.image ||
                  "https://source.unsplash.com/300x200/?store,brand,logo"
                }
                alt={vendor.name}
                sx={{ objectFit: "contain", backgroundColor: "#fff", p: 2 }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "600" }}>
                  {vendor.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {vendor.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurVendors;
