import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { codingProfiles } from '../data/portfolioData';
import { DynamicIcon } from './CustomIcons';

const GitHubIcon = ({ color = '#f0f6fc', size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = ({ color = '#3b82f6', size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const HackerRankIcon = ({ color = '#00ea64', size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.4 17.4h-1.8v-10.8h1.8v4.2h3.6v-4.2h1.8v10.8h-1.8v-4.8h-3.6v4.8z"/>
  </svg>
);

const renderProfileIcon = (iconType, color) => {
  switch (iconType) {
    case 'github':   return <GitHubIcon color={color} />;
    case 'linkedin': return <LinkedInIcon color={color} />;
    case 'cpu':
    case 'hackerrank': return <HackerRankIcon color={color} />;
    default:         return <DynamicIcon type={iconType} color={color} circleSize={46} iconSize={22} />;
  }
};

export default function CodingProfiles() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="profiles" className="section">
      <div className="container" ref={ref} style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="eyebrow">
            <span className="eyebrow-line" />
            08. PROFILES
          </div>
          <h2 className="section-title">
            Coding <span className="gradient-text">Profiles</span>
          </h2>
          <p className="section-desc">
            Find me across the web — from open source development to coding assessments and professional networks.
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
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: '50%',
                  background: profile.bg,
                  color: profile.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: `1px solid ${profile.color}33`,
                  boxShadow: `0 0 20px ${profile.color}20`,
                  marginBottom: 12,
                }}
              >
                {renderProfileIcon(profile.iconType, profile.color)}
              </div>
              <div className="profile-name" style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: 2 }}>
                {profile.name}
              </div>
              <div className="profile-handle" style={{ color: profile.color, fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 600 }}>
                {profile.handle}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 4 }}>
                {profile.stat}
              </div>
              <div style={{
                marginTop: 16,
                padding: '8px 18px',
                background: profile.bg,
                color: profile.color,
                border: `1px solid ${profile.color}40`,
                borderRadius: 100,
                fontSize: '0.78rem',
                fontWeight: 700,
                fontFamily: 'var(--font-heading)',
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
