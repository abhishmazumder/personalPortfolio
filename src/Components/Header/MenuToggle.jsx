import { Center, Icon, useColorMode } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { FiX, FiMenu } from "react-icons/fi";


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
  
  MenuToggle.propTypes = {
    toggle: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
  };

export default MenuToggle;