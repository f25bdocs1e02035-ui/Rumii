import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative px-6 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-md"
      >
        <div className="mb-4 flex items-center justify-center gap-2">
          <span className="font-parisienne text-2xl text-gradient-rose">
            Made with
          </span>
          <motion.span
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            <Heart size={20} className="fill-rose-400 text-rose-400" />
          </motion.span>
          <span className="font-parisienne text-2xl text-gradient-rose">
            by Waseem
          </span>
        </div>
        <p className="font-serif text-sm italic leading-relaxed text-rose-200/60">
          Some websites sell products.
          <br />
          This one simply carries sincere feelings.
        </p>
        <div className="mx-auto mt-6 h-px w-32 bg-gradient-to-r from-transparent via-rose-300/40 to-transparent" />
      </motion.div>
    </footer>
  );
}
