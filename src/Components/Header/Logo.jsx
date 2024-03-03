import { Box, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { logoText } from "../../data";

const Logo = ({ scrollToSection, ...props }) => {
  return (
    <Box {...props} cursor={"pointer"} onClick={() => scrollToSection("hero")}>
      <Text fontFamily="primary" fontSize="3xl" fontWeight="bold">
        {logoText}
      </Text>
    </Box>
  );
};

Logo.propTypes = {
  scrollToSection: PropTypes.func,
};

export default Logo;
