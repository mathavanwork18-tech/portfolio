import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Premium Royalty-Free Non-Copyrighted Ambient Lofi Music Tracks
const MUSIC_TRACKS = [
  {
    name: 'Lo-Fi Chill Ambient',
    url: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3',
  },
  {
    name: 'Ambient Piano & Strings',
    url: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=ambient-piano-amp-strings-10711.mp3',
  },
];

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const [showControls, setShowControls] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const audioRef = useRef(null);

  // Web Audio Synth Fallback
  const audioCtxRef = useRef(null);
  const gainsRef = useRef([]);
  const oscsRef = useRef([]);

  const FREQS = [174.61, 220.0, 261.63, 329.63, 392.0, 440.0];

  const playAudioTrack = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(MUSIC_TRACKS[trackIndex].url);
      audioRef.current.loop = true;
      audioRef.current.volume = volume;
    }

    audioRef.current.volume = volume;
    const playPromise = audioRef.current.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // If browser restricts MP3 autoplay, start Web Audio Ambient Synth as fallback
          startAmbientSynth();
        });
    }
  };

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
      masterGain.gain.setValueAtTime(volume * 0.3, ctx.currentTime);
      masterGain.connect(ctx.destination);

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(400, ctx.currentTime);
      filter.connect(masterGain);

      oscsRef.current = [];
      gainsRef.current = [];

      FREQS.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        gain.gain.setValueAtTime(0.01, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.06 / (idx + 1), ctx.currentTime + 3);

        osc.connect(gain);
        gain.connect(filter);
        osc.start();

        oscsRef.current.push(osc);
        gainsRef.current.push(gain);
      });

      setIsPlaying(true);
    } catch (e) {
      console.warn("Synth audio fallback failed", e);
    }
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    if (audioCtxRef.current) {
      oscsRef.current.forEach(osc => {
        try { osc.stop(); osc.disconnect(); } catch (e) {}
      });
      oscsRef.current = [];
      gainsRef.current = [];
      try { audioCtxRef.current.suspend(); } catch (e) {}
    }
    setIsPlaying(false);
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      playAudioTrack();
    }
  };

  const switchTrack = () => {
    stopAudio();
    const nextIdx = (trackIndex + 1) % MUSIC_TRACKS.length;
    setTrackIndex(nextIdx);
    if (audioRef.current) {
      audioRef.current.src = MUSIC_TRACKS[nextIdx].url;
    }
    setTimeout(() => playAudioTrack(), 100);
  };

  const handleVolumeChange = (e) => {
    const v = parseFloat(e.target.value);
    setVolume(v);
    if (audioRef.current) {
      audioRef.current.volume = v;
    }
    if (audioCtxRef.current) {
      try {
        const ctx = audioCtxRef.current;
        gainsRef.current.forEach((g, idx) => {
          g.gain.setValueAtTime((v * 0.06) / (idx + 1), ctx.currentTime);
        });
      } catch (e) {}
    }
  };

  useEffect(() => {
    return () => {
      stopAudio();
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
          background: isPlaying ? 'rgba(0, 212, 236, 0.14)' : 'rgba(255, 255, 255, 0.05)',
          borderColor: isPlaying ? 'var(--cyan)' : 'rgba(255, 255, 255, 0.12)',
          borderRadius: 'var(--radius-pill)',
          cursor: 'pointer',
          boxShadow: isPlaying ? '0 0 24px rgba(0, 212, 236, 0.3)' : 'none',
          transition: 'all 0.3s ease',
        }}
        aria-label="Toggle Background Music"
      >
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
          {isPlaying ? 'Playing Ambient Lofi' : 'Play Music'}
        </span>
      </motion.button>

      {/* Controls & Track Selector Popup */}
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
              gap: 10,
              borderRadius: 'var(--radius-pill)',
              background: 'rgba(9, 13, 25, 0.92)',
              border: '1px solid rgba(0, 212, 236, 0.25)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
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
              style={{ width: 65, cursor: 'pointer', accentColor: 'var(--cyan)' }}
            />

            <button
              onClick={switchTrack}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: 'var(--text-primary)',
                borderRadius: 'var(--radius-pill)',
                padding: '3px 10px',
                fontSize: '0.72rem',
                cursor: 'pointer',
                fontFamily: 'var(--font-mono)',
              }}
              title="Next Track"
            >
              ⏭ Next
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
