// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes/AppRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { SearchProvider } from "./context/SearchContext.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
 
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <ThemeProvider>
          <AuthProvider>
            <SearchProvider>
              <AppRoutes />
            </SearchProvider>
          </AuthProvider>
        </ThemeProvider>
      </CartProvider>
    </QueryClientProvider>

);
