import { Button, Container, Group, Stack, Title } from "@mantine/core";
import { useRef, useEffect, useCallback } from "react";

import { IconArrowLeft } from "@tabler/icons-react";
import RichEditor from "../components/RichEditor";
import { useNoteEditor } from "../contexts/NoteEditorContext";
import { createNote } from "../services/noteService";
import { useNavigate } from "react-router-dom";
import { NOTE_COLOR_THEMES } from "../constants/noteColorThemes";

const noteColorThemes = NOTE_COLOR_THEMES;

export default function NewNotesPage() {
  const { color, title, content, setTitle } = useNoteEditor();
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  const titleRef = useRef<HTMLHeadingElement>(null);

  const noteColor =
    noteColorThemes.find((val) => val.id === color)?.secondary || "";

  const navigate = useNavigate();

  const handleInput = useCallback(() => {
    const value = titleRef.current?.innerText || "";

    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    debounceTimer.current = setTimeout(() => {
      setTitle(value);
    }, 500);
  }, [setTitle]); // 500ms debounce});

  const handleSave = async () => {
    try {
      const data = { title, content, color };
      const res = await createNote(data);
      navigate("/notes");
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, []);
  return (
    <>
      <Container>
        <Group justify="space-between" my={20}>
          <Button
            color="black"
            leftSection={<IconArrowLeft />}
            variant="subtle"
          >
            Go back
          </Button>
          <Button color="black" onClick={handleSave}>
            Save
          </Button>
        </Group>
      </Container>

      <Container bg={noteColor} py={20} style={{ borderRadius: "10px" }}>
        <Stack gap={0}>
          <Title
            ref={titleRef}
            contentEditable
            suppressContentEditableWarning
            onInput={handleInput}
          >
            Untitled
          </Title>

          <RichEditor noteColor={noteColor} />
        </Stack>
      </Container>
    </>
  );
}
