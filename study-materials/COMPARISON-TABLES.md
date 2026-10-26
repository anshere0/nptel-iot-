# Head-to-Head Comparison Tables — NPTEL Introduction to Internet of Things

**Examination**: NPTEL 2026 Certification Examination (IIT Kharagpur — Prof. Sudip Misra)  
**Purpose**: Direct Contrast Matrices for Concepts Frequently Confused in NPTEL MCQs

---

## 1. Architectural Foundations: M2M vs. IoT

| Evaluation Dimension | Machine-to-Machine (M2M) | Internet of Things (IoT) |
| :--- | :--- | :--- |
| **System Scope** | Point-to-point, closed, vertical application silo. | Open, global, horizontal multi-tenant ecosystem. |
| **Network Layer** | Typically cellular telecommunication or proprietary serial links. | IP-based routing (IPv6, 6LoWPAN) across heterogeneous physical layers. |
| **Integration** | Hardware-centric, machine-to-machine direct signaling. | Internet-integrated, cloud/fog platforms, Web of Things (WoT). |
| **Data Sharing** | Data is trapped in proprietary enterprise silos. | Multi-tenant data sharing across applications and third-party APIs. |
| **Standards** | Often vendor-proprietary or telecommunications standards (ETSI). | Open global standards (IETF, W3C, IEEE, OASIS). |
| **Relationship** | **M2M is a foundational subset of IoT.** | **IoT is the broader umbrella encompassing M2M.** |

---

## 2. Metrological Metrics: Accuracy vs. Precision vs. Resolution vs. Sensitivity

| Metric | Scientific Definition | Practical Sensor Example | What It Is NOT |
| :--- | :--- | :--- | :--- |
| **Accuracy** | Degree of closeness of a measured value to the **true reference standard**. | A calibrated thermometer reading 100.0°C when water boils at standard pressure. | It is NOT repeatability across runs. |
| **Precision** | Degree of mutual agreement (repeatability) among **repeated independent measurements** of the same quantity. | A scale reading 52.34 kg five times consecutively, even if true weight is 50.00 kg. | It is NOT correctness or freedom from bias. |
| **Resolution** | The **smallest detectable increment** of input physical property that produces a detectable change in output. | An ADC with a 4.88 mV step size detecting a 0.005V shift in voltage. | It is NOT accuracy (a 0.001°C sensor can still be inaccurate by 2°C). |
| **Sensitivity** | The ratio of the change in output electrical signal to the change in input property ($\Delta V / \Delta P$). | An LM35 temperature sensor producing an output slope of **10 mV / °C**. | It is NOT the minimum threshold of detection. |

---

## 3. Sensor Classification: Active vs. Passive Sensors

| Parameter | Active Sensors | Passive Sensors |
| :--- | :--- | :--- |
| **External Power Requirement**| **Requires an external electrical excitation source** (voltage or current) to operate. | **Directly self-generates electrical energy** from the physical stimulus without external power. |
| **Operating Mechanism** | Modulates an applied voltage/current by altering internal resistance, capacitance, or inductance. | Converts physical energy directly into an electrical potential or charge. |
| **Representative Examples** | Thermistor, LDR (Photoresistor), Strain Gauge, Hall Effect Sensor. | Thermocouple (Seebeck effect), Piezoelectric crystal, Photovoltaic cell. |

---

## 4. Actuator Physics: Hydraulic vs. Pneumatic

| Parameter | Hydraulic Actuators | Pneumatic Actuators |
| :--- | :--- | :--- |
| **Working Fluid** | **Incompressible liquids** (mineral oil, hydraulic fluid). | **Compressible gases** (purified dry air). |
| **Force Generation** | **Enormous forces** with rigid positional holding. | Moderate forces; spongy positional control due to gas compressibility. |
| **Operating Speed** | Moderate to slow cycle times. | **Very fast cycle times** and rapid linear extension. |
| **Environmental Safety** | Risk of toxic fluid leaks and high-pressure fire hazards. | **Intrinsically safe** in explosive/hazardous atmospheres (no sparks). |

---

## 5. Smart Material Actuators: Shape Memory Alloys (SMA) vs. Shape Memory Polymers (SMP)

| Parameter | Shape Memory Alloys (SMA) | Shape Memory Polymers (SMP) |
| :--- | :--- | :--- |
| **Material Composition** | Metallic alloys (e.g., Nitinol — Nickel-Titanium). | Polymeric chains and elastomers. |
| **Recoverable Strain** | Limited recoverable strain (typically **< 8%**). | **Massive recoverable strain (up to 200–800%)**. |
| **Actuation Stimuli** | Primarily thermal Joule heating (Austenite-Martensite phase transition). | Thermal, light, electrical field, or chemical stimuli. |
| **Density & Cost** | High density, heavy, expensive fabrication. | Low density, lightweight, low-cost processing. |

---

## 6. Networking Protocol Stacks: MQTT vs. CoAP

| Feature | MQTT (OASIS / ISO 20922) | CoAP (IETF RFC 7252) |
| :--- | :--- | :--- |
| **Communication Paradigm** | **Publish / Subscribe** (Brokered architecture) | **Request / Response** (RESTful Client / Server) |
| **Transport Layer** | **TCP** (Connection-oriented, port 1883) | **UDP** (Connectionless datagrams, port 5683) |
| **Fixed Header Size** | **2 bytes** | **4 bytes** |
| **Reliability Mechanism** | QoS 0 (At most once), QoS 1 (At least once), QoS 2 (Exactly once) | Confirmable (CON) vs Non-Confirmable (NON) with ACK |
| **Security Layer** | TLS / SSL | DTLS (Datagram TLS) |
| **RESTful Semantics** | None (Topic string matching) | Native `GET`, `POST`, `PUT`, `DELETE` methods |
| **Asynchronous Streaming**| Native via continuous broker subscriptions. | Enabled via CoAP Observe Option (RFC 7641). |
| **Optimal Use Case** | Continuous telemetry streams, multi-subscriber events. | Constrained battery nodes, low-overhead resource polling. |

---

## 7. Personal Wireless Technologies: Classic Bluetooth vs. Bluetooth Low Energy (BLE)

| Feature | Classic Bluetooth (v1.0 – v3.0) | Bluetooth Low Energy (BLE / v4.0+) |
| :--- | :--- | :--- |
| **RF Channels** | **79 channels** (1 MHz bandwidth) | **40 channels** (2 MHz bandwidth) |
| **Channel Allocation** | All 79 channels utilized for FHSS data. | **3 Advertising channels (37, 38, 39)** + **37 Data channels (0–36)**. |
| **Power Consumption** | High (tens of mA); requires rechargeable battery. | Ultra-low (microamps idle); runs years on a CR2032 coin cell. |
| **Connection Setup Time**| Slow (~100 milliseconds). | Ultra-fast (**< 3 milliseconds** from sleep to data transmit). |
| **Network Profiles** | Legacy profiles (SPP, A2DP, HFP). | **GAP** (Discovery/Roles) & **GATT** (Services/Characteristics). |
| **Application Focus** | High-bandwidth audio streaming, file transfer. | Wearable telemetry, sensor beacons, smart home status. |

---

## 8. Smart Home Wireless Meshes: Zigbee vs. Z-Wave vs. Thread

| Parameter | Zigbee (CSA) | Z-Wave (Silicon Labs) | Thread (Thread Group) |
| :--- | :--- | :--- | :--- |
| **RF Frequency Band** | **2.4 GHz ISM** (worldwide) | **Sub-GHz** (868 MHz EU / 908 MHz US) | **2.4 GHz ISM** |
| **Radio Base** | IEEE 802.15.4 | Proprietary FSK (ITU-T G.9959) | IEEE 802.15.4 + 6LoWPAN |
| **Wi-Fi Clashes** | Can collide with 2.4 GHz Wi-Fi channels. | **Zero co-channel Wi-Fi interference!** | Coexists using 6LoWPAN channels. |
| **Max Network Size** | 65,000+ nodes | **232 nodes** (max 4 hops) | 250+ nodes per mesh |
| **Addressing Model** | 16-bit short Zigbee addresses. | 8-bit Node ID assigned by Controller. | **Native IPv6 addressing per node**. |

---

## 9. Industrial Protocols: Traditional SCADA vs. Industrial IoT (IIoT)

| Feature | Traditional SCADA (OT Silo) | Industrial IoT / Industry 4.0 |
| :--- | :--- | :--- |
| **Network Architecture**| Isolated, air-gapped factory network. | Converged IT / OT cloud-integrated network. |
| **Protocols** | Closed, proprietary (Modbus RTU, Profibus). | Open standards (OPC UA, MQTT, REST, DDS). |
| **Maintenance Model** | Reactive (breakdown) or Scheduled Preventive. | **Predictive Maintenance (PdM) & Digital Twins**. |
| **Analytics Engine** | Local Human-Machine Interface (HMI) screens. | Cloud & Fog Big Data machine learning pipelines. |
| **Scalability** | Expensive, hardware-bound scaling. | Elastic horizontal scaling via software microservices. |

---

## 10. Embedded Compute: Microcontroller (Arduino) vs. Single Board Computer (Raspberry Pi)

| Feature | Arduino Uno (Microcontroller) | Raspberry Pi 4 (Single Board Computer) |
| :--- | :--- | :--- |
| **Core Processor** | Microchip **ATmega328P** (8-bit AVR RISC). | Broadcom **BCM2711** (Quad-core 64-bit ARM Cortex). |
| **Operating System** | **None** (Executes bare-metal firmware loop). | **Full Preemptive Multitasking OS** (Linux / Raspbian). |
| **Clock Frequency** | **16 MHz** | **1.5 GHz** (100× faster) |
| **RAM Capacity** | **2 KB SRAM** | **1 GB to 8 GB LPDDR4** |
| **Onboard ADC** | **Yes (6 channels, 10-bit ADC: 0–1023)**. | **NO ANALOG INPUTS ONBOARD!** (Requires external ADC chip). |
| **GPIO Logic Level** | **5.0 Volts** logic level. | **3.3 Volts strictly (NOT 5V tolerant!)**. |
| **Primary IoT Role** | Direct hardware sensor sampling & actuator control. | Smart Gateway, edge machine learning, web server, video. |

---

## 11. Distributed Computing: Cloud vs. Fog vs. Edge

| Parameter | Cloud Computing | Fog Computing | Edge Computing |
| :--- | :--- | :--- | :--- |
| **Location** | Centralized distant mega-datacenters. | Local network gateways and micro-datacenters. | Directly on the physical sensor / actuator node. |
| **Latency** | High (**100–300 ms**). | Low (**5–20 ms**). | Ultra-low (**< 1 ms**). |
| **Bandwidth Demand** | Massive (streams raw telemetry across WAN).| Conserves backhaul by local aggregation. | Zero external bandwidth for local filtering. |
| **Offline Operation** | Fails completely if Internet connection drops. | **Functions autonomously during Internet outages.**| Functions autonomously. |
| **Compute Scope** | Global historical big data & deep model training.| Real-time local control & regional caching. | Real-time immediate sensor signal conditioning. |

---

## 12. Mobile Crowd Sensing: Participatory vs. Opportunistic

| Dimension | Participatory Crowd Sensing | Opportunistic Crowd Sensing |
| :--- | :--- | :--- |
| **User Intervention** | **Explicit, conscious manual action required.** | **Completely autonomous background execution.** |
| **User Burden** | High (User must open app, take photo, submit). | Low (Zero manual interaction; device is merely carried). |
| **User Awareness** | User is fully aware of data collection. | User is typically unaware of ongoing background logging. |
| **Representative Example**| Citizen taking a photo of a broken municipal pipe. | Phone accelerometer passively logging road potholes. |
| **Data Quality Profile**| High qualitative context; low sampling density. | High continuous numerical density; privacy/battery drain. |

---

## 13. Electrical Metering: AMR vs. AMI

| Feature | Automated Meter Reading (AMR) | Advanced Metering Infrastructure (AMI) |
| :--- | :--- | :--- |
| **Communication Flow** | **One-way only** (Meter $\rightarrow$ Utility reader). | **Two-way bidirectional** (Meter $\leftrightarrow$ Utility MDMS). |
| **Data Collection** | Drive-by or walk-by radio receiver vehicle. | Continuous automated transmission over HAN/NAN/WAN. |
| **Remote Power Cutoff** | **Impossible** (Requires manual technician on site). | **Standard feature** (Integrated remote disconnect switch). |
| **Dynamic Pricing** | Impossible (Only static monthly billing). | Enables real-time Time-of-Use (TOU) dynamic tariffs. |
| **Outage Notification** | Dependent on customer phone calls. | Automated "Last Gasp" packet transmitted instantly. |

---

## 14. Connected Vehicles: DSRC vs. C-V2X

| Feature | Dedicated Short-Range Communications (DSRC) | Cellular-V2X (C-V2X) |
| :--- | :--- | :--- |
| **Standardizing Body** | IEEE (**802.11p** / IEEE 1609 WAVE). | **3GPP** (Release 14 LTE, Release 16/17 5G NR). |
| **Operating Frequency** | **5.9 GHz Dedicated ITS Band** (75 MHz bandwidth).| **5.9 GHz ITS Band** + Commercial Mobile Cellular. |
| **Network Reliance** | **Zero cellular dependence** (Pure ad-hoc Wi-Fi).| Can operate direct via **PC5 Sidelink** or via cell towers.|
| **Latency Profile** | Very low (**< 5 ms**). | Ultra-low (**< 1 ms** in 5G NR). |
| **Maturity** | Extensively field-deployed and validated since 2010.| Next-generation global standard adopted by automakers. |
