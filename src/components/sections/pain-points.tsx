"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Moon,
  AlertOctagon,
  UserX,
  PhoneOff,
  Crown,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { PAIN_POINTS } from "@/lib/constants";

const ICONS: Record<string, React.ElementType> = {
  Moon,
  AlertOctagon,
  UserX,
  PhoneOff,
  Crown,
};

export function PainPoints() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <SectionWrapper className="bg-secondary">
      <div className="text-center mb-10">
        <p className="eyebrow mb-4">SOUND FAMILIAR?</p>
        <h2 className="text-3xl md:text-4xl font-bold">
          Does This Sound Familiar?
        </h2>
      </div>

      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
      >
        {PAIN_POINTS.map((point, i) => {
          const Icon = ICONS[point.icon];
          return (
            <motion.div
              key={point.headline}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-xl bg-card border border-border border-l-4 border-l-primary p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all"
            >
              {Icon && (
                <Icon className="w-8 h-8 text-primary mb-4" />
              )}
              <h3 className="text-base font-semibold mb-2 font-heading">
                {point.headline}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {point.description}
              </p>
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                }
                transition={{ duration: 0.4, delay: i * 0.08 + 0.3 }}
                className="text-sm text-primary font-medium"
              >
                → {point.resolution}
              </motion.p>
            </motion.div>
          );
        })}
      </div>

      <div className="text-center mt-10">
        <Button
          asChild
          size="lg"
          className="rounded-xl text-base px-8 h-12 bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
        >
          <Link href="/book">Book a Free Audit</Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
