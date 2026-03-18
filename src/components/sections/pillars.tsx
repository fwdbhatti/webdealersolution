"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, AlertTriangle, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { PILLARS } from "@/lib/constants";

const ICONS: Record<string, React.ElementType> = {
  Shield,
  AlertTriangle,
  Eye,
  Heart,
};

export function Pillars() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <SectionWrapper className="bg-secondary/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          The 4 Pillars of Human Conversion
        </h2>
      </div>

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PILLARS.map((pillar, i) => {
          const Icon = ICONS[pillar.icon];
          return (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full bg-card border-border shadow-sm hover:shadow-md transition-shadow rounded-xl">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    {Icon && (
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                    )}
                    <h3 className="text-lg font-semibold font-heading">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.body}
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
