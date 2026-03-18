"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { X, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { TRUST_TAX } from "@/lib/constants";

export function TrustTax() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <SectionWrapper>
      <div className="max-w-4xl mx-auto">
        <p className="eyebrow text-center mb-4">{TRUST_TAX.eyebrow}</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          {TRUST_TAX.headline}
        </h2>
        <p className="mt-6 text-muted-foreground leading-relaxed text-left max-w-3xl mx-auto">
          {TRUST_TAX.body}
        </p>

        {/* Comparison */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10"
        >
          {/* AI Bot Column */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full border-destructive/20 bg-destructive/5 rounded-xl shadow-card">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-lg font-semibold mb-4 text-destructive/80">
                  {TRUST_TAX.comparison.aiBot.title}
                </h3>
                <ul className="space-y-3">
                  {TRUST_TAX.comparison.aiBot.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <X className="w-4 h-4 text-destructive/60 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* WebDealer Column */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 16 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full border-primary/30 bg-primary/5 rounded-xl shadow-card">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-lg font-semibold mb-4 text-primary">
                  {TRUST_TAX.comparison.webdealer.title}
                </h3>
                <ul className="space-y-3">
                  {TRUST_TAX.comparison.webdealer.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
