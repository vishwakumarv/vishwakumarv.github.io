import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Section } from "@/components/Section";
import { certifications, education, experience, profile } from "@/data/portfolio";
import { ArrowUpRight, Award, BriefcaseBusiness, Crosshair, FileSearch, GraduationCap, ScanLine } from "lucide-react";

const pillars = [
  {
    label: "Vulnerability Assessment",
    body:
      "I focus on identifying weaknesses, validating findings, and documenting them with clear impact, reproduction steps, and remediation guidance.",
  },
  {
    label: "Malware Analysis",
    body:
      "I examine binaries, behavior, and indicators to understand capabilities, persistence, and the tradecraft behind real samples.",
  },
  {
    label: "Digital Forensics",
    body:
      "I build timelines, recover artifacts, and preserve evidence in a way that supports both incident response and research workflows.",
  },
  {
    label: "Threat Research",
    body:
      "I study attacker behavior across web, OSINT, mobile, and reverse engineering so my work stays grounded in real-world TTPs.",
  },
  {
    label: "Technical Writing",
    body:
      "Research is only useful when it can be replicated, explained, and reused by others. I treat writeups as part of the analysis itself.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About — V. Vishwa Kumar</title>
        <meta
          name="description"
          content="About Vishwa Kumar — vulnerability assessment and research, malware analysis, and digital forensics."
        />
        <meta property="og:title" content="About — V. Vishwa Kumar" />
        <meta
          property="og:description"
          content="Vulnerability research, malware analysis, and digital forensics in practice."
        />
        <meta property="og:url" content="/about" />
        <link rel="canonical" href="/about" />
      </Helmet>

      <Section eyebrow="about / field-notes" title="A research practice built for evidence." description="A concise view of what I study, how I work, and the training behind it.">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <aside className="border-t border-border pt-6">
            <div>
              <p className="font-display text-xl font-semibold">{profile.name}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-success">available / {profile.location}</p>
            </div>
            <p className="mt-8 max-w-xs text-sm leading-7 text-muted-foreground">{profile.summary}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              <Link to="/resume" className="inline-flex items-center gap-2 bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground">Resume <ArrowUpRight className="h-3.5 w-3.5" /></Link>
              <Link to="/contact" className="inline-flex items-center gap-2 border border-border px-3 py-2 text-xs text-muted-foreground hover:text-foreground">Contact <ArrowUpRight className="h-3.5 w-3.5" /></Link>
            </div>
            <div className="mt-10 space-y-5 border-t border-border pt-6">
              <div className="flex gap-3">
                <BriefcaseBusiness className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Current work</p>
                  <p className="mt-1 text-sm font-medium">{experience.find((item) => item.current)?.role}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{experience.find((item) => item.current)?.company}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Education</p>
                  <p className="mt-1 text-sm font-medium">{education[0].school}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{education[0].degree}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Award className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Certifications</p>
                  <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
                    {certifications.map((certification) => <li key={certification}>{certification}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </aside>

          <div>
            <div className="mb-12 max-w-2xl border-l border-primary pl-5 text-lg leading-8 text-foreground/90 md:text-2xl md:leading-10">
              I study how systems fail, how tradecraft evolves, and how technical findings become useful to the people defending those systems.
            </div>
            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
              {pillars.map((p, index) => (
                <article key={p.label} className="group border-t border-border pt-4">
                  <div className="mb-5 flex items-center justify-between text-muted-foreground">
                    <span className="font-mono text-[10px]">0{index + 1}</span>
                    {index % 3 === 0 ? <Crosshair className="h-4 w-4" /> : index % 3 === 1 ? <FileSearch className="h-4 w-4" /> : <ScanLine className="h-4 w-4" />}
                  </div>
                  <h2 className="font-display text-base font-semibold">{p.label}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{p.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
