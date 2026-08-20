import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Section } from "@/components/Section";
import { TerminalCard } from "@/components/TerminalCard";
import { certifications, experience, profile, recruiterSnapshot } from "@/data/portfolio";
import {
  ArrowRight,
  Download,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  ShieldCheck,
  Terminal,
  Search,
  FileText,
  GitBranch,
  Bot,
  Award,
} from "lucide-react";

const snapshotIcons = [ShieldCheck, Terminal, Search, FileText, GitBranch, Bot];

const credibilityBadges = ["Vulnerability Research", "Malware Analysis", "Digital Forensics"];
const typingLines = [
  "researching Windows internals",
  "tracing malware behavior",
  "documenting evidence for defenders",
];

function ResearchTicker() {
  const [lineIndex, setLineIndex] = useState(0);
  const [visibleText, setVisibleText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = typingLines[lineIndex];
    const isComplete = visibleText === target;
    const isEmpty = visibleText.length === 0;
    const delay = isComplete ? 1800 : isEmpty && deleting ? 450 : deleting ? 34 : 58;

    const timer = window.setTimeout(() => {
      if (isComplete) {
        setDeleting(true);
      } else if (isEmpty && deleting) {
        setDeleting(false);
        setLineIndex((current) => (current + 1) % typingLines.length);
      } else {
        setVisibleText((current) => deleting ? current.slice(0, -1) : target.slice(0, current.length + 1));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deleting, lineIndex, visibleText]);

  return <span className="typing-effect">{visibleText}<span className="typing-cursor" aria-hidden="true" /></span>;
}

export default function Home() {
  return (
    <>
    <Helmet>
  <title>V. Vishwa Kumar — Security Researcher Portfolio</title>

  <meta
    name="description"
    content="Security researcher portfolio focused on vulnerability assessment, malware analysis, and digital forensics."
  />

  <meta
    property="og:title"
    content="V. Vishwa Kumar — Security Researcher Portfolio"
  />

  <meta
    property="og:description"
    content="Vulnerability research, malware analysis, and digital forensics — projects, writeups, and resume."
  />

  <meta property="og:url" content="/" />

  <link rel="canonical" href="/" />
</Helmet>
      {/* HERO */}
      <section className="relative overflow-hidden amoled-hero border-b border-border/60">
        <div className="absolute inset-0 pointer-events-none">
          <div className="hidden sm:block absolute left-[-14%] top-16 h-72 w-72 rounded-full bg-white/[0.025] blur-3xl" />
          <div className="hidden sm:block absolute right-[-18%] top-10 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 pb-14 pt-14 sm:px-6 sm:pb-20 sm:pt-20 md:px-0 md:pb-28 md:pt-28">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 items-center">
            <div className="min-w-0 rounded-[2rem] sm:rounded-[2.5rem] bg-transparent p-6 sm:p-8 order-1 w-full lg:order-none">
              <p className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/70 px-3 py-1.5 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-success animate-pulse" /> research · tooling · writeups
              </p>

              <div className="mt-6 text-center sm:text-left">
                <div className="w-full">
                  <h1 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl md:text-7xl">
                    <span className="text-gradient">V. Vishwa Kumar</span>
                  </h1>

                  <p className="mt-2 mx-auto max-w-xl text-base font-medium leading-7 text-foreground/80 sm:mx-0 sm:max-w-none sm:text-lg md:text-xl">
                    Security researcher and vulnerability researcher focused on Windows internals, malware analysis, and exploit research.
                  </p>

                  <p className="mt-3 mx-auto max-w-xl text-[11px] uppercase tracking-[0.28em] text-muted-foreground sm:mx-0 sm:max-w-none">
                    <span className="font-mono"><span className="text-success">$</span> <ResearchTicker /></span>
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link to="/writeups" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl amoled-flat-button px-5 py-3 text-sm font-semibold sm:w-auto">
                  View Writeups <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={profile.links.resume} download className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl border border-border bg-surface/80 px-5 py-3 text-sm font-medium sm:w-auto">
                  <Download className="h-4 w-4" /> Download Resume
                </a>
                <Link to="/contact" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl border border-border bg-surface/80 px-5 py-3 text-sm font-medium sm:w-auto">
                  Get in touch <Mail className="h-4 w-4" />
                </Link>
              </div>

              <p className="mt-8 text-sm text-muted-foreground max-w-xl">Focused on practical, reproducible vulnerability research — writeups, analysis tooling, and technical artifacts.</p>
            </div>

            <div className="min-w-0 grid gap-5 order-2 lg:order-none w-full">
              <div className="hero-panel min-w-0 w-full rounded-[1.25rem] p-5 sm:rounded-[1.5rem] sm:p-6">
                <div className="mb-4 flex items-center justify-between rounded-full bg-transparent px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  <span className="inline-flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-success animate-pulse" /> TERMINAL
                  </span>
                  <span className="rounded-full border border-white/8 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">local</span>
                </div>

                <motion.div
                  className="rounded-[1.25rem] bg-[#000000] p-5 text-sm font-mono leading-7 text-foreground border border-white/10 shadow-[0_24px_80px_-40px_rgba(57,211,83,0.3)]"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                  transition={{ duration: 4, delay: 0.15, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
                >
                  <pre className="whitespace-pre-wrap break-words text-[13px] text-foreground/90">
  {`$ cat whoami.md
  Name: V. Vishwa Kumar
  Title: Security Researcher — Vulnerability Research, Malware Analysis
  Location: India
  Contact: vkumxr@proton.me
  `}
                  </pre>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-surface/25">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-12 md:py-10">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">proof_of_work</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-balance">Grounded in hands-on security work.</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
              Current research, practical training, and documented analysis shape the work behind this portfolio.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="border-l border-primary/60 pl-4">
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Current role</p>
              <p className="mt-1 text-sm font-semibold">{experience.find((item) => item.current)?.role ?? "Security Research"}</p>
              <p className="mt-1 text-xs text-muted-foreground">Bugcrowd · vulnerability research</p>
            </div>
            <div className="border-l border-primary/60 pl-4">
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Training</p>
              <div className="mt-1 space-y-1">
                {certifications.map((certification) => (
                  <p key={certification} className="flex gap-2 text-xs text-foreground/90">
                    <Award className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    <span>{certification}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECRUITER SNAPSHOT */}
      <Section
        eyebrow="recruiter_snapshot"
        title="Research profile"
        description="A quick-read view of the skills and working habits behind my security research."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {recruiterSnapshot.map((item, i) => {
            const Icon = snapshotIcons[i % snapshotIcons.length];
            return (
              <motion.div
                key={item.label}
                className="group section-card rounded-3xl p-6 transition hover:border-border"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: i * 0.05, ease: "easeOut" }}
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-md border border-border bg-surface-elevated text-muted-foreground">
                    <Icon className="h-4 w-4" />
                  </span>
                  <p className="font-display text-sm font-semibold">{item.label}</p>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{item.value}</p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <Section className="!py-10 md:!py-16">
        <div className="section-card overflow-hidden rounded-[2.25rem] p-8 md:p-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">next_step</p>
              <h2 className="mt-2 font-display text-2xl font-semibold md:text-3xl">
                Looking for a research-minded security collaborator?
              </h2>
              <p className="mt-2 text-sm text-muted-foreground md:text-base">
                Resume, writeups, and project deep-dives are one click away.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={profile.links.resume} download className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 glow-primary">
                <Download className="h-4 w-4" /> Resume (PDF)
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-4 py-2.5 text-sm hover:bg-surface-elevated">
                <Mail className="h-4 w-4" /> Get in touch
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function CredibilityBadges() {
  return (
    <ul
      className="mt-2.5 flex max-w-full flex-wrap items-center gap-x-2 gap-y-1.5 md:mt-3 md:flex-nowrap md:gap-2.5"
      aria-label="Credentials"
    >
      {credibilityBadges.map((badge) => (
        <li
          key={badge}
          className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-border/70 bg-surface/40 px-2.5 py-0.5 font-mono text-[10px] leading-tight text-muted-foreground/85 sm:text-[11px]"
        >
          <span className="h-1 w-1 flex-shrink-0 rounded-full bg-muted" aria-hidden />
          {badge}
        </li>
      ))}
    </ul>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70">{label}</dt>
      <dd className="mt-0.5 text-sm text-foreground/90">{children}</dd>
    </div>
  );
}

function SocialPill({ href, icon, children }: { href: string; icon?: React.ReactNode; children: React.ReactNode }) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
    >
      {icon}
      {children}
      {isExternal && <ExternalLink className="h-3 w-3 opacity-60" />}
    </a>
  );
}

function Line({ children, prompt, tone }: { children: React.ReactNode; prompt?: boolean; tone?: "success" }) {
  return (
    <div className={tone === "success" ? "text-success" : ""}>
      {prompt && <span className="text-success">$ </span>}
      {!prompt && <span className="text-muted-foreground">› </span>}
      <span>{children}</span>
    </div>
  );
}
