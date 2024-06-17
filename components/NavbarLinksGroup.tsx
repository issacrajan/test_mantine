import { Dispatch, SetStateAction, useState } from "react";
import {
  Group,
  Box,
  Collapse,
  ThemeIcon,
  Text,
  UnstyledButton,
  rem,
} from "@mantine/core";
import { IconCalendarStats, IconChevronRight } from "@tabler/icons-react";
import classes from "./NavbarLinksGroup.module.css";

interface LinksGroupProps {
  icon?: React.FC<any>;
  label: string;
  initiallyOpened?: boolean;
  level: number;
  links?: { label: string; link: string }[];
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
}

export function LinksGroup({
  icon: Icon,
  label,
  initiallyOpened,
  links,
  level,
  active,
  setActive,
}: LinksGroupProps) {
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);

  const items2 = (hasLinks ? links : []).map((item) => (
    <LinksGroup
      {...item}
      key={item.label}
      level={level + 1}
      active={active}
      setActive={setActive}
    />
  ));

  const items = (hasLinks ? links : []).map((link) => (
    <Text<"a">
      component="a"
      className={classes.link}
      href={link.link}
      key={link.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(label);
      }}
    >
      {link.label + " ssd "}
    </Text>
  ));
  console.log(classes.link + " sm1");
  return (
    <>
      <UnstyledButton
        onClick={() => setOpened((o) => !o)}
        className={classes.control}
      >
        <Group justify="space-between" gap={0}>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              // borderLeft: "1px solid black",
            }}
          >
            {Icon ? (
              <Group gap={0}>
                <ThemeIcon variant="light" size={30}>
                  <Icon style={{ width: rem(18), height: rem(18) }} />
                </ThemeIcon>
                <Box
                  className={classes.link2}
                  ml="xs"
                  style={{ paddingLeft: rem(level * 10) }}
                >
                  {label}
                  {level}
                </Box>
              </Group>
            ) : (
              <Text<"a">
                ml="xs"
                style={{ paddingLeft: 30 + level * 16 }}
                component="a"
                className={classes.link2}
                data-active={label === active || undefined}
                href="#"
                key={label}
                onClick={(event) => {
                  event.preventDefault();
                  setActive(label);
                }}
              >
                <span>{label}</span>
              </Text>
            )}
          </Box>
          {hasLinks && (
            <IconChevronRight
              className={classes.chevron}
              stroke={1.5}
              style={{
                width: rem(16),
                height: rem(16),
                transform: opened ? "rotate(-90deg)" : "none",
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items2}</Collapse> : null}
    </>
  );
}
