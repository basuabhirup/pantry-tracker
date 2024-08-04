"use client";

import { Box, IconButton, Stack, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import PantryContext from "@/context/context";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export const PantryItems = () => {
  const { items, addItem, updateItems, removeItem } = useContext(PantryContext);

  useEffect(() => {
    updateItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack width="800px" height="600px" spacing={1} overflow="auto">
      {items.map(({ name, count }) => (
        <Box
          key={name}
          width="100%"
          minHeight="100px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          bgcolor="#e0f0ff"
        >
          <Typography variant="h4" marginLeft={8}>
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Typography>
          <Box textAlign={"center"} marginRight={8}>
            <Typography
              variant={"body1"}
              color={"#333"}
              textAlign={"center"}
              marginBottom={1}
            >
              Quantity: {count}
            </Typography>
            <Box display={"flex"} justifyContent={"space-around"}>
              <IconButton
                aria-label="add item"
                color="success"
                onClick={() => addItem(name)}
              >
                <AddIcon />
              </IconButton>

              <IconButton
                aria-label="delete item"
                color="error"
                onClick={() => removeItem(name)}
              >
                <RemoveIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      ))}
    </Stack>
  );
};
