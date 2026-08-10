// Comprehensive Portfolio Data Store for Farouk BOURAOUI

export const PROFILE_DATA = {
  name: "Farouk BOURAOUI",
  shortName: "Farouk B.",
  initials: "FB",
  avatar: "/assets/farouk-profile.jpg",
  title: "Full-Stack Developer",
  secondaryTitle: "Software Engineering Student | Full-Stack Developer | AI Enthusiast",
  headline: "Building useful, scalable & modern digital products.",
  address: "3 rue Lebon, Cergy, France",
  location: "Cergy, France",
  status: "Available for Internships & Freelance Opportunities",
  email: "faroukbouraoui9@gmail.com",
  linkedin: "https://www.linkedin.com/in/farouk-bouraoui-a4a24a2b9/",
  github: "https://github.com/faroukbouraoui",
  cyTechStatus: "Starting CY Tech in 2026 (1st Year Engineering Cycle)",
  intro: "I'm Farouk Bouraoui, a software engineering student entering CY Tech (Cergy, France) in 2026, with experience building full-stack web applications, REST APIs, data-analysis tools and user-centered digital products.",
  secondaryIntro: "I work across frontend, backend, databases and software architecture, with technologies including React, Spring Boot, ASP.NET Core, Blazor, Python and SQL.",
  bioAbout: `I'm a software engineering student entering CY Tech in Cergy, France for the 2026 academic year. My background combines software development, full-stack web engineering, UI/UX design and data analysis.

I enjoy transforming real-world problems into practical digital solutions, from requirements analysis and wireframing to backend APIs, database design and frontend implementation.

I have worked on academic projects, professional internships and a real client data-analysis project.`,
  metrics: [
    { title: "Full-Stack Development", subtitle: "End-to-End Web Systems", icon: "Code2", count: "Multi-Tier" },
    { title: "REST APIs & Security", subtitle: "Spring Boot & ASP.NET", icon: "Server", count: "JWT Auth" },
    { title: "Data & AI Tools", subtitle: "Pandas & Signal Analysis", icon: "Brain", count: "Time-Series" },
    { title: "UI/UX Design", subtitle: "Wireframing & Interfaces", icon: "Layout", count: "User-Centered" }
  ]
};

export const FEATURED_PROJECTS = [
  {
    id: "csv-analysis-tool",
    title: "CSV Data Analysis & Visualization Tool",
    category: "Client Project / Data Analysis",
    badge: "Client Engagement",
    shortDescription: "Desktop application developed for CSV data preparation, signal smoothing, anomaly detection and automated chart generation.",
    technologies: ["Python", "Pandas", "Matplotlib", "CSV Processing", "Data Analysis", "Time-Series Analysis"],
    primaryImage: "/assets/csv-pipeline-completed.jpg",
    secondaryImage: "/assets/csv-pipeline-initial.jpg",
    github: null,
    caseStudy: {
      type: "Client Project",
      client: "Industrial Telemetry Client",
      overview: "A specialized desktop data tool engineered for a client needing automated telemetry CSV ingestion, signal cleanup, anomaly filtering, and visual reporting.",
      problem: "The client received high-frequency raw CSV telemetry logs containing sensor noise, irregular sample intervals, and hidden signal spikes. Manual Excel analysis was time-consuming, prone to human error, and unable to calculate time-series trends efficiently.",
      role: "Lead Developer — Responsible for designing the Python processing pipeline, implementing smoothing algorithms, building the Tkinter desktop GUI, and crafting auto-refresh Matplotlib charts.",
      solution: "Engineered a desktop GUI wizard that allows non-technical users to drag-and-drop CSV files, auto-detect numeric channels, run a configurable processing pipeline, and immediately render a 3-panel comparative telemetry dashboard.",
      keyFeatures: [
        "CSV File Import with automatic column parsing and data validation",
        "Dynamic drop-down selection for target numerical signal (e.g. valeur_capteur)",
        "Automated data cleaning & signal noise reduction (moving average / Gaussian smoothing)",
        "Statistical anomaly detection for sudden spikes & signal dropouts",
        "Linear & polynomial trend line analysis over timestamp intervals",
        "Multi-chart dashboard display (Raw vs Smoothed Signal, Detected Anomalies, Trend Evolution)",
        "Progress tracking bar and status messaging for long processing tasks"
      ],
      architecture: [
        "Language: Python 3",
        "Data Engine: Pandas & NumPy",
        "Plotting Engine: Matplotlib & SciPy",
        "GUI Framework: Tkinter / CustomTkinter",
        "Export Module: PNG chart export & cleaned CSV output"
      ],
      screenshots: [
        { title: "Pipeline Ingestion Setup", src: "/assets/csv-pipeline-initial.jpg", caption: "Initial state showing CSV upload button, detected columns drop-down, and waiting status for charts." },
        { title: "Completed Pipeline & 3-Chart Dashboard", src: "/assets/csv-pipeline-completed.jpg", caption: "Full pipeline execution output featuring Raw vs Smoothed Signal, Detected Anomalies, and Trend Evolution charts." }
      ],
      challenges: "Handling unexpected null values, missing timestamps, and non-numeric characters inside client CSV files without crashing the GUI. Solved by implementing robust data coercion rules and defensive validation checks.",
      learned: "Learned how to design software tailored for real client business operations, manage edge cases in unstructured user data, and package Python data tools into clean desktop executables."
    }
  },
  {
    id: "complaint-maintenance-system",
    title: "Complaint & Maintenance Management System",
    category: "Full-Stack Web Application",
    badge: "Professional Internship Project",
    shortDescription: "Full-stack web application developed during a professional internship for managing technical complaints, equipment and maintenance operations.",
    technologies: ["C#", "ASP.NET Core", "Blazor", "Entity Framework Core", "SQL Server", "REST API", "JWT"],
    primaryImage: "/assets/university-edit-course.jpg",
    secondaryImage: null,
    github: null,
    caseStudy: {
      type: "Professional Internship Project",
      company: "Samobay (Jan 2025 – Jul 2025)",
      overview: "An enterprise web portal engineered to streamline technical complaint reporting, technician assignment, equipment tracking, and repair operations across facility assets.",
      problem: "Facility maintenance requests were previously tracked via loose spreadsheets and phone calls, leading to misplaced tickets, slow technician dispatch, and lack of visibility into equipment failure rates.",
      role: "Full-Stack Developer Intern — Designed and built the C# Blazor WebAssembly frontend, developed REST API endpoints using ASP.NET Core, designed SQL Server database schemas, and configured JWT role-based security.",
      solution: "Created a centralized web platform where clients submit maintenance requests, admins allocate technicians based on priority, and technicians update resolution status in real time.",
      keyFeatures: [
        "User authentication and multi-role authorization (Admin, Technician, User)",
        "Interactive complaint submission form with priority tags and asset selection",
        "Real-time maintenance dashboard for tracking request stages (Pending, In Progress, Resolved)",
        "Equipment inventory catalog with maintenance history logs",
        "Technician task assignment & workload distribution module",
        "RESTful Web API back-end built with ASP.NET Core",
        "Entity Framework Core ORM with SQL Server database migrations"
      ],
      architecture: [
        "Frontend: Blazor WebAssembly (Single-Page Application)",
        "Backend: ASP.NET Core Web API (.NET Core)",
        "Database: Microsoft SQL Server",
        "ORM: Entity Framework Core",
        "Security: JWT Bearer Tokens & Role Claims",
        "Testing & Tools: Visual Studio 2022, Postman, Git"
      ],
      screenshots: [
        { title: "Management & Action Interface", src: "/assets/university-edit-course.jpg", caption: "Clean modal interface for updating equipment and complaint records with role-based validation." }
      ],
      challenges: "Ensuring secure role-based navigation and token refresh mechanics between Blazor WASM and ASP.NET Core REST API. Solved by crafting custom AuthenticationStateProviders in Blazor and standardizing JWT token handling.",
      learned: "Deepened proficiency in .NET enterprise architecture, C# strong typing across frontend and backend, EF Core migrations, and production REST API design."
    }
  },
  {
    id: "online-learning-platform",
    title: "Online Learning Platform",
    category: "Full-Stack / UI Design",
    badge: "Full-Stack Academic Project",
    shortDescription: "Online education platform designed and developed for managing courses, students, registrations and academic administrative interfaces.",
    technologies: ["React", "Spring Boot", "REST API", "HTML", "CSS", "JavaScript", "UI/UX"],
    primaryImage: "/assets/university-hero.jpg",
    secondaryImage: "/assets/university-about.jpg",
    github: "https://github.com/faroukbouraoui",
    caseStudy: {
      type: "Full-Stack & UI/UX Project",
      overview: "An end-to-end university management & e-learning web platform covering student registration, course catalogs, enrollment workflows, and course update modals.",
      problem: "Traditional academic management tools suffer from cluttered, unintuitive user interfaces that hinder student registration and course updating for university staff.",
      role: "Full-Stack Developer & UI Designer — Created paper wireframes, user flow sketches, React single-page frontend components, and Java Spring Boot REST APIs.",
      solution: "Delivered a clean, high-contrast web app with intuitive course grid displays, swift modal dialogs for course updates, and seamless student management routes.",
      keyFeatures: [
        "Interactive course catalog with category filters and details view",
        "Student enrollment & course registration management",
        "User login, registration, and password recovery workflows",
        "Admin control panel for adding, editing, and deleting courses/students",
        "Modal dialogs for inline entity updates (e.g. Modifier le Cours)",
        "Responsive web layouts optimized for desktop and mobile viewports"
      ],
      wireframeStory: {
        title: "From Wireframe to Polished Interface",
        wireframeImage: "/assets/university-wireframe.png",
        finalImage: "/assets/university-hero.jpg",
        secondaryFinalImage: "/assets/university-about.jpg",
        modalImage: "/assets/university-edit-course.jpg",
        description: "The design began with low-fidelity paper wireframes mapping out navigation headers, course grid containers, and modal layouts. These sketches were translated into responsive CSS flexbox/grid components connected to REST APIs."
      },
      architecture: [
        "Frontend: React SPA with Modular Component Architecture",
        "Backend: Java Spring Boot REST API",
        "Database: Relational Database (SQL)",
        "Styling: Modern CSS3 with Flexbox & Grid System"
      ],
      screenshots: [
        { title: "Main Welcome & Course Hero", src: "/assets/university-hero.jpg", caption: "Clean university portal landing header with direct navigation links to Courses & Students." },
        { title: "Platform Overview Section", src: "/assets/university-about.jpg", caption: "Card layout highlighting student and course management modules." },
        { title: "Edit Course Modal (Modifier le Cours)", src: "/assets/university-edit-course.jpg", caption: "Interactive edit dialog allowing administrators to update course details seamlessly." }
      ],
      challenges: "Translating hand-drawn wireframe layouts into fluid, responsive CSS grids while maintaining strict visual spacing and color contrast.",
      learned: "Gained valuable experience bridging UI/UX wireframing with React state management and Spring Boot REST backend integration."
    }
  },
  {
    id: "hackjourney-platform",
    title: "HackJourney — Hackathon Management Platform",
    category: "Full-Stack / Architecture",
    badge: "Academic Team Project (3 Members)",
    shortDescription: "Comprehensive web platform designed to manage the complete end-to-end lifecycle of hackathons, from team creation to jury evaluation.",
    technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "JWT"],
    primaryImage: "/assets/hackathon-arch.png",
    secondaryImage: null,
    github: "https://github.com/faroukbouraoui",
    caseStudy: {
      type: "Academic Team Project (3 Members)",
      overview: "A multi-role web platform built to orchestrate hackathons: participant registration, team formation, mentor advice requests, sponsor challenge creation, and jury project scoring.",
      problem: "Hackathon organizers struggle to manage multiple disconnected tools for signups, team formation, mentor scheduling, and project evaluation.",
      role: "Backend Architect & Full-Stack Developer (Team of 3) — Co-designed requirements specifications, UML diagrams, Spring Boot entity relationships, and React participant interfaces.",
      solution: "Engineered a unified platform with role-based access control (Organizers, Participants, Jury, Mentors, Sponsors) and automated score aggregation engines.",
      keyFeatures: [
        "Multi-role user authentication with JWT security tokens",
        "Participant team matching & roster creation wizard",
        "Sponsor portal for submitting custom prize challenges",
        "Mentor request queue for live participant assistance",
        "Jury evaluation matrix with automated weighted score calculation",
        "Real-time leaderboard & final result publication engine",
        "Comprehensive UML activity & sequence diagram engineering"
      ],
      architecture: [
        "Frontend: React JS with Tailwind CSS & Axios",
        "Backend: Java 17 + Spring Boot 3 REST APIs",
        "Database: PostgreSQL with Hibernate ORM",
        "Authentication: JWT (JSON Web Tokens) with Spring Security",
        "Design Artifacts: Requirements Specs, User Stories, UML Diagrams"
      ],
      screenshots: [
        { title: "System Architecture & UML Diagram", src: "/assets/hackathon-arch.png", caption: "Architectural activity diagram mapping organizer, participant, and sponsor workflow states." }
      ],
      challenges: "Designing clean multi-role database schemas in PostgreSQL while supporting dynamic team joining rules.",
      learned: "Mastered collaborative Git workflows in a team of 3, formal software engineering requirements gathering, and robust Spring Boot design."
    }
  },
  {
    id: "tos-analysis",
    title: "TØS — Technical & Business Partnership Analysis",
    category: "Client Collaboration",
    badge: "Client Collaboration / Advisory",
    shortDescription: "Technical document analysis, licensing evaluation and B2B commercial strategy structuring for TØS non-statistical dynamic time-series software.",
    technologies: ["Technical Analysis", "Business Analysis", "B2B", "Licensing", "Commercial Strategy", "Data Analysis"],
    primaryImage: "/assets/csv-pipeline-completed.jpg",
    secondaryImage: null,
    github: null,
    caseStudy: {
      type: "Client Advisory & Partnership Analysis",
      overview: "Following a successful CSV data-cleaning engagement, the client invited Farouk to conduct a strategic technical and business analysis for TØS — a proprietary non-statistical dynamic time-series tool.",
      problem: "The client needed an objective technical audit of TØS software documentation alongside a structured commercial evaluation framework for B2B licensing.",
      role: "Technical & Business Analyst — Performed code/documentation review, licensing structure analysis, royalty evaluation, and B2B partnership proposal formulation.",
      solution: "Delivered a thorough technical review report and commercial advisory document mapping out licensing tiers, territorial exclusivity terms, and royalty models.",
      keyFeatures: [
        "Technical documentation audit and software capability verification",
        "Evaluation of non-statistical time-series data processing logic",
        "Commercial B2B licensing model structuring",
        "Royalty breakdown and fee schedule assessment",
        "Territorial exclusivity clause analysis for partner contracts",
        "Commercial negotiation strategy and partner alignment framework"
      ],
      clarificationNote: "Note: This contribution was an advisory, technical audit, and partnership-analysis engagement, not a claim of having developed the underlying TØS software codebase.",
      architecture: [
        "Domain: Time-Series Signal Analysis & B2B Software Strategy",
        "Deliverables: Technical Audit Report, Licensing Framework, B2B Terms Analysis"
      ],
      screenshots: [],
      challenges: "Evaluating non-conventional mathematical models used in dynamic time-series analysis and bridging technical metrics with B2B contract terms.",
      learned: "Expanded skills in B2B tech evaluation, software licensing frameworks, and strategic commercial decision-making."
    }
  }
];

export const OTHER_PROJECTS = [
  {
    title: "AI Plant Disease Diagnosis",
    category: "AI & Computer Vision",
    description: "Computer vision and deep learning project for identifying plant diseases from agricultural crop images using convolutional neural networks.",
    technologies: ["Python", "TensorFlow", "Keras", "Computer Vision"]
  },
  {
    title: "AI Model From Scratch",
    category: "Machine Learning",
    description: "Neural-network training project including custom data collection, layer architecture design, hyperparameter tuning, and metric evaluation.",
    technologies: ["Python", "TensorFlow", "Keras"]
  },
  {
    title: "Library Management System",
    category: "Desktop Java Application",
    description: "Desktop Java application built for managing book inventories, member memberships, active loans, and complete CRUD operations with OOP principles.",
    technologies: ["Java", "OOP", "CRUD", "Swing/FX"]
  },
  {
    title: "FreshCart E-commerce",
    category: "Full-Stack Web App",
    description: "E-commerce web application featuring product catalogs, user cart management, MySQL relational database schemas, and back-office management.",
    technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS"]
  }
];

export const EXPERIENCES = [
  {
    period: "Jan 2025 – Jul 2025",
    role: "Full-Stack Developer Intern",
    company: "Samobay",
    location: "France",
    type: "Professional Internship",
    description: "Developed a comprehensive web application for complaint and technical maintenance management using C#, Blazor WebAssembly, and SQL Server.",
    highlights: [
      "Designed RESTful architecture and role-based application access control (JWT)",
      "Implemented database CRUD operations and EF Core relational mapping in SQL Server",
      "Built administration interfaces for equipment tracking, complaint ticketing, and technician dispatches"
    ],
    technologies: ["C#", "Blazor", "ASP.NET Core", "SQL Server", "EF Core", "REST API", "JWT"]
  },
  {
    period: "Jun 2024 – Jul 2024",
    role: "Full-Stack Developer Intern",
    company: "Web Graphique",
    location: "France",
    type: "Professional Internship",
    description: "Developed modern React frontend components integrated with Spring Boot microservices through RESTful APIs.",
    highlights: [
      "Built responsive UI components in React with reusable component patterns",
      "Connected frontend forms and tables to backend Spring Boot REST endpoints",
      "Participated in API payload design, error handling, and JSON response optimization"
    ],
    technologies: ["React", "Spring Boot", "REST API", "Java", "JavaScript"]
  },
  {
    period: "Apr 2023 – May 2023",
    role: "UX/UI Design Intern",
    company: "Web Graphique",
    location: "France",
    type: "Professional Internship",
    description: "Designed wireframes and interactive interface prototypes for client web applications.",
    highlights: [
      "Created paper wireframes and high-fidelity Figma prototypes for web interfaces",
      "Conducted user flow mapping and improved interface usability across screen sizes",
      "Collaborated with developers to ensure faithful implementation of UI design tokens"
    ],
    technologies: ["Figma", "Wireframing", "UX/UI Design", "Prototyping"]
  }
];

export const SKILL_CATEGORIES = [
  { name: "Languages", skills: ["Java", "Python", "C#", "JavaScript", "PHP", "HTML", "CSS", "SQL", "C"] },
  { name: "Frontend", skills: ["React", "Blazor", "Responsive Design", "HTML5 / CSS3", "JavaScript (ES6+)"] },
  { name: "Backend", skills: ["Spring Boot", "ASP.NET Core", "Laravel", "REST APIs"] },
  { name: "Database", skills: ["PostgreSQL", "MySQL", "SQL Server"] },
  { name: "AI & Data Analysis", skills: ["Machine Learning", "TensorFlow", "Keras", "Pandas", "SciPy", "Data Analysis"] },
  { name: "Tools & Environment", skills: ["Git", "GitHub", "Docker", "Postman", "Visual Studio", "VS Code", "Eclipse", "Figma"] },
  { name: "Core Architecture", skills: ["JWT Authentication", "REST Architecture", "OOP", "UML", "Software Architecture", "Network Fundamentals"] }
];

export const EDUCATION = [
  {
    school: "CY Tech",
    location: "3 rue Lebon, Cergy, France",
    degree: "Engineering Degree in Computer Science",
    period: "Starting 2026 — 1st Year Engineering Cycle",
    description: "Entering CY Tech engineering cycle in 2026 with emphasis on software engineering, backend architectures, database design, and data engineering."
  },
  {
    school: "3iL",
    location: "Limoges, France",
    degree: "1st Year Engineering Cycle in Computer Science",
    period: "2024–2025",
    description: "Foundational computer science cycle covering object-oriented design, web technologies, and database engineering."
  },
  {
    school: "IIT",
    location: "Sfax, Tunisia",
    degree: "Higher Technician Degree in Computer Engineering",
    period: "2022–2025",
    description: "Practical engineering technician program focusing on software development, database administration, and networking."
  },
  {
    school: "High School Graduation",
    location: "Tunisia",
    degree: "Baccalaureate in Mathematics",
    period: "2022",
    description: "Rigorous scientific baccalaureate with emphasis on advanced mathematics, physics, and logical reasoning."
  }
];

export const LANGUAGES = [
  { name: "French", level: "Fluent (C1/C2)", percentage: 95 },
  { name: "Arabic", level: "Native", percentage: 100 },
  { name: "English", level: "Intermediate (B1)", percentage: 65 }
];
