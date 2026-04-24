export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
}

export interface Skill {
  label: string;
  percentage: number;
}

export interface Language {
  name: string;
  level: string;
}

export interface Certification {
  name: string;
  url: string;
}

export interface Project {
  name: string;
  url: string;
  stack: string;
  description: string;
  highlights?: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  photoUrl: string;
  contact: ContactInfo;
  skills: Skill[];
  tools: string[];
  languages: Language[];
  certifications: Certification[];
  profile: string;
  projects: Project[];
  workflow: string;
}

export const resumeDataEs: ResumeData = {
  name: "Daniel Sebastian Zamudio Gutiérrez",
  title: "Desarrollador Full‑Stack",
  photoUrl: "/photo.jpg",
  contact: {
    email: "zam.zagd@gmail.com",
    phone: "541‑916‑6276",
    location: "Selma, Oregon 97538",
    github: "https://github.com/DanielZmGt",
    linkedin: "https://www.linkedin.com/in/daniel-zamudio-84a589385/",
  },
  skills: [
    { label: "Next.js / React", percentage: 92 },
    { label: "TypeScript", percentage: 88 },
    { label: "Python / FastAPI", percentage: 85 },
    { label: "Supabase / PostgreSQL", percentage: 82 },
    { label: "Tailwind CSS", percentage: 90 },
    { label: "Docker", percentage: 75 },
    { label: "JavaScript (Algoritmos)", percentage: 88 },
  ],
  tools: [
    "Next.js 15/16", "React 19", "TypeScript", "Python 3.11", "FastAPI",
    "Supabase", "Tailwind CSS", "Vite", "Framer Motion", "Docker", "Vercel",
    "Railway", "GitHub Actions", "Playwright", "Google Gemini", "JWT / Auth", "OCR / pandas"
  ],
  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "Avanzado" },
  ],
  certifications: [
    { name: "JavaScript (V9)", url: "https://www.freecodecamp.org/certification/danielzmgt/javascript-v9" },
    { name: "Responsive Web Design", url: "https://www.freecodecamp.org/certification/danielzmgt/responsive-web-design" },
    { name: "JavaScript Algorithms & Data Structures", url: "https://www.freecodecamp.org/certification/danielzmgt/javascript-algorithms-and-data-structures-v8" },
  ],
  profile: "Desarrollador Full‑Stack con experiencia en la construcción de plataformas web de producción que combinan frontends modernos con microservicios robustos. Especializado en Next.js, React y Python/FastAPI, con amplio dominio de Supabase, autenticación basada en JWT y despliegues en la nube (Vercel, Railway). Apasionado por resolver problemas reales de negocio mediante software bien estructurado, seguro y escalable. Capacidad demostrada para diseñar arquitecturas de extremo a extremo, desde la base de datos hasta la interfaz de usuario, incluyendo integraciones de IA generativa y procesamiento automatizado de documentos.",
  projects: [
    {
      name: "3ZG Tool Nest",
      url: "https://3zg-tool-nest.vercel.app/login",
      stack: "Next.js 16 · Python/FastAPI · Supabase · Docker · Vercel / Railway",
      description: "Plataforma web interna para la empresa 3ZG que centraliza herramientas de contabilidad y procesamiento de documentos bajo un sistema de control de acceso por roles. Reemplazó scripts de escritorio dispersos con un entorno de trabajo unificado y accesible desde el navegador.",
      highlights: [
        "Tagger de estados de cuenta de múltiples bancos mexicanos con soporte OCR; salida en Excel estructurado.",
        "Consolidador de Excel y PDFs, Generador de importación IVA (archivos ASC → SAT), y extractor de UUIDs.",
        "Panel de administración con gestión granular de usuarios, herramientas y un agente de IA (Gemini).",
        "Arquitectura de carga directa al worker para superar los límites de payload de Vercel manteniendo la autenticación.",
        "CI/CD con GitHub Actions: linting, pruebas, pip-audit, npm audit y generación de SBOM (CycloneDX).",
        "Internacionalización completa (inglés/español) y seguridad con RLS en todas las tablas de Supabase."
      ]
    },
    {
      name: "Galería y Enmarcados del Bajío",
      url: "https://galeria-y-enmarcados-del-bajio.vercel.app/virtual-framer",
      stack: "Next.js 15 · React 19 · Supabase · Framer Motion · Vercel",
      description: "Plataforma de e‑commerce y galería de arte con una herramienta de enmarcado virtual interactiva. Los usuarios pueden previsualizar en tiempo real distintas molduras, matboards y fondos sobre sus obras antes de hacer un pedido personalizado. Integra gestión de carrito, secciones de galería y tienda, y se despliega con CI continuo en Vercel."
    },
    {
      name: "Aunt Sarah's Bakery & Chef Services",
      url: "https://aunt-sarahs-bakery.vercel.app/",
      stack: "React 19 · TypeScript · Vite · Tailwind CSS · Google Gemini · Vercel",
      description: "Plataforma artesanal de panadería con asistente de IA conversacional («Aunt Sarah»), impulsada por Google Gemini 2.0 Flash. Toda la lógica de IA corre en un proxy serverless seguro, manteniendo las credenciales fuera del cliente. Incluye menú, servicios de chef privado y un diseño responsivo en Tailwind CSS."
    },
    {
      name: "Javascript Algorithms",
      url: "https://github.com/DanielZmGt/Javascript-Algorithms",
      stack: "JavaScript · Python · Node.js",
      description: "Repositorio de práctica y estudio de algoritmos y lógica computacional. Incluye el script titan-refactor (disponible en JS y Python) para la reestructuración automatizada de proyectos de código."
    }
  ],
  workflow: "Uso habitual de herramientas de automatización e IA para acelerar el desarrollo: Claude Code como asistente de codificación por terminal, GitHub Actions para pipelines de CI/CD, Docker / Docker Compose para entornos reproducibles, y Vercel / Railway para despliegues continuos con zero-downtime."
};

export const resumeDataEn: ResumeData = {
  name: "Daniel Sebastian Zamudio Gutiérrez",
  title: "Full‑Stack Developer",
  photoUrl: "/photo.jpg",
  contact: {
    email: "zam.zagd@gmail.com",
    phone: "541‑916‑6276",
    location: "Selma, Oregon 97538",
    github: "https://github.com/DanielZmGt",
    linkedin: "https://www.linkedin.com/in/daniel-zamudio-84a589385/",
  },
  skills: [
    { label: "Next.js / React", percentage: 92 },
    { label: "TypeScript", percentage: 88 },
    { label: "Python / FastAPI", percentage: 85 },
    { label: "Supabase / PostgreSQL", percentage: 82 },
    { label: "Tailwind CSS", percentage: 90 },
    { label: "Docker", percentage: 75 },
    { label: "JavaScript (Algorithms)", percentage: 88 },
  ],
  tools: [
    "Next.js 15/16", "React 19", "TypeScript", "Python 3.11", "FastAPI",
    "Supabase", "Tailwind CSS", "Vite", "Framer Motion", "Docker", "Vercel",
    "Railway", "GitHub Actions", "Playwright", "Google Gemini", "JWT / Auth", "OCR / pandas"
  ],
  languages: [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "Advanced (IELTS C1)" },
  ],
  certifications: [
    { name: "JavaScript (V9)", url: "https://www.freecodecamp.org/certification/danielzmgt/javascript-v9" },
    { name: "Responsive Web Design", url: "https://www.freecodecamp.org/certification/danielzmgt/responsive-web-design" },
    { name: "JavaScript Algorithms & Data Structures", url: "https://www.freecodecamp.org/certification/danielzmgt/javascript-algorithms-and-data-structures-v8" },
  ],
  profile: "Full‑Stack Developer with hands‑on experience building production-grade web platforms that combine modern frontends with robust microservices. Specialized in Next.js, React, and Python/FastAPI, with deep command of Supabase, JWT‑based authentication, and cloud deployments on Vercel and Railway. Passionate about solving real business problems through well‑structured, secure, and scalable software. Proven ability to design end‑to‑end architectures — from database to UI — including generative AI integrations and automated document processing.",
  projects: [
    {
      name: "3ZG Tool Nest",
      url: "https://3zg-tool-nest.vercel.app/login",
      stack: "Next.js 16 · Python/FastAPI · Supabase · Docker · Vercel / Railway",
      description: "Internal web platform for 3ZG that centralizes accounting and document‑processing tools under a role‑based access control system. Replaced scattered desktop scripts with a unified, browser‑accessible toolbox.",
      highlights: [
        "Bank statement tagger for multiple Mexican banks (BBVA, Banamex, HSBC, Monex, Santander) with OCR support; outputs structured Excel reports.",
        "Excel & PDF consolidators, IVA Import Generator (ASC → SAT), UUID Finder/Consolidator, and formula stripper.",
        "Admin panel with granular user & tool management, and a built‑in AI agent powered by Google Gemini.",
        "Direct‑to‑worker file upload architecture bypasses Vercel payload limits while preserving auth via token handshake.",
        "Full CI/CD via GitHub Actions: linting, testing, pip‑audit, npm audit, and CycloneDX SBOM generation on every build.",
        "Complete English/Spanish i18n and Row‑Level Security (RLS) on all Supabase tables."
      ]
    },
    {
      name: "Galería y Enmarcados del Bajío",
      url: "https://galeria-y-enmarcados-del-bajio.vercel.app/virtual-framer",
      stack: "Next.js 15 · React 19 · Supabase · Framer Motion · Vercel",
      description: "E‑commerce platform and art gallery featuring an interactive virtual framer tool. Users can preview custom moldings, mat sizes, and background colors on their artwork in real time before placing a custom order. Includes cart management, gallery & shop sections, and continuous deployment to Vercel."
    },
    {
      name: "Aunt Sarah's Bakery & Chef Services",
      url: "https://aunt-sarahs-bakery.vercel.app/",
      stack: "React 19 · TypeScript · Vite · Tailwind CSS · Google Gemini · Vercel",
      description: "Artisanal bakery platform with a conversational AI assistant («Aunt Sarah») powered by Google Gemini 2.0 Flash. All AI logic runs through a secure serverless proxy, keeping credentials off the client. Features a handcrafted menu, private chef services, and a fully responsive Tailwind CSS design."
    },
    {
      name: "Javascript Algorithms",
      url: "https://github.com/DanielZmGt/Javascript-Algorithms",
      stack: "JavaScript · Python · Node.js",
      description: "Study repository covering algorithms, data structures, and computational logic. Includes the titan-refactor script (available in both JS and Python) for automated codebase restructuring."
    }
  ],
  workflow: "Consistent use of automation and AI‑assisted tools to accelerate development: Claude Code as a terminal‑based coding assistant, GitHub Actions for CI/CD pipelines, Docker / Docker Compose for reproducible environments, and Vercel / Railway for zero‑downtime continuous deployments."
};