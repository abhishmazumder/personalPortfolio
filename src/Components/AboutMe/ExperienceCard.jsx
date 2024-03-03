import {
  Flex,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import TechStackGroup from "../Projects/TechStackGroup";
import { useMemo } from "react";

const ExperienceCard = () => {

  const experiences = useMemo(() => [
    {
      expId: 1,
      orgName: "persistent systems",
      orgLink: "https://www.persistent.com/",
      roleName: "software engineer",
      techStack: [
          "react.js",
          "redux",
          "serverless",
          "aws lambda",
          "dynamodb",
          "s3 bucket",
          "postman",
      ],
      start: "june 2022",
      end: "july 2023",
    },
    {
      expId: 2,
      orgName: "simpsoft solutions",
      orgLink: "https://www.simpsoftsolutions.com/",
      roleName: "associate software engineer",
      techStack: ["react.js", "redux", "material ui"],
      start: "july 2023",
      end: "present",
    },
  ], []);

  return (
    <Stack h={"100%"} px={1} justify={"space-around"}>
      {experiences
        .sort((a, b) => b?.expId - a?.expId)
        .map((ele, index) => (
          <Stack key={index} rowGap={2}>
            <Flex justify={"space-between"}>
              <Stack rowGap={0}>
                <Heading fontFamily={"primary"} as="h4" size={"md"}>
                  {ele?.roleName}
                </Heading>
                <Text fontFamily="secondary" fontSize={"md"}>
                  at <Link href={ele?.orgLink}>{ele?.orgName}</Link>
                </Text>
              </Stack>
              <Text fontFamily={"primary"} fontSize={"sm"}>
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
