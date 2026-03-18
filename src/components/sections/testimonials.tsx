"use client";

import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { TESTIMONIALS, CLIENT_LOGOS } from "@/lib/constants";

export function Testimonials() {
  return (
    <SectionWrapper id="results">
      <div className="text-center mb-12">
        <p className="eyebrow mb-4">REAL RESULTS</p>
        <h2 className="text-3xl md:text-4xl font-bold">
          What Our Clients Say
        </h2>
      </div>

      {/* Infinite marquee testimonials */}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div
          className="flex gap-6 w-max hover:[animation-play-state:paused]"
          style={{ animation: "scroll-left 30s linear infinite" }}
        >
          {/* Duplicate testimonials for seamless loop */}
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <Card
              key={`${t.author}-${i}`}
              className="w-[340px] shrink-0 bg-card border-border shadow-card hover:shadow-card-hover transition-all rounded-xl"
            >
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
          ))}
        </div>
      </div>

      {/* Client Logo Ticker */}
      <div className="mt-12 pt-8 border-t border-border">
        <p className="eyebrow text-center mb-6">BRANDS WE&apos;VE SERVED</p>
        <div
          className="relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div
            className="flex gap-12 w-max hover:[animation-play-state:paused]"
            style={{ animation: "scroll-left 20s linear infinite" }}
          >
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="text-sm font-semibold text-muted-foreground/50 tracking-wide whitespace-nowrap hover:text-primary transition-colors cursor-default"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
