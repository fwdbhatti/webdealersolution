"use client";

import { CheckCircle2, MessageSquare, FileText, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionWrapper } from "@/components/shared/section-wrapper";

const CREDENTIALS = [
  { label: "100,000+ Interactions", sublabel: "handled for clients" },
  { label: "60% Lead Recovery", sublabel: "average improvement" },
  { label: "< 30s Response Time", sublabel: "24/7, every day" },
];

const CALL_AGENDA = [
  {
    icon: MessageSquare,
    text: "Review your current lead capture and response workflow",
  },
  {
    icon: FileText,
    text: "Identify gaps where leads are falling through the cracks",
  },
  {
    icon: Clock,
    text: "Outline a rollout plan with projected ROI timeline",
  },
];

// TODO: Replace with actual Google Calendar scheduling URL
const CALENDAR_URL =
  "https://calendar.google.com/calendar/appointments/schedules/placeholder?gv=true";

export function BookClient() {
  return (
    <main>
      {/* Hero */}
      <SectionWrapper className="border-b border-border">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-live opacity-75 animate-live-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-live" />
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Free Conversion Audit
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold">
            Discover Exactly How Much Revenue Your Website Is Leaking
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            15 minutes. No pitch, no obligation — just an honest look at where
            your leads are going and how to get them back.
          </p>
        </div>
      </SectionWrapper>

      {/* Two-column layout */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left: Profile & Credentials */}
          <div className="lg:col-span-2 space-y-8">
            {/* Track Record */}
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Track Record
              </p>
              <div className="space-y-3">
                {CREDENTIALS.map((cred) => (
                  <div key={cred.label} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">{cred.label}</p>
                      <p className="text-xs text-muted-foreground">
                        {cred.sublabel}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What We'll Cover */}
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                What We&apos;ll Cover
              </p>
              <div className="space-y-3">
                {CALL_AGENDA.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.text} className="flex items-start gap-3">
                      <Icon className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Calendar Embed */}
          <div className="lg:col-span-3">
            <Card className="bg-card border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="p-4 border-b border-border">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Select a Time
                  </p>
                </div>
                <div className="min-h-[600px] flex items-center justify-center bg-secondary/30">
                  <iframe
                    src={CALENDAR_URL}
                    style={{ border: 0, width: "100%", minHeight: 680 }}
                    loading="lazy"
                    title="Book a meeting"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
