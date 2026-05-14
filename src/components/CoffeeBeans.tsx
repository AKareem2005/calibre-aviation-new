export function CoffeeBeans() {
  const beans = Array.from({ length: 14 });
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden -z-0" aria-hidden>
      {beans.map((_, i) => {
        const left = (i * 7.3) % 100;
        const delay = (i * 0.7) % 8;
        const dur = 12 + ((i * 1.7) % 10);
        const size = 10 + (i % 4) * 3;
        return (
          <span
            key={i}
            className="absolute -top-6 rounded-[50%] bg-espresso/30"
            style={{
              left: `${left}%`,
              width: size,
              height: size * 1.4,
              animation: `bean-fall ${dur}s linear ${delay}s infinite`,
              boxShadow: "inset 0 0 0 1px oklch(0.22 0.04 40 / 0.4)",
            }}
          />
        );
      })}
    </div>
  );
}
