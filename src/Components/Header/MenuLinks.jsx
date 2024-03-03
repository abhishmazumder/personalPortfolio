import { Stack, Text, useColorMode } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useMemo } from "react";

const MenuItem = ({ children, to, handleClick, ...props }) => {
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
        onClick={() => handleClick(to)}
        {...props}
      >
        {children}
      </Text>
    );
  };
  
  MenuItem.propTypes = {
    children: PropTypes.node,
    to: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
  }
  
  const MenuLinks = ({ scrollToSection, ...props }) => {

    const links = useMemo(() => ["projects", "about me", "contact", "resume"], [])

    const handleClick = (link) => {
        scrollToSection(link);
    }

    return (
      <Stack
        {...props}
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        p={[2.5, 2.5, 0, 0]}
      >
        {links.map((link, index) => (
          <MenuItem
            key={index}
            to={`${link?.split(" ")?.join("")}`}
            handleClick={handleClick}
          >
            {link}
          </MenuItem>
        ))}
      </Stack>
    );
  };
  
  MenuLinks.propTypes = {
    scrollToSection: PropTypes.func.isRequired,
  }

  export default MenuLinks;