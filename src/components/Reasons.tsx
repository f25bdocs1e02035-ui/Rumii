import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { SectionTitle } from './Timeline';

const reasons = [
  { title: 'Your smile', emoji: '🌹', desc: 'It turns ordinary moments into something worth remembering.' },
  { title: 'Your kindness', emoji: '🌷', desc: 'The gentle way you treat people stays with them long after.' },
  { title: 'Your personality', emoji: '💎', desc: 'There is no one else quite like you, and that is a gift.' },
  { title: 'Your confidence', emoji: '✨', desc: 'The quiet certainty in who you are is genuinely inspiring.' },
  { title: 'Your laugh', emoji: '🌸', desc: 'A sound that could make any heavy day feel lighter.' },
  { title: 'Your uniqueness', emoji: '🦋', desc: 'Everything about you is its own kind of wonderful.' },
];

export default function Reasons() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Reasons Why You're Amazing"
          title="What Makes You, You"
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl glass-rose p-7 shadow-glass transition-shadow duration-300 hover:shadow-glow"
            >
              <div className="absolute -right-6 -top-6 text-7xl opacity-10 transition-opacity duration-300 group-hover:opacity-20">
                {r.emoji}
              </div>
              <div className="relative z-10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-2xl ring-1 ring-white/10">
                  {r.emoji}
                </div>
                <h3 className="font-cursive text-3xl text-gradient-rose">
                  {r.title}
                </h3>
                <p className="mt-3 font-serif text-base italic leading-relaxed text-rose-50/80">
                  {r.desc}
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-gold-300/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Sparkles size={12} />
                  truly yours
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
