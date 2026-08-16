import React from 'react';
import { motion } from 'framer-motion';
import { personal, stats } from '../data/portfolioData';

// ── Icons ──
const WhatsAppIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const DownloadIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">

          {/* ── Left Content Glass Panel ── */}
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <div className="hero-glass-panel">

              {/* Eyebrow Label */}
              <motion.div variants={item}>
                <div className="eyebrow">
                  <span className="eyebrow-line" />
                  DEVELOPER • CREATOR
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--cyan)', display: 'inline-block', boxShadow: '0 0 8px var(--cyan)', marginLeft: 4 }} />
                </div>
              </motion.div>

              {/* Visually Dominant Name */}
              <motion.h1 className="hero-display-name" variants={item}>
                <span className="gradient-text">MATHAVAN S.</span>
              </motion.h1>

              {/* Developer Identity Headline */}
              <motion.h2 className="hero-headline" variants={item}>
                Building intelligent software & practical experiences.
              </motion.h2>

              {/* Concise Supporting Paragraph */}
              <motion.p className="hero-paragraph" variants={item}>
                3rd year B.Tech IT student at Suguna College of Engineering. I build full-stack web platforms, computer vision systems, and modern applications.
              </motion.p>

              {/* Action CTAs */}
              <motion.div className="hero-actions" variants={item}>
                <button
                  className="btn-primary"
                  onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View My Work →
                </button>

                <a href={personal.socials.whatsapp} target="_blank" rel="noreferrer" className="btn-whatsapp">
                  <WhatsAppIcon /> Chat on WhatsApp
                </a>

                <a href="/Mathavan_S_Resume.png" download="Mathavan_S_Resume.png" className="btn-outline">
                  <DownloadIcon /> Download Resume
                </a>

                <a href={personal.socials.linkedin} target="_blank" rel="noreferrer" className="btn-outline" title="LinkedIn">
                  <LinkedInIcon />
                </a>

                <a href={personal.socials.github} target="_blank" rel="noreferrer" className="btn-outline" title="GitHub">
                  <GitHubIcon />
                </a>
              </motion.div>

              {/* Stats Counters */}
              <motion.div className="hero-stats" variants={item}>
                {stats.map(s => (
                  <div key={s.label} className="stat-card">
                    <div className="stat-value">{s.value}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </motion.div>

            </div>
          </motion.div>

          {/* ── Right Column: Mathavan's Real Portrait Photo in Glass Frame ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative' }}
          >
            <div
              className="glass-card"
              style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                padding: 16,
                boxShadow: '0 25px 70px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 212, 236, 0.15)',
                border: '1px solid rgba(0, 212, 236, 0.25)',
                position: 'relative',
              }}
            >
              {/* Image Wrapper */}
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
                  alt="Mathavan S"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block',
                  }}
                />

                {/* Subtle Gradient Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(5, 8, 17, 0.85) 0%, transparent 60%)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Status Badge Overlay — Only Logo/Name */}
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
