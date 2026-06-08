import { Helmet } from "react-helmet-async";
import { Section } from "@/components/Section";
import { profile } from "@/data/portfolio";
import {
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  const channels = [
    {
      label: "LinkedIn",
      value: "vishwakumarv",
      href: profile.links.linkedin,
      icon: <Linkedin className="h-4 w-4" />,
    },
    {
      label: "GitHub",
      value: "vishwakumarv",
      href: profile.links.github,
      icon: <Github className="h-4 w-4" />,
    },
    {
      label: "Bugcrowd",
      value: "vishwakumarv",
      href: profile.links.bugcrowd,
      icon: <ExternalLink className="h-4 w-4" />,
    },
    {
      label: "HackerOne",
      value: "vishwakumarv_",
      href: profile.links.hackerone,
      icon: <ExternalLink className="h-4 w-4" />,
    },
    {
      label: "TryHackMe",
      value: "vishwakumarv",
      href: profile.links.tryhackme,
      icon: <ExternalLink className="h-4 w-4" />,
    },
    {
      label: "Writeups",
      value: "vishwakumarv.github.io",
      href: profile.links.writeups,
      icon: <ExternalLink className="h-4 w-4" />,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact — Vishwa Kumar</title>
        <meta
          name="description"
          content="Get in touch — email, LinkedIn, GitHub, Bugcrowd, HackerOne."
        />
        <meta property="og:title" content="Contact — Vishwa Kumar" />
        <meta
          property="og:description"
          content="Professional contact for SOC, DFIR, and security operations opportunities."
        />
        <meta property="og:url" content="/contact" />
        <link rel="canonical" href="/contact" />
      </Helmet>

      <Section
        eyebrow="contact"
        title="Let's talk"
        description="For SOC, DFIR, detection engineering, or security operations roles — the fastest way to reach me is email or LinkedIn."
      >
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          <div className="rounded-2xl border border-border/70 bg-surface/70 p-5 shadow-md md:glass md:rounded-xl md:p-6 md:shadow-none">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
              primary
            </p>

            <h2 className="mt-2 font-display text-xl font-semibold">
              Email
            </h2>

            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={profile.links.email}
                className="inline-flex min-h-12 items-center justify-center gap-2 break-all rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90 active:scale-[0.98] sm:rounded-md sm:py-2"
              >
                <Mail className="h-4 w-4 shrink-0" />
                {profile.email}
              </a>

              <button
                onClick={copy}
                className="inline-flex min-h-12 items-center justify-center gap-1.5 rounded-xl border border-border bg-surface/60 px-4 py-3 text-xs transition hover:bg-surface-elevated active:scale-[0.98] sm:rounded-md sm:py-2"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-success" />
                    copied
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    copy
                  </>
                )}
              </button>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              Typical response time: within 24 hours.
            </p>
          </div>

          <div className="rounded-2xl border border-border/70 bg-surface/70 p-5 shadow-md md:glass md:rounded-xl md:p-6 md:shadow-none">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
              channels
            </p>

            <h2 className="mt-2 font-display text-xl font-semibold">
              Find me elsewhere
            </h2>

            <ul className="mt-4 divide-y divide-border/60">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex min-h-12 items-center justify-between gap-3 py-3 text-sm transition active:bg-surface-elevated/50 hover:text-primary"
                  >
                    <span className="inline-flex min-w-0 items-center gap-3">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-surface-elevated text-primary md:h-7 md:w-7 md:rounded-md">
                        {c.icon}
                      </span>
                      <span>{c.label}</span>
                    </span>

                    <span className="shrink-0 font-mono text-xs text-muted-foreground">
                      @{c.value}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-border/70 bg-surface/70 p-5 shadow-md md:mt-6 md:glass md:rounded-xl md:p-6 md:shadow-none">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
            recruiter_note
          </p>

          <p className="mt-2 text-sm text-foreground/90">
            Open to SOC Analyst, DFIR Analyst, Detection Engineering, and
            Security Operations roles — full-time starting 2027, internships
            before that. Based in {profile.location}; open to remote and
            relocation.
          </p>
        </div>
      </Section>
    </>
  );
}