# Quick Revision Guide — NPTEL Introduction to Internet of Things

**Examination**: NPTEL 2026 Certification Examination (IIT Kharagpur — Prof. Sudip Misra)  
**Format**: High-Density Rapid Revision Notes & Formula Sheet  
**Purpose**: Final Pre-Exam Review for Immediate Retention

---

## 1. High-Frequency Facts & Formula Cheat Sheet

### Core Mathematical & Metrological Formulas
- **Sensitivity ($S$)**: $S = \frac{\Delta V}{\Delta P} = \frac{\text{Change in Output Voltage}}{\text{Change in Input Physical Property}}$
- **10-Bit ADC Voltage Step (Arduino Uno 5V)**:
  $$\Delta V = \frac{5.0\text{ V}}{2^{10}} = \frac{5.0\text{ V}}{1024} \approx 4.88\text{ mV per step}$$
  - $0\text{ V} \rightarrow 0$
  - $2.5\text{ V} \rightarrow 512$
  - $5.0\text{ V} \rightarrow 1023$
- **8-Bit PWM Duty Cycle (Arduino Uno)**:
  $$\text{Duty Cycle \%} = \frac{\text{Value}}{255} \times 100\% \quad (\text{Value: } 0 \text{ to } 255)$$
- **Underwater Acoustic Propagation Delay**:
  $$t_{\text{delay}} = \frac{d}{v_{\text{sound}}} \approx \frac{d}{1500\text{ m/s}} \quad (\text{1.5 km link } \implies 1.0\text{ second propagation latency!})$$
- **Normalized Difference Vegetation Index (NDVI)**:
  $$\text{NDVI} = \frac{\text{NIR} - \text{Red}}{\text{NIR} + \text{Red}} \quad (\text{Healthy: } > 0.5; \text{ Dead/Water: } \le 0.1)$$
- **NIST Synchrophasor Equation**:
  $$x(t) = X_m \cos(\omega t + \phi) \implies X = \frac{X_m}{\sqrt{2}} e^{j\phi} \quad (\text{Sampled 30–60 times/sec via GPS})$$

---

## 2. Wireless Standards & Operating Frequencies At A Glance

| Standard / Technology | Frequency Band | Max Data Rate | Range | Modulation / Access | Key Architectural Trait |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **IEEE 802.15.4** | 2.4 GHz (16 ch)<br>868 MHz (1 ch)<br>915 MHz (10 ch) | 250 kbps<br>20 kbps<br>40 kbps | 10–100 m | O-QPSK<br>BPSK<br>BPSK | Max frame size = 127 bytes. FFD vs RFD. Star & Peer-to-Peer. |
| **6LoWPAN** | Operates over 802.15.4 | Adapts IPv6 | Subnet | Header Compression | Bridges 1280-byte IPv6 MTU to 127-byte frames. Dispatch `01`, Mesh `10`, Frag `11`. |
| **Zigbee** | 2.4 GHz (802.15.4 base) | 250 kbps | 10–70 m | CSMA/CA Mesh | 1 Coordinator (FFD), multiple Routers (FFD), and End Devices (RFD). |
| **Classic Bluetooth** | 2.4 GHz ISM (79 ch) | 1–3 Mbps | 10–100 m | FHSS (1600 hops/s) | 1 Master + up to 7 active Slaves (Piconet); Scatternet bridging. |
| **Bluetooth Low Energy**| 2.4 GHz ISM (**40 ch**) | 1–2 Mbps | 10–50 m | GFSK | **3 Adv channels (37, 38, 39)** + **37 Data channels (0–36)**. GAP/GATT. |
| **Z-Wave** | **Sub-GHz** (868/908 MHz) | 100 kbps | 30 m | FSK/GFSK | Max 232 nodes, max 4 hops, source-routed mesh. Zero Wi-Fi clash. |
| **WirelessHART** | 2.4 GHz ISM (15 ch) | 250 kbps | 100 m | **10 ms TDMA + FHSS** | Industrial process automation, Centralized Network Manager. |
| **NFC** | **13.56 MHz** | 106–424 kbps | **< 10 cm** | Magnetic Induction | Card Emulation, Reader/Writer, Peer-to-Peer modes. |
| **DSRC (Vehicular)** | **5.9 GHz ITS Band** | 6–27 Mbps | ~300 m | IEEE 802.11p OFDM | Direct V2V/V2I ad-hoc communication; <5 ms latency; no cellular needed. |
| **Nanonetworks** | **0.1 to 10 Terahertz** | Gigabits/s | < 10 mm | SPP EM Waves | Graphene / CNT nano-antennas; molecular diffusion alternative. |

---

## 3. High-Yield 12-Week Rapid-Fire Takeaways

### Week 1: Introduction & Fundamentals
- **Kevin Ashton** coined "Internet of Things" in **1999** (linking RFID at P&G to the Internet).
- **ITU 2005 Report**: Formally predicted that machines and things would surpass humans in Internet traffic generation.
- **IPv4 vs IPv6**: IPv4 = 32-bit (exhausted, dotted decimal); IPv6 = 128-bit ($3.4 \times 10^{38}$, hexadecimal).
- **Sensors vs Actuators**: Sensors convert physical stimuli to electrical signals; Actuators convert electrical signals into mechanical action.
- **Hysteresis Error**: Difference in output when approaching the same input from increasing vs decreasing direction.
- **Hydraulic Actuator**: Nearly incompressible liquids, massive force output; **Pneumatic**: Compressible air, fast, spark-free.
- **Smart Dust**: Millimeter-scale autonomous computing motes (Pister, UC Berkeley).

### Week 2: 802.15.4, 6LoWPAN & Application Protocols
- **IEEE 802.15.4**: Physical frame limit is strictly **127 bytes**.
- **6LoWPAN**: Bridges IPv6's **1280-byte MTU** with 802.15.4 via fragmentation and stateless header compression.
- **MQTT**: **TCP port 1883** (TLS 8883), **2-byte fixed header**, Pub/Sub with Broker, QoS 0 (at most once), QoS 1 (at least once), QoS 2 (exactly once), Last Will & Testament.
- **CoAP**: **UDP port 5683** (DTLS 5684), **4-byte fixed header**, RESTful (GET/POST/PUT/DELETE), Confirmable (CON) vs Non-Confirmable (NON), Resource Observation (RFC 7641).

### Week 3: BLE, Z-Wave, HART & WSN
- **BLE RF Channels**: 40 channels total. Channels **37, 38, and 39** are Advertising channels; channels **0–36** are Data channels.
- **HART**: Digital Bell 202 FSK (1200 Hz = 1, 2200 Hz = 0) superimposed on 4–20 mA current loop without DC disruption.
- **WirelessHART**: 10 ms TDMA time-slots, frequency hopping over 15 channels, centralized Network Manager.
- **WSN Energy Consumption**: The radio transceiver (listening/transmitting) consumes $>80\%$ of node battery power.

### Week 4: Advanced WSN, UW-ASN & M2M
- **Binary Tracking**: Nodes report 1 bit ("target present" or "absent").
- **WMSN**: Cameras have **directional Field of View (FoV)** defined by sensing radius, viewing angle, and orientation.
- **UW-ASN**: Radio frequency fails in water; acoustic waves travel at **~1500 m/s**, causing massive propagation delay and low bandwidth.
- **Nanonetworks**: Terahertz band (**0.1–10 THz**) using graphene antennas, or molecular communication via chemical diffusion.
- **ETSI M2M Reference Points**: `dIa` (Device App to SCL), `mId` (Device/Gateway to Network SCL), `mIa` (Network App to SCL).

### Week 5: Interoperability & Arduino
- **4 Interoperability Levels**: Technical (signals), Network (IP/routing), Syntactic (JSON/XML format), Semantic (shared meaning via ontologies/OWL).
- **Arduino Uno (ATmega328P)**: 16 MHz, 32 KB Flash (0.5 KB bootloader), 2 KB SRAM, 1 KB EEPROM.
- **Pins**: 14 Digital (6 PWM: 3, 5, 6, 9, 10, 11), 6 Analog (A0–A5, 10-bit ADC: 0 to 1023).
- **PWM Output**: `analogWrite(pin, val)` where `val` is **0 to 255** (8-bit duty cycle).

### Week 6: Python for IoT
- **Mutability**: Lists, Dicts, Sets are **mutable**; Int, Float, Str, Tuples, Frozensets are **immutable**.
- **NumPy `ndarray`**: Contiguous, homogeneous C-arrays allowing vectorized operations without Python loops.
- **Socket Programming**: `AF_INET` = IPv4; `SOCK_STREAM` = TCP; `SOCK_DGRAM` = UDP. Server flow: `socket` $\rightarrow$ `bind` $\rightarrow$ `listen` $\rightarrow$ `accept`.

### Week 7: Raspberry Pi & Cloud Telemetry
- **Raspberry Pi**: SBC running full Linux; **3.3V logic level (NOT 5V tolerant!)**; **Zero onboard ADC pins**.
- **DHT11 vs DHT22**: DHT22 has wider range (-40 to 80°C, 0–100% RH) and higher precision than DHT11.
- **DHT Bus**: 40 bits total (16 bits humidity, 16 bits temperature, 8 bits checksum).
- **ThingSpeak**: Rate limited to 1 write every 15 seconds on free accounts; authenticated via Write API Key.

### Week 8: SDN & Cloud Fundamentals
- **SDN**: Decouples Control Plane (Controller software) from Data Plane (OpenFlow forwarding switches).
- **OpenFlow Flow Entry**: Match Fields, Priority, Counters, Instructions, Timeouts, Cookie.
- **NIST Cloud (SP 800-145)**:
  - 5 Characteristics: On-demand self-service, Broad network access, Resource pooling, Rapid elasticity, Measured service.
  - 3 Service Models: IaaS (VMs/hardware), PaaS (application runtime), SaaS (ready software).
  - 4 Deployment Models: Public, Private, Community, Hybrid.

### Week 9: OpenStack, Sensor-Cloud & Fog
- **OpenStack**: Nova (Compute), Glance (Images), Swift (Object storage), Cinder (Block storage), Neutron (Networking), Keystone (Identity), Horizon (Dashboard).
- **Sensor-Cloud**: Virtualization of physical WSNs into multi-tenant **Virtual Sensors (VS)** on demand. (NOT merely dumping data in a database).
- **Fog Computing (Cisco)**: Brings compute/storage down to the local network edge (5–20 ms latency, operates autonomously during WAN outages).

### Week 10: Smart Cities & Smart Homes
- **Smart City**: 6 Dimensions = Economy, Governance, People, Mobility, Environment, Living.
- **Mobile Crowd Sensing (MCS)**:
  - Participatory: Conscious, explicit manual user action (e.g. taking a photo of a pothole).
  - Opportunistic: Automatic background harvesting without user awareness (e.g. phone GPS logging traffic speeds).
- **Smart Home Standards**: Zigbee (2.4 GHz mesh), Z-Wave (Sub-GHz mesh), Thread (IPv6 6LoWPAN mesh).

### Week 11: Smart Grid & IIoT
- **Smart Grid**: Two-way flow of electricity and information; self-healing (FDIR); incorporates prosumers and DER.
- **NIST 7 Domains**: Customer, Generation, Transmission, Distribution, Operations, Markets, Service Provider.
- **AMI vs AMR**: AMR = one-way drive-by reading; AMI = bidirectional continuous smart meter network.
- **WAMS & PMUs**: PMUs measure GPS-synchronized synchrophasors at **30–60 samples/sec** (SCADA polls once every 2–4 sec).
- **IIoT & Industry 4.0**: Cyber-Physical Systems (CPS), Digital Twins, Predictive Maintenance (PdM).

### Week 12: IoT Data Analytics & Case Studies
- **Analytics Spectrum**: Descriptive (what happened) $\rightarrow$ Diagnostic (why it happened) $\rightarrow$ Predictive (what will happen) $\rightarrow$ Prescriptive (what action to take).
- **Precision Agriculture**: Soil moisture (FDR/TDR) + solenoid drip valves + UAV multispectral NDVI ($\frac{\text{NIR} - \text{Red}}{\text{NIR} + \text{Red}}$).
- **IoMT**: Body Sensor Networks (BSN), BLE gateway, HIPAA compliance, end-to-end encryption.
- **Connected Vehicles (V2X)**: DSRC is based on **IEEE 802.11p** (5.9 GHz, ad-hoc, <5 ms latency); C-V2X is based on **3GPP cellular** (PC5 direct sidelink).
