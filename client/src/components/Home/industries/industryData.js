import {
  FaIndustry,
  FaSchool,
  FaStore,
  FaTshirt,
  FaTruck,
  FaCloud,
  FaBuilding,
  FaChartPie,
} from "react-icons/fa";

export const industries = [
  {
    icon: FaTshirt,
    title: "Textile Industry",
    description: "ERP, inventory, dispatch, GST and production management.",
    features: ["Inventory", "Dispatch", "GST", "Reports"],
  },
  {
    icon: FaSchool,
    title: "Education",
    description: "Complete School ERP with LMS and parent communication.",
    features: ["Admissions", "Fees", "Attendance", "Exams"],
  },
  {
    icon: FaStore,
    title: "Retail & E-commerce",
    description: "Inventory, orders, CRM and online selling platforms.",
    features: ["Orders", "Products", "Customers", "Payments"],
  },
  {
    icon: FaIndustry,
    title: "Manufacturing",
    description: "Production, inventory and workflow management software.",
    features: ["Production", "Purchase", "QC", "Stock"],
  },
  {
    icon: FaTruck,
    title: "Operations & Dispatch",
    description:
      "Business software for dispatch workflows, tracking and reporting.",
    features: ["Dispatch", "Tracking", "Invoices", "Reports"],
  },
  
  {
    icon: FaBuilding,
    title: "Business Operations",
    description:
      "Custom dashboards and workflow automation for growing businesses.",
    features: ["Workflows", "Dashboards", "Automation", "Reports"],
  },
  {
    icon: FaChartPie,
    title: "Finance & Accounting",
    description: "Accounting, GST and financial reporting software.",
    features: ["GST", "Accounts", "TDS", "Dashboards"],
  },
  {
  icon: FaCloud,
  title: "SaaS & Digital Products",
  description: "Cloud-based SaaS platforms and custom business applications.",
  features: ["SaaS", "APIs", "Dashboards", "Automation"],
},
];
