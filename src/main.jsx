import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import customTheme from "./theme.js";
import BackgroundWrapper from "./BackgroundWrapper.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <BackgroundWrapper>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </BackgroundWrapper>
    </ChakraProvider>
  </React.StrictMode>
);
