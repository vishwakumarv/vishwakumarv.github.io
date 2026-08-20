import { Link } from "react-router-dom";
import { profile } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-[#000000]">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-10">
        <div className="mb-8 flex flex-col gap-5 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-success"><span className="scan-dot" /> signal still active</p>
            <p className="mt-4 font-display text-3xl font-semibold tracking-tight">Keep looking closer.</p>
          </div>
          <a href={profile.links.email} className="group inline-flex items-center gap-2 border border-primary px-3 py-2 text-xs font-semibold text-primary transition duration-200 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground">Start a conversation <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" /></a>
        </div>
        <div className="grid gap-8 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="font-display text-base font-semibold">{profile.name}</p>
            <p className="mt-2 max-w-xs text-xs leading-5 text-muted-foreground">{profile.title}</p>
          </div>
          <nav className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-3">
            <Link to="/about" className="text-muted-foreground transition duration-200 hover:translate-x-1 hover:text-foreground">About</Link>
            <Link to="/experience" className="text-muted-foreground transition duration-200 hover:translate-x-1 hover:text-foreground">Experience</Link>
            <Link to="/projects" className="text-muted-foreground transition duration-200 hover:translate-x-1 hover:text-foreground">Projects</Link>
            <Link to="/writeups" className="text-muted-foreground transition duration-200 hover:translate-x-1 hover:text-foreground">Writeups</Link>
            <Link to="/resume" className="text-muted-foreground transition duration-200 hover:translate-x-1 hover:text-foreground">Resume</Link>
            <Link to="/contact" className="text-muted-foreground transition duration-200 hover:translate-x-1 hover:text-foreground">Contact</Link>
          </nav>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-4 font-mono text-[10px] uppercase tracking-widest text-tertiary sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} / {profile.location}</span>
          <span>built for careful readers</span>
        </div>
      </div>
    </footer>
  );
}
