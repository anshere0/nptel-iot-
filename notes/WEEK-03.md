# Week 03: Bluetooth/BLE, Z-Wave, HART/WirelessHART, NFC & WSN Fundamentals

**Course**: Introduction to Internet of Things — NPTEL / IIT Kharagpur  
**Instructor**: Prof. Sudip Misra  
**Slide Reference**: `Week-3.pdf` (Connectivity Technologies Parts III–V & Sensor Networks Parts I–II)  
**Assigned MCQs**: Current 2026 Session Week 3 (15 Questions) & Historical Question Banks

---

## 1. Overview & Syllabus Mapping

Week 3 bridges short-range personal area networks with industrial wireless instrumentation and foundational sensor network architectures. We explore the structural divide between **Classic Bluetooth** and **Bluetooth Low Energy (BLE)**, the Sub-GHz resilience of **Z-Wave** in residential automation, the mission-critical deterministic protocol stack of **HART & WirelessHART** in industrial process plants, and the physics of **Near Field Communication (NFC)**. We then transition into the core architecture, energy limitations, and topological challenges of **Wireless Sensor Networks (WSNs)**.

```
┌────────────────────────────────────────────────────────────────────────┐
│                   WIRELESS CONNECTIVITY SPECTRUM                       │
├─────────────────────┬──────────────────┬───────────────┬───────────────┤
│ Short-Range / Touch │ Personal Area    │ Residential   │ Industrial    │
│ NFC (13.56 MHz)     │ Bluetooth / BLE  │ Z-Wave        │ WirelessHART  │
│ Inductive Coupling  │ 2.4 GHz Star/Mesh│ Sub-GHz Mesh  │ TDMA + FHSS   │
└─────────────────────┴──────────────────┴───────────────┴───────────────┘
```

---

## 2. Bluetooth and Bluetooth Low Energy (BLE)

Maintained by the Bluetooth Special Interest Group (SIG), Bluetooth operates in the globally license-free **2.4 GHz Industrial, Scientific, and Medical (ISM)** band.

### 2.1 Classic Bluetooth (v1.0 – v3.0 + EDR/HS)

- **RF Channels**: Operates across **79 RF channels**, each spaced 1 MHz apart (2402 MHz to 2480 MHz).
- **Modulation & Hopping**: Employs Frequency Hopping Spread Spectrum (FHSS) hopping at **1600 hops/second** to evade interference.
- **Network Topologies**:
  - **Piconet**: An ad-hoc network consisting of **exactly 1 Master** and up to **7 active Slave devices** simultaneously. The Master node controls the clock and transmission schedule. Up to 255 additional devices can remain synchronized in a low-power **Parked State**.
  - **Scatternet**: Created when multiple piconets overlap. A device can participate as a Slave in multiple piconets, or as a Master in one piconet and a Slave in another, serving as a bridging node to relay packets across piconets.
- **Power Classes**:
  - *Class 1*: 100 mW (20 dBm) $\rightarrow$ Range ~100 meters (primarily industrial applications).
  - *Class 2*: 2.5 mW (4 dBm) $\rightarrow$ Range ~10 meters (mobile phones, headsets).
  - *Class 3*: 1 mW (0 dBm) $\rightarrow$ Range ~1 meter.

### 2.2 Bluetooth Low Energy (BLE / Bluetooth Smart)

Introduced in Bluetooth v4.0, BLE is **not** an incremental upgrade of Classic Bluetooth; it is a completely distinct, incompatible protocol designed from scratch for extreme low power consumption (operating for months to years on a single CR2032 coin cell).

```
┌────────────────────────────────────────────────────────┐
│            BLE 40 RF CHANNELS ARCHITECTURE             │
├────────────────────────────────────────────────────────┤
│ Channels 37, 38, 39 : Primary ADVERTISING Channels     │
│ (Carefully placed between Wi-Fi Channels 1, 6, and 11) │
├────────────────────────────────────────────────────────┤
│ Channels 0 through 36: Dedicated DATA Channels (37 ch) │
│ (Utilized for bidirectional data transfer after link)  │
└────────────────────────────────────────────────────────┘
```

- **RF Channel Plan**: Exactly **40 channels** spaced 2 MHz apart (2402 MHz to 2480 MHz).
  - **3 Advertising Channels (Channels 37, 38, 39)**: Strategically positioned in the spectral gaps between Wi-Fi channels 1, 6, and 11 to avoid co-channel Wi-Fi interference during node discovery and beacon broadcasting.
  - **37 Data Channels (Channels 0–36)**: Used for adaptive frequency-hopping bidirectional data transmission once a master-slave connection is established.
- **Protocol Architecture**:
  - **GAP (Generic Access Profile)**: Controls device discovery, advertising, connection modes, and role assignment:
    - *Broadcaster*: Transmits advertising packets without accepting connections (e.g., iBeacon).
    - *Observer*: Listens for advertisements without establishing a connection.
    - *Peripheral*: Advertises availability and accepts connections from central devices (e.g., heart rate chest strap).
    - *Central*: Scans for advertisements and initiates connections (e.g., smartphone).
  - **GATT (Generic Attribute Profile)**: Organizes application data into a structured hierarchy using the Attribute Protocol (ATT):
    - *Profile*: High-level specification combining required services.
    - *Service*: A collection of related data characteristics (e.g., "Heart Rate Service").
    - *Characteristic*: Contains a single data value, properties (read, write, notify), and optional descriptors (e.g., "Heart Rate Measurement").

---

## 3. Z-Wave Architecture

**Z-Wave** is a proprietary wireless communications protocol developed by Zensys (now Silicon Labs) designed specifically for residential and light commercial home automation.

- **Operating Frequency**: Operates in the **Sub-GHz ISM bands** (e.g., 868.42 MHz in Europe, 908.42 MHz in the US). Operating below 1 GHz avoids the crowded 2.4 GHz band (Wi-Fi, Bluetooth, microwave ovens) and provides superior penetration through walls and furniture.
- **Network Architecture**: Source-routed **mesh topology**.
  - Up to **232 nodes** can be addressed in a single Z-Wave network.
  - Maximum of **4 hops** allowed per packet path.
- **Device Roles**:
  - *Primary Controller*: Formats the network, assigns Node IDs, and holds the master routing table.
  - *Secondary Controller*: Supplementary control panel receiving replicated routing tables.
  - *Slave Nodes*: Actuators (smart plugs, light switches) and sensors. Routing Slaves can forward messages for other nodes.

---

## 4. HART and WirelessHART

### 4.1 Traditional Wired HART

- **Definition**: Highway Addressable Remote Transducer (HART).
- **Working Principle**: Superimposes digital communication signals atop the standard industrial **4–20 mA analog current loop** without disrupting the underlying analog measurement.
- **Modulation**: Uses **Bell 202 Frequency Shift Keying (FSK)**:
  - Digital '1': Represented by $1200\text{ Hz}$.
  - Digital '0': Represented by $2200\text{ Hz}$.
  - Because the average value of the FSK sinusoidal wave is zero, it causes zero DC offset interference to the 4–20 mA current loop.

### 4.2 WirelessHART (IEC 62591)

WirelessHART is the first open, international wireless standard specifically engineered for real-time process measurement and control applications in industrial chemical plants and refineries.

```
┌────────────────────────────────────────────────────────┐
│            WirelessHART INDUSTRIAL PROTOCOL            │
├────────────────────────────────────────────────────────┤
│ Application Layer    : Command-Oriented HART commands  │
├────────────────────────────────────────────────────────┤
│ Network & Transport  : Graph Routing, Central Manager  │
├────────────────────────────────────────────────────────┤
│ Data Link Layer      : TSMP, Slotted TDMA (10 ms slot) │
│                      : Channel Hopping (15 channels)   │
├────────────────────────────────────────────────────────┤
│ Physical Layer       : IEEE 802.15.4 (2.4 GHz DSSS)    │
└────────────────────────────────────────────────────────┘
```

- **Physical Layer**: Standard IEEE 802.15.4 operating in the 2.4 GHz band with Direct Sequence Spread Spectrum (DSSS).
- **Data Link Layer (TSMP - Time Synchronized Mesh Protocol)**:
  - **Strict TDMA Timing**: Time is synchronized and divided into discrete **10-millisecond time slots**.
  - **Frequency Hopping (FHSS)**: Changes radio channels on every single 10 ms transaction across 15 available channels. If an RF channel encounters narrowband interference, subsequent retries immediately hop to a clear channel.
- **Key Architectural Components**:
  1. *Network Manager*: The central software engine that monitors the entire network health, computes multi-hop graph routes, and provisions the exact transmission time slots and channel-hopping sequences.
  2. *Security Manager*: Manages symmetric encryption keys (128-bit AES), session keys, and device authentication.
  3. *Gateway*: Connects the WirelessHART field mesh to plant automation systems (DCS/SCADA) and Modbus/PROFINET hosts.

---

## 5. Near Field Communication (NFC)

Standardized under ISO/IEC 18092 and ISO/IEC 14443, NFC is a short-range, touch-based wireless interface:

- **Operating Frequency**: Strictly **13.56 MHz**.
- **Coupling Mechanism**: Operates via **magnetic inductive coupling** between two loop antennas located in each other's near field ($d < \lambda / 2\pi$, typically effective distance **$< 10\text{ cm}$**, practically $2–4\text{ cm}$).
- **Data Rates**: 106 kbps, 212 kbps, and 424 kbps.
- **Operating Modes**:
  1. **Card Emulation Mode**: The NFC device behaves like a passive contactless smart card (e.g., smartphone acting as an Apple Pay/Google Wallet card or transit ticket).
  2. **Reader/Writer Mode**: The active NFC device reads data from or writes data to a passive RFID tag or smart poster (e.g., scanning a museum exhibit tag).
  3. **Peer-to-Peer Mode (P2P)**: Two active NFC devices establish a bidirectional communication link to exchange data (e.g., contact sharing, triggering Bluetooth pairing).

---

## 6. Wireless Sensor Networks (WSNs): Architecture & Topologies

A **Wireless Sensor Network (WSN)** consists of a large number of spatially distributed, autonomous sensor nodes collaborating to monitor physical or environmental conditions (temperature, acoustic, seismic, pressure).

```
┌────────────────────────────────────────────────────────┐
│               GENERIC SENSOR NODE ARCHITECTURE          │
├────────────────────────────────────────────────────────┤
│  [ Sensing Unit ]    [ Processing Unit ]  [ Power Unit]│
│  - Sensors (Analog)  - Microcontroller   - Battery     │
│  - ADC               - Flash / RAM       - Energy Harv │
├──────────────────────┴───────────────────┴─────────────┤
│  [ Transceiver Unit ] (RF Transmitter / Receiver)      │
└────────────────────────────────────────────────────────┘
```

### 6.1 Subsystems of a Sensor Node

1. **Sensing Subsystem**: Sensors and ADCs translating environmental stimuli into electrical digital samples.
2. **Processing Subsystem**: Microcontroller (e.g., TI MSP430, ATmega) executing local algorithms, filtering noise, and managing protocols.
3. **Communication Subsystem**: Short-range RF transceiver for packet transmission and reception. *Transceiver operation (especially listening/idle listening) consumes the overwhelming majority (>80%) of a node's total energy budget!*
4. **Power Subsystem**: Battery storage (e.g., Li-ion, alkaline) paired optionally with energy harvesting circuits (solar, piezoelectric, thermoelectric).

### 6.2 Key Challenges in WSN Design

- **Severe Energy Constraints**: Nodes are deployed in hazardous or remote locations where battery replacement is physically impossible or cost-prohibitive. Lifetime maximization dictates duty cycling.
- **Limited Computational & Memory Resources**: Motes typically possess tens of kilobytes of RAM and low-frequency processors.
- **Unreliable Wireless Medium**: Subject to multipath fading, rain attenuation, signal absorption by foliage, and dynamic obstacles.
- **Coverage vs. Connectivity**:
  - *Coverage*: Ensuring that every target point in the monitored field is within the sensing range ($r_s$) of at least one active sensor.
  - *Connectivity*: Ensuring that the network graph remains connected so every node can deliver its packet to the Base Station (Sink) through multi-hop paths within communication range ($r_c$). If $r_c \ge 2 r_s$, complete coverage implies complete connectivity.

---

## 7. Head-to-Head Comparison: Short-Range Connectivity Technologies

| Feature | Classic Bluetooth | Bluetooth Low Energy (BLE) | Z-Wave | WirelessHART |
| :--- | :--- | :--- | :--- | :--- |
| **Frequency Band** | 2.4 GHz ISM | 2.4 GHz ISM | Sub-GHz (868/908 MHz) | 2.4 GHz ISM |
| **Number of Channels**| 79 channels (1 MHz) | 40 channels (2 MHz) | 1 to 3 channels | 15 channels (5 MHz) |
| **RF Channel Usage** | FHSS (1600 hops/s) | 3 Adv + 37 Data | Narrowband | 10 ms TDMA + FHSS |
| **Max Data Rate** | 1 to 3 Mbps | 1 to 2 Mbps | 100 kbps | 250 kbps |
| **Network Topology** | Piconet / Scatternet | Star / Mesh / Broadcast | Mesh (Source routed) | Mesh (Central Manager)|
| **Max Network Size** | 8 active nodes | Millions (Mesh) | 232 nodes | 250+ per Gateway |
| **Target Application** | Audio streaming, PC peripherals | Wearables, beacons, medical telemetry | Smart home automation | Industrial process plants |

---

## 8. Important Vocabulary & Full Forms

- **SIG**: Special Interest Group (Bluetooth)
- **GAP**: Generic Access Profile
- **GATT**: Generic Attribute Profile
- **ATT**: Attribute Protocol
- **HART**: Highway Addressable Remote Transducer
- **FSK**: Frequency Shift Keying
- **TSMP**: Time Synchronized Mesh Protocol
- **TDMA**: Time Division Multiple Access
- **FHSS**: Frequency Hopping Spread Spectrum
- **DSSS**: Direct Sequence Spread Spectrum
- **NFC**: Near Field Communication
- **Piconet**: Star network of 1 Master and up to 7 Slaves in Bluetooth.
- **Scatternet**: Interconnected mesh of overlapping piconets.

---

## 9. MCQ Traps & Distractor Analysis

> [!WARNING]
> **Trap 1: BLE Channel Count & Advertising Allocation**  
> *Distractor*: "BLE uses 79 channels and reserves channel 1, 6, and 11 for advertising."  
> *Truth*: Classic Bluetooth has 79 channels. BLE has **40 channels**, and reserves channels **37, 38, and 39** for advertising.

> [!WARNING]
> **Trap 2: Wired HART Superimposition**  
> *Distractor*: "HART digital signals replace the 4–20 mA analog signal on the wire."  
> *Truth*: HART digital signals are **superimposed** on top of the 4–20 mA current loop using Bell 202 FSK without affecting the analog reading.

> [!WARNING]
> **Trap 3: Z-Wave Frequency Band**  
> *Distractor*: "Z-Wave operates at 2.4 GHz to maintain compatibility with Wi-Fi."  
> *Truth*: Z-Wave operates in the **Sub-GHz band** (868/908 MHz) specifically to eliminate 2.4 GHz interference and improve building penetration.

> [!WARNING]
> **Trap 4: WirelessHART MAC Access**  
> *Distractor*: "WirelessHART uses standard CSMA/CA contention access."  
> *Truth*: WirelessHART uses **slotted TDMA with 10 ms time slots** and channel hopping to guarantee deterministic real-time delivery without contention collisions.

---

## 10. High-Yield Recall Summary

- **Classic Bluetooth**: 79 channels (1 MHz), Piconet has 1 Master + max 7 active Slaves (up to 255 parked).
- **BLE**: 40 channels (2 MHz), Channels 37, 38, 39 are Advertising; Channels 0–36 are Data. GAP for discovery/roles; GATT for Services/Characteristics.
- **Z-Wave**: Sub-GHz mesh, max 232 nodes, max 4 hops, home automation standard.
- **HART**: Bell 202 FSK (1200 Hz = '1', 2200 Hz = '0') superimposed on 4–20 mA current loop.
- **WirelessHART**: 2.4 GHz, 10 ms TDMA time slots, channel hopping, centralized Network Manager.
- **NFC**: 13.56 MHz, magnetic inductive coupling, distance <10 cm, Card Emulation, Reader/Writer, Peer-to-Peer.
- **WSN Energy Consumption**: Transceiver listening and transmitting consumes the highest proportion of node energy.
