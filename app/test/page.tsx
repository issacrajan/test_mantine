"use client";
import { AppShell, Burger, Group, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NavbarNested } from "@/components/Navbar";

export default function page() {
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
      }}
    >
      <AppShell.Navbar>
        <NavbarNested />
      </AppShell.Navbar>
      <AppShell.Main>main</AppShell.Main>
    </AppShell>
  );
}
