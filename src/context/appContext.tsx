import React, { FC, useState } from "react";

import { INoteItem, AppContextType } from "../types/types";
import { notes } from "../data/notes";
import SHOW_MODES from "../const/showModes";

export const AppContext = React.createContext<AppContextType | null>(null);

interface Props {
  children?: React.ReactElement;
}

const AppProvider: FC<Props> = ({ children }) => {
  const [notesList, setNotesList] = useState<INoteItem[]>(notes);
  const [currentNote, setCurrentNote] = useState<INoteItem>();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [showMode, setShowMode] = useState<string>(SHOW_MODES.List);

  const [isNoteFormatted, setIsNoteFormatted] = useState<boolean>(false);

  const showModeHandle = () => {
    showMode === SHOW_MODES.List
      ? setShowMode(SHOW_MODES.Grid)
      : setShowMode(SHOW_MODES.List);
  };

  const openDeleteDialog = () => {
    setIsModalOpen(true);
  };

  const closeDeleteDialog = () => {
    setIsModalOpen(false);
  };

  const chooseCurrentNote = (id: number) => {
    const choosenNote = notesList.find((item) => item.id === id);
    setCurrentNote(choosenNote);
  };

  const filterData = (value: string) => {
    if (!value) {
      setNotesList(notes);
      return;
    }
    const filteredAppData = notesList.filter((item) => {
      return item.title.toLowerCase().includes(value.toLowerCase());
    });

    setNotesList(filteredAppData);
  };

  const deleteNote = (id: number) => {
    const newNoteList = notesList.filter((item: INoteItem) => item.id !== id);
    setNotesList(newNoteList);
  };

  const rewriteNote = (value: string) => {
    setNotesList((prevState) =>
      prevState.map((item: INoteItem) =>
        item.id === currentNote!.id ? { ...item, title: value } : item
      )
    );
  };

  const formatTextHandler = () => setIsNoteFormatted((prev) => !prev);

  return (
    <AppContext.Provider
      value={{
        showMode,
        showModeHandle,
        isModalOpen,
        openDeleteDialog,
        closeDeleteDialog,
        notesList,
        currentNote,
        chooseCurrentNote,
        filterData,
        deleteNote,
        rewriteNote,
        formatTextHandler,
        isNoteFormatted,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
