import { Link, useLocation } from "react-router-dom";
import { mobileNavItems } from "./mobile-nav";
import { cn } from "@/lib/utils";

export function MobileBottomNav() {
  const { pathname } = useLocation();

  return (
    <nav
      className="mobile-bottom-nav fixed inset-x-0 bottom-0 z-50 md:hidden"
      aria-label="Primary mobile navigation"
    >
      <div className="mobile-bottom-nav-inner mx-auto max-w-lg px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <div className="mobile-bottom-nav-bar flex items-stretch justify-around gap-1 rounded-2xl border border-border/70 bg-surface/90 px-1 py-1.5 shadow-[0_-8px_32px_-8px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          {mobileNavItems.map(({ to, label, Icon, match }) => {
            const active = match(pathname);
            return (
              <Link
                key={to}
                to={to}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "mobile-nav-item relative flex min-h-12 min-w-[3.5rem] flex-1 flex-col items-center justify-center gap-1.5 rounded-xl px-1 py-2 text-[10px] font-medium transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-90",
                  active
                    ? "bg-primary/12 text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <Icon
                  className={cn("h-5.5 w-5.5 shrink-0 transition-transform duration-300", active && "text-primary scale-105")}
                  strokeWidth={active ? 2.25 : 2}
                  aria-hidden
                />
                <span className="truncate leading-none font-sans font-medium">{label}</span>
                {active && (
                  <span
                    className="absolute -top-px h-0.5 w-8 rounded-full bg-primary shadow-[0_0_10px_var(--color-primary)]"
                    aria-hidden
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
