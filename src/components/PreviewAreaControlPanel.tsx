import { useContext } from "react";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";

import SearchField from "./SearchField";
import { AppContext } from "../context/appContext";
import { AppContextType } from "../types/types";

const StyledPreviewAreaControlPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  padding: 0 20px;
`;

const PreviewAreaControlPanel = () => {
  const { formatTextHandler, openAddDialog } = useContext(
    AppContext
  ) as AppContextType;

  return (
    <StyledPreviewAreaControlPanel>
      <div>
        <IconButton
          color="secondary"
          aria-label="edit note"
          onClick={() => openAddDialog()}
        >
          <AddIcon />
        </IconButton>

        <IconButton
          color="secondary"
          aria-label="edit note"
          onClick={() => formatTextHandler()}
        >
          <FormatColorTextIcon />
        </IconButton>
      </div>
      <SearchField />
    </StyledPreviewAreaControlPanel>
  );
};

export default PreviewAreaControlPanel;
