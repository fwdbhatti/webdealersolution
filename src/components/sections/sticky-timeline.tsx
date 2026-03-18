"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { PROCESS_STEPS } from "@/lib/constants";

export function StickyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        {/* Sticky Left Column */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-[40%]">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
              Our Process
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Three Steps to Zero Lost Leads
            </h2>
            <p className="text-muted-foreground">
              From first click to closed deal — every step handled by trained
              humans.
            </p>

            {/* Progress Bar */}
            <div className="hidden lg:block mt-8 h-48 relative">
              <div className="absolute left-3 top-0 bottom-0 w-px bg-border" />
              <motion.div
                className="absolute left-3 top-0 w-px bg-primary origin-top"
                style={{ scaleY: scrollYProgress, height: "100%" }}
              />
              {PROCESS_STEPS.map((step, i) => {
                const position = `${(i / (PROCESS_STEPS.length - 1)) * 100}%`;
                return (
                  <StepDot
                    key={step.number}
                    step={step}
                    index={i}
                    position={position}
                    progress={scrollYProgress}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Scrollable Right Column */}
        <div className="lg:col-span-8 space-y-16 lg:space-y-32">
          {PROCESS_STEPS.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function StepDot({
  step,
  index,
  position,
  progress,
}: {
  step: (typeof PROCESS_STEPS)[number];
  index: number;
  position: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const threshold = index / (PROCESS_STEPS.length - 1);
  const isActive = useTransform(progress, (v) => v >= threshold - 0.05);

  return (
    <motion.div
      className="absolute left-0 flex items-center gap-3"
      style={{ top: position }}
    >
      <motion.div
        className="w-[7px] h-[7px] rounded-full border-2 transition-colors duration-300"
        style={{
          backgroundColor: isActive.get() ? "hsl(var(--primary))" : "transparent",
          borderColor: isActive.get() ? "hsl(var(--primary))" : "hsl(var(--border))",
        }}
      />
      <span className="text-xs font-mono text-muted-foreground">
        {step.subtitle}
      </span>
    </motion.div>
  );
}

function StepCard({
  step,
}: {
  step: (typeof PROCESS_STEPS)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, y }}>
      <Card className="bg-card border-border">
        <CardContent className="p-6 md:p-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 font-heading text-xl font-bold text-primary">
              {step.number}
            </span>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-primary">
                {step.subtitle}
              </p>
              <h3 className="text-xl font-semibold">{step.title}</h3>
            </div>
          </div>

          <p className="text-muted-foreground mb-6">{step.description}</p>

          <ul className="space-y-2">
            {step.details.map((detail) => (
              <li
                key={detail}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {detail}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}
