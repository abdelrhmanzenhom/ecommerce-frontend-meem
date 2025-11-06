import {
  Rating,
  Typography,
  Divider,
  Box,
  CircularProgress,
} from "@mui/material";
import ReviewForm from "./ReviewForm";
import React, { useState } from "react";
import ReviewCard from "./ReviewCard";
import { useQuery } from "@tanstack/react-query";
import { getProductReviews } from "../../../../api/reviewsApi";

// Main Review Section Component
export default function ReviewSection({ product, textColor }) {
  console.log("product", product);
  const { data, isLoading, isError } = useQuery({
    queryKey: [`${product.slug}_reviews`],
    queryFn: () => getProductReviews(product._id),
  });

  const reviews = data || [];

  if (isLoading)
    return (
      <div className="flex items-center content-center p-4">
        <CircularProgress />;
      </div>
    );

  if (isError) {
    return (
      <Typography color="error" variant="body1" sx={{ my: 4 }}>
        Oops! Could not load reviews at this time.
      </Typography>
    );
  }

  // Calculate overall rating and number of reviews
  const numReviews = product.numReviews; // Your prop + simulated new reviews
  const overallRating = product.rating; // We'll keep the original prop for simplicity
  return (
    <Box sx={{ mt: 4 }}>
      {/* Review Summary */}
      <Typography variant="h5" gutterBottom>
        Customer Reviews
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Rating value={overallRating || 0} precision={0.5} readOnly />
        <Typography variant="h6" sx={{ ml: 1, fontWeight: "bold" }}>
          {overallRating.toFixed(1)} / 5
        </Typography>
        <Typography variant="body1" sx={{ ml: 2, color: "text.secondary" }}>
          based on {numReviews} reviews
        </Typography>
      </Box>

      <Divider sx={{ my: 3 }} />

      {/* Display Reviews */}
      <Typography variant="h6" gutterBottom>
        All Reviews ({numReviews})
      </Typography>
      {reviews.length === 0 ? (
        <Typography variant="body2" sx={{ mt: 1, color: textColor }}>
          Be the first to leave a review!
        </Typography>
      ) : (
        <Box>
          {reviews.map((review) => (
            <React.Fragment key={review.id}>
              <Divider component="li">
                <ReviewCard review={review} />
              </Divider>
            </React.Fragment>
          ))}
        </Box>
      )}

      {/* Review Form */}
      <ReviewForm product={product} />
    </Box>
  );
}
