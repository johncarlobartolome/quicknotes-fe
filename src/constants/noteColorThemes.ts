export type NoteColorTheme = {
  id: string;
  name: string;
  primary: string;
  secondary: string;
};

export const NOTE_COLOR_THEMES: NoteColorTheme[] = [
  {
    id: "blue",
    name: "Blue",
    primary: "#1864ab",
    secondary: "#a5d8ff",
  },
  {
    id: "yellow",
    name: "Yellow",
    primary: "#e67700",
    secondary: "#ffec99",
  },
  {
    id: "green",
    name: "Green",
    primary: "#2b8a3e",
    secondary: "#b2f2bb",
  },
];
