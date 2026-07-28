import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

type Props = {
  onBegin: () => void;
};

export default function Hero({ onBegin }: Props) {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 py-24">
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass-rose px-5 py-2 text-sm text-rose-100"
        >
          <Sparkles size={16} className="text-gold-300" />
          A little world, made just for you
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-cursive text-6xl leading-tight sm:text-7xl md:text-8xl"
        >
          <span className="shimmer-text">Dear Rumiii</span>
          <motion.span
            className="ml-3 inline-block text-rose-400"
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Heart size={48} className="inline fill-rose-400" />
          </motion.span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mx-auto mt-8 max-w-xl"
        >
          <Typewriter
            lines={[
              'Some people write poems.',
              'Some write songs.',
              'I built this little world just for you.',
            ]}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-12"
        >
          <button
            onClick={onBegin}
            className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-rose-400 via-lavender-400 to-gold-300 px-10 py-4 text-lg font-medium text-ink-900 shadow-glow transition-transform hover:scale-105"
          >
            <span className="relative z-10">Begin the Journey</span>
            <Sparkles size={20} className="relative z-10 animate-pulse" />
            <span className="absolute inset-0 -z-0 rounded-full bg-gradient-to-r from-rose-400 via-lavender-400 to-gold-300 opacity-60 blur-lg transition-opacity group-hover:opacity-90" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="mt-16 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-rose-200/60"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 5v14M5 12l7 7 7-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Typewriter({ lines }: { lines: string[] }) {
  const full = lines.join('\n');
  return <TypewriterInner text={full} />;
}

function TypewriterInner({ text }: { text: string }) {
  return (
    <motion.p
      className="whitespace-pre-line font-serif text-xl italic leading-relaxed text-rose-50/90 sm:text-2xl"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.04, delayChildren: 0.8 } },
      }}
    >
      {text.split('').map((ch, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          {ch}
        </motion.span>
      ))}
    </motion.p>
  );
}
