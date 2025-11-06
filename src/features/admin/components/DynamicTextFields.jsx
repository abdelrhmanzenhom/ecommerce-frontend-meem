import React from "react";
import { TextField, Button, Stack } from "@mui/material";

const DynamicTextFields = ({ field, value = [""], handleChange }) => {
  const handleAddField = () => {
    handleChange("", field, [...value, ""], value.length);
  };

  const handleRemoveField = () => {
    if (value.length > 1) {
      console.log("pewpew");
      handleChange("", field, value.slice(0, -1));
    }
  };

  return (
    <Stack direction={"row"} spacing={2}>
      <Stack spacing={2}>
        {value.map((val, index) => (
          <TextField
            key={index}
            label={`${field} ${index + 1}`}
            value={val}
            onChange={(e) => handleChange(e.target.value, field, value, index)}
            variant="outlined"
            fullWidth
          />
        ))}
      </Stack>

      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems={"start"}
        flexWrap={"wrap"}
      >
        <Button variant="contained" color="primary" onClick={handleAddField}>
          Add
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={handleRemoveField}
          disabled={value.length === 1}
        >
          Delete
        </Button>
      </Stack>
    </Stack>
  );
};

export default DynamicTextFields;
