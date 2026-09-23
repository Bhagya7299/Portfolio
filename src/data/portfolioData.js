import avatarImg from '../assets/avatar.png';
import projectSaasImg from '../assets/project_saas.png';
import projectEcommerceImg from '../assets/project_ecommerce.png';

export const INITIAL_PORTFOLIO_DATA = {
  personalInfo: {
    name: "Bhagya Patel",
    title: "Student & Freelance Full-Stack Developer",
    tagline: "Building clean, modern, and pocket-friendly websites for businesses & individuals.",
    bio: "Hey there! I'm Bhagya, a 20-year-old developer based in Vadodara with 1 year of hands-on web development experience. I build fast, responsive websites using React, Node.js, and modern CSS. I help clients turn their ideas into working websites with pocket-friendly pricing and 100% negotiable rates based on your workload!",
    location: "Vadodara, Gujarat / Remote Worldwide",
    email: "bhagyapatel7299@gmail.com",
    phone: "+91 8349804494",
    availability: "🟢 Open for Freelance Projects & Internships",
    avatar: avatarImg,
    resumeUrl: "#resume",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    upwork: "https://upwork.com",
    fiverr: "https://fiverr.com",
    calendlyLink: "https://calendly.com",
  },
  stats: [
    { label: "Hands-on Experience", value: "1 Year" },
    { label: "Projects Built", value: "10+" },
    { label: "Client Pricing", value: "Negotiable" },
    { label: "Delivery Time", value: "3 - 7 Days" }
  ],
  personaConfig: {
    freelancer: {
      heroTitle: "Need a Fast & Budget-Friendly Website for Your Business?",
      heroSubtitle: "Hi, I'm Bhagya Patel — a 20-year-old student developer creating custom web apps & sites at negotiable, pocket-friendly rates.",
      primaryCtaText: "Estimate Project Cost",
      primaryCtaAction: "estimator",
      secondaryCtaText: "See What I Build",
      secondaryCtaAction: "projects",
      badgeText: "Client & Freelance View"
    },
    recruiter: {
      heroTitle: "Eager Student Developer Ready to Learn & Build",
      heroSubtitle: "Strong foundation in React, JavaScript, Node.js, and modern web development practices.",
      primaryCtaText: "View My Resume",
      primaryCtaAction: "resume",
      secondaryCtaText: "Check My Projects",
      secondaryCtaAction: "projects",
      badgeText: "Recruiter & Internship View"
    },
    business: {
      heroTitle: "Affordable Web Solutions for Local & Global Businesses",
      heroSubtitle: "Get a modern website without paying high corporate agency fees. Rates are fully negotiable according to your scope!",
      primaryCtaText: "Get Free Quote",
      primaryCtaAction: "contact",
      secondaryCtaText: "Explore Services",
      secondaryCtaAction: "services",
      badgeText: "Small Business View"
    }
  },
  skills: [
    { name: "HTML5 & CSS3", level: 90, category: "Frontend", icon: "FileCode" },
    { name: "JavaScript (ES6+)", level: 85, category: "Frontend", icon: "Code2" },
    { name: "React.js", level: 82, category: "Frontend", icon: "Code2" },
    { name: "Tailwind CSS", level: 88, category: "Frontend", icon: "Palette" },
    { name: "Node.js & Express", level: 75, category: "Backend", icon: "Server" },
    { name: "MongoDB / Database", level: 70, category: "Backend", icon: "Database" },
    { name: "Git & GitHub", level: 80, category: "DevOps", icon: "Terminal" },
    { name: "Responsive Mobile UX", level: 90, category: "Design", icon: "Globe" }
  ],
  projects: [
    {
      id: "veer-collection",
      title: "Veer Collection - E-Commerce Storefront & Admin",
      category: "Full-Stack Web App",
      tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      image: projectEcommerceImg,
      summary: "A full e-commerce solution featuring product catalogs, shopping cart, customer checkout, and a full admin management panel.",
      metrics: { loadSpeed: "<1s", pageCount: "8+", setup: "Full Stack" },
      liveUrl: "https://example.com/demo",
      githubUrl: "https://github.com/example/veer-collection",
      caseStudy: {
        problem: "Local store owners needed an easy way to showcase products online and manage orders without complex software.",
        solution: "Built a lightweight React app with product category filters, interactive cart drawer, and clean admin inventory manager.",
        keyFeatures: [
          "Interactive shopping cart with quantity counter",
          "Responsive mobile-first layout",
          "Clean admin control panel for inventory updates",
          "Fast loading times and smooth animations"
        ],
        impact: "Provides a complete digital store demonstration ready for deployment for small business owners."
      }
    },
    {
      id: "analytics-dashboard",
      title: "Clean Analytics & Data Dashboard",
      category: "Frontend App",
      tags: ["React", "JavaScript", "Tailwind CSS", "Charts"],
      image: projectSaasImg,
      summary: "Modern web dashboard showcasing real-time metrics, user statistics, clean dark mode UI, and interactive charts.",
      metrics: { score: "98/100", darkTheme: "Included", responsive: "100%" },
      liveUrl: "https://example.com/dashboard",
      githubUrl: "https://github.com/example/analytics-dashboard",
      caseStudy: {
        problem: "Clients often want sleek internal dashboards to monitor metrics but get cluttered designs from template sites.",
        solution: "Created a customized dark glassmorphism dashboard layout focused on readability, quick navigation, and mobile support.",
        keyFeatures: [
          "Dynamic metric cards and charts",
          "Dark theme with glowing neon highlights",
          "Reusable React components",
          "Clean modular CSS design"
        ],
        impact: "Demonstrates high visual quality and front-end layout skills."
      }
    }
  ],
  services: [
    {
      id: "website-building",
      title: "Custom Website Development",
      description: "Fast, modern, and pocket-friendly website tailored for your business or personal brand.",
      icon: "Code",
      features: ["Mobile-Friendly Layout", "Fast Loading Speed", "Clean Modern Design", "Negotiable Budget Rates"],
      popular: true
    },
    {
      id: "ecommerce-store",
      title: "E-Commerce Online Store",
      description: "Set up your online shop to showcase products, accept client inquiries, and manage inventory easily.",
      icon: "ShoppingBag",
      features: ["Product Showcase Gallery", "Shopping Cart Feature", "Mobile Checkout UI", "Easy Product Management"],
      popular: false
    },
    {
      id: "redesign-fix",
      title: "Website Redesign & Bug Fixes",
      description: "Have a site that needs bug fixes or a modern UI facelift? Fast turnaround according to your workload.",
      icon: "Rocket",
      features: ["Code Cleaning & Fixes", "UI/UX Enhancements", "Mobile Alignment Fixes", "Speed Improvements"],
      popular: false
    }
  ],
  estimatorOptions: {
    projectTypes: [
      { id: "landing_page", name: "Single Page / Portfolio Site", baseCost: 40, baseInr: 2999, baseDays: 3 },
      { id: "business_site", name: "Multi-page Business Site", baseCost: 80, baseInr: 5999, baseDays: 5 },
      { id: "ecommerce", name: "E-Commerce Online Store", baseCost: 140, baseInr: 9999, baseDays: 7 },
      { id: "custom_app", name: "Custom Web Application", baseCost: 180, baseInr: 13999, baseDays: 10 }
    ],
    features: [
      { id: "mobile_responsive", name: "Mobile Responsive Layout", cost: 10, inr: 500, days: 1 },
      { id: "contact_form", name: "Working Contact Form", cost: 15, inr: 800, days: 1 },
      { id: "admin_panel", name: "Simple Admin Panel", cost: 35, inr: 2500, days: 2 },
      { id: "dark_mode", name: "Dark / Light Theme Toggle", cost: 10, inr: 500, days: 1 }
    ],
    timelineSpeed: [
      { id: "standard", name: "Standard Pace", multiplier: 1 },
      { id: "fast", name: "Express Launch", multiplier: 1.15 }
    ]
  },
  experience: [
    {
      role: "Freelance Web Developer & Student Developer",
      company: "Self-Employed / Personal Projects",
      period: "2025 - Present",
      location: "Vadodara, Gujarat",
      type: "Freelance",
      bullets: [
        "Built responsive websites and front-end applications for personal clients and local businesses.",
        "Created custom React components and integrated REST APIs with Node.js.",
        "Focused on high code quality, mobile responsiveness, and negotiable pocket-friendly rates."
      ],
      skills: ["React", "JavaScript", "HTML/CSS", "Tailwind CSS", "Node.js"]
    }
  ],
  whyWorkWithMe: [
    {
      title: "Pocket-Friendly & Negotiable Pricing",
      description: "Get high-quality custom web development with prices that fit your exact budget & workload.",
      icon: "DollarSign"
    },
    {
      title: "100% Focus & Daily Updates",
      description: "Direct one-on-one communication with regular updates so your project is delivered on time.",
      icon: "Clock"
    },
    {
      title: "Fast, Responsive & Clean Code",
      description: "Built with modern tools like React and Tailwind CSS so your site looks amazing on all devices.",
      icon: "CheckCircle"
    }
  ]
};

// Storage helper functions
const LOCAL_STORAGE_KEY = 'portfolio_custom_data_v3';

export function getPortfolioData() {
  try {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      return { ...INITIAL_PORTFOLIO_DATA, ...JSON.parse(stored) };
    }
  } catch (err) {
    console.error("Error reading portfolio data from localStorage", err);
  }
  return INITIAL_PORTFOLIO_DATA;
}

export function savePortfolioData(data) {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.error("Error saving portfolio data to localStorage", err);
  }
}

export function resetPortfolioData() {
  try {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  } catch (err) {
    console.error("Error resetting portfolio data", err);
  }
  return INITIAL_PORTFOLIO_DATA;
}
