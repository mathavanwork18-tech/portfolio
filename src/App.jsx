import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Resume from './components/Resume';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Articles from './components/Articles';
import CodingProfiles from './components/CodingProfiles';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import BackgroundMusic from './components/BackgroundMusic';

export default function App() {
  const [cursorPos, setCursorPos] = useState({ x: -500, y: -500 });
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setCursorPos({ x: clientX, y: clientY });

      // Subtle parallax offset calculations
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const ox = (clientX - cx) / cx; // -1 to 1
      const oy = (clientY - cy) / cy; // -1 to 1
      setParallax({ x: ox, y: oy });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* ── 5-Layer Creative Background System ── */}
      <div className="bg-system" aria-hidden="true">
        {/* Layer 1 — Base Deep Charcoal */}
        <div className="bg-layer-base" />

        {/* Layer 2 — Gradient Mesh */}
        <div className="bg-layer-mesh" />

        {/* Layer 3 — Ambient Floating Orbs with Desktop Parallax */}
        <div
          className="bg-orb bg-orb-1"
          style={{ transform: `translate3d(${parallax.x * 20}px, ${parallax.y * 20}px, 0)` }}
        />
        <div
          className="bg-orb bg-orb-2"
          style={{ transform: `translate3d(${parallax.x * -30}px, ${parallax.y * -30}px, 0)` }}
        />
        <div
          className="bg-orb bg-orb-3"
          style={{ transform: `translate3d(${parallax.x * 15}px, ${parallax.y * 15}px, 0)` }}
        />

        {/* Layer 4 — Technical Fine Grid Texture */}
        <div className="bg-layer-grid" />

        {/* Layer 5 — Vignette Edge Darkening */}
        <div className="bg-layer-vignette" />
      </div>

      {/* Desktop Ambient Cursor Light Follower */}
      <div
        className="cursor-light"
        aria-hidden="true"
        style={{
          transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0)`,
          opacity: cursorPos.x > 0 ? 1 : 0,
        }}
      />

      {/* Interactive particle canvas */}
      <ParticleBackground />

      {/* Floating Glass Navbar */}
      <Navbar />

      {/* Main Content Flow */}
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Timeline />
          <Resume />
          <CTA />
          <Articles />
          <CodingProfiles />
          <Contact />
          <Footer />
        </motion.div>
      </main>

      {/* Floating Ambient Music Player */}
      <BackgroundMusic />

      {/* Floating WhatsApp Widget */}
      <WhatsAppWidget />
    </>
  );
}
