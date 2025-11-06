import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Rating,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { getProductBySlug } from "../../../api/productsApi";
import { useThemeContext } from "../../../context/ThemeContext";
import { useCart } from "../../../context/CartContext";
import ReviewSection from "./Reviews/ReviewSection";
import { grey } from "@mui/material/colors";

const ProductDetail = () => {
  const { slug } = useParams();
  const { mode } = useThemeContext(); // 👈 detect light/dark
  const [product, setProduct] = useState(null);
  const [tab, setTab] = useState("description");
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const { addProduct } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductBySlug(slug);
        setProduct(data);
      } catch (err) {
        console.error("Error loading product:", err);
      }
    };
    fetchProduct();
  }, [slug]);

  if (!product)
    return (
      <Typography
        align="center"
        sx={{
          mt: 10,
          color: mode === "dark" ? "#ddd" : "#333",
        }}
      >
        Loading.
      </Typography>
    );

  // Theme-aware colors
  const bgMain = mode === "dark" ? "#121212" : "#fafafa";
  const bgCard = mode === "dark" ? "#1e1e1e" : "#ffffff";
  const textPrimary = mode === "dark" ? "#ffffff" : "#000000";
  const textSecondary = mode === "dark" ? "#bbb" : "#555";
  const divider = mode === "dark" ? "#333" : "#ddd";

  // if (isLoading)
  //     return (
  //       <div className="flex items-center content-center p-4">
  //         <CircularProgress />;
  //       </div>
  //     );

  //   if (isError) {
  //     return (
  //       <Typography color="error" variant="body1" sx={{ my: 4 }}>
  //         Oops! Could not load reviews at this time.
  //       </Typography>
  //     );
  //   }
  return (
    <Box
      sx={{
        p: { xs: 2, md: 4 },
        backgroundColor: bgMain,
        minHeight: "100vh",
        transition: "background-color 0.3s ease",
      }}
    >
      {/* ===== Product Card ===== */}
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          maxWidth: 1000,
          mx: "auto",
          mt: 1,
          p: 2,
          backgroundColor: bgCard,
          color: textPrimary,
          boxShadow:
            mode === "dark"
              ? "0 4px 10px rgba(0,0,0,0.4)"
              : "0 4px 10px rgba(0,0,0,0.1)",
          border: mode === "dark" ? "1px solid #333" : "1px solid #eee",
          borderRadius: 3,
          transition: "background-color 0.3s ease",
        }}
      >
        {/* ===== IMAGE ===== */}
        <CardMedia
          component="img"
          image={product.thumbnail || product.images?.[0]}
          alt={product.name}
          sx={{
            width: { xs: "100%", md: 400 },
            height: { xs: 250, md: 400 },
            objectFit: "cover",
            borderRadius: 2,
          }}
        />

        {/* ===== DETAILS ===== */}
        <CardContent sx={{ flex: 1 }}>
          <Typography variant="overline" sx={{ color: textSecondary }}>
            {product.category?.name || "Category"}
          </Typography>

          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: textPrimary }}
          >
            {product.name}
          </Typography>
          <Typography variant="subtitle2" color={grey[500]} sx={{ mt: 1 }}>
            SKU: {product.sku}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
            {product.discountPrice && (
              <Typography
                variant="body2"
                sx={{
                  textDecoration: "line-through",
                  color: textSecondary,
                }}
              >
                ${product.price}
              </Typography>
            )}
            <Typography
              sx={{
                color: mode === "light" ? "primary.light" : "primary.main",
                fontWeight: "bold",
              }}
            >
              ${product.discountPrice || product.price}
            </Typography>
          </Box>

          <Typography variant="body2" sx={{ mt: 2, color: textSecondary }}>
            {product.description}
          </Typography>

          {/* ===== SIZE BUTTONS ===== */}
          {product.sizes?.length > 0 && product.sizes[0] !== "" && (
            <Box sx={{ display: "flex", gap: 1.5, mt: 3 }}>
              {product.sizes.map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? "contained" : "outlined"}
                  onClick={() => setSelectedSize(size)}
                  sx={{
                    minWidth: 45,
                    borderRadius: 2,
                    fontWeight: "bold",
                    textTransform: "none",
                    borderColor: mode === "dark" ? "#73ceff" : "#1976d2",
                    color: mode === "dark" ? "#73ceff" : "#1976d2",
                    "&.MuiButton-contained": {
                      backgroundColor: mode === "dark" ? "#73ceff" : "#1976d2",
                      color: "#fff",
                    },
                  }}
                >
                  {size}
                </Button>
              ))}
            </Box>
          )}

          {/* ===== ADD TO CART ===== */}
          <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
            <TextField
              type="number"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
              size="small"
              sx={{
                width: 70,
                input: {
                  color: textPrimary,
                  backgroundColor: mode === "dark" ? "#2a2a2a" : "#fff",
                },
              }}
            />
            <Button
              onClick={() => {
                console.log(product);
                addProduct({
                  ...product,
                  quantity,
                });
              }}
              variant="contained"
              sx={{
                backgroundColor: "primary",
                "&:hover": {
                  backgroundColor: "primary.light",
                },
              }}
            >
              Add to Cart
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* ====== TOGGLE BUTTONS ====== */}
      <Box
        sx={{
          maxWidth: 1000,
          mx: "auto",
          mt: 3,
          textAlign: "center",
          borderBottom: `1px solid ${divider}`,
        }}
      >
        <ToggleButtonGroup
          color="primary"
          value={tab}
          exclusive
          onChange={(e, newVal) => newVal && setTab(newVal)}
          sx={{
            mb: 3,
            "& .MuiToggleButton-root": {
              border: "none",
              borderRadius: 0,
              px: 4,
              py: 1.5,
              fontWeight: "bold",
              color: textSecondary,
            },
            "& .Mui-selected": {
              color: textPrimary,
              borderBottom: `2px solid ${
                mode === "dark" ? "#73ceff" : "#1976d2"
              }`,
              backgroundColor: "transparent",
            },
          }}
        >
          <ToggleButton value="description">Description</ToggleButton>
          <ToggleButton value="reviews">Reviews</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {/* ====== CONTENT SWITCH ====== */}
      <Box
        sx={{
          maxwidth: 1000,
          mx: "auto",
          backgroundColor: bgCard,
          color: textPrimary,
          p: 3,
          borderRadius: 2,
          boxShadow:
            mode === "dark"
              ? "0 4px 10px rgba(0,0,0,0.4)"
              : "0 2px 6px rgba(0,0,0,0.05)",
          transition: "background-color 0.3s ease",
        }}
      >
        {tab === "description" ? (
          <>
            <Typography variant="h6" gutterBottom>
              Product Description
            </Typography>
            <Typography variant="body2" sx={{ color: textSecondary }}>
              {product.description}
            </Typography>
          </>
        ) : (
          <>
            <ReviewSection product={product} textColor={textSecondary} />
          </>
        )}
      </Box>
    </Box>
  );
};

export default ProductDetail;
