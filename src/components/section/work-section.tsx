/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DATA } from "@/data/resume";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);
  const initials = alt
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  if (!src || imageError) {
    return (
      <div className="flex size-10 flex-none items-center justify-center rounded-lg border border-border bg-background text-xs font-semibold shadow-sm ring-1 ring-border md:size-12">
        {initials}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="size-10 flex-none overflow-hidden rounded-lg border border-border object-contain p-1 shadow-sm ring-1 ring-border md:size-12"
      onError={() => setImageError(true)}
    />
  );
}

export default function WorkSection() {
  return (
    <Accordion type="single" collapsible className="w-full grid gap-3">
      {DATA.work.map((work) => {
        const itemKey = `${work.company}-${work.title}-${work.start}`;

        return (
          <AccordionItem
            key={itemKey}
            value={itemKey}
            className="w-full rounded-lg border border-border bg-background/70 p-3 transition-all duration-300 hover:border-foreground/25 hover:shadow-lg hover:shadow-foreground/5"
          >
            <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
              <div className="flex items-center gap-x-3 justify-between w-full text-left">
                <div className="flex items-center gap-x-3 flex-1 min-w-0">
                  <LogoImage src={work.logoUrl} alt={work.company} />
                  <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                    <div className="font-semibold leading-none flex items-center gap-2">
                      {work.company}
                      <span className="relative inline-flex items-center w-3.5 h-3.5">
                        <ChevronRight
                          className={cn(
                            "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-300 ease-out",
                            "translate-x-0 opacity-0",
                            "group-hover:translate-x-1 group-hover:opacity-100",
                            "group-data-[state=open]:opacity-0 group-data-[state=open]:translate-x-0"
                          )}
                        />
                        <ChevronDown
                          className={cn(
                            "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-200",
                            "opacity-0 rotate-0",
                            "group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180"
                          )}
                        />
                      </span>
                    </div>
                    <div className="font-sans text-sm text-muted-foreground">
                      {work.title}
                    </div>
                    <div className="text-xs tabular-nums text-muted-foreground sm:hidden">
                      {work.start} - {work.end ?? "Present"}
                    </div>
                  </div>
                </div>
                <div className="hidden items-center gap-1 text-right text-xs tabular-nums text-muted-foreground sm:flex sm:flex-none">
                  <span>
                    {work.start} - {work.end ?? "Present"}
                  </span>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="ml-0 p-0 pt-3 text-xs text-muted-foreground sm:ml-[60px] sm:text-sm">
              <div className="border-t border-border pt-3 leading-6">
                {work.description}
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

