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
    description: "Blue-team mindset, Linux daily driver, continuous learning.",
    to: "/about",
    Icon: User,
    preview:
      "Final-year engineering student preparing for SOC, DFIR, and Security Operations roles.",
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
    description: "Flagship case studies — DEADPIXEL, ReDroid-AI, PuBOT.",
    to: "/projects",
    Icon: FolderKanban,
    preview: "Phishing simulation, Android static analysis, embedded Linux telemetry.",
  },
  {
    id: "skills",
    title: "Skills",
    description: "SOC operations, tools, languages, and forensics.",
    to: "/resume",
    Icon: FileText,
    preview: "Alert triage, detection engineering, malware analysis, Python & Bash.",
  },
  {
    id: "certifications",
    title: "Certifications",
    description: "Professional training and assessments.",
    to: "/experience",
    Icon: Briefcase,
    preview: "Android Bug Bounty Hunting, Cybersecurity Assessment, BASH Training.",
  },
  {
    id: "contact",
    title: "Contact",
    description: "Email, LinkedIn, and security platform profiles.",
    to: "/contact",
    Icon: Mail,
    preview: "Open to SOC, DFIR, and Security Operations roles — remote or relocation.",
  },
];
