import type { Metadata } from "next";
import dynamic from "next/dynamic";

const BookClient = dynamic(
  () =>
    import("@/components/book/book-client").then((m) => ({
      default: m.BookClient,
    })),
  { ssr: false },
);

export const metadata: Metadata = {
  title: "Book Your Audit | Web Dealer Solution",
  description:
    "Book a 15-minute Conversion Audit. Discover exactly how much revenue your current web-forms are leaking.",
};

export default function BookPage() {
  return <BookClient />;
}
