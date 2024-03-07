import PropTypes from "prop-types";
import { Box, useColorMode } from "@chakra-ui/react";

function BackgroundWrapper({ children }) {
  const { colorMode } = useColorMode();

  return (
    <Box
      p={0}
      m={0}
      minHeight="100vh"
      background={
        colorMode === "dark"
          ? "radial-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 0)"
          : "radial-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 0)"
      }
      backgroundSize="10px 10px"
      backgroundAttachment={"fixed"}
    >
      {children}
    </Box>
  );
}

BackgroundWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BackgroundWrapper;