import { Box, Typography } from "@mui/material";
import { PantryItems } from "@/components/pantry-items";
import { AddItem } from "@/components/add-item";
import { SearchItem } from "@/components/search-item";

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
      sx={{
        backgroundColor: "#D9AFD9",
        backgroundImage: "linear-gradient(176deg, #D9AFD9 0%, #97D9E1 100%)",
      }}
    >
      <Box
        width="800px"
        display={"flex"}
        justifyContent={"space-between"}
        gap={4}
      >
        <AddItem />
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
          <Typography variant="h3" color="#333" textAlign="center">
            Pantry Items
          </Typography>
        </Box>
        <PantryItems />
      </Box>
    </Box>
  );
}
