import styled from "styled-components";

import AppProvider from "./context/appContext";
import NoteList from "./components/NoteList";
import PreviewArea from "./components/PreviewArea";

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
      </MainComponent>
    </AppProvider>
  );
};

export default App;
