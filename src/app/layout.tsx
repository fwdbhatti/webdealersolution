import type { Metadata } from "next";
import { inter, interTight, jetbrainsMono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web Dealer Solution",
  description: "Web Dealer Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} ${jetbrainsMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
