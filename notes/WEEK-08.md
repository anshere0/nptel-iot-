# Week 08: Software-Defined Networking (SDN) for IoT & Cloud Computing Core

**Course**: Introduction to Internet of Things — NPTEL / IIT Kharagpur  
**Instructor**: Prof. Sudip Misra  
**Slide Reference**: `Week-8.pdf` (Software-Defined Networking Part II & Cloud Computing Fundamentals)  
**Assigned MCQs**: Current 2026 Session Week 8 (15 Questions) & Historical Question Banks

---

## 1. Overview & Syllabus Mapping

Week 8 explores the paradigm shift from rigid, hardware-coupled network architectures to programmable, software-orchestrated infrastructures. We analyze **Software-Defined Networking (SDN)**, examining how decoupling the **Control Plane** from the **Data Plane** solves traditional wireless mobile networking bottlenecks (interference management and dynamic traffic shaping). We dissect the **OpenFlow** switch specification, flow table structures, and IoT adaptations (**Sensor OpenFlow**, **Soft-WSN**, **SDWMN**). Finally, we examine the formal foundations of **Cloud Computing** according to the **NIST SP 800-145** standard, covering the 5 essential characteristics, 3 service models, and 4 deployment models.

```
┌────────────────────────────────────────────────────────┐
│             SOFTWARE-DEFINED NETWORKING (SDN)          │
├────────────────────────────────────────────────────────┤
│ Application Plane : Energy Mgmt, QoS, Routing Apps     │
├────────────────────────────────────────────────────────┤
│     ▲ (Northbound API / RESTful Interfaces)            │
│     ▼                                                  │
├────────────────────────────────────────────────────────┤
│ Control Plane     : Centralized SDN Controller (Brain) │
├────────────────────────────────────────────────────────┤
│     ▲ (Southbound API / OpenFlow Protocol)             │
│     ▼                                                  │
├────────────────────────────────────────────────────────┤
│ Data Plane        : OpenFlow Forwarding Switches (Dumb)│
└────────────────────────────────────────────────────────┘
```

---

## 2. Software-Defined Networking (SDN) Foundations

### 2.1 Limitations of Traditional Distributed Networking

1. **Coupled Architecture**: In conventional routers and switches, the *control plane* (the decision-making algorithms computing routing tables via OSPF, BGP) and the *data plane* (the high-speed hardware forwarding engine) are tightly integrated inside proprietary vendor hardware.
2. **Ossification**: Introducing a new routing protocol or security policy requires manual re-configuration of thousands of individual devices via vendor-specific Command Line Interfaces (CLIs).
3. **Sub-Optimal Wireless Management**: In dense wireless networks, distributed access points make independent local decisions, resulting in co-channel RF interference and poor traffic load balancing.

### 2.2 The SDN Paradigm: Separation of Planes

SDN enforces a strict architectural separation:
- **Control Plane (The "Brain")**: Logically centralized software layer that computes global network topology, monitors traffic telemetry, and determines routing paths.
- **Data Plane (The "Brawn")**: Distributed, simple, programmable packet forwarding hardware elements that execute match-action rules provisioned by the controller.

---

## 3. The 3-Tier SDN Architecture & Interfaces

```
┌────────────────────────────────────────────────────────────────────────┐
│                        APPLICATION LAYER                               │
│     [ Traffic Engineering ]   [ Security Monitor ]   [ IoT QoS ]       │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ Northbound APIs (RESTful)
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                         CONTROL LAYER                                  │
│                 [ Logically Centralized SDN Controller ]               │
│          (Maintains Global Network State & Computes Flow Rules)        │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ Southbound API (OpenFlow Protocol)
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                      INFRASTRUCTURE / DATA LAYER                       │
│    [ OpenFlow Switch 1 ]    [ OpenFlow Switch 2 ]   [ Soft-WSN Node ]  │
└────────────────────────────────────────────────────────────────────────┘
```

### 3.1 The Three Core SDN Tiers

1. **Application Layer**: Contains business logic, telemetry analyzers, network virtualization managers, and IoT energy-saving policies.
2. **Control Layer (SDN Controller)**: The core operating system of the network (e.g., OpenDaylight, ONOS, Floodlight, Ryu). It translates application requirements into low-level hardware flow rules.
3. **Infrastructure / Data Layer**: Network switches and wireless forwarding routers stripped of independent control intelligence.

### 3.2 Key SDN Interfaces

- **Southbound Interface**: The communications protocol between the Controller and the Data Plane forwarding hardware. The dominant, universally standardized Southbound protocol is **OpenFlow**.
- **Northbound Interface**: APIs (typically RESTful JSON) exposing controller capabilities to high-level application developers.
- **East-West Interface**: Used for synchronization and state exchange between multiple cooperating controllers in distributed environments.

---

## 4. The OpenFlow Protocol & Switch Specification

An **OpenFlow Switch** forwards packets based on a pipeline of **Flow Tables**:

```
┌────────────────────────────────────────────────────────────────────────┐
│                      OPENFLOW FLOW ENTRY STRUCTURE                     │
├──────────────┬──────────┬──────────┬──────────────┬──────────┬─────────┤
│ Match Fields │ Priority │ Counters │ Instructions │ Timeouts │ Cookie  │
└──────────────┴──────────┴──────────┴──────────────┴──────────┴─────────┘
```

### 4.1 Anatomy of a Flow Entry

1. **Match Fields**: Packet header criteria used to identify traffic flows:
   - Ingress port
   - Ethernet source and destination MAC addresses (`dl_src`, `dl_dst`)
   - IPv4 / IPv6 source and destination addresses (`nw_src`, `nw_dst`)
   - Transport protocol (TCP, UDP) and source/destination port numbers
   - VLAN ID and priority
2. **Priority**: When a packet matches multiple flow entries, the entry with the **highest numerical priority** is executed.
3. **Counters**: Maintained by the hardware switch to track real-time statistics (e.g., received packets, received bytes, flow duration). Essential for traffic analytics and anomaly detection.
4. **Instructions / Actions**: Defines what the switch does with a matching packet:
   - *Forward*: Transmit out a specified physical port or virtual port (e.g., `ALL`, `CONTROLLER`, `LOCAL`).
   - *Drop*: Silently discard the packet.
   - *Modify Field*: Alter packet headers (e.g., rewrites IP/MAC address for NAT or load balancing).
   - *Goto-Table*: Direct the packet to a subsequent table in a multi-table pipeline.
5. **Timeouts**:
   - *Idle Timeout*: Flow entry expires if no packets match within this duration.
   - *Hard Timeout*: Flow entry expires after this total duration regardless of activity.
6. **Cookie**: A 64-bit opaque integer assigned by the controller to group related flow rules.

### 4.2 The Packet-In / Packet-Out Reactive Lifecycle

```
[ New Packet Arrives at Switch ]
               │
               ▼
   Does packet match any Flow Table entry?
         /           \
     YES              NO (Table Miss)
     /                 \
[ Execute Action ]   [ Encapsulate into OpenFlow "Packet-In" message ]
(e.g., Forward)        │
                       ▼
             [ Send to SDN Controller ]
                       │
                       ▼
             [ Controller Computes Path ]
                       │
                       ▼
             [ Sends "Flow-Mod" to install rule on Switch ]
                       │
                       ▼
             [ Sends "Packet-Out" to forward the buffered packet ]
```

---

## 5. SDN in IoT & Wireless Environments

Applying SDN to IoT environments requires adapting the heavy OpenFlow protocol to constrained radios:

1. **Sensor OpenFlow**: Strips down OpenFlow message sizes to operate over low-bandwidth IEEE 802.15.4 links, treating sensor motes as programmable flow switches.
2. **Soft-WSN**: A software-defined WSN management architecture that centrally optimizes sensor duty cycles, cluster-head elections, and routing paths based on real-time residual battery levels.
3. **Software-Defined Wireless Mobile Networks (SDWMN)**:
   - *Interference Management*: The controller monitors global channel quality and dynamically shifts interfering APs to orthogonal RF channels.
   - *Traffic Engineering & Handover*: Pre-provisions flow rules along a mobile node's trajectory to achieve zero-packet-loss handovers.

---

## 6. Cloud Computing Fundamentals (NIST SP 800-145)

The United States National Institute of Standards and Technology (NIST) established the definitive, internationally accepted definition of Cloud Computing:

> *"Cloud computing is a model for enabling ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources (e.g., networks, servers, storage, applications, and services) that can be rapidly provisioned and released with minimal management effort or service provider interaction."*

```
┌────────────────────────────────────────────────────────────────────────┐
│                   NIST CLOUD COMPUTING TAXONOMY                        │
├─────────────────────┬──────────────────┬───────────────────────────────┤
│ 5 CHARACTERISTICS   │ 3 SERVICE MODELS │ 4 DEPLOYMENT MODELS           │
├─────────────────────┼──────────────────┼───────────────────────────────┤
│ • On-Demand Self-Svc│ • IaaS           │ • Public Cloud                │
│ • Broad Net Access  │ • PaaS           │ • Private Cloud               │
│ • Resource Pooling  │ • SaaS           │ • Community Cloud             │
│ • Rapid Elasticity  │                  │ • Hybrid Cloud                │
│ • Measured Service  │                  │                               │
└─────────────────────┴──────────────────┴───────────────────────────────┘
```

### 6.1 The 5 Essential Characteristics

1. **On-Demand Self-Service**: A consumer can unilaterally provision computing capabilities (server time, network storage) automatically as needed, without human intervention from the service provider.
2. **Broad Network Access**: Capabilities are accessible across standard telecommunications networks via uniform client mechanisms (smartphones, tablets, laptops, IoT gateways).
3. **Resource Pooling**: The provider's computing resources are pooled to serve multiple consumers using a **multi-tenant model**, with physical and virtual resources dynamically assigned according to demand. Customers have location independence (unaware of physical server location).
4. **Rapid Elasticity**: Resources can be elastically provisioned and released—in some cases automatically—to scale outward and inward rapidly with demand. To the consumer, available resources appear virtually infinite.
5. **Measured Service**: Resource usage is automatically controlled, optimized, and monitored via metering capabilities at a level of abstraction appropriate to the type of service (e.g., storage consumed, compute hours, bandwidth). Enables transparent **pay-per-use** billing.

### 6.2 The 3 Cloud Service Models

```
┌───────────────────────────┐ ┌───────────────────────────┐ ┌───────────────────────────┐
│     IaaS                  │ │     PaaS                  │ │     SaaS                  │
│ (Infrastructure-as-a-Svc) │ │   (Platform-as-a-Svc)     │ │   (Software-as-a-Svc)     │
├───────────────────────────┤ ├───────────────────────────┤ ├───────────────────────────┤
│ User Manages:             │ │ User Manages:             │ │ User Manages:             │
│ • Applications            │ │ • Applications            │ │ • User-specific settings  │
│ • Runtime Environments    │ │ • Data                    │ │                           │
│ • Operating Systems       │ │                           │ │ Provider Manages:         │
│ • Network Configuration   │ │ Provider Manages:         │ │ • EVERYTHING (Apps,       │
│                           │ │ • Runtime Environments    │ │   Runtime, OS, Storage,   │
│ Provider Manages:         │ │ • Operating Systems       │ │   Physical Hardware)      │
│ • Physical Servers        │ │ • Physical Hardware       │ │                           │
│ • Hypervisors / Storage   │ │                           │ │ Examples:                 │
│ Examples: AWS EC2, GCE    │ │ Examples: GAE, Heroku     │ │ Gmail, Salesforce, Office │
└───────────────────────────┘ └───────────────────────────┘ └───────────────────────────┘
```

---

## 7. Important Vocabulary & Full Forms

- **SDN**: Software-Defined Networking
- **SDWMN**: Software-Defined Wireless Mobile Network
- **NIST**: National Institute of Standards and Technology
- **IaaS**: Infrastructure as a Service
- **PaaS**: Platform as a Service
- **SaaS**: Software as a Service
- **API**: Application Programming Interface
- **QoS**: Quality of Service
- **OpenFlow**: Standardized protocol for Southbound SDN communication
- **Packet-In**: Message sent from switch to controller upon encountering unknown packet

---

## 8. MCQ Traps & Distractor Analysis

> [!WARNING]
> **Trap 1: Packet Forwarding in SDN**  
> *Distractor*: "In an SDN architecture, every single data packet travels up to the SDN Controller to be forwarded."  
> *Truth*: The controller computes and installs **Flow Rules** in the switch's flow tables. Once installed, the hardware data plane forwards packets locally at line rate without consulting the controller again. Only "table-miss" packets trigger a `Packet-In` query to the controller.

> [!WARNING]
> **Trap 2: PaaS vs. IaaS Responsibilities**  
> *Distractor*: "In a PaaS model, the customer is responsible for patching and upgrading the underlying operating system kernel."  
> *Truth*: The cloud provider manages the operating system, hardware, and runtime in PaaS. The customer only manages the application code and data. OS management falls to the customer only in **IaaS**.

> [!WARNING]
> **Trap 3: Southbound vs Northbound Protocols**  
> *Distractor*: "OpenFlow is the standard Northbound API used by IoT business applications."  
> *Truth*: OpenFlow is strictly a **Southbound** protocol operating between the Controller and the physical forwarding switches. Northbound APIs are typically RESTful interfaces.

---

## 9. High-Yield Recall Summary

- **SDN Core Concept**: Decouples Control Plane (logically centralized controller) from Data Plane (programmable forwarding switches).
- **OpenFlow Protocol**: Standard Southbound API. Flow entries contain: Match Fields, Priority, Counters, Instructions, Timeouts, Cookie.
- **NIST Cloud Definition (SP 800-145)**:
  - **5 Characteristics**: On-demand self-service, Broad network access, Resource pooling, Rapid elasticity, Measured service.
  - **3 Service Models**: IaaS (raw infrastructure/VMs), PaaS (managed application runtimes), SaaS (end-user web software).
  - **4 Deployment Models**: Public, Private, Community, Hybrid.
