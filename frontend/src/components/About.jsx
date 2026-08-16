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

        <div className="about-grid">
          {/* Bio Glass Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: 0.1 }}
            style={{ width: '100%' }}
          >
            <div className="glass-card bio-card">
              <p className="about-paragraph">
                {personal.about}
              </p>
              <div className="bio-tags">
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
            className="about-sidebar"
          >
            {[
              { label: 'Degree', value: 'B.Tech – IT', sub: '2024–2028', icon: <AcademicIcon size={16} color="var(--cyan)" /> },
              { label: 'College', value: 'Suguna College', sub: 'Coimbatore', icon: <AcademicIcon size={16} color="var(--cyan)" /> },
              { label: 'Role', value: 'Vice President', sub: 'IT Department', icon: <BadgeIcon size={16} color="var(--violet)" /> },
              { label: 'Location', value: 'Coimbatore', sub: 'Tamil Nadu', icon: <MapPinIcon size={16} color="var(--emerald)" /> },
              { label: 'Email', value: 'mathavan.work18', sub: '@gmail.com', link: personal.socials.email, icon: <MailIcon size={16} color="var(--cyan)" /> },
            ].map((item) => (
              <div key={item.label} className="glass-card info-item-card">
                <div className="info-card-left">
                  {item.icon}
                  <span className="info-card-label">{item.label}</span>
                </div>
                <div className="info-card-right">
                  {item.link ? (
                    <a href={item.link} className="info-card-link">{item.value}{item.sub}</a>
                  ) : (
                    <>
                      <div className="info-card-value">{item.value}</div>
                      <div className="info-card-sub">{item.sub}</div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Highlight Cards */}
        <motion.div
          className="about-highlights-grid"
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
            <div key={fact.title} className="glass-card highlight-card">
              <div className="highlight-icon-wrap">{fact.icon}</div>
              <div className="highlight-title">{fact.title}</div>
              <div className="highlight-desc">{fact.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
