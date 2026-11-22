# 📡 NPTEL IoT Mastery Portal & Mock Exam Simulator

**Interactive Revision Portal, Weekly Question Bank, and Timed Mock Test Simulator for NPTEL's "Introduction to Internet of Things"**

[![React](https://img.shields.io/badge/Frontend-React_18-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Bundler-Vite_5-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Course](https://img.shields.io/badge/Curriculum-IIT_Kharagpur%20(noc26__cs161)-00599C?style=for-the-badge)](https://nptel.ac.in)

> [!NOTE]
> **Academic Integrity Notice**: This web application is an educational study tool designed for exam revision, flashcard self-testing, and timed simulation.

---

## 📌 Overview

**NPTEL IoT Mastery Portal** is a high-speed revision web platform created for students enrolled in the NPTEL certification course *Introduction to Internet of Things* (offered by Prof. Sudip Misra, IIT Kharagpur).

The web platform features:
- **Interactive Question Bank**: Over 250+ curated multiple-choice questions organized across Weeks 1 through 12.
- **Timed Exam Simulator**: Configurable mock test sessions (15, 30, 45, or 60 minutes) utilizing **Fisher-Yates shuffle algorithms** for unbiased question randomization.
- **Scorecards & Honor Badges**: Automated score calculation with simulated NPTEL certification badge tiers (Elite + Gold, Elite + Silver, Elite, Certified).
- **Curated Study Guides**: Markdown summary notes covering sensor networks, IoT protocols (MQTT, CoAP, Zigbee, LoRaWAN), cloud computing, and fog architectures.

---

## 📂 Repository Structure

```text
nptel-iot-/
├── mcq-website/                # React 18 + Vite Web Application
│   ├── src/
│   │   ├── components/         # MockTestModal, FlashcardView, FilterBar, Scorecard
│   │   ├── App.jsx             # Main interactive application
│   │   └── main.jsx
│   ├── public/                 # Manifest & offline datasets
│   └── package.json
├── notes/                      # Week 1 - 12 conceptual lecture summaries
├── study-materials/            # Comparison tables, full forms, and formulas
└── README.md
```

---

## 🚀 Running the Web Portal Locally

```bash
# Clone the repository
git clone https://github.com/anshere0/nptel-iot-.git
cd nptel-iot-/mcq-website

# Install dependencies
npm install

# Start Vite dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 👤 Author
**Ansh Arora**  
- GitHub: [@anshere0](https://github.com/anshere0)  
- LinkedIn: [Ansh Arora](https://www.linkedin.com/in/ansh-arora0/)
