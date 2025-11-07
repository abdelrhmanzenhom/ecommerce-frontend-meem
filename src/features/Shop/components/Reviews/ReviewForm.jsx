import { useState } from "react";
import { Rating, TextField, Button, Box, Typography, Link } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addReview } from "../../../../api/reviewsApi";
import { useAuth } from "../../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ReviewForm = ({ product }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
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

    if (!user) {
      setValidationMsg("You must log in to leave a review.");
      return;
    }

    if (rating === 0 || comment.trim() === "") {
      setValidationMsg("Please enter a valid rating and comment.");
      return;
    }

    const review = { user: user._id, product: product._id, comment, rating };
    addReviewMutation.mutate(review);

    setRating(0);
    setComment("");
    setValidationMsg("");
  };

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
          precision={0.5}
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

      {/* Show login message if not logged in */}
      {!user && (
        <Typography color="error" sx={{ mt: 1 }}>
          You must{" "}
          <Link
            component="button"
            variant="body2"
            onClick={() => navigate("/auth/login")}
            sx={{ textDecoration: "underline", color: "primary.main" }}
          >
            log in
          </Link>{" "}
          to leave a review.
        </Typography>
      )}

      {/* Validation Message */}
      {validationMsg && user && (
        <Typography color="error" sx={{ mt: 1 }}>
          {validationMsg}
        </Typography>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        disabled={!user} // disable if not logged in
      >
        Submit Review
      </Button>
    </Box>
  );
};

export default ReviewForm;
