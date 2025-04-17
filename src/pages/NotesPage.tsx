import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Stack, Title, Button, Grid, Loader } from "@mantine/core";
import { IconDeviceIpadPlus } from "@tabler/icons-react";
import NoteCard from "../components/NoteCard";
import { getNotes } from "../services/noteService";

export default function NotesPage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [notes, setNotes] = useState<
    { title: string; content: string; color: string | null; date: string }[]
  >([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNotes = async () => {
      const data = await getNotes();
      setNotes((prev) => [...prev, ...data]);
      setIsLoading(false);
    };
    fetchNotes();
  }, []);

  const handleAddNew = () => {
    navigate("/new");
  };

  if (notes.length === 0) {
    return (
      <Flex h={"100%"} align={"center"} justify={"center"}>
        {isLoading ? (
          <Loader color="black" size="lg" type="bars" />
        ) : (
          <Stack justify="center" align="center" gap={0}>
            <Title h={"100%"}>No notes yet.</Title>
            <Button
              mt={20}
              variant="outline"
              color="rgba(43, 43, 43, 1)"
              leftSection={<IconDeviceIpadPlus size="16" />}
              onClick={handleAddNew}
            >
              Add New Note
            </Button>
          </Stack>
        )}
      </Flex>
    );
  }
  return (
    <Grid gutter={"lg"} w={"100%"} overflow="hidden" p={50}>
      {notes.map((note, index) => (
        <NoteCard key={index} note={note} />
      ))}
    </Grid>
  );
}
