import { Link } from "react-router-dom";
import { Section } from "@/components/Section";
import { ChevronRight } from "lucide-react";

const categories = ["ctf", "hackthebox", "tryhackme", "cyberdefenders", "hacks"] as const;
const categoryLabels: Record<typeof categories[number], string> = {
  ctf: "CTF Writeups",
  hackthebox: "HackTheBox",
  tryhackme: "TryHackMe",
  cyberdefenders: "CyberDefenders",
  hacks: "Hacks",
};

const categoryDescriptions: Record<typeof categories[number], string> = {
  ctf: "Explore capture-the-flag writeups covering cryptography, web exploitation, forensics, and binary challenges.",
  hackthebox: "Browse HackTheBox writeups for exploitation, privilege escalation, and lab analysis.",
  tryhackme: "Browse TryHackMe writeups for defensive analysis, web labs, and practical exercises.",
  cyberdefenders: "Browse CyberDefenders blue team writeups covering malware analysis, DFIR, and threat hunting.",
  hacks: "Technical hacks, experiments, and misc security notes.",
};

function getCategoryLabel(category: string) {
  return categoryLabels[category as keyof typeof categoryLabels] ?? category;
}

export default function WriteupsLanding() {
  return (
    <Section
      eyebrow="Writeups"
      title="Writeups"
      description="Choose a writeup category to explore detailed challenge walkthroughs and analysis."
      className="writeups-section py-10 sm:py-14 md:py-24"
    >
      <div className="hidden gap-8 md:grid md:grid-cols-1 lg:grid-cols-2">
        {categories.map((category) => (
          <Link
            key={category}
            to={`/writeups/${category}`}
            className="group flex flex-col justify-start overflow-hidden p-6 transition hover:text-primary border border-white/10 rounded-3xl"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.26em] text-muted-foreground">{categoryLabels[category]}</p>
              <h2 className="mt-3 section-heading-gradient text-2xl font-semibold text-foreground">
                {getCategoryLabel(category)}
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {categoryDescriptions[category]}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex flex-col gap-2 md:hidden">
        {categories.map((category) => (
          <Link
            key={category}
            to={`/writeups/${category}`}
            className="group flex items-start justify-between gap-3 overflow-hidden p-4 transition border border-white/10 rounded-lg"
          >
            <div className="min-w-0 flex-1">
              <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">{categoryLabels[category]}</p>
              <h2 className="mt-2 section-heading-gradient text-lg font-semibold leading-snug text-foreground">
                {getCategoryLabel(category)}
              </h2>
              <p className="mt-1.5 text-sm leading-5 text-muted-foreground">
                {categoryDescriptions[category]}
              </p>
            </div>
              <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-foreground" />
          </Link>
        ))}
      </div>
    </Section>
  );
}