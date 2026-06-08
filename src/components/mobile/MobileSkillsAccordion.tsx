import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { skills } from "@/data/portfolio";
import { Shield, Terminal, Code, Search, type LucideIcon } from "lucide-react";

const skillGroupIcons: Record<string, LucideIcon> = {
  "Security Operations": Shield,
  "Tools & Technologies": Terminal,
  "Languages & Scripting": Code,
  "Threat & Forensics": Search,
};

const defaultIcon = Shield;

export function MobileSkillsAccordion() {
  const groups = Object.entries(skills);

  return (
    <div className="md:hidden">
      <Accordion
        type="multiple"
        defaultValue={[groups[0]?.[0] ?? ""]}
        className="space-y-3"
      >
        {groups.map(([group, items]) => {
          const GroupIcon = skillGroupIcons[group] ?? defaultIcon;
          return (
            <AccordionItem
              key={group}
              value={group}
              className="mobile-skill-group overflow-hidden rounded-2xl border border-border/60 bg-surface/40 px-4 shadow-sm data-[state=open]:border-primary/45 data-[state=open]:bg-surface-elevated/75 data-[state=open]:shadow-md transition-all duration-300"
            >
              <AccordionTrigger className="min-h-[3.5rem] py-3 font-display text-sm font-semibold hover:no-underline [&>svg]:text-primary text-left">
                <span className="flex items-center gap-2.5">
                  <span className="grid h-8 w-8 place-items-center rounded-lg border border-border/40 bg-surface-elevated/80 text-primary">
                    <GroupIcon className="h-4 w-4" />
                  </span>
                  <span>
                    {group}
                    <span className="ml-1.5 font-mono text-[10px] font-normal text-muted-foreground">
                      ({items.length})
                    </span>
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap gap-1.5 pb-3.5 pt-2 border-t border-border/25">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border/50 bg-surface-elevated/40 px-2.5 py-1.5 text-xs text-foreground/90 font-mono"
                    >
                      <span className="h-1 w-1 rounded-full bg-primary animate-pulse" />
                      {skill}
                    </span>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}

