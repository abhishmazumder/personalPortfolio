import { extendTheme } from "@chakra-ui/react";
import "@fontsource/inter/400.css";
import "@fontsource/lexend/700.css";

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
  primary: "'Lexend', sans-serif",
  secondary: "'Inter', sans-serif",
};

const customTheme = extendTheme({
  config,
  colors,
  fonts,
});

export default customTheme;
