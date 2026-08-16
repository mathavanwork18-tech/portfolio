import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { codingProfiles } from '../data/portfolioData';

export default function CodingProfiles() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="profiles" className="section">
      <div className="blob blob-cyan" style={{ width: 350, height: 350, top: '15%', right: '-5%' }} />
      <div className="container" ref={ref} style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">08. Profiles</div>
          <h2 className="section-title">
            Coding <span className="gradient-text">Profiles</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 40, maxWidth: 480 }}>
            Find me across the web — from open source to competitive programming.
          </p>
        </motion.div>

        <div className="profiles-grid">
          {codingProfiles.map((profile, i) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noreferrer"
              className="profile-card"
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ y: -8, scale: 1.04, boxShadow: `0 16px 40px ${profile.bg}, 0 0 0 1px ${profile.color}40` }}
              style={{ textDecoration: 'none' }}
            >
              <div
                className="profile-platform-icon"
                style={{ background: profile.bg, color: profile.color }}
              >
                {profile.icon}
              </div>
              <div className="profile-name">{profile.name}</div>
              <div className="profile-handle" style={{ color: profile.color }}>{profile.handle}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: 4 }}>{profile.stat}</div>
              <div style={{
                marginTop: 12,
                padding: '6px 14px',
                background: profile.bg,
                color: profile.color,
                borderRadius: 100,
                fontSize: '0.75rem',
                fontWeight: 600,
                fontFamily: 'var(--font-mono)',
              }}>
                View Profile →
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
