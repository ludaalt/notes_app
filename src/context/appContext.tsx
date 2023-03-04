import React, { FC, useState } from "react";

import { INoteItem, AppContextType } from "../types/types";
import { notes } from "../data/notes";

export const AppContext = React.createContext<AppContextType | null>(null);

interface Props {
  children?: React.ReactElement;
}

const AppProvider: FC<Props> = ({ children }) => {
  const [notesList, setNotesList] = useState<INoteItem[]>(notes);

  const [currentNote, setCurrentNote] = useState<INoteItem>();

  const chooseCurrentNote = (id: number) => {
    const choosenNote = notesList.find((item) => item.id === id);
    setCurrentNote(choosenNote);
  };

  const filterData = (value: string) => {
    if (!value) {
      setNotesList(notes);
      return;
    }
    const filteredAppData = notes.filter((item) => {
      return item.title.toLowerCase().includes(value.toLowerCase());
    });

    setNotesList(filteredAppData);
  };

  const deleteNote = (id: number) => {
    const newNoteList = notesList.filter((item: INoteItem) => item.id !== id);
    setNotesList(newNoteList);
  };

  return (
    <AppContext.Provider
      value={{
        notesList,
        currentNote,
        chooseCurrentNote,
        filterData,
        deleteNote,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
