type WaveformProps = {
  className?: string;
  color?: string;
  bars?: number;
};

// Deterministic pseudo-random heights so server and client render identically.
function heightsFor(count: number, seed: number) {
  const out: number[] = [];
  let s = seed;
  for (let i = 0; i < count; i++) {
    s = (s * 9301 + 49297) % 233280;
    out.push(0.15 + (s / 233280) * 0.85);
  }
  return out;
}

export default function Waveform({
  className = "",
  color = "var(--signal)",
  bars = 48,
}: WaveformProps) {
  const heights = heightsFor(bars, 17);

  return (
    <div
      className={`flex items-end gap-[3px] ${className}`}
      aria-hidden="true"
    >
      {heights.map((h, i) => {
        const min = Math.max(0.12, h - 0.3);
        const max = Math.min(1, h + 0.15);
        const duration = 1.6 + (i % 7) * 0.18;
        const delay = (i % 11) * 0.08;
        return (
          <span
            key={i}
            className="bar w-[3px] rounded-full"
            style={{
              height: "100%",
              backgroundColor: color,
              opacity: 0.35 + h * 0.5,
              // @ts-expect-error custom css vars
              "--min": min,
              "--max": max,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}
