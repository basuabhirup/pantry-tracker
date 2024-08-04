"use client";

import PantryContext from "@/context/context";
import { Box, Button, Modal, Paper, Stack, Typography } from "@mui/material";
import { useContext, useState } from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { promptAI } from "@/openrouter/prompt";
import { marked } from "marked";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 640,
  bgcolor: "white",
  border: "0.5px solid #fff",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: 3,
  borderRadius: "8px",
  outline: "none",
  height: "600px",
  overflowY: "scroll",
};

export const SuggestRecipe = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [recipeSuggestion, setRecipeSuggestion] = useState<string>("");
  const { items } = useContext(PantryContext);

  const handleOpen = async () => {
    setIsModalOpen(true);
    if (!recipeSuggestion) {
      setIsLoading(true);
      const prompt = `Please suggest some delicious food recipe assuming I have only these items in my pantry: 
      ${JSON.stringify(items)}. Start your response with "Here are a few recipe suggestions...`;
      console.log(prompt);
      const response = await promptAI(prompt);
      console.log(response);
      const responseHtml = await marked.parse(response);
      console.log(responseHtml);
      setRecipeSuggestion(responseHtml);
      setIsLoading(false);
    }
  };
  const handleClose = () => setIsModalOpen(false);

  return (
    <>
      <Modal
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {!isLoading && (
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              display={"flex"}
              alignItems={"center"}
              gap={2}
            >
              <AutoAwesomeIcon fontSize="medium" /> AI Suggested Recipe List
            </Typography>
          )}
          {isLoading && <p>Cooking up ideas..</p>}
          {!isLoading && (
            <div
              dangerouslySetInnerHTML={{ __html: recipeSuggestion }}
              style={{ lineHeight: "1.5" }}
            />
          )}
        </Box>
      </Modal>
      <Button variant="contained" color="warning" onClick={handleOpen}>
        <AutoAwesomeIcon fontSize="small" /> &nbsp; Suggest Recipe
      </Button>
    </>
  );
};
