import { memo, useState } from "react";
import {
  Box,
  Collapse,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import LinkButtons from "./LinkButtons";
import TechStackGroup from "./TechStackGroup";
import PropTypes from "prop-types";

const ProjectCard = memo(
  ({
    project,
    index,
    isContentVisible,
    isBoxOpen,
    currentProjectView,
    handleCurrentProjectView,
  }) => {
    const { colorMode } = useColorMode();
    const isMobile = useBreakpointValue({ base: true, md: false });

    const [hover, setHover] = useState(false);

    return (
      <GridItem
        bgColor={"transparent"}
        boxShadow="2xl"
        borderRadius="lg"
        backdropFilter="blur(18px)"
        transform={`translateY(${isContentVisible ? "0" : "5vh"})`}
        opacity={isContentVisible ? "1" : "0"}
        transition={`transform ${0.5 + 0.25 * index}s ease, opacity ${
          0.5 + 0.25 * index
        }s ease`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Stack
          filter={
            isBoxOpen && currentProjectView?.projectId !== project?.projectId
              ? "grayscale(100%)"
              : "none"
          }
          transition={"filter 0.3s ease"}
          cursor="pointer"
          gap={4}
          onClick={() => handleCurrentProjectView(project)}
        >
          <Box w="100%" overflow="hidden" borderRadius="lg">
            <Image
              src={`${project?.cardImage}`}
              alt={project?.title}
              w="100%"
              h="160px"
              objectFit="cover"
              transform={hover ? "scale(1.1)" : "scale(1)"}
              transition="transform 0.3s ease"
            />
          </Box>
          <Stack px={4} pb={4} gap={4}>
            <Heading fontFamily="secondary" as="h3" size="md">
              {project?.title?.toLowerCase()}
            </Heading>
            <Text
              fontFamily="secondary"
              fontSize={"md"}
              noOfLines={3}
              color={colorMode === "dark" ? "inherit" : "grey"}
            >
              {project?.shortDescription?.toLowerCase()}
            </Text>
          </Stack>
        </Stack>
        <Collapse
          in={
            isMobile &&
            isBoxOpen &&
            currentProjectView.projectId === project.projectId
          }
          animateOpacity
        >
          <Stack p={4} gap={8}>
            <TechStackGroup techStack={project?.techStack || []} />
            <LinkButtons
              demoLink={project?.demoLink}
              repoLink={project?.repoLink}
            />
          </Stack>
        </Collapse>
      </GridItem>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  isContentVisible: PropTypes.bool.isRequired,
  isBoxOpen: PropTypes.bool.isRequired,
  currentProjectView: PropTypes.object.isRequired,
  handleCurrentProjectView: PropTypes.func.isRequired,
};

export default ProjectCard;
