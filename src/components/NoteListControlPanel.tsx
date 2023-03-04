import { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import ListIcon from "@mui/icons-material/List";
import GridViewIcon from "@mui/icons-material/GridView";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";

import { AppContext } from "../context/appContext";
import { AppContextType } from "../types/types";

const StyledNoteListControlPanel = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const NoteListControlPanel = () => {
  const { currentNote, openDeleteDialog } = useContext(
    AppContext
  ) as AppContextType;

  return (
    <StyledNoteListControlPanel>
      <div>
        <IconButton color="secondary" aria-label="choose a layout option">
          <ListIcon />
        </IconButton>

        <IconButton color="secondary" aria-label="choose a layout option">
          <GridViewIcon />
        </IconButton>
      </div>

      <IconButton
        color="secondary"
        aria-label="delete a note"
        onClick={() => {
          openDeleteDialog();
        }}
        disabled={!currentNote}
      >
        <DeleteIcon />
      </IconButton>
    </StyledNoteListControlPanel>
  );
};

export default NoteListControlPanel;
