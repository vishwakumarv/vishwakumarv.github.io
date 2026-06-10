import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Section } from "@/components/Section";

const categories = ["ctf", "hackthebox", "tryhackme"] as const;
const categoryLabels: Record<typeof categories[number], string> = {
  ctf: "CTF Writeups",
  hackthebox: "HackTheBox",
  tryhackme: "TryHackMe",
};

const categoryDescriptions: Record<typeof categories[number], string> = {
  ctf: "Explore capture-the-flag writeups covering cryptography, web exploitation, forensics, and binary challenges.",
  hackthebox: "Browse HackTheBox writeups for exploitation, privilege escalation, and lab analysis.",
  tryhackme: "Browse TryHackMe writeups for defensive analysis, web labs, and practical exercises.",
};

function getCategoryLabel(category: string) {
  return categoryLabels[category as keyof typeof categoryLabels] ?? category;
}

export default function WriteupsLanding() {
  const mobileContainerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = mobileContainerRef.current;
    if (!container) return;

    const items = Array.from(container.querySelectorAll('[data-snap-item]')) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const idx = items.indexOf(entry.target as HTMLElement);
            if (idx >= 0) setActiveIndex(idx);
          }
        });
      },
      { root: container, threshold: 0.6 }
    );

    items.forEach((it) => io.observe(it));
    return () => io.disconnect();
  }, []);

  function scrollToIndex(index: number) {
    const container = mobileContainerRef.current;
    if (!container) return;
    const child = container.querySelectorAll('[data-snap-item]')[index] as HTMLElement | undefined;
    child?.scrollIntoView({ behavior: 'smooth', inline: 'center' });
  }

  return (
    <Section
      eyebrow="Writeups"
      title="Writeups"
      description="Choose a writeup category to explore detailed challenge walkthroughs and analysis."
    >
      <div className="hidden gap-6 md:grid md:grid-cols-3 mb-8">
        {categories.map((category) => (
          <Link
            key={category}
            to={`/writeups/${category}`}
            className="glass group flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-surface-elevated p-8 transition hover:border-primary/60 hover:bg-surface/80"
          >
            <div>
              <h2 className="text-2xl font-semibold text-foreground">
                {getCategoryLabel(category)}
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {categoryDescriptions[category]}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="md:hidden mb-8">
        <div className="relative">
          <div
            ref={mobileContainerRef}
            className="mx-auto flex gap-4 overflow-x-auto px-4 snap-x snap-mandatory touch-pan-x scrollbar-hide"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {categories.map((category) => (
              <Link
                key={category}
                to={`/writeups/${category}`}
                data-snap-item
                className="snap-center flex-shrink-0 w-[90vw] max-w-[480px] glass group flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-surface-elevated p-6 transition hover:border-primary/60 hover:bg-surface/80"
              >
                <div className="flex flex-col gap-4 h-full">
                  <div>
                    <h2 className="text-2xl font-semibold text-foreground">
                      {getCategoryLabel(category)}
                    </h2>
                  </div>
                  <p className="text-sm leading-6 text-muted-foreground">{categoryDescriptions[category]}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-4 flex justify-center gap-2">
            {categories.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition ${i === activeIndex ? "w-6 bg-primary" : "w-2 bg-border"}`}
                onClick={() => scrollToIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
