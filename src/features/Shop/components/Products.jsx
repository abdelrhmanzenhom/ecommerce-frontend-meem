import React, { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
// 1. Import useQuery from TanStack Query
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../../../api/productsApi";
import ProductCard from "./ProductCard";
import { useSearch } from "../../../context/SearchContext";

// Key for TanStack Query caching
const ALL_PRODUCTS_QUERY_KEY = "allProducts";

const Products = ({ isHomePage = false }) => {
  // Use useQuery for data fetching and state management
  const [searchParams] = useSearchParams();
  const [sortOrder, setSortOrder] = useState("");
  const [minInput, setMinInput] = useState("");
  const [maxInput, setMaxInput] = useState("");
  let { searchQuery, setSearchQuery } = useSearch();

  // Get the current search from the URL
  setSearchQuery(searchParams.get("search"));
  // Get the current category from the URL
  const category = searchParams.get("category");

  const parseNumber = (value) => {
    if (value === null || value === undefined) return null;
    const trimmed = String(value).trim();
    if (trimmed === "") return null;
    const n = Number(trimmed);
    return Number.isFinite(n) ? n : null;
  };

  useEffect(() => {
    return () => {
      setSearchQuery("");
    };
  }, [category]);

  // --- 1. Data Fetching with useQuery ---
  // Fetches ALL products once (or according to cache settings)
  const {
    data: allProducts,
    isLoading, // Replaces local 'loading' state
    error, // Replaces local 'error' state
  } = useQuery({
    queryKey: [ALL_PRODUCTS_QUERY_KEY],
    queryFn: getAllProducts,

    // Keep data in cache for a long time since we filter locally
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  // --- 2. Combined Filtering, Searching, and Sorting Logic (Memoized for performance) ---
  const filteredAndSortedProducts = useMemo(() => {
    if (!allProducts) return [];

    // Start with all fetched products
    let currentProducts = allProducts;

    // 2a. Apply Category Filter (from URL)
    if (category) {
      currentProducts = currentProducts.filter(
        // Ensure you access the category correctly, e.g., product.category.name
        (product) => product.category?.name === category
      );
    }

    // 2b. Apply Search Query Filter (from SearchContext)
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      currentProducts = currentProducts.filter(
        (product) =>
          product.name?.toLowerCase().includes(query) ||
          product.description?.toLowerCase().includes(query)
      );
    }

    // 2c. Apply Price Range Filter (from local state inputs)
    const min = parseNumber(minInput);
    const max = parseNumber(maxInput);

    if (min !== null || max !== null) {
      currentProducts = currentProducts.filter((product) => {
        const price = Number(product.price) || 0;
        const matchesMin = min !== null ? price >= min : true;
        const matchesMax = max !== null ? price <= max : true;
        return matchesMin && matchesMax;
      });
    }

    // 2d. Apply Sorting
    if (sortOrder) {
      // Create a shallow copy to prevent modifying the original array from the cache
      const sorted = [...currentProducts];
      if (sortOrder === "lowToHigh") {
        sorted.sort((a, b) => a.price - b.price);
      } else if (sortOrder === "highToLow") {
        sorted.sort((a, b) => b.price - a.price);
      }
      return sorted;
    }

    return currentProducts;
  }, [allProducts, category, searchQuery, minInput, maxInput, sortOrder]);

  const productsToShow = isHomePage
    ? filteredAndSortedProducts.slice(0, 4)
    : filteredAndSortedProducts;

  const title = isHomePage
    ? "Featured Products"
    : category
    ? `Products in "${category}"`
    : searchQuery
    ? `Search results for "${searchQuery}"`
    : "All Products";

  // --- 3. Render States ---

  if (error)
    return (
      <div className="py-20 text-center text-red-500 dark:text-red-400">
        Failed to load products.
      </div>
    );

  return (
    <section
      className={`${
        isHomePage ? " overflow-x-auto" : ""
      }flex flex-col md:flex-row rounded max-w-7xl mx-auto my-8 p-6 gap-10 bg-gray-50 dark:bg-[#121212] transition-colors duration-300`}
    >
      {/* --- Filter Sidebar (Price/Sort UI) --- */}
      {!isHomePage && (
        <aside className="md:w-1/4 w-full bg-white dark:bg-[#1e1e1e] p-5 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 h-fit transition-colors duration-300">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Price
          </h3>
          <div className="space-y-3">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600 dark:text-gray-400">
                Min:
              </label>
              <input
                type="number"
                min="0"
                placeholder="No min"
                value={minInput}
                onChange={(e) => setMinInput(e.target.value)}
                className="bg-gray-100 dark:bg-[#2a2a2a] text-gray-900 dark:text-gray-200 px-3 py-2 rounded-md outline-none border border-gray-300 dark:border-gray-600 focus:border-[#1976d2] dark:focus:border-[#73ceff] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600 dark:text-gray-400">
                Max:
              </label>
              <input
                type="number"
                min="0"
                placeholder="No max"
                value={maxInput}
                onChange={(e) => setMaxInput(e.target.value)}
                className="bg-gray-100 dark:bg-[#2a2a2a] text-gray-900 dark:text-gray-200 px-3 py-2 rounded-md outline-none border border-gray-300 dark:border-gray-600 focus:border-[#1976d2] dark:focus:border-[#73ceff] transition-colors"
              />
            </div>

            <button
              className="w-full mt-2 bg-primary hover:bg-secondary text-black py-2 rounded-md font-medium transition-colors duration-300"
              onClick={() => {
                setMinInput("");
                setMaxInput("");
                setSortOrder("");
              }}
            >
              Clear Filters
            </button>
          </div>

          {/* --- Sort Section --- */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
              Sort By
            </h3>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="w-full bg-gray-100 dark:bg-[#2a2a2a] text-gray-900 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 outline-none focus:border-[#1976d2] dark:focus:border-[#73ceff] transition-colors"
            >
              <option value="">Default</option>
              <option value="lowToHigh">Price: Low → High</option>
              <option value="highToLow">Price: High → Low</option>
            </select>
          </div>
        </aside>
      )}

      {/* --- Products Content --- */}
      <div className="flex-">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          {title}
        </h2>

        {productsToShow.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-400">
            No products found matching your filters.
          </p>
        ) : (
          <div
            className={`${
              isHomePage
                ? "flex gap-6 pb-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
                : "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
            }`}
          >
            {productsToShow.map((p) => (
              <ProductCard isHomePage={isHomePage} key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
