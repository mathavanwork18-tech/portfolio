import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { articles } from '../data/portfolioData';

export default function Articles() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="articles" className="section">
      <div className="blob blob-violet" style={{ width: 350, height: 350, bottom: '10%', right: '-5%' }} />
      <div className="container" ref={ref} style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">09. Writing</div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Articles</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 40, maxWidth: 480 }}>
            Thoughts on technology, AI, sustainability, and life as a student developer. More coming soon!
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {articles.map((article, i) => (
            <motion.div
              key={article.title}
              className="article-card"
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="article-icon">{article.icon}</div>
              <div style={{ flex: 1 }}>
                <div className="article-meta">{article.date} · {article.tag}</div>
                <div className="article-title">{article.title}</div>
                <div className="article-desc">{article.desc}</div>
              </div>
              <span
                style={{
                  padding: '6px 14px',
                  background: 'var(--cyan-dim)',
                  color: 'var(--cyan)',
                  borderRadius: 100,
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-mono)',
                  whiteSpace: 'nowrap',
                  alignSelf: 'flex-start',
                }}
              >
                Soon
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
