# Mathavan S — Portfolio

Full-stack portfolio with **glassmorphism UI** + **Express.js backend**.

## Folder Structure

```
portfolio 4/
├── frontend/          ← React + Vite app (main website)
│   ├── src/
│   │   ├── components/   ← Navbar, Hero, Projects, Skills, Contact…
│   │   ├── data/         ← portfolioData.js (all content)
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css     ← Full glassmorphism design system
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── backend/           ← Express.js API server
│   ├── src/
│   │   └── server.js     ← Contact form, health check
│   ├── .env.example      ← Copy to .env and fill in values
│   └── package.json
│
└── src/               ← Active source (same as frontend, dev runs here)
```

## Quick Start

### Frontend (Active Dev)
```bash
# From root: portfolio 4/
npm run dev
# → http://localhost:3000
```

### Backend (Optional — for email contact form)
```bash
cd backend
npm install
cp .env.example .env   # Fill in SMTP credentials
npm run dev
# → http://localhost:5000
```

## Social Links
- LinkedIn: https://www.linkedin.com/in/mathavan-india/
- GitHub: https://github.com/mathavanwork18-tech
- WhatsApp: https://wa.me/918072456474

## Tech Stack
- React 18 + Vite
- Framer Motion (animations)
- Three.js via React Three Fiber (3D hero)
- Canvas particles (mouse-interactive background)
- Glassmorphism CSS design system (3 depth levels)
- Express.js backend (contact form + nodemailer)
# portfolio- 
