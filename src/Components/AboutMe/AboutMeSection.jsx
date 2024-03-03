import { Flex, Grid, GridItem, Heading, Stack, Text } from "@chakra-ui/react";
import ExperienceCard from "./ExperienceCard";
import useScrollVisibility from "../../Hooks/useScrollVisibility";
import SectionHeading from "../Others/SectionHeading";

const AboutMeSection = () => {
  const [headerRef, contentRef, isHeaderVisible, isContentVisible] =
    useScrollVisibility();

  return (
    <Grid templateRows="1fr" rowGap={10}>
      <GridItem
        ref={headerRef}
        transform={`translateY(${isHeaderVisible ? "0" : "5vh"})`}
        opacity={isHeaderVisible ? "1" : "0"}
        transition={`transform 0.5s ease, opacity 0.5s ease`}
      >
        <SectionHeading sectionName={"about me"} sectionLink={"aboutme"} />
      </GridItem>
      <GridItem
        transform={`translateY(${isHeaderVisible ? "0" : "5vh"})`}
        opacity={isHeaderVisible ? "1" : "0"}
        transition={`transform 0.75s ease, opacity 0.75s ease`}
      >
        <Text fontFamily="secondary" fontSize={"lg"}>
          i&apos;m a front-end developer who gets a kick out of transforming
          designs into real, usable products. i&apos;m all about clean visuals,
          smooth interactions, and making things fun and easy for people to use.
          besides, here&apos;s other things you might want to know about me
        </Text>
      </GridItem>
      <GridItem>
        <Grid
          ref={contentRef}
          minH="400px"
          templateRows={[
            "repeat(30, 1fr)",
            "repeat(30, 1fr)",
            "repeat(24, 1fr)",
            "repeat(10, 1fr)",
          ]}
          templateColumns={[
            "repeat(4, 1fr)",
            "repeat(4, 1fr)",
            "repeat(8, 1fr)",
            "repeat(8, 1fr)",
          ]}
          gap={4}
          alignItems="space-between"
        >
          <GridItem
            rowSpan={[10, 10, 18, 10]}
            colSpan={[4, 4, 4, 2]}
            bgColor="black"
            borderRadius={"lg"}
            padding={2}
            boxShadow="2xl"
            color="primary.100"
            transform={`translateY(${isContentVisible ? "0" : "5vh"})`}
            opacity={isContentVisible ? "1" : "0"}
            transition="transform 0.75s ease, opacity 0.75s ease"
          >
            <Stack h="100%" direction="column" justify={"space-between"}>
              <Heading fontFamily="primary" as="h3" size="lg">
                skills
              </Heading>
              <Stack textAlign="end" rowGap={1}>
                <Text fontFamily="secondary" fontSize={"lg"}>
                  i turn ui dreams into pixel-perfect realities using
                </Text>
                <Heading as="h4" fontFamily="primary" size="lg">
                  react, redux and javascript
                </Heading>
              </Stack>
              <Stack textAlign="start" rowGap={1}>
                <Heading as="h4" fontFamily="primary" size="lg">
                  material ui and chakra ui
                </Heading>
                <Text fontFamily="secondary" fontSize={"lg"}>
                  allow me to design clean, consistent, and performant user
                  interfaces
                </Text>
              </Stack>
            </Stack>
          </GridItem>
          <GridItem
            rowSpan={[12, 10, 18, 10]}
            colSpan={[4, 4, 4, 4]}
            bgColor="primary.600"
            borderRadius={"lg"}
            padding={2}
            boxShadow="2xl"
            color="white"
            transform={`translateY(${isContentVisible ? "0" : "5vh"})`}
            opacity={isContentVisible ? "1" : "0"}
            transition="transform 1s ease, opacity 1s ease"
          >
            <Flex h={"100%"} direction={"column"} rowGap={6}>
              <Heading fontFamily="primary" as="h3" size="lg" textAlign="end">
                experience
              </Heading>
              <Stack flex={1}>
                <ExperienceCard />
              </Stack>
            </Flex>
          </GridItem>
          <GridItem
            rowSpan={[4, 5, 6, 5]}
            colSpan={[4, 2, 4, 2]}
            bgColor="primary.100"
            borderRadius={"lg"}
            padding={2}
            boxShadow="2xl"
            color={"primary.600"}
            transform={`translateY(${isContentVisible ? "0" : "5vh"})`}
            opacity={isContentVisible ? "1" : "0"}
            transition="transform 1.25s ease, opacity 1.25s ease"
          >
            <Stack
              h="100%"
              direction="column"
              justify={"space-between"}
              textAlign={"start"}
            >
              <Heading fontFamily="primary" as="h3" size="lg">
                goals
              </Heading>
              <Text fontFamily="secondary" fontSize={"lg"}>
                lead the charge as a product manager and revolutionize the
                industry
              </Text>
            </Stack>
          </GridItem>
          <GridItem
            rowSpan={[4, 5, 6, 5]}
            colSpan={[4, 2, 4, 2]}
            bgColor="grey"
            borderRadius={"lg"}
            padding={2}
            boxShadow="2xl"
            color="black"
            transform={`translateY(${isContentVisible ? "0" : "5vh"})`}
            opacity={isContentVisible ? "1" : "0"}
            transition="transform 1.5s ease, opacity 1.5s ease"
          >
            <Stack h="100%" textAlign="end" justify={"space-between"}>
              <Heading fontFamily="primary" as="h3" size="lg">
                hobbies
              </Heading>
              <Text fontFamily="secondary" fontSize={"lg"}>
                foodie
              </Text>
            </Stack>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default AboutMeSection;
