"use client";

import PantryContext from "@/context/context";
import { Autocomplete, Box, TextField } from "@mui/material";
import { SyntheticEvent, useContext } from "react";

export const SearchItem = () => {
  const { items, searchItem } = useContext(PantryContext);

  if (items.length < 1) return null;

  const handleChange = (e: SyntheticEvent) => {
    const queryString = (e.target as HTMLLIElement).textContent as string;
    console.log(queryString);
    searchItem(queryString);
  };

  return (
    <Box width="150px">
      <Autocomplete
        freeSolo
        disableClearable
        options={items.map((item) => item.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Item"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
        fullWidth
        onInputChange={handleChange}
        sx={{
          backgroundColor: "#e0f0ff",
        }}
      />
    </Box>
  );
};
