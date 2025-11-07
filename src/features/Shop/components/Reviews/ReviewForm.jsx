import { useState } from "react";
import { Rating, TextField, Button, Box, Typography } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addReview } from "../../../../api/reviewsApi";
import { useAuth } from "../../../../context/AuthContext";

const ReviewForm = ({ product }) => {
  const { user } = useAuth();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const [validationMsg, setValidationMsg] = useState("");

  const queryClient = useQueryClient();

  const addReviewMutation = useMutation({
    mutationFn: addReview,
    onSuccess: () => {
      queryClient.invalidateQueries([`${product.slug}_reviews`]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0 || comment.trim() === "") {
      setValidationMsg("Please enter a valid rating and comment.");
      return;
    }

    // Mutate Reviews
    const review = { user: user._id, product: product._id, comment, rating };
    console.log("form:", review);
    addReviewMutation.mutate(review);

    // Reset form
    setRating(0);
    setComment("");
  };
if (!user) {
    return (
      <Box
        sx={{
          mt: 4,
          p: 3,
          border: "1px solid #e0e0e0",
          borderRadius: 2,
          backgroundColor: "#fafafa",
        }}
      >
        <Alert severity="info">
          You must <strong>log in</strong> to leave a review.
        </Alert>
      </Box>
    );
  }
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        mt: 4,
        p: 3,
        border: "1px solid #e0e0e0",
        borderRadius: 2,
      }}
    >
      <Typography variant="h6" gutterBottom>
        Write a Review
      </Typography>

      {/* Rating Input */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Typography component="legend" sx={{ mr: 2 }}>
          Rating:
        </Typography>
        <Rating
          name="product-rating"
          value={rating}
          precision={0.5} // Use 1 for simple user input, 0.5 for display
          onChange={(event, newValue) => {
            setRating(newValue);
            setValidationMsg("");
          }}
        />
      </Box>

      {/* Comment Input */}
      <TextField
        label="Comment"
        multiline
        rows={4}
        fullWidth
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
          setValidationMsg("");
        }}
        margin="normal"
        required
      />

      {/* Submit Button */}
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Submit Review
      </Button>
      <p className="text-red-600 mt-2">{validationMsg}</p>
    </Box>
  );
};
export default ReviewForm;
