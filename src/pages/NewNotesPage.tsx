import { Button, Container, Group, Stack, Title } from "@mantine/core";
import { useState, useRef, useEffect, useCallback } from "react";

import { IconArrowLeft } from "@tabler/icons-react";
import RichEditor from "../components/RichEditor";
import { NoteEditorContext } from "../contexts/NoteEditorContext";

export default function NewNotesPage() {
  const [title, setTitle] = useState("Untitled");
  const [content, setContent] = useState("");
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  const titleRef = useRef<HTMLHeadingElement>(null);

  const handleInput = useCallback(() => {
    const value = titleRef.current?.innerText || "";

    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    debounceTimer.current = setTimeout(() => {
      setTitle(value);
    }, 500);
  }, []); // 500ms debounce});

  const handleSave = () => {
    console.log(title, content);
  };

  useEffect(() => {
    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, []);
  return (
    <NoteEditorContext.Provider value={{ title, content, setContent }}>
      <Container>
        <Stack gap={0}>
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

          <Title
            ref={titleRef}
            contentEditable
            suppressContentEditableWarning
            onInput={handleInput}
          >
            Untitled
          </Title>

          <RichEditor />
        </Stack>
      </Container>
    </NoteEditorContext.Provider>
  );
}
