import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  Stack,
  Collapse,
  useColorMode,
  Icon,
  Center,
  IconButton,
} from "@chakra-ui/react";
import Logo from "../../assets/Logo";
import { FiX, FiMenu, FiSun, FiMoon } from "react-icons/fi";
import PropTypes from "prop-types";

const Header = ({ scrollToSection, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [isAtTop, setIsAtTop] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > 0) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavBarContainer isAtTop={isAtTop} isOpen={isOpen} {...props}>
      <Logo color="inherit" scrollToSection={scrollToSection}  />

      <Flex align="center" gap={4} display={["flex", "flex", "none", "none"]}>
        <ColorModeButton />
        <MenuToggle toggle={toggle} isOpen={isOpen} />
      </Flex>

      <Box
        display={["block", "block", "none", "none"]}
        flexBasis={["100%", "100%", "auto", "auto"]}
      >
        <Collapse in={isOpen} animateOpacity>
          <MenuLinks scrollToSection={scrollToSection} />
        </Collapse>
      </Box>

      <Flex align="center" gap={8} display={["none", "none", "flex", "flex"]}>
        <MenuLinks scrollToSection={scrollToSection} />
        <ColorModeButton />
      </Flex>
    </NavBarContainer>
  );
};

const MenuToggle = ({ toggle, isOpen }) => {
  const { colorMode } = useColorMode();

  return (
    <Center onClick={toggle}>
      {isOpen ? (
        <Icon
          as={FiX}
          boxSize={7}
          color={colorMode === "dark" ? "inherit" : "black"}
        />
      ) : (
        <Icon
          as={FiMenu}
          boxSize={7}
          color={colorMode === "dark" ? "inherit" : "black"}
        />
      )}
    </Center>
  );
};

const ColorModeButton = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      {...props}
      isRound={true}
      size={"md"}
      bgColor={colorMode === "dark" ? "primary.50" : "primary.100"}
      color={"white"}
      _hover={{
        bgColor: "primary.600",
        transform: "scale(1.1)",
        transition: "transform 0.3s ease-in-out",
      }}
      icon={
        colorMode === "dark" ? (
          <Icon boxSize={7} as={FiSun} color="inherit" />
        ) : (
          <Icon boxSize={7} as={FiMoon} color="inherit" />
        )
      }
      onClick={() => toggleColorMode()}
    />
  );
};

const MenuItem = ({ children, to, scrollToSection, ...props }) => {
  const { colorMode } = useColorMode();

  return (
    <Text
      fontSize={"xl"}
      display="block"
      fontFamily="secondary"
      py={1}
      px={2}
      borderRadius={5}
      cursor={"pointer"}
      color={colorMode === "dark" ? "inherit" : "primary.600"}
      _hover={{
        backgroundColor: "primary.50",
      }}
      transition="background-color 0.3s ease, color 0.3s ease"
      onClick={() => scrollToSection(to)}
      {...props}
    >
      {children}
    </Text>
  );
};

const MenuLinks = ({ scrollToSection, ...props }) => {
  return (
    <Stack
      {...props}
      spacing={8}
      align="center"
      justify={["center", "space-between", "flex-end", "flex-end"]}
      direction={["column", "row", "row", "row"]}
      p={[2.5, 2.5, 0, 0]}
    >
      {["projects", "about me", "contact", "resume"].map((link, index) => (
        <MenuItem
          key={index}
          to={`${link?.split(" ")?.join("")}`}
          scrollToSection={scrollToSection}
        >
          {link}
        </MenuItem>
      ))}
    </Stack>
  );
};

const NavBarContainer = ({ children, isAtTop, isOpen, ...props }) => {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={[6, 6, 8, 8]}
      py={[6, 6, 6, 6]}
      px={[4, 4, 12, 12]}
      bg="transparent"
      position="sticky"
      top="0"
      zIndex="1000"
      backdropFilter={isAtTop || isOpen ? "blur(16px)" : "none"}
      transition="all 0.3s ease"
      {...props}
    >
      {children}
    </Flex>
  );
};

export default Header;
