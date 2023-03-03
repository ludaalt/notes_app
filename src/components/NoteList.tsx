import NoteListControlPanel from "./NoteListControlPanel";
import styled from "styled-components";

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
  return (
    <StyledNoteList>
      <NoteListControlPanel />
      <ul>
        {notes.map((item) => (
          <Note key={item.id} item={item} />
        ))}
      </ul>
    </StyledNoteList>
  );
};

export default NoteList;
