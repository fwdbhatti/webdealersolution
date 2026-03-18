import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/hero";
import { TrustGap } from "@/components/sections/trust-gap";
import { ComparisonTable } from "@/components/sections/comparison-table";
import { SocialProof } from "@/components/sections/social-proof";

const ROICalculator = dynamic(
  () =>
    import("@/components/sections/roi-calculator").then((m) => ({
      default: m.ROICalculator,
    })),
  { ssr: false },
);

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustGap />
      <ComparisonTable />
      <ROICalculator />
      <SocialProof />
    </main>
  );
}
