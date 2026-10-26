# Important Terms and Full Forms — NPTEL Introduction to Internet of Things

**Examination**: NPTEL 2026 Certification Examination (IIT Kharagpur — Prof. Sudip Misra)  
**Scope**: Exhaustive Glossary of Abbreviations, Standards, Architectures & Technical Jargon

---

## 1. Core IoT Standards, Protocols & Networking

| Acronym | Complete Expansion | Contextual Technical Meaning |
| :--- | :--- | :--- |
| **IoT** | Internet of Things | Open dynamic network of seamlessly connected physical objects and devices. |
| **M2M** | Machine-to-Machine | Point-to-point communication between two machines, typically over cellular/serial links. |
| **WoT** | Web of Things | Application-layer paradigm integrating IoT devices into the web using standard HTTP/REST. |
| **LR-WPAN** | Low-Rate Wireless Personal Area Network | IEEE 802.15.4 specification defining physical and MAC layers for low-power devices. |
| **6LoWPAN** | IPv6 over Low-Power Wireless Personal Area Networks | IETF adaptation layer compressing and fragmenting IPv6 datagrams into 802.15.4 frames. |
| **MTU** | Maximum Transmission Unit | Largest packet size a network protocol can pass through (1280 bytes for IPv6). |
| **PSDU** | Physical Layer Service Data Unit | Maximum physical frame size in IEEE 802.15.4 (strictly 127 bytes). |
| **FFD** | Full-Function Device | IEEE 802.15.4 node implementing complete MAC; can act as Coordinator or Router. |
| **RFD** | Reduced-Function Device | IEEE 802.15.4 leaf node with minimal MAC; communicates only with an FFD. |
| **MQTT** | Message Queuing Telemetry Transport | Lightweight TCP-based publish/subscribe messaging protocol (port 1883). |
| **CoAP** | Constrained Application Protocol | Lightweight UDP-based RESTful request/response protocol (port 5683). |
| **QoS** | Quality of Service | Reliability guarantee level in MQTT (0 = At most once, 1 = At least once, 2 = Exactly once). |
| **LWT** | Last Will and Testament | MQTT pre-configured distress message dispatched automatically by broker upon client loss. |
| **DTLS** | Datagram Transport Layer Security | Transport-layer cryptographic security standard for UDP protocols (such as CoAP). |
| **TLS / SSL** | Transport Layer Security / Secure Sockets Layer | Cryptographic security protocols providing privacy over TCP connections. |
| **AMQP** | Advanced Message Queuing Protocol | Open enterprise wire-level messaging protocol with advanced routing and queuing. |
| **XMPP** | Extensible Messaging and Presence Protocol | XML-based real-time communication protocol originally developed for Jabber instant messaging. |
| **RPL** | Routing Protocol for Low-Power and Lossy Networks | IPv6 distance-vector routing protocol designed for constrained wireless networks. |

---

## 2. Wireless Technologies, Sensors & Hardware

| Acronym | Complete Expansion | Contextual Technical Meaning |
| :--- | :--- | :--- |
| **BLE** | Bluetooth Low Energy | 2.4 GHz low-power radio introduced in Bluetooth 4.0; utilizes 40 RF channels. |
| **GAP** | Generic Access Profile | BLE layer controlling advertising, scanning, device discovery, and connection roles. |
| **GATT** | Generic Attribute Profile | BLE client/server data specification organizing attributes into Services and Characteristics. |
| **ATT** | Attribute Protocol | Low-level protocol upon which GATT is constructed. |
| **HART** | Highway Addressable Remote Transducer | Industrial standard superimposing digital Bell 202 FSK onto 4–20 mA current loops. |
| **TSMP** | Time Synchronized Mesh Protocol | Data link protocol powering WirelessHART via 10 ms TDMA and channel hopping. |
| **FSK** | Frequency Shift Keying | Modulation where digital data is represented by discrete frequency changes. |
| **FHSS** | Frequency Hopping Spread Spectrum | Rapidly switching radio channels during transmission to minimize interference. |
| **DSSS** | Direct Sequence Spread Spectrum | Spreading baseband signal over wider bandwidth using a pseudo-random noise code. |
| **NFC** | Near Field Communication | 13.56 MHz short-range (<10 cm) inductive wireless interface (ISO/IEC 18092). |
| **WSN** | Wireless Sensor Network | Spatially distributed grid of autonomous sensor nodes monitoring environmental states. |
| **WMSN** | Wireless Multimedia Sensor Network | Sensor network incorporating video cameras and microphones with directional Field of View. |
| **UW-ASN** | Underwater Acoustic Sensor Network | Sensor networks deployed in water relying on acoustic waves (~1500 m/s) for communication. |
| **FANET** | Flying Ad-Hoc Network | Decentralized, highly dynamic wireless mesh composed of autonomous aerial drones (UAVs). |
| **UAV** | Unmanned Aerial Vehicle | Autonomous or remotely piloted airborne drone. |
| **FoV** | Field of View | Directional sensing cone/sector characterizing camera and multimedia sensors. |
| **SPP** | Surface Plasmon Polariton | Electromagnetic surface waves on graphene enabling Terahertz (0.1–10 THz) nanonetworks. |
| **CNT** | Carbon Nanotube | Cylindrical nanostructure of carbon utilized in nano-antennas and nanoscale computing. |
| **SMA** | Shape Memory Alloy | Metallic alloy (Nitinol) that reverts to original geometry upon heating past transformation temp. |
| **SMP** | Shape Memory Polymer | Polymeric smart material demonstrating high strain recovery triggered by heat, light, or electricity. |
| **ADC** | Analog-to-Digital Converter | Electronic circuit quantizing continuous analog voltages into discrete digital numbers. |
| **PWM** | Pulse Width Modulation | Technique of simulating variable analog voltage by pulsing digital signal at varying duty cycles. |
| **SoC** | System-on-Chip | Integrated circuit integrating CPU, memory, I/O, and GPU onto a single silicon chip (e.g., Broadcom). |
| **SBC** | Single Board Computer | Complete, fully operational computer built on a single printed circuit board (e.g., Raspberry Pi). |
| **GPIO** | General Purpose Input/Output | Uncommitted physical IC pins controllable via software as digital inputs or outputs. |
| **I2C** | Inter-Integrated Circuit | Synchronous, multi-master, 2-wire serial bus (SDA data, SCL clock). |
| **SPI** | Serial Peripheral Interface | Synchronous, full-duplex, 4-wire serial bus (MOSI, MISO, SCLK, SS/CE). |
| **UART** | Universal Asynchronous Receiver-Transmitter | Asynchronous point-to-point serial communication protocol (TX, RX). |

---

## 3. Programmable Networks, Virtualization & Cloud

| Acronym | Complete Expansion | Contextual Technical Meaning |
| :--- | :--- | :--- |
| **SDN** | Software-Defined Networking | Network paradigm decoupling the Control Plane from the Data/Infrastructure Plane. |
| **SDWMN** | Software-Defined Wireless Mobile Network | SDN architectural framework applied to wireless cellular and mobile networks. |
| **NIST** | National Institute of Standards and Technology | US agency that established the authoritative SP 800-145 Cloud Computing standard. |
| **IaaS** | Infrastructure as a Service | Cloud model providing raw virtualized compute, storage, and networking (e.g., Nova). |
| **PaaS** | Platform as a Service | Cloud model delivering operating systems and managed application runtimes (e.g., App Engine). |
| **SaaS** | Software as a Service | Cloud model delivering fully functional end-user software over the web (e.g., Gmail). |
| **VS** | Virtual Sensor | Software-defined logical sensor in Sensor-Cloud synthesized dynamically on demand. |
| **RBAC** | Role-Based Access Control | Security access approach restricting system resources based on assigned organizational roles. |
| **QCOW2** | QEMU Copy-On-Write version 2 | Flexible virtual disk storage format widely utilized by OpenStack Glance and KVM. |

---

## 4. Smart Cities, Smart Grid, IIoT & Case Studies

| Acronym | Complete Expansion | Contextual Technical Meaning |
| :--- | :--- | :--- |
| **MCS** | Mobile Crowd Sensing | Leveraging citizen mobile devices to harvest urban and environmental telemetry. |
| **PIR** | Passive Infrared | Thermal motion sensor measuring infrared radiation changes emitted by human bodies. |
| **AAL** | Ambient Assisted Living | IoT solutions assisting elderly or disabled individuals in independent domestic living. |
| **AMI** | Advanced Metering Infrastructure | Bidirectional continuous communication network linking smart meters with utility MDMS. |
| **AMR** | Automated Meter Reading | Unidirectional drive-by or walk-by radio meter reading system. |
| **MDMS** | Meter Data Management System | Enterprise database validating, cleaning, and storing smart meter interval consumption data. |
| **HAN** | Home Area Network | Domestic subnet connecting smart meter to in-home displays and smart appliances (Zigbee/Wi-Fi). |
| **NAN** | Neighborhood Area Network | Substation-level network aggregating hundreds of smart meters to local collectors. |
| **WAN** | Wide Area Network | Long-haul telecommunications backbone connecting neighborhood collectors to utility datacenter. |
| **DER** | Distributed Energy Resources | Small-scale decentralized electricity generation units (rooftop solar, wind, battery storage). |
| **FDIR** | Fault Detection, Isolation, and Restoration | Automated self-healing grid logic re-routing distribution power around damaged lines. |
| **WAMS** | Wide Area Measurement System | High-speed electrical grid monitoring system providing dynamic wide-area visibility. |
| **PMU** | Phasor Measurement Unit | Sensor measuring voltage/current synchrophasors synchronized to GPS atomic clocks at 30–60 Hz. |
| **PDC** | Phasor Data Concentrator | Regional node aligning PMU synchrophasors by timestamp before streaming to grid control centers. |
| **CPS** | Cyber-Physical Systems | Integrations of computation, networking, and physical mechanics operating in feedback loops. |
| **IIoT** | Industrial Internet of Things | Application of IoT technologies, open standards, and predictive analytics to heavy industry. |
| **SCADA** | Supervisory Control and Data Acquisition | Traditional industrial operational control system utilizing isolated, proprietary networks. |
| **PdM** | Predictive Maintenance | Real-time condition monitoring predicting machinery failure before physical breakdown. |
| **NDVI** | Normalized Difference Vegetation Index | Multispectral remote sensing index quantifying vegetative crop health: $(NIR - Red) / (NIR + Red)$. |
| **IoMT** | Internet of Medical Things | Medical devices and clinical applications interconnected via healthcare telemetry networks. |
| **BSN** | Body Sensor Network | Wireless network of wearable and implantable biosensors monitoring patient physiological metrics. |
| **HIPAA** | Health Insurance Portability and Accountability Act | US federal statute establishing strict security and privacy standards for protected health data. |
| **V2X** | Vehicle-to-Everything | Unified communication framework encompassing V2V, V2I, V2P, and V2N. |
| **V2V** | Vehicle-to-Vehicle | Direct vehicle-to-vehicle ad-hoc communication for collision avoidance and platooning. |
| **V2I** | Vehicle-to-Infrastructure | Communication between vehicles and roadside units (RSUs) on traffic lights and toll plazas. |
| **V2P** | Vehicle-to-Pedestrian | Communication alerting motorists of nearby vulnerable pedestrians and cyclists. |
| **V2N** | Vehicle-to-Network | Long-range cellular link connecting vehicle to cloud routing and traffic prediction servers. |
| **DSRC** | Dedicated Short-Range Communications | 5.9 GHz vehicular communication standard based on IEEE 802.11p with <5 ms latency. |
| **C-V2X** | Cellular Vehicle-to-Everything | 3GPP cellular standard utilizing PC5 direct sidelink and commercial 4G/5G mobile towers. |
| **RSU** | Roadside Unit | Fixed communications transceiver mounted alongside roadways in intelligent transit systems. |
| **OBU** | Onboard Unit | Transceiver mounted inside a vehicle managing vehicular network communication. |
| **ITS** | Intelligent Transportation System | Advanced applications providing innovative services relating to different modes of transport. |
