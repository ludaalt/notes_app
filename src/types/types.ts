export interface INoteItem {
  id: number;
  title: string;
  description?: string;
  date: Date | string | number;
}

export type AppContextType = {
  showMode: string;
  showModeHandle: () => void;

  isModalOpen: boolean;
  openDeleteDialog: () => void;
  closeDeleteDialog: () => void;

  isAddModalOpen: boolean;
  openAddDialog: () => void;
  closeAddDialog: () => void;

  notesList: INoteItem[];
  currentNote?: INoteItem;

  deleteNote: (id: number) => void;
  chooseCurrentNote: (id: number) => void;
  filterData: (value: string) => void;

  rewriteNote: (value: string) => void;
  formatTextHandler: () => void;
  isNoteFormatted: boolean;

  addNote: (value: { title: string; description?: string }) => void;
};
