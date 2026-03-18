import type { Metadata } from "next";
import { IndustryTabs } from "@/components/sections/industry-tabs";
import { SectionWrapper } from "@/components/shared/section-wrapper";

export const metadata: Metadata = {
  title: "Industries | Web Dealer Solution",
  description:
    "Human-powered lead conversion for automotive, B2B services, and professional services. See how we serve high-ticket industries.",
};

export default function IndustriesPage() {
  return (
    <main>
      <SectionWrapper>
        <div className="text-center mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
            Industries
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Built for High-Ticket Brands
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every industry has unique lead qualification needs. Our agents are
            trained on your playbook, your products, and your standards.
          </p>
        </div>
        <IndustryTabs />
      </SectionWrapper>
    </main>
  );
}
