"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HERO, SITE } from "@/lib/constants";

const SWAP_WORDS = [
  "Automotive Dealerships",
  "Luxury Brands",
  "High-Ticket Businesses",
];

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [isSwapping, setIsSwapping] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Word swap animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsSwapping(true);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % SWAP_WORDS.length);
        setIsSwapping(false);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Image parallax on mousemove
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!imageRef.current || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    imageRef.current.style.transform = `translate(${x}px, ${y}px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (imageRef.current) {
      imageRef.current.style.transform = "translate(0, 0)";
      imageRef.current.style.transition = "transform 0.4s ease-out";
      setTimeout(() => {
        if (imageRef.current) imageRef.current.style.transition = "";
      }, 400);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-background min-h-[75vh] flex items-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div>
            <h1 className="fade-in-up text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold leading-[1.1] tracking-tight">
              High-Ticket Leads Require a{" "}
              <span className="border-b-4 border-primary pb-1">
                Human Handshake
              </span>
              .
            </h1>
            <p className="fade-in-up fade-in-up-d1 mt-4 text-lg text-foreground/80 leading-relaxed max-w-xl">
              We provide the empathy, care, and 24/7 human connection that{" "}
              <span
                className={`inline-block font-semibold text-primary transition-all duration-300 ${
                  isSwapping
                    ? "opacity-0 translate-y-[-8px]"
                    : "opacity-100 translate-y-0"
                }`}
              >
                {SWAP_WORDS[wordIndex]}
              </span>{" "}
              need to close.
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
                className="text-base px-8 h-12 rounded-xl text-foreground border border-border hover:bg-secondary"
              >
                <Link href="#process">{HERO.secondaryCta}</Link>
              </Button>
            </div>
            {/* Micro trust bar */}
            <p className="fade-in-up fade-in-up-d3 mt-6 text-sm text-muted-foreground flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" />
              {HERO.trustBar}
            </p>
          </div>

          {/* Image with parallax */}
          <div className="fade-in-up fade-in-up-d3 relative">
            <div
              ref={imageRef}
              className="aspect-[4/3] rounded-2xl bg-secondary overflow-hidden shadow-lg will-change-transform"
            >
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
