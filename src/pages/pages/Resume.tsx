import { Helmet } from "react-helmet-async";
import { Section } from "@/components/Section";
import { MobileSkillsAccordion } from "@/components/mobile/MobileSkillsAccordion";
import {
  profile,
  skills,
  certifications,
  education,
  experience,
} from "@/data/portfolio";
import { Download, Mail, Linkedin, Github } from "lucide-react";

export default function ResumePage() {
  return (
    <>
      <Helmet>
        <title>Resume — Vishwa Kumar</title>

        <meta
          name="description"
          content="Resume of Vishwa Kumar: SOC Analyst & DFIR — skills, certifications, education, experience, and projects."
        />

        <meta property="og:title" content="Resume — Vishwa Kumar" />

        <meta
          property="og:description"
          content="Download resume, view skills, certifications, education and experience."
        />

        <meta property="og:url" content="/resume" />

        <link rel="canonical" href="/resume" />
      </Helmet>

      <Section
        eyebrow="resume"
        title="Resume"
        description={profile.shortBio}
      >
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mb-10">
          <a
            href={profile.links.resume}
            download
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90 active:scale-[0.98] glow-primary sm:rounded-md sm:py-2.5"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </a>

          <a
            href={profile.links.email}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-surface/60 px-4 py-3 text-sm transition hover:bg-surface-elevated active:scale-[0.98] sm:rounded-md sm:py-2.5"
          >
            <Mail className="h-4 w-4" />
            Email me
          </a>

          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-surface/60 px-4 py-3 text-sm transition hover:bg-surface-elevated active:scale-[0.98] sm:rounded-md sm:py-2.5"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>

          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-surface/60 px-4 py-3 text-sm transition hover:bg-surface-elevated active:scale-[0.98] sm:rounded-md sm:py-2.5"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>

        {/* Mobile: collapsible skills */}
        <div className="mb-8 md:hidden">
          <h2 className="mb-4 font-display text-lg font-semibold">Skills</h2>
          <MobileSkillsAccordion />
        </div>

        <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-10">
          {/* Left: skills + certs — desktop */}
          <aside className="hidden space-y-8 md:block">
            <Card title="Skills">
              <div className="space-y-4">
                {Object.entries(skills).map(([group, items]) => (
                  <div key={group}>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70">
                      {group}
                    </p>

                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {items.map((s) => (
                        <span
                          key={s}
                          className="rounded-md border border-border bg-surface-elevated/60 px-2 py-1 text-xs"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card title="Certifications">
              <ul className="space-y-2 text-sm text-foreground/90">
                {certifications.map((c) => (
                  <li key={c} className="flex gap-2 break-words">
                    <span className="text-primary">›</span>
                    {c}
                  </li>
                ))}
              </ul>
            </Card>

            <Card title="Education">
              {education.map((e) => (
                <div key={e.school}>
                  <p className="font-medium">{e.school}</p>
                  <p className="text-sm text-muted-foreground">{e.degree}</p>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    {e.period}
                  </p>
                </div>
              ))}
            </Card>
          </aside>

          {/* Mobile: certs + education cards */}
          <div className="flex flex-col gap-4 md:hidden">
            <Card title="Certifications">
              <ul className="space-y-3 text-sm text-foreground/90">
                {certifications.map((c) => (
                  <li key={c} className="flex gap-2 break-words">
                    <span className="text-primary">›</span>
                    {c}
                  </li>
                ))}
              </ul>
            </Card>
            <Card title="Education">
              {education.map((e) => (
                <div key={e.school}>
                  <p className="font-medium break-words">{e.school}</p>
                  <p className="text-sm text-muted-foreground break-words">{e.degree}</p>
                  <p className="mt-1 font-mono text-xs text-primary">{e.period}</p>
                </div>
              ))}
            </Card>
          </div>

          {/* Right: experience */}
          <div>
            <Card title="Experience">
              <ol className="relative space-y-8 border-l border-border/60 pl-5 md:pl-6">
                {experience.map((x) => (
                  <li
                    key={x.role + x.company}
                    className="relative"
                  >
                    <span className="absolute -left-[23px] top-1.5 h-2.5 w-2.5 rounded-full border border-primary bg-background md:-left-[27px]" />

                    <p className="font-mono text-[11px] uppercase tracking-wider text-primary">
                      {x.period}
                    </p>

                    <p className="mt-1 font-display text-lg font-semibold break-words">
                      {x.role}
                    </p>

                    <p className="text-sm text-muted-foreground break-words">
                      {x.company} · {x.location}
                    </p>

                    <ul className="mt-3 space-y-2 text-sm text-foreground/90">
                      {x.bullets.map((b, i) => (
                        <li key={i} className="flex gap-2 break-words">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border/70 bg-surface/70 p-5 shadow-md md:glass md:rounded-xl md:p-6 md:shadow-none">
      <h2 className="font-display text-lg font-semibold">
        {title}
      </h2>

      <div className="mt-4">{children}</div>
    </div>
  );
}