import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [showControls, setShowControls] = useState(false);
  const audioCtxRef = useRef(null);
  const gainsRef = useRef([]);
  const oscsRef = useRef([]);

  // Pentatonic ambient chord frequencies (F Major / D Minor relaxing ambient pad)
  const FREQS = [174.61, 220.0, 261.63, 329.63, 392.0, 440.0, 523.25];

  const startAmbientSynth = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        audioCtxRef.current = new AudioCtx();
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(volume, ctx.currentTime);
      masterGain.connect(ctx.destination);

      // Create warm low pass filter
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, ctx.currentTime);
      filter.connect(masterGain);

      // Create ambient chord oscillators
      oscsRef.current = [];
      gainsRef.current = [];

      FREQS.slice(0, 4).forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Soft volume envelope for ambient pad
        gain.gain.setValueAtTime(0.01, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.08 / (idx + 1), ctx.currentTime + 3);

        osc.connect(gain);
        gain.connect(filter);
        osc.start();

        oscsRef.current.push(osc);
        gainsRef.current.push(gain);
      });

      setIsPlaying(true);
    } catch (err) {
      console.warn("Audio Context init failed", err);
    }
  };

  const stopAmbientSynth = () => {
    try {
      if (audioCtxRef.current) {
        oscsRef.current.forEach(osc => {
          try { osc.stop(); osc.disconnect(); } catch (e) {}
        });
        oscsRef.current = [];
        gainsRef.current = [];
        audioCtxRef.current.suspend();
      }
    } catch (e) {}
    setIsPlaying(false);
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopAmbientSynth();
    } else {
      startAmbientSynth();
    }
  };

  const handleVolumeChange = (e) => {
    const v = parseFloat(e.target.value);
    setVolume(v);
    if (audioCtxRef.current) {
      try {
        const ctx = audioCtxRef.current;
        gainsRef.current.forEach((g, idx) => {
          g.gain.setValueAtTime((v * 0.08) / (idx + 1), ctx.currentTime);
        });
      } catch (e) {}
    }
  };

  useEffect(() => {
    return () => {
      stopAmbientSynth();
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 24,
        left: 24,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
      }}
    >
      <motion.button
        className="glass-card"
        onClick={toggleMusic}
        onMouseEnter={() => setShowControls(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          padding: '10px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          background: isPlaying ? 'rgba(0, 212, 236, 0.12)' : 'rgba(255, 255, 255, 0.04)',
          borderColor: isPlaying ? 'var(--cyan)' : 'rgba(255, 255, 255, 0.1)',
          borderRadius: 'var(--radius-pill)',
          cursor: 'pointer',
          boxShadow: isPlaying ? '0 0 20px rgba(0, 212, 236, 0.25)' : 'none',
          transition: 'all 0.3s ease',
        }}
        aria-label="Toggle Ambient Background Music"
      >
        {/* Animated Equalizer Bars when playing */}
        {isPlaying ? (
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 16 }}>
            <motion.span
              animate={{ height: [4, 14, 6, 16, 4] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
              style={{ width: 3, background: 'var(--cyan)', borderRadius: 2 }}
            />
            <motion.span
              animate={{ height: [12, 6, 16, 8, 12] }}
              transition={{ repeat: Infinity, duration: 0.9, ease: 'easeInOut' }}
              style={{ width: 3, background: 'var(--violet)', borderRadius: 2 }}
            />
            <motion.span
              animate={{ height: [8, 16, 4, 12, 8] }}
              transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
              style={{ width: 3, background: 'var(--emerald)', borderRadius: 2 }}
            />
          </div>
        ) : (
          <span style={{ fontSize: '1.1rem' }}>🎵</span>
        )}

        <span
          style={{
            fontSize: '0.82rem',
            fontWeight: 700,
            fontFamily: 'var(--font-heading)',
            color: isPlaying ? 'var(--cyan)' : 'var(--text-secondary)',
          }}
        >
          {isPlaying ? 'Ambient Music ON' : 'Play Music'}
        </span>
      </motion.button>

      {/* Volume Controls Popup */}
      <AnimatePresence>
        {showControls && isPlaying && (
          <motion.div
            className="glass-card"
            initial={{ opacity: 0, scale: 0.9, x: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: -10 }}
            onMouseLeave={() => setShowControls(false)}
            style={{
              padding: '8px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              borderRadius: 'var(--radius-pill)',
              background: 'rgba(9, 13, 25, 0.9)',
              border: '1px solid rgba(0, 212, 236, 0.2)',
            }}
          >
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>VOL</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={handleVolumeChange}
              style={{ width: 70, cursor: 'pointer', accentColor: 'var(--cyan)' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
