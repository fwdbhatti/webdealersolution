"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { LEGACY } from "@/lib/constants";

export function LegacyStory() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <>
      <SectionWrapper>
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Our Story
          </p>
          <h1 className="text-3xl md:text-5xl font-bold font-heading">
            {LEGACY.headline}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {LEGACY.subheadline}
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-secondary/50">
        <div ref={ref} className="max-w-2xl mx-auto">
          <div className="space-y-6">
            {LEGACY.paragraphs.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
                }
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`text-foreground leading-relaxed ${
                  i === 0
                    ? "text-lg first-letter:text-4xl first-letter:font-heading first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-2 first-letter:leading-none"
                    : ""
                }`}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 pt-8 border-t border-border"
          >
            <p className="font-heading text-lg font-semibold">
              {LEGACY.founderName}
            </p>
            <p className="text-sm text-muted-foreground">
              {LEGACY.founderTitle}
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">
            Let&apos;s Write the Next Chapter Together
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            See how our team can protect your brand and convert more leads with
            real human conversations.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-xl text-base px-8 h-12 bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
          >
            <Link href="/book">Book a Consultation</Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
