import { motion } from 'framer-motion';
import { SectionTitle } from './Timeline';

const memories = [
  { caption: 'One smile.', img: 'https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { caption: 'One conversation.', img: 'https://images.pexels.com/photos/3062932/pexels-photo-3062932.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { caption: 'One unforgettable person.', img: 'https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { caption: 'A moment that stayed.', img: 'https://images.pexels.com/photos/1755385/pexels-photo-1755385.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { caption: 'Something quietly beautiful.', img: 'https://images.pexels.com/photos/1739841/pexels-photo-1739841.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { caption: 'A feeling, kept safe.', img: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

export default function MemoryWall() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Floating Memory Wall"
          title="Little Moments, Kept Forever"
        />

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {memories.map((m, i) => (
            <Polaroid key={i} {...m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Polaroid({
  caption,
  img,
  index,
}: {
  caption: string;
  img: string;
  index: number;
}) {
  const rotate = (index % 2 === 0 ? -1 : 1) * (2 + (index % 3));
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      whileHover={{ scale: 1.04, rotate: 0, zIndex: 10 }}
      className="mx-auto w-full max-w-xs"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 5 + index,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: index * 0.3,
        }}
        className="rounded-md bg-white p-3 pb-12 shadow-2xl"
      >
        <div className="aspect-square overflow-hidden rounded-sm bg-rose-100">
          <img
            src={img}
            alt={caption}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <p className="mt-3 text-center font-parisienne text-2xl text-ink-800">
          {caption}
        </p>
      </motion.div>
    </motion.div>
  );
}
