import { useMemo } from 'react';
import { motion } from 'framer-motion';

type Particle = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
};

export default function SoftParticles() {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 28 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 4 + Math.random() * 10,
      duration: 8 + Math.random() * 10,
      delay: Math.random() * 8,
    }));
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[4] overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            bottom: -20,
            width: p.size,
            height: p.size,
            background:
              'radial-gradient(circle, rgba(255,159,191,0.5), rgba(193,159,255,0.2), transparent)',
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [0, -window.innerHeight - 100], opacity: [0, 0.7, 0] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
}
