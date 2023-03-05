export interface INoteItem {
  id: number;
  title: string;
  description: string;
  date: string;
}

export type AppContextType = {
  showMode: string;
  showModeHandle: () => void;

  isModalOpen: boolean;
  openDeleteDialog: () => void;
  closeDeleteDialog: () => void;

  notesList: INoteItem[];
  currentNote?: INoteItem;

  deleteNote: (id: number) => void;
  chooseCurrentNote: (id: number) => void;
  filterData: (value: string) => void;

  rewriteNote: (value: string) => void;
};
