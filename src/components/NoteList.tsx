import { useContext } from "react";
import styled from "styled-components";

import { AppContext } from "../context/appContext";
import { AppContextType, INoteItem } from "../types/types";

import Note from "./Note";

const StyledNoteList = styled.div<{
  showMode: string;
  currentNote?: INoteItem;
}>`
  /* width: 30%; */
  /* flex-grow: 3; */

  width: ${(props) =>
    props.showMode === "list" ? `30%` : props.currentNote ? `0` : "100%"};

  border-right: ${(props) =>
    props.showMode === "list" ? `2px solid grey` : `none`};

  border-top: ${(props) =>
    props.showMode === "list" ? `none` : `2px solid grey`};

  display: ${(props) =>
    props.showMode === "grid" && props.currentNote ? "none" : "block"};

  ul {
    display: ${(props) => (props.showMode === "list" ? `block` : `flex`)};
    flex-wrap: wrap;
    gap: 20px;

    flex-grow: 1;
    color: white;
    padding: 20px;

    li {
      width: ${(props) => (props.showMode === "list" ? `auto` : `25%`)};
      min-height: ${(props) => (props.showMode === "list" ? `auto` : `150px`)};
    }
  }
`;

const NoteList = () => {
  const { showMode, notesList, currentNote, chooseCurrentNote } = useContext(
    AppContext
  ) as AppContextType;

  return (
    <StyledNoteList showMode={showMode} currentNote={currentNote}>
      <ul>
        {notesList.map((item) => (
          <Note
            isChoosen={currentNote?.id === item.id}
            chooseCurrentNote={() => chooseCurrentNote(item.id)}
            key={item.id}
            item={item}
          />
        ))}
      </ul>
    </StyledNoteList>
  );
};

export default NoteList;
