import { useState } from "react";
import { NoteEditorContext } from "../contexts/NoteEditorContext";
import { Flex, Stack, Title, Button, Grid } from "@mantine/core";
import { IconDeviceIpadPlus } from "@tabler/icons-react";
import NoteCard from "../components/NoteCard";

const notes = [
  {
    _id: 1,
    title: "My Title",
    content: "This is the content",
  },
];

export default function NotesPage() {
  const [title] = useState("");
  const [content, setContent] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleAddNew = () => {
    setIsEditing(true);
  };

  if (isEditing) {
    return <h1>Editing</h1>;
  }

  if (notes.length === 0) {
    return (
      <Flex h={"100%"} align={"center"} justify={"center"}>
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
      </Flex>
    );
  }
  return (
    <NoteEditorContext.Provider
      value={{ title, content, setContent, editNote: handleAddNew }}
    >
      <Grid gutter={"lg"} w={"100%"} overflow="hidden" p={50}>
        <NoteCard />
        <Grid.Col span={2}>3</Grid.Col>
        <Grid.Col span={2}>4</Grid.Col>
        <Grid.Col span={2}>3</Grid.Col>
        <Grid.Col span={2}>4</Grid.Col>
        <Grid.Col span={2}>3</Grid.Col>
        <Grid.Col span={2}>4</Grid.Col>
      </Grid>
    </NoteEditorContext.Provider>
  );
}
