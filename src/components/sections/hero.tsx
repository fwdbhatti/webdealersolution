import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LivePulse } from "@/components/shared/live-pulse";
import { SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        className="object-cover opacity-30"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/80" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 py-24 text-center">
        {/* Live indicator */}
        <div className="hero-fade-up flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card/50 backdrop-blur-sm px-4 py-2">
            <LivePulse count={42} />
          </div>
        </div>

        {/* Headline */}
        <h1 className="hero-fade-up hero-fade-up-d1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] tracking-tight max-w-4xl mx-auto">
          {SITE.heroHeadline}
        </h1>

        {/* Subheadline */}
        <p className="hero-fade-up hero-fade-up-d2 mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          {SITE.heroSubheadline}
        </p>

        {/* CTAs */}
        <div className="hero-fade-up hero-fade-up-d3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="btn-shimmer text-base px-8 h-12 transition-all hover:scale-[1.02] hover:shadow-lg"
          >
            <Link href={SITE.bookingUrl}>Book Your Conversion Audit</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base px-8 h-12">
            <Link href="/process">See How It Works</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
