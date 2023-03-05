import styled from "styled-components";

import AppProvider from "./context/appContext";
import NoteList from "./components/NoteList";
import PreviewArea from "./components/PreviewArea";
import DeleteDialog from "./components/DeleteDialog";
import NoteListControlPanel from "./components/NoteListControlPanel";
import AddNoteDialog from "./components/AddNoteDialog";

const MainComponent = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const App = (): JSX.Element => {
  return (
    <AppProvider>
      <MainComponent>
        <NoteListControlPanel />

        <div style={{ display: "flex", flexGrow: 1 }}>
          <NoteList />
          <PreviewArea />
        </div>

        <DeleteDialog />
        <AddNoteDialog />
      </MainComponent>
    </AppProvider>
  );
};

export default App;
