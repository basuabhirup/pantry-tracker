"use client";

import PantryContext from "@/context/context";
import { Box, Button, Modal, Paper, Stack, Typography } from "@mui/material";
import { useContext, useState } from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { promptAI } from "@/openrouter/prompt";
import { marked } from "marked";
import { Loader } from "./loader";

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
  const { items, recipeSuggestion, setRecipeSuggestion } =
    useContext(PantryContext);

  if (items.length < 1) return null;

  const suggestRecipe = async () => {
    setIsLoading(true);
    const prompt = `Please suggest some delicious food recipe assuming I have only these items in my pantry: 
      ${JSON.stringify(items)}. Start your response with "Here are a few recipe suggestions..."`;
    console.log(prompt);
    const response = await promptAI(prompt);
    console.log(response);
    const responseHtml = await marked.parse(response);
    // console.log(responseHtml);
    setRecipeSuggestion(responseHtml);
    setIsLoading(false);
  };

  const handleOpen = async () => {
    setIsModalOpen(true);
    if (!recipeSuggestion) {
      await suggestRecipe();
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
          <Box display="flex" justifyContent={"space-between"}>
            <Typography
              id="modal-modal-title"
              variant="h5"
              component="h5"
              display={"flex"}
              alignItems={"center"}
              gap={2}
            >
              <AutoAwesomeIcon fontSize="medium" /> Recipe Suggestions
            </Typography>

            <Button
              variant="contained"
              color="warning"
              onClick={suggestRecipe}
              disabled={isLoading}
            >
              <AutoAwesomeIcon fontSize="small" /> &nbsp; Try Again
            </Button>
          </Box>
          {isLoading && (
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Loader />
            </Box>
          )}
          {!isLoading && (
            <div
              dangerouslySetInnerHTML={{ __html: recipeSuggestion }}
              style={{ lineHeight: "1.5" }}
            />
          )}
        </Box>
      </Modal>
      <Button
        variant="contained"
        color="warning"
        onClick={handleOpen}
        disabled={isLoading}
      >
        <AutoAwesomeIcon fontSize="small" /> &ensp;
        {recipeSuggestion.length > 0 ? "Recipe Suggestions" : "Suggest Recipe"}
      </Button>
    </>
  );
};
