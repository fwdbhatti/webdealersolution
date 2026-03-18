import { SectionWrapper } from "@/components/shared/section-wrapper";
import { TRUST_TAX } from "@/lib/constants";

export function TrustTax() {
  return (
    <SectionWrapper>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">{TRUST_TAX.headline}</h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          {TRUST_TAX.body}
        </p>
      </div>
    </SectionWrapper>
  );
}
