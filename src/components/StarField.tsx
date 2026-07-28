import { useEffect, useMemo } from 'react';

type Star = {
  left: string;
  top: string;
  size: number;
  delay: string;
  duration: string;
};

export default function StarField() {
  const stars = useMemo<Star[]>(() => {
    const arr: Star[] = [];
    for (let i = 0; i < 90; i++) {
      arr.push({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 2.4 + 0.6,
        delay: `${Math.random() * 4}s`,
        duration: `${2 + Math.random() * 3}s`,
      });
    }
    return arr;
  }, []);

  // Twinkle via CSS animation is handled by .animate-twinkle class
  useEffect(() => {}, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
            animationDuration: s.duration,
            boxShadow: '0 0 6px rgba(255,255,255,0.8)',
          }}
        />
      ))}
    </div>
  );
}
