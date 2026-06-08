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
        <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-12">
          <div className="flex flex-col items-center gap-6 md:items-start">
            <img
              src={avatarAsset}
              alt={`${profile.name} avatar`}
              className="h-44 w-44 rounded-3xl border border-border object-cover shadow-lg md:h-40 md:w-40 md:rounded-2xl md:shadow-none"
            />
            <div className="text-center md:text-left">
              <p className="font-display text-xl font-semibold">
                {profile.name}
              </p>
              <p className="text-sm text-muted-foreground">
                {profile.title}
              </p>
              <p className="mt-2 font-mono text-xs text-muted-foreground">
                {profile.location}
              </p>
            </div>

            <div className="flex w-full flex-col gap-2 text-sm md:space-y-2">
              <Link
                to="/projects"
                className="flex min-h-11 items-center justify-center rounded-xl border border-border bg-surface/60 px-4 py-2.5 text-primary transition active:scale-[0.98] hover:bg-surface-elevated md:block md:min-h-0 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:hover:underline"
              >
                → Project case studies
              </Link>

              <Link
                to="/resume"
                className="flex min-h-11 items-center justify-center rounded-xl border border-border bg-surface/60 px-4 py-2.5 text-primary transition active:scale-[0.98] hover:bg-surface-elevated md:block md:min-h-0 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:hover:underline"
              >
                → Resume
              </Link>

              <a
                href={profile.links.writeups}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-11 items-center justify-center rounded-xl border border-border bg-surface/60 px-4 py-2.5 text-primary transition active:scale-[0.98] hover:bg-surface-elevated md:block md:min-h-0 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:hover:underline"
              >
                → Writeups archive ↗
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-foreground/90 leading-relaxed">
              I'm a final-year engineering student at PSG College of Technology
              preparing for SOC, DFIR, and Security Operations roles. My work
              centers on three things: monitoring, investigation, and the small
              automations that make both faster.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              I run Linux daily, document everything I touch as a case study,
              and participate in CTFs across web, OSINT, and forensics to keep
              an attacker's perspective fresh. I'm interested in detection
              engineering, malware triage, and the boring-but-critical
              reliability work that holds a security program together.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {pillars.map((p) => (
                <div key={p.label} className="rounded-2xl border border-border/70 bg-surface/70 p-5 shadow-md md:glass md:rounded-xl md:shadow-none">
                  <p className="font-display text-sm font-semibold">
                    {p.label}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
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