import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Button,
  Box,
  Avatar,
  useTheme,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCart } from "../../../context/CartContext";
import { useThemeContext } from "../../../context/ThemeContext";
import { useAuth } from "../../../context/AuthContext";

const CartPage = () => {
  const { products, removeProduct, increaseQuantity, decreaseQuantity, total } =
    useCart();
  const { user } = useAuth();

  console.log("Cart:", products);

  const { mode } = useThemeContext();
  const theme = useTheme();
  const isLight = mode === "light";

  const makePayment = async () => {
    const body = { products };
    const headers = { "Content-Type": "application/json" };

    try {
      const response = await fetch(
        `https://back-end-prod-meem-production.up.railway.app/api/create-checkout-session`,
        {
          method: "POST",
          headers,
          body: JSON.stringify(body),
        }
      );
      if (response.status !== 200) throw new Error(response.error);
      const data = await response.json();

      if (data?.url) {
        window.location.assign(data.url);
      } else {
        console.error("Stripe Checkout URL missing:", data);
      }
    } catch (err) {
      console.log("error:", err.message);
    }
  };

  return (
    <Card
      sx={{
        maxWidth: 900,
        margin: "40px auto",
        boxShadow: 8,
        bgcolor: isLight ? "#f4f4f7" : "#1e1e1e",
        color: isLight ? "#000" : "#fff",
        transition: "background 0.3s ease, color 0.3s ease",
      }}
    >
      <CardContent>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: isLight ? "#000" : "#fff" }}
        >
          Cart
        </Typography>

        <Table>
          <TableHead>
            <TableRow
              sx={{
                background: isLight ? "#ffffff" : "#2c2c2c",
                color: isLight ? "#000" : "#fff",
              }}
            >
              <TableCell>
                <Typography fontWeight="bold" color="inherit">
                  Product Image
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography fontWeight="bold" color="inherit">
                  Product Name
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography fontWeight="bold" color="inherit">
                  Price
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography fontWeight="bold" color="inherit">
                  Quantity
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography fontWeight="bold" color="inherit">
                  SubTotal
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography fontWeight="bold" color="inherit">
                  Remove
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {products.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  <Typography color="text.secondary">
                    Your cart is empty
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              products.map((item) => (
                <TableRow
                  key={item._id}
                  sx={{
                    backgroundColor: isLight ? "#fff" : "#2b2b2b",
                    "&:hover": {
                      backgroundColor: isLight ? "#f0f0f0" : "#383838",
                    },
                  }}
                >
                  <TableCell>
                    <Avatar
                      src={item.thumbnail || "/placeholder.png"}
                      alt={item.name}
                      variant="rounded"
                      sx={{ width: 60, height: 60 }}
                    />
                  </TableCell>
                  <TableCell align="center">{item.name}</TableCell>
                  <TableCell align="center">${item.price.toFixed(2)}</TableCell>
                  <TableCell align="center">
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <IconButton
                        size="small"
                        color="inherit"
                        onClick={() => decreaseQuantity(item._id)}
                      >
                        <RemoveIcon fontSize="small" />
                      </IconButton>
                      <Typography align="center" sx={{ mx: 1 }}>
                        {item.quantity}
                      </Typography>
                      <IconButton
                        size="small"
                        color="inherit"
                        onClick={() => increaseQuantity(item._id)}
                      >
                        <AddIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </TableCell>
                  <TableCell align="center">
                    ${(item.price * item.quantity).toFixed(2)}
                  </TableCell>
                  <TableCell align="center">
                    <IconButton
                      color="error"
                      onClick={() => removeProduct(item._id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 3,
          }}
        >
          <Typography variant="h6" color="inherit">
            Total: <strong>${total.toFixed(2)}</strong>
          </Typography>
          <Button
            onClick={makePayment}
            disabled={products.length <= 0 || user == null}
            variant="contained"
            sx={{
              background: theme.palette.primary.main,
              "&:hover": {
                background: theme.palette.primary.dark,
              },
            }}
          >
            Checkout
          </Button>
        </Box>
        {!user && (
          <p className="text-xs text-red-600 text-end mt-4">
            Please login to checkout
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default CartPage;
