import { useState, useMemo, useCallback } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import useScrollVisibility from "../../Hooks/useScrollVisibility";
import ProjectCard from "./ProjectCard";
import ProjectDetails from "./ProjectDetails";
import SectionHeading from "../Others/SectionHeading";

const ProjectSection = () => {
  const [isBoxOpen, setIsBoxOpen] = useState(false);
  const [currentProjectView, setCurrentProjectView] = useState({});

  const [headerRef, contentRef, isHeaderVisible, isContentVisible] =
    useScrollVisibility();

  const projects = useMemo(() => {
    return [
      {
        projectId: "1",
        title: "weather app",
        shortDescription:
          "a user-friendly weather app providing real-time and 7-day forecasts",
        detailedDescription:
          "provides real-time weather updates and a 7-day forecast for global locations, delivering fast and up-to-date information on temperature, rain, humidity, and wind speed. the user-friendly interface ensures easy navigation, and with your permission, the app offers personalized weather insights based on your current location",
        techStack: ["react.js", "material ui", "axios"],
        repoLink: "https://github.com/abhimazumder/weatherApp",
        demoLink: "https://weather-app-one-zeta-18.vercel.app/",
        cardImage: "bg_weather_app_x1.png",
        demoGif: "bg_weather_app_x1.png",
      },
      {
        projectId: "2",
        title: "hangman game",
        shortDescription:
          "a classic hangman game involving strategic word guessing",
        detailedDescription:
          "a dynamic word guessing game featuring diverse levels and adjustable difficulty settings. crafted an immersive user experience through a sleek and straightforward interface. additionally, implemented a post-game summary feature to track and showcase player performance, enhancing overall engagement and enjoyment",
        techStack: ["react.js", "redux", "material ui", "axios"],
        repoLink: "https://github.com/abhimazumder/hangmanGame",
        demoLink: "https://hangman-game-sage.vercel.app/",
        cardImage: "bg_hangman_game_x1.png",
        demoGif: "bg_hangman_game_x1.png",
      },
      {
        projectId: "3",
        title: "chakri chai",
        shortDescription:
          "a job portal extension enhancing recruiter and candidate experience",
        detailedDescription:
          "career portal extension that optimizes the job application process for candidates, ensuring a user-friendly and efficient experience. chakri chai empowers recruiters with tools to easily manage and streamline job applications, simplifying sorting, tracking, and evaluation of candidates for a seamless hiring process",
        techStack: [
          "react.js",
          "material ui",
          "axios",
          "serverless",
          "aws lambda",
          "dynamodb",
          "s3 bucket",
        ],
        repoLink: "https://github.com/abhimazumder/chakri-chai-frontend",
        demoLink: "",
        cardImage: "bg_chakri_chai_x1.png",
        demoGif: "bg_chakri_chai_x1.png",
      },
      {
        projectId: "4",
        title: "splitter app",
        shortDescription:
          "a bill splitter web application, easily split bills with friends or family",
        detailedDescription:
          "this bill splitter web application simplifies the task of dividing expenses among friends or roommates, ensuring a seamless and efficient experience for users. with intuitive features, users can effortlessly manage and distribute shared costs, making financial collaboration hassle-free",
        techStack: ["node.js", "express.js", "mongodb atlas", "bootstrap"],
        repoLink: "https://github.com/abhimazumder/splitter-app",
        demoLink: "",
        cardImage: "bg_splitter_app_x1.png",
        demoGif: "bg_splitter_app_x1.png",
      },
    ];
  }, []);

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
          {projects?.map((project, index) => (
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
