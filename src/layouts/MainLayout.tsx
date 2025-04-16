import { ReactNode, useState } from "react";

import { AppShell } from "@mantine/core";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { NoteEditorContext } from "../contexts/NoteEditorContext";

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  const [title, setTitle] = useState<string>("Untitled");
  const [content, setContent] = useState<string>("");
  const [color, setColor] = useState<string | null>(null);

  return (
    <NoteEditorContext.Provider
      value={{ title, setTitle, content, setContent, color, setColor }}
    >
      <AppShell
        header={{ height: 60 }}
        navbar={{ width: 300, breakpoint: "sm" }}
      >
        <Header />
        <Sidebar />
        <AppShell.Main h="10px">{children}</AppShell.Main>
      </AppShell>
    </NoteEditorContext.Provider>
  );
}
