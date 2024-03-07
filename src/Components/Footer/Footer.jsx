import { Flex, Grid, GridItem, Link, Spacer, Text } from "@chakra-ui/react";
import { useMemo } from "react";
import PropTypes from "prop-types";
import { chakraURL, copyrightText, figmaURL, reactURL, vercelURL } from "../../data";

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
            designed on
            <Text {...linkStyles}>
              {" "}
              <Link href={figmaURL} _hover={{ textDecoration: "none" }} isExternal>
                figma
              </Link>
            </Text>
            <br />
            built with{" "}
            <Text {...linkStyles}>
              <Link href={reactURL} _hover={{ textDecoration: "none" }} isExternal>
                react.js
              </Link>
            </Text>{" "}
            and{" "}
            <Text {...linkStyles}>
              <Link href={chakraURL}  _hover={{ textDecoration: "none" }} isExternal>
                chakra ui
              </Link>
            </Text>
            <br />
            deployed with{" "}
            <Text {...linkStyles}>
              <Link href={vercelURL}  _hover={{ textDecoration: "none" }} isExternal>
                vercel
              </Link>
            </Text>
          </Text>
        </GridItem>
        <GridItem>
          <Text fontFamily="secondary" fontSize="md">
            {copyrightText}
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

FooterContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Footer;
