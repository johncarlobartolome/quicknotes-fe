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
import { IconEdit, IconAlarm } from "@tabler/icons-react";

export default function NoteCard() {
  const { editNote } = useNoteEditor();
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
          borderRadius: "16px",
          boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06)",
          border: "1px solid #e5e7eb",
        }}
      >
        <Stack gap={0}>
          <Text size="sm">04/15/2025</Text>
          <Group
            m={0}
            gap={0}
            justify="space-between"
            style={{
              height: "40px",
            }}
          >
            <Title size="h4">Hi</Title>
            <ActionIcon variant="subtle" aria-label="Settings" color="black">
              <IconEdit style={{ width: "70%", height: "70%" }} stroke={1.5} />
            </ActionIcon>
          </Group>
          <Container
            p={0}
            style={{
              display: "-webkit-box",
              overflow: "hidden",
              textOverflow: "ellipsis",
              WebkitLineClamp: 5 /* Number of lines */,
              WebkitBoxOrient: "vertical",
            }}
          >
            This is a long text that should be truncated after a few lines. It
            will use ellipsis if it's too long. This is a long text that should
            be truncated after a few lines. It will use ellipsis if it's too
            long.
          </Container>
        </Stack>
        <Group gap="xs" mt="md">
          <IconAlarm size={16} />
          <Text size="sm">10:30 PM, Monday</Text>
        </Group>
      </Container>
    </Grid.Col>
  );
}
