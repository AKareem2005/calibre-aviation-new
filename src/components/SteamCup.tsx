export function SteamCup({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden>
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-1">
        {[0, 0.6, 1.2].map((d, i) => (
          <span
            key={i}
            className="block w-1.5 h-6 rounded-full bg-foreground/20 blur-md animate-steam"
            style={{ animationDelay: `${d}s` }}
          />
        ))}
      </div>
      <svg viewBox="0 0 64 64" className="w-12 h-12 text-primary">
        <path
          fill="currentColor"
          d="M10 24h36v14a14 14 0 0 1-14 14H24a14 14 0 0 1-14-14V24Zm38 4h6a8 8 0 0 1 0 16h-6v-4h6a4 4 0 0 0 0-8h-6v-4Z"
        />
      </svg>
    </div>
  );
}
