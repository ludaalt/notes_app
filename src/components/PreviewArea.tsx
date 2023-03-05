import { useContext, useState, useEffect } from "react";
import styled from "styled-components";

import { AppContextType, INoteItem } from "../types/types";
import { AppContext } from "../context/appContext";

const StyledPreviewArea = styled.div<{
  showMode: string;
  currentNote?: INoteItem;
}>`
  width: ${(props) =>
    props.showMode === "list" ? `70%` : props.currentNote ? "100%" : `0%`};

  padding: ${(props) => (props.showMode === "list" ? `20px` : `0`)};
`;

const StyledTextArea = styled.textarea<{
  showMode: string;
}>`
  width: 100%;
  height: 100%;

  padding: 20px 0;
  padding: ${(props) => (props.showMode === "list" ? `0` : `20px`)};

  border: none;
  background: none;

  &:focus {
    outline: none;
  }
`;

const PreviewArea = () => {
  const { showMode, currentNote, rewriteNote, isNoteFormatted } = useContext(
    AppContext
  ) as AppContextType;

  const [editValue, setEditValue] = useState<string | "">("");

  useEffect(() => {
    currentNote && setEditValue(currentNote.title);
  }, [currentNote]);

  const rewriteHandle = (value: string) => {
    setEditValue(value);
    rewriteNote(value);
  };

  return (
    <StyledPreviewArea showMode={showMode} currentNote={currentNote}>
      <StyledTextArea
        className={isNoteFormatted ? "bold" : ""}
        showMode={showMode}
        value={editValue}
        onChange={(e) => rewriteHandle(e.target.value)}
      ></StyledTextArea>
    </StyledPreviewArea>
  );
};

export default PreviewArea;
