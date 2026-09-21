import resume_matcher from '../assets/resume_matcher_thumbnail.png';

export const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'about', label: 'About', icon: 'user' },
  { id: 'skills', label: 'Skills', icon: 'code' },
  { id: 'projects', label: 'Projects', icon: 'folder' },
  { id: 'experience', label: 'Experience', icon: 'briefcase' },
  { id: 'contact', label: 'Contact', icon: 'mail' },
];

// Tab rail only shows the 6 "chapters" — Blog intentionally omitted to match nav vs. rail split in the source design
export const TAB_ITEMS = [
  { id: 'home', number: '01', label: 'Home', color: 'var(--tab-home)' },
  { id: 'about', number: '02', label: 'About', color: 'var(--tab-about)' },
  { id: 'skills', number: '03', label: 'Skills', color: 'var(--tab-skills)' },
  { id: 'projects', number: '04', label: 'Projects', color: 'var(--tab-projects)' },
  { id: 'experience', number: '05', label: 'Experience', color: 'var(--tab-experience)' },
  { id: 'contact', number: '06', label: 'Contact', color: 'var(--tab-contact)' },
];

export const PROFILE = {
  name: 'Monisha',
  role: 'Software Engineer',
  tagline: 'Transforming ideas into fast, scalable and intuitive web applications with modern technologies.',
  codeSnippet: `const stack = [\n  'Python',\n  'FastAPI',\n  'React',\n  'Laravel',\n  'REST APIs'\n];`,
  social: {
    github: 'https://github.com/monisha',
    linkedin: 'https://www.linkedin.com/in/muthumonisha-e-0887b6138/',
    instagram: 'https://instagram.com/monisha',
    email: 'mailto:muthumonishaelango4@gmail.com',
  },
};

export const ABOUT = {
  paragraphs: [
    "I’m a Full Stack Developer with 4+ years of experience building scalable, high-performing web applications that solve real business problems. I specialize in Python, FastAPI, React, Laravel, Node.js, PostgreSQL, and MySQL, with strong experience in REST APIs, backend architecture, and database-driven applications.","I enjoy turning complex requirements into clean, reliable, and user-focused solutions—from backend architecture to frontend experiences. Always learning, building, and exploring AI and modern technologies to create something better with every project.",
  ],
  funFacts: [
    'Code Enthusiast 💻',
    'Continuous Learner 🚀',
    'Coding playlist lover🎧',
    'Curious Creator ✨',
  ],
};

export const SKILL_CATEGORIES = [
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: '</>',
    accent: 'var(--accent)',
    skills: ['PHP', 'JavaScript (ES6+)', 'HTML', 'CSS'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: '🎨',
    accent: 'var(--lavender)',
    skills: ['React.js', 'Bootstrap', 'Tailwind CSS', 'jQuery'],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: '⚙️',
    accent: 'var(--sage)',
    skills: ['Python','FastAPI','Laravel', 'RESTful API'],
  },
  {
    id: 'database',
    title: 'Database',
    icon: '🗄️',
    accent: 'var(--tab-skills)',
    skills: ['MySQL', 'PostgreSQL'],
  },
  {
    id: 'tools',
    title: 'Version Control & Tools',
    icon: '🛠️',
    accent: 'var(--tab-projects)',
    skills: ['Git', 'Bitbucket', 'GitHub', 'Postman', 'VS Code', 'Figma', 'Canva'],
  },
  {
    id: 'deployment',
    title: 'Deployment & Hosting',
    icon: '🚀',
    accent: 'var(--tab-experience)',
    skills: ['cPanel', 'AWS (Basic)', 'DNS Management', 'SSL Configuration'],
  },
];

export const PROJECTS = [
  {
    title: 'Resumer Matcher',
    tags: ['Python','FastAPI','React','PostgresSQL'],
    link: 'https://github.com/Monishadev-25/resume_matcher',
    thumbnail: resume_matcher
  },
  {
    title: 'HR Management System',
    tags: ['Python','FastAPI','React','Tailwind','Mysql'],
    link: '#',
    thumbnail: "../assets/about.png"
  },
  {
    title: 'Chatbot',
    tags: ['PHP','Wordpress Custom Hooks'],
    link: 'https://github.com/Monishadev-25/chatbot',
    thumbnail: "../assets/about.png"
  },
  {
    title: 'Feedback Collector',
    tags: ['Laravel', 'PHP', 'Blade Template'],
    link: 'https://github.com/Monishadev-25/feedbackweb',
    thumbnail: "../assets/about.png"
  },
  {
    title: 'Town Council',
    tags: ['Laravel','MySql'],
    link: '#',
    thumbnail: "../assets/about.png"
  },
  {
    title: 'Timescale',
    tags: ['Laravel', 'OOPS','PostgresSQL','React'],
    link: '#',
    thumbnail: "../assets/about.png"
  }
];

export const EXPERIENCE = [
  {
    year: '2025',
    period: '2025 - Present',
    title: 'Software Engineer',
    company: 'Cloudrevel Innovation',
    description: 'Building scalable web applications and leading amazing projects.',
  },
  {
    year: '2022',
    period: '2022 - 2025',
    title: 'Senior Web Developer',
    company: 'Jvyam Cloud Softtech Pvt Ltd (ORYON)',
    description: 'Worked on REST APIs, performance optimization & system design.',
  },
  {
    year: '2021',
    period: '2021 - 2022',
    title: 'Web Developer - Intern',
    company: 'Astrowebsolution',
    description: 'Started my journey & built strong foundation in Backend.',
  },
];

export const CONTACT = {
  email: 'muthumonishaelango4@gmail.com',
  location: 'India',
  github: 'github.com/monisha',
  linkedin: 'https://www.linkedin.com/in/muthumonisha-e-0887b6138/',
};
