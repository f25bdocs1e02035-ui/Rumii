import { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { SectionTitle } from './Timeline';

const quotes = [
  'You are my favourite notification.',
  "If I had one wish,\nit would simply be more moments with you.",
  'You make ordinary days feel beautiful.',
  'Some people become memories.\nYou became a dream.',
  "I don't promise perfection.\nI promise sincerity.",
];

export default function QuoteCards() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Whispers of the Heart"
          title="Words I Keep Returning To"
        />

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {quotes.map((q, i) => (
            <FlipCard key={i} quote={q} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FlipCard({ quote, index }: { quote: string; index: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="perspective h-64 cursor-pointer"
      onClick={() => setFlipped((f) => !f)}
    >
      <motion.div
        className="preserve-3d relative h-full w-full transition-transform duration-700"
        style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
      >
        {/* Front */}
        <div className="backface-hidden absolute inset-0 flex flex-col items-center justify-center rounded-2xl glass-rose p-6 text-center shadow-glass">
          <Quote size={28} className="text-gold-300" />
          <p className="mt-4 font-parisienne text-2xl text-gradient-gold">
            Tap to reveal
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-rose-200/60">
            a whisper
          </p>
        </div>
        {/* Back */}
        <div className="backface-hidden rotate-y-180 absolute inset-0 flex items-center justify-center rounded-2xl glass p-6 text-center shadow-glass">
          <p className="whitespace-pre-line font-serif text-lg italic leading-relaxed text-rose-50">
            {quote}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
