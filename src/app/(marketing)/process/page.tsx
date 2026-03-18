import type { Metadata } from "next";
import { StickyTimeline } from "@/components/sections/sticky-timeline";
import { SectionWrapper } from "@/components/shared/section-wrapper";

export const metadata: Metadata = {
  title: "How It Works | Web Dealer Solution",
  description:
    "Three steps to zero lost leads. See how our human-powered agents engage, qualify, and convert your website visitors 24/7.",
};

export default function ProcessPage() {
  return (
    <main>
      <SectionWrapper>
        <StickyTimeline />
      </SectionWrapper>
    </main>
  );
}
