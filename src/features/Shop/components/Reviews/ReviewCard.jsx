import { Rating, Typography, Box } from "@mui/material";

// Individual Review Display Component
const ReviewCard = ({ review }) => {
  console.log("revCard", review);

  return (
    <Box sx={{ py: 2 }}>
      <div>
        <Typography variant="subtitle1" fontWeight="bold">
          {review.user.name}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
          <Rating value={review.rating} precision={0.5} readOnly size="small" />
          <Typography variant="caption" sx={{ ml: 1, color: "text.secondary" }}>
            {review.createdAt}
          </Typography>
        </Box>
        <Typography variant="body2" sx={{ color: "text.primary" }}>
          {review.comment}
        </Typography>
      </div>
    </Box>
  );
};
export default ReviewCard;
