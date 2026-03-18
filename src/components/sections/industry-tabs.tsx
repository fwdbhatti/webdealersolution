"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, AlertCircle } from "lucide-react";
import { INDUSTRY_TABS } from "@/lib/constants";

export function IndustryTabs() {
  return (
    <Tabs defaultValue="automotive" className="w-full">
      <TabsList className="w-full justify-start bg-card border border-border mb-8 h-auto flex-wrap">
        {INDUSTRY_TABS.map((tab) => (
          <TabsTrigger
            key={tab.id}
            value={tab.id}
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {INDUSTRY_TABS.map((tab) => (
        <TabsContent key={tab.id} value={tab.id}>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                {tab.headline}
              </h3>
              <p className="text-muted-foreground max-w-2xl">
                {tab.description}
              </p>
              {tab.clientName && (
                <Badge variant="outline" className="mt-3">
                  Client: {tab.clientName}
                </Badge>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pain Points */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-destructive mb-4">
                    The Problem
                  </p>
                  <ul className="space-y-3">
                    {tab.painPoints.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm">
                        <AlertCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Solutions */}
              <Card className="bg-card border-primary/20">
                <CardContent className="p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4">
                    Our Solution
                  </p>
                  <ul className="space-y-3">
                    {tab.solutions.map((solution) => (
                      <li
                        key={solution}
                        className="flex items-start gap-2 text-sm"
                      >
                        <Check className="w-4 h-4 text-live shrink-0 mt-0.5" />
                        <span className="text-foreground">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
