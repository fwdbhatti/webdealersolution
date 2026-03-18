import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { FOUNDER_LETTER, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "The Anti-Bot Manifesto | Web Dealer Solution",
  description:
    "Why we believe in the Human Premium. Our founder's perspective on why AI chatbots are a race to the bottom for customer service.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <SectionWrapper className="border-b border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
            Our Philosophy
          </p>
          <h1 className="text-4xl md:text-6xl font-bold">
            {FOUNDER_LETTER.heading}
          </h1>
        </div>
      </SectionWrapper>

      {/* Image */}
      <div className="relative w-full h-64 md:h-96">
        <Image
          src="/images/about-hero.png"
          alt="Human meets machine"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      {/* Founder's Letter */}
      <SectionWrapper>
        <article className="max-w-2xl mx-auto">
          {FOUNDER_LETTER.paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className={`text-base md:text-lg leading-relaxed text-muted-foreground mb-6 ${
                i === 0 ? "first-letter:text-5xl first-letter:font-heading first-letter:font-bold first-letter:text-foreground first-letter:float-left first-letter:mr-2 first-letter:mt-1" : ""
              }`}
            >
              {paragraph}
            </p>
          ))}

          <div className="mt-12 pt-8 border-t border-border">
            <p className="font-heading text-lg font-bold">
              {FOUNDER_LETTER.author}
            </p>
            <p className="text-sm text-muted-foreground">
              {FOUNDER_LETTER.title}
            </p>
          </div>
        </article>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="border-t border-border text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Upgrade to the Human Premium?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Book a 15-minute Conversion Audit and discover exactly how much
          revenue your current web-forms are leaking.
        </p>
        <Button
          asChild
          size="lg"
          className="btn-shimmer text-base px-8 h-12 transition-all hover:scale-[1.02] hover:shadow-lg"
        >
          <Link href={SITE.bookingUrl}>Book Your Audit</Link>
        </Button>
      </SectionWrapper>
    </main>
  );
}
