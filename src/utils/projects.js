import lifeGPA from "../assets/backend-build-lifeGPA.jpg";
import pSkills from "../assets/prisoner-skills.jpg";
import bubl from "../assets/bubl.png";
import endrsd from "../assets/endrsd.png";
import dungeonGame1 from "../assets/dungeon-game-1.png";

const projects = [
  {
    title: "Dungeon Game",
    description:
      "Simple dungeon game to demonstrate ability to use Django to generate a dungeon rooms API, then consume that API with an interesting front end",
    skills: [
      "Django",
      "Postgres",
      "React",
      "Redux",
      "Material-UI",
      "Styled-Components",
    ],
    highlights: [
      "Created a unique room generation algorithm that creates room entries in the database",
      "Utilized Django and Postgres to create a REST API to serve the room entries as one connected dungeon",
      "Consumed that API in a React front end using Redux for state management and Material UI and Styled Components for styling",
    ],
    githubLink: "https://github.com/CS-Build-Week-1-Dungeon-Game",
    deployment: "https://dungeonthesecond.netlify.app/",
    imageSrc: dungeonGame1,
    altText: "my Dungeon Game",
  },
  {
    title: "LifeGPA",
    description:
      "Productivity tool that measures daily completion of tasks to incentivize users to improve their life by repeating good habits",
    skills: ["Express", "Postgres", "Knex"],
    highlights: [
      "Independently executed passion project with goal of learning to calculate progress over time on the front and back end",
      "Utilized Express and Postgres to create a REST API, with bcrypt and JWT for authentication",
    ],
    githubLink: "https://github.com/clem9281/backend-build",
    deployment: "https://backend-build-lifegpa.herokuapp.com/",
    imageSrc: lifeGPA,
    altText: "my LifeGPA backend documentation",
  },
  {
    title: "ENDRSD",
    description:
      "Productivity and learning management tool that helps students track completion of assigments and connect with career coaches",
    skills: ["React", "SASS", "Redux", "Express", "Postgres", "Knex"],
    highlights: [
      "Worked on remote cross functional team of 10 people to build React web application and iOS mobile application",
      "Contributed to design and architecture of both React front end and Express back end",
      "Implemented Axios response interceptor to handle redirects when user is not authenticated",
      "Utilized Express with Postgres and Knex to build a REST API, authenticated by bcrypt and JWT",
    ],
    githubLink: "https://github.com/labs15-career-endorsement-tracker",
    deployment: "https://endrsd.com",
    imageSrc: endrsd,
    altText: "the homepage of endrsd.com",
  },
  {
    title: "Bubl",
    description:
      "Social application that helps elementary age students connect with one another before entering middle school",
    skills: ["React", "LESS", "Redux"],
    highlights: [
      "Collaborated with team of 2 front end, 1 back end and 3 web UI developers to build React application with Express API backend",
      "Personally responsible for coordinating with API developer to decide on application flow and building front end react application",
      "Utilized React with Redux and React Router to build a single page application with complex state",
    ],
    githubLink: "https://github.com/lambda-build-week-bubl/front-end",
    deployment: "https://bubl-fe.netlify.com/login",
    imageSrc: bubl,
    altText: "the homepage of the bubl app",
  },
  {
    title: "Prisoner Skills",
    description:
      "Marketing page for application that allows employers to hire incarcerated people",
    skills: ["HTML", "LESS", "Javascript"],
    highlights: [
      "Collaborated on team of 6 developers to build React application with Express API backend",
      "Personally responsible for designing and building application's marketing page",
      "Utilized HTML and LESS to create and style marketing page with JavaScript components",
    ],
    githubLink: "https://github.com/lambdaprisonerskills/isaac-houle-pskills",
    deployment: "https://pskills-landing.netlify.com/",
    imageSrc: pSkills,
    altText: "the prisoner skills marketing page",
  },
];
export default projects;
