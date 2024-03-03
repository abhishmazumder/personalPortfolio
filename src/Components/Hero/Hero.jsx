import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  IconButton,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import useScrollVisibility from "../../Hooks/useScrollVisibility";

const Hero = () => {
  const { colorMode } = useColorMode();

  const [headerRef, contentRef, isHeaderVisible, isContentVisible] = useScrollVisibility();

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
            size={["2xl", "3xl", "4xl", "4xl"]}
            noOfLines={3}
            transform={`translateY(${isContentVisible ? "0" : "5vh"})`}
            opacity={isContentVisible ? 1 : 0}
            transition={`transform 0.5s ease, opacity 0.5s ease`}
          >
            i&apos;m abhishek,
            <br />
            a design-focused <br />
            front-end developer <br />
          </Heading>
          <Text
            fontFamily="secondary"
            fontSize={"lg"}
            noOfLines={[4, 4, 2, 2]}
            transform={`translateY(${isContentVisible ? "0" : "5vh"})`}
            opacity={isContentVisible ? 1 : 0}
            transition={"transform 0.75s ease, opacity 0.75s ease"}
          >
            seamlessly blending design thinking and technical finesse, <br />
            crafting solutions where aesthetics effortlessly intertwine with
            functionality
          </Text>
          <Flex gap={8} justify={"end"}>
            {[FiGithub, FiLinkedin, FaXTwitter].map((ele, index) => (
              <IconButton
                key={index}
                isRound={true}
                bgColor="primary.600"
                color={"white"}
                _hover={{
                  color: colorMode === "dark" ? "inherit" : "primary.600",
                  bgColor: "primary.50",
                }}
                size="lg"
                icon={<Icon w={7} h={7} as={ele} color={"inherit"} />}
                transform={`translateY(${isContentVisible ? "0" : "5vh"})`}
                opacity={isContentVisible ? 1 : 0}
                transition={`transform ${0.75 + 0.25 * index}s ease, opacity ${
                  0.5 + 0.2 * index
                }s ease, background-color .3s ease, color .3s ease`}
              />
            ))}
          </Flex>
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default Hero;
