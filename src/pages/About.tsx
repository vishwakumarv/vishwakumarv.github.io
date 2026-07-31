import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Section } from "@/components/Section";
import { profile } from "@/data/portfolio";
import avatarAsset from "@/assets/avatar.png";

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

      <Section eyebrow="about" title="Security research, malware analysis, and digital forensics">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <div className="flex flex-col gap-6">
            <div className="glass rounded-3xl border border-border bg-surface/80 p-6 shadow-sm md:p-8">
              <div className="flex items-start gap-5">
                <img
                  src={avatarAsset}
                  alt={`${profile.name} avatar`}
                  className="h-32 w-32 rounded-3xl border border-border object-cover shadow-2xl"
                />
                <div className="min-w-0">
                  <p className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    {profile.name}
                  </p>
                  <p className="mt-2 text-sm font-medium text-foreground/90">
                    {profile.title}
                  </p>
                  <p className="mt-4 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                    {profile.location}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-surface-elevated"
                >
                  Project case studies
                </Link>
                <Link
                  to="/resume"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-surface-elevated"
                >
                  Resume
                </Link>
                <a
                  href={profile.links.writeups}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-surface-elevated"
                >
                  Writeups archive ↗
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4 rounded-3xl border border-border bg-surface/80 p-6 text-sm leading-relaxed text-muted-foreground shadow-sm md:p-8 md:text-base">
              <p className="text-foreground/90">
                I'm a security researcher focused on vulnerability assessment and research,
                malware analysis, and digital forensics. My work centers on understanding
                how systems fail, how tradecraft evolves, and how findings can be documented
                in a way that is actionable for defenders and peers.
              </p>

              <p>
                I work primarily in Linux environments, document investigations as structured
                case studies, and participate in CTFs and labs across web, OSINT, reverse
                engineering, and forensics. I value clear research, reliable evidence handling,
                and practical analysis that can be reproduced and built on.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {pillars.map((p) => (
                <div key={p.label} className="glass rounded-3xl border border-border p-5 shadow-sm">
                  <p className="font-display text-sm font-semibold text-foreground">
                    {p.label}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}