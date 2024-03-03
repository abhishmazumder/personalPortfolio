import { Box, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

const Logo = ({ scrollToSection, ...props }) => {
  return (
    <Box {...props} cursor={"pointer"} onClick={() => scrollToSection("hero")}>
      <Text fontFamily="primary" fontSize="3xl" fontWeight="bold">
        abhishek.
      </Text>
    </Box>
  );
};

Logo.propTypes = {
  handleNavLinkClick: PropTypes.func,
};

export default Logo;
