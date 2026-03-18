import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HERO, SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative bg-primary-dark min-h-[75vh] flex items-center">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div>
            <h1 className="fade-in-up text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold leading-[1.1] tracking-tight !text-white">
              High-Ticket Leads Require a{" "}
              <span className="border-b-4 border-primary pb-1">
                Human Handshake
              </span>
              .
            </h1>
            <p className="fade-in-up fade-in-up-d1 mt-6 text-lg text-white/70 leading-relaxed max-w-xl">
              {HERO.subheadline}
            </p>
            <div className="fade-in-up fade-in-up-d2 mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="text-base px-8 h-12 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-[1.02] bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href={SITE.bookingUrl}>{HERO.cta}</Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="text-base px-8 h-12 rounded-xl text-white border border-white/30 hover:bg-white/10 hover:text-white"
              >
                <Link href="#process">{HERO.secondaryCta}</Link>
              </Button>
            </div>
            {/* Micro trust bar */}
            <p className="fade-in-up fade-in-up-d3 mt-6 text-sm text-white/50 flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" />
              {HERO.trustBar}
            </p>
          </div>

          {/* Image */}
          <div className="fade-in-up fade-in-up-d3 relative">
            <div className="aspect-[4/3] rounded-2xl bg-white/5 overflow-hidden shadow-lg">
              <Image
                src="/images/hero-showroom.png"
                alt="Luxury car showroom interior with warm amber lighting"
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
