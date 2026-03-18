"use client";

import { useRef, useCallback } from "react";
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

function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;
      cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    if (cardRef.current) {
      cardRef.current.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className={`will-change-transform transition-transform duration-200 ${className ?? ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}

export function Pillars() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <SectionWrapper>
      <div className="text-center mb-12">
        <p className="eyebrow mb-4">HOW WE&apos;RE DIFFERENT</p>
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
              <TiltCard>
                <Card className="h-full bg-secondary border-l-4 border-l-primary border-border shadow-card hover:shadow-card-hover transition-shadow rounded-xl relative overflow-hidden group">
                  {/* Shimmer border effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div
                      className="absolute inset-0 rounded-xl"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, hsl(43 76% 52% / 0.15), transparent)",
                        backgroundSize: "200% 100%",
                        animation: "shimmer-border 1.5s linear infinite",
                      }}
                    />
                  </div>
                  <CardContent className="p-6 md:p-8 relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      {Icon && (
                        <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                      )}
                      <h3 className="text-lg font-semibold font-heading">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {pillar.body}
                    </p>
                    <p className="text-sm font-semibold text-primary">
                      {pillar.result}
                    </p>
                  </CardContent>
                </Card>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
