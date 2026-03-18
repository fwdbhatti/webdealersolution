"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ONBOARDING_STEPS } from "@/lib/constants";

const DETAILED_STEPS = [
  {
    number: "01",
    title: "The Discovery Deep-Dive",
    description: ONBOARDING_STEPS[0].description,
    details: [
      "90-minute workshop with your sales leadership",
      "Review of current lead flow, CRM setup, and response protocols",
      "Analysis of your top-performing sales conversations",
      "Definition of your ideal customer profile and qualification criteria",
    ],
  },
  {
    number: "02",
    title: "The Custom Playbook",
    description: ONBOARDING_STEPS[1].description,
    details: [
      "Branded conversation scripts tailored to your voice",
      "Qualification question sequences based on your sales process",
      "Objection-handling frameworks specific to your industry",
      "Compliance guardrails so agents never overpromise",
    ],
  },
  {
    number: "03",
    title: "Certification & Launch",
    description: ONBOARDING_STEPS[2].description,
    details: [
      "Each agent passes a written and role-play certification",
      "Soft launch with live monitoring and feedback loops",
      "Weekly performance reviews for the first 30 days",
      "Ongoing quality assurance and conversation audits",
    ],
  },
];

export function OnboardingDetail() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <>
      <SectionWrapper>
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Our Process
          </p>
          <h1 className="text-3xl md:text-5xl font-bold font-heading">
            We Don&apos;t Just Plug In. We Become Your Team.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Every engagement starts with understanding your business inside and
            out. Here&apos;s exactly how we go from introduction to live,
            certified agents on your website.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-secondary/50">
        <div ref={ref} className="max-w-3xl mx-auto space-y-10">
          {DETAILED_STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <Card className="bg-card border-border shadow-sm rounded-xl">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-6">
                    <span className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 font-heading text-lg font-bold text-primary">
                      {step.number}
                    </span>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold font-heading mb-2">
                        {step.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {step.description}
                      </p>
                      <ul className="space-y-2">
                        {step.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="text-primary mt-1">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">
            Ready to See It in Action?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Book a free 15-minute consultation and we&apos;ll walk you through
            exactly how we&apos;d build your custom playbook.
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
