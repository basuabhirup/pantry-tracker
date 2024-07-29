"use client";

import { db } from "@/config/firebase";
import { Box, Stack, Typography } from "@mui/material";
import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";

interface PantryItem {
  name: string;
  count: number;
}

export const PantryItems = () => {
  const [items, setItems] = useState<PantryItem[]>([]);

  useEffect(() => {
    const pantryItems: PantryItem[] = [];
    getDocs(collection(db, "pantry-items")).then((docs) => {
      docs.forEach((doc) => {
        // console.log(doc.id, doc.data().count);
        pantryItems.push({
          name: doc.id,
          count: doc.data().count,
        });
      });
      console.log(pantryItems);
      setItems(pantryItems);
    });
  }, []);

  return (
    <Stack width="800px" height="600px" spacing={2} overflow="auto">
      {items.map(({ name }) => (
        <Box
          key={name}
          width="100%"
          minHeight="100px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgcolor="#e0f0ff"
        >
          <Typography variant="h5">
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
};
