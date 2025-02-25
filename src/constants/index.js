import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import project1 from "../assets/socialmedia.jpg"
import myshopmanager from "../assets/myshopmanager.jpg"
import eztech from "../assets/eztech-service.jpg"
import google from "../assets/sundar_pichai.jpg"
import tata from "../assets/ratan_tata_sir.jpeg"
import tesla1 from "../assets/ElonMusk.webp"
import ezlogo from "../assets/ez logo.jpg"
import ypsilon from "../assets/ypsilon.png"
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front-end Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "MernStack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express js",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker-basic",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Junior Developer",
    company_name: "EZTech",
    icon: ezlogo,
    iconBg: "#383E56",
    date: "december 2024 - Present",
    points: [
      "Developed and deployed the EzTech Services website using React and Context APIImplemented a bilingual interface with support for Russian and English languages.Designed a responsive and user-friendly UI, ensuring seamless performance across devices.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Technical-Intern",
    company_name: "Yp silon it Solution pvt ltd",
    icon: ypsilon,
    iconBg: "#E6DEDD",
    date: "july 2024 - october 2024",
    points: [
      "I have completed three month internship and Worked on the StudyNotion website, leveraging React and Context API to create a seamless and efficient user experience.Implemented core features such as dynamic content rendering, state management, and responsive design.Contributed to both frontend and backend development, ensuring high performance and scalability.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Python Intern",
    company_name: "Yp Silon It solution pvt ltd",
    icon: ypsilon,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Collaborated with team members to solve real-world problems, improve system performance, and enhance project outcomes.Demonstrated strong problem-solving skills and the ability to learn new technologies quickly during the internship.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "“We try to work on things which billions of people will use every day.”",
    name: "Sundar Pichai",
    designation: "Ceo",
    company: "Google",
    image:google,
  },
  {
    testimonial:
      "I don't Believe in Taking right Decision.I take Decision and then make right",
    name: "Ratan Tata",
    designation: "Ceo",
    company: "TATA",
    image: tata,
  },
  {
    testimonial:
      "Engineering is the closest thing to magic that exists in the world.",
    name: "Elon Musk",
    designation: "Ceo",
    company: "Tesla",
    image: tesla1,
  },
];

const projects = [
  {
    name: "SocialMedia",
    description:
      "Developed a dynamic social media web application using the MERN stack, enabling users to connect, share content, and engage in real-time interactions. Implemented features such as user authentication, profile management, posts, likes, comments, and real-time chat.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://socialmedia-2-0oo5.onrender.com/",
  },
  {
    name: "MyShopManager",
    description:
      "Developed a Local Market Shop Manager web application tailored for shopkeepers, leveraging Supabase for real-time data management and authentication. Built with React and React Query for an optimized, responsive frontend, and implemented a robust backend using Node.js and Express.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "supabase db",
        color: "pink-text-gradient",
      },
    ],
    image: myshopmanager,
    source_code_link: "https://github.com/",
  },
  {
    name: "EZTech Service Website",
    description:
      "Designed and developed the EzTech Service website, a modern and responsive platform for showcasing technology services. Built using React for a dynamic user interface, with Node.js and Express powering the backend. contact forms, and real-time inquiries to enhance user engagement.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "pink-text-gradient",
      },
      {
        name: "zustand",
        color: "green-text-gradient",
      },
    ],
    image: eztech,
    source_code_link: "https://www.eztech.in/",
  },
];

export { services, technologies, experiences, testimonials, projects };
