import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Section } from "@/components/Section";
import { MobileProjectCard } from "@/components/mobile/MobileProjectCard";
import { projects } from "@/data/portfolio";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects — Vishwa Kumar</title>
        <meta name="description" content="Flagship security projects: phishing simulation, Android static analysis, embedded Linux telemetry." />
        <meta property="og:title" content="Projects — Vishwa Kumar" />
        <meta property="og:description" content="Three security case studies: DEADPIXEL, ReDroid-AI, PuBOT." />
        <meta property="og:url" content="/projects" />
        <link rel="canonical" href="/projects" />
      </Helmet>

      <Section
        eyebrow="projects"
        title="Flagship projects, written as case studies"
        description="Each project follows the same structure: summary, goal, problem solved, tools, methodology, personal contributions, findings, recommendations, skills, and learnings."
      >
        {/* Mobile */}
        <div className="flex flex-col gap-5 md:hidden">
          {projects.map((p) => (
            <MobileProjectCard key={p.slug} project={p} />
          ))}
        </div>

        {/* Desktop — unchanged */}
        <div className="hidden gap-5 md:grid">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              className="group glass grid gap-6 rounded-xl p-6 transition hover:border-primary/50 md:grid-cols-[1fr_1.8fr] md:p-8"
            >
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">{p.period}</p>
                <h2 className="mt-2 font-display text-2xl font-semibold">{p.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-border bg-surface-elevated/60 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <Row label="Problem">{p.problem}</Row>
                <Row label="Solution">{p.solution}</Row>
                <Row label="Security relevance">{p.relevance}</Row>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                    Read case study <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1 sm:grid-cols-[140px_1fr] sm:gap-4">
      <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70">{label}</span>
      <span className="text-foreground/90">{children}</span>
    </div>
  );
}
