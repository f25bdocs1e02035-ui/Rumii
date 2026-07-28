import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Infinity as InfinityIcon, Heart } from 'lucide-react';
import { SectionTitle } from './Timeline';

export default function LoveMeter() {
  const [value, setValue] = useState(0);
  const [state, setState] = useState<'idle' | 'running' | 'done'>('idle');

  const trigger = () => {
    if (state === 'running') return;
    setState('running');
    setValue(0);
    const start = performance.now();
    const duration = 2200;
    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setValue(pct);
      if (pct < 100) {
        requestAnimationFrame(tick);
      } else {
        setState('done');
      }
    };
    requestAnimationFrame(tick);
  };

  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <SectionTitle
          eyebrow="A Question of the Heart"
          title="How Much Do I Admire Rumiii?"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mt-14 rounded-3xl glass-rose p-10 shadow-glass"
        >
          {/* meter bar */}
          <div className="relative h-8 w-full overflow-hidden rounded-full bg-white/5 ring-1 ring-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-rose-400 via-lavender-400 to-gold-300"
              style={{ width: `${value}%` }}
              animate={{ boxShadow: '0 0 24px rgba(255,111,156,0.6)' }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-lg font-semibold text-white drop-shadow">
                {Math.round(value)}%
              </span>
            </div>
          </div>

          <div className="mt-8 h-24">
            <AnimatePresence mode="wait">
              {state === 'idle' && (
                <motion.button
                  key="btn"
                  onClick={trigger}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-400 to-lavender-400 px-8 py-3 font-medium text-ink-900 shadow-glow"
                >
                  <Heart size={18} className="fill-ink-900" />
                  Find out
                </motion.button>
              )}
              {state === 'running' && (
                <motion.p
                  key="running"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="font-serif text-lg italic text-rose-100/80"
                >
                  Measuring something that has no limit...
                </motion.p>
              )}
              {state === 'done' && (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 14 }}
                  className="flex flex-col items-center"
                >
                  <div className="flex items-center gap-2 text-gradient-gold">
                    <InfinityIcon size={40} strokeWidth={2.5} />
                    <span className="font-cursive text-5xl">Endless</span>
                  </div>
                  <p className="mt-2 font-serif text-sm italic text-rose-200/70">
                    Numbers can't hold this.
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
