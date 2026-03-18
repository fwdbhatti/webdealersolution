"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { COMPARISON_ROWS } from "@/lib/constants";

function CellValue({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="w-5 h-5 text-live" />
    ) : (
      <X className="w-5 h-5 text-destructive" />
    );
  }
  return <span>{value}</span>;
}

export function ComparisonTable() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper className="border-t border-border">
      <div className="text-center mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
          The Ultimate Comparison
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">
          Human Certainty vs. AI Guesswork
        </h2>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="rounded-lg border border-border overflow-hidden"
      >
        <Table>
          <TableHeader>
            <TableRow className="bg-card hover:bg-card">
              <TableHead className="w-[35%]">Feature</TableHead>
              <TableHead className="w-[32.5%] border-l border-primary/30 bg-primary/5 text-primary">
                Human Agent
              </TableHead>
              <TableHead className="w-[32.5%] border-l border-border">
                AI Chatbot
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {COMPARISON_ROWS.map((row) => (
              <TableRow key={row.feature}>
                <TableCell className="font-medium">{row.feature}</TableCell>
                <TableCell className="border-l border-primary/30 bg-primary/5">
                  <CellValue value={row.humanAgent} />
                </TableCell>
                <TableCell className="border-l border-border text-muted-foreground">
                  <CellValue value={row.aiChatbot} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </motion.div>
    </SectionWrapper>
  );
}
