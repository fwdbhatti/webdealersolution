"use client";

import { useState, useMemo } from "react";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ROI_DEFAULTS, ROI_MULTIPLIER } from "@/lib/constants";

function formatCurrency(n: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

export function ROICalculator() {
  const [visitors, setVisitors] = useState<number>(ROI_DEFAULTS.visitors);
  const [conversionRate, setConversionRate] = useState<number>(
    ROI_DEFAULTS.conversionRate,
  );
  const [dealValue, setDealValue] = useState<number>(ROI_DEFAULTS.dealValue);

  const results = useMemo(() => {
    const currentLeads = Math.round(visitors * (conversionRate / 100));
    const projectedLeads = Math.round(currentLeads * ROI_MULTIPLIER);
    const recoveredLeads = projectedLeads - currentLeads;
    const appointmentsBooked = Math.round(recoveredLeads * 0.35);
    const profitLift = appointmentsBooked * dealValue;

    return { recoveredLeads, appointmentsBooked, profitLift };
  }, [visitors, conversionRate, dealValue]);

  return (
    <SectionWrapper className="border-t border-border">
      <div className="text-center mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
          ROI Calculator
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">
          See What You&apos;re Leaving on the Table
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Sliders */}
        <div className="space-y-8">
          <div>
            <div className="flex justify-between mb-3">
              <label className="text-sm font-medium">
                Monthly Website Visitors
              </label>
              <span className="text-sm font-mono text-primary">
                {visitors.toLocaleString()}
              </span>
            </div>
            <Slider
              value={[visitors]}
              onValueChange={([v]) => setVisitors(v)}
              min={1000}
              max={100000}
              step={500}
            />
          </div>

          <div>
            <div className="flex justify-between mb-3">
              <label className="text-sm font-medium">
                Current Conversion Rate
              </label>
              <span className="text-sm font-mono text-primary">
                {conversionRate}%
              </span>
            </div>
            <Slider
              value={[conversionRate]}
              onValueChange={([v]) => setConversionRate(v)}
              min={0.5}
              max={10}
              step={0.5}
            />
          </div>

          <div>
            <div className="flex justify-between mb-3">
              <label className="text-sm font-medium">Average Deal Value</label>
              <span className="text-sm font-mono text-primary">
                {formatCurrency(dealValue)}
              </span>
            </div>
            <Slider
              value={[dealValue]}
              onValueChange={([v]) => setDealValue(v)}
              min={500}
              max={50000}
              step={500}
            />
          </div>
        </div>

        {/* Results */}
        <Card className="border-primary/30 bg-card">
          <CardContent className="p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Your Projected Impact
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-4xl md:text-5xl font-heading font-bold text-primary">
                  {results.recoveredLeads.toLocaleString()}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Ghost Leads Recovered / month
                </p>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-4xl md:text-5xl font-heading font-bold text-foreground">
                  {results.appointmentsBooked.toLocaleString()}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Estimated Appointments Booked / month
                </p>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-4xl md:text-5xl font-heading font-bold text-live">
                  {formatCurrency(results.profitLift)}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Projected Gross Profit Lift / month
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
