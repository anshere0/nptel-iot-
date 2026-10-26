# Week 02: IoT Networking, 802.15.4, 6LoWPAN, Zigbee & Application Protocols

**Course**: Introduction to Internet of Things — NPTEL / IIT Kharagpur  
**Instructor**: Prof. Sudip Misra  
**Slide Reference**: `Week-2.pdf` (Connectivity Technologies Part II & Basics of IoT Networking)  
**Assigned MCQs**: Current 2026 Session Week 2 (15 Questions) & Historical Question Banks

---

## 1. Overview & Syllabus Mapping

Week 2 introduces the communications protocol stack designed specifically for resource-constrained, battery-powered embedded systems. Standard enterprise networking protocols (TCP, IPv6, HTTP) carry excessive header overhead and assume continuous high-bandwidth links. In this module, we examine how the **IEEE 802.15.4** standard defines the physical and link layer boundaries for Low-Rate Wireless Personal Area Networks (LR-WPAN), how the **6LoWPAN** adaptation layer compresses 1280-byte IPv6 packets into 127-byte frames, how **Zigbee** builds mesh routing atop 802.15.4, and how lightweight application protocols—specifically **MQTT** and **CoAP**—replace heavy HTTP web communication.

```
┌────────────────────────────────────────────────────────┐
│             IoT PROTOCOL STACK ARCHITECTURE            │
├───────────────────────────────┬────────────────────────┤
│ Application Layer             │ MQTT / CoAP / AMQP     │
├───────────────────────────────┼────────────────────────┤
│ Transport Layer               │ TCP (MQTT) / UDP (CoAP)│
├───────────────────────────────┼────────────────────────┤
│ Network Layer                 │ IPv6 / RPL             │
├───────────────────────────────┼────────────────────────┤
│ Adaptation Layer              │ 6LoWPAN (Compression)  │
├───────────────────────────────┼────────────────────────┤
│ Data Link (MAC) Layer         │ IEEE 802.15.4 MAC      │
├───────────────────────────────┼────────────────────────┤
│ Physical (PHY) Layer          │ IEEE 802.15.4 PHY      │
└───────────────────────────────┴────────────────────────┘
```

---

## 2. IEEE 802.15.4 Standard for LR-WPAN

The **IEEE 802.15.4** specification standardizes the Physical (PHY) and Medium Access Control (MAC) layers for Low-Rate Wireless Personal Area Networks (LR-WPANs). It is optimized for ultra-low power consumption, short-range transmission (10–100 m), relaxed throughput requirements, and low implementation cost.

### 2.1 Frequency Bands & Physical Layer Attributes

| Operating Frequency | Geographical Region | Number of Channels | Data Transfer Rate | Modulation Scheme |
| :--- | :--- | :--- | :--- | :--- |
| **2.4 GHz (ISM)** | Worldwide (License-free) | 16 channels (ch 11–26) | **250 kbps** | O-QPSK (Offset Quadrature Phase Shift Keying) |
| **868 MHz** | Europe | 1 channel (ch 0) | **20 kbps** | BPSK (Binary Phase Shift Keying) |
| **915 MHz** | North America & Australia | 10 channels (ch 1–10) | **40 kbps** | BPSK |

- **Maximum Frame Size**: The maximum physical layer packet size (PHY Service Data Unit - PSDU) is strictly **127 bytes**.
- **Frame Overhead**: After MAC headers, security headers, and CRC are subtracted, the usable payload per frame is approximately **81 to 102 bytes**.

### 2.2 Device Types: FFD vs. RFD

IEEE 802.15.4 defines two distinct functional device classes:

```
┌─────────────────────────────────┐     ┌─────────────────────────────────┐
│ Full-Function Device (FFD)      │     │ Reduced-Function Device (RFD)   │
├─────────────────────────────────┤     ├─────────────────────────────────┤
│ • Complete MAC protocol set     │     │ • Minimal protocol subset       │
│ • Can act as PAN Coordinator    │     │ • CANNOT act as Coordinator     │
│ • Can communicate with any node │     │ • Can only talk to a single FFD │
│ • Mains powered or large battery│     │ • Extreme low-power battery node│
│ • Router / Coordinator role     │     │ • Sensor leaf node only         │
└─────────────────────────────────┘     └─────────────────────────────────┘
```

### 2.3 Network Topologies

1. **Star Topology**: A single Full-Function Device acts as the centralized **PAN Coordinator**. All other nodes (either FFDs or RFDs) communicate exclusively through the PAN Coordinator. No direct node-to-node peer communication occurs.
2. **Peer-to-Peer (Mesh) Topology**: Every FFD can communicate directly with any other FFD within its wireless transmission radius. Enables multi-hop self-configuring mesh routing.
3. **Cluster-Tree Topology**: A specialized peer-to-peer variant where most devices are FFDs organized in hierarchical branch clusters managed by Cluster Heads, while leaf nodes may be RFDs.

---

## 3. 6LoWPAN: IPv6 over Low-Power WPAN

### 3.1 The Fundamental MTU Problem

- **The Conflict**: The IPv6 specification (RFC 8200) mandates that any physical link layer supported by IPv6 must support a **Minimum Transmission Unit (MTU) of 1280 bytes**. Conversely, an IEEE 802.15.4 frame has an absolute maximum physical packet size of **127 bytes** (with only ~81–102 bytes available for payload).
- **The Solution**: The IETF established **6LoWPAN** (RFC 4944, RFC 6282). 6LoWPAN introduces a specialized **Adaptation Layer** situated between the Data Link layer and the Network layer.

```
┌────────────────────────────────────────────────────────┐
│                       IPv6 LAYER                       │
│              (Requires 1280-byte MTU)                  │
└───────────────────────────┬────────────────────────────┘
                            ▼
┌────────────────────────────────────────────────────────┐
│               6LoWPAN ADAPTATION LAYER                 │
│  • Packet Fragmentation & Reassembly                   │
│  • Stateless / Stateful Header Compression             │
│  • Link-Layer Mesh Routing Support                     │
└───────────────────────────┬────────────────────────────┘
                            ▼
┌────────────────────────────────────────────────────────┐
│                 IEEE 802.15.4 MAC LAYER                │
│             (Max Payload: ~81–102 bytes)               │
└────────────────────────────────────────────────────────┘
```

### 3.2 6LoWPAN Header Types

6LoWPAN precedes payload segments with distinctive header bytes identified by their leading bit patterns:

1. **No 6LoWPAN Header (Pattern `00xxxxxx`)**: Indicates that the frame does not utilize 6LoWPAN processing and should be handled by standard link-layer protocols.
2. **Dispatch Header (Pattern `01xxxxxx`)**: Identifies the protocol of the compressed payload following the 6LoWPAN encapsulation (e.g., compressed IPv6, uncompressed IPv6).
3. **Mesh Addressing Header (Pattern `10xxxxxx`)**: Used when packets must hop across multiple 802.15.4 nodes at the link layer before reaching the adaptation layer destination. Contains:
   - *V and F bits*: Indicate 16-bit short vs 64-bit extended MAC addressing for Originator and Final Destination.
   - *Hops Left field*: Decremented at each hop to prevent infinite routing loops.
4. **Fragmentation Header (Pattern `11xxxxxx`)**: Used whenever an IPv6 datagram exceeds the 802.15.4 frame size:
   - *First Fragment (`11000xxx`)*: Encodes datagram size (11 bits) and datagram tag (identifying datagram instance).
   - *Subsequent Fragments (`11100xxx`)*: Encodes datagram size, datagram tag, and **datagram offset** (in 8-byte increments).

### 3.3 Header Compression (HC1 & IPHC)

A standard IPv6 header occupies **40 bytes**, and an uncompressed UDP header occupies **8 bytes** (total 48 bytes). In an 80-byte payload, a 48-byte header leaves only 32 bytes for sensor data!
- 6LoWPAN leverages the fact that many IPv6 fields are constant, predictable, or derivable from the 802.15.4 MAC address:
  - The IPv6 link-local prefix (`FE80::/64`) is known.
  - The 64-bit interface identifier (IID) can be directly inferred from the IEEE 64-bit extended MAC address (EUI-64).
  - UDP port numbers within commonly used ranges (e.g., CoAP port 5683) can be compressed to 4 bits.
- Using **IPHC (IPv6 Payload Header Compression)**, the combined 48-byte IPv6/UDP header can be compressed down to **as few as 6 or 7 bytes**, and in best-case link-local communication, just **4 bytes**!

---

## 4. Zigbee Protocol Suite

**Zigbee** is a commercial standard maintained by the Connectivity Standards Alliance (formerly Zigbee Alliance) built directly on top of IEEE 802.15.4 PHY and MAC.

```
┌────────────────────────────────────────────────────────┐
│ Application Layer (APL): Profiles, Clusters, ZDO       │
├────────────────────────────────────────────────────────┤
│ Network Layer (NWK): Mesh routing, AODV, Security      │
├────────────────────────────────────────────────────────┤
│ IEEE 802.15.4 MAC Layer                                │
├────────────────────────────────────────────────────────┤
│ IEEE 802.15.4 PHY Layer (2.4 GHz)                      │
└────────────────────────────────────────────────────────┘
```

### 4.1 Zigbee Device Hierarchy

1. **Zigbee Coordinator (ZC)**:
   - Exactly **one Coordinator exists per Zigbee network**.
   - Initiates network formation, chooses the radio channel, assigns the 16-bit Personal Area Network ID (PAN ID), and acts as the Trust Center (security key management).
   - Must be a Full-Function Device (FFD); cannot sleep; continuously mains powered.
2. **Zigbee Router (ZR)**:
   - An intermediate FFD node that relays packets across the mesh using a variant of the AODV (Ad-hoc On-Demand Distance Vector) routing protocol.
   - Can associate with children (both other routers and end devices); continuously powered.
3. **Zigbee End Device (ZED)**:
   - A battery-operated leaf node (often an RFD) that interacts with physical sensors or actuators.
   - Does NOT participate in mesh packet routing; communicates exclusively with its parent Router or Coordinator.
   - Spends most of its lifecycle in low-power deep sleep mode.

---

## 5. IoT Application Layer Protocols

Traditional web architectures rely on **HTTP/1.1** over **TCP**. While ubiquitous, HTTP is synchronous, verbose (hundreds of bytes of ASCII text headers), client-polled, and requires significant CPU and memory overhead. IoT architectures employ lightweight binary or binary-optimized alternatives: **MQTT** and **CoAP**.

### 5.1 MQTT (Message Queuing Telemetry Transport)

Developed by Andy Stanford-Clark (IBM) and Arlen Nipper (Arcom) in 1999 for SCADA oil pipeline monitoring over satellite:

```
[ Publisher ] ──(Publish: sensor/temp = 24.5C)──> [ MQTT Broker ]
                                                         │
                             ┌───────────────────────────┴───────────────────────────┐
                             ▼                                                       ▼
                [ Subscriber: Web App ]                     [ Subscriber: HVAC Controller ]
```

- **Architecture**: **Publish/Subscribe** paradigm centered around a centralized message server called the **Broker**.
- **Transport**: Operates over **TCP** (standard port **1883**; secure TLS port **8883**).
- **Header Size**: Extremely lightweight fixed header of just **2 bytes**.
- **Topic Hierarchy**: Hierarchical forward-slash delimited strings (e.g., `factory/floor1/temp`).
  - Single-level wildcard: `+` (e.g., `factory/+/temp` matches `factory/floor1/temp` and `factory/floor2/temp`).
  - Multi-level wildcard: `#` (e.g., `factory/#` matches all subtopics underneath `factory`).
- **Quality of Service (QoS) Levels**:
  - **QoS 0 (At most once)**: "Fire and forget." The message is sent with no acknowledgement. Delivery is not guaranteed; duplicate delivery is impossible.
  - **QoS 1 (At least once)**: Guaranteed delivery via `PUBACK` acknowledgement. If the sender does not receive `PUBACK`, it retransmits. *Duplicate messages may occur*.
  - **QoS 2 (Exactly once)**: Highest reliability via a 4-step two-phase handshake (`PUBLISH` $\rightarrow$ `PUBREC` $\rightarrow$ `PUBREL` $\rightarrow$ `PUBCOMP`). Guarantees neither message loss nor duplication. Highest latency and overhead.
- **Key Features**:
  - *Retained Messages*: The broker stores the last message on a topic so new subscribers instantly receive current state.
  - *Last Will and Testament (LWT)*: A pre-configured distress message dispatched automatically by the broker to alert subscribers if a client disconnects ungracefully.
  - *Keep-Alive / PINGREQ*: Periodic ping packets to ensure TCP socket liveness.

### 5.2 CoAP (Constrained Application Protocol)

Standardized by the IETF in **RFC 7252**, CoAP is designed as a specialized web transfer protocol for constrained nodes and M2M environments.

```
┌────────────────────────────────────────────────────────┐
│         CoAP Request / Response Layer (RESTful)        │
├────────────────────────────────────────────────────────┤
│         CoAP Messaging Layer (UDP Reliability)         │
├────────────────────────────────────────────────────────┤
│                       UDP Layer                        │
└────────────────────────────────────────────────────────┘
```

- **Architecture**: **Request/Response** paradigm mapped directly to REST (Representational State Transfer) principles.
- **Transport**: Operates over connectionless **UDP** (standard port **5683**; secure DTLS port **5684**).
- **Header Size**: Compact fixed header of **4 bytes**.
- **RESTful Methods**: Inherits web semantics: `GET`, `POST`, `PUT`, `DELETE`.
- **Message Types (Messaging Layer)**:
  1. *Confirmable (CON)*: Requires an explicit Acknowledgement (`ACK`) from the receiver. Retransmitted with exponential backoff if unacknowledged.
  2. *Non-Confirmable (NON)*: Does not require acknowledgement (used for frequent, transient sensor streams).
  3. *Acknowledgement (ACK)*: Confirms receipt of a CON message; can piggyback response data.
  4. *Reset (RST)*: Rejects a CON or NON message when receiver cannot process it.
- **CoAP Resource Observation (RFC 7641)**: Extends CoAP with an "Observe" option. A client sends a `GET` request with an observe flag; the server thereafter automatically streams state updates whenever the resource changes (simulating pub/sub over REST).

---

## 6. Head-to-Head Comparison: MQTT vs. CoAP

| Dimension | MQTT (Message Queuing Telemetry Transport) | CoAP (Constrained Application Protocol) |
| :--- | :--- | :--- |
| **Standardizing Body** | OASIS & ISO/IEC (20922) | IETF (RFC 7252) |
| **Core Architecture** | **Publish / Subscribe** (Brokered) | **Request / Response** (RESTful Client/Server) |
| **Transport Layer** | **TCP** (Connection-oriented) | **UDP** (Connectionless datagrams) |
| **Fixed Header Size** | **2 bytes** | **4 bytes** |
| **Default Ports** | 1883 (Insecure), 8883 (TLS) | 5683 (Insecure), 5684 (DTLS) |
| **Communication Flow** | Many-to-Many via central Broker | One-to-One Point-to-Point (or Multicast) |
| **Delivery Guarantees** | QoS 0 (At most once), QoS 1 (At least once), QoS 2 (Exactly once) | Confirmable (CON) vs Non-Confirmable (NON) |
| **Security Mechanism** | TLS / SSL | DTLS (Datagram Transport Layer Security) |
| **Caching Support** | No native HTTP-style caching | Native caching and proxying support |
| **Best Used For** | Continuous event streaming, telemetry pipelines, smart home status | Low-overhead request/response, asynchronous resource queries, battery-critical nodes |

---

## 7. Important Vocabulary & Full Forms

- **LR-WPAN**: Low-Rate Wireless Personal Area Network
- **6LoWPAN**: IPv6 over Low-Power Wireless Personal Area Networks
- **MTU**: Maximum Transmission Unit (1280 bytes for IPv6)
- **PSDU**: Physical Layer Service Data Unit (127 bytes in 802.15.4)
- **FFD**: Full-Function Device
- **RFD**: Reduced-Function Device
- **PAN ID**: Personal Area Network Identifier
- **O-QPSK**: Offset Quadrature Phase Shift Keying
- **BPSK**: Binary Phase Shift Keying
- **MQTT**: Message Queuing Telemetry Transport
- **CoAP**: Constrained Application Protocol
- **REST**: Representational State Transfer
- **LWT**: Last Will and Testament
- **QoS**: Quality of Service
- **DTLS**: Datagram Transport Layer Security

---

## 8. MCQ Traps & Distractor Analysis

> [!WARNING]
> **Trap 1: The 6LoWPAN Protocol Role**  
> *Distractor*: "6LoWPAN is a replacement for IPv6 on the Internet."  
> *Truth*: 6LoWPAN does *not* replace IPv6. It is an adaptation layer that compresses and fragments IPv6 datagrams so they can fit inside 802.15.4 frames.

> [!WARNING]
> **Trap 2: Reduced-Function Device (RFD) Capabilities**  
> *Distractor*: "An RFD can serve as a PAN Coordinator in a star topology."  
> *Truth*: An RFD **cannot** be a coordinator or route packets. Only Full-Function Devices (FFDs) can act as PAN Coordinators.

> [!WARNING]
> **Trap 3: Transport Layer of MQTT vs CoAP**  
> *Distractor*: "CoAP runs over TCP because it requires reliable HTTP methods."  
> *Truth*: CoAP runs over **UDP**. It implements its own optional reliability at the messaging layer via Confirmable (CON) packets. MQTT runs over **TCP**.

> [!WARNING]
> **Trap 4: MQTT QoS 1 vs QoS 2**  
> *Distractor*: "QoS 1 guarantees that a subscriber receives the message exactly once without duplicates."  
> *Truth*: QoS 1 guarantees *at least once*. Duplicates **can** occur if acknowledgements are delayed. *QoS 2* is the only level that guarantees *exactly once*.

---

## 9. High-Yield Recall Summary

- **IEEE 802.15.4**: 2.4 GHz (16 channels, 250 kbps), 868 MHz (1 channel, 20 kbps), 915 MHz (10 channels, 40 kbps). Max frame = 127 bytes.
- **6LoWPAN**: Bridges IPv6 (1280-byte MTU) to 802.15.4 (127-byte PHY). Functions: fragmentation, header compression, mesh routing.
- **6LoWPAN Headers**: Dispatch (`01...`), Mesh (`10...`), Fragmentation (`11000...` first, `11100...` subsequent).
- **Zigbee Stack**: Built on 802.15.4; exactly 1 Coordinator (FFD) per network, multiple Routers (FFD), and End Devices (RFD).
- **MQTT**: TCP port 1883, 2-byte fixed header, Pub/Sub, Broker-centric, QoS 0/1/2, LWT, Retained messages.
- **CoAP**: UDP port 5683, 4-byte fixed header, RESTful (GET/POST/PUT/DELETE), CON/NON/ACK/RST, Observe option (RFC 7641).
