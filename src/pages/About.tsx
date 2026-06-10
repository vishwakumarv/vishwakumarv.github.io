import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Section } from "@/components/Section";
import { profile } from "@/data/portfolio";
import avatarAsset from "@/assets/avatar.png";

const pillars = [
  {
    label: "Security Operations Mindset",
    body:
      "I think in terms of alerts, timelines, and evidence. A finding without a timeline and a recommendation is unfinished work.",
  },
  {
    label: "Linux as a Daily Driver",
    body:
      "Linux is my main environment — shell, services, logs. The compound interest of journalctl and tmux discipline shows up in every investigation.",
  },
  {
    label: "Security Research",
    body:
      "I study attacker tradecraft (web, OSINT, mobile, reverse engineering) so the defenses I build are grounded in how breaches actually happen.",
  },
  {
    label: "Incident Response Interest",
    body:
      "I treat side projects like engagements: scope, evidence, findings, recommendations, lessons learned. Documentation is part of the work.",
  },
  {
    label: "Continuous Learning",
    body:
      "CTFs, lab builds, writeups, and reading. The bar isn't completing a course — it's being able to teach the topic back as a case study.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About — V. Vishwa Kumar</title>
        <meta
          name="description"
          content="About Vishwa Kumar — security operations mindset, Linux environments, security research, and incident response interest."
        />
        <meta property="og:title" content="About — V. Vishwa Kumar" />
        <meta
          property="og:description"
          content="Security operations mindset and continuous learning."
        />
        <meta property="og:url" content="/about" />
        <link rel="canonical" href="/about" />
      </Helmet>

      <Section eyebrow="about" title="A blue-team mindset, in practice">
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
                I'm a final-year engineering student at PSG College of Technology
                preparing for SOC, DFIR, and Security Operations roles. My work
                centers on three things: monitoring, investigation, and the small
                automations that make both faster.
              </p>

              <p>
                I run Linux daily, document everything I touch as a case study,
                and participate in CTFs across web, OSINT, and forensics to keep
                an attacker's perspective fresh. I'm interested in detection
                engineering, malware triage, and the boring-but-critical
                reliability work that holds a security program together.
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