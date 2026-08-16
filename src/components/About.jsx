import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personal } from '../data/portfolioData';
import { ChessIcon, SparkIcon, RecycleIcon, PaletteIcon, AcademicIcon, BadgeIcon, MapPinIcon, MailIcon } from './CustomIcons';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="about" className="section">
      <div className="container" ref={ref}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="eyebrow">
            <span className="eyebrow-line" />
            01. BACKGROUND
          </div>
          <h2 className="section-title">
            A little about the <span className="gradient-text">builder</span>
          </h2>
          <p className="section-desc">
            Passionate about Data Science, Vibe Coding, and strategic problem-solving.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,2fr) minmax(0,1fr)', gap: 36, marginTop: 24 }}>
          {/* Bio Glass Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: 0.1 }}
          >
            <div className="glass-card" style={{ padding: 36 }}>
              <p style={{ fontSize: '1.02rem', lineHeight: 1.85, color: 'var(--text-secondary)', marginBottom: 24 }}>
                {personal.about}
              </p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['Python', 'AI & ML', 'MERN Stack', 'Vibe Coding', 'UI/UX Design', 'Department Leadership'].map(tag => (
                  <span key={tag} className="tag tag-cyan">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Info Sidebar */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
          >
            {[
              { label: 'Degree', value: 'B.Tech – IT', sub: '2024–2028', icon: <AcademicIcon size={16} color="var(--cyan)" /> },
              { label: 'College', value: 'Suguna College', sub: 'Coimbatore', icon: <AcademicIcon size={16} color="var(--cyan)" /> },
              { label: 'Role', value: 'Vice President', sub: 'IT Department', icon: <BadgeIcon size={16} color="var(--violet)" /> },
              { label: 'Location', value: 'Coimbatore', sub: 'Tamil Nadu', icon: <MapPinIcon size={16} color="var(--emerald)" /> },
              { label: 'Email', value: 'mathavan.work18', sub: '@gmail.com', link: personal.socials.email, icon: <MailIcon size={16} color="var(--cyan)" /> },
            ].map((item) => (
              <div key={item.label} className="glass-card" style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  {item.icon}
                  <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>{item.label}</span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  {item.link ? (
                    <a href={item.link} style={{ color: 'var(--cyan)', fontSize: '0.88rem', fontWeight: 600, textDecoration: 'none' }}>{item.value}{item.sub}</a>
                  ) : (
                    <>
                      <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>{item.value}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.sub}</div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Highlight Cards */}
        <motion.div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: 16, marginTop: 28 }}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.3 }}
        >
          {[
            { icon: <ChessIcon size={26} color="var(--cyan)" />, title: 'Chess Player', desc: '14th District Level – Under 15' },
            { icon: <SparkIcon size={26} color="var(--violet)" />, title: 'Vibe Coder', desc: 'AI-first development workflow' },
            { icon: <RecycleIcon size={26} color="var(--emerald)" />, title: 'E-Waste Advocate', desc: 'Built Green Loop for e-waste disposal' },
            { icon: <PaletteIcon size={26} color="#f97316" />, title: 'Graphic Designer', desc: 'Master Cert – World Multimedia Assoc.' },
          ].map((fact) => (
            <div key={fact.title} className="glass-card" style={{ padding: 22, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ marginBottom: 12, padding: 10, borderRadius: '50%', background: 'rgba(255,255,255,0.03)' }}>{fact.icon}</div>
              <div style={{ fontWeight: 700, fontSize: '0.92rem', marginBottom: 4 }}>{fact.title}</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{fact.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
