import {
  Home,
  FolderKanban,
  Briefcase,
  FileText,
  User,
  Mail,
  type LucideIcon,
} from "lucide-react";

export type MobileNavItem = {
  to: string;
  label: string;
  Icon: LucideIcon;
  match: (pathname: string) => boolean;
};

export const mobileNavItems: MobileNavItem[] = [
  {
    to: "/",
    label: "Home",
    Icon: Home,
    match: (pathname) => pathname === "/",
  },
  {
    to: "/about",
    label: "About",
    Icon: User,
    match: (pathname) => pathname.startsWith("/about"),
  },
  {
    to: "/projects",
    label: "Projects",
    Icon: FolderKanban,
    match: (pathname) => pathname.startsWith("/projects"),
  },
  {
    to: "/experience",
    label: "Experience",
    Icon: Briefcase,
    match: (pathname) => pathname.startsWith("/experience"),
  },
  {
    to: "/writeups",
    label: "Writeups",
    Icon: FileText,
    match: (pathname) => pathname.startsWith("/writeups"),
  },
  {
    to: "/contact",
    label: "Contact",
    Icon: Mail,
    match: (pathname) => pathname.startsWith("/contact"),
  },
];

export type MobileSectionItem = {
  id: string;
  title: string;
  description: string;
  to: string;
  Icon: LucideIcon;
  preview?: string;
};

export const mobileExploreSections: MobileSectionItem[] = [
  {
    id: "about",
    title: "About Me",
    description: "Vulnerability research mindset, Linux daily driver, continuous learning.",
    to: "/about",
    Icon: User,
    preview:
      "Final-year engineering student focused on vulnerability research and security testing.",
  },
  {
    id: "experience",
    title: "Experience",
    description: "Internships, education, and hands-on security work.",
    to: "/experience",
    Icon: Briefcase,
    preview: "IoT testing, ML security workflows, and offensive security internships.",
  },
  {
    id: "projects",
    title: "Projects",
    description: "Security tooling, analysis workflows, and research experiments.",
    to: "/projects",
    Icon: FolderKanban,
    preview: "Vulnerability research tooling, malware analysis, and embedded security work.",
  },
  {
    id: "skills",
    title: "Skills",
    description: "Security testing, analysis tools, languages, and forensics.",
    to: "/resume",
    Icon: FileText,
    preview: "Web testing, vulnerability analysis, malware research, Python & Bash.",
  },
  {
    id: "certifications",
    title: "Certifications",
    description: "Professional training and assessments.",
    to: "/resume",
    Icon: FileText,
    preview: "Android Bug Bounty Hunting and BASH Training from my resume.",
  },
  {
    id: "contact",
    title: "Contact",
    description: "Email, LinkedIn, and security platform profiles.",
    to: "/contact",
    Icon: Mail,
    preview: "Open to vulnerability research, application security, and technical collaboration.",
  },
];
