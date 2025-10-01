// Mock data for Jaydeep Gedam's Portfolio

export const personalInfo = {
  name: "JAYDEEP",
  lastName: "GEDAM",
  title: "< Frontend Developer />",
  tagline: "Building accessible tech solutions with a patent to prove it",
  description: "Passionate frontend developer with expertise in React, Next.js, and innovative assistive technologies. Patent holder for Nayaan - Smart Device for Visually Impaired.",
  contact: {
    email: "jaydeep.gedam444@gmail.com",
    phone: "+91 9545176151",
    location: "Amravati, Maharashtra, India",
    linkedin: "JaydeepGedam",
    github: "JaydeepGedam"
  },
  resume: "https://customer-assets.emergentagent.com/job_6e932482-3580-4767-b9db-223a26b22545/artifacts/tage9lwz_Resume_JaydeepGedam%28latest%29.pdf"
};

export const projects = [
  {
    id: 1,
    title: "Nayaan - Smart Device for Visually Impaired",
    subtitle: "PATENTED • LIVE • AWARD WINNING",
    description: "An innovative assistive device designed to help visually impaired individuals navigate their environment independently. Features OCR text reading, object detection, and natural language processing.",
    longDescription: "Nayaan is a revolutionary smart device that addresses the daily challenges faced by visually impaired individuals. The device combines cutting-edge AI technologies including PaddleOCR Engine, DFRobot offline LLM model, and advanced NLP interfaces to provide real-time assistance. Through extensive research involving 50+ blind students and faculties, we identified key pain points and developed solutions that truly make a difference in their lives.",
    technologies: ["PaddleOCR", "Python", "AI/ML", "NLP", "Embedded Systems", "React.js"],
    achievements: [
      "Patent Published (Application No: 202321065172)",
      "Research Paper Published in Springer Journal",
      "1st Runner up at BharatCon24 project pitching competition",
      "Top 100 projects selected for CIIA-3 exhibition, Mumbai",
      "Won district level student innovation challenge"
    ],
    status: "Live",
    category: "AI/Hardware",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
    ]
  },
  {
    id: 2,
    title: "NextBMS - Smart Business Management Solution",
    subtitle: "WEB APPLICATION • NEXT.JS",
    description: "A comprehensive business management web application built with Next.js, providing inventory and people management services for commerce stores.",
    longDescription: "NextBMS is a modern web application designed to streamline business operations for small to medium-sized commerce stores. The platform offers intuitive inventory management, employee management, and business analytics. Built with Next.js for optimal performance and user experience, the application features a responsive design that works seamlessly across all devices.",
    technologies: ["Next.js", "React", "JavaScript", "CSS3", "Node.js", "Database Management"],
    achievements: [
      "Enhanced user interface with modern design principles",
      "Implemented responsive design for mobile compatibility",
      "Optimized frontend performance and load times"
    ],
    status: "Completed",
    category: "Web Development",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=600&fit=crop"
    ]
  },
  {
    id: 3,
    title: "GroceryMate - E-commerce Platform",
    subtitle: "TCS TRAINING PROJECT • FULL STACK",
    description: "A complete e-commerce web application for grocery shopping with user authentication, product management, and admin dashboard functionality.",
    longDescription: "GroceryMate is a full-featured e-commerce platform developed during TCS training. The application includes user registration and authentication, a comprehensive product catalog, shopping cart functionality, and an admin panel for product and user management. The frontend is built with HTML, Tailwind CSS, and JavaScript, focusing on creating an intuitive and responsive user experience.",
    technologies: ["HTML5", "Tailwind CSS", "JavaScript", "Python", "Database", "Authentication"],
    achievements: [
      "Implemented secure user authentication system",
      "Designed responsive UI with Tailwind CSS",
      "Created comprehensive admin dashboard",
      "Optimized user experience with modern design patterns"
    ],
    status: "Completed",
    category: "Full Stack",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
    ]
  }
];

export const skills = {
  technical: [
    { name: "React.js", level: 90, category: "Frontend" },
    { name: "Next.js", level: 85, category: "Frontend" },
    { name: "JavaScript", level: 88, category: "Programming" },
    { name: "HTML/CSS", level: 92, category: "Frontend" },
    { name: "C++", level: 75, category: "Programming" },
    { name: "Python", level: 70, category: "Programming" },
    { name: "Tailwind CSS", level: 85, category: "Frontend" },
    { name: "Git/GitHub", level: 80, category: "Tools" }
  ],
  tools: [
    { name: "Figma", level: 85, category: "Design" },
    { name: "VS Code", level: 90, category: "Development" },
    { name: "OBS", level: 70, category: "Media" },
    { name: "GitHub", level: 85, category: "Version Control" }
  ],
  soft: [
    "Leadership",
    "Team Work",
    "Communication",
    "Management",
    "Prompt Engineering",
    "Problem Solving",
    "Innovation"
  ]
};

export const education = [
  {
    degree: "Bachelor in Information Technology",
    institution: "Government College of Engineering, Amravati",
    duration: "Dec 2021 – June 2024",
    grade: "CGPA: 8.66",
    location: "Amravati"
  },
  {
    degree: "Diploma in Computer Science and Engineering",
    institution: "Government Polytechnic, Amravati",
    duration: "June 2018 – August 2021",
    grade: "Percentage: 96.58",
    location: "Amravati"
  }
];

export const achievements = [
  {
    title: "Patent Published",
    description: "Published Patent for project Nayaan (Application No: 202321065172)",
    date: "2023",
    type: "Patent"
  },
  {
    title: "Research Paper Published",
    description: "Published Research Paper in Springer Journal for Nayaan project",
    date: "2023",
    type: "Publication"
  },
  {
    title: "BharatCon24 - 1st Runner Up",
    description: "1st Runner up at BharatCon24 project pitching competition",
    date: "2024",
    type: "Competition"
  },
  {
    title: "CIIA-3 Exhibition Selection",
    description: "Among the top 100 projects selected for the CIIA-3 exhibition held in Mumbai",
    date: "2023",
    type: "Exhibition"
  },
  {
    title: "District Level Innovation Winner",
    description: "Won district level student innovation challenge and selected for state level",
    date: "2023",
    type: "Competition"
  }
];

export const internships = [
  {
    title: "Persistent Martian Internship",
    company: "Persistent Systems",
    duration: "7-week virtual internship",
    description: "Completed comprehensive virtual internship program focusing on software development practices and emerging technologies.",
    certificate: true
  },
  {
    title: "Web Development using Python Django",
    company: "Bitlance Tech Hub Pvt. Ltd.",
    duration: "3 months internship",
    description: "Gained hands-on experience in web development using Python Django framework, working on real-world projects.",
    certificate: true
  }
];

// Mock chatbot responses
export const chatbotData = {
  greetings: [
    "Hi there! I'm Jaydeep's AI assistant. I can tell you all about his projects, skills, and achievements! What would you like to know?",
    "Hello! Welcome to Jaydeep's portfolio. I'm here to help you learn more about his work and experience. How can I assist you?",
    "Hey! I'm here to share everything about Jaydeep - from his patent-winning Nayaan project to his latest web developments. What interests you?"
  ],
  responses: {
    projects: "Jaydeep has worked on some amazing projects! His most notable is Nayaan - a patented smart device for visually impaired people. He's also built NextBMS (a business management solution) and GroceryMate (an e-commerce platform). Which project would you like to know more about?",
    nayaan: "Nayaan is Jaydeep's flagship project - a smart assistive device for visually impaired individuals. It's patented (Application No: 202321065172), has a published research paper in Springer Journal, and won 1st Runner Up at BharatCon24! The device uses PaddleOCR, AI/ML, and NLP to help users navigate independently. It's currently live and helping real users!",
    skills: "Jaydeep is proficient in React.js (90%), Next.js (85%), JavaScript (88%), and HTML/CSS (92%). He also knows C++, Python, and uses tools like Figma, VS Code, and GitHub. His soft skills include leadership, communication, and innovation - which clearly show in his patent-winning work!",
    achievements: "Jaydeep has some incredible achievements! He holds a patent, published a research paper in Springer Journal, won 1st Runner Up at BharatCon24, was selected for top 100 projects at CIIA-3 exhibition in Mumbai, and won a district-level innovation challenge. Pretty impressive for a frontend developer, right?",
    education: "Jaydeep graduated with a Bachelor's in Information Technology from Government College of Engineering, Amravati with an excellent CGPA of 8.66. He also has a Diploma in Computer Science with 96.58% from Government Polytechnic, Amravati. Strong academic foundation!",
    contact: "You can reach Jaydeep at jaydeep.gedam444@gmail.com or call him at +91 9545176151. He's also active on LinkedIn and GitHub as 'JaydeepGedam'. He's based in Amravati, Maharashtra, India.",
    experience: "Jaydeep has completed internships at Persistent Systems (7-week Martian program) and Bitlance Tech Hub (3-month Django development). He's worked extensively on frontend development, AI/ML integration, and has hands-on experience with real-world projects that solve actual problems."
  },
  fallback: "That's an interesting question! While I have comprehensive information about Jaydeep's projects, skills, and achievements, I might not have specific details about that. You can always contact Jaydeep directly at jaydeep.gedam444@gmail.com for more personalized answers!"
};

export const testimonials = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Professor, Government College of Engineering",
    text: "Jaydeep's work on Nayaan demonstrates exceptional innovation and social impact. His dedication to creating accessible technology solutions is truly commendable.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Priya Sharma",
    role: "Senior Developer, Tech Innovations",
    text: "Working with Jaydeep on NextBMS was a great experience. His frontend skills and attention to user experience details are remarkable.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Amit Patil",
    role: "Project Manager, Bitlance Tech Hub",
    text: "During his internship, Jaydeep showed excellent learning ability and delivered high-quality work on Django projects. His problem-solving skills stand out.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  }
];
