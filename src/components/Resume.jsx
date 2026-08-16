import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personal } from '../data/portfolioData';

const DownloadIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const EyeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
  </svg>
);

const PrintIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

export default function Resume() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [downloaded, setDownloaded] = useState(false);
  const [activeTab, setActiveTab] = useState('visual');
  const [modalOpen, setModalOpen] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const handleDownload = () => {
    setDownloaded(true);
    const link = document.createElement('a');
    link.href = '/Mathavan_S_Resume.png';
    link.download = 'Mathavan_S_Resume.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setDownloaded(false), 3000);
  };

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="resume" className="section">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
        >
          <div className="eyebrow">
            <span className="eyebrow-line" />
            05. DOCUMENT
          </div>
          <h2 className="section-title">
            Curriculum <span className="gradient-text">Vitae</span>
          </h2>
          <p className="section-desc">
            Official resume document of Mathavan S — IT Engineering Student & Department Vice President.
          </p>
        </motion.div>

        {/* Tab switcher and Controls */}
        <motion.div
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, marginBottom: 28 }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <div className="filter-tabs" style={{ margin: 0 }}>
            <button
              className={`filter-tab ${activeTab === 'visual' ? 'active' : ''}`}
              onClick={() => setActiveTab('visual')}
            >
              🖼️ Official Resume Document
            </button>
            <button
              className={`filter-tab ${activeTab === 'interactive' ? 'active' : ''}`}
              onClick={() => setActiveTab('interactive')}
            >
              ⚡ Interactive Details
            </button>
          </div>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <motion.button
              className="btn-primary"
              onClick={handleDownload}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <AnimatePresence mode="wait">
                {downloaded ? (
                  <motion.span key="check" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <CheckIcon /> Downloaded!
                  </motion.span>
                ) : (
                  <motion.span key="download" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <DownloadIcon /> Download Resume
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            <button className="btn-outline" onClick={() => setModalOpen(true)} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <EyeIcon /> Fullscreen View
            </button>

            <button className="btn-outline" onClick={() => window.print()} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <PrintIcon /> Print
            </button>
          </div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'visual' ? (
            <motion.div
              key="visual-tab"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
            >
              <div className="glass-card" style={{ padding: 20, borderRadius: 'var(--radius-xl)', maxWidth: 840, margin: '0 auto' }}>
                <div
                  style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', cursor: 'pointer' }}
                  onClick={() => setModalOpen(true)}
                >
                  <img src="/Mathavan_S_Resume.png" alt="Mathavan S General Resume" style={{ width: '100%', height: 'auto', display: 'block' }} />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    style={{
                      position: 'absolute', inset: 0, background: 'rgba(5, 8, 17, 0.78)', backdropFilter: 'blur(8px)',
                      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, color: '#fff',
                    }}
                  >
                    <span style={{ fontSize: '2.4rem' }}>🔍</span>
                    <span style={{ fontSize: '1.05rem', fontWeight: 700 }}>Click for Fullscreen View</span>
                    <span style={{ fontSize: '0.82rem', color: 'var(--cyan)', fontFamily: 'var(--font-mono)' }}>Mathavan_S_Resume.png</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="interactive-tab"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
            >
              <div className="resume-preview">
                <div style={{ textAlign: 'center', marginBottom: 32, paddingBottom: 24, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  <h2 style={{ fontSize: '2.2rem', fontWeight: 900, marginBottom: 4 }}>
                    <span className="gradient-text">MATHAVAN S.</span>
                  </h2>
                  <p style={{ color: 'var(--cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.88rem', marginBottom: 10 }}>
                    GENERAL RESUME — B.Tech Information Technology
                  </p>
                  <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <span>📱 8072456474</span>
                    <span>✉️ mathavan.work18@gmail.com</span>
                    <span>📍 Coimbatore – 46</span>
                  </div>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <h3 style={{ fontSize: '0.76rem', fontFamily: 'var(--font-mono)', color: 'var(--cyan)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 10 }}>About Me</h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>{personal.about}</p>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <h3 style={{ fontSize: '0.76rem', fontFamily: 'var(--font-mono)', color: 'var(--cyan)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>Projects</h3>
                  {[
                    { name: '1. Figma Mini Shopping App', desc: 'Hands-on Figma design, UI/UX layouts & user-centric mobile prototypes.' },
                    { name: '2. AI-Powered E-Commerce App', desc: 'Mobile e-commerce app leveraging ChatGPT and Rork AI for rapid prototyping.' },
                    { name: '3. Hand Movement Detection System', desc: 'Real-time computer vision tracking using webcam, Python & AI algorithms.' },
                    { name: '4. E-Waste Management App (Green Loop)', desc: 'MERN stack app connecting users with collection centers for proper recycling. Built during hackathon at Suguna College.' },
                  ].map(p => (
                    <div key={p.name} style={{ marginBottom: 12 }}>
                      <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--text-primary)' }}>{p.name}</div>
                      <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>{p.desc}</div>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 style={{ fontSize: '0.76rem', fontFamily: 'var(--font-mono)', color: 'var(--cyan)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 10 }}>Skills</h3>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {['Graphic Design', 'Vibe Coding', 'Python', 'SQL', 'Basic Programming', 'Leadership', 'Computer Vision', 'ChatGPT & Rork AI'].map(s => (
                      <span key={s} className="tag tag-emerald">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Fullscreen View Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 10000,
              background: 'rgba(3, 5, 12, 0.95)', backdropFilter: 'blur(20px)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24,
            }}
            onClick={() => setModalOpen(false)}
          >
            <div style={{ position: 'absolute', top: 20, right: 24, display: 'flex', gap: 10, zIndex: 10001 }} onClick={e => e.stopPropagation()}>
              <button className="btn-primary" onClick={handleDownload}><DownloadIcon /> Download</button>
              <button className="btn-outline" onClick={() => setModalOpen(false)}><CloseIcon /> Close</button>
            </div>
            <div style={{ maxWidth: '90vw', maxHeight: '85vh', overflow: 'auto', borderRadius: 'var(--radius-lg)' }} onClick={e => e.stopPropagation()}>
              <img src="/Mathavan_S_Resume.png" alt="Mathavan S Resume Fullscreen" style={{ maxWidth: '100%', height: 'auto', display: 'block' }} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
