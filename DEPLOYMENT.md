# 🚀 Mathavan's Portfolio — Netlify Deployment

> 🌐 **Official Live Website URL**: **[https://mathavanportfoliobasic.netlify.app/](https://mathavanportfoliobasic.netlify.app/)**

Your portfolio website is **100% prepared for Netlify deployment** with Vite configuration, custom asset routing, and SPA client-side fallback redirects!

---

## ⚡ Option 1: Drag & Drop (Fastest — 10 Seconds, No GitHub setup needed)

1. Run the build command in your terminal:
   ```bash
   npm run build
   ```
2. Go to **[app.netlify.com/drop](https://app.netlify.com/drop)** in your browser.
3. Drag and drop the **`dist`** folder from `portfolio 4` directly onto the Netlify webpage!
4. Your website is instantly live with a Netlify URL! 🎉

---

## ⚡ Option 2: Deploy via GitHub (Automatic Updates)

1. **Push all recent changes to GitHub**:
   ```bash
   git add .
   git commit -m "Add Netlify configuration"
   git push origin main
   ```

2. **Connect to Netlify**:
   - Go to **[app.netlify.com](https://app.netlify.com)** and log in with your GitHub account.
   - Click **Add new site** → **Import an existing project**.
   - Choose **GitHub** and authorize Netlify.
   - Select your repository: **`mathavanwork18-tech/portfolio`**.

3. **Deploy**:
   - Netlify will automatically detect `netlify.toml`:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
   - Click **Deploy portfolio**!

---

## 💻 Option 3: Deploy via Terminal (Netlify CLI)

Run the following command in PowerShell inside your portfolio directory:

```powershell
npx netlify-cli deploy --prod
```

- Follow the prompt to authorize in the browser.
- Select **Create & configure a new site**.
- Enter site name (e.g. `mathavan-portfolio`).
- Set publish directory to **`dist`**.

---

## ✅ Netlify Setup Included:
- **`netlify.toml`**: Configures build command (`npm run build`), publish directory (`dist`), and SPA redirects (`/*` to `/index.html`).
- **`public/_redirects`**: Ensures deep link routing fallback for single page React navigation.
- **Static Assets**: All public images, resume, and logos served directly from `/dist`.
