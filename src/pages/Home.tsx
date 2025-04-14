import { Container, Title, Button, Textarea } from "@mantine/core";

export default function Home() {
  return (
    <Container>
      <Title order={2} mb="md">
        📝 QuickNotes
      </Title>
      <Textarea placeholder="Write your note here..." minRows={6} />
      <Button mt="sm">Save Note</Button>
    </Container>
  );
}
