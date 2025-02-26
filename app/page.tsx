import { Box, Typography } from "@mui/material";
import { PantryItems } from "@/components/pantry-items";
import { AddItem } from "@/components/add-item";
import { SearchItem } from "@/components/search-item";
import { SuggestRecipe } from "@/components/suggest-recipe";

export default function Home() {
  return (
    <Box
      width="100vw"
      height="100vh"
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={2}
    >
      <Box
        width="800px"
        display={"flex"}
        justifyContent={"space-between"}
        gap={4}
      >
        <AddItem />
        <SuggestRecipe />
        <SearchItem />
      </Box>
      <Box>
        <Box
          width="800px"
          height="100px"
          bgcolor="#ADD8E9"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          marginBottom={"2px"}
        >
          <Typography variant="h3" color="#333" textAlign="center" fontFamily={"inherit"}>
            Pantry Items
          </Typography>
        </Box>
        <PantryItems />
      </Box>
    </Box>
  );
}
