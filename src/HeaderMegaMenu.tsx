import {
  HoverCard,
  Group,
  UnstyledButton,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
  Button,
  Image,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconChevronDown,
  IconCalendar,
} from "@tabler/icons-react";
import classes from "./HeaderMegaMenu.module.css";
import logo from "./assets/logo.png";
import { useState } from "react";

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();
  const [header, setHeader] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 70) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <Box pb={120}>
      <header className={header? classes.fixedHeader:classes.header}>
        <Group justify="space-between" h="100%">
          <Image src={logo} height={60} />

          <Group h="100%" gap={0} visibleFrom="sm">
            {/* Home Button */}
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Home
                    </Box>
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown
                style={{
                  overflow: "hidden",
                  width: "150px",
                  borderRadius: "0",
                  padding: "0",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      padding: "10px 15px",
                      color: "#abb8c3",
                      fontFamily: "vollkon",
                    }}
                  >
                    Modern
                  </a>
                  <Divider />
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      padding: "10px 15px",
                      color: "#abb8c3",
                      fontFamily: "vollkon",
                    }}
                  >
                    City
                  </a>
                  <Divider />
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      padding: "10px 15px",
                      color: "#abb8c3",
                      fontFamily: "vollkon",
                    }}
                  >
                    Island
                  </a>
                  <Divider />
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      padding: "10px 15px",
                      color: "#abb8c3",
                      fontFamily: "vollkon",
                    }}
                  >
                    Summer
                  </a>
                  <Divider />
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      padding: "10px 15px",
                      color: "#abb8c3",
                      fontFamily: "vollkon",
                    }}
                  >
                    Classic
                  </a>
                  <Divider />
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      padding: "10px 15px",
                      color: "#abb8c3",
                      fontFamily: "vollkon",
                    }}
                  >
                    Boutique
                  </a>
                  <Divider />
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      padding: "10px 15px",
                      color: "#abb8c3",
                      fontFamily: "vollkon",
                    }}
                  >
                    Lodge
                  </a>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>

            {/* Branches Button  */}
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Branches
                    </Box>
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown
                style={{
                  overflow: "hidden",
                  width: "150px",
                  borderRadius: "0",
                  padding: "0",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      padding: "10px 15px",
                      color: "#abb8c3",
                      fontFamily: "vollkon",
                    }}
                  >
                    Branch 1
                  </a>
                  <Divider />
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      padding: "10px 15px",
                      color: "#abb8c3",
                      fontFamily: "vollkon",
                    }}
                  >
                    Branch 2
                  </a>
                  <Divider />
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      padding: "10px 15px",
                      color: "#abb8c3",
                      fontFamily: "vollkon",
                    }}
                  >
                    Branch 3
                  </a>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>

            {/* Rooms button  */}
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Rooms
                    </Box>
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown
                style={{
                  overflow: "hidden",
                  width: "150px",
                  borderRadius: "0",
                  padding: "0",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      padding: "10px 15px",
                      color: "#abb8c3",
                      fontFamily: "vollkon",
                    }}
                  >
                    Full Slider
                  </a>
                  <Divider />
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      padding: "10px 15px",
                      color: "#abb8c3",
                      fontFamily: "vollkon",
                    }}
                  >
                    Normal Slider
                  </a>
                  <Divider />
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      padding: "10px 15px",
                      color: "#abb8c3",
                      fontFamily: "vollkon",
                    }}
                  >
                    Image
                  </a>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            {/* Pages button */}
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Pages
                    </Box>
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown
                style={{
                  overflow: "hidden",
                  width: "150px",
                  borderRadius: "0",
                  padding: "0",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      padding: "10px 15px",
                      color: "#abb8c3",
                      fontFamily: "vollkon",
                    }}
                  >
                    About Us
                  </a>
                  <Divider />
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      padding: "10px 15px",
                      color: "#abb8c3",
                      fontFamily: "vollkon",
                    }}
                  >
                    Loaction
                  </a>
                  <Divider />
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      padding: "10px 15px",
                      color: "#abb8c3",
                      fontFamily: "vollkon",
                    }}
                  >
                    Our Staff
                  </a>
                  <Divider />
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      padding: "10px 15px",
                      color: "#abb8c3",
                      fontFamily: "vollkon",
                    }}
                  >
                    Our Resturant
                  </a>
                  <Divider />
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      padding: "10px 15px",
                      color: "#abb8c3",
                      fontFamily: "vollkon",
                    }}
                  >
                    Places
                  </a>
                  <Divider />
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      padding: "10px 15px",
                      color: "#abb8c3",
                      fontFamily: "vollkon",
                    }}
                  >
                    Reviews
                  </a>
                  <Divider />
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      padding: "10px 15px",
                      color: "#abb8c3",
                      fontFamily: "vollkon",
                    }}
                  >
                    SPA
                  </a>
                  <Divider />
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      padding: "10px 15px",
                      color: "#abb8c3",
                      fontFamily: "vollkon",
                    }}
                  >
                    Gallery
                  </a>
                  <Divider />
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      padding: "10px 15px",
                      color: "#abb8c3",
                      fontFamily: "vollkon",
                    }}
                  >
                    Room Services
                  </a>
                  <Divider />
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      padding: "10px 15px",
                      color: "#abb8c3",
                      fontFamily: "vollkon",
                    }}
                  >
                    404 error page
                  </a>
                  <Divider />
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      padding: "10px 15px",
                      color: "#abb8c3",
                      fontFamily: "vollkon",
                    }}
                  >
                    Style Guide
                  </a>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            {/* Blog Button  */}
            <a href="#" className={classes.link}>
              Blog
            </a>
            {/* Rooms button  */}
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Contact Us
                    </Box>
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown
                style={{
                  overflow: "hidden",
                  width: "150px",
                  borderRadius: "0",
                  padding: "0",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      padding: "10px 15px",
                      color: "#abb8c3",
                      fontFamily: "vollkon",
                    }}
                  >
                    Contact Us 2
                  </a>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <Button
              style={{
                lineHeight: "24px",
                fontSize: "15px",
                fontWeight: 600,
                borderRadius: "4px",
                letterSpacing: ".5px",
                padding: "10px 20px",
                marginLeft: "20px",
                marginRight: "20px",
                backgroundColor: "#deb666",
              }}
            >
              <IconCalendar style={{ marginRight: "8px" }} />
              BOOK ONLINE
            </Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}><a>d</a></Collapse>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>

          <Divider my="sm" />
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
