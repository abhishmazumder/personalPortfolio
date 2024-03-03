import { Icon, IconButton, useColorMode } from "@chakra-ui/react";
import { memo } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ColorModeButton = memo((props) => {
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
});

ColorModeButton.displayName = "ColorModeButton";

export default ColorModeButton;
