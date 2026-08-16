import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/portfolioData';
import { DynamicIcon } from './CustomIcons';

function SkillBar({ name, level, index }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  return (
    <div ref={ref} className="skill-item">
      <div className="skill-meta">
        <span className="skill-name">{name}</span>
        <span className="skill-pct" style={{ fontFamily: 'var(--font-mono)' }}>{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-fill"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: level / 100 } : { scaleX: 0 }}
          transition={{ duration: 1.1, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
}

const categoryColors = {
  code:    'var(--cyan)',
  cpu:     'var(--violet)',
  palette: '#f97316',
  users:   'var(--emerald)',
};

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <section id="skills" className="section">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
        >
          <div className="eyebrow">
            <span className="eyebrow-line" />
            03. CAPABILITIES
          </div>
          <h2 className="section-title">
            What I <span className="gradient-text">work with</span>
          </h2>
          <p className="section-desc">
            Core technical languages, AI workflows, frameworks, and leadership capabilities developed through practice and project execution.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((cat, ci) => (
            <motion.div
              key={cat.category}
              className="skill-category"
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.11, ease: [0.16, 1, 0.3, 1] }}
            >
              <div style={{ marginBottom: 16 }}>
                <DynamicIcon type={cat.iconType} color={categoryColors[cat.iconType]} circleSize={44} iconSize={18} />
              </div>
              <div className="skill-category-title">{cat.category}</div>
              {cat.items.map((skill, si) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} index={si} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
