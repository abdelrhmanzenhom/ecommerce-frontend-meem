import { IconButton, Rating, Typography } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext";

export default function ProductCard({ product, isHomePage }) {
  return (
    <Link
      to={`/products/${product.slug || product._id}`}
      className={`group relative block rounded-xl overflow-hidden bg-white dark:bg-[rgb(30,30,30)]
              border border-gray-200 dark:border-gray-700  hover:ring-2 hover:ring-primary
               transition-all duration-300 ${
                 isHomePage ? "snap-center shrink-0 w-60" : "w-full"
               }`}
    >
      <img
        src={product.thumbnail || "https://placehold.co/300x300?text=No+Image"}
        alt={product.name}
        className="aspect-square w-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-colors duration-300" />

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          {product.description?.slice(0, 80)}...
        </p>
        <p className="text-2xl font-semibold text-secondary dark:text-primary mb-3">
          <span className="text-sm align-top">$</span>
          {product.price.toFixed(2)}
        </p>
        <div className="flex items-center gap-1">
          <Rating readOnly value={product.rating} size="small" />
          <Typography variant="subtitle2" color="secondary">
            ({product.numReviews})
          </Typography>
        </div>
      </div>
    </Link>
  );
}
