import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  const handleChat = () => {
    const msg = "Hi Mathavan! I visited your portfolio and would love to connect. 🙌";
    window.open(`https://wa.me/918072456474?text=${encodeURIComponent(msg)}`, '_blank');
    setOpen(false);
  };

  return (
    <div className="wa-widget">
      <AnimatePresence>
        {open && (
          <motion.div
            className="wa-popup-card"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            style={{
              position: 'absolute',
              bottom: 72,
              right: 0,
              width: 280,
              background: 'var(--bg-secondary)',
              border: '1px solid rgba(37,211,102,0.3)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
            }}
          >
            {/* Header */}
            <div style={{ background: '#075e54', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg, var(--cyan), var(--violet))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                👨‍💻
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem' }}>Mathavan S</div>
                <div style={{ color: '#25d366', fontSize: '0.75rem' }}>● Online</div>
              </div>
            </div>
            {/* Message bubble */}
            <div style={{ padding: 16 }}>
              <div style={{
                background: '#dcf8c6',
                color: '#111',
                borderRadius: '12px 12px 12px 0',
                padding: '10px 14px',
                fontSize: '0.875rem',
                lineHeight: 1.5,
                maxWidth: '85%',
                marginBottom: 12,
              }}>
                Hi! 👋 I'm Mathavan. Feel free to reach out — I'd love to connect and discuss AI, tech, or any cool projects!
                <div style={{ fontSize: '0.65rem', color: '#555', textAlign: 'right', marginTop: 4 }}>just now</div>
              </div>
              <button
                onClick={handleChat}
                style={{
                  width: '100%',
                  background: '#25d366',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 10,
                  padding: '12px',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  fontFamily: 'var(--font-primary)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#1da851'; e.currentTarget.style.transform = 'scale(1.02)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#25d366'; e.currentTarget.style.transform = 'scale(1)'; }}
              >
                <WhatsAppIcon /> Start Chat
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main WhatsApp button */}
      <motion.button
        className="wa-btn"
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat on WhatsApp"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="close" initial={{ rotate: 0 }} animate={{ rotate: 90 }} exit={{ rotate: 0 }}>
              <CloseIcon />
            </motion.span>
          ) : (
            <motion.span key="wa" initial={{ scale: 0.5 }} animate={{ scale: 1 }}>
              <WhatsAppIcon />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
