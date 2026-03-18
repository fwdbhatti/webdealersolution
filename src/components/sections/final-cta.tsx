"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { FINAL_CTA } from "@/lib/constants";

export function FinalCta() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <SectionWrapper className="bg-primary-dark">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold !text-white">
          {FINAL_CTA.headline}
        </h2>
        <p className="mt-4 text-white/70 leading-relaxed max-w-2xl mx-auto">
          {FINAL_CTA.subtext}
        </p>
        <div className="mt-8">
          <Button
            asChild
            size="lg"
            className="rounded-xl text-base px-10 h-14 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all text-lg"
          >
            <Link href="/book">{FINAL_CTA.cta} →</Link>
          </Button>
        </div>
        <p className="mt-4 text-sm text-white/40">{FINAL_CTA.reassurance}</p>
      </motion.div>
    </SectionWrapper>
  );
}
