import { Icon, Link, Stack, Text, useColorMode } from "@chakra-ui/react";
import { memo } from "react";
import { FiExternalLink } from "react-icons/fi";
import { navlinks, resumeURL } from "../../data";
import PropTypes from "prop-types";

const MenuItem = memo(({ children, to, handleClick, ...props }) => {
  const { colorMode } = useColorMode();

  return (
    <Text
      display="flex"
      alignItems="center"
      fontFamily="secondary"
      fontSize={"xl"}
      py={1}
      px={2}
      borderRadius="lg"
      cursor="pointer"
      color={colorMode === "dark" ? "inherit" : "primary.600"}
      _hover={{
        backgroundColor: colorMode === "dark" ? "primary.50" : "primary.100",
        color: colorMode === "dark" ? "inherit" : "white",
      }}
      transition="background-color 0.3s ease, color 0.3s ease"
      onClick={() => handleClick(to)}
      {...props}
    >
      {children}
    </Text>
  );
});

MenuItem.displayName = "MenuItem";

MenuItem.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  handleClick: PropTypes.func,
};

const MenuLinks = memo(({ scrollToSection, ...props }) => {
  const handleClick = (link) => {
    scrollToSection(link);
  };

  return (
    <Stack
      {...props}
      gap={8}
      align="center"
      justify={["center", "space-between", "space-between", "space-between"]}
      direction={["column", "row", "row", "row"]}
      pt={[5, 5, 0, 0]}
      pb={[2, 2, 0, 0]}
    >
      {navlinks?.map((link, index) => (
        <MenuItem
          key={index}
          to={link.split(" ").join("")}
          handleClick={handleClick}
        >
          {link}
        </MenuItem>
      ))}
      <MenuItem>
        <Link
          display="flex"
          alignItems="center"
          gap={1}
          href={resumeURL}
          _hover={{ textDecoration: "none" }}
          isExternal
        >
          resume
          <Icon as={FiExternalLink} boxSize={5} />
        </Link>
      </MenuItem>
    </Stack>
  );
});

MenuLinks.displayName = "MenuLinks";

MenuLinks.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
};

export default MenuLinks;
