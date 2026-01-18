export interface Internship {
  id: string;
  title: string;
  duration: string;
  type: string;
  description: string;
  skills: string[];
  fullDescription: string;
  responsibilities: string[];
  requirements: string[];
}

export const internships: Internship[] = [
  {
    id: "graphic-designer",
    title: "Graphic Designer Internship",
    duration: "3–6 months",
    type: "Unpaid and Remote",
    description: "Work on real-world projects, learn best practices, and contribute to our visual branding across various channels.",
    skills: ["Canva", "Adobe Creative Suite", "Typography", "Layout Principles"],
    fullDescription: "Join our creative team as a Graphic Designer Intern where you'll work on real-world projects and contribute to our visual branding. You'll learn industry best practices while creating stunning visuals for various marketing channels.",
    responsibilities: [
      "Create visual content for social media and marketing campaigns",
      "Design graphics for web and print materials",
      "Collaborate with the marketing team on branding projects",
      "Maintain brand consistency across all visual assets"
    ],
    requirements: [
      "Proficiency in Canva and Adobe Creative Suite",
      "Understanding of typography and layout principles",
      "Strong attention to detail",
      "Portfolio showcasing design work"
    ]
  },
  {
    id: "frontend-developer",
    title: "Frontend Developer Internship",
    duration: "3–6 months",
    type: "Unpaid and Remote",
    description: "Join our team to build beautiful, intuitive, and high-performance user interfaces using React.",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Git"],
    fullDescription: "As a Frontend Developer Intern, you'll be part of our development team building modern, responsive web applications. You'll gain hands-on experience with React and modern web technologies.",
    responsibilities: [
      "Develop responsive user interfaces using React",
      "Write clean, maintainable code",
      "Collaborate with designers and backend developers",
      "Participate in code reviews and team meetings"
    ],
    requirements: [
      "Knowledge of HTML5, CSS3, and JavaScript",
      "Familiarity with React framework",
      "Basic understanding of Git version control",
      "Eagerness to learn and grow"
    ]
  },
  {
    id: "backend-developer",
    title: "Backend Developer Internship",
    duration: "3–6 months",
    type: "Unpaid and Remote",
    description: "Assist in the design and maintenance of robust backend services and APIs.",
    skills: ["PostgreSQL", "MongoDB", "RESTful APIs", "Git"],
    fullDescription: "Join our backend team to work on server-side development, database management, and API design. You'll learn how to build scalable and secure backend systems.",
    responsibilities: [
      "Develop and maintain RESTful APIs",
      "Work with PostgreSQL and MongoDB databases",
      "Write unit tests and documentation",
      "Collaborate with frontend developers"
    ],
    requirements: [
      "Understanding of server-side programming",
      "Basic knowledge of SQL and NoSQL databases",
      "Familiarity with RESTful API concepts",
      "Problem-solving mindset"
    ]
  },
  {
    id: "fullstack-developer",
    title: "Full Stack Developer Internship",
    duration: "3–6 months",
    type: "Unpaid and Remote",
    description: "Contribute to the development of new features across the entire stack.",
    skills: ["React", "Node.js", "SQL/NoSQL", "Git"],
    fullDescription: "As a Full Stack Developer Intern, you'll work on both frontend and backend development, gaining experience across the entire technology stack.",
    responsibilities: [
      "Develop features for both frontend and backend",
      "Work with databases and APIs",
      "Debug and troubleshoot issues",
      "Participate in agile development processes"
    ],
    requirements: [
      "Knowledge of React and Node.js",
      "Understanding of database concepts",
      "Familiarity with Git",
      "Strong problem-solving skills"
    ]
  },
  {
    id: "seo-specialist",
    title: "SEO Specialist Internship",
    duration: "3–6 months",
    type: "Unpaid and Remote",
    description: "Optimize website content for search engines to improve organic rankings.",
    skills: ["SEO Principles", "Google Analytics", "Search Console"],
    fullDescription: "Join our marketing team to learn and implement SEO strategies that drive organic traffic and improve search rankings.",
    responsibilities: [
      "Conduct keyword research and analysis",
      "Optimize on-page SEO elements",
      "Monitor and report on SEO performance",
      "Assist in content optimization strategies"
    ],
    requirements: [
      "Understanding of SEO fundamentals",
      "Familiarity with Google Analytics",
      "Analytical mindset",
      "Strong written communication skills"
    ]
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer Internship",
    duration: "3–6 months",
    type: "Unpaid and Remote",
    description: "Collaborate to design intuitive and user-friendly interfaces in Figma.",
    skills: ["Figma", "UX Principles", "Prototyping"],
    fullDescription: "As a UI/UX Designer Intern, you'll work on creating intuitive user experiences and beautiful interfaces for web and mobile applications.",
    responsibilities: [
      "Create wireframes and prototypes in Figma",
      "Conduct user research and testing",
      "Design user interfaces for web applications",
      "Collaborate with developers on implementation"
    ],
    requirements: [
      "Proficiency in Figma",
      "Understanding of UX principles",
      "Eye for detail and aesthetics",
      "Portfolio showcasing UI/UX work"
    ]
  },
  {
    id: "content-writer",
    title: "Content Writer Internship",
    duration: "3–6 months",
    type: "Unpaid and Remote",
    description: "Craft high-quality content for our blog, website, and social media platforms.",
    skills: ["Writing", "Research", "SEO Content"],
    fullDescription: "Join our content team to create engaging content that resonates with our audience and supports our marketing goals.",
    responsibilities: [
      "Write blog posts and articles",
      "Create social media content",
      "Research industry topics",
      "Optimize content for SEO"
    ],
    requirements: [
      "Excellent writing and grammar skills",
      "Research and analytical abilities",
      "Understanding of content marketing",
      "Creativity and attention to detail"
    ]
  }
];
