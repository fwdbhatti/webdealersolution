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
  title: "Book a Consultation | WebDealer Solutions",
  description:
    "Book a free 15-minute conversion audit. Discover exactly how much revenue your website is leaking.",
};

export default function BookPage() {
  return <BookClient />;
}
