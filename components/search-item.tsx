"use client";

import PantryContext from "@/context/context";
import { Autocomplete, Box, TextField } from "@mui/material";
import { KeyboardEvent, ReactEventHandler, useContext } from "react";

export const SearchItem = () => {
  const { items, searchItem } = useContext(PantryContext);

  if (!items || items.length < 1) return null;

  const handleChange = (e: any) => {
    const queryString = e.target.textContent;
    console.log(queryString);
    !!searchItem && searchItem(queryString);
  };

  return (
    <Box width="300px">
      <Autocomplete
        freeSolo
        disableClearable
        options={items.map((item) => item.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search item"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
        fullWidth
        onInputChange={handleChange}
      />
    </Box>
  );
};
