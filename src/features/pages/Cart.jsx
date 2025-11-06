import { Button, Typography } from "@mui/material";
import React from "react";
// import { loadStripe } from "@stripe/stripe-js";

export default function Cart() {
    const makePayment = async () => {
        const cart = [
            {
                thumbnail:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQcHMMoG_rLIqn1jsY7zKUsN2iJkKDDdPwGg&s",
                name: "Boat",
                price: 25,
                quantity: 1
            },

            {
                thumbnail:
                    "https://hips.hearstapps.com/hmg-prod/images/ferrari-e-suv-2-copy-680287cac36b2.jpg?crop=1.00xw:0.838xh;0,0.0673xh",
                name: "Car",
                price: 50,
                quantity: 2
            },
            {
                thumbnail:
                    "https://d1fufvy4xao6k9.cloudfront.net/images/blog/posts/2025/06/modern_fit_suit.jpg",
                name: "Suit",
                price: 41,
                quantity: 3
            }
        ];

        const body = {
            products: cart
        };

        const headers = {
            "Content-Type": "application/json"
        };

        const response = await fetch(
            `http://localhost:5000/api/create-checkout-session`,
            {
                method: "POST",
                headers: headers,
                body: JSON.stringify(body)
            }
        );

        const data = await response.json();

        if (data?.url) {
            window.location.assign(data.url);
        } else {
            console.error("Stripe Checkout URL missing:", data);
        }

    };
    return (
        <>
            <Typography variant="h1">Cart</Typography>
            <Button onClick={makePayment} variant="contained" color="primary">
                Checkout
            </Button>
        </>
    );
}
