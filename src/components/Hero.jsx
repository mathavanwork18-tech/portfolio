import React from 'react';
import { motion } from 'framer-motion';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-grid">

          {/* ── 1. Hero Text Content ── */}
          <motion.div
            className="hero-text"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="hero-label" variants={itemVariants}>
              <div className="eyebrow">
                <span className="eyebrow-line" />
                ✨ WELCOME TO MY PORTFOLIO
              </div>
            </motion.div>

            <motion.h1 className="hero-display-name" variants={itemVariants}>
              MATHAVAN <span className="gradient-text">S.</span>
            </motion.h1>

            <motion.h2 className="hero-headline" variants={itemVariants}>
              Building intelligent software & practical experiences.
            </motion.h2>

            <motion.p className="hero-paragraph" variants={itemVariants}>
              3rd year B.Tech IT student at Suguna College of Engineering. I build 
              full-stack web platforms, computer vision systems, and modern applications.
            </motion.p>

            {/* Stats Section */}
            <motion.div className="hero-stats" variants={itemVariants}>
              <div className="stat-card">
                <div className="stat-value">4+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">VP</div>
                <div className="stat-label">IT Department</div>
              </div>
            </motion.div>

            {/* Action CTAs */}
            <motion.div className="hero-actions" variants={itemVariants}>
              <button
                className="btn-primary"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                → View My Work
              </button>

              <a href="https://wa.me/918072456474" className="btn-whatsapp" target="_blank" rel="noopener noreferrer">
                💬 Chat on WhatsApp
              </a>

              <a href="/Mathavan_S_Resume.png" download="Mathavan_S_Resume.png" className="btn-outline">
                ⬇️ Download Resume
              </a>

              <a
                href="https://linkedin.com/in/mathavan-india"
                className="btn-outline"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/mathavanwork18-tech"
                className="btn-outline"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                GitHub
              </a>
            </motion.div>
          </motion.div>

          {/* ── 2. Mathavan's Portrait Photo Card (Stacked sequentially below on mobile) ── */}
          <motion.div
            className="hero-portrait-col"
            variants={containerVariants}
            animate="visible"
            initial="hidden"
            style={{ width: '100%', maxWidth: 360, margin: '0 auto' }}
          >
            <div
              className="glass-card"
              style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                padding: 14,
                boxShadow: '0 25px 70px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 212, 236, 0.15)',
                border: '1px solid rgba(0, 212, 236, 0.25)',
                width: '100%',
              }}
            >
              {/* Photo Container */}
              <div
                style={{
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1 / 1',
                  background: 'linear-gradient(135deg, var(--bg-tertiary), var(--bg-primary))',
                }}
              >
                <img
                  src="/mathavan_photo.jpg"
                  alt="Mathavan S."
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block',
                  }}
                />
              </div>

              {/* Status & Logo Footer Bar Below Photo (100% visible, no image overlap) */}
              <div
                style={{
                  marginTop: 12,
                  background: 'rgba(5, 8, 17, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 'var(--radius-md)',
                  padding: '10px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  boxSizing: 'border-box',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: '1.5px solid var(--cyan)',
                      flexShrink: 0,
                      boxShadow: '0 0 10px rgba(0, 212, 236, 0.3)',
                    }}
                  >
                    <img src="/portfolio_logo.jpg" alt="Mathavan Logo" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <span style={{ fontWeight: 800, fontSize: '0.92rem', color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
                    Mathavan S.
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.72rem', color: 'var(--emerald)', fontFamily: 'var(--font-mono)', flexShrink: 0 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--emerald)', boxShadow: '0 0 8px var(--emerald)' }} />
                  Active
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
