export interface INoteItem {
  id: number;
  title: string;
  description: string;
  date: string;
}

export type AppContextType = {
  notesList: INoteItem[];
  currentNote?: INoteItem;

  deleteNote: (id: number) => void;
  chooseCurrentNote: (id: number) => void;
};
