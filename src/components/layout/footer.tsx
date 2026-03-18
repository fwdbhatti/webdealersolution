import Link from "next/link";
import { SITE } from "@/lib/constants";
import { NAV_ITEMS } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <p className="font-heading text-lg">{SITE.name}</p>
            <p className="mt-2 text-sm text-muted-foreground max-w-sm">
              {SITE.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Navigation
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Get Started
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href={SITE.bookingUrl}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Book Your Audit
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Human Premium. Always On.
          </p>
        </div>
      </div>
    </footer>
  );
}
