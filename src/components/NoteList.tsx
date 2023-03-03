import { useContext } from "react";
import styled from "styled-components";

import NoteListControlPanel from "./NoteListControlPanel";
import { AppContext } from "../context/appContext";
import { AppContextType } from "../types/types";

import { notes } from "../data/notes";
import Note from "./Note";

const StyledNoteList = styled.div`
  width: 30%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-right: 2px solid grey;

  ul {
    flex-grow: 1;
    color: white;
    padding: 20px;
  }
`;

const NoteList = () => {
  const { currentNote, chooseCurrentNote } = useContext(
    AppContext
  ) as AppContextType;

  return (
    <StyledNoteList>
      <NoteListControlPanel />
      <ul>
        {notes.map((item) => (
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
