import {
  AppShell,
  Center,
  NavLink,
  Stack,
  Button,
  Container,
} from "@mantine/core";
import {
  IconCalendarWeek,
  IconArchive,
  IconTrash,
  IconDeviceIpadPlus,
  IconNote,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
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
