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
    location: "Thane, Maharashtra, India",
    linkedin: "JaydeepGedam",
    github: "JaydeepGedam"
  },
  resume: "https://drive.google.com/file/d/1IxCWOF4ggNne4-0JGkDnOxMNbr7C1eyK/view?usp=drive_link"
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
    ],
    liveDemo: "https://nayaan.vercel.app/"
  },
  {
    id: 2,
    title: "VibeCraft - AI Content Generator",
    subtitle: "WEB APPLICATION • REACT • TYPESCRIPT",
    description: "VibeCraft is an AI-powered content generation platform that lets users create, edit, and manage blog posts, marketing copy, and social media content from customizable prompts and templates.",
    longDescription: "VibeCraft is a full-stack AI content creation web app built to help creators and marketers produce high-quality written content quickly. Users can register and log in, choose or create prompt templates, submit prompts to an AI provider, and receive editable drafts. Each generation is persisted with metadata (prompt, tone, length, timestamp) so users can revisit, edit, and export past outputs. The frontend is built with React + TypeScript and Vite for a fast, responsive single-page experience, styled with Tailwind CSS. The backend uses Node.js and Express with MongoDB (Mongoose) for persistence and modular routes (auth, content, user). Key responsibilities handled by the app include secure authentication, orchestration of generation requests to an AI provider, storage and versioning of generation history, and an editor-first UX for refining AI outputs.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT (authentication)",
      "AI provider (OpenAI)"
    ],
    achievements: [
      "Implemented secure user registration, login, and protected routes for generation and history.",
      "Built a reusable prompt/template flow to produce consistent, repeatable AI outputs.",
      "Persisted generated content and versioned history with Mongoose models for GeneratedContent, GeneratedHistory, and User.",
      "Designed an editor-first, responsive UI using React + TypeScript and Tailwind CSS to speed editing and iteration.",
      "Modular API design separating auth, content, and user concerns to improve maintainability and scalability."
    ],
    status: "Live",
    category: "Full Stack",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1554168155-48f6e3f7b7f9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1526378723711-1f9d9b0c9a8a?w=800&h=600&fit=crop"
    ]
    ,
    // Add a live demo URL (replace with the real deployment URL when available)
    liveDemo: "https://vibecraft-frontend.onrender.com/"
  },
  {
    id: 3,
    title: "EKO - AI Twin Builder Platform",
    subtitle: "LIVE • FULL STACK • AI-POWERED",
    description: "A sophisticated web application that enables users to create their own AI Twin that mirrors their tone, thinking, and communication style through interactive training and chat capabilities.",
    longDescription: "EKO is an innovative AI Twin Builder Platform that revolutionizes personal AI interaction by allowing users to create a digital counterpart that learns and adapts to their unique communication style. The platform features an intuitive onboarding process, interactive training modules where users can teach their AI twin through conversations, and a robust chat interface for real-time interactions. Built with modern web technologies, EKO leverages Supabase for backend services, authentication, and database management, ensuring scalability and security. The application includes beautiful 3D visualizations powered by React Three Fiber, smooth animations with Framer Motion, and a comprehensive component library using shadcn/ui for a polished user experience.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Supabase",
      "Tailwind CSS",
      "shadcn/ui",
      "React Three Fiber",
      "Framer Motion",
      "Zustand",
      "React Query",
      "React Router",
      "Recharts"
    ],
    achievements: [
      "Built a complete AI twin training system with natural conversation flow",
      "Implemented secure authentication and user management with Supabase",
      "Designed responsive, modern UI with 3D visualizations and smooth animations",
      "Created scalable state management architecture using Zustand",
      "Deployed production-ready application with CI/CD pipeline on Render",
      "Integrated real-time chat functionality with persistent conversation history"
    ],
    status: "Live",
    category: "Full Stack",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop"
    ],
    liveDemo: "https://eko-ai-twin.onrender.com/"
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
    certificate: true,
    certificateUrl: "https://drive.google.com/file/d/13VtycfuY8KCB5tE0reanM1bfWZOdXlfl/view"
  },
  {
    title: "Web Development using Python Django",
    company: "Bitlance Tech Hub Pvt. Ltd.",
    duration: "3 months internship",
    description: "Gained hands-on experience in web development using Python Django framework, working on real-world projects.",
    certificate: true,
    certificateUrl: "https://drive.google.com/file/d/1PeR2OJWrQnhZ-gefH5PVIa8FP5iUof_y/view"
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
