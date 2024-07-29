import { Box, Stack, Typography } from "@mui/material";

const items = [
  "tomato",
  "potato",
  "onion",
  "garlic",
  "ginger",
  "carrot",
  "lettuce",
];

export default function Home() {
  return (
    <Box
      width="100vw"
      height="100vh"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box>
        <Box
          width="800px"
          height="100px"
          bgcolor="#ADD8E6"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          marginBottom={"2px"}
        >
          <Typography variant="h3" color="#333" textAlign="center">
            Pantry Items
          </Typography>
        </Box>
        <Stack width="800px" height="600px" spacing={2} overflow="auto">
          {items.map((item) => (
            <Box
              key={item}
              width="100%"
              minHeight="100px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              bgcolor="#e0f0ff"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
