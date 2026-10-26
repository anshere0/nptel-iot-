# Input Inventory — NPTEL Introduction to Internet of Things

**Exam Session**: 2026 Examination (Course ID: noc26_cs161 / IIT Kharagpur — Prof. Sudip Misra)  
**Date of Audit**: October 24, 2026  
**Auditor**: Antigravity IoT Assistant (Stage 2: Gemini 3.8 High Audit & Completion)

---

## 1. Primary Source Inventory

| Resource Name | Location / Path | File Type / Format | Count / Size | Role & Content Description | Limitations & Quality Observations |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Official Course Lecture Slides** | `c:\Users\ansha\Downloads\IoT\Week-*.pdf` | PDF (Embedded text & vector graphics) | 14 files (~50.5 MB total, 1,189 total slides) | Primary conceptual textbook source for Weeks 1 through 12, prepared by Prof. Sudip Misra, IIT Kharagpur. | Some slides have unicode bullet points and diagram labels requiring UTF-8 handling. Slide decks for Week 1 are split into `Week-1_A`, `Week-1_B`, `Week-1_C`. |
| **Current 2026 Session MCQs** | `c:\Users\ansha\Downloads\IoT\mcqs\week *.pdf` | PDF (High-resolution full-page screenshot scans) | 12 files (Weeks 1 to 12; note filename `weel k 2.pdf`) | Official 2026 graded assignment sheets from NPTEL/Swayam portal for Weeks 1 to 12 (15 questions each = 180 total). | Scanned as single continuous PNG pages per assignment. Filename for Week 2 has a slight typo (`weel k 2.pdf`). Text not directly selectable via standard PDF text streams. |
| **Public 904-Question Portal** | `https://nptel-iot.vercel.app/` | Web Application (Vite/React bundle) | 1 online web app | Public online practice portal containing historical NPTEL IoT question sets + 2026 session questions. | Bundled in client-side JavaScript (`assets/index-BL7kZEDr.js`). Requires JSON extraction and template-literal unescaping. |
| **Extracted Raw Bundle** | `portal_questions_raw.json` | JSON string data | 662 KB | Raw extracted payload from public portal script bundle containing all 904 questions. | Contained double-escaped template quotes (`\\\"`) and BOM that required normalization via `parse_questions.js`. |
| **Normalized Question Sets** | `mcq-website/public/data/` | Structured JSON (`W1.json` - `W12.json`, `practice-bank-904/questions.json`) | 12 weekly files + 1 practice bank file | Clean, parsed JSON records ready for web app consumption. | Verified and separated into two distinct banks: 180 current-session questions (W1–W12) and 724 historical practice questions. |

---

## 2. Detailed Breakdown of Lecture Slide Files

| File Name | Week | Pages | Key Topic Coverage |
| :--- | :--- | :--- | :--- |
| `Week-1_A.pdf` | Week 1 | 23 | Introduction to IoT Part I: Definitions, Characteristics, M2M vs IoT, Market trends |
| `Week-1_B.pdf` | Week 1 | 20 | Introduction to IoT Part II: IoT Networking basics, Gateway addressing, IPv4 vs IPv6 |
| `Week-1_C.pdf` | Week 1 | 59 | Sensing & Actuation: Sensor metrics, classification, mechanical/hydraulic/pneumatic/SMP actuators |
| `Week-2.pdf` | Week 2 | 96 | Connectivity Technologies & Protocols: IEEE 802.15.4, 6LoWPAN headers & compression, Zigbee, MQTT, CoAP, AMQP, XMPP |
| `Week-3.pdf` | Week 3 | 105 | Wireless Technologies & WSN: Bluetooth, BLE, Z-Wave, HART & WirelessHART, NFC, WSN fundamentals |
| `Week-4.pdf` | Week 4 | 107 | Advanced Sensor Networks: Target tracking, Wireless Multimedia Sensor Networks (WMSN), Underwater Sensor Networks (UW-ASN), Nanonetworks, UAV Networks, M2M Architecture |
| `Week-5.pdf` | Week 5 | 97 | Interoperability & Arduino: Interoperability types (device, network, syntactic, semantic), Arduino Uno hardware, ATmega328P, IDE programming |
| `Week-6.pdf` | Week 6 | 103 | Python Programming for IoT: Syntax, data types, control flow, functions, scientific libraries, hardware interfacing |
| `Week-7.pdf` | Week 7 | 106 | Raspberry Pi Implementation: Hardware architecture, 40-pin GPIO, DHT11/DHT22 sensor interfacing, remote logging, REST APIs |
| `Week-8.pdf` | Week 8 | 129 | Software-Defined Networking (SDN) & Cloud: SDN architecture, OpenFlow, Soft-WSN, SDWMN, Cloud fundamentals (NIST characteristics & service models) |
| `Week-9.pdf` | Week 9 | 97 | Cloud Practice, Sensor-Cloud & Fog: OpenStack components, Sensor-Cloud virtualization architecture, Fog/Edge computing paradigms |
| `Week-10.pdf` | Week 10 | 98 | Smart Cities & Smart Homes: 6 smart city dimensions, crowd sensing (participatory vs opportunistic), smart home systems and protocols |
| `Week-11.pdf` | Week 11 | 132 | Smart Grid & IIoT: Traditional vs Smart Grid, AMI, Smart Meters, WAMS/PMU, Industrial IoT, SCADA vs IIoT, Cyber-Physical Systems |
| `Week-12.pdf` | Week 12 | 71 | Data Analytics & Comprehensive Case Studies: Analytics taxonomy (descriptive, predictive, prescriptive), Smart Agriculture, IoMT / Healthcare, Connected Vehicles (V2X) |

---

## 3. Data Integrity & Separation Plan

1. **Deliverable Separation**:
   - The Markdown study notes reside exclusively in `study-materials/`.
   - The interactive web application resides in `mcq-website/`.
   - The two question banks (Current 2026 Session vs 904 Public Practice Bank) are strictly decoupled in data storage (`public/data/current-session-2026/` vs `public/data/practice-bank-904/`) and in user interface views.
2. **Preservation**:
   - Original lecture slides (`Week-*.pdf`) and original MCQ PDFs (`mcqs/*.pdf`) are read-only and preserved untouched.
   - Raw extracted files (`portal_questions_raw.json`) are preserved for auditing and repeatability.
