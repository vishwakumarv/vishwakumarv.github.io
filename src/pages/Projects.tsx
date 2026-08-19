import { Helmet } from "react-helmet-async";
import { Section } from "@/components/Section";
import { ExternalLink, GitBranch, Terminal } from "lucide-react";

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
        className="!py-10 md:!py-14"
        eyebrow="projects"
        title="Projects are being rebuilt"
        description="The project archive is being reworked into a cleaner collection of focused case studies."
      >
        <div className="relative overflow-hidden border border-border bg-[#000000] p-6 sm:p-8 md:p-10">
          <div className="absolute right-6 top-6 text-success/30 sm:right-8 sm:top-8">
            <Terminal className="h-14 w-14 sm:h-16 sm:w-16" strokeWidth={1} />
          </div>
          <div className="relative max-w-2xl">
            <div className="mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-2 w-2 animate-pulse rounded-full bg-success" /> archive_status: rebuilding
            </div>
            <GitBranch className="mb-4 h-7 w-7 text-primary" />
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">This section is under development.</h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
              The public project archive is being reorganized. In the meantime, browse the latest repositories and experiments on my GitHub profile.
            </p>
            <a
              href="https://github.com/vishwakumarv"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 border border-primary bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Refer to GitHub <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}