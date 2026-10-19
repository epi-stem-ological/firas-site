import { Icons } from "@/components/icons";
import { BriefcaseBusiness, HomeIcon, MailIcon } from "lucide-react";
import type { ReactNode } from "react";

type Hackathon = {
  title: string;
  dates: string;
  location: string;
  description: string;
  image?: string;
  links?: readonly {
    title: string;
    icon: ReactNode;
    href: string;
  }[];
};

export const DATA = {
  name: "Firas Freajah",
  initials: "FF",
  url: "https://firasfreajah.com",
  location: "New York, NY",
  locationLink: "https://www.google.com/maps/place/New+York,+NY",
  description:
    "Technology solutions leader with CISSP credentials, focused on enterprise IT, AI adoption, cloud infrastructure, and event-critical operations.",
  summary:
    "I lead technology strategy and operations in complex enterprise environments, with a focus on reliable infrastructure, AI and automation governance, cloud modernization, service delivery, and revenue-aligned technology solutions. My work has included large-scale event technology, cybersecurity and cloud programs, executive stakeholder alignment, KPI-driven operations, and cross-functional delivery across IT, sales, finance, and operations.",
  avatarUrl: "/me.jpg",
  impact: [
    {
      value: "$9M",
      label: "annual growth from technology go-to-market strategy",
    },
    {
      value: "15%",
      label: "year-over-year revenue lift for technology solutions",
    },
    {
      value: "100+",
      label: "major events supported with resilient operations each year",
    },
    {
      value: "10+",
      label: "years leading enterprise technology",
    },
  ],
  focusAreas: [
    "Enterprise IT strategy",
    "AI governance and adoption",
    "Event-critical infrastructure",
    "Cloud and cybersecurity programs",
  ],
  skills: [
    "Enterprise technology strategy",
    "AI adoption and governance",
    "Hybrid cloud and modernization",
    "Network and infrastructure resilience",
    "Cybersecurity and risk",
    "Data governance",
    "Revenue-generating technology services",
    "Portfolio and change management",
  ],
  certifications: [
    "Certified Information Systems Security Professional (CISSP)",
    "Cisco Certified Network Associate (CCNA)",
    "CompTIA Security+",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/#work", icon: BriefcaseBusiness, label: "Work" },
    { href: "/#contact", icon: MailIcon, label: "Contact" },
  ],
  contact: {
    tel: "",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/111freajah/",
        icon: Icons.linkedin,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Jacob K. Javits Convention Center",
      href: "https://javitscenter.com",
      badges: [],
      location: "New York, NY",
      title: "Senior Director of Technology Solutions",
      logoUrl: "",
      start: "Jan 2024",
      end: "Present",
      description:
        "Leading in-house and guest-facing technology systems across infrastructure, applications, technology sales, support operations, data governance, and emerging AI tools. Delivered a 15% year-over-year revenue increase, approximately $9M in annual growth, through new go-to-market strategies for IT solutions in partnership with executive leadership.",
    },
    {
      company: "Thrive Networks, Inc.",
      href: "https://thrivenetworks.com",
      badges: [],
      location: "New York, NY",
      title: "Senior Project Manager",
      logoUrl: "",
      start: "Nov 2022",
      end: "Jan 2024",
      description:
        "Directed strategic IT projects including cloud migrations, cybersecurity enhancements, and global network optimization. Coordinated engineering, sales, and operations teams to deliver complex client implementations on time and above expectation.",
    },
    {
      company: "Jacob K. Javits Convention Center",
      href: "https://javitscenter.com",
      badges: [],
      location: "New York, NY",
      title: "Manager of IT & Enterprise Project Manager",
      logoUrl: "",
      start: "Sept 2018",
      end: "Nov 2023",
      description:
        "Managed cross-departmental IT programs aligned with sales and operational goals, producing a 20% customer satisfaction improvement. Improved policies and procedures, and mobilized teams and systems for 100+ major events each year.",
    },
    {
      company: "Jacob K. Javits Convention Center",
      href: "https://javitscenter.com",
      badges: [],
      location: "New York, NY",
      title: "Network Engineer & Technology Solutions Business Analyst",
      logoUrl: "",
      start: "Sept 2015",
      end: "Sept 2018",
      description:
        "Designed and deployed Cisco-based network infrastructure, served as a senior escalation point for complex network issues, and partnered with sales and project management teams on tailored technology solutions that contributed to a 25% increase in project win rates.",
    },
  ],
  education: [
    {
      school: "University of South Carolina, Moore School of Business",
      href: "https://sc.edu/study/colleges_schools/moore/",
      degree: "B.S. in Business Administration",
      logoUrl: "",
      start: "2009",
      end: "2013",
    },
    {
      school: "The Wharton School, University of Pennsylvania",
      href: "https://www.wharton.upenn.edu/",
      degree: "Fintech Revolution Certificate",
      logoUrl: "",
      start: "2022",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Enterprise Technology Strategy",
      href: "",
      dates: "Executive leadership",
      active: true,
      description:
        "Translates executive strategy into measurable technology programs across infrastructure, service delivery, systems management, and organizational capability building.",
      technologies: ["Strategy", "Budgeting", "KPIs", "Change Management"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "AI and Automation Adoption",
      href: "",
      dates: "Current focus",
      active: true,
      description:
        "Leads practical AI adoption with governance, prioritization, training, and use cases that improve productivity, customer experience, and operational responsiveness.",
      technologies: ["Governance", "Training"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Event-Critical Infrastructure",
      href: "",
      dates: "Large-scale operations",
      active: true,
      description:
        "Oversees resilient infrastructure and support processes for high-demand convention center operations, including staff, exhibitors, attendees, partners, and revenue-generating technology services.",
      technologies: ["Reliability", "Infrastructure", "Operations"],
      links: [],
      image: "",
      video: "",
    },
  ],
  languages: ["English", "Spanish", "Arabic"],
  hackathons: [] as Hackathon[],
} as const;
