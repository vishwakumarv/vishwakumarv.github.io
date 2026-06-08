import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type MobileSectionCardProps = {
  title: string;
  description: string;
  to: string;
  Icon: LucideIcon;
  preview?: string;
  defaultOpen?: boolean;
};

export function MobileSectionCard({
  title,
  description,
  to,
  Icon,
  preview,
  defaultOpen = false,
}: MobileSectionCardProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className={cn(
        "mobile-section-card relative overflow-hidden rounded-2xl border transition-all duration-300 ease-out",
        open
          ? "border-primary/45 bg-surface-elevated/80 shadow-[0_12px_36px_-12px_color-mix(in_oklab,var(--color-primary)_25%,transparent)]"
          : "border-border/60 bg-surface/40 shadow-sm",
      )}
    >
      {/* Glow highlight line */}
      {open && (
        <span className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20" aria-hidden />
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={cn(
          "flex w-full min-h-[5rem] items-center gap-4 p-4 text-left transition-colors duration-200 active:bg-surface-elevated/45",
          open && "pb-2",
        )}
      >
        <span className={cn(
          "grid h-12 w-12 shrink-0 place-items-center rounded-xl border transition-all duration-300 shadow-sm",
          open
            ? "border-primary/30 bg-primary/10 text-primary scale-105"
            : "border-border/60 bg-surface-elevated/80 text-muted-foreground",
        )}>
          <Icon className="h-5.5 w-5.5" aria-hidden />
        </span>
        <span className="min-w-0 flex-1">
          <span className={cn(
            "block font-display text-base font-semibold transition-colors duration-200",
            open ? "text-primary" : "text-foreground",
          )}>
            {title}
          </span>
          <span className="mt-1 block text-sm text-muted-foreground/90 line-clamp-1 leading-normal break-words">
            {description}
          </span>
        </span>
        <span className={cn(
          "grid h-8 w-8 place-items-center rounded-full bg-surface-elevated/50 border border-border/40 text-muted-foreground transition-all duration-300",
          open && "bg-primary/10 border-primary/25 text-primary rotate-180",
        )}>
          <ChevronDown className="h-4.5 w-4.5" aria-hidden />
        </span>
      </button>

      <div
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <div className="border-t border-border/25 px-4 pb-4 pt-3 ml-1.5">
            {preview && (
              <p className="text-sm leading-relaxed text-foreground/85 break-words pl-1 font-sans">
                {preview}
              </p>
            )}
            <Link
              to={to}
              className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:opacity-90 active:scale-[0.97] glow-primary"
            >
              Open {title}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

