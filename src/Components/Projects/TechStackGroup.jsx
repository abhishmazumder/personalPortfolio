import { Center, Flex, Text } from "@chakra-ui/react";
import { memo } from "react";
import PropTypes from "prop-types";

const TechStackGroup = memo(({ techStack }) => {
  return (
    <Flex h="auto" w={"auto"} wrap={"wrap"} gap={2}>
      {techStack?.map((ele, index) => (
        <Center
          key={index}
          px={2}
          py={1.5}
          color={"inherit"}
          bgColor={"primary.50"}
          borderRadius={"lg"}
          boxShadow={"sm"}
          _hover={{
            transform: "scale(1.05)",
          }}
          transition="transform 0.3s ease"
        >
          <Text fontFamily={"primary"} fontSize={"md"} noOfLines={1}>
            {ele}
          </Text>
        </Center>
      ))}
    </Flex>
  );
});

TechStackGroup.displayName = "TechStackGroup";

TechStackGroup.propTypes = {
  techStack: PropTypes.array.isRequired,
};

export default TechStackGroup;
