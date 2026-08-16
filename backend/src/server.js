/**
 * Mathavan S — Portfolio Backend Server
 * Express API for contact form submissions
 * 
 * Setup:
 *   1. npm install
 *   2. Copy .env.example → .env and fill in values
 *   3. npm run dev
 */

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import nodemailer from 'nodemailer';

dotenv.config();

const app  = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ──
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  methods: ['GET', 'POST'],
}));

// ── Rate limiting — prevent spam ──
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: { error: 'Too many requests, please try again later.' },
});

// ── Health check ──
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', server: 'Mathavan Portfolio API', timestamp: new Date().toISOString() });
});

// ── Contact form endpoint ──
app.post('/api/contact', contactLimiter, async (req, res) => {
  const { name, email, message } = req.body;

  // Validation
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email format.' });
  }
  if (message.length > 2000) {
    return res.status(400).json({ error: 'Message too long (max 2000 chars).' });
  }

  try {
    // Configure transporter — use Gmail App Password or SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from:    `"${name}" <${process.env.SMTP_USER}>`,
      to:      process.env.TO_EMAIL || 'mathavan.work18@gmail.com',
      replyTo: email,
      subject: `💼 Portfolio Contact — ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #0a1020; color: #eef0f8; border-radius: 16px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #00d9f5, #9b5de5); padding: 24px; text-align: center;">
            <h1 style="margin: 0; color: #020b14; font-size: 1.5rem;">New Portfolio Message</h1>
          </div>
          <div style="padding: 32px;">
            <p><strong style="color: #00d9f5;">From:</strong> ${name}</p>
            <p><strong style="color: #00d9f5;">Email:</strong> <a href="mailto:${email}" style="color: #9b5de5;">${email}</a></p>
            <div style="margin-top: 20px; padding: 20px; background: rgba(255,255,255,0.05); border-radius: 10px; border-left: 3px solid #00d9f5;">
              <p style="margin: 0; line-height: 1.8;">${message.replace(/\n/g, '<br>')}</p>
            </div>
            <p style="margin-top: 24px; font-size: 0.85rem; color: #4a5470;">Sent via Mathavan's Portfolio — ${new Date().toLocaleString('en-IN')}</p>
          </div>
        </div>
      `,
    });

    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error('Email send error:', err);
    res.status(500).json({ error: 'Failed to send message. Please try WhatsApp instead.' });
  }
});

// ── Start ──
app.listen(PORT, () => {
  console.log(`\n🚀 Mathavan Portfolio API running on http://localhost:${PORT}`);
  console.log(`   → Health: http://localhost:${PORT}/api/health`);
  console.log(`   → Contact: POST http://localhost:${PORT}/api/contact\n`);
});
