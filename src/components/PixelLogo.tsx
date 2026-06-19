"use client";

// Pixel-art H mark — 7x7 grid. Tasteful 8-bit accent.
const grid = [
  "1 0 0 0 0 0 1",
  "1 0 0 0 0 0 1",
  "1 0 0 0 0 0 1",
  "1 1 1 1 1 1 1",
  "1 0 0 0 0 0 1",
  "1 0 0 0 0 0 1",
  "1 0 0 0 0 0 1",
].map((r) => r.split(" ").map(Number));

export default function PixelLogo({ size = 22 }: { size?: number }) {
  const px = size / 7;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="pixelated shrink-0"
      aria-label="Hessah logo"
    >
      <defs>
        <linearGradient id="h-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgb(var(--accent-lav))" />
          <stop offset="100%" stopColor="rgb(var(--accent-blue))" />
        </linearGradient>
      </defs>
      {grid.flatMap((row, y) =>
        row.map((cell, x) =>
          cell ? (
            <rect
              key={`${x}-${y}`}
              x={x * px}
              y={y * px}
              width={px}
              height={px}
              fill="url(#h-grad)"
            />
          ) : null
        )
      )}
    </svg>
  );
}
