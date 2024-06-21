export interface ProjectDetail {
  id: number;
  name: string;
  tech: string[];
  description: string;
  link: string;
}

export const projectDetails: ProjectDetail[] = [
  {
    id: 7,
    name: "Renting System",
    tech: ["Angular", "Express", "Node.js", "MongoDB"],
    description:
      "Created a comprehensive renting system using Angular for the frontend and Express with Node.js for the backend. Integrated MongoDB for efficient data storage, offering a seamless property renting experience.",
    link: "https://rentify-vfod.vercel.app/",
  },

  {
    id: 1,
    name: "Blog Application",
    tech: [
      "MongoDB",
      "Express.js",
      "Bootstrap",
      "HTML",
      "EJS",
      "CSS",
      "JavaScript",
    ],
    description:
      "Developed a feature-rich blog application complete with an admin panel, user authentication, and data management capabilities. Implemented MVC architecture to ensure scalablility.",
    link: "https://byte-tech-trend-blog.vercel.app/",
  },
  {
    id: 8,
    name: "D3 Chart with Dashboard App",
    tech: ["Angular", "Node.js", "Express"],
    description:
      "Built an interactive dashboard application featuring dynamic D3.js charts. Utilized Angular for the frontend and Node.js with Express for the backend to provide real-time data visualization and management.",
    link: "https://d3chartmean.vercel.app/",
  },
  {
    id: 6,
    name: "Ecommerce Application",
    tech: ["Express", "NodeJS", "Next JS", "MongoDB"],
    description:
      "Developed a secure and user-friendly Ecommerce Application using Express, NodeJS, and React JS. Features include robust authentication, seamless payment integration, and a smooth shopping experience.",
    link: "https://seaon.vercel.app/",
  },
  {
    id: 2,
    name: "Android Chat Application",
    tech: ["Java", "Android Studio", "Firebase", "XML"],
    description:
      "Designed and implemented a real-time Android chat application featuring secure authentication, payment integration, and functionalities of library and an in-app game, leveraging Firebase services.",
    link: "https://github.com/revuss/Chat-application",
  },
  {
    id: 3,
    name: "Feedback System",
    tech: ["Flask", "Python", "SQL", "HTML", "CSS", "JS"],
    description:
      "Built an web application which takes feedback utilizing python, Web development, Flask and SQL. Providing real-time feedback collection, secure authentication, and comprehensive data analysis capabilities.",
    link: "https://github.com/revuss/feedbackWithFlask",
  },
  {
    id: 4,
    name: "Employee Management System",
    tech: ["Spring Boot", "Java", "CRUD", "MySQL"],
    description:
      "Developed an efficient Employee Management System with Spring Boot and Java, implementing CRUD operations and utilizing MySQL for robust data handling, aimed at streamlining employee record management and organizational workflows.",
    link: "https://github.com/revuss/JPA-Hibernate-CRUD-Operations",
  },
  {
    id: 5,
    name: "Facial Recognition Attendance System",
    tech: ["OpenCV", "Python", "Excel"],
    description:
      "Implemented a facial recognition attendance system using OpenCV and Python, enhancing attendance tracking efficiency. Integrated with Excel for smooth data management and reporting.",
    link: "https://github.com/revuss/mini-project",
  },
];
