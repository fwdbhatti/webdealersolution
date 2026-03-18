import { Hero } from "@/components/sections/hero";
import { ImpactBanner } from "@/components/sections/impact-banner";
import { TrustTax } from "@/components/sections/trust-tax";
import { Pillars } from "@/components/sections/pillars";
import { OnboardingPreview } from "@/components/sections/onboarding-preview";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <ImpactBanner />
      <TrustTax />
      <Pillars />
      <OnboardingPreview />
      <Testimonials />
    </main>
  );
}
