"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { CountUpNumber } from "@/components/shared/count-up-number";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { IMPACT_STATS } from "@/lib/constants";

export function ImpactBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <SectionWrapper className="bg-secondary border-y border-primary/10">
      <p className="eyebrow text-center mb-8">BY THE NUMBERS</p>
      <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {IMPACT_STATS.map((stat) => (
          <div key={stat.label}>
            <hr className="border-primary/30 mb-4 mx-auto w-12" />
            <p className="text-3xl md:text-4xl font-heading font-bold text-primary">
              {"prefix" in stat && stat.prefix}
              <CountUpNumber target={stat.value} duration={2000} />
              {stat.value > 1000 ? "+" : ""}
            </p>
            {/* Progress bar */}
            <div className="mx-auto mt-3 h-0.5 w-16 bg-border rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-[2000ms] ease-out"
                style={{ width: isInView ? "100%" : "0%" }}
              />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
