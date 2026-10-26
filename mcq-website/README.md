# NPTEL IoT MCQ Practice & Mastery Portal (Web Application)

**Target Examination**: NPTEL 2026 Certification Examination in *Introduction to Internet of Things* (IIT Kharagpur — Prof. Sudip Misra)  
**System Architecture**: Standalone Client-Side React Application (Vite + Vanilla CSS)  
**Deliverable**: Deliverable B (Decoupled Interactive Testing Platform)

---

## 1. Features & Architectural Highlights

- **Strict Bank Separation**:
  - **Section 1 (2026 Exam-Session Bank)**: Exactly 180 questions across Weeks 1 to 12 (15 questions per week), matching official assignments.
  - **Section 2 (Historical Practice Bank)**: All 724 questions across 4 historical academic terms (2022–2024), including Week 0.
  - **Reconciled Total**: 180 + 724 = **904 Questions**.
- **Instant Answer Feedback**:
  - Single-choice and True/False questions evaluate instantly on selection.
  - Multiple-select questions feature dedicated checkboxes and a "Check Answer" evaluation engine comparing the exact set of choices.
  - Complete explanations revealed upon evaluation, explaining the concept tested, why the answer is technically valid, and why distractors are incorrect.
- **Progress Tracking & Persistence**:
  - Browser `localStorage` retains attempted questions, accuracy percentage, and bookmarks.
  - Progress for the 2026 session and the practice bank are decoupled and tracked independently.
  - "Retry Wrong Answers" mode filters for instant targeted review.
  - Reset progress with safety confirmation modal.
- **Offline Capable & Zero Cost**:
  - Runs completely offline without external APIs, accounts, or telemetry tracking.

---

## 2. Quick Start Commands

From within the `mcq-website/` directory:

### Run Development Server
```bash
npm run dev
```
Opens local development server at `http://localhost:3000`.

### Build Production Bundle
```bash
npm run build
```
Generates optimized static build in `dist/`.

### Run Production Preview
```bash
npm run preview
```

### Run Automated Test Suite
```bash
npm test
```
Executes the 42-check test suite validating schema completeness, bank separation, scoring logic, and data counts.

---

## 3. Directory Structure

```
mcq-website/
├── package.json
├── vite.config.js
├── index.html
├── test_app_logic.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   └── components/
│       ├── Header.jsx
│       ├── BankSelector.jsx
│       ├── FilterBar.jsx
│       ├── QuestionCard.jsx
│       ├── NavigationBar.jsx
│       └── StatsModal.jsx
└── public/
    └── data/
        ├── manifest.json
        ├── current-session-2026/
        │   ├── W1.json ... W12.json (15 Qs each = 180 Qs)
        └── practice-bank-904/
            └── questions.json (724 Qs)
```
