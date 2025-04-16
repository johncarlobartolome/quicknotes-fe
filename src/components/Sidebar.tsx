import {
  AppShell,
  Center,
  NavLink,
  Stack,
  Button,
  Container,
  Group,
} from "@mantine/core";
import {
  IconCalendarWeek,
  IconArchive,
  IconTrash,
  IconDeviceIpadPlus,
  IconNote,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { NOTE_COLOR_THEMES } from "../constants/noteColorThemes";
import { useNoteEditor } from "../contexts/NoteEditorContext";

const noteColorThemes = NOTE_COLOR_THEMES;

export default function Sidebar() {
  const { color, setColor } = useNoteEditor();

  const handleSetColor = (val: string | null) => {
    console.log(color, val);
    if (color === val) {
      setColor(null);
      return;
    }
    setColor(val);
  };

  // const handleSelectedColor = (idx: string) => {
  //   if (idx === selectedColor) {
  //     setSelectedColor(null);
  //     return;
  //   }
  //   setSelectedColor(idx);
  // };
  return (
    <AppShell.Navbar>
      <Center>
        <Stack gap={0}>
          <Container p="lg">
            <Button
              to="/new"
              component={Link}
              variant="outline"
              color="rgba(43, 43, 43, 1)"
              leftSection={<IconDeviceIpadPlus size="16" />}
            >
              Add New
            </Button>
            <Group mt={20}>
              {noteColorThemes.map((val) => (
                <Button
                  radius="xl"
                  size="xs"
                  color={val.secondary}
                  style={{
                    outline:
                      val.id === color ? `2px ${val.secondary} solid` : ``,
                    outlineOffset: "2px",
                  }}
                  onClick={() => handleSetColor(val.id)}
                ></Button>
              ))}
            </Group>
          </Container>
          <NavLink
            component={Link}
            to={"/notes"}
            mt={"xl"}
            label="Notes"
            leftSection={<IconNote size={16} />}
          />
          <NavLink
            label="Calendar"
            leftSection={<IconCalendarWeek size={16} />}
          />
          <NavLink label="Archive" leftSection={<IconArchive size={16} />} />
          <NavLink label="Trash" leftSection={<IconTrash size={16} />} />
        </Stack>
      </Center>
    </AppShell.Navbar>
  );
}
