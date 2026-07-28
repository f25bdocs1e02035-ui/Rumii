import { motion } from 'framer-motion';
import { Flower2 } from 'lucide-react';

const thoughts = [
  'The first time I saw your smile...',
  'Every conversation became my favourite.',
  'Your happiness became important to me.',
  'You unknowingly became special.',
];

export default function Timeline() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionTitle
          eyebrow="Every Little Thought..."
          title="The Little Things I Noticed"
        />

        <div className="relative mt-16">
          {/* vertical line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-rose-300/50 via-lavender-300/50 to-gold-300/50 md:left-1/2" />

          <div className="space-y-12">
            {thoughts.map((t, i) => (
              <TimelineCard key={i} text={t} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({ text, index }: { text: string; index: number }) {
  const isLeft = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`relative flex items-center ${
        isLeft ? 'md:justify-start' : 'md:justify-end'
      }`}
    >
      {/* dot */}
      <div className="absolute left-4 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full glass-rose shadow-glow md:left-1/2">
        <Flower2 size={16} className="text-rose-200" />
      </div>

      <div
        className={`ml-12 w-full md:ml-0 md:w-[44%] ${
          isLeft ? 'md:pr-12' : 'md:pl-12'
        }`}
      >
        <div className="group rounded-2xl glass-rose p-6 shadow-glass transition-transform duration-300 hover:-translate-y-1">
          <p className="font-serif text-lg italic leading-relaxed text-rose-50/90 sm:text-xl">
            {text}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7 }}
      className="text-center"
    >
      <p className="font-parisienne text-2xl text-gradient-gold sm:text-3xl">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-cursive text-4xl text-gradient-rose sm:text-5xl md:text-6xl">
        {title}
      </h2>
      <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-rose-300/60 to-transparent" />
    </motion.div>
  );
}
