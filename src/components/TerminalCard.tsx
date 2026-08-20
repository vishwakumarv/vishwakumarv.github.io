import { type ReactNode } from "react";
import { motion } from "motion/react";

type Props = {
  title?: string;
  className?: string;
  children: ReactNode;
};

export function TerminalCard({ title = "shell — vishwa@research", className = "", children }: Props) {
  return (
    <motion.div
      className={`glass overflow-hidden rounded-xl ${className}`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="flex items-center gap-2 border-b border-border/60 bg-surface-elevated/50 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-critical/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted/80" />
        <span className="ml-2 font-mono text-[11px] text-muted-foreground">{title}</span>
      </div>
      <div className="p-4 font-mono text-[13px] leading-relaxed text-foreground/90">{children}</div>
    </motion.div>
  );
}
