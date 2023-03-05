import { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import ListIcon from "@mui/icons-material/List";
import GridViewIcon from "@mui/icons-material/GridView";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";

import { AppContext } from "../context/appContext";
import { AppContextType } from "../types/types";
import PreviewAreaControlPanel from "./PreviewAreaControlPanel";

const StyledNoteListControlPanel = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  width: 30%;
  border-right: 2px solid grey;

  button {
    border: 2px solid transparent;
  }

  .isActive {
    border: 2px solid gray;
  }
`;

const NoteListControlPanel = () => {
  const { showMode, showModeHandle, currentNote, openDeleteDialog } =
    useContext(AppContext) as AppContextType;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <StyledNoteListControlPanel>
        <div>
          <IconButton
            className={showMode === "list" ? `isActive` : ""}
            color="secondary"
            aria-label="choose a layout option"
            onClick={() => showModeHandle()}
          >
            <ListIcon />
          </IconButton>

          <IconButton
            className={showMode === "grid" ? `isActive` : ""}
            color="secondary"
            aria-label="choose a layout option"
            onClick={() => showModeHandle()}
          >
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
      <PreviewAreaControlPanel />
    </div>
  );
};

export default NoteListControlPanel;
