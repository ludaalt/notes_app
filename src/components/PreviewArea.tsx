import { useContext } from "react";
import styled from "styled-components";

import PreviewAreaControlPanel from "./PreviewAreaControlPanel";
import { AppContextType } from "../types/types";
import { AppContext } from "../context/appContext";

const StyledPreviewArea = styled.div`
  flex-grow: 1;
  padding: 20px;

  h1 {
    padding: 20px;
  }
`;

const PreviewArea = () => {
  const { currentNote } = useContext(AppContext) as AppContextType;

  return (
    <StyledPreviewArea>
      <PreviewAreaControlPanel />
      {currentNote && <h1>{currentNote.title}</h1>}
    </StyledPreviewArea>
  );
};

export default PreviewArea;
