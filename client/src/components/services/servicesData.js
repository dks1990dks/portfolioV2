import {
  FaDatabase,
  FaCloud,
  FaChartLine,
  FaSchool,
  FaPlug,
  FaRobot,
  FaBoxes,
  FaCalculator,
  FaGraduationCap,
} from "react-icons/fa";

// High-Credibility Niche Highlights
export const featuredSolutions = [
  {
    id: "featured-textile-erp",
    icon: FaBoxes,
    title: "Textile ERP Solutions",
    subtitle: "Industrial Manufacturing & Supply Chain",
    description:
      "End-to-end management systems tailored specifically for textile production lines, weaving houses, and trading operations.",
    features: [
      "Inventory Solutions",
      "Dispatch Management",
      "GST Verification",
      "Order Tracking Architecture",
    ],
  },
  {
    id: "featured-school-erp",
    icon: FaGraduationCap,
    title: "School ERP & LMS",
    subtitle: "Comprehensive Education Infrastructure",
    description:
      "A centralized platform designed to handle academic operations, communications, and institutional overhead securely.",
    features: [
      "Admissions Pipelines",
      "Fees & Ledger Audits",
      "Attendance Automation",
      "Parent Portal Interface",
    ],
  },
  {
    id: "featured-accounting-automation",
    icon: FaCalculator,
    title: "Accounting & GST Automation",
    subtitle: "Enterprise Financial Operations",
    description:
      "High-speed financial computing tools that eliminate manual errors, double entry, and operational compliance overhead.",
    features: [
      "GST Reconciliation Engine",
      "Smart Invoice Management",
      "Real-time Financial Dashboards",
      "Compliance Reporting",
    ],
  },
];

// Comprehensive Functional Capabilities
export const services = [
  {
    id: "erp",
    icon: FaDatabase,
    title: "ERP Development",
    subtitle: "Enterprise Resource Planning Solutions",
    description:
      "Custom ERP software that integrates inventory, accounting, HR, production and reporting into one centralized system.",
    features: [
      "Inventory Management",
      "Purchase & Sales Tracking",
      "Core Accounting Engine",
      "GST Workflows",
      "Dispatch Logistics",
      "Analytics Systems",
    ],
  },
  {
    id: "saas",
    icon: FaCloud,
    title: "Custom SaaS Development",
    subtitle: "Cloud Software Products",
    description:
      "Scalable SaaS applications with secure authentication, subscriptions and multi-tenant architecture.",
    features: [
      "Multi-Tenant Authentication",
      "Billing & Subscriptions",
      "Admin Control Panel",
      "Data Analytics Stack",
      "Automated Cloud Deployment",
    ],
  },
  {
    id: "dashboard",
    icon: FaChartLine,
    title: "Business Dashboards",
    subtitle: "Analytics & Reporting Platforms",
    description:
      "Real-time dashboards that transform highly distributed enterprise transactional records into sleek, clean visual business insights.",
    features: [
      "KPI Framework Optimization",
      "Dynamic Chart Models",
      "Scheduled Data Exporting",
      "Live Data Streaming Engine",
    ],
  },
  {
    id: "api",
    icon: FaPlug,
    title: "API Integration Infrastructure",
    subtitle: "Third-Party Services Ecosystem",
    description:
      "Building resilient data bridging architectures for payment gateways, global communication channels, and secure assets hosting.",
    features: [
      "Payment Processing Hooks",
      "Enterprise Email Channels",
      "WhatsApp Core APIs",
      "SMS Automated Schedulers",
      "REST / GraphQL Contracts",
    ],
  },
  {
    id: "automation",
    icon: FaRobot,
    title: "Business Workflow Automation",
    subtitle: "Operational Efficiency Architectures",
    description:
      "Drastically scale production margins by converting manual, error-prone data entries into autonomous background scripts.",
    features: [
      "Cron Process Engineering",
      "Instant Alert Triggering",
      "Dynamic Email Reports",
      "Multi-Tier Approval Gates",
      "Event Scheduling Tasks",
    ],
  },
];

export const techStack = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "TypeScript",
  "Tailwind CSS",
  "REST APIs",
  "JWT Auth",
  "GitHub Actions",
  "Docker",
  "Vercel",
  "Netlify",
];

export const serviceFAQs = [
  {
    q: "Do you build custom tools or configure off-the-shelf software?",
    a: "We build custom software around the specific workflows and requirements of each project rather than forcing the business to adapt to a generic system.",
  },
  {
    q: "Can your systems integrate with existing accounting setups?",
    a: "Yes. We design customized background API hooks that let your new ERP systems or automation tools securely push or balance records directly into common legacy systems or custom local database tables.",
  },
];
