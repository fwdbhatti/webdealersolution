"use client";

import { CountUpNumber } from "@/components/shared/count-up-number";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { IMPACT_STATS } from "@/lib/constants";

export function ImpactBanner() {
  return (
    <SectionWrapper className="bg-primary-dark">
      <p className="eyebrow text-center mb-8">BY THE NUMBERS</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {IMPACT_STATS.map((stat) => (
          <div key={stat.label}>
            <hr className="border-primary/30 mb-4 mx-auto w-12" />
            <p className="text-3xl md:text-4xl font-heading font-bold text-primary">
              {"prefix" in stat && stat.prefix}
              <CountUpNumber target={stat.value} duration={2000} />
              {stat.value > 1000 ? "+" : ""}
            </p>
            <hr className="border-primary/30 mt-4 mb-3 mx-auto w-12" />
            <p className="text-sm text-white/70">{stat.label}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
