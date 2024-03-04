import { Flex, Heading, Icon, Link, Stack, Text } from "@chakra-ui/react";
import TechStackGroup from "../Projects/TechStackGroup";
import { FiExternalLink } from "react-icons/fi";
import { experienceList } from "../../data";

const ExperienceCard = () => {

  return (
    <Stack h="100%" px={1} justify="space-around">
      {experienceList
        ?.sort((a, b) => b?.expId - a?.expId)
        ?.map((ele, index) => (
          <Stack key={index} rowGap={2}>
            <Flex justify="space-between">
              <Stack rowGap={0}>
                <Heading fontFamily="primary" as="h4" size="md">
                  {ele?.roleName?.toLowerCase()}
                </Heading>
                <Text
                  display="flex"
                  alignItems="center"
                  gap={1}
                  cursor="pointer"
                  fontFamily="secondary"
                  fontSize="md"
                >
                  at
                  <Link
                    display="flex"
                    alignItems="center"
                    gap={1}
                    href={ele?.orgLink}
                    _hover={{ textDecoration: "none"}}
                    whiteSpace={"nowrap"}
                    isExternal
                  >
                    {ele?.orgName?.toLowerCase()}
                    <Icon as={FiExternalLink} boxSize={4} />
                  </Link>
                </Text>
              </Stack>
              <Text fontFamily="primary" fontSize="sm">
                {`${ele?.start} - ${ele?.end}`}
              </Text>
            </Flex>
            <TechStackGroup techStack={ele?.techStack} />
          </Stack>
        ))}
    </Stack>
  );
};

export default ExperienceCard;
