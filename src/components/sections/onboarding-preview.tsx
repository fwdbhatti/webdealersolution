"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Search,
  BookOpen,
  CheckCircle2,
  BarChart3,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ONBOARDING_STEPS } from "@/lib/constants";

const ICONS: Record<string, React.ElementType> = {
  Search,
  BookOpen,
  CheckCircle2,
  BarChart3,
};

export function OnboardingPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <SectionWrapper id="process">
      <div className="text-center mb-12">
        <p className="eyebrow mb-4">OUR PROCESS</p>
        <h2 className="text-3xl md:text-4xl font-bold">
          We Don&apos;t Just Plug In. We Become Your Team.
        </h2>
      </div>

      <div ref={ref} className="max-w-3xl mx-auto relative">
        {/* Gold vertical timeline line */}
        <div className="absolute left-7 top-0 bottom-0 w-px bg-primary/20 hidden md:block" />

        <div className="space-y-8">
          {ONBOARDING_STEPS.map((step, i) => {
            const Icon = ICONS[step.icon];
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
                }
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex gap-6 relative"
              >
                <div className="shrink-0 relative z-10">
                  <span className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white font-heading text-xl font-bold shadow-md">
                    {step.number}
                  </span>
                </div>
                <div className="pt-2">
                  <div className="flex items-center gap-2 mb-2">
                    {Icon && (
                      <Icon className="w-5 h-5 text-primary" />
                    )}
                    <h3 className="text-xl font-semibold font-heading">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="text-center mt-12">
        <Button
          asChild
          size="lg"
          className="rounded-xl text-base px-8 h-12 bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
        >
          <Link href="/onboarding">Learn More About Our Process</Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
