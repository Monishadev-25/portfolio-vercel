// All copy + structured content lives here.
// Pages/components stay presentational — edit this file to update the site.

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
  codeSnippet: `const stack = [\n  'Laravel',\n  'React',\n  'Node.js',\n  'REST APIs'\n];`,
  social: {
    github: 'https://github.com/monisha',
    linkedin: 'https://www.linkedin.com/in/muthumonisha-e-0887b6138/',
    instagram: 'https://instagram.com/monisha',
    email: 'mailto:muthumonishaelango4@gmail.com',
  },
};

export const ABOUT = {
  paragraphs: [
    "I'm a Web Developer with 4+ years of experience, building web applications that solve real business problems. From Laravel and WordPress to modern technologies like React and Node.js, I enjoy turning ideas into fast, reliable, and user-friendly digital experiences.",
    "Beyond writing code, I enjoy learning new technologies, improving existing systems, and taking on challenges that help me grow. Every project is an opportunity to build something better than the last.",
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
    skills: ['Laravel', 'Node.js', 'Express.js'],
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
    title: 'Hospital Management System',
    tags: ['Laravel', 'PHP', 'MySQL'],
    link: '#',
  },
  {
    title: 'TaskFlow Manager',
    tags: ['Laravel', 'Livewire', 'Alpine.js'],
    link: '#',
  },
  {
    title: 'E-Learning Platform',
    tags: ['Laravel', 'React', 'MySQL'],
    link: '#',
  },
  {
    title: 'Portfolio Website',
    tags: ['React', 'Tailwind CSS', 'Framer'],
    link: '#',
  },
  {
    title: 'Hospital Management System',
    tags: ['Laravel', 'PHP', 'MySQL'],
    link: '#',
  },
  {
    title: 'TaskFlow Manager',
    tags: ['Laravel', 'Livewire', 'Alpine.js'],
    link: '#',
  },
  {
    title: 'E-Learning Platform',
    tags: ['Laravel', 'React', 'MySQL'],
    link: '#',
  },
  {
    title: 'Portfolio Website',
    tags: ['React', 'Tailwind CSS', 'Framer'],
    link: '#',
  },
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
