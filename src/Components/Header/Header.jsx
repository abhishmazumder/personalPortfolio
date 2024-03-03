import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Collapse,
} from "@chakra-ui/react";
import Logo from "../../assets/Logo";
import MenuLinks from "./MenuLinks";
import MenuToggle from "./MenuToggle";
import ColorModeButton from "./ColorModeButton";
import PropTypes from "prop-types";

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

NavBarContainer.propTypes = {
  children: PropTypes.node.isRequired,
  isAtTop: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

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
      <Logo color="inherit" scrollToSection={scrollToSection} />

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

Header.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
};

export default Header;