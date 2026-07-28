import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

// A soft, royalty-free ambient melody generated via the Web Audio API.
// No external audio file is required, so it works offline and never breaks.
export default function MusicButton() {
  const [playing, setPlaying] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const masterRef = useRef<GainNode | null>(null);
  const loopRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    return () => {
      stopAll();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const stopAll = () => {
    if (loopRef.current) {
      window.clearTimeout(loopRef.current);
      loopRef.current = null;
    }
    if (masterRef.current && ctxRef.current) {
      try {
        masterRef.current.gain.cancelScheduledValues(ctxRef.current.currentTime);
        masterRef.current.gain.linearRampToValueAtTime(
          0,
          ctxRef.current.currentTime + 0.4
        );
      } catch {
        /* ignore */
      }
    }
    if (ctxRef.current) {
      const ctx = ctxRef.current;
      setTimeout(() => {
        try {
          ctx.close();
        } catch {
          /* ignore */
        }
      }, 600);
      ctxRef.current = null;
      masterRef.current = null;
    }
  };

  // A gentle pentatonic lullaby — soft sine pads with reverb-ish delay.
  const startMusic = () => {
    const AC =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    const ctx = new AC();
    ctxRef.current = ctx;

    const master = ctx.createGain();
    master.gain.value = 0;
    master.connect(ctx.destination);
    masterRef.current = master;

    // Fade in
    master.gain.setValueAtTime(0, ctx.currentTime);
    master.gain.linearRampToValueAtTime(0.18, ctx.currentTime + 1.2);

    // Simple delay for spaciousness
    const delay = ctx.createDelay(1.0);
    delay.delayTime.value = 0.38;
    const feedback = ctx.createGain();
    feedback.gain.value = 0.32;
    const wet = ctx.createGain();
    wet.gain.value = 0.28;
    delay.connect(feedback);
    feedback.connect(delay);
    delay.connect(wet);
    wet.connect(master);

    // Pentatonic scale (C major pentatonic) across octaves
    const notes = [
      523.25, 587.33, 659.25, 783.99, 880.0, 1046.5, 1174.66, 1318.51,
    ];
    const melody = [
      0, 2, 4, 5, 4, 2, 0, 2, 4, 6, 5, 4, 2, 0, 2, 4,
      5, 4, 5, 7, 6, 5, 4, 2, 0, 2, 4, 2, 0, 2, 4, 5,
    ];

    const playTone = (freq: number, when: number, dur: number, vol: number) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      g.gain.setValueAtTime(0, when);
      g.gain.linearRampToValueAtTime(vol, when + 0.04);
      g.gain.exponentialRampToValueAtTime(0.0001, when + dur);
      osc.connect(g);
      g.connect(master);
      g.connect(delay);
      osc.start(when);
      osc.stop(when + dur + 0.05);
    };

    // Soft pad chord every 4 beats
    const playPad = (when: number) => {
      const chord = [261.63, 329.63, 392.0]; // C major
      chord.forEach((f) => {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.value = f;
        g.gain.setValueAtTime(0, when);
        g.gain.linearRampToValueAtTime(0.05, when + 0.3);
        g.gain.linearRampToValueAtTime(0.0001, when + 2.6);
        osc.connect(g);
        g.connect(master);
        osc.start(when);
        osc.stop(when + 2.8);
      });
    };

    const beat = 0.62;
    let step = 0;
    startTimeRef.current = ctx.currentTime;

    const schedule = () => {
      if (!ctxRef.current || !masterRef.current) return;
      const ctx2 = ctxRef.current;
      const now = ctx2.currentTime;
      // schedule ahead
      while (step * beat < (now - startTimeRef.current) + 2.5) {
        const t = startTimeRef.current + step * beat;
        const idx = melody[step % melody.length];
        playTone(notes[idx], t, beat * 1.6, 0.12);
        if (step % 4 === 0) playPad(t);
        step++;
      }
      loopRef.current = window.setTimeout(schedule, 400);
    };
    schedule();
  };

  const toggle = () => {
    if (playing) {
      stopAll();
      setPlaying(false);
    } else {
      startMusic();
      setPlaying(true);
    }
  };

  return (
    <motion.button
      onClick={toggle}
      aria-label={playing ? 'Pause background music' : 'Play background music'}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-6 right-6 z-[80] flex h-14 w-14 items-center justify-center rounded-full glass-rose shadow-glow"
    >
      <motion.span
        animate={playing ? { scale: [1, 1.15, 1] } : { scale: 1 }}
        transition={{ duration: 1.4, repeat: playing ? Infinity : 0 }}
        className="text-rose-200"
      >
        {playing ? <Volume2 size={22} /> : <VolumeX size={22} />}
      </motion.span>
      {playing && (
        <motion.span
          className="absolute inset-0 rounded-full border border-rose-300/50"
          animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        />
      )}
    </motion.button>
  );
}
