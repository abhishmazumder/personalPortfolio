import { Center, Icon, useColorMode } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { memo } from "react";
import { FiX, FiMenu } from "react-icons/fi";


const MenuToggle = memo(({ toggle, isOpen }) => {
    const { colorMode } = useColorMode();
  
    return (
      <Center onClick={toggle} cursor={"pointer"}>
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
  });

  MenuToggle.displayName = "MenuToggle";
  
  MenuToggle.propTypes = {
    toggle: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
  };

export default MenuToggle;