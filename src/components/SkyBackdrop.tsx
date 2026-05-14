import { useEffect, useState } from "react";

/** Animated sky backdrop: drifting clouds + a plane that crosses the screen. Pure CSS, no deps. */
export function SkyBackdrop() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const clouds = [
    { top: "8%", size: 140, delay: 0, dur: 80, opacity: 0.55 },
    { top: "22%", size: 90, delay: 18, dur: 65, opacity: 0.4 },
    { top: "55%", size: 180, delay: 35, dur: 95, opacity: 0.35 },
    { top: "72%", size: 110, delay: 8, dur: 75, opacity: 0.3 },
    { top: "40%", size: 70, delay: 50, dur: 55, opacity: 0.5 },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {clouds.map((c, i) => (
        <svg
          key={i}
          viewBox="0 0 200 80"
          width={c.size}
          height={c.size * 0.4}
          className="absolute animate-cloud"
          style={{
            top: c.top,
            left: 0,
            animationDuration: `${c.dur}s`,
            animationDelay: `-${c.delay}s`,
            opacity: c.opacity,
          }}
        >
          <path
            fill="white"
            d="M40 60 Q20 60 20 45 Q20 30 40 30 Q42 15 60 15 Q78 10 88 25 Q105 18 118 32 Q140 28 145 45 Q160 48 158 60 Z"
          />
        </svg>
      ))}

      {/* Plane that crosses the sky every ~22s */}
      <svg
        viewBox="0 0 64 64"
        width={56}
        height={56}
        className="absolute animate-plane-fly drop-shadow-lg"
        style={{ left: 0, top: 0 }}
      >
        <defs>
          <linearGradient id="planeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fff" />
            <stop offset="1" stopColor="#cbd5e1" />
          </linearGradient>
        </defs>
        <path
          d="M2 34 L26 30 L42 14 L48 14 L38 32 L56 32 L60 28 L62 30 L58 36 L62 38 L60 40 L56 36 L38 36 L48 54 L42 54 L26 38 L2 36 Z"
          fill="url(#planeGrad)"
          stroke="#1e293b"
          strokeWidth="0.6"
        />
      </svg>
    </div>
  );
}
