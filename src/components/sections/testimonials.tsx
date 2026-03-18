"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { TESTIMONIALS, CLIENT_LOGOS } from "@/lib/constants";

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <SectionWrapper id="results" className="bg-secondary/50">
      <div className="text-center mb-12">
        <p className="eyebrow mb-4">REAL RESULTS</p>
        <h2 className="text-3xl md:text-4xl font-bold">
          What Our Clients Say
        </h2>
      </div>

      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
      >
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={t.author}
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Card className="h-full bg-card border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all rounded-xl">
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star
                      key={si}
                      className="w-4 h-4 text-primary fill-primary"
                    />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6 italic text-sm">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-border pt-4 flex items-center gap-3">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-sm shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.author}</p>
                    <p className="text-xs text-muted-foreground">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Client Logo Strip */}
      <div className="mt-12 pt-8 border-t border-border">
        <p className="eyebrow text-center mb-6">BRANDS WE&apos;VE SERVED</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {CLIENT_LOGOS.map((name) => (
            <span
              key={name}
              className="text-sm font-semibold text-muted-foreground/50 tracking-wide"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
