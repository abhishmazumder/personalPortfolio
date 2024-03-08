import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  IconButton,
  Link,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import useScrollVisibility from "../../Hooks/useScrollVisibility";
import {
  heroPrimaryText,
  heroSecondaryText,
  heroSocialHandles,
} from "../../data";
import React from "react";

const Hero = () => {
  const { colorMode } = useColorMode();

  const [headerRef, contentRef, isHeaderVisible, isContentVisible] =
    useScrollVisibility();

  return (
    <Grid templateColumns={"1fr"} gap={6} ref={contentRef}>
      <GridItem h={["380px", "380px", "400px", "400px"]}>
        <Stack
          justifyContent={[
            "space-between",
            "space-between",
            "space-around",
            "space-around",
          ]}
          h="100%"
        >
          <Heading
            fontFamily="primary"
            as="h1"
            size={["xl", "2xl", "3xl", "4xl"]}
            noOfLines={3}
            transform={`translateY(${isContentVisible ? "0" : "5vh"})`}
            opacity={isContentVisible ? 1 : 0}
            transition={`transform 0.5s ease, opacity 0.5s ease`}
          >
            {heroPrimaryText?.map((ele, index) => (
              <React.Fragment key={index}>
                {ele.toLowerCase()}
                {index !== heroPrimaryText?.length - 1 && <br />}
              </React.Fragment>
            ))}
          </Heading>
          <Text
            fontFamily="secondary"
            fontSize={"lg"}
            noOfLines={[4, 4, 2, 2]}
            transform={`translateY(${isContentVisible ? "0" : "5vh"})`}
            opacity={isContentVisible ? 1 : 0}
            transition={"transform 0.75s ease, opacity 0.75s ease"}
          >
            {heroSecondaryText?.map((ele, index) => (
              <React.Fragment key={index}>
                {ele.toLowerCase()}
                {index !== heroSecondaryText?.length - 1 && <br />}
              </React.Fragment>
            ))}
          </Text>
          <Flex gap={8} justify={"end"}>
            {heroSocialHandles.map((ele, index) => (
              <Link
                key={index}
                href={ele?.socialURL}
                _hover={{ textDecoration: "none" }}
                isExternal
              >
                <IconButton
                  isRound={true}
                  bgColor="primary.600"
                  color={"white"}
                  _hover={{
                    color: colorMode === "dark" ? "inherit" : "primary.600",
                    bgColor: "primary.50",
                  }}
                  size="lg"
                  icon={
                    <Icon w={7} h={7} as={ele?.socialIcon} color={"inherit"} />
                  }
                  aria-label={ele?.socialName}
                  transform={`translateY(${isContentVisible ? "0" : "5vh"})`}
                  opacity={isContentVisible ? 1 : 0}
                  transition={`transform ${
                    0.75 + 0.25 * index
                  }s ease, opacity ${
                    0.5 + 0.2 * index
                  }s ease, background-color .3s ease, color .3s ease`}
                />
              </Link>
            ))}
          </Flex>
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default Hero;
