import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data/portfolioData';
import { DynamicIcon } from './CustomIcons';

const FILTERS = [
  { key: 'all',      label: 'All Projects' },
  { key: 'ai',       label: '✦ AI & ML' },
  { key: 'fullstack',label: '◆ Full Stack' },
  { key: 'design',   label: '▸ UI/UX' },
];

const projectColors = {
  recycle: 'var(--emerald)',
  spark:   'var(--violet)',
  vision:  'var(--cyan)',
  layout:  '#ec4899',
};

const GitHubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

function ProjectCard({ project, index }) {
  const [hovered, setHovered]   = useState(false);
  const [tilt, setTilt]         = useState({ x: 0, y: 0 });
  const { ref, inView }         = useInView({ threshold: 0.08, triggerOnce: true });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx   = rect.left + rect.width / 2;
    const cy   = rect.top + rect.height / 2;
    const tx   = ((e.clientY - cy) / (rect.height / 2)) * -4;
    const ty   = ((e.clientX - cx) / (rect.width / 2)) * 4;
    setTilt({ x: tx, y: ty });
  };

  return (
    <motion.div
      ref={ref}
      className="project-card"
      initial={{ opacity: 0, y: 44 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
      style={{
        transform: hovered
          ? `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-6px)`
          : 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { setHovered(false); setTilt({ x: 0, y: 0 }); }}
    >
      <div className="project-thumb" style={{ background: project.gradient }}>
        <DynamicIcon type={project.typeIcon} color={projectColors[project.typeIcon]} circleSize={56} iconSize={24} />
      </div>

      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.desc}</p>

        <div className="project-tags">
          {project.tags.map(t => (
            <span key={t} className="tag tag-cyan">{t}</span>
          ))}
        </div>

        <div className="project-links">
          {project.github ? (
            <a href={project.github} target="_blank" rel="noreferrer" className="project-link-btn">
              <GitHubIcon /> GitHub
            </a>
          ) : null}
          <button
            className="project-link-btn"
            disabled={!project.demo}
            style={!project.demo ? { opacity: 0.38, cursor: 'not-allowed' } : {}}
          >
            🔗 {project.demo ? 'Live Demo' : 'Coming Soon'}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const { ref, inView }     = useInView({ threshold: 0.08, triggerOnce: true });
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
        >
          <div className="eyebrow">
            <span className="eyebrow-line" />
            02. SELECTION
          </div>
          <h2 className="section-title">
            Things I've <span className="gradient-text">built</span>
          </h2>
          <p className="section-desc">
            A selection of projects exploring AI, full-stack development, computer vision, and real-world problem solving.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.18, duration: 0.5 }}
        >
          <div className="filter-tabs">
            {FILTERS.map(f => (
              <button
                key={f.key}
                className={`filter-tab ${filter === f.key ? 'active' : ''}`}
                onClick={() => setFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="projects-grid"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
