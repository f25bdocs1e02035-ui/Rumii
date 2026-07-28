import { useRef } from 'react';
import { motion } from 'framer-motion';

import LoadingScreen from './components/LoadingScreen';
import CursorGlow from './components/CursorGlow';
import StarField from './components/StarField';
import FloatingPetals from './components/FloatingPetals';
import SoftParticles from './components/SoftParticles';
import ScrollProgress from './components/ScrollProgress';
import MusicButton from './components/MusicButton';

import Hero from './components/Hero';
import Timeline from './components/Timeline';
import QuoteCards from './components/QuoteCards';
import LoveMeter from './components/LoveMeter';
import Reasons from './components/Reasons';
import MemoryWall from './components/MemoryWall';
import HeartMessage from './components/HeartMessage';
import Proposal from './components/Proposal';
import Footer from './components/Footer';

export default function App() {
  const timelineRef = useRef<HTMLDivElement | null>(null);

  const scrollToTimeline = () => {
    timelineRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink-900 text-white">
      {/* Ambient layers */}
      <LoadingScreen />
      <CursorGlow />
      <StarField />
      <FloatingPetals />
      <SoftParticles />
      <ScrollProgress />
      <MusicButton />

      {/* Ambient gradient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            'radial-gradient(1200px 800px at 20% 10%, rgba(255,111,156,0.18), transparent 60%), radial-gradient(1000px 700px at 85% 30%, rgba(163,121,245,0.16), transparent 60%), radial-gradient(900px 700px at 50% 90%, rgba(245,208,97,0.10), transparent 60%)',
        }}
      />

      {/* Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.4 }}
        className="relative z-10"
      >
        <Hero onBegin={scrollToTimeline} />
        <div ref={timelineRef}>
          <Timeline />
        </div>
        <QuoteCards />
        <LoveMeter />
        <Reasons />
        <MemoryWall />
        <HeartMessage />
        <Proposal />
        <Footer />
      </motion.main>
    </div>
  );
}
