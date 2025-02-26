"use client";

import PantryContext from "@/context/context";
import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import AddIcon from "@mui/icons-material/Add";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: 3,
};

export const AddItem = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [itemName, setItemName] = useState<string>("");
  const [itemCount, setItemCount] = useState<number>(1);
  const { addItem } = useContext(PantryContext);

  const handleOpen = () => setIsModalOpen(true);
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Item
          </Typography>
          <Stack width="100%" direction={"row"} spacing={2}>
            <TextField
              label="Item"
              variant="outlined"
              fullWidth
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
            <TextField
              error={itemCount < 1}
              label="Count"
              type="number"
              value={itemCount}
              onChange={(e) => setItemCount(Number(e.target.value))}
            />
            <Button
              variant="contained"
              disabled={itemCount < 1}
              onClick={() => {
                addItem(itemName, itemCount);
                setItemName("");
                setItemCount(1);
                handleClose();
              }}
            >
              Add
            </Button>
          </Stack>
        </Box>
      </Modal>
      <Button variant="contained" color="secondary" onClick={handleOpen}>
        <AddIcon fontSize="small" /> &nbsp; Add Item
      </Button>
    </>
  );
};
