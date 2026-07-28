import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { SectionTitle } from './Timeline';

export default function HeartMessage() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionTitle eyebrow="From My Heart" title="A Letter for You" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="relative mt-14 overflow-hidden rounded-3xl glass-rose p-8 shadow-glass sm:p-12"
        >
          {/* glow */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-rose-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-lavender-400/20 blur-3xl" />

          <div className="relative z-10">
            <div className="mb-6 flex items-center gap-3">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.4, repeat: Infinity }}
              >
                <Heart size={28} className="fill-rose-400 text-rose-400" />
              </motion.span>
              <h3 className="font-cursive text-4xl text-gradient-rose">
                From My Heart
              </h3>
            </div>

            <div className="space-y-5 font-serif text-lg leading-relaxed text-rose-50/90 sm:text-xl">
              <p className="font-parisienne text-3xl text-gradient-gold">
                Rumiii,
              </p>
              <p>
                I don't know what the future holds.
              </p>
              <p>
                I only know meeting someone as wonderful as you has made my days
                brighter.
              </p>
              <p>
                Whether your answer is yes or no, I'll always respect you and
                your decision.
              </p>
              <p>Thank you for being yourself.</p>
              <p className="mt-6 text-right font-parisienne text-2xl text-gradient-rose">
                — Waseem
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
