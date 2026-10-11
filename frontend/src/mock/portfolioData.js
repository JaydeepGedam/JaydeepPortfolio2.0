// Mock data for Jaydeep Gedam's Portfolio

export const personalInfo = {
  name: "JAYDEEP",
  lastName: "GEDAM",
  title: "< Frontend Developer />",
  tagline: "Building intelligent AI applications, modern frontends, and accessible technology",
  description: "Systems Engineer at TCS in the AI.cloud unit, contributing to GenAI applications and frontend engineering. Patent holder for Nayaan - Smart Device for Visually Impaired.",
  contact: {
    email: "jaydeep.gedam444@gmail.com",
    phone: "+91 9545176151",
    location: "Thane, Maharashtra, India",
    linkedin: "JaydeepGedam",
    github: "JaydeepGedam"
  },
  resume: "https://drive.google.com/file/d/1j_DYNkxWGkqhwEOc18lyj5t3ml8LynLY/view?usp=sharing"
};

export const projects = [
  {
    id: 1,
    title: "EpisodicAI - Cognitive Memory Infrastructure Platform",
    subtitle: "LIVE • ENTERPRISE AI • FASTAPI • REACT • VECTOR DB",
    description: "High-performance cognitive memory infrastructure for autonomous agents and conversational LLMs. Features autonomous memory extraction, 4-factor ranked retrieval, and intelligent conflict detection with per-user tenant isolation.",
    longDescription: "EpisodicAI is a production-grade cognitive memory infrastructure platform designed to give autonomous AI agents and conversational LLMs human-like episodic recall and context retention. Built with a FastAPI backend and a responsive React + TypeScript frontend, EpisodicAI autonomously analyzes dialogue streams to extract structured facts, user preferences, and evolving goals. It implements a proprietary 4-factor ranked retrieval matrix that scores memories by semantic similarity (pgvector embeddings), importance, confidence, and mathematical half-life recency decay (30.0 days). In addition, EpisodicAI features intelligent contradiction detection that automatically flags conflicting facts as superseded and preserves explicit lineage pointers, all backed by strict JWT-based per-user tenant isolation.",
    technologies: [
      "FastAPI",
      "Python",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "pgvector",
      "OpenAI API",
      "JWT Auth",
      "Docker"
    ],
    achievements: [
      "Engineered a 4-Factor Ranked Retrieval Matrix balancing semantic relevance (0.60), importance (0.20), confidence (0.10), and 30-day half-life recency decay (0.10).",
      "Developed autonomous background memory extraction pipeline detecting facts, preferences, and goals from raw conversation.",
      "Built semantic conflict resolution with automated superseding and lineage tracking pointers.",
      "Architected strict per-user multi-tenant isolation with JWT authentication and an automated verification test suite."
    ],
    status: "Live",
    category: "Full Stack",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop"
    ],
    liveDemo: "https://episodicai-frontend-three.vercel.app/"
  },
  {
    id: 2,
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
    id: 3,
    title: "VibeCraft - AI Content Generator & Scheduler",
    subtitle: "AI SAAS • REACT • NODE.JS • LINKEDIN AUTOMATION",
    description: "An AI content creation & scheduling platform that empowers creators to generate marketing copy, blog posts, and social media content, schedule posts with auto-publishing to LinkedIn, and manage custom API keys.",
    longDescription: "VibeCraft is a full-stack AI content automation platform built to streamline the workflow for creators and digital marketers. Users can generate customized marketing copy and articles with adjustable tones, target audiences, and prompt templates powered by OpenAI. The platform includes an advanced automated scheduling engine that schedules drafts and automatically publishes them directly to LinkedIn via API integrations. It offers robust history tracking, content export in multiple formats (Markdown, PDF, text), and user settings for managing custom OpenAI API keys. Built with React + TypeScript and Vite on the frontend and Node.js + Express with MongoDB on the backend, deployed live on Render.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "LinkedIn API",
      "Task Scheduler",
      "OpenAI API"
    ],
    achievements: [
      "Implemented automated content scheduling engine with direct 1-click auto-publishing to LinkedIn.",
      "Built target audience persona customization and user-level custom OpenAI API key management.",
      "Created multi-format content export capabilities (Markdown, PDF, text) with instant downloads.",
      "Designed an editor-first, responsive UI and deployed the full-stack architecture on Render with persistent history tracking."
    ],
    status: "Live",
    category: "Full Stack",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1554168155-48f6e3f7b7f9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1526378723711-1f9d9b0c9a8a?w=800&h=600&fit=crop"
    ],
    liveDemo: "https://vibecraft-frontend.onrender.com/"
  }
];

export const skills = {
  technical: [
    { name: "React.js", level: 90, category: "Frontend" },
    { name: "JavaScript", level: 88, category: "Frontend" },
    { name: "Material UI & Tailwind", level: 88, category: "Frontend" },
    { name: "Python / FastAPI", level: 82, category: "Backend" },
    { name: "Prompt Engineering & LLMs", level: 85, category: "Generative AI" },
    { name: "Azure AI Search", level: 80, category: "Cloud & AI" },
    { name: "Selenium & pytest", level: 82, category: "Testing" },
    { name: "Microsoft SQL Server", level: 78, category: "Database" },
    { name: "Git/GitHub", level: 85, category: "Tools" }
  ],
  tools: [
    { name: "VS Code", level: 90, category: "Development" },
    { name: "Microsoft Azure", level: 82, category: "Cloud" },
    { name: "Azure DevOps", level: 78, category: "DevOps" },
    { name: "Postman", level: 85, category: "API Testing" },
    { name: "Figma", level: 80, category: "Design" }
  ],
  soft: [
    "Problem Solving",
    "Team Collaboration",
    "Prompt Engineering",
    "Technical Communication",
    "Continuous Learning",
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

export const workExperience = [
  {
    id: 1,
    title: "Systems Engineer",
    company: "Tata Consultancy Services (TCS)",
    shortName: "TCS (AI.cloud)",
    unit: "AI.cloud",
    project: "GenAI Test Studio",
    duration: "Aug 2024 – Present",
    periodBadge: "Aug 2024 – Present",
    type: "Full-Time",
    location: "India",
    featured: true,
    description: "Contributing to GenAI application development and frontend engineering on GenAI Test Studio—building React interfaces, integrating backend APIs, and implementing automated testing workflows.",
    highlights: [
      "Engineered frontend interfaces using React.js, Material UI, and Tailwind CSS for test suite management and analytics dashboards.",
      "Integrated components with Python/FastAPI backend services, SQL Server, and authentication via MSAL / Azure AD.",
      "Automated UI test flows using Selenium and pytest; explored AI-assisted testing via Playwright MCP (POC)."
    ],
    skills: [
      "React.js",
      "FastAPI / Python",
      "Material UI & Tailwind",
      "Azure AI Search",
      "Prompt Engineering",
      "Selenium & pytest",
      "Playwright MCP (POC)",
      "Azure AD / MSAL"
    ]
  }
];

export const internships = [
  {
    id: 2,
    title: "Persistent Martian Internship",
    company: "Persistent Systems",
    shortName: "Persistent Systems",
    duration: "7-week virtual internship",
    periodBadge: "7 Weeks",
    type: "Internship",
    description: "Completed comprehensive virtual internship program focusing on software development practices, computer science foundations, and emerging technologies.",
    highlights: [
      "Completed structured training in software engineering best practices, data structures, and algorithms.",
      "Engaged in hands-on practical problem-solving modules and technical assessments.",
      "Earned certificate of completion for emerging software engineering concepts."
    ],
    skills: ["Software Engineering", "Core Java", "Data Structures", "Algorithms"],
    certificate: true,
    certificateUrl: "https://drive.google.com/file/d/13VtycfuY8KCB5tE0reanM1bfWZOdXlfl/view"
  },
  {
    id: 3,
    title: "Web Development using Python Django",
    company: "Bitlance Tech Hub Pvt. Ltd.",
    shortName: "Bitlance Tech Hub",
    duration: "3 months internship",
    periodBadge: "3 Months",
    type: "Internship",
    description: "Gained hands-on experience in web development using Python Django framework, working on backend modules and database-driven features.",
    highlights: [
      "Built server-side web features and RESTful endpoints using Python and Django.",
      "Designed and integrated relational database schemas with SQLite.",
      "Collaborated on debugging and deploying feature modules for real-world projects."
    ],
    skills: ["Python", "Django", "REST APIs", "SQLite", "Web Development"],
    certificate: true,
    certificateUrl: "https://drive.google.com/file/d/1PeR2OJWrQnhZ-gefH5PVIa8FP5iUof_y/view"
  }
];

export const experiences = [
  ...workExperience,
  ...internships
];

// Mock chatbot responses
export const chatbotData = {
  greetings: [
    "Hi there! I'm Jaydeep's AI assistant. I can tell you all about his projects, skills, experience at TCS AI.cloud, and achievements! What would you like to know?",
    "Hello! Welcome to Jaydeep's portfolio. I'm here to help you learn more about his work as a Systems Engineer at TCS and his latest AI projects. How can I assist you?",
    "Hey! I'm here to share everything about Jaydeep - from his patent-winning Nayaan project and EpisodicAI platform to his work in TCS AI.cloud. What interests you?"
  ],
  responses: {
    projects: "Jaydeep has built notable projects:\n1. **EpisodicAI**: Cognitive memory infrastructure for AI agents with 4-factor ranked retrieval.\n2. **Nayaan**: A patented smart assistive device for visually impaired individuals (App: 202321065172).\n3. **VibeCraft**: An AI content platform with automated LinkedIn scheduling and custom key management.\nWhich one would you like to explore deeper?",
    nayaan: "Nayaan is Jaydeep's flagship patented project (Application No: 202321065172) - a smart assistive device for visually impaired individuals. It has a published research paper in Springer Journal, won 1st Runner Up at BharatCon24, and was selected for CIIA-3 exhibition in Mumbai! It uses PaddleOCR, AI/ML, and NLP to help users navigate independently.",
    episodicai: "EpisodicAI is Jaydeep's cognitive memory infrastructure platform for AI applications. It gives AI agents persistent memory via autonomous fact extraction from chat dialogues, a 4-factor ranked retrieval matrix (semantic, importance, confidence, and recency decay), and intelligent conflict resolution with strict per-user tenant isolation.",
    vibecraft: "VibeCraft is an AI-powered content generation and marketing automation platform built by Jaydeep. It includes an automated scheduling engine that auto-publishes content directly to LinkedIn, target audience persona customization, and custom OpenAI API key management.",
    skills: "Jaydeep's skills include React.js, JavaScript, Material UI, Tailwind CSS, Python, FastAPI, Azure AI Search, Prompt Engineering, Selenium WebDriver, pytest, Playwright MCP (POC), MSAL/Azure AD, and SQL Server.",
    achievements: "Jaydeep holds a published patent for Nayaan, published research in a Springer Journal, won 1st Runner Up at BharatCon24, was selected for the top 100 projects at CIIA-3 Mumbai, and won district-level student innovation challenges.",
    education: "Jaydeep graduated with a Bachelor's in Information Technology from Government College of Engineering, Amravati (CGPA: 8.66). He also completed his Diploma in Computer Science & Engineering with 96.58% from Government Polytechnic, Amravati.",
    contact: "You can reach Jaydeep at jaydeep.gedam444@gmail.com or call him at +91 9545176151. He is also active on LinkedIn (JaydeepGedam) and GitHub (JaydeepGedam).",
    experience: "Jaydeep is a Systems Engineer at Tata Consultancy Services (TCS) in the AI.cloud unit (since Aug 2024). He contributes to GenAI applications, primarily working on GenAI Test Studio—building React frontend interfaces, integrating with Python/FastAPI services, Azure AD authentication, and automated testing with Selenium, pytest, and a Playwright MCP proof-of-concept."
  },
  fallback: "That's an interesting question! While I have comprehensive information about Jaydeep's work at TCS AI.cloud, EpisodicAI, Nayaan, skills, and achievements, you can always connect with Jaydeep directly at jaydeep.gedam444@gmail.com!"
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

