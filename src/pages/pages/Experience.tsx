import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Section } from "@/components/Section";
import { experience, education, certifications } from "@/data/portfolio";
import {
  Briefcase,
  GraduationCap,
  Award,
  ArrowRight,
} from "lucide-react";

const roleColors: Record<string, string> = {
  "Summer Intern": "text-cyan-400",
  "Machine Learning Intern": "text-violet-400",
  "Offensive Cyber Security Intern": "text-rose-400",
};

export default function ExperiencePage() {
  return (
    <>
      <Helmet>
        <title>Experience — V. Vishwa Kumar</title>
        <meta
          name="description"
          content="Work experience, education, and certifications of Vishwa Kumar — SOC Analyst & DFIR Enthusiast."
        />
        <meta property="og:title" content="Experience — V. Vishwa Kumar" />
        <meta
          property="og:description"
          content="Internships, education, and certifications in security operations and DFIR."
        />
        <meta property="og:url" content="/experience" />
        <link rel="canonical" href="/experience" />
      </Helmet>

      <Section
        eyebrow="experience"
        title="Where I've worked & learned"
        description="Internships, education, and certifications that shaped my security operations mindset."
      >
        {/* Experience Timeline */}
        <div className="mb-14">
          <div className="mb-6 flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-primary" />
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Work Experience
            </h2>
          </div>

          <ol className="relative space-y-0 border-l border-border/50">
            {experience.map((x, i) => (
              <li
                key={x.role + x.company}
                className="relative pb-10 pl-8 last:pb-0"
              >
                <span className="absolute -left-[9px] top-1.5 flex h-[18px] w-[18px] items-center justify-center rounded-full border border-primary/50 bg-background">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </span>

                <div className="rounded-2xl border border-border/60 bg-surface/40 p-5 shadow-sm transition-all duration-300 hover:border-primary/45 active:scale-[0.995] md:glass md:rounded-xl md:p-6 md:shadow-none">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p
                        className={`font-mono text-[11px] uppercase tracking-wider ${
                          roleColors[x.role] ?? "text-primary"
                        }`}
                      >
                        {x.period}
                      </p>

                      <p className="mt-1.5 font-display text-xl font-semibold">
                        {x.role}
                      </p>

                      <p className="text-sm text-muted-foreground">
                        {x.company} ·{" "}
                        <span className="font-mono text-xs">
                          {x.location}
                        </span>
                      </p>
                    </div>

                    <span className="rounded-full border border-border bg-surface-elevated px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {i === 0 ? "current" : "completed"}
                    </span>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {x.bullets.map((b, idx) => (
                      <li
                        key={idx}
                        className="flex gap-3 text-sm text-foreground/85"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Education + Certs */}
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-primary" />
              <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Education
              </h2>
            </div>

            <div className="rounded-2xl border border-border/60 bg-surface/40 p-5 shadow-sm transition-all duration-300 hover:border-primary/45 active:scale-[0.995] md:glass md:rounded-xl md:p-6 md:shadow-none">
              {education.map((e) => (
                <div key={e.school} className="space-y-1">
                  <p className="font-display text-base font-semibold">
                    {e.school}
                  </p>
                  <p className="text-sm text-muted-foreground">{e.degree}</p>
                  <p className="font-mono text-xs text-primary">
                    {e.period}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6 flex items-center gap-2">
              <Award className="h-4 w-4 text-primary" />
              <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Certifications
              </h2>
            </div>

            <div className="rounded-2xl border border-border/60 bg-surface/40 p-5 shadow-sm transition-all duration-300 hover:border-primary/45 active:scale-[0.995] md:glass md:rounded-xl md:p-6 md:shadow-none">
              <ul className="space-y-3">
                {certifications.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-3 text-sm text-foreground/90"
                  >
                    <span className="mt-0.5 text-primary">›</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-14">
          <Link
            to="/projects"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90 active:scale-[0.98] glow-primary sm:rounded-md sm:py-2.5"
          >
            View Projects
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            to="/resume"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-surface/60 px-4 py-3 text-sm transition hover:bg-surface-elevated active:scale-[0.98] sm:rounded-md sm:py-2.5"
          >
            Full Resume & Download
          </Link>
        </div>
      </Section>
    </>
  );
}