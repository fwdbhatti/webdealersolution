import type { Metadata } from "next";
import { LegacyStory } from "@/components/sections/legacy-story";

export const metadata: Metadata = {
  title: "About Us | WebDealer Solutions",
  description:
    "15 years of human-led lead generation. Learn the story behind WebDealer Solutions and why empathy beats automation.",
};

export default function LegacyPage() {
  return (
    <main>
      <LegacyStory />
    </main>
  );
}
