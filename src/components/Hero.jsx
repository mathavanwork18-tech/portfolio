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

            {/* Action Buttons */}
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

          {/* Hero Portrait Photo - NO LAYOUT ANIMATION */}
          <motion.div
            className="hero-portrait-col"
            variants={containerVariants}
            animate="visible"
            initial="hidden"
          >
            <div
              className="glass-card"
              style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                padding: 14,
                boxShadow: '0 25px 70px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 212, 236, 0.15)',
                border: '1px solid rgba(0, 212, 236, 0.25)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  position: 'relative',
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

                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(5, 8, 17, 0.85) 0%, transparent 60%)',
                    pointerEvents: 'none',
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    bottom: 16,
                    left: 16,
                    right: 16,
                    background: 'rgba(5, 8, 17, 0.82)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: 'var(--radius-md)',
                    padding: '12px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '1px solid var(--cyan)',
                      }}
                    >
                      <img src="/portfolio_logo.jpg" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
                      Mathavan S.
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.72rem', color: 'var(--emerald)', fontFamily: 'var(--font-mono)' }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--emerald)', boxShadow: '0 0 8px var(--emerald)' }} />
                    Active
                  </div>
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
