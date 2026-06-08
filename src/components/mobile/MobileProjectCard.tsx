import { Link } from "react-router-dom";
import { ArrowRight, Github, Shield, Smartphone, Cpu } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const projectThemes: Record<
  string,
  { gradient: string; Icon: typeof Shield; accent: string }
> = {
  deadpixel: {
    gradient: "from-cyan-500/25 via-primary/20 to-blue-600/10",
    Icon: Shield,
    accent: "text-cyan-400",
  },
  "redroid-ai": {
    gradient: "from-violet-500/25 via-purple-500/15 to-fuchsia-600/10",
    Icon: Smartphone,
    accent: "text-violet-400",
  },
  pubot: {
    gradient: "from-emerald-500/20 via-primary/15 to-teal-600/10",
    Icon: Cpu,
    accent: "text-emerald-400",
  },
};

const defaultTheme = {
  gradient: "from-primary/25 via-primary/10 to-transparent",
  Icon: Shield,
  accent: "text-primary",
};

function DeadpixelVisual() {
  return (
    <div className="w-full h-full p-4 flex flex-col justify-between font-mono text-[9px] text-cyan-400 select-none overflow-hidden relative">
      <div className="flex items-center justify-between border-b border-white/10 pb-1.5 opacity-80">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-rose-500/80" />
          <span className="h-2 w-2 rounded-full bg-amber-500/80" />
          <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
          <span className="text-[8px] text-muted-foreground ml-1">deadpixel_v1.0.sh</span>
        </div>
        <span className="text-[8px] text-muted-foreground">TUNNEL: ACTIVE</span>
      </div>
      <div className="flex-1 pt-2 space-y-1 opacity-90 leading-tight">
        <div><span className="text-muted-foreground">$</span> ./deadpixel --simulate --template o365</div>
        <div className="text-emerald-400">[+] Tunnel established: https://login.secure-verify.cf</div>
        <div className="text-amber-400 animate-pulse">[!] Hooked listener: waiting for exfil...</div>
        <div className="text-rose-400">[ALERT] Target exfiltrated POST credentials</div>
        <div className="text-cyan-300">  └─ User: adm_vishwa · Pass: **********</div>
      </div>
      <div className="absolute right-3 bottom-3 opacity-15">
        <svg viewBox="0 0 24 24" className="h-16 w-16" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      </div>
    </div>
  );
}

function RedroidVisual() {
  return (
    <div className="w-full h-full p-4 flex flex-col justify-between font-mono text-[9px] text-violet-400 select-none overflow-hidden relative">
      <div className="flex items-center justify-between border-b border-white/10 pb-1.5 opacity-80">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-rose-500/80" />
          <span className="h-2 w-2 rounded-full bg-amber-500/80" />
          <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
          <span className="text-[8px] text-muted-foreground ml-1">redroid_parser.py</span>
        </div>
        <span className="text-[8px] text-muted-foreground">APK: DANGER</span>
      </div>
      <div className="flex-1 pt-2 space-y-1 opacity-90 leading-normal">
        <div className="text-muted-foreground text-[8px]">Analyzing: malshare_sample_492.apk</div>
        <div className="flex items-center justify-between text-[8px]">
          <span>AndroidManifest.xml:</span>
          <span className="text-rose-400 font-bold px-1 rounded bg-rose-500/10">3 HEURISTICS</span>
        </div>
        <div className="grid grid-cols-2 gap-x-2 gap-y-0.5 pt-1 text-[8px]">
          <div className="flex items-center gap-1 text-rose-300">
            <span className="h-1 w-1 rounded-full bg-rose-500" />
            READ_SMS (Dangerous)
          </div>
          <div className="flex items-center gap-1 text-rose-300">
            <span className="h-1 w-1 rounded-full bg-rose-500" />
            SYSTEM_ALERT (Overlay)
          </div>
        </div>
        <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden mt-1">
          <div className="bg-violet-500 h-full w-[85%] animate-pulse" />
        </div>
      </div>
      <div className="absolute right-3 bottom-3 opacity-15">
        <svg viewBox="0 0 24 24" className="h-16 w-16" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <path d="M12 18h.01" />
        </svg>
      </div>
    </div>
  );
}

function PubotVisual() {
  return (
    <div className="w-full h-full p-4 flex flex-col justify-between font-mono text-[9px] text-emerald-400 select-none overflow-hidden relative">
      <div className="flex items-center justify-between border-b border-white/10 pb-1.5 opacity-80">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-rose-500/80" />
          <span className="h-2 w-2 rounded-full bg-amber-500/80" />
          <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
          <span className="text-[8px] text-muted-foreground ml-1">rpi_control.py</span>
        </div>
        <span className="text-[8px] text-muted-foreground">GPIO: UP</span>
      </div>
      <div className="flex-1 pt-2 grid grid-cols-[1.5fr_1fr] gap-2 items-center opacity-90 leading-tight">
        <div className="space-y-1">
          <div>$ systemctl status pubot</div>
          <div className="text-emerald-400 flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
            active (running)
          </div>
          <div className="text-muted-foreground text-[8px]">
            Ping: 42cm | Speed: 80%
          </div>
        </div>
        <div className="grid grid-cols-4 gap-0.5 p-1 bg-black/35 rounded border border-white/5">
          {[1,2,3,4,5,6,7,8].map((i) => (
            <span
              key={i}
              className={cn(
                "h-1.5 w-1.5 rounded-sm border border-white/5",
                i === 3 || i === 7 ? "bg-emerald-500/80" : "bg-white/5"
              )}
            />
          ))}
        </div>
      </div>
      <div className="absolute right-3 bottom-3 opacity-15">
        <svg viewBox="0 0 24 24" className="h-16 w-16" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="2" y="2" width="20" height="20" rx="2" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      </div>
    </div>
  );
}

function DefaultVisual({ period }: { period: string }) {
  return (
    <div className="relative flex flex-col items-center gap-2">
      <span className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-background/40 backdrop-blur-sm shadow-sm">
        <Shield className="h-6 w-6 text-primary" aria-hidden />
      </span>
      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
        {period}
      </span>
    </div>
  );
}

type MobileProjectCardProps = {
  project: Project;
  compact?: boolean;
  className?: string;
};

export function MobileProjectCard({ project, compact = false, className }: MobileProjectCardProps) {
  const theme = projectThemes[project.slug] ?? defaultTheme;

  return (
    <article
      className={cn(
        "mobile-project-card group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-surface/40 shadow-md transition-all duration-300 active:scale-[0.985] active:border-primary/30",
        className,
      )}
    >
      <div
        className={cn(
          "relative flex aspect-[16/9] items-center justify-center bg-gradient-to-br overflow-hidden border-b border-border/40",
          theme.gradient,
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06),transparent_50%)]" />
        
        {project.slug === "deadpixel" && <DeadpixelVisual />}
        {project.slug === "redroid-ai" && <RedroidVisual />}
        {project.slug === "pubot" && <PubotVisual />}
        {project.slug !== "deadpixel" && project.slug !== "redroid-ai" && project.slug !== "pubot" && (
          <DefaultVisual period={project.period} />
        )}
      </div>


      <div className={cn("flex flex-1 flex-col p-4", compact ? "gap-2" : "gap-4")}>
        <div>
          <h3 className="font-display text-lg font-semibold leading-tight break-words text-foreground">
            {project.name}
          </h3>
          <p className="mt-1.5 text-sm text-muted-foreground leading-normal break-words">
            {project.tagline}
          </p>
        </div>

        {!compact && (
          <p className="text-sm text-foreground/80 leading-relaxed break-words font-sans">
            {project.problem}
          </p>
        )}

        <div className="flex flex-wrap gap-1.5 pt-0.5">
          {project.tags.slice(0, compact ? 3 : 4).map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-border/50 bg-surface-elevated/40 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-2 pt-2">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:opacity-90 active:scale-[0.97] glow-primary"
          >
            Case Study
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <a
            href="https://github.com/vishwakumarv"
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.name} on GitHub`}
            className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-xl border border-border/80 bg-surface/60 text-muted-foreground transition-all duration-200 hover:border-primary/40 hover:text-primary active:scale-[0.97]"
          >
            <Github className="h-4.5 w-4.5" aria-hidden />
          </a>
        </div>
      </div>
    </article>
  );
}
