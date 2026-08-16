# 🚀 Deploying Mathavan's Portfolio to Vercel

Your portfolio website is 100% prepared for **Vercel** deployment with Vite configuration, custom asset routing, and optimized builds!

---

## ⚡ Option 1: Deploy via GitHub (Recommended — Automatic Updates)

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Deploy Mathavan's portfolio to Vercel"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new) and log in with your GitHub account.
   - Select your repository: **`mathavanwork18-tech` / `portfolio 4`**.

3. **Deploy**:
   - Vercel automatically detects **Vite**:
     - **Framework Preset**: `Vite`
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
   - Click **Deploy**! Your site will be live in ~30 seconds with a free `.vercel.app` domain (e.g. `https://mathavan-portfolio.vercel.app`).

---

## 💻 Option 2: Deploy via Terminal (Vercel CLI)

Run the following command in your PowerShell terminal inside the portfolio folder:

```powershell
npx vercel
```

- Follow the interactive prompt:
  - **Set up and deploy?**: `y`
  - **Which scope?**: Choose your Vercel account
  - **Link to existing project?**: `n`
  - **Project name?**: `mathavan-portfolio`
  - **In which directory is your code located?**: `./`

To deploy to production immediately:
```powershell
npx vercel --prod
```

---

## ✅ Configuration Included:
- **`vercel.json`**: Client-side routing fallback configuration (`/index.html`).
- **Static Assets**: High-resolution suit photo, custom MS logo, and resume PDF served from `/public`.
