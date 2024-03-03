import {
  Box,
  Collapse,
  Grid,
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
import { memo } from "react";
import PropTypes from "prop-types";

const ProjectDetails = memo(({ currentProjectView, isBoxOpen }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { colorMode } = useColorMode();

  return (
    <GridItem>
      <Collapse in={!isMobile && isBoxOpen} animateOpacity>
        <Grid
          templateColumns={[null, null, "1.5fr 2fr", "1fr 2fr"]}
          gap={6}
          minH={"340px"}
          borderRadius={"lg"}
          bgColor={"primary.50"}
        >
          <GridItem>
            <Box h="100%" w={"100%"}>
              <Image
                key={currentProjectView?.projectId}
                src={currentProjectView?.demoGif}
                borderRadius={"lg"}
                objectFit="cover"
                h="100%"
                w="100%"
              />
            </Box>
          </GridItem>
          <GridItem py={4} pr={4}>
            <Stack h={"100%"} gap={6} justify={"space-between"}>
              <Heading fontFamily="secondary" as="h3" size="lg">
                {currentProjectView?.title?.toLowerCase() || ""}
              </Heading>
              <Text
                fontFamily="secondary"
                fontSize={"lg"}
                color={colorMode === "dark" ? "inherit" : "grey"}
              >
                {currentProjectView?.detailedDescription?.toLowerCase() || ""}
              </Text>
              <TechStackGroup techStack={currentProjectView?.techStack || []} />
              <LinkButtons
                demoLink={currentProjectView?.demoLink || ""}
                repoLink={currentProjectView?.repoLink || ""}
              />
            </Stack>
          </GridItem>
        </Grid>
      </Collapse>
    </GridItem>
  );
});

ProjectDetails.displayName = "ProjectDetails";

ProjectDetails.propTypes = {
currentProjectView: PropTypes.object.isRequired,
isBoxOpen: PropTypes.bool.isRequired,
}

export default ProjectDetails;
