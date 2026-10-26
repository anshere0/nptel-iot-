# Deployment & Usage Guide — NPTEL IoT Mastery Portal

**Curator & Author**: Ansh  
**Repository**: [https://github.com/anshere0/nptel-iot-](https://github.com/anshere0/nptel-iot-)  
**Recommended Platforms**: Vercel (1-Minute Setup), Cloudflare Pages, Netlify  

---

## 🚀 Part 1: How to Deploy the Website (Free & Instant)

Your repository already has a strictly configured `.gitignore` that automatically excludes all heavy PDFs (50+ MB lecture slides and raw scanned PDFs in `mcqs/`), `node_modules`, and scratch scripts. Only the clean, fast web app and verified question data will be uploaded.

### Step 1: Push the Complete Codebase to GitHub

Run the following commands in your PowerShell / Terminal inside `c:\Users\ansha\Downloads\IoT`:

```powershell
# 1. Stage all project files (safe: all large PDFs are automatically ignored)
git add .

# 2. Commit the changes
git commit -m "feat: complete NPTEL IoT Mastery Portal with 2026 assignments and custom mock test"

# 3. Push to your GitHub repository
git push -u origin main
```

---

### Step 2: Deploy to Vercel (Recommended — Fastest & Easiest)

Vercel provides free global edge hosting, automatic SSL, and zero configuration for Vite apps.

1. Go to [vercel.com](https://vercel.com/) and sign in with your GitHub account.
2. Click **"Add New..."** $\rightarrow$ **"Project"**.
3. Under *Import Git Repository*, find and click **"Import"** next to `anshere0/nptel-iot-`.
4. In the **Configure Project** screen:
   - **Framework Preset**: Vite (auto-detected)
   - **Root Directory**: Click **Edit** and select `mcq-website` 👈 *(Crucial!)*
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `dist` (auto-filled)
5. Click **"Deploy"**.

⏱️ *Within 45 seconds, your site will be live on a public URL like `https://nptel-iot.vercel.app`!*

---

### Alternative A: Deploy to Cloudflare Pages (Unlimited Bandwidth)

1. Log into your free [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. In the left navigation, go to **Workers & Pages** $\rightarrow$ **Create Application** $\rightarrow$ **Pages** $\rightarrow$ **Connect to Git**.
3. Select `anshere0/nptel-iot-`.
4. Configure Build Settings:
   - **Framework Preset**: `Vite`
   - **Root directory**: `mcq-website`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Click **"Save and Deploy"**.

---

### Alternative B: Deploy to Netlify

1. Log in to [netlify.com](https://netlify.com/) $\rightarrow$ **"Add new site"** $\rightarrow$ **"Import an existing project"**.
2. Select GitHub and pick `anshere0/nptel-iot-`.
3. Set:
   - **Base directory**: `mcq-website`
   - **Build command**: `npm run build`
   - **Publish directory**: `mcq-website/dist`
4. Click **"Deploy site"**.

---

## 🎯 Part 2: Custom Mock Test Feature Guide

The portal includes an interactive **Custom Mock Test Engine** designed specifically for NPTEL exam readiness.

### How to Launch a Mock Test
1. Click the **"🎯 Mock Test"** button in the top navigation bar or the **"⚡ Start Mock Test"** button in the Current Session banner.
2. The **Custom Mock Test Simulator** dialog opens with full control over your test configuration:

### Features & Settings:
1. **Choose Any Combination of Weeks**:
   - Interactive chips for **Week 1 through Week 12**.
   - Select individual weeks (e.g. test only Weeks 1–4 for a mid-term review, or Weeks 1–12 for the final exam).
   - Quick buttons: `All (1–12)` to select all, and `Reset` to select Week 1.
2. **Random Order Every Time**:
   - The engine uses an unbiased **Fisher-Yates shuffle** to randomize question order every time you take the test.
3. **Question Pool Selection**:
   - **Official 15 MCQs per Week**: Strictly tests the 15 official assignment questions from the 2026 course scans.
   - **All Questions (Including Supplementary)**: Tests official 15 MCQs plus additional retained course questions.
4. **Custom Test Length**:
   - Choose between **15, 30, 45, 60 questions**, or **All Available Questions**.
5. **Exam Simulation vs Immediate Practice**:
   - **Real Exam Simulation**: Answers and explanations remain hidden while you take the test. You can freely change or clear your answers before submitting.
   - **Practice Mode**: Answers, correct keys, and detailed explanations are revealed immediately after selecting an option.
6. **Countdown Timer**:
   - Choose between **Untimed**, **15 Mins**, **30 Mins**, **45 Mins**, or **60 Mins** with an auto-submit countdown.
7. **Comprehensive Scorecard & NPTEL Honor Badges**:
   - Shows your overall score and percentage.
   - Awards official NPTEL Certification Honor Tiers:
     - 🥇 **Elite + Gold** ($\ge 90\%$)
     - 🥈 **Elite + Silver** ($\ge 75\%$)
     - 🥉 **Elite** ($\ge 60\%$)
     - ✅ **Successfully Certified** ($\ge 40\%$)
     - ⚠️ **Need More Revision** ($< 40\%$)
   - Displays a week-by-week accuracy breakdown table and a complete question-by-question review.

---

## 👤 Part 3: Personal Branding & Social Links

Your name (**Ansh**) is highlighted across the portal:
- Header badge: `⭐ By Ansh`
- Curator Profile Modal: `👤 Curator`
- Footer: `"Curated and engineered with precision by Ansh"`

To link your personal social profiles (GitHub, LinkedIn, Email, Portfolio):
Edit [`mcq-website/src/components/CuratorModal.jsx`](file:///c:/Users/ansha/Downloads/IoT/mcq-website/src/components/CuratorModal.jsx):
- Update `github.com/anshere0`
- Update your LinkedIn URL
- Update your contact email or portfolio link
