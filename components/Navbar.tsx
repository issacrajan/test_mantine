"use client";
import Image from "next/image";
import Link from "next/link";
import { Group, Code, ScrollArea, rem } from "@mantine/core";
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
} from "@tabler/icons-react";
// import { UserButton } from "../UserButton/UserButton";
import { LinksGroup } from "./NavbarLinksGroup";
import classes from "./NavbarNested.module.css";
import { useState } from "react";

const mockdata = [
  { label: "Dashboard", icon: IconGauge },
  {
    label: "Market news",
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      {
        label: "Overview",
        link: "/",
        links: [
          { label: "Level3 : 1", link: "/" },
          { label: "Level3 : two", link: "/" },
        ],
      },
      { label: "Forecasts", link: "/" },
      { label: "Outlook", link: "/" },
      { label: "Real time", link: "/" },
    ],
  },
  {
    label: "Releases",
    icon: IconCalendarStats,
    links: [
      { label: "Upcoming releases", link: "/" },
      { label: "Previous releases", link: "/" },
      { label: "Releases schedule", link: "/" },
    ],
  },
  { label: "Analytics", icon: IconPresentationAnalytics },
  { label: "Contracts", icon: IconFileAnalytics },
  { label: "Settings", icon: IconAdjustments },
  {
    label: "Security",
    icon: IconLock,
    links: [
      { label: "Enable 2FA", link: "/" },
      { label: "Change password", link: "/" },
      { label: "Recovery codes", link: "/" },
    ],
  },
];

export function NavbarNested() {
  const [active, setActive] = useState<string>("");
  const links = mockdata.map((item) => (
    <LinksGroup
      {...item}
      key={item.label}
      level={0}
      active={active}
      setActive={setActive}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <ScrollArea type="auto" className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>
    </nav>
  );
}
