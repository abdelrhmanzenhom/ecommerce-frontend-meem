import React from "react";
import { IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useThemeContext } from "../../context/ThemeContext";

export default function ThemeToggleButton() {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <IconButton
      onClick={toggleTheme}
      variant={mode === "light" ? "contained" : "outlined"}
      sx={{
        textTransform: "none",

        borderRadius: 100,
      }}
    >
      {mode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
}
