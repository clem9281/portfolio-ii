import lifeGPA from "../assets/backend-build-lifeGPA.jpg";
import pSkills from "../assets/prisoner-skills.jpg";
import bubl from "../assets/bubl.png";
import endrsd from "../assets/endrsd.png";
import resume from "../assets/resume-website.jpg";

const projects = [
  {
    title: "LifeGPA",
    description:
      "Productivity tool that measures daily completion of tasks to incentivize users to improve their life by repeating good habits",
    skills: ["Express", "Postgres", "Knex"],
    highlights: [
      "Independently executed passion project with goal of learning to calculate progress over time on the front and back end",
      "Utilized Express and Postgres to create a REST API, with bcrypt and JWT for authentication"
    ],
    githubLink: "https://github.com/clem9281/backend-build",
    deployment: "https://backend-build-lifegpa.herokuapp.com/",
    imageSrc: lifeGPA,
    alt: "my LifeGPA backend documentation"
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
      "Utilized Express with Postgres and Knex to build a REST API, authenticated by bcrypt and JWT"
    ],
    githubLink: "https://github.com/labs15-career-endorsement-tracker",
    deployment: "https://endrsd.com",
    imageSrc: endrsd,
    alt: "the homepage of endrsd.com"
  },
  {
    title: "Bubl",
    description:
      "Social application that helps elementary age students connect with one another before entering middle school",
    skills: ["React", "LESS", "Redux"],
    highlights: [
      "Collaborated with team of 2 front end, 1 back end and 3 web UI developers to build React application with Express API backend",
      "Personally responsible for coordinating with API developer to decide on application flow and building front end react application",
      "Utilized React with Redux and React Router to build a single page application with complex state"
    ],
    githubLink: "https://github.com/lambda-build-week-bubl/front-end",
    deployment: "https://bubl-fe.netlify.com/login",
    imageSrc: bubl,
    alt: "the homepage of the bubl app"
  },
  {
    title: "Prisoner Skills",
    description:
      "Marketing page for application that allows employers to hire incarcerated people",
    skills: ["HTML", "LESS", "Javascript"],
    highlights: [
      "Collaborated on team of 6 developers to build React application with Express API backend",
      "Personally responsible for designing and building application's marketing page",
      "Utilized HTML and LESS to create and style marketing page with JavaScript components"
    ],
    githubLink: "https://github.com/lambdaprisonerskills/isaac-houle-pskills",
    deployment: "https://pskills-landing.netlify.com/",
    imageSrc: pSkills,
    alt: "the prisoner skills marketing page"
  }
];
export default projects;
