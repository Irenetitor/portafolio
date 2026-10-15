// All the text on the site lives here, in English (en) and Spanish (es).
// To update the portfolio you normally only need to edit this file.

export type Lang = "en" | "es";
export type Localized = Record<Lang, string>;

export type Project = {
  slug: string;
  name: string;
  status?: Localized; // e.g. "Coming soon"
  image?: string; // path inside /public, e.g. "/projects/climatechic.png"
  problem: Localized;
  whatIDid: Localized;
  stack: string[];
  demoUrl?: string;
  repoUrl?: string;
  learnings: Localized;
  nextSteps: Localized;
};

export const profile = {
  name: "Irene",
  role: { en: "Full Stack Developer", es: "Desarrolladora Full Stack" },
  location: { en: "Open to roles in Ireland or remote", es: "Abierta a puestos en Irlanda o en remoto" },
  github: "https://github.com/Irenetitor",
  linkedin: "", // TODO: add your LinkedIn URL
  email: "", // TODO: add a contact email you are happy to make public
  cvUrl: "", // TODO: put your CV in /public (e.g. /cv-irene.pdf) and write the path here
};

export const ui = {
  nav: {
    about: { en: "About", es: "Sobre mí" },
    projects: { en: "Projects", es: "Proyectos" },
    skills: { en: "Skills", es: "Habilidades" },
    education: { en: "Education", es: "Formación" },
    contact: { en: "Contact", es: "Contacto" },
  },
  heroIntro: {
    en: "I build web applications end to end: databases, back-end logic and the interfaces people use.",
    es: "Construyo aplicaciones web de principio a fin: bases de datos, lógica de back-end y las interfaces que usa la gente.",
  },
  seeProjects: { en: "See my projects", es: "Ver mis proyectos" },
  downloadCv: { en: "Download CV", es: "Descargar CV" },
  aboutTitle: { en: "About me", es: "Sobre mí" },
  about: {
    en: "I'm a full stack developer in training. I completed the UCD Professional Academy Diploma in Full Stack Software Development, where I built and deployed web apps with Python, Django and Flask. I'm now studying the Full Stack Web Development bootcamp (with AI) at Neoland, focused on JavaScript, TypeScript, React, Next.js, Node and AI integration. I enjoy turning an idea into something people can actually use, and I'm looking for my first role as a developer from January 2027.",
    es: "Soy desarrolladora full stack en formación. Completé el UCD Professional Academy Diploma in Full Stack Software Development, donde construí y desplegué aplicaciones web con Python, Django y Flask. Ahora curso el bootcamp de Desarrollo Web Full Stack (con IA) de Neoland, centrado en JavaScript, TypeScript, React, Next.js, Node e integración de IA. Me gusta convertir una idea en algo que la gente pueda usar de verdad, y busco mi primer puesto como desarrolladora a partir de enero de 2027.",
  },
  projectsTitle: { en: "Projects", es: "Proyectos" },
  problem: { en: "Problem", es: "Problema" },
  whatIDid: { en: "What I did", es: "Qué hice" },
  learnings: { en: "What I learned", es: "Qué aprendí" },
  nextSteps: { en: "Next steps", es: "Próximas mejoras" },
  demo: { en: "Live demo", es: "Demo" },
  repo: { en: "Code", es: "Código" },
  skillsTitle: { en: "Skills", es: "Habilidades" },
  educationTitle: { en: "Education", es: "Formación" },
  contactTitle: { en: "Contact", es: "Contacto" },
  contactText: {
    en: "I'm open to junior full stack roles in Ireland or remote. The best way to reach me is:",
    es: "Estoy abierta a puestos junior full stack en Irlanda o en remoto. La mejor forma de contactarme es:",
  },
};

export const projects: Project[] = [
  {
    slug: "neoland-final",
    name: "Neoland final project",
    status: { en: "In progress", es: "En curso" },
    problem: { en: "To be defined.", es: "Por definir." },
    whatIDid: {
      en: "Final project of the Neoland bootcamp. It will cover React, Node, TypeScript and AI integration.",
      es: "Proyecto final del bootcamp de Neoland. Cubrirá React, Node, TypeScript e integración de IA.",
    },
    stack: ["React", "Node.js", "TypeScript"],
    learnings: { en: "Coming soon.", es: "Próximamente." },
    nextSteps: { en: "Coming soon.", es: "Próximamente." },
  },
  {
    slug: "climatechic",
    name: "ClimateChic",
    image: "", // TODO: add a screenshot, e.g. "/projects/climatechic.png"
    problem: {
      en: "An online clothing store for people who want stylish, sustainable fashion, where guests can shop without creating an account.",
      es: "Una tienda de ropa online para quien busca moda sostenible y con estilo, donde se puede comprar sin crear una cuenta.",
    },
    whatIDid: {
      en: "Built a Django e-commerce app with a PostgreSQL database (customers, products, orders, order items and shipping), user registration, a cookie-based cart for guests, a management command that loads products from an external API, and JavaScript form validation. Deployed on Render with secrets kept in environment variables.",
      es: "Construí una tienda con Django y una base de datos PostgreSQL (clientes, productos, pedidos, líneas de pedido y envíos), registro de usuarios, carrito con cookies para invitados, un comando de gestión que carga productos desde una API externa y validación de formularios con JavaScript. Desplegada en Render con los secretos en variables de entorno.",
    },
    stack: ["Python", "Django", "PostgreSQL", "Bootstrap", "JavaScript", "Render"],
    demoUrl: "https://climatechic-project.onrender.com",
    repoUrl: "https://github.com/Irenetitor/climatechic-project",
    learnings: {
      en: "Relational data modelling, Django template inheritance, handling sessions and cookies, and deploying a Django app with a managed database.",
      es: "Modelado de datos relacional, herencia de plantillas en Django, gestión de sesiones y cookies, y desplegar una app Django con una base de datos gestionada.",
    },
    nextSteps: {
      en: "Add online payments and automated tests.",
      es: "Añadir pagos online y tests automatizados.",
    },
  },
  {
    slug: "vitalitynectar",
    name: "VitalityNectar",
    image: "",
    problem: {
      en: "A place to discover healthy smoothie recipes, learn their benefits and keep a list of favourites.",
      es: "Un sitio para descubrir recetas de smoothies saludables, conocer sus beneficios y guardar una lista de favoritos.",
    },
    whatIDid: {
      en: "Built a Flask app with Flask-SQLAlchemy and PostgreSQL: recipe and benefit pages loaded from the database, a favourites list you can add to and clear, and contact and feedback forms that save to the database. Deployed on Render.",
      es: "Construí una app con Flask, Flask-SQLAlchemy y PostgreSQL: páginas de recetas y beneficios cargadas desde la base de datos, una lista de favoritos que se puede ampliar y vaciar, y formularios de contacto y opinión que se guardan en la base de datos. Desplegada en Render.",
    },
    stack: ["Python", "Flask", "SQLAlchemy", "PostgreSQL", "HTML/CSS", "Render"],
    demoUrl: "https://vitalitynectar.onrender.com",
    repoUrl: "https://github.com/Irenetitor/VitalityNectar",
    learnings: {
      en: "Using an ORM, designing routes for create/delete actions, and seeding a database from CSV files.",
      es: "Usar un ORM, diseñar rutas para crear y borrar datos, y poblar una base de datos desde archivos CSV.",
    },
    nextSteps: {
      en: "Add user accounts so each person has their own favourites.",
      es: "Añadir cuentas de usuario para que cada persona tenga sus propios favoritos.",
    },
  },
  {
    slug: "fastapi-backend",
    name: "FastAPI + MongoDB API",
    problem: {
      en: "A learning project to understand how a REST API is built, secured and connected to a NoSQL database.",
      es: "Un proyecto de aprendizaje para entender cómo se construye una API REST, cómo se protege y cómo se conecta a una base de datos NoSQL.",
    },
    whatIDid: {
      en: "Built a small FastAPI back end following a course: routers for users and products, Pydantic validation, basic and JWT authentication, and CRUD operations against MongoDB. Documented with Swagger UI.",
      es: "Construí un pequeño back-end con FastAPI siguiendo un curso: routers de usuarios y productos, validación con Pydantic, autenticación básica y con JWT, y operaciones CRUD contra MongoDB. Documentado con Swagger UI.",
    },
    stack: ["Python", "FastAPI", "MongoDB", "JWT", "Pydantic"],
    repoUrl: "https://github.com/Irenetitor/python-works",
    learnings: {
      en: "How token authentication works, and the difference between SQL and document databases.",
      es: "Cómo funciona la autenticación con tokens y la diferencia entre bases de datos SQL y de documentos.",
    },
    nextSteps: {
      en: "Deploy it and add tests.",
      es: "Desplegarla y añadir tests.",
    },
  },
  {
    slug: "wanderish",
    name: "Wanderish",
    image: "",
    problem: {
      en: "A website to inspire people to travel, with destinations, safety and budgeting tips and a feedback form.",
      es: "Una web para inspirar a la gente a viajar, con destinos, consejos de seguridad y presupuesto, y un formulario de opinión.",
    },
    whatIDid: {
      en: "Designed and built a responsive static site with HTML, CSS and JavaScript, published on GitHub Pages.",
      es: "Diseñé y construí una web estática y responsive con HTML, CSS y JavaScript, publicada en GitHub Pages.",
    },
    stack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    demoUrl: "https://irenetitor.github.io/wanderish/",
    repoUrl: "https://github.com/Irenetitor/wanderish",
    learnings: {
      en: "Responsive layout, semantic HTML and publishing a site with GitHub Pages.",
      es: "Diseño responsive, HTML semántico y publicar una web con GitHub Pages.",
    },
    nextSteps: {
      en: "Improve accessibility and image performance.",
      es: "Mejorar la accesibilidad y el rendimiento de las imágenes.",
    },
  },
];

export const skills: { group: Localized; items: string[] }[] = [
  { group: { en: "Front end", es: "Front-end" }, items: ["HTML", "CSS", "JavaScript", "Bootstrap", "React (learning)", "TypeScript (learning)"] },
  { group: { en: "Back end", es: "Back-end" }, items: ["Python", "Django", "Flask", "FastAPI", "Node.js / Express (learning)"] },
  { group: { en: "Databases", es: "Bases de datos" }, items: ["PostgreSQL", "MongoDB", "SQL"] },
  { group: { en: "Tools", es: "Herramientas" }, items: ["Git", "GitHub", "Render", "GitHub Pages", "Figma"] },
];

export const education: { title: string; school: string; detail: Localized }[] = [
  {
    title: "Full Stack Web Development bootcamp (with AI)",
    school: "Neoland",
    detail: { en: "In progress", es: "En curso" },
  },
  {
    title: "UCD Professional Academy Diploma in Full Stack Software Development",
    school: "UCD Professional Academy",
    detail: { en: "Completed", es: "Completado" },
  },
];
