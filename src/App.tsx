import styled from "styled-components";

import AppProvider from "./context/appContext";
import NoteList from "./components/NoteList";
import PreviewArea from "./components/PreviewArea";
import DeleteDialog from "./components/DeleteDialog";

const MainComponent = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const App = (): JSX.Element => {
  return (
    <AppProvider>
      <MainComponent>
        <NoteList />
        <PreviewArea />
        <DeleteDialog />
      </MainComponent>
    </AppProvider>
  );
};

export default App;
