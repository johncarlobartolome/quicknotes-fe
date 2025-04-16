import { createContext, useContext } from "react";
type NoteContextType = {
  title: string;
  content: string;
  editNote?: () => void;
  setContent: (value: string) => void;
};

export const NoteEditorContext = createContext<NoteContextType | null>(null);

export const useNoteEditor = () => {
  const context = useContext(NoteEditorContext);
  if (!context)
    throw new Error("useNoteEditor must be used within a NoteProvider");
  return context;
};
