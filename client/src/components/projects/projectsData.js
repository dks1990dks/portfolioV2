import {
  FaBell,
  FaBoxes,
  FaChartLine,
  FaGraduationCap,
  FaFileInvoiceDollar,
  FaShoppingCart,
} from "react-icons/fa";

export const projects = [
  // =========================================================
  // FEATURED — COMPLETED PROJECTS
  // =========================================================

  {
    id: 1,
    slug: "duemate",
    featured: true,
    category: "SaaS",
    icon: FaBell,

    title: "DueMate",
    subtitle: "Policy, EMI & Due-Date Reminder SaaS",

    image: "projects/duemate/duemateDashboard.jpeg",

    description:
      "A SaaS platform for managing recurring financial and important obligations such as insurance policies, EMIs, subscriptions, rent, taxes, and school fees with scheduled reminder workflows.",

    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],

    frontend: "React + TypeScript",
    backend: "Node.js + Express",
    database: "MongoDB",

    status: "completed",
    statusLabel: "Completed — V1",

    industry: "FinTech / SaaS",
    duration: "Development Project",
    teamSize: "1 Developer",
    type: "SaaS",
    availability: "V1 Completed",

    live: "#",
    github: "#",

    executiveSummary:
      "DueMate is a reminder-focused SaaS product designed to help users organize recurring financial obligations and receive timely reminders before important due dates.",

    problem:
      "People and small businesses often manage insurance policies, EMIs, subscriptions, taxes, rent, and other recurring obligations using scattered notes, calendars, or manual reminders.",

    solution:
      "A centralized SaaS application where users can create obligations, configure recurrence and reminder schedules, and manage upcoming due dates from a single dashboard.",

    objectives: [
      "Centralize recurring obligation management",
      "Track upcoming due dates",
      "Configure recurring reminder schedules",
      "Provide a clean dashboard for financial obligations",
      "Create a foundation for multi-channel notifications",
    ],

    problemPoints: [
      {
        title: "Scattered Due Dates",
        desc: "Important recurring obligations can be spread across different apps, documents, and reminders.",
      },
      {
        title: "Manual Tracking",
        desc: "Users may need to repeatedly check policies, EMIs, subscriptions, and other payment schedules.",
      },
      {
        title: "Missed Reminders",
        desc: "A centralized reminder workflow helps users keep upcoming obligations visible.",
      },
      {
        title: "Multiple Obligation Types",
        desc: "Different recurring obligations need a common management system.",
      },
    ],

    security: [
      "JWT Authentication",
      "Protected API Routes",
      "Secure Session Handling",
      "Role-Based Access Foundation",
    ],

    performance: [
      "React-based component architecture",
      "TanStack Query data management",
      "Modular Node.js API architecture",
      "MongoDB data persistence",
    ],

    results: [
      "V1 application completed",
      "Recurring obligation management workflow implemented",
      "Reminder scheduling foundation implemented",
      "SaaS architecture prepared for future notification integrations",
    ],

    features: [
      "User Authentication",
      "Obligation Management",
      "Due-Date Tracking",
      "Recurring Schedules",
      "Reminder Management",
      "Dashboard",
      "Notification Architecture",
    ],

    future: [
      "Advanced WhatsApp Notifications",
      "SMS Notification Integration",
      "Email Reminder Automation",
      "Multi-Tenant Organization Support",
      "Advanced Reminder Analytics",
    ],

    gallery: [
      "projects/duemate/duemateDashboard.jpeg",
      "projects/duemate/duemateObligation.jpeg",
      "projects/duemate/duemateNotification.jpeg",
      "projects/duemate/duemateAdminDashboard.jpeg",
    ],
  },

  // =========================================================

  {
    id: 2,
    slug: "mvp-store",
    featured: true,
    category: "E-Commerce",
    icon: FaShoppingCart,

    title: "MVP Store",
    subtitle: "Modern E-Commerce Platform",

    image: "projects/mvpstore/mvpStoreDashboard.jpg",

    description:
      "A modern e-commerce platform with product browsing, product detail pages, responsive shopping interfaces, and a scalable full-stack architecture.",

    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],

    frontend: "React + Vite + Tailwind CSS",
    backend: "Node.js + Express",
    database: "MongoDB",

    status: "completed",
    statusLabel: "Completed",

    industry: "E-Commerce",
    duration: "Development Project",
    teamSize: "1 Developer",
    type: "Web Application",
    availability: "Live / Demo",

    live: "#",
    github: "#",

    executiveSummary:
      "MVP Store is a full-stack e-commerce application built to provide a modern shopping experience with a responsive frontend and scalable backend foundation.",

    problem:
      "Small and growing businesses need modern online storefronts that provide a smooth browsing experience while remaining flexible enough to extend with additional commerce functionality.",

    solution:
      "A responsive React-based storefront connected to a Node.js and MongoDB backend, with reusable product and shopping components.",

    objectives: [
      "Build a modern responsive storefront",
      "Create reusable product interfaces",
      "Provide scalable backend architecture",
      "Support product discovery and detail views",
      "Prepare the application for future commerce integrations",
    ],

    problemPoints: [
      {
        title: "Modern Shopping Experience",
        desc: "Customers expect fast and responsive interfaces across desktop and mobile devices.",
      },
      {
        title: "Product Presentation",
        desc: "Products need clear images, information, and dedicated detail pages.",
      },
      {
        title: "Scalable Foundation",
        desc: "The application needs a backend structure that can grow with future commerce requirements.",
      },
    ],

    security: [
      "Protected Backend APIs",
      "Server-Side Validation",
      "Secure Database Access",
    ],

    performance: [
      "Vite Build System",
      "Responsive React Components",
      "Optimized Asset Loading",
      "Reusable UI Architecture",
    ],

    results: [
      "E-commerce application completed",
      "Responsive storefront implemented",
      "Product browsing and detail workflows implemented",
      "Full-stack architecture established",
    ],

    features: [
      "Homepage",
      "Product Listing",
      "Product Details",
      "Responsive Storefront",
      "Category Navigation",
      "Backend API",
      "Product Data Management",
    ],

    future: [
      "Payment Gateway Integration",
      "Order Management Enhancements",
      "Customer Accounts",
      "Advanced Admin Dashboard",
      "Shipping Integration",
    ],

    gallery: ["projects/mvpstore/mvpStoreDashboard.jpg", 
              "projects/mvpstore/mvpStoreProductdetails.jpg",
              "projects/mvpstore/mvpStoreProductListPage.jpg",
              "projects/mvpstore/mvpStoreSettingDashboard.jpg",
            "projects/mvpstore/mvpStoreProductManagementPage.jpg"],
  },

  // =========================================================

  {
    id: 3,
    slug: "grs-inventory",
    featured: true,
    category: "Inventory",
    icon: FaBoxes,

    title: "GRS Inventory",
    subtitle: "Recycled Textile Inventory Management",

    image: "projects/grsInventory/grsInventoryDashboard.jpg",

    description:
      "An inventory management solution designed around recycled textile materials, stock movement, transaction records, and operational traceability.",

    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],

    frontend: "React + Tailwind CSS",
    backend: "Node.js + Express",
    database: "MongoDB",

    status: "completed",
    statusLabel: "Completed",

    industry: "Textile / Sustainability",
    duration: "Development Project",
    teamSize: "1 Developer",
    type: "Business Application",
    availability: "Completed",

    live: "#",
    github: "#",

    executiveSummary:
      "A business-focused inventory application for managing recycled textile material records and operational inventory workflows.",

    problem:
      "Recycled textile businesses need structured records for material movement, stock quantities, transaction information, and operational traceability.",

    solution:
      "A centralized inventory application designed to organize recycled material records and provide a structured workflow for stock and transaction management.",

    objectives: [
      "Centralize recycled material inventory",
      "Track stock movement",
      "Maintain transaction records",
      "Improve operational visibility",
      "Create a scalable foundation for textile inventory workflows",
    ],

    problemPoints: [
      {
        title: "Manual Inventory",
        desc: "Manual records make it harder to maintain consistent stock information.",
      },
      {
        title: "Material Traceability",
        desc: "Recycled materials require structured transaction and movement records.",
      },
      {
        title: "Operational Visibility",
        desc: "Centralized inventory data makes current stock information easier to review.",
      },
    ],

    security: [
      "Protected API Architecture",
      "Validated Data Operations",
      "Controlled Backend Access",
    ],

    performance: [
      "Reusable React Components",
      "MongoDB Data Storage",
      "Modular API Architecture",
      "Responsive Interface",
    ],

    results: [
      "Inventory application completed",
      "Recycled textile workflow structured digitally",
      "Centralized inventory records",
      "Foundation created for future inventory expansion",
    ],

    features: [
      "Inventory Dashboard",
      "Material Records",
      "Stock Management",
      "Transaction Records",
      "Inventory Tracking",
      "Reports",
    ],

    future: [
      "Advanced Stock Analytics",
      "Barcode / QR Integration",
      "Supplier Management",
      "Purchase & Sales Integration",
      "Advanced Reporting",
    ],

    gallery: ["projects/grsInventory/grsInventoryDashboard.jpg",
              "projects/grsInventory/grsGreigeEntryPage.jpg",
              "projects/grsInventory/grsReportPage.jpg",
              "projects/grsInventory/grsStockUtilisationPage.jpg",
              "projects/grsInventory/grsTcDocumentRecordPage.jpg"],
  },

  // =========================================================

  {
  id: 4,
  slug: "gst-reconciliation-dashboard",
  featured: true,
  category: "FinTech / ERP",
  icon: FaFileInvoiceDollar,

  title: "GST Reconciliation Dashboard",
  subtitle: "GST Purchase vs GSTR-2B Reconciliation & Exception Management System",

  image: "projects/gstreco/gstRecoDashboard.jpeg",

  description:
    "A production-ready GST reconciliation platform for comparing purchase register data with GSTR-2B, identifying invoice and tax mismatches, managing reconciliation exceptions, and tracking invoices found across subsequent months.",

  technologies: [
    "React",
    "Vite",
    "JavaScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "JWT",
    "Multer",
    "XLSX",
  ],

  frontend: "React + Vite",
  backend: "Node.js + Express",
  database: "MongoDB",

  status: "completed",
  statusLabel: "Completed — Milestone 1",

  industry: "FinTech / GST / Accounting",
  duration: "Development Project",
  teamSize: "1 Developer",
  type: "ERP / SaaS",
  availability: "Milestone 1 Completed",

  live: "#",
  github: "https://github.com/dks1990dks/gst-reconciliation-dashboard",

  executiveSummary:
    "GST Reconciliation Dashboard is a web-based reconciliation system designed to help businesses and accounting teams compare purchase register data with GSTR-2B records, identify unmatched invoices and tax differences, manage exceptions, and track invoices that appear in subsequent GST months.",

  problem:
    "Businesses need to regularly compare their purchase records with GSTR-2B data to identify missing invoices, unmatched records, tax differences, and other reconciliation exceptions. Manual Excel-based reconciliation can become difficult to manage as transaction volumes and monthly records increase.",

  solution:
    "A centralized GST reconciliation platform that organizes data by organization, firm, financial year, and month, supports purchase and GSTR-2B uploads, performs invoice matching and tax comparison, creates actionable exception cases, and provides cross-month tracking for invoices identified in later GST periods.",

  objectives: [
    "Centralize purchase and GSTR-2B reconciliation",
    "Compare purchase invoices against GSTR-2B records",
    "Identify missing and mismatched invoices",
    "Detect taxable value and tax differences",
    "Manage reconciliation exceptions through a dedicated Exception Center",
    "Track invoices found in subsequent months",
    "Maintain reconciliation history and audit information",
  ],

  problemPoints: [
    {
      title: "Manual GST Reconciliation",
      desc: "Comparing purchase registers with GSTR-2B manually can become time-consuming and difficult to manage as monthly transaction volumes increase.",
    },
    {
      title: "Missing Invoices",
      desc: "Purchase invoices may not appear in the corresponding GSTR-2B month and require systematic follow-up.",
    },
    {
      title: "Invoice Number Variations",
      desc: "Supplier invoice numbers can contain prefixes, suffixes, separators, or leading zeros, making direct invoice matching unreliable.",
    },
    {
      title: "Tax Differences",
      desc: "Differences in taxable value, IGST, CGST, and SGST need to be identified and reviewed during reconciliation.",
    },
    {
      title: "Cross-Month Tracking",
      desc: "An invoice missing from one month's GSTR-2B may appear in a subsequent month and needs to be connected with the original exception.",
    },
    {
      title: "Exception Management",
      desc: "Reconciliation mismatches require classification, status tracking, history, and resolution workflows rather than remaining as isolated Excel records.",
    },
  ],

  security: [
    "JWT Authentication",
    "Protected API Routes",
    "Organization-Level Data Isolation",
    "Role-Based Access Foundation",
    "Authenticated Reconciliation APIs",
  ],

  performance: [
    "React + Vite frontend architecture",
    "MongoDB indexed reconciliation data",
    "Modular Express API architecture",
    "Optimized invoice matching logic",
    "Batch-based reconciliation processing",
    "Structured monthly reconciliation queries",
  ],

  results: [
    "GST reconciliation workflow implemented",
    "Purchase and GSTR-2B upload workflow implemented",
    "Invoice matching and normalization implemented",
    "Tax difference detection implemented",
    "Exception Center implemented",
    "Exception history and status management implemented",
    "Cross-month invoice tracking implemented",
    "Duplicate exception protection implemented",
    "Production deployment completed",
  ],

  features: [
    "User Authentication",
    "Organization Management",
    "Firm / GST Registration Management",
    "Financial Year Management",
    "Monthly GST Data Management",
    "Purchase Register Upload",
    "GSTR-2B Upload",
    "Upload Batch Management",
    "Invoice Reconciliation",
    "Invoice Number Normalization",
    "Tax Difference Detection",
    "Reconciliation Results",
    "Exception Center",
    "Exception Classification",
    "Exception Status Management",
    "Exception History",
    "Cross-Month Tracker",
    "Found Later Tracking",
    "Follow-Up Workflow",
    "Duplicate Exception Protection",
    "Excel Reconciliation Reports",
  ],

  future: [
    "Advanced GST Matching Rules",
    "Credit / Debit Note Reconciliation",
    "Amendment Tracking",
    "Advanced GST Monthly Reports",
    "PDF Reconciliation Reports",
    "Automated GST Data Import",
    "Advanced Exception Analytics",
    "Audit Trail Enhancements",
    "User & Role Management",
    "Multi-Tenant SaaS Architecture",
  ],

  gallery: [
    "projects/gstreco/gstRecoDashboard.jpeg",
    "projects/gstreco/gstRecoUploadPage.jpeg",
    "projects/gstreco/gstRecoUploadHistoryPage.jpeg",
    "projects/gstreco/gstRecoHistoryPage.jpeg",
    "projects/gstreco/gstRecoExceptionPage.jpeg",
    "projects/gstreco/gstRecoCrossMonthTrackerPage.jpeg",
    "projects/gstreco/gstRecoCrossMonthTrackerDetails.jpeg",
    "projects/gstreco/gstRecoCrossMonthTrackerDetails1.jpeg",
  ],
},

  {
    id: 5,
    slug: "dispatch-dashboard",
    featured: false,
    category: "Dashboard",
    icon: FaChartLine,

    title: "Dispatch Dashboard",
    subtitle: "Textile Dispatch Management System",

    image: "projects/dispatchDashboard/disaptchDashboard.jpeg",

    description:
      "A business dashboard designed to manage textile dispatch operations, order information, packing workflows, and operational reporting.",

    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],

    frontend: "React + Tailwind CSS",
    backend: "Node.js + Express",
    database: "MongoDB",

    status: "in-development",
    statusLabel: "Backend Ready • Frontend In Development",

    industry: "Textile",
    duration: "Development Project",
    teamSize: "1 Developer",
    type: "Business Dashboard",
    availability: "Completed",

    live: "#",
    github: "#",

    executiveSummary:
      "A textile-focused dispatch management dashboard designed to organize order, packing, dispatch, and operational reporting workflows.",

    problem:
      "Textile dispatch operations can involve multiple stages including orders, production, packing, dispatch records, and reporting, making manual tracking difficult.",

    solution:
      "A centralized business dashboard that brings dispatch-related workflows into a structured digital system.",

    objectives: [
      "Centralize dispatch information",
      "Improve order-to-dispatch visibility",
      "Structure packing and dispatch workflows",
      "Reduce manual operational tracking",
      "Provide business reporting capabilities",
    ],

    problemPoints: [
      {
        title: "Multiple Workflow Stages",
        desc: "Orders move through production, packing, and dispatch stages.",
      },
      {
        title: "Manual Tracking",
        desc: "Manual records make it harder to identify current dispatch status.",
      },
      {
        title: "Reporting",
        desc: "Business users need a central place to review operational information.",
      },
    ],

    security: [
      "Protected Backend APIs",
      "Validated Business Data",
      "Controlled Access to Operational Records",
    ],

    performance: [
      "Reusable Dashboard Components",
      "Modular API Architecture",
      "Responsive UI",
      "Structured Data Queries",
    ],

    results: [
      "Dispatch dashboard completed",
      "Operational workflow digitized",
      "Centralized dispatch information",
      "Reporting foundation implemented",
    ],

    features: [
      "Dashboard",
      "Order Management",
      "Production Entry",
      "Packing Entry",
      "Dispatch Entry",
      "Reports",
      "Business Records",
    ],

    future: [
      "Advanced Analytics",
      "PDF Reports",
      "WhatsApp Notifications",
      "Barcode Integration",
      "Mobile-Friendly Operations",
    ],

    gallery: [
      "projects/dispatchDashboard/disaptchDashboard.jpeg",
      "projects/dispatchDashboard/dispatchDashboardReport.jpeg",
      
    ],
  },

  // =========================================================
  // CURRENTLY BUILDING
  // =========================================================

  {
    id: 6,
    slug: "sharda-vidyapith",
    featured: false,
    category: "Education",
    icon: FaGraduationCap,

    title: "Sharda Vidyapith ERP & LMS",
    subtitle: "School Website with ERP & Learning Management System",

    image: "projects/shardaVidyapith/schoolHomePage.jpg",

    description:
      "A school technology platform with a completed public website and an ERP/LMS platform currently under development.",

    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],

    frontend: "React + Vite + TypeScript",
    backend: "Node.js + Express",
    database: "MongoDB",

    status: "live-in-development",
    statusLabel: "Website Live • LMS In Development",

    industry: "Education",
    duration: "Ongoing",
    teamSize: "1 Developer",
    type: "ERP + LMS",
    availability: "Website Live",

    live: "#",
    github: "#",

    executiveSummary:
      "A school technology platform combining a public institutional website with an expanding ERP and Learning Management System.",

    problem:
      "Schools need both a professional digital presence and centralized systems for managing academic, administrative, and learning workflows.",

    solution:
      "A modular school platform beginning with the public website and expanding into ERP and LMS functionality.",

    objectives: [
      "Deliver a professional school website",
      "Build a scalable ERP foundation",
      "Develop an integrated LMS",
      "Centralize school workflows",
      "Provide role-based access for different users",
    ],

    problemPoints: [
      {
        title: "Digital Presence",
        desc: "Schools need a modern responsive website for students, parents, and visitors.",
      },
      {
        title: "Fragmented Operations",
        desc: "Academic and administrative processes can be distributed across separate systems.",
      },
      {
        title: "Learning Management",
        desc: "Students and teachers need a centralized digital learning environment.",
      },
    ],

    security: [
      "JWT Authentication Architecture",
      "Role-Based Access Control",
      "Protected API Routes",
      "Validated Form Workflows",
    ],

    performance: [
      "React + Vite",
      "Lazy-Loaded Application Modules",
      "TanStack Query Data Management",
      "Reusable UI Components",
    ],

    results: [
      "Public school website completed",
      "Website deployed",
      "ERP architecture being developed",
      "LMS development in progress",
    ],

    features: [
      "School Website",
      "Admissions Information",
      "School Information Pages",
      "ERP Foundation",
      "Authentication",
      "LMS Foundation",
    ],

    future: [
      "Student Management",
      "Teacher Management",
      "Attendance",
      "Courses",
      "Assignments",
      "Examinations",
      "Parent Portal",
      "Complete LMS",
    ],

    gallery: ["projects/shardaVidyapith/schoolHomePage.jpg",
              "projects/shardaVidyapith/about.jpg",
              "projects/shardaVidyapith/admission.jpg", 
              "projects/shardaVidyapith/contact.jpg",
              "projects/shardaVidyapith/gallery.jpg",
              "projects/shardaVidyapith/result.jpg",
              "projects/shardaVidyapith/adminDashboard.jpg",
            ],
  },

  // =========================================================

  {
    id: 7,
    slug: "tax-erp-pro",
    featured: false,
    category: "ERP",
    icon: FaFileInvoiceDollar,

    title: "Tax ERP Pro",
    subtitle: "Tax, Accounting & Business ERP Platform",

    image: "projects/etaxpro/taxproDashboard.jpeg",

    description:
      "A production-oriented tax and accounting ERP platform with the backend foundation completed and frontend ERP modules currently under development.",

    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Zustand",
      "TanStack Query",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
    ],

    frontend: "React + Vite + TypeScript",
    backend: "Node.js + Express + TypeScript",
    database: "MongoDB + Mongoose",

    status: "in-development",
    statusLabel: "Backend Ready • Frontend In Development",

    industry: "Accounting / ERP",
    duration: "Ongoing",
    teamSize: "1 Developer",
    type: "ERP SaaS",
    availability: "In Development",

    live: "#",
    github: "#",

    executiveSummary:
      "A production-oriented ERP SaaS platform designed around tax, accounting, organization management, customers, sales, purchases, and business operations.",

    problem:
      "Businesses and accounting teams need a centralized system for managing organizational context, customers, sales, purchases, accounting workflows, and tax-related operations.",

    solution:
      "A modular ERP architecture built with a backend-first approach, with organization and accounting foundations being expanded into a complete business management platform.",

    objectives: [
      "Build a scalable ERP foundation",
      "Support multiple companies and organizational contexts",
      "Centralize customer and transaction data",
      "Build sales and purchase workflows",
      "Create a secure role-based ERP environment",
    ],

    problemPoints: [
      {
        title: "Multiple Companies",
        desc: "Business users may need to work with multiple companies from one account.",
      },
      {
        title: "Complex ERP Context",
        desc: "Companies, branches, financial years, employees, roles, and permissions require structured relationships.",
      },
      {
        title: "Accounting Workflows",
        desc: "Sales, purchases, customers, and accounting operations need a unified system.",
      },
    ],

    security: [
      "JWT Authentication",
      "Access & Refresh Token Architecture",
      "Role-Based Authorization",
      "Protected API Routes",
      "Rate Limiting",
      "Input Validation",
    ],

    performance: [
      "TanStack Query",
      "MongoDB / Mongoose",
      "Modular Express Architecture",
      "Reusable TypeScript Services",
    ],

    results: [
      "Backend foundation completed",
      "Authentication foundation implemented",
      "Organization and ERP context architecture established",
      "Customer and transaction modules under development",
      "Frontend ERP development in progress",
    ],

    features: [
      "Authentication",
      "Organization Management",
      "Company Management",
      "Branch Context",
      "Financial Year",
      "Customer Management",
      "Sales Foundation",
      "Purchase Foundation",
      "Role & Permission Architecture",
    ],

    future: [
      "Complete Accounting Module",
      "GST Workflows",
      "Inventory",
      "Reports",
      "Advanced Role Management",
      "Financial Statements",
      "Complete ERP Dashboard",
    ],

    gallery: ["projects/etaxpro/taxproDashboard.jpeg",
              "projects/etaxpro/taxproCompanyPage.jpeg", 
              "projects/etaxpro/taxproFyearPage.jpeg", 
              "projects/etaxpro/taxproCompanyCreation.jpeg",
              "projects/etaxpro/taxproFyearCreation.jpeg"
            ],
  },

  // =========================================================

  
];

export const projectStats = [
  { value: "4", label: "Completed Projects" },
  { value: "3", label: "Projects In Development" },
  { value: "7", label: "Business Applications" },
  { value: "1", label: "Developer" },
];

export const globalTech = [
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "Vite",
  "JWT",
  "TanStack Query",
  "Chart.js",
];


