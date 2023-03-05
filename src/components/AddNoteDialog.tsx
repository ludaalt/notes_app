import { useContext, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { AppContext } from "../context/appContext";
import { AppContextType } from "../types/types";

const AddNoteDialog = () => {
  const { isAddModalOpen, closeAddDialog, addNote } = useContext(
    AppContext
  ) as AppContextType;

  const [dialogData, setDialogData] = useState({
    title: "",
    description: "",
  });

  return (
    <div>
      <Dialog open={isAddModalOpen} onClose={closeAddDialog}>
        <DialogTitle>Create New Note</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your note caption and optional description
          </DialogContentText>
          <TextField
            autoComplete="off"
            id="title"
            label="Note Title"
            type="text"
            fullWidth
            variant="standard"
            value={dialogData.title}
            onChange={(e) =>
              setDialogData({ ...dialogData, title: e.target.value })
            }
          />
          <TextField
            margin="dense"
            id="description"
            label="Note Description"
            type="text"
            fullWidth
            variant="standard"
            value={dialogData.description}
            onChange={(e) =>
              setDialogData({ ...dialogData, description: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setDialogData({ title: "", description: "" });
              closeAddDialog();
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              addNote(dialogData);
              setDialogData({ title: "", description: "" });
              closeAddDialog();
            }}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddNoteDialog;
