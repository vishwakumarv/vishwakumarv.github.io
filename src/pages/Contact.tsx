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
  ArrowUpRight,
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

      <Section eyebrow="contact / open-channel" title="Send a signal." description="For SOC, DFIR, detection engineering, or security operations roles, email is the most direct route.">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div className="border-t border-primary pt-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-success">channel ready</p>
            <h2 className="mt-5 max-w-md font-display text-4xl font-semibold tracking-tight sm:text-5xl">Let’s make the next investigation clearer.</h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">Open to security research, SOC, DFIR, detection engineering, and carefully scoped collaboration.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={profile.links.email} className="inline-flex items-center gap-2 bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"><Mail className="h-4 w-4" /> {profile.email}</a>
              <button onClick={copy} className="inline-flex items-center gap-2 border border-border px-4 py-3 text-xs text-muted-foreground hover:text-foreground">
                {copied ? <Check className="h-3.5 w-3.5 text-success" /> : <Copy className="h-3.5 w-3.5" />} {copied ? "copied" : "copy address"}
              </button>
            </div>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-widest text-tertiary">response window: &lt; 24h</p>
          </div>

          <div className="border-y border-border">
            <div className="flex items-center justify-between border-b border-border px-1 py-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">relay directory</p>
              <span className="font-mono text-[10px] text-success">06 channels</span>
            </div>
            <ul className="divide-y divide-border/60">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between py-4 text-sm transition hover:text-primary"
                  >
                    <span className="inline-flex items-center gap-3">
                      <span className="grid h-8 w-8 place-items-center border border-border bg-[#000000] text-muted-foreground group-hover:border-primary group-hover:text-primary">
                        {c.icon}
                      </span>
                      <span>{c.label}</span>
                    </span>

                    <span className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
                      @{c.value}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}