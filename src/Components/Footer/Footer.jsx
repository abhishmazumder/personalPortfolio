import { Flex, Grid, GridItem, Spacer, Text } from "@chakra-ui/react";
import { useMemo } from "react";

const Footer = (props) => {
  
  const linkStyles = useMemo(
    () => ({
      as: "b",
      _hover: { color: "primary.600" },
      transition: "color .3s ease",
    }),
    []
  );

  return (
    <FooterContainer {...props}>
      <Grid w="100%" templateRows={["1fr"]} rowGap={10}>
        <GridItem>
          <Spacer />
          <Text fontFamily="secondary" fontSize="md" textAlign="end">
            designed on{" "}
            <Text {...linkStyles}>
              <a href="https://www.figma.com/" target="_blank">
                figma
              </a>
            </Text>
            <br />
            built with{" "}
            <Text {...linkStyles}>
              <a href="https://react.dev/" target="_blank">
                react.js
              </a>
            </Text>{" "}
            and{" "}
            <Text {...linkStyles}>
              <a href="https://chakra-ui.com/" target="_blank">
                chakra ui
              </a>
            </Text>
            <br />
            deployed with{" "}
            <Text {...linkStyles}>
              <a href="https://vercel.com/" target="_blank">
                vercel
              </a>
            </Text>
          </Text>
        </GridItem>
        <GridItem>
          <Text fontFamily="primary" fontSize="md">
            copyright © 2024 abhishek.
          </Text>
        </GridItem>
      </Grid>
    </FooterContainer>
  );
};

const FooterContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="footer"
      wrap="wrap"
      w="100%"
      h="auto"
      mt={[10, 10, 10, 10]}
      py={[3, 3, 6, 6]}
      px={[4, 4, 12, 12]}
      bg="transparent"
      position="static"
      bottom="0"
      zIndex="1000"
      {...props}
    >
      {children}
    </Flex>
  );
};

export default Footer;
