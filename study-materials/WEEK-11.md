# Week 11: Smart Grid, Advanced Metering Infrastructure (AMI) & IIoT

**Course**: Introduction to Internet of Things — NPTEL / IIT Kharagpur  
**Instructor**: Prof. Sudip Misra  
**Slide Reference**: `Week-11.pdf` (Smart Grid Parts I & II & Industrial IoT)  
**Assigned MCQs**: Current 2026 Session Week 11 (15 Questions) & Historical Question Banks

---

## 1. Overview & Syllabus Mapping

Week 11 examines the technological transformation of critical national infrastructure through the lens of the **Smart Grid** and the **Industrial Internet of Things (IIoT / Industry 4.0)**. We dissect how the traditional, rigid, one-way electrical grid is transformed into a dynamic, two-way automated power-and-data network. We evaluate the **NIST 7-Domain Smart Grid Model**, the architectural tiers of **Advanced Metering Infrastructure (AMI)** vs legacy AMR, and the sub-second GPS-synchronized metrology of **Wide Area Measurement Systems (WAMS)** powered by **Phasor Measurement Units (PMUs)**. Finally, we explore Cyber-Physical Systems (CPS), comparing traditional SCADA against modern cloud-integrated IIoT predictive maintenance.

```
┌────────────────────────────────────────────────────────────────────────┐
│                   THE SMART GRID EVOLUTIONARY PARADIGM                 │
├────────────────────────────┬───────────────────────────────────────────┤
│ TRADITIONAL ELECTRICAL GRID│ MODERN SMART GRID                         │
├────────────────────────────┼───────────────────────────────────────────┤
│ • One-way power delivery   │ • Two-way flow of electricity AND data    │
│ • Centralized generation   │ • Distributed energy resources (DER/solar)│
│ • Blind to consumer load   │ • Real-time dynamic pricing & demand resp.│
│ • Manual restoration       │ • Automated self-healing (FDIR)           │
│ • Cascading blackouts      │ • High reliability, WAMS/PMU synchrophasor│
└────────────────────────────┴───────────────────────────────────────────┘
```

---

## 2. Transforming the Electrical Grid: Traditional Grid vs. Smart Grid

For over a century, electrical grids operated on a simple **one-way top-down architecture**: centralized generation plants (coal, hydro, nuclear) stepped voltage up to hundreds of kilovolts for transmission lines, stepped voltage down at local substations, and pushed electricity blindly to passive consumers.

```
TRADITIONAL GRID (One-Way):
[ Centralized Power Plant ] ──> [ Transmission Lines ] ──> [ Distribution ] ──> [ Passive Consumer ]

SMART GRID (Two-Way Dynamic):
[ Bulk Generation & DER ] <─── Power & High-Speed Data ───> [ Prosumer with Rooftop Solar & EV ]
```

### 2.1 Core Characteristics of the Smart Grid

1. **Two-Way Flow of Electricity and Information**: Consumers are transformed into **prosumers** (entities that both consume power and produce energy via rooftop photovoltaics or domestic batteries fed back into the grid).
2. **Automated Self-Healing**: Utilizing Automated Fault Detection, Isolation, and Restoration (FDIR). When a tree branch downs a feeder cable, automated sectionalizing switches isolate the fault and re-route power from adjacent substations in seconds, preventing cascading blackouts.
3. **High Penetration of Distributed Energy Resources (DER)**: Seamlessly integrates volatile renewable generation (wind, solar) using smart battery storage systems.
4. **Consumer Participation via Demand Response (DR)**: Consumers adjust energy consumption during peak periods in response to time-of-use (TOU) or critical-peak pricing tariffs.

---

## 3. The NIST Smart Grid Conceptual Model (7 Domains)

The US National Institute of Standards and Technology (NIST) established the canonical 7-domain architecture for Smart Grid interoperability:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        NIST 7-DOMAIN SMART GRID                        │
│                                                                        │
│   [ MARKETS ] <───────────> [ OPERATIONS ] <──────────> [ SERVICE      │
│   (Wholesale,               (Energy Mgmt,               PROVIDER ]     │
│    Energy Traders)           DSO / TSO, SCADA)          (Billing, CRM) │
│                                    ▲                                   │
│                                    │ Wide Area Communications          │
│                                    ▼                                   │
│   [ GENERATION ] <────────> [ TRANSMISSION ] <────────> [ DISTRIBUTION]│
│   (Thermal, Hydro,          (High-Voltage,              (Substations,  │
│    Renewable, Wind)          Substations, WAMS)          Feeders, Poles)│
│                                                                ▲       │
│                                                                │ NAN   │
│                                                                ▼       │
│                                                         [ CUSTOMER ]   │
│                                                         (Home, Ind.,   │
│                                                          Smart Meters) │
└────────────────────────────────────────────────────────────────────────┘
```

### 3.1 The Seven NIST Domains Explained

1. **Customer Domain**: The end users of electricity (Residential, Commercial, Industrial). Hosts smart meters, electric vehicle charging, and smart appliances connected via Home Area Networks (HAN).
2. **Generation Domain**: Bulk electricity generators (fossil, nuclear, hydro, utility-scale solar).
3. **Transmission Domain**: Transports bulk electricity across long distances via high-voltage lines (132 kV to 765 kV) and transmission substations.
4. **Distribution Domain**: Steps voltage down (e.g., 11 kV to 400V/230V) and delivers power to customer meters.
5. **Operations Domain**: Manages the real-time operational reliability of the grid (Transmission System Operators - TSO, Distribution System Operators - DSO, Energy Management Systems - EMS).
6. **Markets Domain**: Orchestrates wholesale energy trading, transmission capacity bidding, and carbon offset markets.
7. **Service Provider Domain**: Organizations managing end-user customer relationships, billing, energy auditing, and home automation services.

---

## 4. Advanced Metering Infrastructure (AMI)

### 4.1 Evolution from AMR to AMI

A frequent NPTEL exam distinction is the divide between AMR and AMI:
- **AMR (Automated Meter Reading)**: A **one-way communication system**. A utility vehicle drives down a street collecting radio signals broadcast periodically by meters (drive-by reading). AMR merely eliminates manual meter readers; it cannot send commands to the meter.
- **AMI (Advanced Metering Infrastructure)**: A **fully bidirectional, continuous communication network** linking solid-state smart meters directly with utility enterprise backends.

```
┌────────────────────────────────────────────────────────┐
│               AMI THREE-TIER NETWORK HIERARCHY         │
├────────────────────────────────────────────────────────┤
│ 1. Home Area Network (HAN)     : Zigbee / Wi-Fi        │
│    (Connects Smart Meter to Domestic Appliances)       │
├────────────────────────────────────────────────────────┤
│ 2. Neighborhood Area Net (NAN) : RF Mesh / Cellular    │
│    (Aggregates Meters to Regional Data Collector)      │
├────────────────────────────────────────────────────────┤
│ 3. Wide Area Network (WAN)     : Fiber / 4G / 5G       │
│    (Transports Aggregated Data to Utility Datacenter)  │
└────────────────────────────────────────────────────────┘
```

### 4.2 Core Components of AMI

1. **Smart Meter**:
   - Solid-state electronic device recording consumption in programmable intervals (typically every 15 minutes).
   - Incorporates a **remote disconnect switch** allowing instant remote power cutoff or reconnection without sending utility technicians.
   - Automatically transmits "Last Gasp" distress packets over RF mesh during power failures to notify the utility of localized blackouts.
2. **Meter Data Management System (MDMS)**:
   - Centralized database engine that ingests, validates, edits, and stores billions of consumption data points.
   - Cleans anomalous readings (VEE - Validation, Editing, and Estimation) before exporting billing data to customer accounts.

---

## 5. Wide Area Measurement Systems (WAMS) & PMUs

Traditional Supervisory Control and Data Acquisition (SCADA) systems sample transmission line status only **once every 2 to 4 seconds**. In an electrical grid where alternating current oscillates at 50 Hz or 60 Hz, 4 seconds is an eternity. Voltage instability or generator angular drift can cascade into regional blackouts within hundreds of milliseconds before SCADA operators even notice a problem!

```
┌────────────────────────────────────────────────────────┐
│            PHASOR MEASUREMENT UNIT (PMU) PIPELINE      │
├────────────────────────────────────────────────────────┤
│ [ GPS Satellite ] ──> Sub-microsecond Timestamping     │
│                              │                         │
│                              ▼                         │
│ [ 3-Phase Transmission AC ] ──> [ Analog Filtering ]   │
│                              │                         │
│                              ▼                         │
│ [ A/D Conversion & DFT ]    ──> Voltage & Current      │
│                                 Magnitudes & Phase     │
│                                 Angles (Synchrophasors)│
│                              │                         │
│                              ▼                         │
│ [ High-Speed Network ]      ──> 30 to 60 Samples / Sec │
│                              │  to Central Phasor Data │
│                              │  Concentrator (PDC)     │
└────────────────────────────────────────────────────────┘
```

### 5.1 Synchrophasor Metrology

- **Definition of a Phasor**: A complex number representing the magnitude and phase angle of a sinusoidal waveform:
  $$x(t) = X_m \cos(\omega t + \phi) \implies X = \frac{X_m}{\sqrt{2}} e^{j\phi}$$
- **Synchrophasor**: A phasor calculation evaluated with respect to an absolute, globally synchronized time standard: Coordinated Universal Time (UTC) acquired via **GPS satellite atomic clocks**.
- **Sampling Frequency**: PMUs sample the electrical grid at **30 to 60 times per second** (sub-second high-density telemetry).
- **Phasor Data Concentrators (PDC)**: Regional collectors that align synchrophasor packets from dozens of PMUs according to their exact GPS timestamps, providing a real-time dynamic snapshot of the entire continental grid.

---

## 6. Industrial IoT (IIoT) & Industry 4.0

**Industrial IoT (IIoT)** refers to the integration of networked smart sensors, advanced analytics, and physical machinery across industrial manufacturing, oil and gas, mining, and aerospace.

```
┌─────────────────────────────────┐     ┌─────────────────────────────────┐
│ TRADITIONAL SCADA (OT Silo)     │     │ INDUSTRIAL IOT (Industry 4.0)   │
├─────────────────────────────────┤     ├─────────────────────────────────┤
│ • Closed, proprietary protocols │     │ • Open standards (OPC UA, MQTT) │
│ • Isolated factory network      │     │ • IT / OT converged networks    │
│ • Reactive or scheduled repair  │     │ • AI-driven Predictive Maint.   │
│ • Local HMI displays            │     │ • Cloud Big Data & Digital Twins│
│ • High hardware cost            │     │ • Edge computing & microservices│
└─────────────────────────────────┘     └─────────────────────────────────┘
```

### 6.1 Cyber-Physical Systems (CPS) & Digital Twins

- **Cyber-Physical Systems (CPS)**: Seamless orchestrations of computation, networking, and physical mechanics where embedded computers control physical actuators in feedback loops.
- **Digital Twin**: A real-time, high-fidelity virtual software model of a physical industrial asset (e.g., a jet turbine or industrial compressor). The physical machine streams live sensor telemetry (vibration, heat, pressure) into the digital twin; machine learning models detect micro-cracks weeks before physical failure occurs.
- **Maintenance Paradigms**:
  - *Reactive Maintenance*: "Run-to-failure." Repair only after the machine breaks.
  - *Preventive Maintenance*: Scheduled servicing at arbitrary intervals regardless of actual wear.
  - *Predictive Maintenance (PdM)*: Continuous real-time condition monitoring predicting remaining useful life (RUL) and scheduling maintenance exactly when needed, eliminating catastrophic downtime.

---

## 7. Important Vocabulary & Full Forms

- **AMI**: Advanced Metering Infrastructure
- **AMR**: Automated Meter Reading
- **MDMS**: Meter Data Management System
- **WAMS**: Wide Area Measurement System
- **PMU**: Phasor Measurement Unit
- **PDC**: Phasor Data Concentrator
- **FDIR**: Fault Detection, Isolation, and Restoration
- **DER**: Distributed Energy Resources
- **CPS**: Cyber-Physical Systems
- **SCADA**: Supervisory Control and Data Acquisition
- **HAN / NAN / WAN**: Home / Neighborhood / Wide Area Network
- **TOU**: Time of Use (Tariffs)

---

## 8. MCQ Traps & Distractor Analysis

> [!WARNING]
> **Trap 1: AMR vs. AMI Capabilities**  
> *Distractor*: "AMR enables utilities to remotely disconnect power during non-payment using bidirectional commands."  
> *Truth*: **AMR is strictly one-way** (meter to reader). Remote disconnection and dynamic bidirectional pricing require **AMI (Advanced Metering Infrastructure)**.

> [!WARNING]
> **Trap 2: SCADA vs. PMU Telemetry Frequency**  
> *Distractor*: "Traditional SCADA systems measure transmission line voltages at 60 samples per second."  
> *Truth*: Traditional SCADA polls once every **2 to 4 seconds**. It is **Phasor Measurement Units (PMUs)** in WAMS that sample at **30 to 60 samples per second** using GPS synchronization.

> [!WARNING]
> **Trap 3: Prosumer Definition**  
> *Distractor*: "A prosumer is a professional industrial technician managing electrical substations."  
> *Truth*: A **prosumer** is a consumer who both *produces* and *consumes* electrical energy (e.g., a residential home with rooftop solar feeding surplus energy back to the grid).

---

## 9. High-Yield Recall Summary

- **Smart Grid**: Two-way flow of electricity and data; self-healing (FDIR); integrates Distributed Energy Resources (DER).
- **NIST 7 Domains**: Customer, Generation, Transmission, Distribution, Operations, Markets, Service Provider.
- **AMI Architecture**: Smart Meter $\rightarrow$ HAN $\rightarrow$ NAN $\rightarrow$ WAN $\rightarrow$ MDMS.
- **WAMS & PMU**: PMUs record **synchrophasors** (magnitude + phase angle) synchronized via **GPS atomic clocks** at **30–60 samples/sec** (vs SCADA's 2–4 sec).
- **IIoT & Industry 4.0**: IT/OT convergence; Cyber-Physical Systems; Digital Twins; Predictive Maintenance (PdM) based on real-time vibration/thermal telemetry.
