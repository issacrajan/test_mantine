"use client";
import { AppShell, Burger, Group, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
// import  from "@mantine/core/st";
import { NavbarNested } from "@/components/Navbar";
import { PostLoginHeader } from "@/components/PostLoginHeader";

export default function CollapseDesktop() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <PostLoginHeader />
      </AppShell.Header>
      <AppShell.Navbar>
        <NavbarNested />
      </AppShell.Navbar>
      <AppShell.Main pt={`calc(${rem(60)}`}>
        <Group>
          <Burger
            style={
              desktopOpened
                ? { zIndex: 1001, marginLeft: -36 }
                : { marginLeft: 0 }
            }
            opened={desktopOpened}
            onClick={toggleDesktop}
            visibleFrom="sm"
            size="sm"
          />
          <Burger
            style={{ backgroundColor: "blue", height: 40 }}
            opened={mobileOpened}
            onClick={toggleMobile}
            hiddenFrom="sm"
            size="sm"
          />
        </Group>
        <main style={{ borderStyle: "solid", borderColor: "blue" }}>main</main>
      </AppShell.Main>
      {/* <AppShell.Footer style={{ marginLeft: "300px" }}>
        <Group
          style={{
            borderStyle: "solid",
            borderColor: "blue",
            marginBottom: "8px",
          }}
        >
          <span style={{ fontSize: "25px" }}>footer</span>
        </Group>
      </AppShell.Footer> */}
    </AppShell>
  );
}
