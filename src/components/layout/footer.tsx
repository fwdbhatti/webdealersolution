import Link from "next/link";
import { Linkedin } from "lucide-react";
import { SITE } from "@/lib/constants";
import { NAV_ITEMS } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <p className="font-heading text-lg font-bold">{SITE.name}</p>
            <p className="mt-2 text-sm text-white/60 max-w-sm">
              Serving dealers across North America &amp; UK since 2015.
            </p>
            <a
              href={SITE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-white/60 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/40 mb-4">
              Navigation
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/40 mb-4">
              Industries We Serve
            </p>
            <ul className="space-y-2">
              {SITE.industries.map((industry) => (
                <li key={industry} className="text-sm text-white/60">
                  {industry}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/40 mb-4">
              Get in Touch
            </p>
            <ul className="space-y-2">
              <li className="text-sm text-white/60">{SITE.city}</li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone}`}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {SITE.phone}
                </a>
              </li>
              <li className="pt-2">
                <Link
                  href={SITE.bookingUrl}
                  className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  Book a Free Audit →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="text-xs text-white/40 hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-white/40 hover:text-white/60 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
