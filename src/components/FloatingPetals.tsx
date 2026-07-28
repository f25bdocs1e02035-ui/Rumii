import { useMemo } from 'react';
import { motion } from 'framer-motion';

type Petal = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  rotate: number;
  hue: string;
};

const hues = [
  'rgba(255,159,191,0.85)',
  'rgba(255,111,156,0.85)',
  'rgba(193,159,255,0.8)',
  'rgba(245,208,97,0.7)',
  'rgba(255,201,221,0.85)',
];

export default function FloatingPetals() {
  const petals = useMemo<Petal[]>(() => {
    return Array.from({ length: 22 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 14 + Math.random() * 18,
      duration: 11 + Math.random() * 12,
      delay: Math.random() * 12,
      drift: (Math.random() - 0.5) * 120,
      rotate: Math.random() * 360,
      hue: hues[i % hues.length],
    }));
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[5] overflow-hidden">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{ left: `${p.left}%`, top: -40 }}
          initial={{ y: -40, x: 0, rotate: p.rotate, opacity: 0 }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, p.drift, -p.drift / 2, p.drift / 3],
            rotate: [p.rotate, p.rotate + 180, p.rotate + 360],
            opacity: [0, 0.9, 0.9, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {/* Rose petal shape */}
          <svg
            width={p.size}
            height={p.size}
            viewBox="0 0 24 24"
            fill="none"
            style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}
          >
            <path
              d="M12 2c3 3 6 5 6 9 0 5-3 8-6 11-3-3-6-6-6-11 0-4 3-6 6-9z"
              fill={p.hue}
            />
            <path
              d="M12 6c1.5 1.5 3 2.5 3 5 0 2.5-1.5 4-3 5.5-1.5-1.5-3-3-3-5.5 0-2.5 1.5-3.5 3-5z"
              fill="rgba(255,255,255,0.25)"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
