import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HERO, SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div>
            <h1 className="fade-in-up text-4xl sm:text-5xl md:text-6xl font-heading font-bold leading-[1.1] tracking-tight">
              {HERO.headline}
            </h1>
            <p className="fade-in-up fade-in-up-d1 mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              {HERO.subheadline}
            </p>
            <div className="fade-in-up fade-in-up-d2 mt-8">
              <Button
                asChild
                size="lg"
                className="text-base px-8 h-12 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-[1.02]"
              >
                <Link href={SITE.bookingUrl}>{HERO.cta}</Link>
              </Button>
            </div>
          </div>

          {/* Hero image */}
          <div className="fade-in-up fade-in-up-d3 relative">
            <div className="aspect-[4/3] rounded-2xl bg-secondary overflow-hidden shadow-lg">
              <Image
                src="/images/hero-agent.png"
                alt="Professional customer service agent in a bright, modern office"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
