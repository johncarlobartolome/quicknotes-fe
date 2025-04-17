import { useNoteEditor } from "../contexts/NoteEditorContext";
import {
  ActionIcon,
  Container,
  Grid,
  Group,
  Stack,
  Title,
  Text,
} from "@mantine/core";
import { IconEdit } from "@tabler/icons-react";
import {
  NOTE_COLOR_THEMES,
  NoteColorTheme,
} from "../constants/noteColorThemes";

const noteColorThemes = NOTE_COLOR_THEMES;

interface NoteCardProps {
  note: {
    title: string;
    content: string;
    color: string | null;
    date: string;
  };
}

export default function NoteCard({ note }: NoteCardProps) {
  const { editNote } = useNoteEditor();
  const noteColor = noteColorThemes.find(
    (val: NoteColorTheme) => val.id === note.color
  );

  return (
    <Grid.Col
      span={2}
      style={{
        height: "300px",
      }}
    >
      <Container
        onClick={editNote}
        style={{
          display: "flex",
          height: "100%",
          overflow: "hidden",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 10,
          backgroundColor: noteColor ? noteColor?.secondary : "",
          borderRadius: "16px",
          boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06)",
          border: "1px solid #e5e7eb",
        }}
      >
        <Stack gap={0}>
          <Text size="sm">{note.date}</Text>
          <Group
            m={0}
            gap={0}
            justify="space-between"
            style={{
              height: "40px",
            }}
          >
            <Title size="h4">{note.title}</Title>
            <ActionIcon variant="subtle" aria-label="Settings" color="black">
              <IconEdit style={{ width: "70%", height: "70%" }} stroke={1.5} />
            </ActionIcon>
          </Group>
          <Container
            dangerouslySetInnerHTML={{ __html: note.content }}
            p={0}
            m={0}
            style={{
              display: "-webkit-box",
              overflow: "hidden",
              textOverflow: "ellipsis",
              WebkitLineClamp: 3 /* Number of lines */,
              WebkitBoxOrient: "vertical",
            }}
          ></Container>
        </Stack>
        {/* <Group gap="xs" mt="md">
          <IconAlarm size={16} />
          <Text size="sm">10:30 PM, Monday</Text>
        </Group> */}
      </Container>
    </Grid.Col>
  );
}
