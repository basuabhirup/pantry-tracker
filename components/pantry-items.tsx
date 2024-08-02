"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import PantryContext from "@/context/context";

export const PantryItems = () => {
  const { items, updateItems, removeItem } = useContext(PantryContext);

  useEffect(() => {
    !!updateItems && updateItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Stack width="800px" height="600px" spacing={2} overflow="auto">
      {!!items &&
        items.map(({ name, count }) => (
          <Box
            key={name}
            width="100%"
            minHeight="100px"
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            bgcolor="#e0f0ff"
          >
            <Typography variant="h4">
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </Typography>
            <Typography variant={"h6"} color={"#333"} textAlign={"center"}>
              Quantity: {count}
            </Typography>
            {!!removeItem && (
              <Button variant="contained" onClick={() => removeItem(name)}>
                Remove
              </Button>
            )}
          </Box>
        ))}
    </Stack>
  );
};
