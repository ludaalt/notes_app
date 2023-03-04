import { useContext } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

import { AppContext } from "../context/appContext";
import { AppContextType } from "../types/types";

const DeleteDialog = () => {
  const { isModalOpen, currentNote, deleteNote, closeDeleteDialog } =
    useContext(AppContext) as AppContextType;

  return (
    <div>
      <Dialog
        open={isModalOpen}
        onClose={closeDeleteDialog}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you really want to delete this note?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={closeDeleteDialog}>No</Button>
          <Button
            onClick={() => {
              deleteNote(currentNote!.id);
              closeDeleteDialog();
            }}
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteDialog;
