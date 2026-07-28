import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Clock } from 'lucide-react';
import { SectionTitle } from './Timeline';

type Choice = 'yes' | 'more' | null;

export default function Proposal() {
  const [choice, setChoice] = useState<Choice>(null);
  const [showFireworks, setShowFireworks] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleYes = () => {
    setChoice('yes');
    setShowFireworks(true);
    fireConfetti();
  };

  const handleMore = () => {
    setChoice('more');
  };

  useEffect(() => {
    if (!showFireworks) return;
    let raf: number;
    let count = 0;
    const interval = window.setInterval(() => {
      fireBurst();
      count++;
      if (count > 8) {
        window.clearInterval(interval);
        setShowFireworks(false);
      }
    }, 700);
    return () => {
      window.clearInterval(interval);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [showFireworks]);

  return (
    <section className="relative px-6 py-24">
      <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-[90]" />
      <div className="mx-auto max-w-3xl text-center">
        <SectionTitle eyebrow="The Question" title="Would You Like to Give Us a Chance?" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="mt-14"
        >
          <h3 className="font-cursive text-5xl text-gradient-rose sm:text-6xl md:text-7xl">
            Rumiii...
          </h3>
          <p className="mt-4 font-serif text-xl italic text-rose-100/80 sm:text-2xl">
            Would you like to give us a chance?
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <ChoiceButton
              onClick={handleYes}
              active={choice === 'yes'}
              gradient="from-rose-400 to-lavender-400"
              icon={<Heart size={20} className="fill-ink-900" />}
              label="Yes"
            />
            <ChoiceButton
              onClick={handleMore}
              active={choice === 'more'}
              gradient="from-lavender-400 to-gold-300"
              icon={<Clock size={20} className="text-ink-900" />}
              label="I Need More Time"
            />
          </div>

          <div className="mt-10 min-h-[80px]">
            <AnimatePresence mode="wait">
              {choice === 'yes' && (
                <motion.p
                  key="yes"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="font-serif text-2xl italic text-gradient-gold sm:text-3xl"
                >
                  You just made someone incredibly happy. ❤️
                </motion.p>
              )}
              {choice === 'more' && (
                <motion.div
                  key="more"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mx-auto max-w-md rounded-2xl glass-rose p-6 shadow-glass"
                >
                  <p className="font-serif text-lg italic leading-relaxed text-rose-50/90">
                    That's completely okay. Take all the time you need. Your
                    comfort and happiness matter most.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ChoiceButton({
  onClick,
  active,
  gradient,
  icon,
  label,
}: {
  onClick: () => void;
  active: boolean;
  gradient: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      animate={active ? { scale: [1, 1.1, 1] } : {}}
      className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${gradient} px-9 py-4 text-lg font-medium text-ink-900 shadow-glow`}
    >
      {icon}
      {label}
    </motion.button>
  );
}

function fireConfetti() {
  const colors = ['#ff6f9c', '#c19fff', '#f5d061', '#ff9fbf', '#ffffff'];
  const end = Date.now() + 2400;

  (function frame() {
    confetti({
      particleCount: 6,
      angle: 60,
      spread: 70,
      origin: { x: 0, y: 0.7 },
      colors,
    });
    confetti({
      particleCount: 6,
      angle: 120,
      spread: 70,
      origin: { x: 1, y: 0.7 },
      colors,
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();

  // Big burst
  confetti({
    particleCount: 120,
    spread: 100,
    origin: { y: 0.6 },
    colors,
    scalar: 1.1,
  });
}

function fireBurst() {
  const colors = ['#ff6f9c', '#c19fff', '#f5d061', '#ff9fbf', '#ffffff'];
  const x = 0.2 + Math.random() * 0.6;
  const y = 0.3 + Math.random() * 0.3;
  confetti({
    particleCount: 60,
    startVelocity: 35,
    spread: 360,
    origin: { x, y },
    colors,
    shapes: ['circle'],
    scalar: 0.9,
  });
}
