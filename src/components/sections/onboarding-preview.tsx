"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ONBOARDING_STEPS } from "@/lib/constants";

export function OnboardingPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <SectionWrapper>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          We Don&apos;t Just Plug In. We Become Your Team.
        </h2>
      </div>

      <div ref={ref} className="max-w-3xl mx-auto space-y-8">
        {ONBOARDING_STEPS.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="flex gap-6"
          >
            <div className="shrink-0">
              <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 font-heading text-lg font-bold text-primary">
                {step.number}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-semibold font-heading mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button
          asChild
          variant="outline"
          size="lg"
          className="rounded-xl text-base px-8 h-12"
        >
          <Link href="/onboarding">Learn More About Our Process</Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
