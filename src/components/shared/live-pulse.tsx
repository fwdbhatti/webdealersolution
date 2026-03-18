export function LivePulse({ count = 42 }: { count?: number }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full rounded-full bg-live opacity-75 animate-live-ping" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-live" />
      </span>
      <span>{count} Agents Online</span>
    </span>
  );
}
