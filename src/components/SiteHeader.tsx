import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Download, Menu, X, Shield } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
   { to: "/writeups", label: "Writeups" }, 
  //{ to: "/resume", label: "Resume" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.64 7.584H.474l8.6-9.83L0 1.153h7.594l5.243 6.932L18.901 1.153zm-1.29 19.494h2.04L6.486 3.24H4.298L17.611 20.647z" />
    </svg>
  );
}

const socials = [
  { label: "GitHub", href: "https://github.com/vishwakumarv", Icon: GithubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vishwakumarv", Icon: LinkedinIcon },
  { label: "Twitter", href: "https://x.com/vishwakumarv_", Icon: XIcon },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="border-b border-border/60 bg-[#000000]/95 backdrop-blur-xl">
        <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
          <Link
            to="/"
            className="group flex items-center gap-2 font-display text-sm font-semibold tracking-tight"
          >
            <span className="grid h-7 w-7 place-items-center rounded-md border border-border bg-surface-elevated text-primary">
              <Shield className="h-3.5 w-3.5" />
            </span>
            <span>
              vishwa<span className="text-primary">@</span>kali
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`group relative rounded-md px-3 py-1.5 text-sm transition-all duration-200 hover:-translate-y-0.5 ${
                  isActive(item.to)
                    ? "text-foreground after:absolute after:inset-x-3 after:-bottom-[1.15rem] after:h-0.5 after:bg-primary after:transition-all after:duration-300"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-7 w-7 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Icon />
              </a>
            ))}

            <a
              href="/resume.pdf"
              download
              aria-label="Download resume"
              title="Download resume"
              className="ml-1 grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground transition duration-200 hover:-translate-y-0.5 hover:opacity-90"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-md border border-border bg-[#000000] p-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-border/60 md:hidden">
            <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-2 text-sm transition-all duration-200 ${
                    isActive(item.to)
                      ? "bg-surface-elevated text-foreground"
                      : "text-muted-foreground hover:translate-x-1 hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-2 flex gap-2">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="grid h-8 w-8 place-items-center rounded-md border border-border text-muted-foreground hover:text-primary"
                  >
                    <Icon />
                  </a>
                ))}
              </div>

              <a
                href="/resume.pdf"
                download
                className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground"
              >
                Download Resume
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}