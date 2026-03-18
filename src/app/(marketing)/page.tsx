import { Hero } from "@/components/sections/hero";
import { ImpactBanner } from "@/components/sections/impact-banner";
import { TrustTax } from "@/components/sections/trust-tax";
import { PainPoints } from "@/components/sections/pain-points";
import { Pillars } from "@/components/sections/pillars";
import { OnboardingPreview } from "@/components/sections/onboarding-preview";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <ImpactBanner />
      <TrustTax />
      <PainPoints />
      <Pillars />
      <OnboardingPreview />
      <Testimonials />
      <FinalCta />
    </main>
  );
}
