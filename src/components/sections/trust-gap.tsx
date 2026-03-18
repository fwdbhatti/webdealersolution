"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BotOff, Moon, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { TRUST_GAP_CARDS } from "@/lib/constants";

const ICONS: Record<string, React.ElementType> = {
  BotOff,
  Moon,
  AlertTriangle,
};

export function TrustGap() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper id="trust-gap">
      <div className="text-center mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
          The Trust Gap
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">
          Why Your Website Is Bleeding Revenue
        </h2>
      </div>

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TRUST_GAP_CARDS.map((card, i) => {
          const Icon = ICONS[card.icon];
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Card className="h-full bg-card border-border hover:-translate-y-1 transition-transform duration-300">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    {Icon && (
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                    )}
                    <span className="text-2xl font-heading font-bold text-primary">
                      {card.stat}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
