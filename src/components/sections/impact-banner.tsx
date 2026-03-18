"use client";

import { SectionWrapper } from "@/components/shared/section-wrapper";
import { CountUpNumber } from "@/components/shared/count-up-number";
import { IMPACT_STATS } from "@/lib/constants";

export function ImpactBanner() {
  return (
    <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border-y border-primary/20">
      <SectionWrapper className="!py-12 md:!py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {IMPACT_STATS.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl md:text-5xl font-heading font-bold text-foreground">
                <CountUpNumber target={stat.value} duration={2000} />
                {stat.value > 1000 ? "+" : ""}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
