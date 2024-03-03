import { useState, useCallback } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import useScrollVisibility from "../../Hooks/useScrollVisibility";
import ProjectCard from "./ProjectCard";
import ProjectDetails from "./ProjectDetails";
import SectionHeading from "../Others/SectionHeading";
import { projectList } from "../../data";

const ProjectSection = () => {
  const [isBoxOpen, setIsBoxOpen] = useState(false);
  const [currentProjectView, setCurrentProjectView] = useState({});

  const [headerRef, contentRef, isHeaderVisible, isContentVisible] =
    useScrollVisibility();

  const handleCurrentProjectView = useCallback(
    (project) => {
      if (isBoxOpen === false) {
        setCurrentProjectView(project);
        setIsBoxOpen(true);
      } else {
        if (project.projectId === currentProjectView.projectId) {
          setIsBoxOpen(false);
        } else {
          setCurrentProjectView(project);
        }
      }
    },
    [currentProjectView.projectId, isBoxOpen]
  );

  return (
    <Grid templateRows="1fr" rowGap={10} ref={headerRef}>
      <GridItem
        transform={`translateY(${isHeaderVisible ? "0" : "5vh"})`}
        opacity={isHeaderVisible ? "1" : "0"}
        transition={"transform 0.5s ease, opacity 0.5s ease"}
      >
        <SectionHeading sectionName={"projects"} sectionLink={"projects"} />
      </GridItem>
      <GridItem ref={contentRef}>
        <Grid
          gap={[14, 14, 4, 4]}
          templateColumns={["1fr", "1fr", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
        >
          {projectList?.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isContentVisible={isContentVisible}
              isBoxOpen={isBoxOpen}
              currentProjectView={currentProjectView}
              handleCurrentProjectView={handleCurrentProjectView}
            />
          ))}
        </Grid>
      </GridItem>
      <ProjectDetails
        currentProjectView={currentProjectView}
        isBoxOpen={isBoxOpen}
      />
    </Grid>
  );
};

export default ProjectSection;
