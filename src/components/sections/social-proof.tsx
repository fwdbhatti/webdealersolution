"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { TESTIMONIALS } from "@/lib/constants";

const CLIENT_LOGOS = ["Mercedes-Benz Toronto", "Big Blue Printing"];

export function SocialProof() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper className="border-t border-border">
      <div className="text-center mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
          Trusted By
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">
          Real Results. Real Humans.
        </h2>
      </div>

      {/* Client Logos */}
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mb-12">
        {CLIENT_LOGOS.map((name) => (
          <span
            key={name}
            className="text-sm font-mono uppercase tracking-widest text-muted-foreground/60"
          >
            {name}
          </span>
        ))}
      </div>

      {/* Testimonials */}
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={t.author}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
          >
            <Card className="h-full bg-card border-border">
              <CardContent className="p-6">
                <Quote className="w-5 h-5 text-primary/40 mb-4" />
                <p className="text-sm text-foreground leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-border pt-4">
                  <p className="text-sm font-medium">{t.author}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role}, {t.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
