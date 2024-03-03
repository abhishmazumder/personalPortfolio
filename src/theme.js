import { extendTheme } from "@chakra-ui/react";
import "@fontsource/inter";
import "@fontsource-variable/lexend";

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const colors = {
  primary: {
    50: "#d3caff60",
    100: "#d3caff",
    600: "#7776bc",
  },
};

const fonts = {
  primary: "'Lexend Variable', sans-serif",
  secondary: "'Inter', sans-serif",
};

const customTheme = extendTheme({
  config,
  colors,
  fonts,
});

export default customTheme;
