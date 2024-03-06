import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

// Header
export const logoText = "abhishek.";
export const navlinks = ["projects", "about me", "contact"];

//Hero Section
export const heroPrimaryText = [
  "i'm abhishek",
  "a design-focused",
  "front-end developer",
];
export const heroSecondaryText = [
  "seamlessly blending design thinking and technical finesse,",
  "crafting solutions where aesthetics effortlessly intertwine with functionality",
];
export const heroSocialHandles = [
  {
    socialName: "github",
    socialIcon: FiGithub,
    socialURL: "https://github.com/abhimazumder",
  },
  {
    socialName: "linkedin",
    socialIcon: FiLinkedin,
    socialURL: "https://www.linkedin.com/in/abhish-mazumder/",
  },
  {
    socialName: "x/twitter",
    socialIcon: FaXTwitter,
    socialURL: "https://x.com/abhish_mazumder",
  },
];

//Project Section
export const projectList = [
  {
    projectId: 1,
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
    projectId: 2,
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
    projectId: 3,
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
    projectId: 4,
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

//About Me Section
export const aboutmePrimaryText =
  "i'm a front-end developer who gets a kick out of transforming designs into real, usable products. i'm all about clean visuals, smooth interactions, and making things fun and easy for people to use. besides, here's other things you might want to know about me";
export const skillText1 = {
  header: "react, redux and javascript",
  body: "i turn ui dreams into pixel-perfect realities using",
};
export const skillText2 = {
  header: "material ui and chakra ui",
  body: "allow me to design clean, consistent, and performant user interfaces",
};
export const experienceList = [
  {
    expId: 1,
    orgName: "Persistent Systems",
    orgLink: "https://www.persistent.com/",
    roleName: "Software Engineer",
    techStack: [
      "React.js",
      "Redux",
      "Serverless",
      "AWS Lambda",
      "DynamoDB",
      "S3 Bucket",
      "Postman",
    ],
    start: "June 2022",
    end: "July 2023",
  },
  {
    expId: 2,
    orgName: "Simpsoft Solutions",
    orgLink: "https://www.simpsoftsolutions.com/",
    roleName: "Associate Software Engineer",
    techStack: ["React.js", "Redux", "Material UI"],
    start: "July 2023",
    end: "Present",
  },
];
export const goalsText =
  "lead as a product manager, pioneering an exceptional, industry-defining product";
export const hobbiesText =
  "i'm a culinary globetrotter, music buff, tech geek, and keen political observer";

// Contact Section
export const contactPrimaryText =
  "want to chat? feel free to reach out using the form below";
export const contactFormFieldTexts = {
  email: {
    labelText: "email",
    placeholderText: "your email",
  },
  message: {
    labelText: "message",
    placeholderText: "your message",
    minLength: 4,
    maxLength: 250,
  },
};
export const contactEmail = "abhish.mazumder@gmail.com";
export const submitStatus = {
  initial: {
    color: "transparent",
    message: "",
  },
  success: {
    color: "inherit",
    message: "your message has been sent!",
  },
  failure: {
    color: "inherit",
    message: "oops! there was a problem sending your message",
  },
};

// Footer
export const copyrightText = "copyright © 2024 abhishek.";

// Images
export const contactImage = "bg_contact_me_x1.png";

// URLs
export const resumeURL =
  "https://drive.google.com/file/d/1eYX53RlN1VPHAuwwfdldsXGwVUH5AWEc/view?usp=sharing";
export const contactURL = "https://formspree.io/f/meqykdgy";
export const figmaURL = "https://www.figma.com/";
export const reactURL = "https://react.dev/";
export const chakraURL = "https://chakra-ui.com/";
export const vercelURL = "https://vercel.com/";
