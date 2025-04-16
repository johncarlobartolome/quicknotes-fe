import {
  AppShell,
  Flex,
  Center,
  Title,
  Group,
  Input,
  ActionIcon,
} from "@mantine/core";
import { IconMenu2, IconSearch } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <AppShell.Header p={0}>
      <Flex h={"100%"} align="center">
        <Center w={300}>
          <Link
            style={{
              textDecoration: "none",
              textAlign: "center",
              color: "inherit",
              fontWeight: "bold",
            }}
            to="/"
          >
            QuickNotes
          </Link>
        </Center>
        <Group px={20} flex={1} justify="space-between">
          <Title>MY NOTES</Title>
          <Input
            flex={0.5}
            placeholder="Search"
            leftSection={<IconSearch size={16} />}
          />
          <ActionIcon
            variant="subtle"
            size="md"
            aria-label="Settings"
            color="black"
          >
            <IconMenu2 style={{ width: "70%", height: "70%" }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Flex>
      {/* <Container fluid h={"100%"} p={0} style={{ backgroundColor: "pink" }}>
        <Center h={"100%"} w={300} style={{ backgroundColor: "tomato" }}>
          <Link
            style={{
              textDecoration: "none",
              textAlign: "center",
              color: "inherit",
              fontWeight: "bold",
            }}
            to="/"
          >
            QuickNotes
          </Link>
        </Center>
      </Container> */}
    </AppShell.Header>
  );
}
