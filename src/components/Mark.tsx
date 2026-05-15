export function MountainMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 32" fill="none" className={className} aria-hidden="true">
      <path d="M4 28 L22 8 L32 20 L44 4 L62 24 L76 28" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="miter" fill="none"/>
      <path d="M4 28 L76 28" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="flex items-center gap-3 text-[0.6rem] tracking-widest-xl uppercase opacity-80">
        <span>ESTD</span>
        <MountainMark className="h-4 w-16 text-current" />
        <span>2024</span>
      </div>
      <h1 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight leading-none mt-1">
        HIGHLINE
      </h1>
      <div className="rule text-[0.55rem] tracking-widest-xl uppercase mt-0.5 opacity-80">
        <span>Provisions</span>
      </div>
    </div>
  );
}
