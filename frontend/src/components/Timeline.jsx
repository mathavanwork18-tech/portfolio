import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { timeline } from '../data/portfolioData';
import { DynamicIcon, ChessIcon, BadgeIcon, CertificateIcon, RecycleIcon } from './CustomIcons';

const colorMap = {
  education:     'var(--cyan)',
  achievement:   '#fbbf24',
  project:       'var(--emerald)',
  certification: 'var(--violet)',
};

export default function Timeline() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="timeline" className="section">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
        >
          <div className="eyebrow">
            <span className="eyebrow-line" />
            04. MILESTONES
          </div>
          <h2 className="section-title">
            Experience & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-desc">
            Leadership roles, competition honors, design certifications, and academic progress.
          </p>
        </motion.div>

        <div className="timeline-grid">
          {/* Vertical Timeline */}
          <div className="timeline">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                className="timeline-item"
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.11 }}
              >
                <div
                  className="timeline-dot"
                  style={{ background: colorMap[item.type] || 'var(--cyan)' }}
                />
                <div className="timeline-year">{item.year}</div>
                <div className="glass-card" style={{ padding: '16px 20px', marginTop: 6, display: 'flex', gap: 14, alignItems: 'center' }}>
                  <DynamicIcon type={item.iconType} color={colorMap[item.type] || 'var(--cyan)'} circleSize={40} iconSize={18} />
                  <div>
                    <div className="timeline-title">{item.title}</div>
                    <div className="timeline-subtitle">{item.subtitle}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Highlights Sidebar */}
          <motion.div
            style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.25 }}
          >
            <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--cyan)', fontSize: '0.76rem', letterSpacing: '0.12em' }}>
              // KEY HIGHLIGHTS
            </div>

            {[
              {
                icon: <BadgeIcon size={18} color="#fbbf24" />,
                title: 'Vice President – IT Dept',
                desc: 'Elected Vice President during 2nd year at Suguna College of Engineering. Leading department initiatives.',
                color: '#fbbf24',
              },
              {
                icon: <ChessIcon size={18} color="var(--cyan)" />,
                title: '14th Prize – District Chess',
                desc: 'Secured 14th place in District Level Junior Open Chess Tournament (Under 15). Strategic thinking on and off the board.',
                color: 'var(--cyan)',
              },
              {
                icon: <CertificateIcon size={18} color="var(--violet)" />,
                title: 'Graphic Design Master Cert',
                desc: 'Completed Master in Graphic Design certification from World Multimedia Association via Adoro MultiMedia.',
                color: 'var(--violet)',
              },
              {
                icon: <RecycleIcon size={18} color="var(--emerald)" />,
                title: 'Hackathon Project Lead',
                desc: 'Developed Green Loop / EcoGo — full-stack MERN e-waste management app — at Suguna College hackathon.',
                color: 'var(--emerald)',
              },
            ].map((ach) => (
              <motion.div
                key={ach.title}
                className="glass-card"
                style={{ padding: '18px 22px', display: 'flex', gap: 14, alignItems: 'center' }}
                whileHover={{ x: 5 }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: '50%', flexShrink: 0,
                  background: `${ach.color}12`, border: `1px solid ${ach.color}33`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: `0 0 14px ${ach.color}18`,
                }}>
                  {ach.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.92rem', marginBottom: 3, color: ach.color }}>{ach.title}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{ach.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
