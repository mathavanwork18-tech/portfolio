import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personal } from '../data/portfolioData';
import { MailIcon, PhoneIcon, MapPinIcon, IconCircle } from './CustomIcons';

const WhatsAppIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const LinkedInIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const CONTACT_CARDS = [
  { label: 'Email',     value: 'mathavan.work18@gmail.com',     icon: <MailIcon size={18} color="#f97316" />,       href: 'mailto:mathavan.work18@gmail.com',       color: '#f97316' },
  { label: 'WhatsApp',  value: '+91 8072456474',                icon: <WhatsAppIcon size={18} />,                  href: 'https://wa.me/918072456474',             color: '#25d366' },
  { label: 'LinkedIn',  value: 'linkedin.com/in/mathavan-india',icon: <LinkedInIcon size={18} />,                  href: 'https://www.linkedin.com/in/mathavan-india/', color: '#3b82f6' },
  { label: 'GitHub',    value: 'github.com/mathavanwork18-tech',icon: <GitHubIcon size={18} />,                    href: 'https://github.com/mathavanwork18-tech', color: '#f1f5f9' },
  { label: 'Phone',     value: '8072456474',                    icon: <PhoneIcon size={18} color="var(--violet)" />, href: 'tel:+918072456474',                      color: 'var(--violet)' },
  { label: 'Location',  value: 'Coimbatore – 46, TN',           icon: <MapPinIcon size={18} color="var(--cyan)" />,  href: 'https://maps.google.com/?q=Coimbatore', color: 'var(--cyan)' },
];

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });
  const [name,    setName]    = React.useState('');
  const [email,   setEmail]   = React.useState('');
  const [message, setMessage] = React.useState('');
  const [errors,  setErrors]  = React.useState({});
  const [sent,    setSent]    = React.useState(false);

  const validate = () => {
    const e = {};
    if (!name.trim())                                     e.name    = true;
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) e.email   = true;
    if (!message.trim())                                  e.message = true;
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    const msg   = `Hi Mathavan! I'm ${name} (${email}).\n\n${message}`;
    const waUrl = `https://wa.me/918072456474?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
    setSent(true);
    setName(''); setEmail(''); setMessage('');
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
        >
          <div className="eyebrow">
            <span className="eyebrow-line" />
            06. GET IN TOUCH
          </div>
          <h2 className="section-title">
            Let's build <span className="gradient-text">something</span>
          </h2>
          <p className="section-desc">
            Available for internship opportunities, project collaborations, and tech discussions. Reach out via any channel below!
          </p>
        </motion.div>

        <motion.div
          className="contact-glass-wrap"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.12 }}
        >
          <div className="contact-grid">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {CONTACT_CARDS.map((card, i) => (
                <motion.a
                  key={card.label}
                  href={card.href}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card"
                  initial={{ opacity: 0, y: 18 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.14 + i * 0.07 }}
                  whileHover={{ borderColor: card.color + '50', y: -2 }}
                >
                  <IconCircle color={card.color} size={44}>
                    {card.icon}
                  </IconCircle>
                  <div>
                    <div className="contact-label">{card.label}</div>
                    <div className="contact-value" style={{ fontSize: '0.82rem', wordBreak: 'break-all' }}>{card.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.22 }}
            >
              <div style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 'var(--radius-lg)',
                padding: '28px 24px',
              }}>
                <h3 style={{ fontSize: '1.08rem', fontWeight: 700, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <IconCircle color="#25d366" size={34}>
                    <WhatsAppIcon size={16} />
                  </IconCircle>
                  Direct WhatsApp Message
                </h3>
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name-input-c">Name</label>
                    <input id="name-input-c" className={`form-input ${errors.name ? 'error' : ''}`} placeholder="Your name" value={name} onChange={e => { setName(e.target.value); setErrors(err => ({ ...err, name: false })); }} />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email-input-c">Email</label>
                    <input id="email-input-c" type="email" className={`form-input ${errors.email ? 'error' : ''}`} placeholder="your@email.com" value={email} onChange={e => { setEmail(e.target.value); setErrors(err => ({ ...err, email: false })); }} />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="message-input-c">Message</label>
                    <textarea id="message-input-c" rows={4} className={`form-textarea ${errors.message ? 'error' : ''}`} placeholder="What would you like to discuss?" value={message} onChange={e => { setMessage(e.target.value); setErrors(err => ({ ...err, message: false })); }} />
                  </div>
                  <motion.button type="submit" className="btn-whatsapp" style={{ width: '100%', justifyContent: 'center' }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                    {sent ? '✅ Sent via WhatsApp!' : <><WhatsAppIcon size={16} /> Send via WhatsApp</>}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
