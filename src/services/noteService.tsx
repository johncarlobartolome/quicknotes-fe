import api from "./api";

export const getNotes = async () => {
  const res = await api.get("/api/notes");
  return res.data;
};

export const createNote = async (data: {
  title: string;
  content: string;
  color: string | null;
}) => {
  const res = await api.post("/api/notes", data);
  return res.data;
};
