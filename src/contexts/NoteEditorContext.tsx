import { createContext, useContext } from "react";
type NoteContextType = {
  title: string;
  content: string;
  color: string | null;
  editNote?: () => void;
  setTitle: (value: string) => void;
  setContent: (value: string) => void;
  setColor: (value: string | null) => void;
};

export const NoteEditorContext = createContext<NoteContextType | null>(null);

export const useNoteEditor = () => {
  const context = useContext(NoteEditorContext);
  if (!context)
    throw new Error("useNoteEditor must be used within a NoteProvider");
  return context;
};
