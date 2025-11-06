import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getAllCategories } from "../../../api/categoriesApi";
import { Alert, CircularProgress, Button } from "@mui/material";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItemButton,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useThemeContext } from "../../../context/ThemeContext";

const CategoriesBar = () => {
  const [searchParams] = useSearchParams();
  const activeCategory = searchParams.get("category");
  const { mode } = useThemeContext();

  const { data, isLoading, isError, isSuccess, refetch } = useQuery({
    queryKey: ["allCategories"],
    queryFn: getAllCategories,
    staleTime: 1000 * 60 * 60,
  });

  if (isLoading)
    return <CircularProgress sx={{ display: "block", mx: "auto", my: 5 }} />;

  if (isError)
    return (
      <Alert
        severity="error"
        sx={{ display: "flex", justifyContent: "center", my: 5 }}
      >
        Error fetching categories.
        <Button color="error" onClick={refetch} sx={{ ml: 2 }}>
          Retry
        </Button>
      </Alert>
    );

  const { category: categories } = data;
  if (isSuccess && categories?.length > 0) {
    return (
      <div className="w-full">
        <Accordion
          sx={{ backgroundColor: mode === "light" ? "white" : "#0a0a0a" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="category-content"
            id="category-header"
          >
            <Typography
              variant="h6"
              className="font-semibold dark:text-primary"
            >
              Browse Categories
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px",
              }}
            >
              {categories.map((cat) => (
                <ListItemButton
                  key={cat._id}
                  component={Link}
                  to={`/products?category=${encodeURIComponent(cat.name)}`}
                  selected={activeCategory === cat.name}
                  className={`!rounded-md !mb-1 !px-4 !py-2 transition-colors ${
                    activeCategory === cat.name
                      ? "!bg-primary !text-white dark:!text-black"
                      : "bg-gray-200 dark:bg-[#2a2a2a] text-gray-800 dark:text-white hover:!bg-secondary hover:!text-white"
                  }`}
                >
                  {cat.name}
                </ListItemButton>
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
      </div>
      // <nav className="bg-gray-100 dark:bg-[#1c1c1c] py-3 shadow-md transition-colors duration-300">
      //   <ul className="flex flex-wrap justify-center gap-4">
      //     {categories.map((cat) => (
      //       <li key={cat._id}>
      //         <Link
      //           to={`/products?category=${encodeURIComponent(cat)}`}
      //           className={`${
      //             activeCategory === cat.name ? "active" : ""
      //           } bg-gray-200 dark:bg-[#2a2a2a] text-gray-800 dark:text-white px-5 py-2 rounded-md font-medium transition-colors duration-300 hover:bg-secondary hover:text-white focus:outline-none"`}
      //         >
      //           {cat.name}
      //         </Link>
      //       </li>
      //     ))}
      //   </ul>
      // </nav>
    );
  }

  return (
    <div className="flex justify-center items-center py-10 text-gray-500">
      No categories found.
    </div>
  );
};

export default CategoriesBar;
