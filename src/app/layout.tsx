import type { Metadata } from "next";
import { inter, playfairDisplay, jetbrainsMono } from "@/lib/fonts";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WebDealer Solutions | Human-First Lead Conversion",
  description:
    "We don't sell software. We provide the empathy, care, and 24/7 human connection that AI bots can't deliver. Protecting high-ticket brands since 2015.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfairDisplay.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
