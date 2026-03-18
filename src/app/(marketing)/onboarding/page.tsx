import type { Metadata } from "next";
import { OnboardingDetail } from "@/components/sections/onboarding-detail";

export const metadata: Metadata = {
  title: "Our Process | WebDealer Solutions",
  description:
    "See how we onboard your business — from discovery deep-dive to certified human agents on your website.",
};

export default function OnboardingPage() {
  return (
    <main>
      <OnboardingDetail />
    </main>
  );
}
