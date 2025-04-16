import { ReactNode } from "react";

import { AppShell } from "@mantine/core";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <AppShell header={{ height: 60 }} navbar={{ width: 300, breakpoint: "sm" }}>
      <Header />
      <Sidebar />
      <AppShell.Main h="10px">{children}</AppShell.Main>
    </AppShell>
  );
}
