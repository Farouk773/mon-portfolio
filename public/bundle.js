// Farouk BOURAOUI Portfolio - Complete React Application Bundle with FR / EN Translation System
const {
  useState,
  useEffect,
  createContext,
  useContext
} = React;

// -------------------------------------------------------------
// TRANSLATION DICTIONARY (FR & EN)
// -------------------------------------------------------------
const TRANSLATIONS = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      projects: "Projets",
      experience: "Expérience",
      skills: "Compétences",
      education: "Formation",
      contact: "Contact",
      workTogether: "Me contacter",
      cyTechStudent: "Élève Ingénieur CY Tech (2026)"
    },
    hero: {
      statusPill: "Élève Ingénieur CY Tech • Rentrée 2026",
      titlePrefix: "Développeur",
      titleGradient: "Full-Stack",
      headline: "Conception de produits numériques utiles, performants et modernes.",
      secondaryTitle: "Élève Ingénieur en Informatique | Développeur Full-Stack | Passionné par l'IA",
      intro: "Je suis Farouk Bouraoui, élève ingénieur intégrant CY Tech (Cergy, France) en 2026, avec une solide expérience dans le développement d'applications web full-stack, d'APIs REST, d'outils d'analyse de données et de produits numériques centrés utilisateur.",
      secondaryIntro: "J'interviens sur le frontend, le backend, les bases de données et l'architecture logicielle, avec des technologies comme React, Spring Boot, ASP.NET Core, Blazor, Python et SQL.",
      viewProjects: "Découvrir mes projets",
      downloadCv: "Télécharger mon CV (PDF)",
      coreStack: "Compétences techniques clés :"
    },
    about: {
      badge: "À propos de moi",
      title: "Allier la rigueur de l'ingénierie logicielle à l'impact concret",
      subtitle: "Étudiant ingénieur intégrant CY Tech à Cergy (2026), avec des compétences affirmées en développement web, outils de données et design UI/UX.",
      p1: "Je suis élève ingénieur en informatique et j'intègre CY Tech à Cergy (France) pour l'année académique 2026.",
      p2: "Mon parcours associe le développement logiciel, l'ingénierie web full-stack, le design UI/UX et l'analyse de données.",
      p3: "J'aime transformer des besoins réels en solutions numériques concrètes, de l'analyse du besoin et du maquettage jusqu'à la création d'APIs backend, la modélisation de bases de données et l'intégration frontend.",
      p4: "J'ai réalisé plusieurs projets académiques, des stages professionnels et un projet d'analyse de données pour un client réel à Limoges.",
      cards: [{
        title: "Développement Full-Stack",
        subtitle: "Applications de bout en bout",
        description: "Création d'applications React modernes, de composants Blazor et de services backend évolutifs.",
        icon: "code"
      }, {
        title: "APIs REST & Sécurité",
        subtitle: "Architecture & Authentification",
        description: "Conception d'APIs REST sous Spring Boot et ASP.NET Core sécurisées par tokens JWT.",
        icon: "layers"
      }, {
        title: "Données & Outils IA",
        subtitle: "Traitement de signal & ML",
        description: "Nettoyage de fichiers CSV, lissage de signaux, détection d'anomalies et pipelines Pandas.",
        icon: "terminal"
      }, {
        title: "Design UI/UX",
        subtitle: "Du croquis au produit",
        description: "Transformation de besoins bruts et de croquis papier en interfaces utilisateur élégantes et réactives.",
        icon: "sparkles"
      }]
    },
    projects: {
      badge: "Projets à la une",
      title: "Réalisations Techniques & Projets Clients",
      subtitle: "Sélection d'applications, de projets professionnels et d'ingénierie démontrant une maîtrise de bout en bout.",
      catAll: "Tous",
      catClient: "Projets Clients",
      catFullstack: "Full-Stack",
      catData: "Données & IA",
      catUi: "Design UI/UX",
      viewCaseStudy: "Voir l'étude de cas",
      github: "GitHub",
      otherTitle: "Autres projets d'ingénierie"
    },
    modal: {
      problem: "Le Problème",
      role: "Mon Rôle & Contribution",
      solution: "Solution & Fonctionnalités Clés",
      screenshots: "Captures d'écran & Galerie",
      close: "Fermer l'étude de cas",
      category: "Catégorie :"
    },
    experience: {
      badge: "Parcours Professionnel",
      title: "Expériences Professionnelles & Stages",
      subtitle: "Expérience concrète en développement logiciel, architecture d'APIs REST et design d'interfaces."
    },
    skills: {
      badge: "Compétences Techniques",
      title: "Technologies & Outils d'Ingénierie",
      subtitle: "Ensemble des compétences en langages, frameworks backend, bases de données et outils de conception."
    },
    education: {
      badge: "Parcours Académique",
      title: "Formation & Maîtrise des Langues",
      subtitle: "Cursus d'ingénieur entre CY Tech France, 3iL Limoges et l'IIT Sfax.",
      languagesTitle: "Langues pratiquées",
      fr: "Français",
      ar: "Arabe",
      en: "Anglais",
      c1: "Courant (C1/C2)",
      native: "Langue maternelle",
      b1: "Intermédiaire (B1)"
    },
    contact: {
      badge: "Me Contacter",
      title: "Un projet ou une opportunité ?",
      subtitle: "Disponible pour des opportunités de stage, des projets en freelance et des collaborations techniques.",
      sideTitle: "Discutons de votre projet",
      directEmail: "Email direct",
      linkedin: "Profil LinkedIn",
      github: "Dépôts GitHub",
      address: "Adresse & Localisation",
      nameLabel: "Votre Nom *",
      emailLabel: "Adresse Email *",
      subjectLabel: "Sujet",
      messageLabel: "Votre Message *",
      submit: "Envoyer le message",
      sending: "Envoi en cours...",
      successTitle: "Message envoyé !",
      successSub: "Merci de votre message. Farouk vous répondra rapidement.",
      anotherMessage: "Envoyer un autre message"
    },
    cvModal: {
      title: "Curriculum Vitae — Farouk BOURAOUI",
      download: "Télécharger le PDF",
      print: "Imprimer",
      summaryTitle: "Résumé du profil",
      expTitle: "Expériences professionnelles",
      eduTitle: "Formation académique"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      experience: "Experience",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
      workTogether: "Contact Me",
      cyTechStudent: "CY Tech Engineering Student (2026)"
    },
    hero: {
      statusPill: "CY Tech Engineering Student • Starting 2026",
      titlePrefix: "Full-Stack",
      titleGradient: "Developer",
      headline: "Building useful, scalable & modern digital products.",
      secondaryTitle: "Software Engineering Student | Full-Stack Developer | AI Enthusiast",
      intro: "I'm Farouk Bouraoui, a software engineering student entering CY Tech (Cergy, France) in 2026, with experience building full-stack web applications, REST APIs, data-analysis tools and user-centered digital products.",
      secondaryIntro: "I work across frontend, backend, databases and software architecture, with technologies including React, Spring Boot, ASP.NET Core, Blazor, Python and SQL.",
      viewProjects: "View My Projects",
      downloadCv: "Download CV (PDF)",
      coreStack: "Core Stack Expertise:"
    },
    about: {
      badge: "About Me",
      title: "Bridging Software Engineering Rigor with Practical Delivery",
      subtitle: "Software engineering student starting at CY Tech in Cergy, France (2026), with proven experience across web engineering, data tools, and UI/UX.",
      p1: "I'm a software engineering student entering CY Tech in Cergy, France for the 2026 academic year.",
      p2: "My background combines software development, full-stack web engineering, UI/UX design and data analysis.",
      p3: "I enjoy transforming real-world problems into practical digital solutions, from requirements analysis and wireframing to backend APIs, database design and frontend implementation.",
      p4: "I have worked on academic projects, professional internships and a real client data-analysis project.",
      cards: [{
        title: "Full-Stack Development",
        subtitle: "End-to-End Applications",
        description: "Building responsive SPAs, Blazor components, and scalable backend services.",
        icon: "code"
      }, {
        title: "REST APIs & Security",
        subtitle: "Microservices & Auth",
        description: "Designing robust API controllers in Spring Boot and ASP.NET Core with JWT authentication.",
        icon: "layers"
      }, {
        title: "Data & AI Tools",
        subtitle: "Signal Analysis & ML",
        description: "Ingesting telemetry CSV datasets, signal smoothing, anomaly detection, and Pandas pipelines.",
        icon: "terminal"
      }, {
        title: "UI/UX Design",
        subtitle: "Wireframes to Production",
        description: "Transforming raw requirements and hand-drawn paper wireframes into intuitive user interfaces.",
        icon: "sparkles"
      }]
    },
    projects: {
      badge: "Featured Projects",
      title: "Engineering Projects & Client Engagements",
      subtitle: "A selection of applications, client work and software engineering projects showcasing end-to-end delivery.",
      catAll: "All",
      catClient: "Client Work",
      catFullstack: "Full-Stack",
      catData: "Data & AI",
      catUi: "UI/UX Design",
      viewCaseStudy: "View Case Study",
      github: "GitHub",
      otherTitle: "Other Technical Projects"
    },
    modal: {
      problem: "The Problem",
      role: "My Role & Contribution",
      solution: "Solution & Key Features",
      screenshots: "Screenshots & Gallery",
      close: "Close Case Study",
      category: "Category:"
    },
    experience: {
      badge: "Career History",
      title: "Professional Experience & Internships",
      subtitle: "Demonstrated engineering experience in software development, REST architectures, and UI/UX design."
    },
    skills: {
      badge: "Technical Competencies",
      title: "Technical Stack & Engineering Tools",
      subtitle: "Comprehensive skill matrix across programming languages, backend frameworks, data libraries & software design."
    },
    education: {
      badge: "Academic Background",
      title: "Education & Language Proficiency",
      subtitle: "Academic engineering progression at CY Tech France, 3iL Limoges, and IIT Sfax.",
      languagesTitle: "Languages Spoken",
      fr: "French",
      ar: "Arabic",
      en: "English",
      c1: "Fluent (C1/C2)",
      native: "Native Language",
      b1: "Intermediate (B1)"
    },
    contact: {
      badge: "Get In Touch",
      title: "Have a project in mind?",
      subtitle: "I'm currently open to freelance projects, development opportunities and technical collaborations.",
      sideTitle: "Let's Work Together",
      directEmail: "Direct Email",
      linkedin: "LinkedIn Profile",
      github: "GitHub Repositories",
      address: "Address & Location",
      nameLabel: "Your Name *",
      emailLabel: "Email Address *",
      subjectLabel: "Subject",
      messageLabel: "Your Message *",
      submit: "Send Message",
      sending: "Sending...",
      successTitle: "Message Received!",
      successSub: "Thank you for reaching out. Farouk will reply back shortly.",
      anotherMessage: "Send Another Message"
    },
    cvModal: {
      title: "Curriculum Vitae — Farouk BOURAOUI",
      download: "Download PDF",
      print: "Print CV",
      summaryTitle: "Profile Summary",
      expTitle: "Work Experience",
      eduTitle: "Education"
    }
  }
};

// Language Context
const LanguageContext = createContext();

// -------------------------------------------------------------
// DATA STORE
// -------------------------------------------------------------
const PROFILE_DATA = {
  name: "Farouk BOURAOUI",
  shortName: "Farouk B.",
  initials: "FB",
  avatar: "/assets/farouk-profile.jpg",
  cvPdf: "/cv/ALTERNANCE_CV_FINALE (1).pdf",
  title: "Full-Stack Developer",
  secondaryTitle: "Software Engineering Student | Full-Stack Developer | AI Enthusiast",
  headline: "Building useful, scalable & modern digital products.",
  address: "3 rue Lebon, Cergy, France",
  location: "Cergy, France",
  status: "Available for Internships & Freelance Opportunities",
  email: "faroukbouraoui9@gmail.com",
  linkedin: "https://www.linkedin.com/in/farouk-bouraoui-a4a24a2b9/",
  github: "https://github.com/faroukbouraoui",
  cyTechStatus: "Starting CY Tech in 2026 (1st Year Engineering Cycle)"
};
const FEATURED_PROJECTS = [{
  id: "csv-analysis-tool",
  title: "CSV Data Analysis & Visualization Tool",
  category: "Client Project (Limoges, France) / Data Analysis",
  badge: "Client Engagement",
  shortDescription: "Desktop application developed for CSV data preparation, signal smoothing, anomaly detection and automated chart generation for a client in Limoges.",
  technologies: ["Python", "Pandas", "Matplotlib", "CSV Processing", "Data Analysis", "Time-Series Analysis"],
  primaryImage: "/assets/csv-completed.jpg",
  secondaryImage: "/assets/csv-initial.jpg",
  github: null,
  caseStudy: {
    type: "Client Project",
    client: "Client in Limoges, France",
    overview: "A specialized desktop data tool engineered for a client engagement in Limoges needing automated telemetry CSV ingestion, signal cleanup, anomaly filtering, and visual reporting.",
    problem: "The client received high-frequency raw CSV telemetry logs containing sensor noise, irregular sample intervals, and hidden signal spikes. Manual Excel analysis was time-consuming, prone to human error, and unable to calculate time-series trends efficiently.",
    role: "Lead Developer — Responsible for designing the Python processing pipeline, implementing smoothing algorithms, building the Tkinter desktop GUI, and crafting auto-refresh Matplotlib charts.",
    solution: "Engineered a desktop GUI wizard that allows non-technical users to drag-and-drop CSV files, auto-detect numeric channels, run a configurable processing pipeline, and immediately render a 3-panel comparative telemetry dashboard.",
    keyFeatures: ["CSV File Import with automatic column parsing and data validation", "Dynamic drop-down selection for target numerical signal (e.g. valeur_capteur)", "Automated data cleaning & signal noise reduction (moving average / Gaussian smoothing)", "Statistical anomaly detection for sudden spikes & signal dropouts", "Linear & polynomial trend line analysis over timestamp intervals", "Multi-chart dashboard display (Raw vs Smoothed Signal, Detected Anomalies, Trend Evolution)", "Progress tracking bar and status messaging for long processing tasks"],
    architecture: ["Language: Python 3", "Data Engine: Pandas & NumPy", "Plotting Engine: Matplotlib & SciPy", "GUI Framework: Tkinter / CustomTkinter", "Export Module: PNG chart export & cleaned CSV output"],
    screenshots: [{
      title: "Initial Ingestion Setup (Before Pipeline)",
      src: "/assets/csv-initial.jpg",
      caption: "Raw CSV log upload screen showing target column selection before running signal filtering."
    }, {
      title: "Completed Signal Pipeline (After Processing)",
      src: "/assets/csv-completed.jpg",
      caption: "3-chart output panel displaying Raw vs Smoothed telemetry, Anomaly Spikes, and Trend Evolution."
    }],
    challenges: "Handling unexpected null values, missing timestamps, and non-numeric characters inside client CSV files without crashing the GUI. Solved by implementing robust data coercion rules and defensive validation checks.",
    learned: "Learned how to design software tailored for real client business operations in Limoges, manage edge cases in unstructured user data, and package Python data tools into clean desktop executables."
  }
}, {
  id: "complaint-maintenance-system",
  title: "Complaint & Maintenance Management System",
  category: "Full-Stack Web Application",
  badge: "Professional Internship Project",
  shortDescription: "Full-stack web application developed during a professional internship for managing technical complaints, equipment and maintenance operations.",
  technologies: ["C#", "ASP.NET Core", "Blazor", "Entity Framework Core", "SQL Server", "REST API", "JWT"],
  primaryImage: "/assets/maint-screen-1.png",
  secondaryImage: "/assets/maint-screen-2.png",
  github: null,
  caseStudy: {
    type: "Professional Internship Project",
    company: "Samobay (Jan 2025 – Jul 2025)",
    overview: "An enterprise web portal engineered to streamline technical complaint reporting, technician assignment, equipment tracking, and repair operations across facility assets.",
    problem: "Facility maintenance requests were previously tracked via loose spreadsheets and phone calls, leading to misplaced tickets, slow technician dispatch, and lack of visibility into equipment failure rates.",
    role: "Full-Stack Developer Intern — Designed and built the C# Blazor WebAssembly frontend, developed REST API endpoints using ASP.NET Core, designed SQL Server database schemas, and configured JWT role-based security.",
    solution: "Created a centralized web platform where clients submit maintenance requests, admins allocate technicians based on priority, and technicians update resolution status in real time.",
    keyFeatures: ["User authentication and multi-role authorization (Admin, Technician, User)", "Interactive complaint submission form with priority tags and asset selection", "Real-time maintenance dashboard for tracking request stages (Pending, In Progress, Resolved)", "Equipment inventory catalog with maintenance history logs", "Technician task assignment & workload distribution module", "RESTful Web API back-end built with ASP.NET Core", "Entity Framework Core ORM with SQL Server database migrations"],
    architecture: ["Frontend: Blazor WebAssembly (Single-Page Application)", "Backend: ASP.NET Core Web API (.NET Core)", "Database: Microsoft SQL Server", "ORM: Entity Framework Core", "Security: JWT Bearer Tokens & Role Claims", "Testing & Tools: Visual Studio 2022, Postman, Git"],
    screenshots: [{
      title: "Main Operations & Action Portal",
      src: "/assets/maint-screen-1.png",
      caption: "Overview dashboard displaying active equipment complaint tickets and technician dispatches."
    }, {
      title: "Complaint Registration & Asset Form",
      src: "/assets/maint-screen-2.png",
      caption: "Form interface for logging new technical complaints, assigning asset IDs, and prioritizing urgency."
    }, {
      title: "Equipment Inventory & Maintenance Logs",
      src: "/assets/maint-screen-3.png",
      caption: "Catalog tracking facility equipment, inspection history, and breakdown recurrence."
    }, {
      title: "Technician Dispatch & Workload Scheduling",
      src: "/assets/maint-screen-4.png",
      caption: "Module for assigning repair tickets to technicians based on workload availability."
    }, {
      title: "System Architecture & Access Control Flow",
      src: "/assets/maint-screen-5.png",
      caption: "Data architecture diagram mapping Blazor WASM components to ASP.NET Core REST APIs."
    }],
    challenges: "Ensuring secure role-based navigation and token refresh mechanics between Blazor WASM and ASP.NET Core REST API. Solved by crafting custom AuthenticationStateProviders in Blazor and standardizing JWT token handling.",
    learned: "Deepened proficiency in .NET enterprise architecture, C# strong typing across frontend and backend, EF Core migrations, and production REST API design."
  }
}, {
  id: "online-learning-platform",
  title: "Online Learning Platform",
  category: "Full-Stack / UI Design",
  badge: "Full-Stack Academic Project",
  shortDescription: "Online education platform designed and developed for managing courses, students, registrations and academic administrative interfaces.",
  technologies: ["React", "Spring Boot", "REST API", "HTML", "CSS", "JavaScript", "UI/UX"],
  primaryImage: "/assets/olp-screen-1.jpg",
  secondaryImage: "/assets/olp-screen-2.jpg",
  github: "https://github.com/faroukbouraoui",
  caseStudy: {
    type: "Full-Stack & UI/UX Project",
    overview: "An end-to-end university management & e-learning web platform covering student registration, course catalogs, enrollment workflows, and course update modals.",
    problem: "Traditional academic management tools suffer from cluttered, unintuitive user interfaces that hinder student registration and course updating for university staff.",
    role: "Full-Stack Developer & UI Designer — Created paper wireframes, user flow sketches, React single-page frontend components, and Java Spring Boot REST APIs.",
    solution: "Delivered a clean, high-contrast web app with intuitive course grid displays, swift modal dialogs for course updates, and seamless student management routes.",
    keyFeatures: ["Interactive course catalog with category filters and details view", "Student enrollment & course registration management", "User login, registration, and password recovery workflows", "Admin control panel for adding, editing, and deleting courses/students", "Modal dialogs for inline entity updates (e.g. Add/Edit Course)", "Responsive web layouts optimized for desktop and mobile viewports"],
    wireframeStory: {
      title: "From Hand-Drawn Wireframes to Polished Web Application",
      wireframeImage: "/assets/olp-screen-7.jpg",
      finalImage: "/assets/olp-screen-1.jpg",
      secondaryFinalImage: "/assets/olp-screen-2.jpg",
      modalImage: "/assets/olp-screen-3.jpg",
      description: "The design process started with hand-drawn paper wireframes and user flow sketches for course cards, navigation tabs, and login interfaces. These blueprints were transformed into a responsive React SPA backed by Spring Boot REST services."
    },
    architecture: ["Frontend: React SPA with Modular Component Architecture", "Backend: Java Spring Boot REST API", "Database: Relational Database (SQL)", "Styling: Modern CSS3 with Flexbox & Grid System"],
    screenshots: [{
      title: "Main Portal Landing View",
      src: "/assets/olp-screen-1.jpg",
      caption: "Main academic platform header with navigation links and platform statistics."
    }, {
      title: "Course Catalog Grid",
      src: "/assets/olp-screen-2.jpg",
      caption: "Interactive grid displaying courses categorized by topic and difficulty."
    }, {
      title: "Add/Edit Course Modal",
      src: "/assets/olp-screen-3.jpg",
      caption: "Modal popup interface for creating and modifying academic course details."
    }, {
      title: "Student Management & Enrollment",
      src: "/assets/olp-screen-4.jpg",
      caption: "Table interface listing registered students and active course enrollments."
    }, {
      title: "Course Details & Syllabus View",
      src: "/assets/olp-screen-5.jpg",
      caption: "Detailed view of selected course syllabus, instructor bio, and materials."
    }, {
      title: "Authentication & Login Portal",
      src: "/assets/olp-screen-6.jpg",
      caption: "Secure student and instructor portal login interface."
    }, {
      title: "Paper Wireframe Sketch #1",
      src: "/assets/olp-screen-7.jpg",
      caption: "Hand-drawn paper wireframe mapping main navigation and course layout."
    }, {
      title: "Paper Wireframe Sketch #2",
      src: "/assets/olp-screen-8.jpg",
      caption: "Initial wireframe layout for course cards and action buttons."
    }, {
      title: "Paper Wireframe Sketch #3",
      src: "/assets/olp-screen-9.jpg",
      caption: "Wireframe concept for modal dialogs and student registration forms."
    }, {
      title: "Paper Wireframe Sketch #4",
      src: "/assets/olp-screen-10.jpg",
      caption: "Wireframe layout for student profile and enrollment tables."
    }, {
      title: "Paper Wireframe Sketch #5",
      src: "/assets/olp-screen-11.jpg",
      caption: "Final wireframe layout for mobile responsiveness."
    }],
    challenges: "Translating hand-drawn wireframe layouts into fluid, responsive CSS grids while maintaining strict visual spacing and color contrast.",
    learned: "Gained valuable experience bridging UI/UX wireframing with React state management and Spring Boot REST backend integration."
  }
}, {
  id: "hackjourney-platform",
  title: "HackJourney — Hackathon Management Platform",
  category: "Full-Stack / Architecture",
  badge: "Academic Team Project (3 Members)",
  shortDescription: "Comprehensive web platform designed to manage the complete end-to-end lifecycle of hackathons, from team creation to jury evaluation.",
  technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "JWT", "Tailwind CSS"],
  primaryImage: "/assets/hackjourney-1.png",
  secondaryImage: "/assets/hackjourney-2.png",
  github: "https://github.com/faroukbouraoui",
  caseStudy: {
    type: "Academic Team Project (3 Members)",
    overview: "A multi-role web platform built to orchestrate hackathons: participant registration, team formation, mentor advice requests, sponsor challenge creation, and jury project scoring.",
    problem: "Hackathon organizers struggle to manage multiple disconnected tools for signups, team formation, mentor scheduling, and project evaluation.",
    role: "Backend Architect & Full-Stack Developer (Team of 3) — Co-designed requirements specifications, UML diagrams, Spring Boot entity relationships, and React participant interfaces.",
    solution: "Engineered a unified platform with role-based access control (Organizers, Participants, Jury, Mentors, Sponsors) and automated score aggregation engines.",
    keyFeatures: ["Multi-role user authentication with JWT security tokens", "Participant team matching & roster creation wizard", "Sponsor portal for submitting custom prize challenges", "Mentor request queue for live participant assistance", "Jury evaluation matrix with automated weighted score calculation", "Real-time leaderboard & final result publication engine", "Comprehensive UML activity & sequence diagram engineering"],
    architecture: ["Frontend: React JS with Tailwind CSS & Axios", "Backend: Java 17 + Spring Boot 3 REST APIs", "Database: PostgreSQL with Hibernate ORM", "Authentication: JWT (JSON Web Tokens) with Spring Security", "Design Artifacts: Requirements Specs, User Stories, UML Diagrams"],
    screenshots: [{
      title: "HackJourney Home Landing Page (01_accueil)",
      src: "/assets/hackjourney-1.png",
      caption: "Main welcome portal for HackJourney hackathon discovery, active challenges, and event registration."
    }, {
      title: "Hackathon Login & Authentication (02_connexion_hackathon)",
      src: "/assets/hackjourney-2.png",
      caption: "Secure user login screen supporting Organizers, Participants, Jury, and Mentors."
    }, {
      title: "Hackathon Registration & Team Onboarding (03_inscription_hackathon)",
      src: "/assets/hackjourney-3.png",
      caption: "Participant sign-up wizard for creating profile tags, listing skills, and joining hackathon teams."
    }],
    challenges: "Designing clean multi-role database schemas in PostgreSQL while supporting dynamic team joining rules.",
    learned: "Mastered collaborative Git workflows in a team of 3, formal software engineering requirements gathering, and robust Spring Boot design."
  }
}];
const OTHER_PROJECTS = [{
  title: "AI Plant Disease Diagnosis",
  category: "AI & Computer Vision",
  description: "Computer vision and deep learning project for identifying plant diseases from agricultural crop images using convolutional neural networks.",
  technologies: ["Python", "TensorFlow", "Keras", "Computer Vision"]
}, {
  title: "AI Model From Scratch",
  category: "Machine Learning",
  description: "Neural-network training project including custom data collection, layer architecture design, hyperparameter tuning, and metric evaluation.",
  technologies: ["Python", "TensorFlow", "Keras"]
}, {
  title: "Library Management System",
  category: "Desktop Java Application",
  description: "Desktop Java application built for managing book inventories, member memberships, active loans, and complete CRUD operations with OOP principles.",
  technologies: ["Java", "OOP", "CRUD", "Swing/FX"]
}, {
  title: "FreshCart E-commerce",
  category: "Full-Stack Web App",
  description: "E-commerce web application featuring product catalogs, user cart management, MySQL relational database schemas, and back-office management.",
  technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS"]
}];
const EXPERIENCES = [{
  period: "Jan 2025 – Jul 2025",
  role: "Full-Stack Developer Intern",
  company: "Samobay",
  location: "",
  type: "Professional Internship",
  description: "Developed a comprehensive web application for complaint and technical maintenance management using C#, Blazor WebAssembly, and SQL Server.",
  highlights: ["Designed RESTful architecture and role-based application access control (JWT)", "Implemented database CRUD operations and EF Core relational mapping in SQL Server", "Built administration interfaces for equipment tracking, complaint ticketing, and technician dispatches"],
  technologies: ["C#", "Blazor", "ASP.NET Core", "SQL Server", "EF Core", "REST API", "JWT"]
}, {
  period: "Jun 2024 – Jul 2024",
  role: "Full-Stack Developer Intern",
  company: "Web Graphique",
  location: "",
  type: "Professional Internship",
  description: "Developed modern React frontend components integrated with Spring Boot microservices through RESTful APIs.",
  highlights: ["Built responsive UI components in React with reusable component patterns", "Connected frontend forms and tables to backend Spring Boot REST endpoints", "Participated in API payload design, error handling, and JSON response optimization"],
  technologies: ["React", "Spring Boot", "REST API", "Java", "JavaScript"]
}, {
  period: "Apr 2023 – May 2023",
  role: "UX/UI Design Intern",
  company: "Web Graphique",
  location: "",
  type: "Professional Internship",
  description: "Designed wireframes and interactive interface prototypes for client web applications.",
  highlights: ["Created paper wireframes and high-fidelity Figma prototypes for web interfaces", "Conducted user flow mapping and improved interface usability across screen sizes", "Collaborated with developers to ensure faithful implementation of UI design tokens"],
  technologies: ["Figma", "Wireframing", "UX/UI Design", "Prototyping"]
}];
const SKILL_CATEGORIES = [{
  name: "Languages",
  skills: ["Java", "Python", "C#", "JavaScript", "PHP", "HTML", "CSS", "SQL", "C"]
}, {
  name: "Frontend",
  skills: ["React", "Blazor", "Responsive Design", "HTML5 / CSS3", "JavaScript (ES6+)"]
}, {
  name: "Backend",
  skills: ["Spring Boot", "ASP.NET Core", "Laravel", "REST APIs"]
}, {
  name: "Database",
  skills: ["PostgreSQL", "MySQL", "SQL Server"]
}, {
  name: "AI & Data Analysis",
  skills: ["Machine Learning", "TensorFlow", "Keras", "Pandas", "SciPy", "Data Analysis"]
}, {
  name: "Tools & Environment",
  skills: ["Git", "GitHub", "Docker", "Postman", "Visual Studio", "VS Code", "Eclipse", "Figma"]
}, {
  name: "Core Architecture",
  skills: ["JWT Authentication", "REST Architecture", "OOP", "UML", "Software Architecture", "Network Fundamentals"]
}];
const EDUCATION = [{
  school: "CY Tech",
  location: "3 rue Lebon, Cergy, France",
  degree: "Engineering Degree in Computer Science",
  period: "Starting 2026 — 1st Year Engineering Cycle",
  description: "Entering CY Tech engineering cycle in 2026 with emphasis on software engineering, backend architectures, database design, and data engineering."
}, {
  school: "3iL",
  location: "Limoges, France",
  degree: "1st Year Engineering Cycle in Computer Science",
  period: "2024–2025",
  description: "Foundational CS cycle covering object-oriented design, web engineering, and databases."
}, {
  school: "IIT",
  location: "Sfax, Tunisia",
  degree: "Higher Technician Degree in Computer Engineering",
  period: "2022–2025",
  description: "Engineering technician program focusing on software development, network & DB administration."
}, {
  school: "Baccalaureate",
  location: "Tunisia",
  degree: "Baccalaureate in Mathematics",
  period: "2022",
  description: "Rigorous scientific baccalaureate with emphasis on advanced mathematics and physics."
}];

// -------------------------------------------------------------
// SVG ICON UTILITIES
// -------------------------------------------------------------
const Icon = ({
  name,
  className = "w-4 h-4"
}) => {
  const icons = {
    github: /*#__PURE__*/React.createElement("path", {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2"
    }),
    linkedin: /*#__PURE__*/React.createElement("path", {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"
    }),
    arrowRight: /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14M12 5l7 7-7 7"
    }),
    fileText: /*#__PURE__*/React.createElement("path", {
      d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2zM14 2v6h6"
    }),
    send: /*#__PURE__*/React.createElement("path", {
      d: "m22 2-7 20-4-9-9-4Zm0 0L11 13"
    }),
    menu: /*#__PURE__*/React.createElement("path", {
      d: "M4 12h16M4 6h16M4 18h16"
    }),
    x: /*#__PURE__*/React.createElement("path", {
      d: "M18 6 6 18M6 6l12 12"
    }),
    code: /*#__PURE__*/React.createElement("path", {
      d: "m18 16 4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16"
    }),
    sparkles: /*#__PURE__*/React.createElement("path", {
      d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"
    }),
    check: /*#__PURE__*/React.createElement("path", {
      d: "M20 6 9 17l-5-5"
    }),
    download: /*#__PURE__*/React.createElement("path", {
      d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"
    }),
    calendar: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
      width: "18",
      height: "18",
      x: "3",
      y: "4",
      rx: "2",
      ry: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16",
      x2: "16",
      y1: "2",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "8",
      x2: "8",
      y1: "2",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      x2: "21",
      y1: "10",
      y2: "10"
    })),
    mapPin: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "10",
      r: "3"
    })),
    mail: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
      width: "20",
      height: "16",
      x: "2",
      y: "4",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
    })),
    arrowUp: /*#__PURE__*/React.createElement("path", {
      d: "m18 15-6-6-6 6"
    }),
    layers: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m22 12.5-8.58 3.91a2 2 0 0 1-1.66 0L3 12.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m22 17.5-8.58 3.91a2 2 0 0 1-1.66 0L3 17.5"
    })),
    terminal: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polyline", {
      points: "4 17 10 11 4 5"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      x2: "20",
      y1: "19",
      y2: "19"
    })),
    globe: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "2",
      x2: "22",
      y1: "12",
      y2: "12"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
    }))
  };
  return /*#__PURE__*/React.createElement("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, icons[name] || /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }));
};

// -------------------------------------------------------------
// NAVBAR COMPONENT (SPACIOUS & ELEGANT DESKTOP & MOBILE LAYOUT)
// -------------------------------------------------------------
function Navbar({
  activeSection,
  onOpenContact,
  onOpenCV
}) {
  const {
    lang,
    toggleLang,
    t
  } = useContext(LanguageContext);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    id: 'home',
    label: t.nav.home
  }, {
    id: 'about',
    label: t.nav.about
  }, {
    id: 'projects',
    label: t.nav.projects
  }, {
    id: 'experience',
    label: t.nav.experience
  }, {
    id: 'skills',
    label: t.nav.skills
  }, {
    id: 'education',
    label: t.nav.education
  }, {
    id: 'contact',
    label: t.nav.contact
  }];
  return /*#__PURE__*/React.createElement("header", {
    className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0b0f19]/90 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-2xl' : 'bg-transparent py-5 sm:py-6'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between gap-4"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    className: "flex items-center gap-3 group flex-shrink-0"
  }, /*#__PURE__*/React.createElement("img", {
    src: PROFILE_DATA.avatar,
    alt: "Farouk BOURAOUI",
    className: "w-10 h-10 sm:w-11 sm:h-11 rounded-xl object-cover border border-cyan-400/50 shadow-md group-hover:scale-105 transition-transform"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-extrabold text-white text-base sm:text-lg tracking-tight group-hover:text-cyan-400 transition-colors"
  }, PROFILE_DATA.name), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] sm:text-xs font-medium text-slate-400"
  }, t.nav.cyTechStudent)))), /*#__PURE__*/React.createElement("nav", {
    className: "hidden xl:flex items-center gap-1 bg-slate-900/80 p-1.5 rounded-full border border-slate-800/90 backdrop-blur-md shadow-lg"
  }, navLinks.map(link => {
    const isActive = activeSection === link.id;
    return /*#__PURE__*/React.createElement("a", {
      key: link.id,
      href: `#${link.id}`,
      className: `px-4 py-1.5 rounded-full text-xs font-bold transition-all ${isActive ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md' : 'text-slate-300 hover:text-white hover:bg-slate-800/60'}`
    }, link.label);
  })), /*#__PURE__*/React.createElement("div", {
    className: "hidden lg:flex items-center gap-3.5 flex-shrink-0"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: toggleLang,
    className: "flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-cyan-500/40 text-xs font-extrabold hover:border-cyan-400 transition-all shadow-md group cursor-pointer",
    title: lang === 'fr' ? "Switch interface to English" : "Passer l'interface en Français"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "globe",
    className: "w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1 text-[11px]"
  }, /*#__PURE__*/React.createElement("span", {
    className: lang === 'fr' ? 'text-cyan-300 font-black' : 'text-slate-500 font-semibold'
  }, "FR"), /*#__PURE__*/React.createElement("span", {
    className: "text-slate-600 text-[10px]"
  }, "/"), /*#__PURE__*/React.createElement("span", {
    className: lang === 'en' ? 'text-cyan-300 font-black' : 'text-slate-500 font-semibold'
  }, "EN"))), /*#__PURE__*/React.createElement("a", {
    href: PROFILE_DATA.github,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "github"
  })), /*#__PURE__*/React.createElement("a", {
    href: PROFILE_DATA.linkedin,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "linkedin"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onOpenContact,
    className: "btn-primary px-4 py-2.5 rounded-xl text-xs font-extrabold flex items-center gap-2 shadow-lg shadow-cyan-500/20"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "send",
    className: "w-3.5 h-3.5"
  }), /*#__PURE__*/React.createElement("span", null, t.nav.workTogether))), /*#__PURE__*/React.createElement("div", {
    className: "flex xl:hidden items-center gap-2.5"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: toggleLang,
    className: "px-3 py-1.5 rounded-xl bg-slate-900 border border-cyan-500/40 text-xs font-extrabold text-cyan-400 flex items-center gap-1.5 shadow-md"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "globe",
    className: "w-3.5 h-3.5 text-cyan-400"
  }), /*#__PURE__*/React.createElement("span", null, lang.toUpperCase())), /*#__PURE__*/React.createElement("button", {
    onClick: () => setMobileMenuOpen(!mobileMenuOpen),
    className: "p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: mobileMenuOpen ? "x" : "menu",
    className: "w-5 h-5"
  }))))), mobileMenuOpen && /*#__PURE__*/React.createElement("div", {
    className: "xl:hidden bg-[#0b0f19]/95 backdrop-blur-2xl border-b border-slate-800 px-6 py-6 space-y-4 shadow-2xl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-1.5"
  }, navLinks.map(link => /*#__PURE__*/React.createElement("a", {
    key: link.id,
    href: `#${link.id}`,
    onClick: () => setMobileMenuOpen(false),
    className: "px-4 py-3 rounded-xl text-sm font-semibold text-slate-200 hover:bg-slate-800/80 hover:text-cyan-400 transition-colors"
  }, link.label))), /*#__PURE__*/React.createElement("div", {
    className: "pt-4 border-t border-slate-800 flex flex-col gap-3"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setMobileMenuOpen(false);
      onOpenContact();
    },
    className: "w-full btn-primary py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "send",
    className: "w-4 h-4"
  }), /*#__PURE__*/React.createElement("span", null, t.nav.workTogether)))));
}

// -------------------------------------------------------------
// HERO COMPONENT WITH PROFILE PHOTO
// -------------------------------------------------------------
function Hero({
  onOpenCV
}) {
  const {
    t
  } = useContext(LanguageContext);
  const [activeTab, setActiveTab] = useState('code');
  const heroTechs = [{
    name: 'React',
    color: 'from-cyan-500/20 to-cyan-500/10 text-cyan-400 border-cyan-500/30'
  }, {
    name: 'Spring Boot',
    color: 'from-emerald-500/20 to-emerald-500/10 text-emerald-400 border-emerald-500/30'
  }, {
    name: 'C# / .NET',
    color: 'from-indigo-500/20 to-indigo-500/10 text-indigo-400 border-indigo-500/30'
  }, {
    name: 'Python',
    color: 'from-amber-500/20 to-amber-500/10 text-amber-400 border-amber-500/30'
  }, {
    name: 'SQL',
    color: 'from-blue-500/20 to-blue-500/10 text-blue-400 border-blue-500/30'
  }, {
    name: 'REST API',
    color: 'from-sky-500/20 to-sky-500/10 text-sky-400 border-sky-500/30'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "home",
    className: "relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7 space-y-6 text-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 shadow-lg"
  }, /*#__PURE__*/React.createElement("span", {
    className: "relative flex h-2.5 w-2.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"
  }), /*#__PURE__*/React.createElement("span", {
    className: "relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"
  })), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-semibold text-cyan-300 tracking-wide uppercase"
  }, t.hero.statusPill)), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row items-start sm:items-center gap-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative group flex-shrink-0"
  }, /*#__PURE__*/React.createElement("img", {
    src: PROFILE_DATA.avatar,
    alt: "Farouk BOURAOUI",
    className: "w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-cyan-400/60 shadow-xl shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute -bottom-2 -right-2 px-2 py-0.5 bg-cyan-500 text-slate-950 font-bold text-[10px] rounded-md shadow-md"
  }, "CY Tech '26")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1]"
  }, t.hero.titlePrefix, " ", /*#__PURE__*/React.createElement("span", {
    className: "text-gradient-cyan"
  }, t.hero.titleGradient)), /*#__PURE__*/React.createElement("p", {
    className: "text-lg sm:text-xl font-bold text-slate-200"
  }, t.hero.headline))), /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold text-cyan-400/90"
  }, t.hero.secondaryTitle), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal"
  }, /*#__PURE__*/React.createElement("p", null, t.hero.intro), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-400"
  }, t.hero.secondaryIntro)), /*#__PURE__*/React.createElement("div", {
    className: "pt-2 flex flex-wrap items-center gap-4"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#projects",
    className: "btn-primary px-6 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/25"
  }, /*#__PURE__*/React.createElement("span", null, t.hero.viewProjects), /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    className: "w-4 h-4"
  })), /*#__PURE__*/React.createElement("a", {
    href: PROFILE_DATA.cvPdf,
    download: "Farouk_Bouraoui_CV.pdf",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "btn-secondary px-6 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2 border border-slate-700"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "download",
    className: "w-4 h-4 text-cyan-400"
  }), /*#__PURE__*/React.createElement("span", null, t.hero.downloadCv))), /*#__PURE__*/React.createElement("div", {
    className: "pt-4 border-t border-slate-800/80"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3"
  }, t.hero.coreStack), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, heroTechs.map(tech => /*#__PURE__*/React.createElement("span", {
    key: tech.name,
    className: `px-3 py-1.5 rounded-lg text-xs font-semibold border bg-gradient-to-r ${tech.color}`
  }, tech.name))))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mockup-window glass-panel border border-slate-800 shadow-2xl relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mockup-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mockup-dots"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mockup-dot mockup-dot-red"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mockup-dot mockup-dot-yellow"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mockup-dot mockup-dot-green"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1 bg-slate-900/80 p-1 rounded-lg border border-slate-800 text-[11px] font-mono"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setActiveTab('code'),
    className: `px-2.5 py-1 rounded ${activeTab === 'code' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400'}`
  }, "farouk.ts"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setActiveTab('arch'),
    className: `px-2.5 py-1 rounded ${activeTab === 'arch' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400'}`
  }, "arch.puml"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setActiveTab('terminal'),
    className: `px-2.5 py-1 rounded ${activeTab === 'terminal' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400'}`
  }, "terminal"))), /*#__PURE__*/React.createElement("div", {
    className: "p-5 font-mono text-xs leading-relaxed overflow-x-auto min-h-[340px] bg-[#0c1220]/90"
  }, activeTab === 'code' && /*#__PURE__*/React.createElement("div", {
    className: "space-y-1 text-slate-300"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", {
    className: "text-purple-400"
  }, "interface"), " ", /*#__PURE__*/React.createElement("span", {
    className: "text-yellow-300"
  }, "SoftwareEngineer"), " {"), /*#__PURE__*/React.createElement("p", {
    className: "pl-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-cyan-400"
  }, "name"), ": ", /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-300"
  }, "'Farouk BOURAOUI'"), ";"), /*#__PURE__*/React.createElement("p", {
    className: "pl-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-cyan-400"
  }, "university"), ": ", /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-300"
  }, "'CY Tech (Cergy, France)'"), ";"), /*#__PURE__*/React.createElement("p", {
    className: "pl-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-cyan-400"
  }, "academicStart"), ": ", /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-300"
  }, "'2026 (1st Year Eng. Cycle)'"), ";"), /*#__PURE__*/React.createElement("p", {
    className: "pl-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-cyan-400"
  }, "email"), ": ", /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-300"
  }, "'faroukbouraoui9@gmail.com'"), ";"), /*#__PURE__*/React.createElement("p", {
    className: "pl-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-cyan-400"
  }, "location"), ": ", /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-300"
  }, "'3 rue Lebon, Cergy, France'"), ";"), /*#__PURE__*/React.createElement("p", {
    className: "pl-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-cyan-400"
  }, "roles"), ": [", /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-300"
  }, "'Full-Stack Developer'"), ", ", /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-300"
  }, "'Freelance'"), "];"), /*#__PURE__*/React.createElement("p", {
    className: "pl-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-cyan-400"
  }, "stack"), ": {"), /*#__PURE__*/React.createElement("p", {
    className: "pl-8"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-cyan-300"
  }, "frontend"), ": [", /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-300"
  }, "'React'"), ", ", /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-300"
  }, "'Blazor'"), "],"), /*#__PURE__*/React.createElement("p", {
    className: "pl-8"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-cyan-300"
  }, "backend"), ": [", /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-300"
  }, "'Spring Boot'"), ", ", /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-300"
  }, "'ASP.NET Core'"), ", ", /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-300"
  }, "'Python'"), "],"), /*#__PURE__*/React.createElement("p", {
    className: "pl-8"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-cyan-300"
  }, "databases"), ": [", /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-300"
  }, "'PostgreSQL'"), ", ", /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-300"
  }, "'SQL Server'"), ", ", /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-300"
  }, "'MySQL'"), "]"), /*#__PURE__*/React.createElement("p", {
    className: "pl-4"
  }, "};"), /*#__PURE__*/React.createElement("p", {
    className: "pl-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-cyan-400"
  }, "status"), ": ", /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-300"
  }, "'Open to Internships & Freelance'"), ";"), /*#__PURE__*/React.createElement("p", null, "}")), activeTab === 'arch' && /*#__PURE__*/React.createElement("div", {
    className: "space-y-3 text-slate-300"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between text-cyan-400 font-bold border-b border-slate-800 pb-1.5"
  }, /*#__PURE__*/React.createElement("span", null, "Architecture Blueprint"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-300"
  }, "REST / Microservices")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-2 text-center text-[10px] pt-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-2 rounded bg-cyan-950/60 border border-cyan-800/50 text-cyan-300"
  }, "Client Apps", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "text-slate-400"
  }, "React / Blazor")), /*#__PURE__*/React.createElement("div", {
    className: "p-2 rounded bg-indigo-950/60 border border-indigo-800/50 text-indigo-300"
  }, "REST Gateway", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "text-slate-400"
  }, "JWT Auth")), /*#__PURE__*/React.createElement("div", {
    className: "p-2 rounded bg-emerald-950/60 border border-emerald-800/50 text-emerald-300"
  }, "Backend Core", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "text-slate-400"
  }, "Spring / .NET"))))), activeTab === 'terminal' && /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5 text-slate-300"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-400"
  }, "$"), " farouk-cli --status"), /*#__PURE__*/React.createElement("p", {
    className: "text-cyan-300"
  }, "[INFO] Querying developer profile metrics..."), /*#__PURE__*/React.createElement("p", {
    className: "text-yellow-400"
  }, "Address: 3 rue Lebon, Cergy, France"), /*#__PURE__*/React.createElement("p", {
    className: "text-yellow-400"
  }, "Email: faroukbouraoui9@gmail.com"), /*#__PURE__*/React.createElement("p", {
    className: "text-yellow-400"
  }, "Academic Start: CY Tech (2026)"), /*#__PURE__*/React.createElement("p", {
    className: "text-emerald-400"
  }, "$ farouk-cli --run-tests"), /*#__PURE__*/React.createElement("p", {
    className: "text-emerald-300"
  }, "\u2713 100% tests passed (REST APIs, Security, Data Pipeline)"))))))));
}

// -------------------------------------------------------------
// ABOUT COMPONENT
// -------------------------------------------------------------
function About() {
  const {
    t
  } = useContext(LanguageContext);
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    className: "py-20 relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-3xl mx-auto mb-16"
  }, /*#__PURE__*/React.createElement("span", {
    className: "section-badge"
  }, t.about.badge), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4"
  }, t.about.title), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-400 text-base"
  }, t.about.subtitle)), /*#__PURE__*/React.createElement("div", {
    className: "glass-panel glass-panel-hover p-8 rounded-2xl border border-slate-800 space-y-4 text-slate-300 leading-relaxed mb-16"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-semibold text-white text-lg"
  }, t.about.p1), /*#__PURE__*/React.createElement("p", null, t.about.p2), /*#__PURE__*/React.createElement("p", null, t.about.p3), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-400"
  }, t.about.p4)), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
  }, t.about.cards.map((card, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800 space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: card.icon,
    className: "w-5 h-5"
  })), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-semibold text-cyan-400 uppercase tracking-wider block"
  }, card.subtitle), /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-bold text-white"
  }, card.title), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-400 text-xs"
  }, card.description))))));
}

// -------------------------------------------------------------
// CASE STUDY MODAL
// -------------------------------------------------------------
function CaseStudyModal({
  project,
  onClose
}) {
  const {
    t
  } = useContext(LanguageContext);
  if (!project) return null;
  const cs = project.caseStudy || {};
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 modal-backdrop overflow-y-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative w-full max-w-4xl bg-[#0d1322] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col my-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between px-6 py-4 bg-[#141c2e] border-b border-slate-800"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold"
  }, cs.type || project.category), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    className: "w-5 h-5"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-300 text-sm leading-relaxed"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl sm:text-3xl font-extrabold text-white"
  }, project.title), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-300 text-base"
  }, cs.overview || project.shortDescription), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2 pt-2"
  }, project.technologies.map(tech => /*#__PURE__*/React.createElement("span", {
    key: tech,
    className: "badge-tech"
  }, tech)))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "glass-panel p-5 rounded-xl border-l-4 border-l-amber-500 space-y-2"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-sm font-bold text-white"
  }, t.modal.problem), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-300"
  }, cs.problem)), /*#__PURE__*/React.createElement("div", {
    className: "glass-panel p-5 rounded-xl border-l-4 border-l-cyan-500 space-y-2"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-sm font-bold text-white"
  }, t.modal.role), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-300"
  }, cs.role))), cs.wireframeStory && /*#__PURE__*/React.createElement("div", {
    className: "glass-panel p-6 rounded-2xl space-y-4 border border-cyan-500/30"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-bold text-white"
  }, cs.wireframeStory.title), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-300"
  }, cs.wireframeStory.description), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-amber-400 block mb-1"
  }, "Hand-Drawn Wireframe"), /*#__PURE__*/React.createElement("img", {
    src: cs.wireframeStory.wireframeImage,
    alt: "Wireframe",
    className: "rounded-lg w-full h-40 object-cover border border-slate-800"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-emerald-400 block mb-1"
  }, "Final Web Interface"), /*#__PURE__*/React.createElement("img", {
    src: cs.wireframeStory.finalImage,
    alt: "Final UI",
    className: "rounded-lg w-full h-40 object-cover border border-slate-800"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-base font-bold text-white"
  }, t.modal.solution), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-300"
  }, cs.solution), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-2"
  }, cs.keyFeatures && cs.keyFeatures.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-1.5 h-1.5 rounded-full bg-cyan-400"
  }), /*#__PURE__*/React.createElement("span", null, f))))), cs.screenshots && cs.screenshots.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-base font-bold text-white"
  }, t.modal.screenshots), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-4"
  }, cs.screenshots.map((s, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "mockup-window glass-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mockup-header"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-slate-400"
  }, s.title)), /*#__PURE__*/React.createElement("img", {
    src: s.src,
    alt: s.title,
    className: "w-full h-48 object-cover"
  }), /*#__PURE__*/React.createElement("div", {
    className: "p-2 text-[10px] text-slate-400 bg-slate-900 border-t border-slate-800"
  }, s.caption)))))), /*#__PURE__*/React.createElement("div", {
    className: "px-6 py-4 bg-[#141c2e] border-t border-slate-800 flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-slate-400"
  }, t.modal.category, " ", project.category), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "btn-primary px-4 py-2 rounded-xl text-xs font-bold"
  }, t.modal.close))));
}

// -------------------------------------------------------------
// PROJECTS COMPONENT
// -------------------------------------------------------------
function Projects() {
  const {
    t
  } = useContext(LanguageContext);
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);
  const categories = [{
    id: 'All',
    label: t.projects.catAll
  }, {
    id: 'Client Work',
    label: t.projects.catClient
  }, {
    id: 'Full-Stack',
    label: t.projects.catFullstack
  }, {
    id: 'Data & AI',
    label: t.projects.catData
  }, {
    id: 'UI/UX Design',
    label: t.projects.catUi
  }];
  const filteredProjects = FEATURED_PROJECTS.filter(proj => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Client Work') return proj.category.includes('Client');
    if (activeCategory === 'Full-Stack') return proj.category.includes('Full-Stack');
    if (activeCategory === 'Data & AI') return proj.category.includes('Data') || proj.category.includes('AI');
    if (activeCategory === 'UI/UX Design') return proj.category.includes('UI') || proj.category.includes('Front-End');
    return true;
  });
  return /*#__PURE__*/React.createElement("section", {
    id: "projects",
    className: "py-20 relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-3xl mx-auto mb-12"
  }, /*#__PURE__*/React.createElement("span", {
    className: "section-badge"
  }, t.projects.badge), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4"
  }, t.projects.title), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-400 text-base"
  }, t.projects.subtitle)), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap justify-center gap-2 mb-12"
  }, categories.map(cat => /*#__PURE__*/React.createElement("button", {
    key: cat.id,
    onClick: () => setActiveCategory(cat.id),
    className: `px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeCategory === cat.id ? 'bg-cyan-500 text-white shadow-lg' : 'bg-slate-900 text-slate-300 border border-slate-800'}`
  }, cat.label))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-12 mb-20"
  }, filteredProjects.map(project => /*#__PURE__*/React.createElement("div", {
    key: project.id,
    className: "glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 border border-slate-800 group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-6 space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "badge-category"
  }, project.category), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-semibold text-slate-400 bg-slate-800 px-2.5 py-0.5 rounded-full"
  }, project.badge)), /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors"
  }, project.title), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-300 text-sm"
  }, project.shortDescription), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, project.technologies.map(tech => /*#__PURE__*/React.createElement("span", {
    key: tech,
    className: "badge-tech"
  }, tech))), /*#__PURE__*/React.createElement("div", {
    className: "pt-2 flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setActiveCaseStudy(project),
    className: "btn-primary px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", null, t.projects.viewCaseStudy), /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    className: "w-3.5 h-3.5"
  })), project.github && /*#__PURE__*/React.createElement("a", {
    href: project.github,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "btn-secondary px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "github",
    className: "w-4 h-4"
  }), /*#__PURE__*/React.createElement("span", null, t.projects.github)))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mockup-window glass-panel overflow-hidden border border-slate-700 shadow-2xl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mockup-header"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-mono text-slate-400"
  }, project.title.toLowerCase().replace(/\s+/g, '-'), ".app")), /*#__PURE__*/React.createElement("img", {
    src: project.primaryImage,
    alt: project.title,
    className: "w-full h-64 object-cover cursor-pointer",
    onClick: () => setActiveCaseStudy(project)
  }))))))), /*#__PURE__*/React.createElement("div", {
    className: "pt-8 border-t border-slate-800"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-white mb-6"
  }, t.projects.otherTitle), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
  }, OTHER_PROJECTS.map((proj, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800 space-y-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-semibold text-cyan-400 uppercase tracking-wider block"
  }, proj.category), /*#__PURE__*/React.createElement("h4", {
    className: "text-base font-bold text-white"
  }, proj.title), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-400 text-xs"
  }, proj.description), /*#__PURE__*/React.createElement("div", {
    className: "pt-2 flex flex-wrap gap-1"
  }, proj.technologies.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    className: "text-[10px] px-2 py-0.5 bg-slate-900 text-slate-300 rounded border border-slate-800"
  }, t)))))))), activeCaseStudy && /*#__PURE__*/React.createElement(CaseStudyModal, {
    project: activeCaseStudy,
    onClose: () => setActiveCaseStudy(null)
  }));
}

// -------------------------------------------------------------
// EXPERIENCE COMPONENT
// -------------------------------------------------------------
function Experience() {
  const {
    t
  } = useContext(LanguageContext);
  return /*#__PURE__*/React.createElement("section", {
    id: "experience",
    className: "py-20 relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-3xl mx-auto mb-16"
  }, /*#__PURE__*/React.createElement("span", {
    className: "section-badge"
  }, t.experience.badge), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4"
  }, t.experience.title), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-400 text-base"
  }, t.experience.subtitle)), /*#__PURE__*/React.createElement("div", {
    className: "space-y-8 max-w-4xl mx-auto"
  }, EXPERIENCES.map((exp, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "glass-panel glass-panel-hover p-7 rounded-2xl border border-slate-800 space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold"
  }, exp.period), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-medium text-slate-400 bg-slate-900 px-2.5 py-1 rounded border border-slate-800"
  }, exp.type)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-white"
  }, exp.role), /*#__PURE__*/React.createElement("span", {
    className: "text-cyan-400 font-semibold text-sm"
  }, "@ ", exp.company, exp.location ? ` — ${exp.location}` : '')), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-300 text-xs sm:text-sm"
  }, exp.description), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5 pt-1"
  }, exp.highlights.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "flex items-center gap-2 text-xs text-slate-300"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-3.5 h-3.5 text-cyan-400 flex-shrink-0"
  }), /*#__PURE__*/React.createElement("span", null, item)))), /*#__PURE__*/React.createElement("div", {
    className: "pt-3 border-t border-slate-800 flex flex-wrap gap-1.5"
  }, exp.technologies.map(tech => /*#__PURE__*/React.createElement("span", {
    key: tech,
    className: "badge-tech"
  }, tech))))))));
}

// -------------------------------------------------------------
// SKILLS COMPONENT
// -------------------------------------------------------------
function Skills() {
  const {
    t
  } = useContext(LanguageContext);
  return /*#__PURE__*/React.createElement("section", {
    id: "skills",
    className: "py-20 relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-3xl mx-auto mb-16"
  }, /*#__PURE__*/React.createElement("span", {
    className: "section-badge"
  }, t.skills.badge), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4"
  }, t.skills.title), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-400 text-base"
  }, t.skills.subtitle)), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
  }, SKILL_CATEGORIES.map((cat, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800 space-y-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-bold text-white border-b border-slate-800 pb-2"
  }, cat.name), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, cat.skills.map(skill => /*#__PURE__*/React.createElement("span", {
    key: skill,
    className: "px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 text-slate-200 border border-slate-800"
  }, skill))))))));
}

// -------------------------------------------------------------
// EDUCATION COMPONENT
// -------------------------------------------------------------
function Education() {
  const {
    t
  } = useContext(LanguageContext);
  const LANGUAGES = [{
    name: t.education.fr,
    level: t.education.c1,
    percentage: 95
  }, {
    name: t.education.ar,
    level: t.education.native,
    percentage: 100
  }, {
    name: t.education.en,
    level: t.education.b1,
    percentage: 65
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "education",
    className: "py-20 relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-3xl mx-auto mb-16"
  }, /*#__PURE__*/React.createElement("span", {
    className: "section-badge"
  }, t.education.badge), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4"
  }, t.education.title), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-400 text-base"
  }, t.education.subtitle)), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-8 space-y-4"
  }, EDUCATION.map((edu, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800 space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-lg font-bold text-white"
  }, edu.school, " \u2014 ", edu.location), /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold"
  }, edu.period)), /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-bold text-slate-200"
  }, edu.degree), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-400 text-xs"
  }, edu.description)))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-4 glass-panel p-6 rounded-2xl border border-slate-800 space-y-6"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-white"
  }, t.education.languagesTitle), LANGUAGES.map((lang, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "space-y-1.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-sm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-white"
  }, lang.name), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-semibold text-cyan-400"
  }, lang.level)), /*#__PURE__*/React.createElement("div", {
    className: "w-full h-2 rounded-full bg-slate-900 overflow-hidden border border-slate-800"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500",
    style: {
      width: `${lang.percentage}%`
    }
  }))))))));
}

// -------------------------------------------------------------
// CONTACT COMPONENT
// -------------------------------------------------------------
function Contact() {
  const {
    t
  } = useContext(LanguageContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 600);
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    className: "py-20 relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-3xl mx-auto mb-16 space-y-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "section-badge"
  }, t.contact.badge), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
  }, t.contact.title), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-300 text-base max-w-xl mx-auto"
  }, t.contact.subtitle)), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5 glass-panel p-6 rounded-2xl border border-slate-800 space-y-6"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-white"
  }, t.contact.sideTitle), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("a", {
    href: `mailto:${PROFILE_DATA.email}`,
    className: "p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-4 hover:border-cyan-500/50"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    className: "w-5 h-5 text-cyan-400"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-slate-400 block"
  }, t.contact.directEmail), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-bold text-white"
  }, PROFILE_DATA.email))), /*#__PURE__*/React.createElement("a", {
    href: PROFILE_DATA.linkedin,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-4 hover:border-cyan-500/50"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "linkedin",
    className: "w-5 h-5 text-cyan-400"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-slate-400 block"
  }, t.contact.linkedin), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-bold text-white"
  }, "linkedin.com/in/farouk-bouraoui-a4a24a2b9"))), /*#__PURE__*/React.createElement("a", {
    href: PROFILE_DATA.github,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-4 hover:border-cyan-500/50"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "github",
    className: "w-5 h-5 text-cyan-400"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-slate-400 block"
  }, t.contact.github), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-bold text-white"
  }, "github.com/faroukbouraoui"))), /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-4"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mapPin",
    className: "w-5 h-5 text-cyan-400"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-slate-400 block"
  }, t.contact.address), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-bold text-white"
  }, PROFILE_DATA.address))))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800"
  }, submitted ? /*#__PURE__*/React.createElement("div", {
    className: "py-12 text-center space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-6 h-6"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-white"
  }, t.contact.successTitle), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-300 text-xs"
  }, t.contact.successSub), /*#__PURE__*/React.createElement("button", {
    onClick: () => setSubmitted(false),
    className: "btn-secondary px-4 py-2 rounded-xl text-xs"
  }, t.contact.anotherMessage)) : /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-semibold text-slate-300 block mb-1"
  }, t.contact.nameLabel), /*#__PURE__*/React.createElement("input", {
    type: "text",
    required: true,
    placeholder: "John Doe",
    value: formData.name,
    onChange: e => setFormData({
      ...formData,
      name: e.target.value
    }),
    className: "w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-semibold text-slate-300 block mb-1"
  }, t.contact.emailLabel), /*#__PURE__*/React.createElement("input", {
    type: "email",
    required: true,
    placeholder: "john@example.com",
    value: formData.email,
    onChange: e => setFormData({
      ...formData,
      email: e.target.value
    }),
    className: "w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-semibold text-slate-300 block mb-1"
  }, t.contact.subjectLabel), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Freelance / Opportunity",
    value: formData.subject,
    onChange: e => setFormData({
      ...formData,
      subject: e.target.value
    }),
    className: "w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-semibold text-slate-300 block mb-1"
  }, t.contact.messageLabel), /*#__PURE__*/React.createElement("textarea", {
    required: true,
    rows: "4",
    placeholder: "Hi Farouk...",
    value: formData.message,
    onChange: e => setFormData({
      ...formData,
      message: e.target.value
    }),
    className: "w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500 resize-none"
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    disabled: loading,
    className: "w-full btn-primary py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "send",
    className: "w-4 h-4"
  }), /*#__PURE__*/React.createElement("span", null, loading ? t.contact.sending : t.contact.submit)))))));
}

// -------------------------------------------------------------
// CV MODAL COMPONENT
// -------------------------------------------------------------
function CVModal({
  onClose
}) {
  const {
    t
  } = useContext(LanguageContext);
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop overflow-y-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative w-full max-w-3xl bg-[#0d1322] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col my-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between px-6 py-4 bg-[#141c2e] border-b border-slate-800"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-white font-bold text-sm"
  }, t.cvModal.title), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("a", {
    href: PROFILE_DATA.cvPdf,
    download: "Farouk_Bouraoui_CV.pdf",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "btn-primary px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "download",
    className: "w-3.5 h-3.5"
  }), /*#__PURE__*/React.createElement("span", null, t.cvModal.download)), /*#__PURE__*/React.createElement("button", {
    onClick: () => window.print(),
    className: "btn-secondary px-3 py-1.5 rounded-lg text-xs font-bold"
  }, t.cvModal.print), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "p-1 text-slate-400 hover:text-white"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    className: "w-5 h-5"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "p-6 overflow-y-auto space-y-6 text-slate-300 text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "border-b border-slate-800 pb-4 flex items-center gap-4"
  }, /*#__PURE__*/React.createElement("img", {
    src: PROFILE_DATA.avatar,
    alt: "Farouk BOURAOUI",
    className: "w-16 h-16 rounded-xl object-cover border border-cyan-400/50"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "text-xl font-extrabold text-white"
  }, "Farouk BOURAOUI"), /*#__PURE__*/React.createElement("p", {
    className: "text-cyan-400 font-bold"
  }, "Full-Stack Developer | Software Engineering Student"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-400 mt-1"
  }, PROFILE_DATA.address, " \u2022 ", PROFILE_DATA.email))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "font-bold text-cyan-400 uppercase"
  }, t.cvModal.summaryTitle), /*#__PURE__*/React.createElement("p", null, t.hero.intro, " ", t.hero.secondaryIntro)), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "font-bold text-cyan-400 uppercase"
  }, t.cvModal.expTitle), EXPERIENCES.map((exp, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "p-3 bg-slate-900 rounded-lg border border-slate-800"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-white block"
  }, exp.role, " @ ", exp.company, exp.location ? ` (${exp.location})` : '', " (", exp.period, ")"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-400"
  }, exp.description)))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "font-bold text-cyan-400 uppercase"
  }, t.cvModal.eduTitle), EDUCATION.map((edu, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "p-3 bg-slate-900 rounded-lg border border-slate-800"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-white block"
  }, edu.school, " \u2014 ", edu.degree, " (", edu.period, ")"), /*#__PURE__*/React.createElement("span", {
    className: "text-slate-400 block"
  }, edu.location)))))));
}

// -------------------------------------------------------------
// FOOTER COMPONENT
// -------------------------------------------------------------
function Footer() {
  const {
    t
  } = useContext(LanguageContext);
  return /*#__PURE__*/React.createElement("footer", {
    className: "bg-[#080b13] border-t border-slate-800 py-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-500 space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center gap-6 text-slate-400 font-semibold"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#projects",
    className: "hover:text-cyan-400"
  }, t.nav.projects), /*#__PURE__*/React.createElement("a", {
    href: "#experience",
    className: "hover:text-cyan-400"
  }, t.nav.experience), /*#__PURE__*/React.createElement("a", {
    href: "#skills",
    className: "hover:text-cyan-400"
  }, t.nav.skills), /*#__PURE__*/React.createElement("a", {
    href: "#education",
    className: "hover:text-cyan-400"
  }, t.nav.education), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    className: "hover:text-cyan-400"
  }, t.nav.contact)), /*#__PURE__*/React.createElement("p", null, "\xA9 2026 Farouk Bouraoui. Built with care and clean code.")));
}

// -------------------------------------------------------------
// ROOT APP COMPONENT WITH LANGUAGE PROVIDER
// -------------------------------------------------------------
function App() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('portfolio_lang') || 'fr';
  });
  const [activeSection, setActiveSection] = useState('home');
  const [showCVModal, setShowCVModal] = useState(false);
  const toggleLang = () => {
    const nextLang = lang === 'fr' ? 'en' : 'fr';
    setLang(nextLang);
    localStorage.setItem('portfolio_lang', nextLang);
  };
  const t = TRANSLATIONS[lang] || TRANSLATIONS.fr;
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'experience', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el && scrollPosition >= el.offsetTop && scrollPosition < el.offsetTop + el.offsetHeight) {
          setActiveSection(s);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleOpenContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement(LanguageContext.Provider, {
    value: {
      lang,
      toggleLang,
      t
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen flex flex-col relative bg-[#0b0f19] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300"
  }, /*#__PURE__*/React.createElement(Navbar, {
    activeSection: activeSection,
    onOpenContact: handleOpenContact,
    onOpenCV: () => setShowCVModal(true)
  }), /*#__PURE__*/React.createElement("main", {
    className: "flex-grow"
  }, /*#__PURE__*/React.createElement(Hero, {
    onOpenCV: () => setShowCVModal(true)
  }), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(Projects, null), /*#__PURE__*/React.createElement(Experience, null), /*#__PURE__*/React.createElement(Skills, null), /*#__PURE__*/React.createElement(Education, null), /*#__PURE__*/React.createElement(Contact, null)), /*#__PURE__*/React.createElement(Footer, null), showCVModal && /*#__PURE__*/React.createElement(CVModal, {
    onClose: () => setShowCVModal(false)
  })));
}

// Render Root
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(/*#__PURE__*/React.createElement(App, null));
}