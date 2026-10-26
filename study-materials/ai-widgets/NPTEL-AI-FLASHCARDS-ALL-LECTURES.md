# Official NPTEL AI-Powered Flashcards — All 60 Lectures (Weeks 1 to 12)

**Course**: Introduction to Internet of Things (noc26_cs161 / IIT Kharagpur — Prof. Sudip Misra)
**Source**: NPTEL Official AI Widget Extraction
**Total Flashcards**: 1,800 Cards (30 Cards per Lecture across 60 Lectures)

---

# Week 1

## Lecture 1: Introduction to IoT- Part-I (Lecture 1)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What is the core vision of the Internet of Things (IoT)?** | To interconnect all physical objects around us, expanding the internet beyond computers to include everyday 'things'. | IoT Definition | Easy |
| 2 | **How does the scope of the Internet of Things (IoT) differ from the current internet?** | The current internet connects computers and computing devices; IoT expands this to interconnect physical objects and things. | IoT Scope | Easy |
| 3 | **What is the primary reason IoT is considered necessary and popular?** | To provide advanced levels of service to society and business. | IoT Motivation | Easy |
| 4 | **What technology is used to equip physical objects to become 'nodes' in the IoT?** | Embedded systems, including embedded electronics, processors, and communication systems. | IoT Components | Medium |
| 5 | **How is IoT related to the development of smart homes and smart cities?** | IoT is considered one of the enabling technologies for making cities and homes smart. | IoT Applications | Easy |
| 6 | **Name some wireless technologies typically used for interconnecting devices in IoT.** | WiFi, cellular technologies, Bluetooth, Zigbee, 6LoWPAN, Lora. | IoT Connectivity | Medium |
| 7 | **Why is scalability a significant challenge for IoT networks?** | The number of connected things is projected to be billions and trillions, far exceeding current internet nodes, requiring the overall network performance not to be compromised. | IoT Challenges | Medium |
| 8 | **What specific problem arises with naming and addressing in a large-scale IoT network compared to the current internet?** | The existing IPv4 addressing is already an issue, and with billions of new physical objects, a new mechanism for naming and addressing is required. | IoT Challenges | Medium |
| 9 | **Describe a typical resource constraint for individual nodes in an IoT network.** | They are typically very low power and have limited resources, often requiring sleep modes when not active. | IoT Characteristics | Easy |
| 10 | **How does device mobility present a challenge in IoT networks?** | Devices like smartwatches move, making the node mobile. Subnetworks and even larger networks can also become mobile, making IP-based addressing less suitable. | IoT Challenges | Medium |
| 11 | **What is 'intermittent connectivity' in the context of IoT, and what technology can address it?** | Devices may connect and disconnect frequently. Opportunistic mobile networks (OMN) can help address this problem. | IoT Challenges | Hard |
| 12 | **Which application domain is estimated to hold the largest market share for IoT?** | Manufacturing and business (approximately 40.2%). | IoT Applications | Easy |
| 13 | **Give two examples of how IoT can be applied in the healthcare sector.** | Portable healthcare monitoring, telemedicine, electronic record-keeping, pharmaceutical safeguards. | IoT Applications | Medium |
| 14 | **How can IoT improve operations in the retail sector?** | Inventory tracking, smartphone purchasing, anonymous analytics of consumer choices. | IoT Applications | Medium |
| 15 | **Name two early examples of internetworked devices mentioned in the lecture.** | ATMs (1970s) and the Web (1990s). | IoT Evolution | Easy |
| 16 | **What is a key function of smart meters in a city context?** | They can be programmable to record different things, enable load balancing, efficient electricity use, and dynamic pricing. | IoT Applications | Medium |
| 17 | **How do digital locks leverage IoT principles?** | They can be controlled remotely (e.g., via smartphone), allow easy changes to access, and grant access to facilities more efficiently than conventional locks. | IoT Applications | Easy |
| 18 | **What is 'smart dust' in the context of IoT?** | Computers smaller than a grain of sand that can be spread or injected to measure chemicals (e.g., in soil) or diagnose problems (e.g., in the human body). | IoT Concepts | Hard |
| 19 | **List three urban applications of IoT mentioned in the lecture.** | Smart parking, structural health monitoring, noise urban maps, traffic condition monitoring, smart lighting, waste management, smart roads, river flood monitoring. | IoT Applications | Medium |
| 20 | **List three environmental applications of IoT mentioned in the lecture.** | Forest fire detection, air pollution monitoring, snow level monitoring, landslide monitoring, avalanche prevention, earthquake early detection, water leakage monitoring, radiation level monitoring, hazardous gas monitoring. | IoT Applications | Medium |
| 21 | **What three key elements are expected to be internetworked to build IoT in the future?** | Trillions of sensors, billions of smart systems, and millions of applications. | IoT Vision | Medium |
| 22 | **Name three broad categories of enabling technologies for IoT.** | RFID, sensors/actuators, connectivity technologies (wireless), big data, deep learning, artificial intelligence, sensor networks. | IoT Enablers | Medium |
| 23 | **What are the three layers of connectivity typically found in IoT systems?** | Service layer, local connectivity, and global connectivity. | IoT Architecture | Medium |
| 24 | **Define Machine-to-Machine (M2M) communication.** | One machine directly talks to another machine without human intervention. | Baseline Technologies | Easy |
| 25 | **What are Cyber-Physical Systems (CPS)?** | Physical systems equipped with computational and connectivity mechanisms, where the cyber and physical components work hand-in-hand. | Baseline Technologies | Medium |
| 26 | **How does the scope of IoT differ from M2M communication?** | M2M focuses on communication between two machines. IoT has a much broader scope, including interactions between things and people, things and applications, and people with applications, not just machine-to-machine. | IoT vs. M2M | Hard |
| 27 | **What is the primary focus of the Web of Things (WoT)?** | To make IoT smarter and web-accessible by focusing on the use of web-based technologies like HTML5, JavaScript, AJAX, and PHP over regular IoT. | Baseline Technologies | Medium |
| 28 | **What is the key distinction between IoT and Web of Things (WoT)?** | WoT specifically focuses on using web-based technologies to make IoT smarter and web-accessible, whereas IoT is the broader concept of interconnecting physical objects. | IoT vs. WoT | Hard |
| 29 | **What is the concept of 'Internet of Nano Things'?** | Using very small, nano-sized devices (e.g., nano capsules) for different purposes, which are then internetworked to communicate with each other. | Future IoT | Hard |
| 30 | **What is 'Industry 4.0' in the context of IoT?** | An approach to modern-day mechanization or improvement of current industrial plants and processes, often involving smart factories, robots, and virtual reality, enabled by IoT. | IoT Applications | Medium |

---

## Lecture 2: Introduction to IoT- Part-II (Lecture 2)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What was the estimated number of internet-connected devices by 2018, according to one study?** | 20 to 50 billion devices. | IoT Scale | Easy |
| 2 | **What are the two fundamental networking problems that arise with a large-scale Internet of Things?** | Address crunch and connectivity challenges. | IoT Challenges | Medium |
| 3 | **Why is IPv4 considered insufficient for the future of IoT?** | It will lead to an address crunch due to its limited address space (2^32). | Addressing | Easy |
| 4 | **Name three different connectivity mechanisms or standards mentioned for IoT.** | Cellular, Wi-Fi, Ethernet, Bluetooth Low Energy, DASH7, Insteon, 802.15.4, 802.15.1, 802.15.6, 802.16. | Connectivity | Medium |
| 5 | **What is an IoT LAN analogous to in the traditional internet?** | An Internet LAN, used for local, short-range communication (e.g., building-wide, campus-wide). | IoT Network Components | Easy |
| 6 | **What is the primary function of an IoT WAN?** | Interconnecting two or more IoT LANs, connecting different network segments organizationally or geographically. | IoT Network Components | Easy |
| 7 | **What does an IoT Node represent?** | The connectivity of different devices/things within an IoT LAN or WAN. | IoT Network Components | Easy |
| 8 | **Describe the role of an IoT Gateway.** | It acts like a router, connecting an IoT LAN to the outside world, typically to an IoT WAN. | IoT Network Components | Medium |
| 9 | **What is the purpose of an IoT Proxy?** | It helps connect to the external internet, often for security or sub-networking, beyond the gateway. | IoT Network Components | Medium |
| 10 | **What is a key characteristic of addresses within an IoT LAN?** | They are locally unique, meaning an address unique within one LAN can be reused in another LAN. | Addressing | Medium |
| 11 | **How does an IoT Gateway help in global identification despite local address reuse?** | The gateway itself has a unique network prefix that identifies it globally. | Addressing | Medium |
| 12 | **How is mobility addressed in IoT networking when a node moves between networks?** | The network prefix assigned by the router to the gateway changes, while the node's local LAN address remains stable. | Mobility | Hard |
| 13 | **What is the function of a Remote Anchor Point in an IoT network?** | It is an entity that has a global view of the entire underlying network, including LANs, WANs, gateways, and routers. | Network Architecture | Medium |
| 14 | **When might tunneling be used in IoT, and what is an example protocol?** | When nodes need to communicate directly to the internet via a remote anchor point, bypassing the router. IKEv2 is an example protocol. | Connectivity | Hard |
| 15 | **Name two mechanisms for upstream addressing (gateway to internet) in IoT, assuming IPv6.** | DHCPv6 for state-based addressing and SLAAC for stateless addressing. | Addressing | Medium |
| 16 | **Why are application layer proxies needed for locally unique (LU) addresses in IoT?** | LUs cannot communicate directly with the internet or upper layers; proxies solve this by achieving connectivity. | Addressing | Medium |
| 17 | **What are three mechanisms for IPv4 and IPv6 coexistence in IoT?** | Address translation (IPv4 to IPv6 and vice versa), tunneling IPv6 over IPv4, and application layer proxies. | Addressing | Medium |
| 18 | **What is the primary purpose of multi-homing in IoT networks?** | To improve the overall reliability of the network by providing redundant connections. | Reliability | Easy |
| 19 | **Name two approaches for implementing multi-homing in IoT.** | Proxy-based approach and gateway-based approach. | Reliability | Medium |
| 20 | **What is the main challenge in multi-homing networks that IETF is trying to standardize?** | Providing source address, destination address, and routing information to the multi-homed nodes. | Reliability | Hard |
| 21 | **Compare the bit length of IPv4 and IPv6 addresses.** | IPv4 uses 32 bits, while IPv6 uses 128 bits. | Addressing Comparison | Easy |
| 22 | **How does the address space of IPv6 compare to IPv4?** | IPv6 has a significantly larger address space (2^128) compared to IPv4 (2^32). | Addressing Comparison | Easy |
| 23 | **What is the notation used for IPv4 addresses?** | Dotted decimal notation. | Addressing Comparison | Easy |
| 24 | **What is the notation used for IPv6 addresses?** | Hexadecimal notation. | Addressing Comparison | Easy |
| 25 | **Why is a completely new type of addressing scheme required for IoT, beyond just IPv6?** | Even IPv6 might not be sufficient for the sheer number of devices and the unique addressing issues of IoT, necessitating ongoing research for new schemes. | Addressing | Hard |
| 26 | **How does the strategy of locally unique addresses within a LAN and unique gateway prefixes help conserve addresses?** | It saves unnecessary address wastage by allowing addresses to be reused across different LANs, while gateways provide global uniqueness. | Addressing | Medium |
| 27 | **What is the role of an IoT router in the context of gateways and prefixes?** | IoT routers assign unique network prefixes to the gateways that are under their management. | Network Architecture | Medium |
| 28 | **What does 'internal address stability' refer to in IoT addressing?** | Maintaining locally unique addresses within a LAN independently of globally routable addresses, even if the gateway's network prefix changes. | Addressing | Medium |
| 29 | **What is the main challenge when different connectivity standards exist in IoT?** | Devising a handshaking mechanism to allow interoperability between these isolated standards. | Connectivity | Medium |
| 30 | **What is the overall motivation for building IoT systems?** | To connect a vast number of 'things' to the internet, making them smart and enabling diverse applications. | IoT Fundamentals | Easy |

---

## Lecture 3: Sensing (Lecture 3)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What are the two essential building blocks of the Internet of Things related to physical interaction?** | Sensors and Actuators. | IoT Basics | Easy |
| 2 | **What is the primary function of a sensor in an IoT system?** | To sense physical phenomena or changes in ambient conditions. | Sensors | Easy |
| 3 | **What is the primary function of an actuator in an IoT system?** | To perform actions on the physical environment based on sensed information. | Actuators | Easy |
| 4 | **Describe the three-phase approach to building Internet of Things systems.** | Sensing, Network (connected system), and Actuation. | IoT Architecture | Medium |
| 5 | **What is a Transducer?** | A device that converts one form of energy into another. | Transducers | Easy |
| 6 | **How do sensors and actuators relate to the term "transducer"?** | The word transducer is a collective term which includes sensors as well as actuators. | Transducers vs. Sensors/Actuators | Medium |
| 7 | **Give an example of a transducer and explain its energy conversion.** | In a microphone, sound waves are converted to electrical signals. | Transducers | Medium |
| 8 | **What is the key characteristic of a sensor regarding its sensitivity?** | Sensors are sensitive only to the physical property that is being measured. | Sensor Characteristics | Easy |
| 9 | **Define "resolution" in the context of a sensor.** | The smallest change a sensor can detect in the quantity that is being measured. | Sensor Characteristics | Medium |
| 10 | **How are sensors classified based on their output type?** | Analog sensors (give continuous analog output) and Digital sensors (give digital discrete voltage levels or signal levels). | Sensor Classification | Medium |
| 11 | **How are sensors classified based on the data type they measure?** | Scalar sensors (measure scalar variables/magnitude only) and Vector sensors (measure magnitude and direction/orientation). | Sensor Classification | Medium |
| 12 | **Provide an example of a scalar sensor and explain why it's scalar.** | A temperature sensor is an example of a scalar sensor because it gives the magnitude value only, irrespective of orientation. | Sensor Classification | Medium |
| 13 | **Provide an example of a vector sensor and explain why it's vector.** | A camera sensor or accelerometer sensor are vector sensors because their values are dependent on the orientation and direction. | Sensor Classification | Medium |
| 14 | **Name two types of sensors used for obstacle detection.** | Passive Infrared (PIR) sensor and Ultrasonic sensor. | Sensor Examples | Easy |
| 15 | **How does an ultrasonic sensor determine distance?** | It sends ultrasound waves, measures the time elapsed for the reflection to return, and calculates distance based on known velocity. | Sensor Examples | Medium |
| 16 | **Name two common sensors used for measuring temperature.** | Thermistor and Thermocouple. | Sensor Examples | Easy |
| 17 | **What type of sensor is an LDR (Light Dependent Resistor) used for?** | Measurement of light. | Sensor Examples | Easy |
| 18 | **What is a "strain gauge" used to sense?** | Force. | Sensor Examples | Easy |
| 19 | **Name two types of sensors used for position sensing.** | Potentiometers, Encoders, or Opto-couplers. | Sensor Examples | Medium |
| 20 | **What is "sensitivity error" in sensors?** | The sensitivity of a sensor under real conditions may differ from the value that is specified. | Sensor Errors | Medium |
| 21 | **What is "offset error" (or bias) in sensors?** | A constant difference between the sensor's reading and the correct value, which is constant over time. | Sensor Errors | Medium |
| 22 | **Distinguish between sensitivity error and offset error.** | Sensitivity error relates to how a sensor responds to changes under real conditions (can change over time), while offset error is a constant, fixed deviation from the true value (constant over time). | Sensor Errors | Hard |
| 23 | **What is "non-linearity" in sensor behavior?** | The deviation of the sensor's transfer function from linearity, meaning it does not behave ideally linearly. | Sensor Errors | Medium |
| 24 | **Define "drift" as a sensor error.** | The output signal slowly changes independent of the measured property over time. | Sensor Errors | Medium |
| 25 | **What is "hysteresis error" and which types of sensors typically exhibit it?** | The present reading depends on the past input values; typically exhibited by analog sensors, magnetic sensors, or those using heating of metal strips. | Sensor Errors | Hard |
| 26 | **What is "quantization error"?** | If the sensor has a digital output, the output is essentially an approximation of the measured property, leading to this error. | Sensor Errors | Medium |
| 27 | **What is "aliasing error"?** | A type of error that occurs when sampling signals. | Sensor Errors | Medium |
| 28 | **What is "cross-sensitivity" in sensors?** | When a sensor is sensitive to properties other than the one that is being directly measured. | Sensor Errors | Hard |
| 29 | **Name two types of chemical sensors.** | Liquid chemical sensors and Gas chemical sensors. | Sensor Examples | Easy |
| 30 | **What is the purpose of "sensor nodes" in the context of IoT?** | Sensor nodes are where individual sensors are housed, and they are eventually networked together to form an Internet of Things. | IoT Architecture | Medium |

---

## Lecture 4: Actuation (Lecture 4)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What is the primary function of an actuator?** | To perform certain actions on the environment, another system, or a device based on sensor readings. | Actuator Basics | Easy |
| 2 | **What types of working principles can actuators be based on?** | Electronics, electrical, mechanical systems, and so on. | Actuator Principles | Easy |
| 3 | **What is a relay switch?** | An electromechanical switch which can be used to switch between AC and DC, or perform other switching actions. | Actuator Examples | Easy |
| 4 | **Give an example of how a relay switch might be used in an IoT context.** | To turn off the AC power in a home if a fire has been detected by a sensor network. | Actuator Applications | Medium |
| 5 | **What is the function of a solenoid valve?** | It can help in controlling the flow of liquid. | Actuator Examples | Easy |
| 6 | **Define an actuator.** | A component of a machine or a system that moves or controls the mechanism of the system. | Actuator Definition | Easy |
| 7 | **What two main things does an actuator require for its functioning?** | Some kind of a control signal and a source of energy. | Actuator Requirements | Easy |
| 8 | **How do actuators typically respond to a control signal?** | They respond by converting that energy into mechanical motion. | Actuator Working Principle | Medium |
| 9 | **Name the three broad types of actuators based on their primary energy source mentioned.** | Electric based, pressure based, and mechanical based actuators. | Actuator Classification | Medium |
| 10 | **What are hydraulic actuators?** | They consist of a cylinder or fluid motor that uses hydraulic power to facilitate mechanical operation. | Hydraulic Actuators | Easy |
| 11 | **What types of mechanical motion can hydraulic actuators convert to?** | Linear, rotary, or oscillatory motion. | Hydraulic Actuators | Medium |
| 12 | **Why do hydraulic actuators typically exert considerable force?** | Because liquids are nearly impossible to compress. | Hydraulic Actuators | Medium |
| 13 | **Give an example of a hydraulic actuator mentioned.** | An oil-based cylinder or a hydraulic actuator based radial engine. | Hydraulic Actuator Examples | Easy |
| 14 | **What is the working principle of a pneumatic actuator?** | It converts the energy formed by vacuum or compressed air at high pressure into either linear or rotatory motion. | Pneumatic Actuators | Medium |
| 15 | **What are rack and pinion actuators typically an example of?** | Pneumatic actuators. | Pneumatic Actuator Examples | Easy |
| 16 | **Where are pneumatic actuators commonly used for valve controls?** | For valve controls of water pipes. | Pneumatic Actuator Applications | Medium |
| 17 | **What is a key advantage of pneumatic brakes, especially in trucks?** | They are very responsive to small changes in pressure that are applied by the driver. | Pneumatic Actuators | Medium |
| 18 | **How does an electric actuator generally operate?** | It is generally powered by a motor that converts electrical energy into mechanical torque. | Electrical Actuators | Easy |
| 19 | **Give an example of an electrical actuator that controls the flow of water in pipes.** | The solenoid valve. | Electrical Actuator Examples | Easy |
| 20 | **Describe the functioning of an electric bell as an electrical actuator.** | Once the bell is pressed, connectivity is established, and an electromagnetic field is generated due to which the bell sounds. It is a solenoid based actuator. | Electrical Actuator Examples | Hard |
| 21 | **What are the advantages of thermal or magnetic actuators?** | They are very compact, lightweight, economical, and have high power density. | Thermal/Magnetic Actuators | Medium |
| 22 | **What special materials are often used in thermal or magnetic actuators?** | Shape Memory Materials (SMAs) or Shape Memory Alloys. | Thermal/Magnetic Actuators | Medium |
| 23 | **How does an SMA-based piezo motor work?** | When energy is passed through two metal strips, they bend, mechanically moving another strip. | Thermal/Magnetic Actuator Examples | Hard |
| 24 | **What is a coil gun an example of?** | A device which basically works on the principle of magnetic actuation. | Magnetic Actuator Examples | Easy |
| 25 | **What is the primary function of mechanical actuators?** | They convert rotatory motion into linear motion to execute some movements. | Mechanical Actuators | Easy |
| 26 | **Name some components involved in mechanical actuators.** | Gears, pinions, rails, pulleys, chains, and other devices. | Mechanical Actuators | Medium |
| 27 | **Give two examples of mechanical actuators.** | Rack and pinion, and a crankshaft. | Mechanical Actuator Examples | Easy |
| 28 | **What are soft actuators typically made of and what are their applications?** | They are polymer based and designed to handle fragile objects like fruit harvesting in agriculture or internal organs of human beings in biomedicine, typically used in robotics. | Soft Actuators | Medium |
| 29 | **What are Shape Memory Polymers (SMPs) and what stimuli can affect their behavior?** | They are polymers whose behavior will change depending on stimuli such as light, electrical signals, magnetic signals, heat, or pH. | Soft Actuators | Hard |
| 30 | **What are light activated polymers?** | Polymers that get activated through light stimuli. | Soft Actuators | Easy |

---

## Lecture 5: Basics of IoT Networking- Part- I (Lecture 5)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What does nanotechnology involve in the context of IoT?** | Nanotechnology in IoT involves nanoIoT, nanonodes, nanonetworking nodes, nanosensor nodes, and nanonetworks, often used at the molecular level or inside the human body. | IoT Basics | Medium |
| 2 | **What is quantum teleportation in the context of basic research for IoT?** | Quantum teleportation refers to how information at the atomic level is transported from one point to another. | IoT Basics | Easy |
| 3 | **Why is semantic interoperability crucial in IoT, using the example of temperature sensors?** | It ensures different representations of the same data (e.g., 'temp,' 'temperature,' 'st' for temperature) can be understood and processed uniformly across devices. | IoT Challenges | Medium |
| 4 | **Why is energy harvesting crucial for IoT nodes?** | IoT nodes are small-sized with very limited power, making energy harvesting from renewable sources (wind, solar) vital for their sustenance. | IoT Components | Easy |
| 5 | **Give examples of disruptive innovations relevant to IoT.** | Virtual Reality (VR) and Augmented Reality (AR) are examples of disruptive innovations incorporated into IoT networks. | IoT Evolution | Easy |
| 6 | **What are some sustaining technologies for IoT?** | Cloud computing and Big Data are considered sustaining technologies for IoT. | IoT Technologies | Easy |
| 7 | **What are the basic components of an IoT system, from sensing to application?** | Sensors, actuators, local network, internet, backend services (analytics), and applications. | IoT Architecture | Medium |
| 8 | **What is the primary role of sensors in IoT?** | Sensors are fitted to physical objects to sense different physical phenomena occurring around them. | IoT Components | Easy |
| 9 | **Describe the typical data flow from an IoT sensor to an actuator.** | Sensors -> Local Network -> Internet (if destination is external) -> Backend Servers (analytics) -> Actuation. | IoT Architecture | Medium |
| 10 | **What does 'interaction' as a functional component of IoT involve?** | Interaction with the physical environment (via sensors) and communication/interaction between different devices/nodes in the IoT network. | IoT Functional Components | Easy |
| 11 | **What is the role of 'processing' as a functional component in IoT?** | Processing and analysis of data and operations that take place within the IoT system. | IoT Functional Components | Easy |
| 12 | **Why is 'internet interaction' a crucial functional component of IoT?** | Most IoT implementations are internet-powered, making interaction with the internet a very important component. | IoT Functional Components | Easy |
| 13 | **How do web services and M2M communication differ from traditional web technology in an IoT context?** | Traditional web is human-to-machine; IoT involves machine-to-machine communication where one machine offers services to another. | IoT Functional Components | Medium |
| 14 | **What does the 'integration of different applications, services, and user interface' component refer to?** | It refers to the need for a user interface (human interface) to access and manage the IoT network and its applications. | IoT Functional Components | Easy |
| 15 | **What is the primary role of an IoT gateway in a local network?** | The gateway assigns locally unique addresses to IoT nodes and manages local addressing within that particular local area network. | IoT Architecture | Medium |
| 16 | **List some functions performed by an IoT gateway.** | Switching, routing, protocol conversion, firewall, VPN services, security, and processing. | IoT Architecture | Medium |
| 17 | **What are the key elements that constitute embedded devices in IoT, beyond just sensors and actuators?** | Sensors, actuators, operating system, power management unit, radios (Bluetooth, Zigbee, Wi-Fi), virtual machines, web clients (HTTP, MQTT, CoAP). | IoT Components | Hard |
| 18 | **Name the four layers of the service-oriented architecture of IoT.** | Sensing layer, Network layer, Service layer, Interface layer. | IoT Architecture | Easy |
| 19 | **What is the function of the sensing layer in IoT architecture?** | It takes care of sensing through RFID tags, sensors, data acquisition, and sending data to the next layer. | IoT Architecture | Easy |
| 20 | **What does the service layer in IoT architecture deal with?** | It deals with service delivery, integration, repository, and business logic to support business functions. | IoT Architecture | Medium |
| 21 | **What is the main difference between Consumer IoT and Industrial IoT?** | Consumer IoT focuses on personal use and local/internet communication, while Industrial IoT applies to industrial sectors like manufacturing, with industry-specific technologies. | IoT Categories | Medium |
| 22 | **List some associated technologies that enable IoT solutions.** | Big Data, Cloud, Smart Grid, Internet of Vehicles (IoV), Machine-to-Machine (M2M), Telemedicine, Cyber-Physical Systems (CPS), 3G/4G/5G, SDN. | IoT Technologies | Medium |
| 23 | **How does the IoT stack conceptually compare to the web stack?** | Application layers are similar, but IoT introduces new protocols and additional management (network, power, resources) due to resource-constrained nodes. | IoT Architecture | Medium |
| 24 | **What are some key technologies that help IoT survive and function?** | Future Internet, knowledge aggregation, standards, sensor networks, communication, cloud computing, discovery services, nanoelectronics, embedded systems, software system integration, security, and privacy. | IoT Technologies | Hard |
| 25 | **Why are security and privacy paramount concerns in IoT?** | Resource-constrained nodes are vulnerable to attacks, and the data-intensive nature of IoT raises privacy concerns for individuals and organizations. | IoT Challenges | Easy |
| 26 | **Differentiate between 'interfacing' and 'interoperability' as challenges in IoT.** | Interfacing refers to devices from different vendors talking to each other. Interoperability is about different protocols, devices, and algorithms handshaking. | IoT Challenges | Medium |
| 27 | **What does 'heterogeneity' refer to in IoT networks?** | It refers to the diversity of devices, standards, protocols, and algorithms from different vendors, unlike traditional internet networks. | IoT Challenges | Medium |
| 28 | **How does Software-Defined Networking (SDN) help in managing IoT complexity?** | SDN helps by decoupling the control plane from the data plane of networks, simplifying management. | IoT Technologies | Medium |
| 29 | **What aspects does 'network management' encompass in IoT?** | Energy management, computation management, communication management, service management, and infrastructure management. | IoT Challenges | Medium |
| 30 | **What is an overlay network in the context of IoT?** | It's a type of virtualization of physical devices and networks, where a virtual network is created on top of the physical infrastructure. | IoT Architecture | Hard |

---

# Week 2

## Lecture 6: Basics of IoT Networking-Part II (Lecture 6)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What is the full form of MQTT?** | Message Queue Telemetry Transport | MQTT Basics | Easy |
| 2 | **Which standard body standardized MQTT in 2013?** | OASIS | MQTT History | Easy |
| 3 | **What communication model is MQTT based on?** | Publish-subscribe model | MQTT Model | Easy |
| 4 | **What is a key characteristic of MQTT that makes it suitable for IoT?** | It is a lightweight protocol. | MQTT Characteristics | Easy |
| 5 | **When was MQTT introduced and by which company?** | 1999 by IBM | MQTT History | Easy |
| 6 | **Name the three core concepts involved in MQTT.** | Message broker, topic, and client subscription. | MQTT Concepts | Medium |
| 7 | **What is the primary role of a message broker in MQTT?** | Controls the publishing and subscription of messages, dispatching them between senders and receivers. | MQTT Broker | Medium |
| 8 | **For what kind of environments is MQTT designed?** | Remote connections and limited bandwidth environments. | MQTT Design | Easy |
| 9 | **What is a significant advantage of MQTT regarding its implementation?** | It provides a very small code footprint. | MQTT Advantages | Easy |
| 10 | **List the three principal components of MQTT.** | Publishers (sensors), Subscribers (interested entities/applications), and Broker. | MQTT Components | Medium |
| 11 | **Name the five methods associated with MQTT.** | Connect, Disconnect, Subscribe, Unsubscribe, and Publish. | MQTT Methods | Medium |
| 12 | **How does the MQTT communication architecture differ from traditional HTTP?** | MQTT uses a publish-subscribe (event-driven) architecture, while HTTP uses a request-response architecture. | MQTT vs HTTP | Medium |
| 13 | **What does it mean for MQTT to be "event-driven"?** | Data are pushed to clients whenever a specific event occurs. | MQTT Architecture | Medium |
| 14 | **In MQTT, what is a "topic"?** | A simple string that can have hierarchical levels, separated by a slash, used to categorize messages. | MQTT Topic | Easy |
| 15 | **Provide an example of an MQTT topic for temperature data in a living room.** | house/living_room/temperature | MQTT Topic Examples | Easy |
| 16 | **What is the purpose of a wildcard in MQTT topics?** | To allow clients to subscribe to multiple related topics without specifying each one individually. | MQTT Wildcards | Medium |
| 17 | **Which character represents a single-level wildcard in MQTT?** | + (plus sign) | MQTT Wildcards | Easy |
| 18 | **Which character represents a multi-level wildcard in MQTT?** | # (hash sign) | MQTT Wildcards | Easy |
| 19 | **If a client subscribes to house/+/temperature, what messages will it receive?** | Messages for topics like house/living_room/temperature or house/kitchen/temperature, where + is replaced by any single arbitrary value. | MQTT Wildcards | Hard |
| 20 | **If a client subscribes to house/#, what messages will it receive?** | All topics beginning with house/, covering all underlying hierarchical levels (e.g., house/living_room/temperature, house/kitchen/light). | MQTT Wildcards | Hard |
| 21 | **Name two major cloud platforms that use MQTT as a primary protocol for IoT.** | Amazon Web Services (AWS IoT) and Microsoft Azure IoT Hub. | MQTT Applications | Medium |
| 22 | **What is the secured version of MQTT called?** | Secure MQTT (SMQTT) | SMQTT Basics | Easy |
| 23 | **What is the analogy used to describe the relationship between MQTT and SMQTT?** | HTTP and HTTPS | SMQTT Analogy | Easy |
| 24 | **How does SMQTT enhance MQTT?** | By using different security features such as encryption. | SMQTT Features | Medium |
| 25 | **What is a key advantage of SMQTT's encryption feature, especially in IoT?** | Broadcast encryption, where one message is encrypted and delivered to multiple nodes. | SMQTT Advantages | Medium |
| 26 | **List the four main stages of the SMQTT algorithm.** | Setup, Encryption, Publish, and Decryption. | SMQTT Algorithm | Medium |
| 27 | **What happens during the "Setup" phase of SMQTT?** | Subscribers and publishers register themselves to the broker and obtain a master secret key based on the chosen key generation algorithm. | SMQTT Algorithm Stages | Hard |
| 28 | **What happens during the "Publish" phase of SMQTT?** | The data is encrypted and published by the broker. | SMQTT Algorithm Stages | Medium |
| 29 | **What happens during the "Decryption" phase of SMQTT?** | The encrypted data is decrypted at the subscriber end using the same master secret key. | SMQTT Algorithm Stages | Medium |
| 30 | **Are the key generation and encryption algorithms standardized in SMQTT?** | No, they are not standardized; SMQTT is proposed only to enhance the security aspects of MQTT. | SMQTT Standardization | Hard |

---

## Lecture 7: Basics of IoT Networking-Part- III (Lecture 7)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What does CoAP stand for?** | Constrained Application Protocol | CoAP Basics | Easy |
| 2 | **What is the primary purpose of CoAP?** | Web transfer in constrained networks with limited resources (energy, computation, bandwidth). | CoAP Purpose | Easy |
| 3 | **Which standard web protocol is CoAP considered an equivalent for in IoT?** | HTTP (Hypertext Transfer Protocol) | CoAP Comparison | Easy |
| 4 | **At which layer(s) of the network stack does CoAP primarily operate?** | Session layer, but can also be considered an application layer protocol. | CoAP Layer | Medium |
| 5 | **What type of communication model does CoAP use?** | Request-response model (client-server interaction). | CoAP Model | Easy |
| 6 | **Which transport layer protocol does CoAP work on top of?** | UDP (User Datagram Protocol) | CoAP Transport | Easy |
| 7 | **Name the two main sub-layers of the CoAP architecture.** | Messaging sub-layer and Request-response sub-layer. | CoAP Architecture | Medium |
| 8 | **What is the primary responsibility of the CoAP Messaging sub-layer?** | Reliability and avoidance of message duplication. | CoAP Sub-layers | Medium |
| 9 | **List the four different messaging modes supported by CoAP.** | Confirmable, Non-confirmable, Piggyback, and Separate. | CoAP Messaging Modes | Medium |
| 10 | **Describe a 'Confirmable' CoAP message.** | A message is sent, and an acknowledgement (ACK) is received from the server. | CoAP Messaging Types | Medium |
| 11 | **How does a 'Non-confirmable' CoAP message differ from a 'Confirmable' one?** | For a Non-confirmable message, no acknowledgement is received from the server. | CoAP Messaging Types | Medium |
| 12 | **Explain the 'Piggyback' CoAP message mode.** | The server sends its response directly along with the acknowledgement message. Data is 'piggybacked' with the ACK. | CoAP Messaging Types | Hard |
| 13 | **When is the 'Separate' CoAP message mode used?** | When the server response comes in a message separate from the acknowledgement, potentially after a wait period. The client sends an ACK for the separate data. | CoAP Messaging Types | Hard |
| 14 | **Name two HTTP-like functionalities supported by CoAP.** | GET (retrieval), PUT (creation/repository), PUSH (update), DELETE (deletion). | CoAP Functionalities | Medium |
| 15 | **Why is CoAP preferred over REST for constrained IoT environments?** | REST is resource-hungry, while CoAP is a lightweight equivalent designed for low-power constraints and limited resources. | CoAP vs REST | Medium |
| 16 | **What does XMPP stand for?** | Extensible Messaging and Presence Protocol | XMPP Basics | Easy |
| 17 | **What is XMPP primarily used for, and what is its underlying data format?** | Real-time exchange of structured data, based on XML. | XMPP Purpose | Easy |
| 18 | **How does XMPP's architecture differ from a traditional centralized server model?** | It uses a decentralized client-server architecture, meaning no single central server is involved in message transfer. | XMPP Architecture | Medium |
| 19 | **What advantage does XMPP offer in environments with firewalls, compared to protocols like PING?** | XMPP can still work across networks with firewalls, overcoming obstacles that traditional PING might face. | XMPP Advantages | Medium |
| 20 | **Name two key highlights or features of the XMPP protocol.** | Decentralization, Open standard, Security features (authentication, encryption), Flexibility (interoperability). | XMPP Features | Medium |
| 21 | **What is the 'Jingle' core XMPP technology used for?** | Multimedia signaling, including voice, video, and file transfer. | XMPP Technologies | Medium |
| 22 | **Which XMPP technology is used for a publish-subscribe model?** | PubSub (Publish-Subscribe) | XMPP Technologies | Easy |
| 23 | **What is the purpose of the 'BOSH' XMPP technology?** | It is used for HTTP binding for XMPP. | XMPP Technologies | Medium |
| 24 | **List one weakness of the XMPP protocol.** | Does not support QoS, higher network overheads (not good for text-based communication), binary data must be encoded to Base64. | XMPP Weaknesses | Medium |
| 25 | **Why is XMPP not ideal for text-based communication?** | It involves higher network overheads. | XMPP Weaknesses | Medium |
| 26 | **Name two applications that utilize XMPP.** | Publish-subscribe systems, VoIP signaling, video/file transfer, gaming, IoT (smart grid), social networking. | XMPP Applications | Easy |
| 27 | **How does XMPP facilitate interoperability?** | It offers flexibility in supporting interoperability between different systems, devices, and protocols. | XMPP Features | Medium |
| 28 | **What is the main difference between XML and XMPP in terms of data handling?** | XML is particularly used for unstructured data, while XMPP is useful for real-time exchange of structured data. | XML vs XMPP | Medium |
| 29 | **Can XMPP communicate with other messaging platforms like ICQ or Yahoo?** | Yes, XMPP allows communication with other messaging platforms in addition to other XMPP servers and intranets. | XMPP Capabilities | Easy |
| 30 | **What is the role of the 'Core' XMPP technology?** | It provides information about the core XMPP technologies for XML streaming. | XMPP Technologies | Medium |

---

## Lecture 8: Basics of IoT Networking- Part-IV (Lecture 8)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What does AMQP stand for?** | Advanced Message Queuing Protocol | AMQP Basics | Easy |
| 2 | **Which ISO/IEC standard does AMQP follow?** | ISO/IEC 19464 | AMQP Basics | Easy |
| 3 | **What is the primary purpose of AMQP?** | To help define how messages are passed between business applications or organizations, connecting different systems and business processes. | AMQP Basics | Medium |
| 4 | **At which layer of the network model does AMQP operate?** | Application layer (it is a binary application layer protocol). | AMQP Basics | Easy |
| 5 | **What is the unit of data transfer in AMQP, and how does it relate to the link layer?** | It is known as a 'frame,' but it is different from the frame concept in the link layer. | AMQP Basics | Medium |
| 6 | **Describe the basic operational model of AMQP.** | Clients (producers) send messages to a server (broker), which then forwards them to other clients (consumers). | AMQP Architecture | Medium |
| 7 | **What role does the server play in the AMQP model?** | The server acts as a broker, comprising routers, filters, and queues for buffering and forwarding messages. | AMQP Architecture | Easy |
| 8 | **List four distinct entities that AMQP helps connect.** | Organizations, Technologies, Time (different points of time), Space (different locations). | AMQP Features | Medium |
| 9 | **Name three key features supported by AMQP from a different perspective (beyond connectivity).** | Security, Reliability, Interoperability. | AMQP Features | Easy |
| 10 | **What does 'interoperability' mean in the context of AMQP?** | Interoperability of not only devices but also protocols, algorithms, and messages. | AMQP Features | Medium |
| 11 | **Explain the 'At most once' message delivery guarantee.** | Each message is delivered at most once (once or never) to the intended recipient. | Message Delivery Guarantees | Medium |
| 12 | **Explain the 'At least once' message delivery guarantee.** | Each message is certain to be delivered, but may do so multiple times. | Message Delivery Guarantees | Medium |
| 13 | **Explain the 'Exactly once' message delivery guarantee.** | Messages will always certainly arrive and do so only once. | Message Delivery Guarantees | Hard |
| 14 | **What is the purpose of AMQP frame types?** | To initiate, control, and tear down the transfer of messages between two peers. | AMQP Frame Types | Easy |
| 15 | **Which AMQP frame type is used for opening a connection?** | Open frame type. | AMQP Frame Types | Easy |
| 16 | **Which AMQP frame type is used for closing a connection?** | Close frame type. | AMQP Frame Types | Easy |
| 17 | **Which AMQP frame type is used for opening a session?** | Begin frame type. | AMQP Frame Types | Easy |
| 18 | **Which AMQP frame type is used for closing a session?** | End frame type. | AMQP Frame Types | Easy |
| 19 | **What is the function of the 'Attach' AMQP frame type?** | Initiating a new link transfer for sending actual messages. | AMQP Frame Types | Medium |
| 20 | **What is the function of the 'Detach' AMQP frame type?** | Terminating the link. | AMQP Frame Types | Easy |
| 21 | **Name the three primary components of the AMQP protocol.** | Exchange, Queue, and Bindings. | AMQP Components | Medium |
| 22 | **What is the role of an 'Exchange' in AMQP?** | It is part of the broker, tasked to receive messages and route them to the queues. | AMQP Components | Medium |
| 23 | **What is the role of a 'Queue' in AMQP?** | Separate queues are used for different business processes, and consumers receive messages from them. | AMQP Components | Medium |
| 24 | **What are 'Bindings' in AMQP?** | Rules for distributing messages, determining who can access what message and their destinations. | AMQP Components | Medium |
| 25 | **List the four different exchange types in AMQP.** | Direct, Fan out, Topic, and Header. | AMQP Exchange Types | Medium |
| 26 | **What does 'Persistence' imply in AMQP features?** | Offering message delivery guarantees. | AMQP Features | Easy |
| 27 | **Give two applications of AMQP related to system interaction.** | Connecting different systems and processes to talk to one another; allowing servers to respond to immediate requests quickly and delegate time-consuming tasks. | AMQP Applications | Medium |
| 28 | **How does AMQP contribute to reliability and uptime of application deployments?** | By increasing the reliability and uptime of application deployments. | AMQP Applications | Easy |
| 29 | **What is 'Targeted QoS' in AMQP?** | It targets selective offering of Quality of Service to certain links. | AMQP Features | Medium |
| 30 | **Name three AMQP frame types used for controlling message flow, state changes, or actual message transfer.** | Transfer (for sending actual messages), Flow (controlling message flow rate), and Disposition (informing changes in state of transfer). | AMQP Frame Types | Hard |

---

## Lecture 9: Connectivity Technologies- Part-I (Lecture 9)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What is the primary function of XMPP, MQTT, CoAP, and AMQP protocols?** | Service offerings, operating at a higher level. | Protocol Classification | Easy |
| 2 | **What layers are the focus of the protocols discussed in this lecture (e.g., 802.15.4, Zigbee)?** | Physical and partially MAC (link layer). | Protocol Layers | Easy |
| 3 | **What is the primary use of the IEEE 802.15.4 standard?** | Forming Wireless Personal Area Networks (WPANs). | IEEE 802.15.4 | Easy |
| 4 | **What are the typical data rate and power consumption characteristics of IEEE 802.15.4 networks?** | Low data rate, low power consumption (extending lifetime). | IEEE 802.15.4 Features | Medium |
| 5 | **Which two primary layers does the IEEE 802.15.4 standard focus on?** | Physical layer and MAC layer. | IEEE 802.15.4 Layers | Easy |
| 6 | **In which frequency band does IEEE 802.15.4 communication take place?** | ISM band. | IEEE 802.15.4 Features | Easy |
| 7 | **What modulation scheme is IEEE 802.15.4 based on?** | DSSS (Direct Sequence Spread Spectrum) technique. | IEEE 802.15.4 Features | Medium |
| 8 | **What is a key benefit of using DSSS in IEEE 802.15.4?** | Highly tolerant of noise and interference, offers link reliability improvement. | IEEE 802.15.4 Features | Medium |
| 9 | **What modulation schemes are used for the low-speed and high-speed versions of IEEE 802.15.4?** | Low-speed uses BPSK; high-speed uses O-QPSK (Offset QPSK). | IEEE 802.15.4 Features | Hard |
| 10 | **What channel access method does IEEE 802.15.4 use for MAC communication?** | CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance). | IEEE 802.15.4 Features | Medium |
| 11 | **How does IEEE 802.15.4 minimize power consumption?** | Infrequently occurring very short transmissions with low duty cycle (less than one percent). | IEEE 802.15.4 Features | Medium |
| 12 | **What is the minimum power level defined in the IEEE 802.15.4 standard?** | Minus three dBm or 0.5 microwatts. | IEEE 802.15.4 Features | Hard |
| 13 | **What is the typical transmission range for IEEE 802.15.4?** | 10 meters to 75 meters (up to 1000m outdoors theoretically). | IEEE 802.15.4 Features | Medium |
| 14 | **What networking topologies are supported by IEEE 802.15.4?** | Star topology and Mesh topology. | IEEE 802.15.4 Topologies | Easy |
| 15 | **Which variant of IEEE 802.15.4 is used for industrial applications?** | The 'E' variant. | IEEE 802.15.4 Variants | Medium |
| 16 | **Which variant of IEEE 802.15.4 is used for smart utility networks like smart grids?** | The 'G' variant. | IEEE 802.15.4 Variants | Medium |
| 17 | **What are the two types of networks IEEE 802.15.4 can be classified into?** | Beacon-enabled network and non-beacon-enabled network. | IEEE 802.15.4 Network Types | Easy |
| 18 | **What are the two main types of devices in an IEEE 802.15.4 network?** | FFD (Fully Functional Device) and RFD (Reduced Functional Device). | IEEE 802.15.4 Device Types | Easy |
| 19 | **Give examples of Fully Functional Devices (FFD) in IEEE 802.15.4.** | PAN coordinator, router, or device. | IEEE 802.15.4 Device Types | Medium |
| 20 | **What are the characteristics of a Reduced Functional Device (RFD)?** | Can only talk to an FFD, lower power consumption, uses minimal CPU and RAM. | IEEE 802.15.4 Device Types | Medium |
| 21 | **List the five frame types defined for IEEE 802.15.4.** | Data frame, Acknowledgement frame, Command frame, MAC frame, and Beacon frame. | IEEE 802.15.4 Frame Types | Hard |
| 22 | **What is the purpose of beacon frames in IEEE 802.15.4?** | PAN coordinator sends them to advertise its presence, enabling devices to know it's there and associate. | IEEE 802.15.4 Frame Types | Medium |
| 23 | **How does Zigbee relate to IEEE 802.15.4?** | Zigbee works on top of layers one and two of 802.15.4, extending functionalities to layer three and above. | Zigbee Basics | Medium |
| 24 | **What additional communication enhancements does Zigbee provide beyond 802.15.4?** | Authentication, encryption for security, and data routing/forwarding capability for mesh networking. | Zigbee Features | Medium |
| 25 | **What are the two primary components of Zigbee?** | ZDO (Zigbee Device Object) and APS (Application Support Sublayer). | Zigbee Architecture | Medium |
| 26 | **What is the function of the Zigbee Device Object (ZDO)?** | Device management, security provisioning policies. | Zigbee Architecture | Medium |
| 27 | **What networking topologies does Zigbee support?** | Star topology, Cluster tree topology, and Mesh topology. | Zigbee Topologies | Easy |
| 28 | **What are the advantages of Zigbee mesh networks?** | Fault tolerance, reliability, self-configuring, self-healing, extended network range. | Zigbee Topologies | Medium |
| 29 | **What are the three main device roles in a Zigbee network?** | Zigbee Coordinator (ZC), Zigbee Router, and End Device. | Zigbee Device Roles | Medium |
| 30 | **What routing protocol does the Zigbee network layer use?** | AODV (Ad hoc On-Demand Distance Vector routing protocol). | Zigbee Routing | Hard |

---

## Lecture 10: Connectivity Technologies- Part-II (Lecture 10)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What does "SixLoWPAN" stand for?** | IPv6 over Low-Power Wireless Personal Area Networks. | SixLoWPAN | Easy |
| 2 | **What does the "Six" in SixLoWPAN refer to?** | IPv6 (Internet Protocol version 6). | SixLoWPAN | Easy |
| 3 | **Which IEEE standard for radios does SixLoWPAN primarily utilize?** | IEEE 802.15.4. | SixLoWPAN | Easy |
| 4 | **Why is IPv6 particularly suitable for IoT networks?** | Due to its large address space, which is required for the vast number of IoT devices. | SixLoWPAN | Medium |
| 5 | **How does SixLoWPAN enable IEEE 802.15.4 radios to access the internet?** | Through header compression and address translation techniques. | SixLoWPAN | Medium |
| 6 | **What are the two types of addresses used for addressing in SixLoWPAN?** | 16-bit short address and 64-bit extended address. | SixLoWPAN | Medium |
| 7 | **What is the purpose of the 16-bit short address in SixLoWPAN?** | For PAN (Personal Area Network) specific communication, assigned by the PAN coordinator. | SixLoWPAN | Medium |
| 8 | **What is the purpose of the 64-bit extended address in SixLoWPAN?** | For global unique addressing throughout the network. | SixLoWPAN | Medium |
| 9 | **How are IPv6 multicast packets handled in SixLoWPAN, given that IEEE 802.15.4 does not support them?** | They are carried as link layer broadcast frames. | SixLoWPAN | Hard |
| 10 | **Name the three different types of headers in SixLoWPAN.** | Dispatch header, Mesh Addressing header, and Fragmentation header. | SixLoWPAN | Medium |
| 11 | **What is the primary function of the Dispatch header in SixLoWPAN?** | To identify the dispatch type (initiating/resetting communication) and the next header type. | SixLoWPAN | Medium |
| 12 | **In the SixLoWPAN Mesh Addressing header, what do the 'V' and 'F' fields indicate?** | 'V' indicates if the originator address is 64-bit (0) or 16-bit (1). 'F' indicates if the destination address is 64-bit (0) or 16-bit (1). | SixLoWPAN | Hard |
| 13 | **What is the significance of the "hops left" field in the SixLoWPAN Mesh Addressing header?** | It stores the number of hops remaining to the final destination node and is decremented by each node. | SixLoWPAN | Medium |
| 14 | **What is the key difference in structure between the first fragment header and subsequent fragment headers in SixLoWPAN?** | Subsequent fragments include a "datagram offset" field, which is absent in the first fragment. | SixLoWPAN | Hard |
| 15 | **Name the two routing protocols used in SixLoWPAN.** | LOADng and RPL. | SixLoWPAN | Easy |
| 16 | **From which existing ad hoc routing protocol is LOADng derived?** | AODV (Ad hoc On-Demand Distance Vector). | SixLoWPAN | Medium |
| 17 | **What are the three types of PDUs (Protocol Data Units) used by the LOADng routing protocol?** | Load Request, Route Reply, and Route Error. | SixLoWPAN | Medium |
| 18 | **In LOADng, who is permitted to respond to a route request?** | Only the destination is permitted to respond; intermediate routers are explicitly prohibited. | SixLoWPAN | Medium |
| 19 | **What does RPL stand for in the context of SixLoWPAN routing?** | Routing Protocol for Low-Power and Lossy Networks. | SixLoWPAN | Easy |
| 20 | **What routing principle is RPL based on?** | Distance vector routing, adapted for lossy and low-power networks. | SixLoWPAN | Medium |
| 21 | **What are the two types of routing supported by RPL?** | Proactive routing (for maintaining topology) and Reactive routing (for dissolving inconsistencies). | SixLoWPAN | Medium |
| 22 | **List some optimization objectives of the RPL protocol.** | Minimizing energy, minimizing latency, and satisfying constraints related to node power and bandwidth. | SixLoWPAN | Medium |
| 23 | **What does RFID stand for?** | Radio Frequency Identification. | RFID | Easy |
| 24 | **What are the two main physical components of an RFID tag?** | An integrated circuit and an antenna. | RFID | Easy |
| 25 | **What are the two main types of RFID tags?** | Passive tags and Active tags. | RFID | Easy |
| 26 | **How do passive RFID tags receive power and transmit information?** | Through inductive coupling, where magnetic force fields from the reader induce current in the tag's antenna. | RFID | Medium |
| 27 | **What is the key distinguishing feature of an active RFID tag compared to a passive tag?** | Active tags have their own internal power supply. | RFID | Medium |
| 28 | **What was the predecessor technology to RFID, and what was its main difference?** | AIDC (Automatic Identification and Data Capture); AIDC used wired communication, while RFID uses wireless (radio waves). | RFID | Medium |
| 29 | **List three common applications of RFID technology.** | Inventory management, asset tracking, personal tracking, access control, ID badging, supply chain management, counterfeit prevention. | RFID | Easy |
| 30 | **How is data stored within an RFID tag?** | Data is digitally encoded in the integrated circuit (chip) embedded within the tag. | RFID | Medium |

---

# Week 3

## Lecture 11:Connectivity Technologies- Part-III (Lecture 11)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What is the full form of HART?** | Highway Addressable Remote Transducer Protocol | HART Protocol | Easy |
| 2 | **Which IEEE standard is HART derived from?** | IEEE 802.15.4 standard | HART Protocol | Easy |
| 3 | **What is the primary application focus of HART protocol?** | Industrial IoT (IIoT) applications | HART Protocol | Easy |
| 4 | **What is a key difference in network layer support between wired HART and WirelessHART?** | Wired HART does not have support for a network layer, while WirelessHART does. | HART vs. WirelessHART | Medium |
| 5 | **In which ISM band does the HART protocol's physical layer function?** | 2.4 GHz ISM band | HART Protocol | Medium |
| 6 | **What is the purpose of 'superframes' in the WirelessHART data link layer?** | Superframes ensure reliable, collision-free, and deterministic communication by controlling transmission timing in 10ms slots. | WirelessHART | Medium |
| 7 | **Which MAC layer protocol is used by WirelessHART?** | TDMA (Time Division Multiple Access)-like protocol | WirelessHART | Medium |
| 8 | **How does channel hopping improve reliability and security in WirelessHART?** | Transmission takes place in one channel, then switches to another at the next instant, improving security against hacking and reliability. | WirelessHART | Hard |
| 9 | **What is the function of 'channel blacklisting' in WirelessHART?** | It identifies channels consistently affected by interference and removes them from use. | WirelessHART | Medium |
| 10 | **What is the role of the Network Manager Agent in WirelessHART?** | It supervises each node, guides when and where to send packets, and updates information about neighbors and signal strength. | WirelessHART | Medium |
| 11 | **What type of network security does WirelessHART use to prevent unauthorized access?** | Code-based network security | WirelessHART | Easy |
| 12 | **How does WirelessHART handle routing at the network layer?** | It uses mesh networking, where each device is primed to forward packets for others, and devices have an updated network graph for routing. | WirelessHART | Medium |
| 13 | **What is the full form of NFC?** | Near Field Communication | NFC | Easy |
| 14 | **What scientific principle is NFC based on?** | Magnetic induction | NFC | Easy |
| 15 | **What is the typical maximum communication range for NFC?** | Less than 20 centimeters | NFC | Easy |
| 16 | **Name the two primary types of NFC devices.** | Passive devices and Active devices | NFC | Easy |
| 17 | **Give an example of an active NFC device.** | Smartphones with NFC support | NFC | Easy |
| 18 | **Give an example of a passive NFC device.** | NFC tags (similar to RFID tags) | NFC | Easy |
| 19 | **What is the data transmission frequency for NFC?** | 13.56 MHz | NFC | Medium |
| 20 | **Name the three modes of operation for NFC.** | Peer-to-peer mode, Read/Write mode, and Card Emulation mode | NFC | Medium |
| 21 | **Which NFC mode allows two smartphones to swap data?** | Peer-to-peer mode | NFC | Easy |
| 22 | **In which NFC mode does an active device pick up information from a passive one?** | Read/Write mode | NFC | Easy |
| 23 | **Which NFC mode allows an NFC device to be used like a contactless credit card?** | Card Emulation mode | NFC | Easy |
| 24 | **What is the typical data storage capacity for NFC tags?** | Between 96 and 512 bytes | NFC | Medium |
| 25 | **What is the primary application difference between Zigbee and WirelessHART?** | Zigbee is primarily for consumer-based IoT, while WirelessHART is primarily for industrial IoT. | Zigbee vs. WirelessHART | Medium |
| 26 | **How do WirelessHART and Zigbee differ in their channel hopping behavior?** | WirelessHART hops after every message, improving security. Zigbee only hops when the entire network hops. | Zigbee vs. WirelessHART | Medium |
| 27 | **What is the difference in MAC layer protocols used by WirelessHART and Zigbee?** | WirelessHART utilizes TDMA, while Zigbee is based on CSMA class of protocols (contention-based). | Zigbee vs. WirelessHART | Medium |
| 28 | **Compare the network topologies used by WirelessHART and Zigbee.** | WirelessHART uses a mesh network topology, where each node can serve as a router. Zigbee utilizes a tree topology. | Zigbee vs. WirelessHART | Medium |
| 29 | **What is a significant advantage of WirelessHART regarding device compatibility?** | WirelessHART devices are backwards compatible, allowing integration of legacy devices. | WirelessHART | Medium |
| 30 | **What is a drawback of different Zigbee versions regarding compatibility?** | Zigbee, Zigbee Pro, Zigbee RF4CE, and Zigbee IP are otherwise incompatible with each other. | Zigbee | Hard |

---

## Lecture 12: Connectivity Technologies- Part- IV (Lecture 12)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What is the primary application area for Bluetooth technology in IoT?** | Building personal area networks (PANs) and replacing wired connectivity between devices. | Bluetooth Connectivity | Easy |
| 2 | **What is a key characteristic of Bluetooth communication range?** | Short-range communication. | Bluetooth Connectivity | Easy |
| 3 | **Name two common applications of Bluetooth mentioned in the lecture.** | Connecting peripherals to a computer, transferring data between two mobile devices. | Bluetooth Connectivity | Easy |
| 4 | **What is a distinctive feature of Bluetooth regarding network formation?** | It helps in forming ad hoc networks, specifically piconets. | Bluetooth Connectivity | Medium |
| 5 | **In which ISM band does Bluetooth operate?** | 2.4 GHz to 2.484 GHz. | Bluetooth Connectivity | Easy |
| 6 | **What data rate does Bluetooth support?** | 1 Mbps. | Bluetooth Connectivity | Easy |
| 7 | **What are the three classes of Bluetooth radios mentioned, and what is the range of Class 2 radios?** | Class 1, Class 2, Class 3. Class 2 radios have a range of 10 meters or 30 feet. | Bluetooth Connectivity | Medium |
| 8 | **Which Bluetooth radio class is most commonly found in mobile devices?** | Class 2 radios. | Bluetooth Connectivity | Easy |
| 9 | **What are the three phases for connection establishment using Bluetooth?** | Discovery (or inquiry) phase, paging phase, and connection phase. | Bluetooth Connectivity | Medium |
| 10 | **Describe the purpose of the discovery/inquiry phase in Bluetooth connection establishment.** | A Bluetooth device tries to discover other devices in its vicinity. | Bluetooth Connectivity | Medium |
| 11 | **What is the active mode of a Bluetooth device?** | The device is fully active, fully functional, and actively transmits and receives data. | Bluetooth Connectivity | Easy |
| 12 | **Name three power-saving modes of operation for Bluetooth devices.** | Sniff mode, hold mode, and park mode. | Bluetooth Connectivity | Medium |
| 13 | **How does a device behave in sniff mode?** | The device sleeps and only listens for transmission at a particular predetermined interval. | Bluetooth Connectivity | Medium |
| 14 | **What is the function of the hold mode in Bluetooth?** | A device sleeps for a defined period and then returns to the active mode. | Bluetooth Connectivity | Medium |
| 15 | **In park mode, what causes a slave device to become active again?** | The master tells it to wake back up. | Bluetooth Connectivity | Medium |
| 16 | **What is the lowest layer in the Bluetooth protocol stack, above the physical radio?** | The Baseband layer. | Bluetooth Connectivity | Easy |
| 17 | **What functionalities are managed by the Baseband layer in Bluetooth?** | Physical channels and links, error correction, data whitening, hop selection, and Bluetooth security. | Bluetooth Connectivity | Hard |
| 18 | **What is the primary function of the L2CAP layer in Bluetooth?** | Multiplexing multiple logical connections between two Bluetooth devices. | Bluetooth Connectivity | Medium |
| 19 | **Name two services provided by the L2CAP layer.** | Connection-oriented and connection-less data services, protocol multiplexing, segmentation and reassembly, group abstractions. | Bluetooth Connectivity | Medium |
| 20 | **What is the full form and purpose of the RFCOMM protocol in Bluetooth?** | Radio Frequency Communication protocol; it is a cable replacement protocol designed to emulate RS-232 serial cables. | Bluetooth Connectivity | Medium |
| 21 | **How many simultaneous connections does RFCOMM support between two Bluetooth devices?** | Up to 60 simultaneous connections. | Bluetooth Connectivity | Medium |
| 22 | **What is the role of the Service Discovery Protocol (SDP) in Bluetooth?** | It enables applications to discover available services and their features. | Bluetooth Connectivity | Medium |
| 23 | **Define a 'piconet' in Bluetooth.** | A unit form of network in Bluetooth, consisting of one master and one to seven slaves. | Bluetooth Connectivity | Easy |
| 24 | **What is the maximum number of slaves allowed in a single piconet?** | Seven slaves. | Bluetooth Connectivity | Easy |
| 25 | **What is the role of the master in a piconet regarding transmission control?** | The master is responsible for transmission control by dividing the network into a series of time slots using TDMA (Time Division Multiple Access). | Bluetooth Connectivity | Medium |
| 26 | **Can a slave in one piconet also act as a master in another piconet?** | Yes, a slave in one piconet can be a master in another piconet. | Bluetooth Connectivity | Medium |
| 27 | **What is a 'scatternet'?** | A physically extended infrastructure comprising several piconets put together, working together, and communicating via gateway nodes. | Bluetooth Connectivity | Medium |
| 28 | **How do slaves communicate with each other within a piconet?** | There is no direct connection between slaves; all connections are either through the master to slave or slave to master mode. | Bluetooth Connectivity | Medium |
| 29 | **What addressing scheme is used by master and slave devices in a piconet?** | 42-bit addressing. | Bluetooth Connectivity | Hard |
| 30 | **Compare Bluetooth and Zigbee in terms of data rate and power consumption.** | Bluetooth supports a higher data rate (1 Mbps) but consumes more power compared to Zigbee, which has a lower data rate but much lower power consumption. | Bluetooth Connectivity | Hard |

---

## Lecture 13: Connectivity Technologies- Part- V (Lecture 13)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What is the primary application area for Z-Wave technology?** | Home automation systems. | Z-Wave | Easy |
| 2 | **Which organization promotes Z-Wave technology?** | The Z-Wave Alliance. | Z-Wave | Easy |
| 3 | **What is the operating frequency for Z-Wave in the US?** | 908.42 MHz. | Z-Wave | Medium |
| 4 | **What is the operating frequency for Z-Wave in Europe?** | 868.42 MHz. | Z-Wave | Medium |
| 5 | **What type of network topology does Z-Wave use?** | Mesh network topology. | Z-Wave | Easy |
| 6 | **What is the maximum number of nodes supported in a single Z-Wave network?** | Up to 232 nodes. | Z-Wave | Medium |
| 7 | **In a typical home, how many Z-Wave controllers are usually present?** | Only one Z-Wave controller. | Z-Wave | Easy |
| 8 | **What modulation scheme does Z-Wave use?** | Gaussian FSK (GFSK). | Z-Wave | Medium |
| 9 | **What is the channel encoding scheme used by Z-Wave?** | Manchester encoding. | Z-Wave | Medium |
| 10 | **What is the purpose of the Gaussian filter in Z-Wave's GFSK modulation?** | To smoothen pulses for limited spectrum width, a process known as pulse shaping. | Z-Wave | Hard |
| 11 | **How does Z-Wave handle routing in its mesh network?** | It uses source routing, where the entire route is embedded in the packet before it is sent. | Z-Wave | Medium |
| 12 | **What is the function of a 'healing path' in a Z-Wave network?** | It allows messages to be routed through different nodes (relay nodes) to bypass physical obstructions or when devices are not in direct range. | Z-Wave | Medium |
| 13 | **What is the length of the Home ID (network ID) in Z-Wave?** | Four bytes. | Z-Wave | Medium |
| 14 | **Can Z-Wave devices from different homes communicate with each other?** | No, nodes with different Home IDs cannot communicate with each other. | Z-Wave | Easy |
| 15 | **Compare Z-Wave and Zigbee in terms of user-friendliness.** | Z-Wave is more user-friendly and provides a simpler system, while Zigbee is ideal for technology experts who want a customizable system. | Z-Wave vs Zigbee | Medium |
| 16 | **What is the primary application area for ISA 100.11a protocol?** | Industrial sectors, particularly for implementing industrial IoT systems in plants. | ISA 100.11a | Easy |
| 17 | **Which organization designed the ISA 100.11a protocol?** | The International Society of Automation. | ISA 100.11a | Easy |
| 18 | **What protocols are the network and transport layers of ISA 100.11a based on?** | TCP, UDP, or IPv6. | ISA 100.11a | Medium |
| 19 | **What type of networking and spread spectrum technique does the data link layer of ISA 100.11a support?** | Mesh networking with Frequency Hopping Spread Spectrum (FHSS). | ISA 100.11a | Medium |
| 20 | **Name three network topologies that can be used with ISA 100.11a.** | Star, tree, or mesh topology. | ISA 100.11a | Easy |
| 21 | **What IEEE standard is the radio used in ISA 100.11a based on?** | IEEE 802.15.4. | ISA 100.11a | Medium |
| 22 | **What is the purpose of the tunneling mode in ISA 100.11a?** | To allow legacy data to pass through the network. | ISA 100.11a | Medium |
| 23 | **List three key features of the ISA 100.11a protocol.** | Flexibility, support for multiple protocols, open standards, multiple applications, reliability, determinism, QoS support, security. | ISA 100.11a | Easy |
| 24 | **How does ISA 100.11a achieve determinism?** | Using TDMA (Time Division Multiple Access). | ISA 100.11a | Medium |
| 25 | **What role does the network security manager play in ISA 100.11a?** | It manages and distributes keys, including key distribution and revocation. | ISA 100.11a | Medium |
| 26 | **Describe the two data security steps implemented in each node of an ISA 100.11a network.** | The data link layer encrypts each hop, and the transport layer secures peer-to-peer communication. | ISA 100.11a | Hard |
| 27 | **In ISA 100.11a, what does Usage Class 0 under the Safety category signify?** | Applications such as emergency actions in critical situations. | ISA 100.11a | Medium |
| 28 | **What type of control is associated with ISA 100.11a Usage Class 2 under the Control category?** | Closed-loop supervisory control. | ISA 100.11a | Medium |
| 29 | **What is the purpose of ISA 100.11a Usage Class 4 under the Monitoring category?** | Alerting applications. | ISA 100.11a | Easy |
| 30 | **Which ISA 100.11a Usage Class (Monitoring category) has no immediate operational consequence?** | Class 5, for logging and downloading. | ISA 100.11a | Medium |

---

## Lecture 14: Sensor Networks- Part- I (Lecture 14)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What is a sensor network?** | A system where individual sensors connect with one another to derive important information continuously, in real-time, remotely from a larger terrain. | Sensor Networks Basics | Easy |
| 2 | **Name the core components of a sensor node.** | Sensing unit, processing unit, communication unit (transceiver), power unit (battery), Analog-Digital Converter (ADC). | Sensor Node Architecture | Medium |
| 3 | **Differentiate between stationary and mobile sensor networks.** | Stationary networks have nodes that maintain their position after deployment. Mobile networks have nodes that move around (e.g., sensors on cars, airplanes). | Types of Sensor Networks | Easy |
| 4 | **How do sensor nodes typically communicate data to a sink node over long distances?** | Through multi-hop communication, where immediate nodes act as intermediate relays to transmit data until it reaches the sink node. | WSN Communication | Easy |
| 5 | **What is the main motivation for building a sensor network?** | To achieve greater coverage of sensing, continuous real-time monitoring, and remote monitoring of a terrain without human presence. | Sensor Network Advantages | Easy |
| 6 | **List key constraints of sensor nodes.** | Small size, low power, resource-constrained (computation, memory, energy), low cost, autonomous operation, adaptive to environment. | Sensor Node Limitations | Medium |
| 7 | **Explain the scalability challenge in sensor networks regarding throughput.** | Throughput decreases at a rate of 1/√n (where n is the number of nodes), meaning throughput drops drastically as the number of nodes increases. | WSN Challenges | Hard |
| 8 | **What aspects does Quality of Service (QoS) guarantee in a network, and why is it challenging in WSNs?** | QoS guarantees bandwidth, delay, jitter, packet loss probability. Challenging in WSNs due to limited bandwidth, heavily constrained resources, and unpredictable RF channel characteristics. | WSN Challenges | Medium |
| 9 | **Why is energy efficiency a major challenge in sensor networks?** | Sensor nodes have very limited battery power (small size, low electrochemical efficiency) and must not only function themselves but also cooperate to relay information for others. | WSN Challenges | Medium |
| 10 | **Name common security challenges in sensor networks.** | Malicious attacks, infiltration, eavesdropping, interference, denial of service (DoS) attacks (e.g., by pumping false routing information). | WSN Challenges | Medium |
| 11 | **What is a 'Sensor Web'?** | Sensor networks connected to other sensor networks, computer grids, scientific instruments, collaborators (mobile phones), historical data servers, and dealing with issues like weather forecasts, pollution detection, and software models. | Advanced Concepts | Medium |
| 12 | **List some types of services/languages involved in a Sensor Web.** | Web notification services, sensor collection services, planning services, Sensor Modeling Language (SensorML), Transducer Modeling Language (TransducerML), Sensor Observation Service (SOS), Sensor Planning Service (SPS), Sensor Alert Service (SAS). | Advanced Concepts | Hard |
| 13 | **Why is cooperation paramount in multi-hop sensor networks, and what is a potential issue?** | Intermediate nodes must cooperate to relay packets. A potential issue is selfishness, where nodes might drop packets to conserve their own energy instead of forwarding them. | WSN Challenges | Medium |
| 14 | **Describe the two extremities of cooperation in sensor networks and their limitations.** | 1. Total cooperation: All relay requests accepted, nodes quickly exhaust energy. 2. Total non-cooperation: No relay requests accepted, network throughput goes down rapidly. | WSN Challenges | Hard |
| 15 | **Name a popular operating system used for sensor nodes.** | TinyOS (Tiny Operating System). | Sensor Node Technology | Easy |
| 16 | **What is a common characteristic of sensor node communication range, and what technology exemplifies this?** | Short communication range (e.g., couple of meters or tens of meters). Zigbee is an example of a technology with very short communication range. | WSN Communication | Easy |
| 17 | **Are sensor nodes typically single-function or multi-functional?** | Sensor nodes are often multi-functional; the sensor board can be adapted by changing different sensors for various applications. | Sensor Node Characteristics | Easy |
| 18 | **What complexity arises when a single sensor node detects multiple objects?** | It becomes difficult for the node to recognize and differentiate between the various objects, adding complexity to object recognition. | WSN Application Scenarios | Medium |
| 19 | **What challenge arises when multiple sensor nodes detect a single object?** | The sink node and user face difficulty in determining if all nodes saw the same single object or if they saw different objects. | WSN Application Scenarios | Medium |
| 20 | **What is the role of a sink node in a sensor network?** | It receives all the sensed information from various sensor nodes (often via multi-hop paths) for further dissemination to the internet or for monitoring. | WSN Architecture | Easy |
| 21 | **Are sensors and transducers the same as sensor networks?** | No, sensors and transducers are standalone devices. Sensor networks connect these devices to derive continuous, real-time, remote information from a larger terrain. | Basic Concepts | Easy |
| 22 | **Name some common network topologies that can be implemented in sensor networks.** | Star, mesh, ring. Mesh is particularly attractive due to reliability, security, and fault tolerance. | WSN Architecture | Easy |
| 23 | **What is the primary function of a sensing unit in a sensor node?** | To sense the particular physical phenomena it is supposed to sense (e.g., temperature, humidity, light, vibration). | Sensor Node Components | Easy |
| 24 | **What happens to sense measurements after they are taken by a sensor node?** | They are transformed into digital signals and processed to reveal properties of the phenomena occurring around them. | Sensor Node Operation | Easy |
| 25 | **Why must sensor nodes be designed to operate in an unattended manner?** | Due to their small size and deployment in dense or remote areas, they need to function autonomously without constant human intervention. | Sensor Node Characteristics | Medium |
| 26 | **Give an example of an optional unit that can be included in a sensor node.** | Location finding systems, such as GPS. | Sensor Node Architecture | Easy |
| 27 | **How can sensor nodes be powered in remote or agricultural settings?** | They can be solar-powered, using solar panels to harness energy and power the node's components. | Sensor Node Technology | Easy |
| 28 | **How do sensor networks relate to the Internet of Things (IoT)?** | Sensor networks are one of the most important enablers of IoT, providing the means to collect data from the physical world. | IoT Integration | Easy |
| 29 | **What is the fundamental trade-off when considering cooperation strategies in sensor networks?** | The trade-off is between the nodes' lifetime (energy conservation) versus the network throughput (data delivery). | WSN Challenges | Hard |
| 30 | **How can a malicious node exploit cooperation in a multi-hop network?** | It can initiate a denial of service (DoS) attack by pumping in false routing information, thereby paralyzing the network. | WSN Challenges | Hard |

---

## Lecture 15: Sensor Networks- Part- II (Lecture 15)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What are the basic benefits of interconnecting nodes in a sensor network?** | Extended coverage of sensing and remote real-time monitoring of what is occurring around physically deployed nodes. | Sensor Network Basics | Easy |
| 2 | **Name the three main types of sensor networks based on mobility.** | Stationary sensor networks, mobile sensor networks (aerial, terrestrial, and underwater). | Sensor Network Types | Easy |
| 3 | **Why is cooperation essential among nodes in a sensor network?** | For the network to function; if nodes do not cooperate, they will not be able to function. | Sensor Network Functionality | Easy |
| 4 | **What are the two main categories of misbehaving nodes in a sensor network?** | Unintentionally misbehaving and intentionally misbehaving. | Node Behavior | Easy |
| 5 | **Give two examples of intentionally misbehaving nodes.** | Malicious nodes and selfish nodes. | Intentional Misbehavior | Medium |
| 6 | **Give two examples of unintentionally misbehaving nodes.** | Failed nodes and badly failed nodes (and dumb nodes). | Unintentional Misbehavior | Medium |
| 7 | **Describe a 'failed node'.** | A node unable to perform its functions, possibly due to power failure or hardware failure. | Node Behavior Types | Easy |
| 8 | **How do 'badly failed nodes' differ from 'failed nodes'?** | In addition to being unable to perform functions, badly failed nodes send false routing messages, which threatens the network's integrity. | Node Behavior Types | Medium |
| 9 | **What characterizes a 'selfish node'?** | A node unwilling to cooperate due to a perceived personal cost, often leading to packet dropping. | Node Behavior Types | Medium |
| 10 | **What is the primary goal of a 'malicious node'?** | To deliberately disrupt the successful operation of routing protocols or other protocols, preventing service delivery. | Node Behavior Types | Medium |
| 11 | **What is 'dumb behavior' in sensor networks?** | An unintentional misbehavior where nodes can sense but cannot communicate (send data forward) due to environmental changes (e.g., heavy rainfall, fog) causing signal problems or range shrinkage. | Dumb Behavior | Hard |
| 12 | **Why is 'dumb behavior' considered transient or temporary?** | It lasts only for the duration of adverse weather or environmental conditions; communication resumes when conditions improve. | Dumb Behavior Characteristics | Medium |
| 13 | **What protocols were proposed to address dumb behavior in sensor networks?** | CORD and CORAD. | Dumb Behavior Solutions | Medium |
| 14 | **What is the main concern of 'event-aware topology management' in wireless sensor networks?** | To establish and manage network topology over time, adapting to changes in event location, area, and duration to ensure continuous sensing and data dissemination. | Topology Management | Medium |
| 15 | **How does 'information theoretic self-management' address redundant data in sensor networks?** | By detecting the correlation between current and previously sensed packets, sending only sufficiently uncorrelated packets, or by identifying correlated data from multiple nodes to avoid sending redundant packets. | Information Theory in WSN | Hard |
| 16 | **What is the purpose of integrating 'social networks' with 'sensor networks' in 'social sensing'?** | To exploit information flow from social networks (e.g., Twitter) to dynamically adjust the duty cycle of sensor nodes, increasing it for rare events and decreasing it for regular events. | Social Sensing | Medium |
| 17 | **Name a challenge associated with social sensing.** | Distinguishing rare events from regular events, and adapting the duty cycle with the event occurrence probability. | Social Sensing Challenges | Medium |
| 18 | **List three application areas for sensor networks mentioned in the lecture.** | Agriculture, space applications, mining, and healthcare. | Sensor Network Applications | Easy |
| 19 | **In the context of coal mining, what is the 'bord and pillar' method?** | A coal mining method involving columns (pillars) and passages (bords and galleries) where sensors are placed to detect fire and actuators release water. | Mining Application | Medium |
| 20 | **What types of sensors are typically deployed in a coal mining application?** | Temperature sensors and gas sensors. | Mining Application Specifics | Easy |
| 21 | **What is a 'Wireless Body Area Network' (WBAN) in healthcare?** | A network where physiological monitoring sensors on a human body send sensed data to a local processing unit (LPU), which then transmits it to a server via the internet. | Healthcare Application | Medium |
| 22 | **What is an 'LPU' in a WBAN context?** | Local Processing Unit, typically a mobile phone-like device, acting as a coordinator for sensors on the human body. | WBAN Components | Easy |
| 23 | **What concept from economics was used in cloud-assisted WBAN for post-disaster healthcare to ensure fairness?** | Social choice theory. | Cloud-Assisted WBAN | Hard |
| 24 | **What is the purpose of 'prioritized payload tuning mechanism' in WBAN-based healthcare systems?** | To improve the tuning of payload using fuzzy logic, considering external parameters like age, height, weight, and gender of the patient. | WBAN Optimization | Hard |
| 25 | **Why is fuzzy logic preferred over crisp set theory for payload tuning in healthcare WBANs?** | Fuzzy logic can better model external parameters like age, height, weight, and gender, which are not easily represented by crisp sets. | Fuzzy Logic in WBAN | Medium |
| 26 | **In emergency healthcare scenarios with limited resources, what critical aspect must sensor networks address?** | Prioritization of patients requiring urgent attention to ensure fairness and effective resource allocation. | Emergency Healthcare WSN | Medium |
| 27 | **What is a common misconception about implementing IoT networks?** | That it's simply about buying and putting together IoT devices and sensors, rather than being research-intensive with proper planning, protocol design, and algorithm development. | IoT Implementation | Easy |
| 28 | **How can sensor networks contribute to the broader context of IoT deployment?** | By providing the sensing capabilities and data dissemination required to achieve the objectives of the Internet of Things. | Sensor Networks & IoT | Easy |
| 29 | **What is the primary function of actuators in the coal mining application?** | To release water pulps in pipes if fire is detected. | Mining Application Specifics | Easy |
| 30 | **What happens to a node exhibiting dumb behavior when environmental conditions improve?** | Regular communication resumes, as the dumb behavior is temporary and transient. | Dumb Behavior Resolution | Easy |

---

# Week 4

## Lecture 16: Sensor Networks- Part-III (Lecture 16)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What is the primary goal of target tracking in sensor networks?** | To follow the trajectory of a particular object or target, often for surveillance applications. | Target Tracking | Easy |
| 2 | **What are the two main forms of target tracking mentioned?** | Real-time tracking (following as target moves) and predicting the trajectory. | Target Tracking | Medium |
| 3 | **Describe the 'push-based formulation' in target tracking.** | Nodes compute the target's position and periodically notify the sink node. | Target Tracking Formulations | Medium |
| 4 | **How does 'poll-based formulation' work in target tracking?** | Nodes register the target's presence, and other nodes poll them to detect objects within their sensing range. | Target Tracking Formulations | Medium |
| 5 | **What is the 'guided formulation' in target tracking?** | A dedicated tracker follows the target's trail and intercepts it. | Target Tracking Formulations | Medium |
| 6 | **Why is multi-object tracking more difficult than single-object tracking?** | It's more complex to efficiently track multiple objects simultaneously in a terrain compared to a single one. | Multi-object Tracking | Easy |
| 7 | **Name a method used for computing the exact position of a target in sensor networks.** | Trilateration. | Target Tracking Functionality | Easy |
| 8 | **What is the purpose of 'prediction' in target tracking?** | To estimate the target's future position (or sequence of positions) at a later instant of time. | Target Tracking Functionality | Medium |
| 9 | **How is energy management addressed in target tracking?** | By activating only the minimum required sensors to track the target and putting other nodes into sleep mode. | Target Tracking Functionality | Medium |
| 10 | **What is one application of sensor networks in agriculture related to surveillance?** | Monitoring agricultural fields for intrusions (e.g., from cattle or animals). | Sensor Networks in Agriculture | Easy |
| 11 | **What soil parameters can sensor networks monitor in agriculture?** | Moisture content, water level, mineral content (phosphorus, nitrogen), etc. | Sensor Networks in Agriculture | Easy |
| 12 | **What is the purpose of the AID (Agricultural Intrusion Detection) system?** | To detect intrusions in agricultural fields using wireless sensor networks and notify the farmer. | Sensor Networks in Agriculture | Medium |
| 13 | **What two types of sensors are used in the AID system and what do they detect?** | PIR sensor (detects intruder presence) and Ultrasonic sensor (senses distance of the intruder). | Sensor Networks in Agriculture | Medium |
| 14 | **What are multimedia sensor networks?** | Networks that use multimedia devices (like still or video cameras) in addition to regular scalar sensors. | Multimedia Sensor Networks | Medium |
| 15 | **What are 'scalar sensors' in the context of multimedia sensor networks?** | Regular sensors like temperature, humidity, or soil moisture sensors. | Multimedia Sensor Networks | Easy |
| 16 | **Why is deploying too many cameras not ideal for multimedia sensor networks?** | It's expensive and creates a bandwidth constraint due to large image/video data flooding the network. | Multimedia Sensor Networks | Medium |
| 17 | **How do scalar and camera sensors collaborate in WMSN for surveillance?** | Scalar sensors detect suspicious activity, then activate specific camera sensors to get a precise visual of what's happening. | Multimedia Sensor Networks | Medium |
| 18 | **Name two applications of multimedia sensor networks besides surveillance.** | Wild habitat monitoring and environmental monitoring. | Multimedia Sensor Networks | Easy |
| 19 | **What is the goal of topology management in sensor networks?** | To maintain a healthy network structure over time with respect to coverage (entire region covered) and connectivity (to the sink node). | Topology Management | Medium |
| 20 | **What are the two main types of nano sensor networks?** | Electromagnetic nano sensor networks and Bio-nano sensor networks. | Nano Networks | Easy |
| 21 | **How does communication occur in bio-nano sensor networks?** | Through molecular exchange, where information is packed into vesicles and exchanged via biomolecules. | Nano Networks | Medium |
| 22 | **List some components of a nano node.** | Nano sensor, nano actuator, nano power device, nano memory, nano processor, nano antenna. | Nano Networks | Medium |
| 23 | **In what frequency band does communication typically take place in electromagnetic nano networks?** | The terahertz band (specifically 0.1 to 10 terahertz). | Nano Networks | Medium |
| 24 | **What is the fundamental concept of Underwater Acoustic Sensor Networks (UASNs)?** | Submerging sensor nodes in an underwater domain (e.g., ocean) to sense and communicate information from below the water surface. | Underwater Acoustic Sensor Networks | Easy |
| 25 | **What is a major challenge regarding mobility in UASNs?** | Nodes do not maintain their deployed position due to waves and currents, making topology maintenance difficult. | Underwater Acoustic Sensor Networks | Medium |
| 26 | **Besides mobility, what factors affect communication channels in UASNs?** | Noisy environment (waves), saline medium, temperature variations, and pressure variations in the ocean column. | Underwater Acoustic Sensor Networks | Hard |
| 27 | **Name two mobility models mentioned for simulating UASNs.** | Meandering Current Mobility Model and Oceanic Forces Model (OFMM). | Underwater Acoustic Sensor Networks | Medium |
| 28 | **What is a key characteristic of the OFMM (Oceanic Forces Model Mobility Model)?** | It accounts for realistic forces hitting a node in an oceanic environment, unlike some other models. | Underwater Acoustic Sensor Networks | Medium |
| 29 | **What is the localization problem in UASNs?** | Accurately predicting where a node will be at a particular future instant of time in a highly dynamic and chaotic underwater environment. | Underwater Acoustic Sensor Networks | Medium |
| 30 | **What is 'dead reckoning' in the context of underwater localization?** | A technique to estimate a node's position based on its distance and angular information from a known reference point, typically used where specific references are hard to find. | Underwater Acoustic Sensor Networks | Hard |

---

## Lecture 17: Sensor Networks- Part- IV (Lecture 17)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What is the primary goal of "coverage" in sensor networks?** | To deploy sensors such that no point or area in the terrain is left unsensed. | Coverage Basics | Easy |
| 2 | **Name three common types of coverage in sensor networks.** | Point coverage, Area coverage, Barrier coverage. | Coverage Types | Easy |
| 3 | **Define "point coverage" in sensor networks.** | Ensuring a specific set of points in an area are covered by at least one sensor node. | Coverage Types | Medium |
| 4 | **Define "area coverage" in sensor networks.** | Ensuring each and every point in a particular area is within the sensing range of at least one sensor node. | Coverage Types | Medium |
| 5 | **What is the objective of "barrier coverage"?** | To ensure a specific barrier (e.g., border) is covered so that any intruder crossing it is detected by at least one sensor. | Coverage Types | Medium |
| 6 | **What is the "sensing range" of a sensor node?** | The sphere (or circle in 2D) around a node within which it can sense. | Sensor Capabilities | Easy |
| 7 | **What is the "transmission range" (or communication range) of a sensor node?** | The distance up to which a node can communicate with other nodes. | Sensor Capabilities | Easy |
| 8 | **How does the transmission range typically compare to the sensing range in sensor nodes?** | Transmission range is typically much larger than the sensing range. | Sensor Capabilities | Easy |
| 9 | **State the condition under which coverage implies connectivity, as shown by researchers like Zhang and Hou.** | If the transmission range (Rc) is greater than or equal to twice the sensing range (Rs) (Rc >= 2Rs). | Coverage & Connectivity | Hard |
| 10 | **If Rc >= 2Rs, what does ensuring coverage automatically guarantee?** | Connectivity is also taken care of. | Coverage & Connectivity | Medium |
| 11 | **How does the coverage problem differ for static sensors compared to mobile sensors?** | Static sensors focus on spatial deployment; mobile sensors consider spatio-temporal coverage, making it a harder problem. | Sensor Deployment | Medium |
| 12 | **What are the two main variants of the coverage problem concerning sensor deployment?** | Sensor placement problem and density control. | Sensor Deployment | Medium |
| 13 | **What does the "sensor placement problem" address?** | How to deploy sensor nodes in a particular area to achieve desired coverage. | Sensor Deployment | Easy |
| 14 | **What does the "density control problem" address?** | How to minimally place sensors to maintain appropriate or desirable density in an area. | Sensor Deployment | Easy |
| 15 | **What is one common definition of "network lifetime" in sensor networks?** | The time until the first sensor node in the network dies. | Network Performance | Medium |
| 16 | **What is another common definition of "network lifetime" in sensor networks?** | The time until the last sensor node in the network dies (runs out of battery/stops functioning). | Network Performance | Medium |
| 17 | **What are the two main objectives when deploying a sensor network, especially concerning coverage?** | Use a minimum number of sensors and maximize network lifetime. | Network Performance | Easy |
| 18 | **How do centralized algorithms address the coverage problem?** | Data are collected at a central point, and a global map is computed to determine sensor placement/activation. | Coverage Algorithms | Medium |
| 19 | **How do distributed algorithms address the coverage problem?** | Nodes compute their position by communicating only with their neighbors. | Coverage Algorithms | Medium |
| 20 | **How do localized algorithms address the coverage problem?** | A subset of nodes participates in sensing, communication, and computation, similar to a variant of distributed algorithms. | Coverage Algorithms | Medium |
| 21 | **What are the two main ways sensors can be deployed?** | Deterministic (pre-planned coordinates) and Random (e.g., airborne means). | Sensor Deployment | Easy |
| 22 | **What does "1-barrier coverage" ensure?** | At least one sensor node detects an intruder crossing the barrier. | Barrier Coverage | Easy |
| 23 | **What does "k-barrier coverage" ensure?** | At least 'k' number of sensors detect an intruder crossing the barrier. | Barrier Coverage | Medium |
| 24 | **Distinguish between "weak coverage" and "strong coverage" in the context of barrier coverage.** | Weak coverage allows paths for intruders to avoid detection; strong coverage ensures no such path exists without detection. | Barrier Coverage | Hard |
| 25 | **What is the primary goal of the OGDC (Optimal Geographical Density Control) algorithm?** | To cover all crossings in an area with a minimum number of sensor nodes, minimizing overlap. | OGDC Algorithm | Medium |
| 26 | **In the OGDC algorithm, what is the first step a node takes to initiate the process?** | A node volunteers as a starting node and broadcasts a message with a randomly selected ideal direction. | OGDC Algorithm | Medium |
| 27 | **If all nodes in OGDC have the same sensing range (Rs), what is the optimal distance between adjacent nodes for covering crossings?** | Square root of three times Rs (sqrt(3) * Rs). | OGDC Algorithm | Hard |
| 28 | **How does the OGDC algorithm manage node activation to minimize overlap?** | It repeatedly covers uncovered crossings with nodes that incur minimum overlap; a node sleeps if its coverage area is completely covered. | OGDC Algorithm | Hard |
| 29 | **In the context of area coverage, what are "crossings"?** | Points where two or more sensor circles (sensing ranges) intersect, or where a sensor circle intersects the boundary of the region. | Area Coverage | Medium |
| 30 | **What are the two types of reporting in sensor networks, and give an example for each?** | Event-driven (e.g., forest fire monitoring) and On-demand (e.g., inventory control systems). | Sensor Network Applications | Medium |

---

## Lecture 18: Sensor Networks- Part- V (Lecture 18)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What is a static sensor network?** | A sensor network where nodes are stationary and maintain their positions once deployed. | Static Sensor Networks | Easy |
| 2 | **List an advantage of static sensor networks.** | Easier to deploy, nodes can be placed in an optimized manner, or easier topology maintenance. | Static Sensor Networks | Easy |
| 3 | **What is a major disadvantage of static sensor networks regarding network integrity?** | A failure, especially of a critical node, can partition the network into two or more fragments. | Static Sensor Networks | Medium |
| 4 | **Besides partitioning, what is another disadvantage of static sensor networks related to network structure?** | Topology cannot be changed automatically. | Static Sensor Networks | Medium |
| 5 | **What is a mobile sensor network (MSN) conceptually integrated with?** | A stationary sensor network conceptually integrated with a Mobile Ad Hoc Network (MANET). | Mobile Sensor Networks | Easy |
| 6 | **Name two "self-job" properties of mobile sensor networks, derived from MANETs.** | Self-configuring, self-healing, self-optimizing, or self-protecting. | Mobile Sensor Networks | Medium |
| 7 | **What is the role of a mobile sensor node in an MSN?** | Senses physical parameters from the environment and delivers data when it comes in close proximity to the sink. | Mobile Sensor Networks - Components | Medium |
| 8 | **How does a mobile sink operate in an MSN?** | The sink itself moves in order to collect data from stationary sensor nodes. | Mobile Sensor Networks - Components | Medium |
| 9 | **Describe the function of "data mules" in a mobile sensor network.** | External entities that collect data from sensor nodes, go to the sink, and deliver the collected data. | Mobile Sensor Networks - Components | Medium |
| 10 | **Give an example of a terrestrial mobile sensor network application.** | Wildlife monitoring, surveillance, or object tracking. | Mobile Sensor Networks - Environments | Easy |
| 11 | **What type of vehicles are often linked with terrestrial mobile sensor networks?** | AUVs (Autonomous Unmanned Aerial Vehicles). | Mobile Sensor Networks - Environments | Medium |
| 12 | **What are flying sensor networks an example of?** | Aerial mobile sensor networks. | Mobile Sensor Networks - Environments | Easy |
| 13 | **Name an application for aerial mobile sensor networks.** | Surveillance or multimedia data gathering. | Mobile Sensor Networks - Environments | Easy |
| 14 | **What kind of devices are sensors fitted to in underwater mobile sensor networks?** | Autonomous underwater vehicles (AUVs) or rovers. | Mobile Sensor Networks - Environments | Medium |
| 15 | **List two applications for underwater mobile sensor networks.** | Monitoring marine life or water quality. | Mobile Sensor Networks - Environments | Easy |
| 16 | **What characteristic makes human mobility challenging to predict in sensor networks?** | Human mobility is unpredictable. | Mobile Entities | Medium |
| 17 | **What is a vehicular sensor network?** | A network where sensors are typically used in cars and different modern-day vehicles. | Mobile Entities | Easy |
| 18 | **How do mobile robots collect data in a sensor network?** | They are controllable sensor nodes that collect data by predefined instructions. | Mobile Entities | Medium |
| 19 | **What modern devices enable human-centric sensing?** | Smartphones and PDAs. | Human-Centric Sensing | Easy |
| 20 | **Name two common sensors found in modern smartphones.** | Accelerometer sensor or gyroscope sensor. | Human-Centric Sensing | Easy |
| 21 | **Define "participatory sensing."** | A paradigm where a crowd of people, each with smartphones equipped with sensors, turn on their sensors to form a human-centric mobile sensor network. | Human-Centric Sensing | Medium |
| 22 | **What is the goal of participatory sensing beyond just data collection?** | To allow common people to access the data and share the knowledge. | Human-Centric Sensing | Hard |
| 23 | **How does "people-centric sensing" differ from participatory sensing?** | People-centric sensing refers to humans themselves sensing (e.g., using eyes, ears), while participatory sensing uses devices carried by humans. | Human-Centric Sensing | Hard |
| 24 | **Explain "opportunistic sensing."** | A node moves to a different location, senses opportunistically, and delivers the message if another node comes into proximity. | Human-Centric Sensing | Medium |
| 25 | **List two challenges for human-centric sensing.** | Energy of devices, participant selection, or privacy of users. | Human-Centric Sensing | Medium |
| 26 | **What are the three distinct roles played by humans in human-centric sensing?** | Sensing of the targets, sensing of the operators, and acting as a data source. | Human-Centric Sensing | Hard |
| 27 | **What is a Delay Tolerant Network (DTN)?** | A network where sensed data takes a long time to get delivered compared to the regular time. | Delay Tolerant Networks | Medium |
| 28 | **According to the lecture, what is sensor networks considered an important tool for building?** | The Internet of Things (IoT). | Sensor Networks & IoT | Easy |
| 29 | **What happens if a critical node fails in a static sensor network?** | It is likely to partition the network, preventing one part from communicating with another. | Static Sensor Networks | Medium |
| 30 | **What is a key characteristic of MANETs that contributes to the dynamic nature of mobile sensor networks?** | They are infrastructure-less, leading to dynamically changing topologies. | Mobile Sensor Networks | Medium |

---

## Lecture 19: UAV Networks (Lecture 19)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What is a UAV network in basic terms?** | A network of UAVs (e.g., quadcopters or drones) internetworked together to communicate and accomplish missions. | Introduction to UAV Networks | Easy |
| 2 | **Name two applications where UAV networks are particularly attractive.** | Civilian applications (e.g., post-disaster monitoring) and military applications (e.g., reconnaissance, border surveys). | Applications | Easy |
| 3 | **What is a primary characteristic of UAV network topology compared to terrestrial networks?** | Highly dynamic and fast-changing due to flying objects moving at high speeds. | Features of UAV Networks | Medium |
| 4 | **What are the two popular topologies used to model UAV networks?** | Star topology and Mesh topology. | Topologies | Easy |
| 5 | **What key benefits does a mesh topology offer for any network, including UAV networks?** | Ensures reliability and fault tolerance. | Topologies | Medium |
| 6 | **How can UAV networks achieve flexible deployment and management of new services?** | Using Software-Defined Networking (SDN). | Features of UAV Networks | Medium |
| 7 | **Why is multitasking an important feature for nodes in a UAV network?** | Flying nodes (e.g., quadcopters) need to perform different tasks together. | Features of UAV Networks | Easy |
| 8 | **How do UAV networks enhance coverage?** | They can offer connectivity and sensing coverage over a larger area. | Features of UAV Networks | Easy |
| 9 | **What makes UAV networks easily reconfigurable?** | They are fast-moving flying networks, allowing them to be programmed or reconfigured for varying missions. | Features of UAV Networks | Easy |
| 10 | **Besides overall network movement, what other positional challenge do UAV networks face?** | The relative position of UAVs within a group can change very frequently. | Key Issues | Medium |
| 11 | **How are UAV networks designed to handle malfunctioning nodes?** | They are developed to continue functioning by reforming the network topology even if a node fails. | Key Issues | Medium |
| 12 | **What causes intermittent link connectivity in UAV networks?** | The dynamic topology and internal node positioning change over time, leading to links forming and breaking. | Key Issues | Medium |
| 13 | **Why are traditional routing algorithms (like AODV, DSR) unsuitable for UAV networks?** | UAV networks are much more highly dynamic than even Mobile Ad Hoc Networks (MANETs), making existing algorithms inadequate. | Key Issues | Hard |
| 14 | **Compare the chances of system failure between a single UAV system and a multi-UAV system.** | Single UAV system: High chance of failure. Multi-UAV system: Low chance of failure. | Single vs Multi-UAV | Easy |
| 15 | **Compare the scalability of single vs multi-UAV systems.** | Single UAV system: Limited scalability. Multi-UAV system: Highly scalable. | Single vs Multi-UAV | Easy |
| 16 | **How does the speed of mission execution differ between single and multi-UAV systems?** | Single UAV system: Slow mission speed. Multi-UAV system: Fast mission speed. | Single vs Multi-UAV | Easy |
| 17 | **Compare the survivability of single vs multi-UAV systems.** | Single UAV system: Poor survivability. Multi-UAV system: Higher survivability. | Single vs Multi-UAV | Easy |
| 18 | **Compare the cost of single vs multi-UAV systems.** | Single UAV system: Medium cost. Multi-UAV system: High cost. | Single vs Multi-UAV | Medium |
| 19 | **Compare the bandwidth requirements of single vs multi-UAV systems.** | Single UAV system: High bandwidth. Multi-UAV system: Medium bandwidth. | Single vs Multi-UAV | Medium |
| 20 | **Why do UAV networks have huge power requirements?** | Nodes need to fly, carry payload, and communicate, all increasing power consumption. | Constraints | Medium |
| 21 | **What environmental factors physically affect UAV network nodes?** | Wind, rain, and other environmental effects due to their operating environment. | Constraints | Easy |
| 22 | **Name two key advantages of UAV networks related to system robustness.** | High reliability (due to multiple UAVs) and high survivability. | Advantages | Easy |
| 23 | **How can UAV networks be considered cost-effective despite initial investment?** | They can accomplish missions much more efficiently compared to single UAVs, improving overall cost efficiency. | Advantages | Medium |
| 24 | **Describe the two types of star topologies mentioned for UAV networks.** | Basic star (UAVs connect directly to a ground station) and Multi-star (multiple star units connected to a ground station). | Topologies | Medium |
| 25 | **Compare communication types in star vs mesh topologies.** | Star: Point-to-point communication. Mesh: Multi-point to multi-point communication. | Topologies Comparison | Medium |
| 26 | **What is a Flying Ad Hoc Network (FANET)?** | A ground ad hoc network brought to fly, formed by UAVs, ensuring longer range, clearer line of sight, and environment-resilient communication. | FANETs | Medium |
| 27 | **Name three types of communication that take place in FANETs.** | Inter-plane communication, Intra-plane communication, Ground station communication, Ground sensor communication, FANET-VANET communication. | FANETs | Medium |
| 28 | **What are the main communication requirements of UAV networks?** | Sending back sensor data, receiving control commands, cooperative trajectory planning, and dynamic task assignments. | Communication Requirements | Medium |
| 29 | **How is a gateway selected in a UAV network sub-area?** | It is initiated by selecting the most stable node in that particular sub-area. | Network Management | Medium |
| 30 | **How can trajectory control increase throughput in UAV networks?** | The control station instructs UAVs to change trajectory centers based on traffic at busy communication links, especially when queue occupancy is high. | Network Optimization | Hard |

---

## Lecture 20: Machine to Machine Communication (Lecture 20)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What is the core concept of Machine to Machine (M2M) communication?** | Communication between two machines with minimal or strictly speaking no human intervention. | Machine to Machine Communication | Easy |
| 2 | **What is a defining characteristic of M2M communication regarding human involvement?** | Minimal or no human intervention. | Machine to Machine Communication | Easy |
| 3 | **Why is M2M considered a vital concept for building the Internet of Things (IoT)?** | M2M is one of the most important building blocks for IoT, enabling autonomous behavior in networks. | Machine to Machine Communication | Medium |
| 4 | **How does M2M conceptually relate to traditional SCADA systems?** | M2M can be thought of as the wireless variant of SCADA. | Machine to Machine Communication | Medium |
| 5 | **What is a key difference between SCADA and M2M regarding connectivity?** | SCADA systems typically used wire, whereas M2M is wireless. | Machine to Machine Communication | Medium |
| 6 | **What is a key difference between SCADA and M2M regarding platform integration?** | SCADA is designed for isolated systems using proprietary solutions, while M2M is designed for cross-platform integration. | Machine to Machine Communication | Medium |
| 7 | **Describe an M2M scenario in a smart home for elderly care involving a robot.** | A ground robot can open a refrigerator door, take out a milk pot, pour milk into a glass, and place it in a microwave oven, all without human intervention. | Machine to Machine Communication | Medium |
| 8 | **Provide an example of M2M communication involving an automatic SMS.** | If a robot or refrigerator finds insufficient milk, it can automatically send an SMS to the milk person, with no human intervention. | Machine to Machine Communication | Medium |
| 9 | **Outline an M2M scenario for emergency services on a highway.** | Cars with emergency sensors collide, an alert is generated, data is sent to remote servers, then to hospitals and emergency services (ambulance, doctors, paramedics) for dispatch, all without human operators. | Machine to Machine Communication | Hard |
| 10 | **Name three application areas for M2M communication.** | Environment monitoring, civil protection and public safety, supply chain management, energy and utility distribution (smart grid), intelligent transportation systems, healthcare, automation of buildings, military applications, agriculture, home networks. | Machine to Machine Communication | Easy |
| 11 | **How does M2M contribute to a smart grid?** | In a smart grid, M2M uses ICT involving sensors and actuators to communicate data on top of the traditional power flow. | Machine to Machine Communication | Medium |
| 12 | **What is a typical characteristic of the number of nodes in an M2M network?** | M2M networks typically involve a large number of nodes or IoT devices. | Machine to Machine Communication | Easy |
| 13 | **Describe the cost and energy efficiency characteristics of M2M nodes.** | M2M nodes are typically low cost and energy efficient. | Machine to Machine Communication | Easy |
| 14 | **What are the typical traffic generation and data collection patterns in M2M?** | Small traffic is generated per machine or device, but large quantities of data are collected. | Machine to Machine Communication | Medium |
| 15 | **Characterize 'low-end sensor nodes' in terms of cost and capabilities.** | Low-end sensor nodes are low in cost, cheap, and have low capabilities with very limited specifications. | Machine to Machine Communication | Medium |
| 16 | **List two key functionalities supported by low-end sensor nodes.** | Data aggregation, auto configuration, and power saving. | Machine to Machine Communication | Medium |
| 17 | **What is a common application for low-end sensor nodes?** | Environmental monitoring applications. | Machine to Machine Communication | Easy |
| 18 | **Describe 'mid-end sensor nodes' relative to low-end nodes.** | Mid-end sensor nodes are relatively more expensive, have some degrees of mobility, and fewer constraints with respect to resource or computational complexities. | Machine to Machine Communication | Medium |
| 19 | **What advanced functionalities do mid-end sensor nodes support compared to low-end?** | Localization, quality of service support, TCP/IP support, or control traffic intelligence. | Machine to Machine Communication | Hard |
| 20 | **What are the distinguishing features of 'high-end sensor nodes'?** | Low density of deployment, ability to handle multimedia data or video with QoS, and essential mobility. | Machine to Machine Communication | Medium |
| 21 | **Give an example of a high-end sensor node.** | Smartphones are good examples of high-end sensor nodes. | Machine to Machine Communication | Easy |
| 22 | **Name two key components of the M2M ecosystem.** | Device providers, internet service providers, platform providers, service providers, and service users. | Machine to Machine Communication | Easy |
| 23 | **What type of architecture is often used as an interface between device providers and internet service providers in the M2M ecosystem?** | Restful architecture. | Machine to Machine Communication | Medium |
| 24 | **What is the purpose of the M2M Service Platform (M2SP)?** | The M2SP handles different functionalities of devices, users, applications, and access. | Machine to Machine Communication | Medium |
| 25 | **What functionalities does the M2SP provide related to devices?** | Device profile management, device and M2M network management, and device searching. | Machine to Machine Communication | Medium |
| 26 | **What functionalities does the M2SP provide related to users?** | User profile management, authentication, charging, and user access restrictions. | Machine to Machine Communication | Medium |
| 27 | **What functionalities does the M2SP provide related to applications?** | Data collection, data control, service management, connection management, app management, app searching, and web portal. | Machine to Machine Communication | Medium |
| 28 | **What functionalities does the M2SP provide related to access?** | App or web access environment to users, app management for smart device apps, and redirection to service providers. | Machine to Machine Communication | Medium |
| 29 | **List two important features of M2M area network management.** | Fault tolerance, scalability, low cost, low complexity, energy efficiency, dynamic configuration capabilities, minimized network management traffic. | Machine to Machine Communication | Easy |
| 30 | **Explain the importance of 'scalability' in M2M network management.** | Scalability ensures that increasing the number of M2M or IoT nodes does not significantly affect the efficiency of the network. | Machine to Machine Communication | Medium |

---

# Week 5

## Lecture 21 : Interoperability in Internet of Things (Lecture 21)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What is a core problem in Internet of Things (IoT) systems?** | Heterogeneity of devices, protocols, user groups, and many other aspects. | Interoperability in Internet of Things | Easy |
| 2 | **Define interoperability in the context of products or systems.** | A characteristic of a product or system whose interfaces are completely understood to work with other products or systems (present or future) in either implementation or access without any restrictions. | Interoperability in Internet of Things | Medium |
| 3 | **Why is interoperability crucial for IoT objectives?** | It is required to fulfill different IoT objectives, enabling seamless device interaction, allowing physical objects to communicate and share information, and facilitating 'anything, anytime, anywhere' communication. | Interoperability in Internet of Things | Medium |
| 4 | **Name three types of communication protocol heterogeneity found in IoT.** | Zigbee (IEEE 802.15.4), Bluetooth (IEEE 802.15.1), Wi-Fi (IEEE 802.11), GPRS, 6LoWPAN, wired protocols (802.3, 802.1). (Any three) | Interoperability in Internet of Things | Easy |
| 5 | **Give examples of programming language heterogeneity in IoT computing systems.** | JavaScript, Java, C, C++, Visual Basic, PHP, Python. | Interoperability in Internet of Things | Easy |
| 6 | **What are two main types of interoperability discussed?** | User interoperability and Device interoperability. | Interoperability in Internet of Things | Easy |
| 7 | **Describe the challenge of user interoperability using the CCTV example.** | A user in America (English) needs to operate CCTV devices in Delhi (Hindi) and Tokyo (Japanese), which have different syntaxes, semantics, and language specifications, making direct communication difficult. | Interoperability in Internet of Things | Medium |
| 8 | **What are the three main problems that need to be solved for IoT interoperability?** | Device identification and categorization for discovery, syntactic interoperability for device integration, and semantic interoperability for device interaction. | Interoperability in Internet of Things | Medium |
| 9 | **Name two solutions for generating unique addresses for device identification.** | Electronic Product Code (EPC), Universal Product Code (UPC), Universal Resource Identifier (URI), IPv6. (Any two) | Interoperability in Internet of Things | Easy |
| 10 | **What are UNSPSC and ECLASS used for in IoT?** | UNSPSC (United Nations Standard Products and Services Code) is an open global multi-sector standard for classification of products and services. ECLASS is a standard for classification and clear description of cross-industry products. | Interoperability in Internet of Things | Medium |
| 11 | **What is the concern of syntactic interoperability for device interaction?** | The interoperability between devices and device users in terms of message formats, ensuring the message format from a device to a user is understandable, and from a user to a device is executable. | Interoperability in Internet of Things | Medium |
| 12 | **Name two popular approaches for achieving syntactic interoperability.** | Service-Oriented Computing (SOC) based architecture, Web services (RESTful), open standard protocols (e.g., 802.15.4), middleware technology. (Any two) | Interoperability in Internet of Things | Medium |
| 13 | **What is a key characteristic of the Z-Wave protocol regarding standards?** | Z-Wave is a proprietary, closed protocol, not an open standard. | Interoperability in Internet of Things | Easy |
| 14 | **How does middleware technology contribute to syntactic interoperability?** | It acts as a software bridge that dynamically maps physical devices with different domains, enabling devices to be discovered and controlled remotely. | Interoperability in Internet of Things | Medium |
| 15 | **What is the primary goal of semantic interoperability for device interaction?** | To ensure that the meaning of messages sent between devices and users is understood by the respective party, potentially using middleware for translation. | Interoperability in Internet of Things | Medium |
| 16 | **What is an ontology-based approach in semantic interoperability?** | It uses knowledge bases (ontologies) to represent information about devices (device ontology), physical domains (physical domain ontology), or for estimation (estimation-based ontology), helping different entities understand each other's meaning. | Interoperability in Internet of Things | Hard |
| 17 | **Name the three types of ontologies mentioned for semantic interoperability.** | Device ontology, physical domain ontology, and estimation-based ontology. | Interoperability in Internet of Things | Medium |
| 18 | **What theory was proposed to address the limitations of ontology-based solutions to a defined domain?** | The Collaborative Conceptualization Theory, which introduced the CoSign concept. | Interoperability in Internet of Things | Hard |
| 19 | **What does CoSign stand for in the Collaborative Conceptualization Theory?** | Collaborative Sign. | Interoperability in Internet of Things | Easy |
| 20 | **List the four components of a CoSign quadruple (A, B, C, D).** | A: CoSign internal identifier, D: Natural language, C: Context of A, B: Definition of the object. | Interoperability in Internet of Things | Hard |
| 21 | **In the context of device interoperability, what is a 'Protocol Translation Unit (PTU)'?** | A middleware component that translates the different protocols or 'languages' followed by two heterogeneous devices, enabling them to communicate. | Interoperability in Internet of Things | Medium |
| 22 | **What is the purpose of a Universal Middleware Bridge (UMB) in device interoperability?** | It solves seamless interoperability problems caused by heterogeneity of home network middleware by creating a virtual map among physical devices and compatibility between different middleware home networks. | Interoperability in Internet of Things | Medium |
| 23 | **What are the two main components of the UMB architecture?** | The UMB Core and the UMB Adaptor. | Interoperability in Internet of Things | Easy |
| 24 | **What is the role of the UMB Adaptor?** | It converts physical devices into virtual abstractions, using a Universal Device Template (UDT), and translates local middleware messages into global metadata messages. | Interoperability in Internet of Things | Medium |
| 25 | **What is a Universal Device Template (UDT) and what does it consist of?** | A UDT helps create virtual abstractions of physical devices. It consists of a Global Device Identifier, Global Function Identifier, Global Action Identifier, Global Event Identifier, and Global Parameters. | Interoperability in Internet of Things | Hard |
| 26 | **What is the primary role of the UMB Core?** | Routing messages between different adaptors, using a middleware routing table, message router, and global dispatcher. | Interoperability in Internet of Things | Medium |
| 27 | **Describe the initial steps when a device connects to a UMB Adaptor.** | The device is detected and configured, a virtual device is created, and its online status and ID are sent from the adaptor to the UMB Core. | Interoperability in Internet of Things | Medium |
| 28 | **How does the UMB Core notify other devices about a new device's online status?** | The UMB Core sends the online status, device ID, and online/offline status to another adaptor, which then notifies its respective device. | Interoperability in Internet of Things | Medium |
| 29 | **Outline the process for device control and monitoring using UMB.** | A local control/monitoring message is sent from the device to Adaptor 1, converted to a UMB message, sent to the UMB Core, then as a query/action request to Adaptor 2, converted to a local message, sent to the target device, and a response follows the reverse path. | Interoperability in Internet of Things | Hard |
| 30 | **What does the UMB Adaptor essentially represent for a physical device?** | A virtual or software abstraction of the actual physical device. | Interoperability in Internet of Things | Easy |

---

## Lecture 22 : Introduction to Arduino- I (Lecture 22)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What is a key characteristic of Arduino boards regarding cost and resource consumption?** | They are very cheap and low resource consuming. | Arduino Basics | Easy |
| 2 | **What kind of signals can Arduino accept as inputs?** | Analog and digital signals. | Arduino Basics | Easy |
| 3 | **What is the primary output type from an Arduino board?** | Mainly digital outputs. | Arduino Basics | Easy |
| 4 | **What is a significant advantage of Arduino for programming compared to older microcontrollers like 8051?** | No extra hardware is required to load a program onto the controller board. | Arduino Basics | Medium |
| 5 | **What is the term for the program written for an Arduino?** | A 'sketch'. | Arduino IDE | Easy |
| 6 | **What is the operating voltage of an Arduino Uno board?** | Five Volts. | Arduino Uno Features | Easy |
| 7 | **What is the clock speed of an Arduino Uno?** | Sixteen Megahertz. | Arduino Uno Features | Easy |
| 8 | **How many digital input/output pins does an Arduino Uno typically have?** | Fourteen digital input/output pins (from 0 to 13). | Arduino Uno Features | Easy |
| 9 | **How many analog input pins does an Arduino Uno have?** | Six analog input pins (A0 to A5). | Arduino Uno Features | Easy |
| 10 | **What is the purpose of the USB connector on an Arduino board?** | To connect the Arduino board to a PC for power, program upload, and communication. | Arduino Uno Hardware | Easy |
| 11 | **What is the function of the setup() part in an Arduino sketch?** | It runs once at the beginning of the program, analogous to the main() function in C/C++, used for initialization (e.g., pinMode). | Arduino Sketch Structure | Medium |
| 12 | **What is the function of the loop() part in an Arduino sketch?** | It runs continuously and iteratively after the setup() function completes. | Arduino Sketch Structure | Medium |
| 13 | **What programming languages is the Arduino IDE based on?** | Variations of C and C++ programming languages. | Arduino IDE | Easy |
| 14 | **What function is used to initialize serial communication in Arduino, and what is a common baud rate?** | Serial.begin(baud_rate); 9600 is a commonly used baud rate. | Arduino Functions | Medium |
| 15 | **What is the difference between Serial.print() and Serial.println()?** | Serial.print() prints text without a new line, while Serial.println() prints text followed by a new line. | Arduino Functions | Medium |
| 16 | **What function is used to pause the program execution for a specified duration in Arduino?** | delay(milliseconds). | Arduino Functions | Easy |
| 17 | **How do you configure a digital pin as either an input or an output in Arduino?** | Using the pinMode(pin, mode) function, where mode can be INPUT or OUTPUT. | Arduino Functions | Medium |
| 18 | **What function is used to write a high or low value to a digital pin?** | digitalWrite(pin, value), where value is HIGH or LOW. | Arduino Functions | Medium |
| 19 | **What function is used to read an analog input from an analog pin?** | analogRead(pin). | Arduino Functions | Easy |
| 20 | **Name two common ATmega series microcontrollers used in Arduino boards.** | ATmega328, ATmega32U4, ATmega2560, ATmega91SAM3XE (any two). | Arduino Hardware | Medium |
| 21 | **What is the purpose of the 'Verify' button in the Arduino IDE?** | To check the code for syntax errors and logical errors before uploading it to the board. | Arduino IDE | Easy |
| 22 | **What is the 'Serial Monitor' in the Arduino IDE used for?** | It is an inbuilt tool to view the output of serial programs during execution. | Arduino IDE | Easy |
| 23 | **How is the power supplied to the Arduino board when it's running in standalone mode (not connected to a PC)?** | Through the power connector, typically by plugging in a 5-volt DC adapter. | Arduino Uno Hardware | Medium |
| 24 | **What is the polarity of an LED's terminals?** | The longer terminal is positive, and the shorter terminal is ground (negative). | Electronics Basics | Easy |
| 25 | **What component is typically connected in series with an LED when connecting it to an Arduino?** | A resistor (e.g., 220 ohm) to limit current. | Electronics Basics | Easy |
| 26 | **Which digital pin on an Arduino Uno is connected to an inbuilt LED, making it useful for quick code validity checks?** | Pin 13. | Arduino Uno Features | Easy |
| 27 | **What does 'open source' mean in the context of Arduino hardware and software?** | The hardware specifications are available, and the software (IDE) can be freely downloaded and modified, allowing users to even fabricate their own devices. | Arduino Basics | Hard |
| 28 | **What is the role of the ATmega16U2 chip on the Arduino Uno board?** | It handles the USB interface for communication with the PC. | Arduino Uno Hardware | Hard |
| 29 | **What are some examples of data types supported by Arduino programming?** | void, int, boolean, byte, word, float, array, string, object, long, char, unsigned char. | Arduino Programming | Medium |
| 30 | **Why is Arduino popular for Internet of Things (IoT) implementations?** | It is cheap, low resource consuming, and can be easily integrated with various sensors and actuators. | Arduino Basics | Medium |

---

## Lecture 23 : Introduction to Arduino- II (Lecture 23)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What are the basic arithmetic operators in Arduino programming?** | Equal to (=), plus (+), minus (-), multiplication (*), division (/), modulo division (%). | Operators | Easy |
| 2 | **Name some comparison operators used in Arduino.** | Equal to (==), not equal to (!=), less than (<), greater than (>). | Operators | Easy |
| 3 | **What is the purpose of an `if-else if-else` statement in Arduino?** | To execute different blocks of code based on whether a condition (or series of conditions) is true or false. | Control Statements | Medium |
| 4 | **Describe the basic structure of a `switch-case` statement in Arduino.** | switch (choice) { case option1: statement1; break; case option2: statement2; break; default: default_statement; break; } | Control Statements | Medium |
| 5 | **Why are conditional operators (e.g., `condition ? statement1 : statement2`) generally avoided in Arduino programming?** | These kinds of statement operators are best avoided during Arduino programming. | Control Statements | Medium |
| 6 | **List the common types of loops available in Arduino.** | For loop, while loop, do-while loop, nested loops, infinite loops. | Loops | Easy |
| 7 | **What is an 'infinite loop' in Arduino programming, and when might it be used?** | A loop that runs continuously. Used for systems that need to operate indefinitely, like blinking an LED, security systems, or continuous sensor monitoring. | Loops | Medium |
| 8 | **Define an array in Arduino programming.** | A collection of elements having homogeneous data types, stored in adjacent memory locations, with a conventional starting index of zero. | Arrays | Easy |
| 9 | **How do you declare a single-dimensional array of integers named `myArray` with a size of 5 in Arduino?** | `int myArray[5];` | Arrays | Easy |
| 10 | **How can you declare and initialize an integer array `myArray` with values 0, 1, 2, 3, 4 without specifying its size explicitly?** | `int myArray[] = {0, 1, 2, 3, 4};` | Arrays | Medium |
| 11 | **Provide an example of declaring a multi-dimensional array for image data (e.g., rows, columns, height).** | `int array[row][column][height];` (e.g., for RGB image channels). | Arrays | Medium |
| 12 | **What is a string in Arduino, and how is its termination indicated?** | An array of characters with a null character as its termination. | Strings | Easy |
| 13 | **How can you declare a character array named `str` to store the string 'abcd'?** | `char str[] = "abcd";` | Strings | Easy |
| 14 | **What is the benefit of using the `String` data type in Arduino compared to `char` arrays for strings?** | The `String` data type (e.g., `String str = "abc";`) allows storing entire strings without needing to store in individual locations. | Strings | Medium |
| 15 | **What does the `str.toUpperCase()` function do for a `String` object `str`?** | It changes all the characters of string `str` to uppercase. (Note: T, U, C are caps). | Strings | Easy |
| 16 | **Explain the purpose of `str.replace(string1, string2)` for a `String` object `str`.** | If `string1` is a substring of `str`, it will be replaced by `string2`. | Strings | Medium |
| 17 | **Which header file must be included to use mathematical functions in Arduino?** | `math.h` | Mathematics Library | Easy |
| 18 | **Name two trigonometric functions available in the Arduino math library.** | `cos()`, `sin()`, `tan()`. | Mathematics Library | Easy |
| 19 | **What is the function `fabs()` used for in the Arduino math library?** | It returns the floating absolute value of a number. | Mathematics Library | Medium |
| 20 | **How do you calculate the natural logarithm and base-10 logarithm of a value using the Arduino math library?** | `log(value)` for natural logarithm and `log10(value)` for base-10 logarithm. | Mathematics Library | Medium |
| 21 | **What is the purpose of `randomSeed(int v)` in Arduino?** | It resets the pseudo random number generator with the seed value `v`, providing a starting point for random number generation. | Random Numbers | Medium |
| 22 | **How do you generate a random number within a specific range, say from `min_i` to `max_i`, in Arduino?** | `random(mini, maxi)` | Random Numbers | Easy |
| 23 | **What is an 'interrupt' in the context of Arduino programming?** | An external signal for which the system blocks the current running process until that signal is received. | Interrupts | Medium |
| 24 | **What is an ISR in the context of Arduino interrupts?** | ISR stands for Interrupt Service Routine, which has to be defined explicitly to handle an interrupt. | Interrupts | Medium |
| 25 | **In the traffic control example, what components are needed besides the Arduino board?** | Three different LEDs (red, green, yellow), resistors (e.g., 220 or 330 ohm), and connecting jumper wires. | Example Program | Easy |
| 26 | **How are the LED pins typically configured in the `void setup()` function for the traffic control system?** | Using `pinMode(pin, OUTPUT)` for each LED pin (e.g., `pinMode(R, OUTPUT)`). | Example Program | Medium |
| 27 | **What Arduino function is used to turn an LED on or off, and how is it used?** | `digitalWrite(pin, HIGH)` to turn on and `digitalWrite(pin, LOW)` to turn off. | Example Program | Easy |
| 28 | **What is the unit of time for the `delay()` function in Arduino?** | Milliseconds. For example, `delay(5000)` means a 5-second delay. | Example Program | Easy |
| 29 | **How do you add comments to your Arduino code?** | Using double slashes (`//`) for single-line comments. The compiler will skip their execution. | Example Program | Easy |
| 30 | **In the traffic control example, what is the purpose of printing messages to the serial port (e.g., 'green led on go')?** | For debugging purposes, to see which part of the loop your code or hardware is executing, helping in debugging effectively. | Example Program | Medium |

---

## Lecture 24 : Integration of Sensors and Actuators with Arduino- I (Lecture 24)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What is the primary focus of this lecture and the next one?** | Discussing the integration of sensors and actuators with the Arduino platform. | Lecture Overview | Easy |
| 2 | **What is the general function of sensors in IoT systems?** | They convert physical quantities or measurements into electrical signals. | Sensor Definition | Easy |
| 3 | **How can sensors generally be classified?** | Into either analog or digital sensors. | Sensor Classification | Easy |
| 4 | **Name three common types of sensors used with IoT mentioned in the lecture.** | Temperature sensors, humidity sensors, compass or direction sensors, light sensors, sound sensors, accelerometers. | Common IoT Sensors | Medium |
| 5 | **Which specific sensor and actuator are demonstrated in this lecture?** | The temperature humidity sensor (DHT22) and the servo motor. | Lecture Specifics | Easy |
| 6 | **What is the name of the Arduino board used for the sensor integration demonstration?** | Arduino Mega (or Mega 2560). | Arduino Board | Easy |
| 7 | **How many UARTs does an Arduino Mega have, and how does this compare to an Arduino Uno?** | Arduino Mega has four UARTs, while Arduino Uno has only one. | Arduino Comparison | Medium |
| 8 | **How many analog input pins does the Arduino Mega have?** | Sixteen analog input pins. | Arduino Mega Specs | Medium |
| 9 | **What does "DHT" stand for in the context of the sensor used?** | Digital Humidity and Temperature. | DHT Sensor | Easy |
| 10 | **How many pins does the DHT sensor typically have?** | Four pins. | DHT Sensor Pins | Easy |
| 11 | **What is the function of Pin 1 on the DHT sensor when viewed from left to right with the mesh region upfront?** | It is connected to a positive voltage (VCC). | DHT Pinout | Medium |
| 12 | **What is the function of Pin 2 on the DHT sensor?** | It is the signal pin, from which actual sensor data comes to the board. | DHT Pinout | Medium |
| 13 | **What is the function of Pin 4 on the DHT sensor?** | It is connected to ground. | DHT Pinout | Medium |
| 14 | **What is the recommended voltage supply range for the DHT sensor?** | Ranging from 3.3 volts to 5 volts. | DHT Power Requirements | Medium |
| 15 | **What precaution must be taken regarding the voltage supply to the DHT sensor?** | Do not exceed the 5-volt range, otherwise the sensor will be damaged. | DHT Power Requirements | Hard |
| 16 | **Which company's library is used for interfacing the DHT sensor with Arduino?** | Adafruit. | DHT Library | Easy |
| 17 | **What are the initial steps to install a new library in the Arduino IDE?** | Go to "Sketch" on the menu bar, then "Include Library", and then "Manage Libraries". | Arduino IDE Library Management | Medium |
| 18 | **After installing a new library, what action is recommended for the Arduino IDE?** | Restart your Arduino IDE. | Arduino IDE Library Management | Easy |
| 19 | **Which digital pin on the Arduino board is used for the DHT sensor's signal wire in the demonstration?** | Pin number eight. | DHT Hardware Connection | Medium |
| 20 | **What is the first line of code required in the Arduino sketch to use the DHT sensor library?** | #include <dht.h> | DHT Sketch Syntax | Medium |
| 21 | **How is the DHT sensor object initialized in the Arduino sketch, assuming DHTPIN and DHTTYPE are defined?** | DHT dht(DHTPIN, DHTTYPE); | DHT Sketch Syntax | Medium |
| 22 | **What type of variables are used to store humidity and temperature readings?** | Floating type variables (e.g., float humidity; float temperature;). | DHT Sketch Variables | Easy |
| 23 | **What function is called in the setup() part of the sketch to initialize serial communication?** | Serial.begin(9600); (at a baud rate of 9600). | Arduino Serial Communication | Easy |
| 24 | **What function is called in the setup() part of the sketch to initialize the DHT sensor?** | dht.begin(); | DHT Sketch Initialization | Easy |
| 25 | **Which function is used to read the humidity value from the DHT sensor in the loop?** | dht.readHumidity(); | DHT Reading Functions | Medium |
| 26 | **Which function is used to read the temperature value from the DHT sensor in the loop?** | dht.readTemperature(); | DHT Reading Functions | Medium |
| 27 | **What is the delay duration between successive humidity and temperature readings in the example sketch?** | Two seconds (delay(2000);). | DHT Sketch Timing | Easy |
| 28 | **What are the expected units for humidity and temperature displayed on the serial monitor?** | Humidity in percentage and temperature in degree Celsius. | DHT Output Units | Easy |
| 29 | **What visual cue on the Arduino board indicates that code is being uploaded?** | The TX and RX lights blink rapidly. | Arduino Upload Process | Medium |
| 30 | **Besides the DHT sensor, what other types of sensors were mentioned as being integratable with Arduino?** | Light Dependent Resistors (LDRs), light sensors, accelerometers, gyroscopes. | Other Sensors | Medium |

---

## Lecture 25 : Integration of Sensors and Actuators with Arduino- II (Lecture 25)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What are actuators?** | Mechanical or electromechanical devices that convert energy or signals into motion. | Actuators | Easy |
| 2 | **What is the primary purpose of actuators?** | To provide controlled motion to other components of various mechanical structures or devices. | Actuators | Easy |
| 3 | **Describe the basic working principle of a servo motor.** | It has various mechanical structures like gears, screws, and ball bearings interfaced with a small motor to produce very controlled motion. | Servo Motors | Medium |
| 4 | **What is a 'micro servo' in the context of Arduino integration?** | A type of servo motor that can be directly integrated with an Arduino board without much external circuitry. | Servo Motors | Easy |
| 5 | **Name three types of motor-based actuators mentioned in the lecture.** | Servo motors, stepper motors, hydraulic motors, AC motors. | Actuator Types | Medium |
| 6 | **How does a solenoid work?** | It works on the principle of magnetism; whenever current passes through a coil surrounding an iron core, the whole set magnetizes. | Actuator Types | Medium |
| 7 | **What is a relay?** | An electromechanical switch, sometimes used to integrate various multiple motors with any kind of programmable circuit. | Actuator Types | Medium |
| 8 | **What is a key characteristic of a servo motor regarding its motion range?** | It is a high-precision motor able to provide rotary motion between 0 and 180 degrees. | Servo Motors | Easy |
| 9 | **What are the three wires typically found on a servo motor and their general functions?** | Ground (darkest wire, black/brown), Power (red, 5V supply), Signal (yellow, control signals). | Servo Motors | Easy |
| 10 | **What is the function of the darkest wire (black or brown) on a servo motor?** | It is for ground. | Servo Motors | Easy |
| 11 | **What is the function of the red wire on a servo motor?** | It is for the power supply, typically 5V from the Arduino board. | Servo Motors | Easy |
| 12 | **What is the function of the yellow wire on a servo motor?** | It is the signal pin, providing control signals from the board to the motor. | Servo Motors | Easy |
| 13 | **What special library needs to be installed for integrating a servo motor with Arduino?** | The Servo library (Servo.h). | Arduino Programming | Easy |
| 14 | **How do you create an instance of a servo motor in an Arduino sketch?** | By declaring `Servo myservo;` or `Servo servodemo;`. | Arduino Programming | Easy |
| 15 | **What is the purpose of the `attach()` function for a servo instance?** | It attaches the servo instance to a specific pin number on the Arduino board before it can be used in the code. | Arduino Programming | Medium |
| 16 | **In which part of the Arduino sketch (setup or loop) is `servodemo.attach()` typically called?** | Within the `setup()` function. | Arduino Programming | Easy |
| 17 | **What is the purpose of the `write()` function for a servo instance?** | It takes degree values (0-180) and rotates the motor accordingly. | Arduino Programming | Easy |
| 18 | **What are the three common degree values used in the example code to demonstrate servo movement?** | 0 degrees, 90 degrees, and 180 degrees. | Arduino Programming | Easy |
| 19 | **How do you connect the ground wire of the servo to the Arduino board?** | Connect the dark wire (brown or black) to the ground pin on the Arduino board. | Hardware Interfacing | Easy |
| 20 | **How do you connect the power supply wire of the servo to the Arduino board?** | Connect the red wire to the 5V pin on the Arduino board. | Hardware Interfacing | Easy |
| 21 | **How do you connect the signal wire of the servo to the Arduino board?** | Connect the yellow wire to any digital input/output pin, such as pin 8, pin 10, or pin 12. | Hardware Interfacing | Easy |
| 22 | **What steps are necessary before uploading code to an Arduino board?** | Connect the board to the PC, set the port number, and select the correct board type. | Arduino IDE | Easy |
| 23 | **What is the purpose of 'verifying' the code in the Arduino IDE?** | To check for any errors in the code before uploading it to the board. | Arduino IDE | Easy |
| 24 | **What output would you expect from the example servo code that uses `write(0)`, `write(90)`, and `write(180)` with delays?** | The servo will first align itself to 0 degrees, wait one second, then go to 90 degrees, wait one second, and finally go to 180 degrees, looping this sequence. | Arduino Programming | Medium |
| 25 | **Why is it important to select the correct Arduino board type (e.g., ATmega2560 vs ATmega1280)?** | To ensure the code is compiled correctly for the specific microcontroller on the board, as there are various variations. | Arduino IDE | Easy |
| 26 | **What does `servodemo.write(0);` do?** | It repositions the servo motor to 0 degrees. | Arduino Programming | Easy |
| 27 | **What does `delay(1000);` do in the servo example code?** | It pauses the program execution for 1000 milliseconds (1 second). | Arduino Programming | Easy |
| 28 | **Name two other functions available in the Servo library besides `attach()` and `write()`.** | `knob`, `sweep`, `writeMicroseconds`, `read`, `attached`, `detached`. | Arduino Programming | Medium |
| 29 | **What is a common issue encountered during code upload if the board or port is not correctly selected?** | A compiler timeout or upload errors, indicated by messages like 'do time out'. | Arduino IDE | Easy |
| 30 | **What is the main advantage of a servo motor over a normal DC motor in applications requiring precise positioning?** | Servo motors provide very controlled motion and are able to perform much more efficiently, especially where high torque requirements are needed, due to their geared mechanism. | Servo Motors | Hard |

---

# Week 6

## Lecture 26: Introduction to Python Programming- I (Lecture 26)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What is a key reason Python is popular for IoT application development?** | It is a lightweight programming language, easy to learn, and supports various IoT development platforms like Raspberry Pi. | Python Introduction | Easy |
| 2 | **Name two advantages of Python for programmers.** | It is easy to learn, easy to write and read code, and does not require complex libraries for basic operations. | Python Advantages | Easy |
| 3 | **What does it mean that Python is considered a 'scripting language'?** | It is very easy to learn and use, allowing for quick execution and development, similar to other scripting languages. | Python Characteristics | Medium |
| 4 | **Is Python an open-source language? What benefit does this provide?** | Yes, it is open-source. This provides access to many libraries, collaborative work, and examples available online (e.g., GitHub). | Python Advantages | Easy |
| 5 | **Name two popular Python Integrated Development Environments (IDEs).** | Spyder, PyCharm, and IDLE are examples of Python IDEs. | Python Environment | Easy |
| 6 | **What is Anaconda in the context of Python?** | Anaconda is a Python distribution that includes a collection of various libraries and resources, making it useful for many applications. | Python Environment | Medium |
| 7 | **How do you print a statement in Python without needing to import libraries or define a main function?** | Use the `print()` function directly, e.g., `print("Hi welcome to python")`. | Basic Syntax | Easy |
| 8 | **What is Python's 'rigid indentation policy'?** | Python uses indentation (e.g., one tab space after a colon) to define blocks of code, such as within `if` statements or loops. | Basic Syntax | Medium |
| 9 | **Give an example of how indentation is used in an `if-else` statement.** | if condition:     statement_one     statement_two else:     statement_three | Basic Syntax | Medium |
| 10 | **Name the five data types mentioned in the lecture.** | Numbers, Strings, List, Tuple, Dictionary. | Data Types | Easy |
| 11 | **How can you assign an integer, a float, and a string to variables `x`, `y`, and `z` respectively in a single line?** | x, y, z = 10, 10.2, "python" | Data Types - Numbers | Medium |
| 12 | **What is the difference between using single quotes and double quotes for strings in Python?** | There is no significant difference; they can be used interchangeably. | Data Types - Strings | Easy |
| 13 | **How do you access the first character of a string variable `my_string`?** | `my_string[0]` | Data Types - Strings | Easy |
| 14 | **If `x = "This is Python"`, what would `x[2:4]` return?** | `"is"` (index 2 is 'i', index 3 is 's', index 4 is excluded). | Data Types - Strings | Medium |
| 15 | **Define a Python `list` data type.** | A list is an ordered sequence of items that can contain heterogeneous elements (e.g., integers, floats, strings) and is mutable. | Data Types - List | Medium |
| 16 | **Define a Python `tuple` data type.** | A tuple is an ordered sequence of items which, once created, cannot be changed or modified (it is immutable). | Data Types - Tuple | Medium |
| 17 | **What is a Python `dictionary` used for?** | A dictionary is an unordered collection of key-value pairs, used to contain a huge amount of data. | Data Types - Dictionary | Medium |
| 18 | **What is the syntax for an `elif` statement in Python?** | elif condition:     statement_one     statement_two (with proper indentation) | Control Statements | Easy |
| 19 | **How do you write a basic `while` loop in Python?** | while condition:     statement_one     statement_two (with proper indentation) | Control Statements | Easy |
| 20 | **Explain the purpose of the `break` statement in a loop.** | The `break` statement is used to exit the current loop prematurely. | Control Statements | Easy |
| 21 | **Explain the purpose of the `continue` statement in a loop.** | The `continue` statement skips the rest of the current iteration of the loop and proceeds to the next iteration. | Control Statements | Easy |
| 22 | **Why is it advisable to define functions in a large Python program?** | To modularize the code, make it easier to understand, and allow for reusability of code blocks, reducing confusion. | Functions | Medium |
| 23 | **What is the basic syntax for defining a function in Python without a return value?** | def function_name(arguments):     statement_one     statement_two (with indentation) | Functions | Easy |
| 24 | **How do you define a function that returns a value in Python?** | def function_name(arguments):     # operations     return value | Functions | Easy |
| 25 | **What is a 'global variable' in Python?** | A variable that is accessible all across the code, both outside and inside functions. | Variable Scope | Medium |
| 26 | **What is a 'local variable' in Python?** | A variable that is declared only inside a function and cannot be accessed from outside that function. | Variable Scope | Medium |
| 27 | **How do you import an entire module named `random` in Python?** | `import random` | Modules | Easy |
| 28 | **How do you import only the `pi` constant from the `math` module?** | `from math import pi` | Modules | Easy |
| 29 | **What is the primary purpose of `try-except` blocks in Python?** | To handle exceptions or errors gracefully during program execution, preventing crashes and providing debugging information. | Exception Handling | Medium |
| 30 | **Provide a simple `try-except` example for handling a `ValueError` when converting user input to an integer.** | try:     n = int(input()) except ValueError:     print("Not a valid integer") | Exception Handling | Hard |

---

## Lecture 27: Introduction to Python Programming- II (Lecture 27)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What are the three basic steps for file operations in Python?** | Opening a file, performing read/write operations, and closing the file. | File I/O | Easy |
| 2 | **What is the purpose of the `open()` function in Python file handling?** | To open a file and return a file object. | File I/O | Easy |
| 3 | **List the four common modes for opening a file in Python.** | 'r' (read), 'w' (write), 'a' (append), and 'r+' (read and write). | File I/O | Medium |
| 4 | **How do you read the entire content of a file into a variable in Python?** | Using `file_object.read()`. | File I/O | Easy |
| 5 | **How do you write a string to a file in Python?** | Using `file_object.write("your string here")`. | File I/O | Easy |
| 6 | **Why is it important to close a file after performing operations in Python?** | To release the file handle and ensure data integrity. | File I/O | Medium |
| 7 | **What is the advantage of using the `with open(...) as file:` statement for file operations?** | It automatically handles closing the file, even if errors occur. | File I/O | Medium |
| 8 | **What does CSV stand for, and how are values typically separated in a CSV file?** | Comma Separated Values; values are separated by a comma. | File I/O (CSV) | Easy |
| 9 | **Which Python library is typically imported for handling CSV files?** | The `csv` library. | File I/O (CSV) | Easy |
| 10 | **What happens if you open a file in 'w' (write) mode and the file does not already exist?** | The system will automatically create that file. | File I/O | Easy |
| 11 | **How do you specify a delimiter other than a comma when writing to a CSV file using the `csv` module?** | Pass the `delimiter` argument to `csv.writer()`, e.g., `csv.writer(csv_file, delimiter=';')`. | File I/O (CSV) | Medium |
| 12 | **What is the primary purpose of Python's `socket` module?** | To provide network services, allowing implementation of clients and servers. | Networking | Easy |
| 13 | **What are the two main types of network protocols supported by Python's socket module?** | TCP/IP (connection-oriented) and UDP (connectionless). | Networking | Easy |
| 14 | **What is the general syntax for creating a socket object in Python?** | `socket.socket(socket_family, socket_type, protocol)`. | Networking | Medium |
| 15 | **What does `AF_INET` represent in the context of socket families?** | It stands for all internet protocols (IPv4). | Networking | Medium |
| 16 | **Distinguish between `SOCK_STREAM` and `SOCK_DGRAM` socket types.** | `SOCK_STREAM` is for TCP (connection-oriented), while `SOCK_DGRAM` is for UDP (connectionless). | Networking | Medium |
| 17 | **What is the default value for the `protocol` argument when creating a socket?** | 0. | Networking | Easy |
| 18 | **What is the function of `sock.bind(server_address)` in a server application?** | It associates the socket with a specific network interface and port number. | Networking | Medium |
| 19 | **What does `sock.listen()` do in a server application?** | It initializes the listening part, indicating that the server is expecting connections from clients. | Networking | Medium |
| 20 | **How does a UDP client send data to a server using Python sockets?** | Using `sock.sendto(message, server_address)`. | Networking | Medium |
| 21 | **What is a common loopback IP address used for local testing?** | `127.0.0.1`. | Networking | Easy |
| 22 | **How does a UDP server receive data from a client?** | Using `sock.recv(buffer_size)`, which returns the data and the client address. | Networking | Medium |
| 23 | **What does PIL stand for, and what is its modern successor for Python 3?** | Python Imaging Library; its successor is Pillow. | Image Processing | Easy |
| 24 | **How do you install the Pillow library using pip?** | `sudo pip install pillow`. | Image Processing | Easy |
| 25 | **How do you import the `Image` module from the Pillow library?** | `from PIL import Image`. | Image Processing | Easy |
| 26 | **What function is used to open an image file in Pillow?** | `Image.open("image_name.jpg")`. | Image Processing | Easy |
| 27 | **How do you display an image opened with Pillow?** | `image_object.show()`. | Image Processing | Easy |
| 28 | **Which Pillow function is used to change the size of an image?** | `image_object.resize((width, height))`. | Image Processing | Medium |
| 29 | **How do you convert an RGB image to grayscale using Pillow?** | Using `image_object.convert('L')`, where 'L' stands for grayscale. | Image Processing | Medium |
| 30 | **What function is used to save a modified image in Pillow?** | `image_object.save("new_image_name.png")`. | Image Processing | Easy |

---

## Lecture 28: Introduction to Raspberry Pi- I (Lecture 28)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What is a key advantage of Raspberry Pi over Arduino in terms of processing power?** | Raspberry Pi is more powerful in computation or processing power. | Raspberry Pi vs. Arduino | Easy |
| 2 | **How does Raspberry Pi's memory capacity compare to Arduino's?** | Raspberry Pi has better memory capacity. | Raspberry Pi vs. Arduino | Easy |
| 3 | **For what type of sensors is Raspberry Pi particularly attractive due to its processing capabilities?** | Sensors which require more processing, for example, imaging sensors and multimedia sensors. | Raspberry Pi vs. Arduino | Medium |
| 4 | **What is a significant trade-off when choosing Raspberry Pi over Arduino, besides power consumption?** | The cost of purchasing Raspberry Pi is generally more than the cost of Arduino. | Raspberry Pi vs. Arduino | Medium |
| 5 | **In an IoT application, when would Raspberry Pi be a better option than Arduino for a node?** | If the requirement is for the node to act as a server. | Raspberry Pi vs. Arduino | Medium |
| 6 | **What is Raspberry Pi commonly described as in simple terms?** | A micro-sized computer or a 'computer in your palm'. | Raspberry Pi Basics | Easy |
| 7 | **What specific type of computer is Raspberry Pi classified as?** | A single board computer (SBC). | Raspberry Pi Basics | Easy |
| 8 | **Name two reasons why Raspberry Pi has become popular for IoT and hobby electronics.** | It is a very low-cost device and very easy to access. | Raspberry Pi Basics | Easy |
| 9 | **What is the newest common variant of Raspberry Pi mentioned in the lecture?** | Raspberry Pi 3 Model B. | Raspberry Pi Variants | Easy |
| 10 | **What is the RAM capacity of Raspberry Pi 3 Model B and Pi 2 Model B?** | Both have 1 GB RAM. | Raspberry Pi Variants | Easy |
| 11 | **What is the RAM capacity of Raspberry Pi Zero?** | 512 MB. | Raspberry Pi Variants | Easy |
| 12 | **What is the CPU type and approximate processing speed of Raspberry Pi 3 Model B?** | Quad-core Cortex A53 processor, approximately 1.2 GHz. | Raspberry Pi Variants | Medium |
| 13 | **Which common Raspberry Pi variant lacks built-in Ethernet and WiFi?** | Raspberry Pi Zero. | Raspberry Pi Variants | Medium |
| 14 | **What is the primary video output port on a Raspberry Pi?** | HDMI port. | Raspberry Pi Hardware | Easy |
| 15 | **What do the initials GPIO stand for in the context of Raspberry Pi?** | General Purpose Input Output pins. | Raspberry Pi Hardware | Easy |
| 16 | **How many GPIO pins are typically available on a Raspberry Pi?** | 40 GPIO pins. | Raspberry Pi Hardware | Easy |
| 17 | **What is the main function of the memory card in a Raspberry Pi?** | It actually holds the OS (Operating System) of the Raspberry Pi. | Raspberry Pi Hardware | Easy |
| 18 | **Name three types of physical ports found on a Raspberry Pi 3 Model B.** | HDMI port, USB ports, Ethernet port, Power adapter port, Sound card output. (Any three) | Raspberry Pi Hardware | Easy |
| 19 | **What dual function can Raspberry Pi GPIO pins serve?** | They can act as both digital output and digital input. | GPIO | Easy |
| 20 | **What are the basic components required for the initial setup of a Raspberry Pi?** | External monitor, HDMI cable, keyboard and mouse, 5V adapter, LAN cable, and a memory card with the OS. | Initial Setup | Medium |
| 21 | **Name two official operating system distributions for Raspberry Pi.** | Raspbian and NOOBS. | Operating Systems | Easy |
| 22 | **What software is recommended for writing a Raspbian image onto an SD card on a Windows system?** | Win32 Disk Imager. | OS Installation | Easy |
| 23 | **What is the default username and password for remotely logging into a Raspberry Pi system?** | Username: pi, Password: raspberry. | Remote Access | Easy |
| 24 | **What command is used to check the IP address of the Raspberry Pi from its terminal?** | ip config. | Remote Access | Medium |
| 25 | **What is the purpose of the 'Expand File System' option in the Raspberry Pi configuration?** | To expand the compressed OS image to cover the maximum capacity of the memory card, providing more space. | Configuration | Medium |
| 26 | **What does SSH stand for, and why is it enabled on Raspberry Pi?** | Secure Shell login; it allows remote access to the Raspberry Pi over the network from any remote PC. | Configuration | Medium |
| 27 | **Name three programming languages that come pre-installed or are easily usable with Raspberry Pi.** | Python (2/3), Scratch, BlueJ (Java), C, C++, Ruby. (Any three) | Programming | Easy |
| 28 | **List two popular applications of Raspberry Pi in home environments.** | Home automation systems and home monitoring (as a lightweight web server for IoT). | Applications | Easy |
| 29 | **How can a Raspberry Pi be used as a lightweight web server for IoT?** | It can act as a server for IoT devices to upload data, and can run various analytics on that data. | Applications | Medium |
| 30 | **What is a key difference in power consumption between Raspberry Pi and Arduino?** | Raspberry Pi has more power consumption compared to Arduino due to its higher computation capabilities. | Raspberry Pi vs. Arduino | Medium |

---

## Lecture 29: Introduction to Raspberry Pi- II (Lecture 29)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What is the primary programming language used for integrating sensors and devices with Raspberry Pi in this lecture?** | Python | Raspberry Pi Setup & Tools | Easy |
| 2 | **What is the purpose of using SSH with Raspberry Pi?** | To execute and run various programs remotely from any PC. | Raspberry Pi Setup & Tools | Easy |
| 3 | **What is the easier way to transfer files to/from Raspberry Pi compared to SSH?** | Using an FTP client. | Raspberry Pi Setup & Tools | Easy |
| 4 | **Name a preferred FTP client mentioned for file transfer with Raspberry Pi.** | FileZilla | Raspberry Pi Setup & Tools | Easy |
| 5 | **In FileZilla, what do the left-hand and right-hand panels generally show?** | Left-hand panel shows local PC contents, right-hand panel shows remote PC contents. | Raspberry Pi Setup & Tools | Medium |
| 6 | **What is the default port used for FTP connections to Raspberry Pi?** | Port 22 | Raspberry Pi Setup & Tools | Easy |
| 7 | **What is a common practice for programming larger projects on Raspberry Pi to avoid cumbersome direct programming?** | Program everything on a local PC, then transfer the eventual files into the Raspberry Pi for minor configurations. | Raspberry Pi Setup & Tools | Medium |
| 8 | **List the basic hardware requirements for a blinking LED project with Raspberry Pi.** | Raspberry Pi (connected to network), LED, 100 ohm resistor, breadboard, and a few jumper cables. | Blinking LED Project - Hardware | Medium |
| 9 | **How is the Pi Camera connected to the Raspberry Pi, specifically regarding the ribbon wire orientation?** | The blue side of the ribbon wire should be pointed towards the Ethernet port. | Blinking LED Project - Hardware | Medium |
| 10 | **How do you identify the positive and negative terminals of a basic LED?** | The larger one is the positive terminal, and the smaller one is the negative terminal. | Blinking LED Project - Hardware | Easy |
| 11 | **What two Python libraries are required for connecting to GPIO terminals for the blinking LED project?** | The `python-dev` library and the `python-rpi.gpio` library. | Blinking LED Project - Software | Medium |
| 12 | **What command is used to install the `python-dev` library on Raspberry Pi?** | `sudo apt-get install python-dev` | Blinking LED Project - Software | Easy |
| 13 | **What command is used to install the `python-rpi.gpio` library on Raspberry Pi?** | `sudo apt-get install python-rpi.gpio` | Blinking LED Project - Software | Easy |
| 14 | **What command is used to open or create a Python file for editing in the terminal on Raspberry Pi?** | `sudo nano filename.py` (e.g., `sudo nano led_blink.py`) | Blinking LED Project - Software | Easy |
| 15 | **How do you save and exit the `nano` editor after writing code?** | Press `Control + O` to write the code, then `Control + X` to exit. | Blinking LED Project - Software | Medium |
| 16 | **What Python line imports the RPi.GPIO library?** | `import RPi.GPIO as GPIO` | Blinking LED Project - Software | Easy |
| 17 | **What Python line imports the time library for delay functions?** | `import time` | Blinking LED Project - Software | Easy |
| 18 | **How is the GPIO mode set to use board numbering in Python?** | `GPIO.setmode(GPIO.BOARD)` | Blinking LED Project - Software | Medium |
| 19 | **How do you set up GPIO pin 11 as an output pin in Python?** | `GPIO.setup(11, GPIO.OUT)` | Blinking LED Project - Software | Medium |
| 20 | **How do you send a high bit (turn on) to GPIO pin 11 in Python?** | `GPIO.output(11, True)` | Blinking LED Project - Software | Easy |
| 21 | **How do you send a low bit (turn off) to GPIO pin 11 in Python?** | `GPIO.output(11, False)` | Blinking LED Project - Software | Easy |
| 22 | **What Python function is used to introduce a delay (e.g., for 1 second)?** | `time.sleep(1)` | Blinking LED Project - Software | Easy |
| 23 | **What is the purpose of `GPIO.cleanup()` at the end of a GPIO script?** | To release the GPIO pins. | Blinking LED Project - Software | Medium |
| 24 | **How do you run a Python script named `pi_led_blink.py` from the terminal on Raspberry Pi?** | `python pi_led_blink.py` | Blinking LED Project - Software | Easy |
| 25 | **What dedicated slot on the Raspberry Pi is used for connecting the Pi Camera?** | CSI slot | Pi Camera Integration - Setup | Easy |
| 26 | **Where is the CSI slot for the Pi Camera located on the Raspberry Pi?** | Between the Ethernet port and the HDMI port. | Pi Camera Integration - Setup | Medium |
| 27 | **What command is used in the terminal to enable the camera option on Raspberry Pi?** | `sudo raspi-config` | Pi Camera Integration - Setup | Easy |
| 28 | **What terminal command is used to capture an image directly from the Pi Camera and save it as `image.jpeg`?** | `raspistill -o image.jpeg` | Pi Camera Integration - Software | Medium |
| 29 | **What Python library is needed to integrate the Pi Camera with Python?** | `picamera` (installed via `python-picamera`) | Pi Camera Integration - Software | Easy |
| 30 | **What are two key advantages of Raspberry Pi compared to regular computers mentioned in the lecture?** | It is very low on power requirements and quite cheap. | Raspberry Pi General | Easy |

---

## Lecture 30: Implementation of IoT with Raspberry Pi- I (Lecture 30)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What are the three main aspects of IoT implementation with Raspberry Pi covered in this lecture series?** | Integrating sensors, disseminating data (e.g., UDP to remote server), and visualizing data at the server. | IoT Overview | Easy |
| 2 | **What is the primary function of a sensor in an IoT system?** | To convert a physical or measurable quantity into electrical signals. | Sensors | Easy |
| 3 | **How do actuators function in an IoT system?** | They are electromechanical devices that convert energy into motion, primarily used for providing control motion to other components. | Actuators | Easy |
| 4 | **Name the key components required for the temperature-dependent auto-cooling system demonstrated.** | DHT sensor, 4.7 kOhm resistor, relay, jumper wires, Raspberry Pi, and a mini fan. | System Requirements | Medium |
| 5 | **Describe the pin configuration of a DHT sensor.** | Pin 1 for power (3.3-5V), Pin 2 for data, Pin 3 open, Pin 4 for ground. | DHT Sensor | Medium |
| 6 | **How is the DHT sensor connected to the Raspberry Pi's power and ground?** | Pin 1 of DHT to 3.3V power supply of Raspberry Pi, Pin 4 of DHT to ground pin on the Raspberry Pi. | DHT Sensor Connection | Easy |
| 7 | **Which Raspberry Pi pin configuration mode does the DHT sensor follow for its data pin?** | BCM configuration mode (e.g., Pin 7). | Raspberry Pi Modes | Medium |
| 8 | **What is a relay board, and what is its primary function?** | An electromechanical switch used to control higher power devices with a low-power signal from the Raspberry Pi. | Relay | Easy |
| 9 | **Name the three output terminals found on a sugar cube relay.** | NO (Normally Open), Common, and NC (Normally Close). | Relay | Medium |
| 10 | **How is the relay board connected to the Raspberry Pi for power and input signal?** | VCC pin of relay to 5V supply of Raspberry Pi, Ground to Ground of Raspberry Pi, Input signal to Pin 11. | Relay Connection | Medium |
| 11 | **Which Raspberry Pi pin configuration mode is used for connecting the relay's input signal?** | Board mode (e.g., Pin 11). | Raspberry Pi Modes | Medium |
| 12 | **What is the first step to install the Adafruit DHT library on Raspberry Pi?** | Use `git clone https://github.com/adafruit/Adafruit_Python_DHT.git` to download the repository. | Software Installation | Easy |
| 13 | **After cloning the Adafruit DHT repository, what command is used to navigate into the downloaded directory?** | `cd Adafruit_Python_DHT` | Software Installation | Easy |
| 14 | **What command is used to install the Adafruit DHT Python library after navigating to its directory?** | `sudo python setup.py install` | Software Installation | Easy |
| 15 | **What Python libraries are typically imported at the beginning of a DHT sensor program on Raspberry Pi?** | `Rpi.GPIO`, `time`, and `Adafruit_DHT`. | Python Programming | Medium |
| 16 | **How do you initialize the DHT sensor type (e.g., AM2302) in the Adafruit DHT Python library?** | `sensor = Adafruit_DHT.AM2302` (or `Adafruit_DHT.DHT22`, `Adafruit_DHT.DHT11`). | Python Programming | Medium |
| 17 | **What function is used to read humidity and temperature values from the DHT sensor using the Adafruit library?** | `Adafruit_DHT.read_retry(sensor_type, pin_number)` | Python Programming | Medium |
| 18 | **In the sample auto-cooling system, what was the basic decision-making logic for turning on the fan?** | If the temperature is greater than 20 degrees Celsius, the fan is turned on. | Decision Logic | Easy |
| 19 | **How is the mini fan connected to the relay for the auto-cooling system?** | The NO (Normally Open) terminal of the relay connects to the positive terminal of the fan, and the Common terminal of the relay connects to the positive terminal of the battery. | Circuitry | Hard |
| 20 | **What type of battery was used to power the mini fan in the demonstration?** | A 12-volt LiPo (Lithium Polymer) battery. | Circuitry | Easy |
| 21 | **What is the purpose of the `time.sleep()` function in the Python script for the auto-cooling system?** | To introduce a delay, for example, to keep the fan on for a specific duration before turning it off. | Python Programming | Easy |
| 22 | **What are the two main configuration modes for Raspberry Pi GPIO pins?** | Board mode and BCM mode. | Raspberry Pi Modes | Easy |
| 23 | **What is the significance of the `GPIO.setwarnings(False)` command?** | It disables warning messages from the RPi.GPIO library, often used to suppress warnings about channels already in use. | Python Programming | Medium |
| 24 | **What is the general principle behind the 'brief decision making loop' used in the system overview?** | Data is read from the sensor, and the actuator is controlled according to that reading. | System Overview | Easy |
| 25 | **What advanced methods could replace the basic decision-making loop for controlling actuators?** | Machine learning, statistical learning, or deep learning methods. | Advanced Concepts | Medium |
| 26 | **What protocol was mentioned for disseminating data through a network to a remote server?** | UDP (User Datagram Protocol). | Data Dissemination | Medium |
| 27 | **What is the purpose of the `import RPi.GPIO as GPIO` statement?** | To import the Raspberry Pi GPIO library and assign it the alias `GPIO` for easier use in the script. | Python Programming | Easy |
| 28 | **How can you visually confirm that a relay has been activated during the demonstration?** | A light (LED) blinks against the corresponding relay on the relay board. | Demonstration | Easy |
| 29 | **What is the primary goal of the 'temperature dependent auto cooling system' example?** | To automatically turn on a fan when the temperature exceeds a certain threshold, providing an automated cooling solution. | Application | Easy |
| 30 | **What is the term for a single unit on a relay board, often found in a 'sugar cube' form factor?** | A sugar cube relay. | Relay | Easy |

---

# Week 7

## Lecture 31 : Implementation of IoT with Raspberry Pi- II (Lecture 31)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What is the primary goal of the IoT implementation discussed in this lecture?** | To integrate a DHT sensor with Raspberry Pi and include networking components for remote data logging using a client-server model. | IoT Overview | Easy |
| 2 | **What networking model is used for data transmission between Raspberry Pi and the remote desktop?** | A client-server model using UDP (User Datagram Protocol) based sockets. | Networking | Easy |
| 3 | **What is the basic aim of the Internet of Things regarding devices?** | To create an interactive environment of networked devices, where more devices lead to a more intelligent and interactive system, maintaining performance. | IoT Concepts | Easy |
| 4 | **Describe the system overview for the remote data logging demonstration.** | A network of temperature and humidity sensors will be connected to Raspberry Pi, data from the sensors are read, sent to the server over the network, and the data is saved in the server. | System Architecture | Medium |
| 5 | **List the essential hardware requirements for this IoT implementation.** | A Raspberry Pi, a DHT sensor, a 4.7 kOhm resistor, and jumper wires. | Hardware | Easy |
| 6 | **What is the purpose of the 4.7 kOhm resistor in the DHT sensor setup with Raspberry Pi?** | It must be connected between the VCC and the data pin (pin one and two) of the DHT sensor. | Hardware Connection | Medium |
| 7 | **Identify the function of the second pin of the DHT sensor when viewed from left to right with the grid side up.** | The second pin is used for transmitting data. | DHT Sensor | Easy |
| 8 | **To which Raspberry Pi pin is the VCC pin of the DHT sensor connected?** | The 3.3 volt pin of the Raspberry Pi. | DHT Connection | Easy |
| 9 | **Which Raspberry Pi pin (in BCM mode) is connected to the data pin (pin 2) of the DHT sensor?** | Pin 11 of the Raspberry Pi. | DHT Connection | Medium |
| 10 | **To which Raspberry Pi pin is the ground pin (pin 4) of the DHT sensor connected?** | The ground pin of the Raspberry Pi. | DHT Connection | Easy |
| 11 | **What GPIO mode must be used for the DHT sensor connection in this setup?** | The board configuration for this DHT sensor must be in BCM mode, not in board mode. | Raspberry Pi GPIO | Medium |
| 12 | **Which Python library is used to integrate the DHT22 sensor with Raspberry Pi?** | The Adafruit_DHT library, provided by Adafruit which supplies the DHT22 sensor. | Software Libraries | Easy |
| 13 | **What specific function from the Adafruit_DHT library is used to read data from the sensor?** | The `adafruit_dht.read_retry` function. | Python Programming | Medium |
| 14 | **What is the general purpose of sockets in network communication?** | Sockets generally create a two-way communication between two nodes in a network, one node termed as the server and the other as the client. | Socket Programming | Easy |
| 15 | **What Python function is used to create a socket?** | The `socket.socket` function. | Socket Programming | Easy |
| 16 | **Name the three arguments of the `socket.socket()` function.** | Socket family, socket type, and protocol (which is by default zero). | Socket Programming | Medium |
| 17 | **Which socket family is typically used for general-purpose internet protocols?** | `AF_INET` (Internet protocols). | Socket Programming | Medium |
| 18 | **Which socket type is used for UDP-based communication (datagrams)?** | `SOCK_DGRAM` (socket datagram). | Socket Programming | Medium |
| 19 | **What is a critical requirement for the server's IP address in a client-server model?** | It is important that your server retain a singular IP address. | Networking | Medium |
| 20 | **What information must each client be aware of to connect to the server?** | Each and every client should be aware of the server's IP address as well as the port to which the client is going to connect. | Networking | Medium |
| 21 | **What function is used by the server to associate its socket with a specific host and port?** | The server binds to the port by calling the host name as the first argument and the port number as the second argument. | Server-Side Socket | Medium |
| 22 | **After binding, what function does a server call to wait for client connections?** | The server starts its listening function which waits for a client to connect to it. | Server-Side Socket | Medium |
| 23 | **What does the `accept()` function return when a client connects to the server?** | While a client has accepted the connection and connected to your server on that particular port, it will generate one address. | Server-Side Socket | Hard |
| 24 | **What function does the client use to establish a connection to the server's IP address and port?** | The client uses `s.connect()` to connect to that particular IP address of that server on that particular port. | Client-Side Socket | Medium |
| 25 | **In the UDP client code, which function is used to send data to the server address?** | The data is transmitted over the socket to that particular server address using `sendto()`. | Client-Side Socket | Medium |
| 26 | **In the UDP server code, which function is used to receive data and the sender's address?** | The data and address will be received from the socket using `recvfrom()`. | Server-Side Socket | Medium |
| 27 | **In what mode should the `data_log.txt` file be opened on the server to prevent overwriting previous data?** | The file should be opened in append mode so that your data keeps on appending onto the same file again and again without overwriting the previous data. | Server-Side Data Handling | Medium |
| 28 | **How is the humidity and temperature data formatted when sent from the client to the server?** | The humidity and temperature data are formatted in the terms of a string (e.g., '74.3,25.7'). | Data Transmission | Medium |
| 29 | **What happens if the `data_log.txt` file does not exist when the server starts receiving data?** | The server automatically creates another `data_log.txt` file. | Server-Side Data Handling | Easy |
| 30 | **Can multiple Raspberry Pis with sensors send data to a single server in this setup?** | Yes, you can obviously include multiple Raspberry Pis and multiple sensors all sending data to this particular server or a single IP at the port. | Scalability | Easy |

---

## Lecture 32 : Implementation of IoT with Raspberry Pi- III (Lecture 32)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What is the primary focus of this lecture (Part III) regarding IoT implementation with Raspberry Pi?** | Focusing more on the server side, that is once the data has arrived what exactly can be done with the data. | IoT System Overview | Easy |
| 2 | **What is the overall goal of the system discussed in these lectures?** | Creating an interactive environment using a network of connected devices and remote data logging. | IoT System Overview | Easy |
| 3 | **What are the two main processing locations for data in the described IoT system?** | The data may be processed on the client side as well as it may be processed on the server side itself. | IoT System Overview | Easy |
| 4 | **What is the initial step in the system overview for this demonstration?** | Start off with a network of temperature and humidity sensors connected with Raspberry Pi board. | IoT System Overview | Easy |
| 5 | **What is the pin configuration for connecting the DHT sensor to the Raspberry Pi for power and ground?** | DHT Pin 1 is connected to power, DHT Pin 4 to ground. | Hardware & Setup | Easy |
| 6 | **Which Raspberry Pi pin is connected to the data pin (Pin 2) of the DHT sensor?** | Pin 2 of DHT is connected to Pin 11 of the Raspberry Pi. | Hardware & Setup | Medium |
| 7 | **What Python library is used for interfacing with the DHT sensor?** | The Adafruit Python library for this DHT sensor. | Hardware & Setup | Easy |
| 8 | **What is the role of the `iotsr.py` file in the client-server architecture?** | This `iotsr.py` file is kept on the Raspberry Pi and when you remotely run this file it will generate a temperature and humidity value. | Client-Server Communication | Easy |
| 9 | **In the client-server architecture, which device acts as the client and which acts as the server?** | We create a client server architecture and establish connection between one client device and a desktop which acts as the server device. | Client-Server Communication | Easy |
| 10 | **Where is the data received from the client stored on the server?** | Successive data will be incoming into the server and get stored into a log file. | Client-Server Communication | Easy |
| 11 | **Why is data processing (splitting, filtering) necessary when dealing with data from multiple sensors?** | There may be chances of data corruption, incomplete data, server not able to receive the whole data, or data may not be properly formatted. | Data Processing Necessity | Medium |
| 12 | **What is the purpose of filtering data?** | You need to filter the data to create a seamless and well structured database. | Data Processing Necessity | Easy |
| 13 | **Why is data splitting important if you have multiple sensors connected to a single node?** | If we need to access individual data, suppose you only need to access the temperature value from multiple sensor readings. | Data Processing Necessity | Medium |
| 14 | **What common file format is used for saving data from the client where values are separated by a comma?** | This is called a CSV or comma separated value file. | Data Splitting (Python) | Easy |
| 15 | **What is the basic inbuilt Python function used to split a string into multiple strings based on a separator?** | We will be using this basic inbuilt function of Python called split. | Data Splitting (Python) | Easy |
| 16 | **How would you split the string 'sunday,monday,tuesday' using the comma as a delimiter in Python?** | When we call this `data.split` function and we specify the delimiter in the arguments, you will see the result will be individual substrings. | Data Splitting (Python) | Easy |
| 17 | **If you use `data.split('4')` on the string '123432454abc4rt', what would be the resulting substrings?** | You have one two three then you have three two then you have five then abc then a blank since it has two fours so it includes a blank and then rt. | Data Splitting (Python) | Hard |
| 18 | **What powerful library is supported by both Python and MATLAB for data plotting?** | Both of these support a very powerful library called matplotlib. | Data Plotting (Matplotlib Basics) | Easy |
| 19 | **How do you typically import the `pyplot` module from `matplotlib` in Python?** | Import matplotlib.pyplot as maybe a variable (e.g., `plt`). | Data Plotting (Matplotlib Basics) | Easy |
| 20 | **What are the basic `matplotlib` commands for plotting 2D data, labeling the x-axis, and showing the plot?** | You write `plot x comma y`, `x lable` gives labels on the plot for the x axis, and `show` function shows the plot. | Data Plotting (Matplotlib Basics) | Easy |
| 21 | **Which `matplotlib` function is used to add a title to the entire plot?** | `title` gives title to the whole plot. | Data Plotting (Matplotlib Basics) | Easy |
| 22 | **What `matplotlib` function enables or disables an access grid on the plot?** | `grid` it enabled or disabled an access grid on the plot. | Data Plotting (Matplotlib Basics) | Easy |
| 23 | **Which `matplotlib` function is generally used for animations by enabling interactive plot mode?** | `ion` is the interactive plot mode, this is generally used for animations. | Data Plotting (Matplotlib Basics) | Medium |
| 24 | **What is the purpose of the `coverage_plot` function on the server side?** | It animatedly plots whatever data is incoming into the server over the socket. | Server-Side Plotting Implementation | Easy |
| 25 | **How is the `plotting function` (e.g., `coverage_plot`) called on the server side to handle incoming data?** | This plotting function is being called again and again basically iteratively within this loop. | Server-Side Plotting Implementation | Medium |
| 26 | **After splitting the incoming data (e.g., 'h,t') on the server, which element typically represents humidity and which represents temperature?** | After splitting, since the data was in a csv format, so after splitting the zeroth element becomes humidity and the first element is temperature. | Server-Side Plotting Implementation | Easy |
| 27 | **What `matplotlib` command is used within the `coverage_plot` function to prevent new windows from being created for each plot update?** | You set the figure to similar number as number one otherwise it will keep on creating new windows every time it plots something new. | Server-Side Plotting Implementation | Medium |
| 28 | **What is the function of `fig.canvas.draw()` in the server-side plotting code?** | `figure.canvas.draw` it redraws the image without overwriting the previous parts. | Server-Side Plotting Implementation | Medium |
| 29 | **What is a key benefit of designing the IoT architecture such that only server-side scripts need to be changed for new functionality?** | This thing will help save you a lot of effort you don't need to individually code the clients. | Server-Side Plotting Implementation | Easy |
| 30 | **What happens to the data logging and plotting when the client program is manually stopped?** | The client program has been stopped manually and this data logging stops. | Client-Server Communication | Easy |

---

## Lecture 33 : Software Defined Networking- Part- I (Lecture 33)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What is the primary goal of Software Defined Networking (SDN)?** | To transform or restructure the existing network infrastructure in an efficient manner. | SDN Basics | Easy |
| 2 | **What is a key limitation of current day networks regarding network view?** | Each switch does not have a global view of the network as a whole. | Traditional Network Limitations | Easy |
| 3 | **In traditional networks, what happens if a switch goes down and there is no centralized control?** | Finding an alternate route becomes a difficult task, as there is no centralized entity that can take care of it. | Traditional Network Limitations | Medium |
| 4 | **What are the three layers typically run on each switch in a traditional network?** | Hardware, Operating System (OS), and Applications. | Traditional Network Limitations | Easy |
| 5 | **What is the core idea of SDN to overcome traditional network limitations?** | To separate the application and operating system from the hardware. | SDN Core Concept | Easy |
| 6 | **When did the idea of Software Defined Network (SDN) originate?** | In 2008, with the OpenFlow project. | SDN History | Medium |
| 7 | **What was the name of the clean slate security architecture proposed by Stanford in 2006, which aimed for centralized security policies?** | SANE. | SDN History | Medium |
| 8 | **What is the primary separation in the SDN architecture?** | Separation of the data plane from the control plane. | SDN Architecture | Easy |
| 9 | **What concept makes the separation of data and control planes possible in SDN?** | Network Function Virtualization (NFV). | SDN Architecture | Medium |
| 10 | **Name the three different planes in the SDN architecture.** | Data plane, control plane, and application plane. | SDN Architecture | Easy |
| 11 | **What is the Northbound API in SDN?** | The interface between the control plane and the application plane. | SDN Architecture | Medium |
| 12 | **What is the Southbound API in SDN?** | The interface between the forwarding (data plane) and the control plane. | SDN Architecture | Medium |
| 13 | **Which protocol currently supports the Southbound API in SDN?** | The OpenFlow protocol. | SDN Architecture | Easy |
| 14 | **What is one of the key attributes of SDN regarding control logic?** | The control logic is defined in a centralized manner. | SDN Concepts | Easy |
| 15 | **List two main challenges when implementing SDN in any network.** | The Rule Placement Problem and the Controller Placement Problem. | SDN Challenges | Medium |
| 16 | **In SDN, what replaces routing tables in switches?** | Flow tables. | Rule Placement Problem | Easy |
| 17 | **Who defines the flow rules in SDN?** | The centralized controller. | Rule Placement Problem | Easy |
| 18 | **Where are flow tables stored in SDN switches?** | In Ternary Content Addressable Memory (TCAM). | Rule Placement Problem | Hard |
| 19 | **What are the characteristics of TCAM memory in SDN switches?** | It is limited in size, very expensive, and allows for very fast processing. | Rule Placement Problem | Medium |
| 20 | **What message does a switch send to the controller if no flow rule is present for a received request?** | A 'Packet In' message. | Rule Placement Problem | Medium |
| 21 | **What is the typical delay involved in placing a new rule in an SDN switch after a 'Packet In' message?** | Three to five milliseconds. | Rule Placement Problem | Medium |
| 22 | **What is one challenge related to defining rules in SDN to minimize communication with the controller?** | How to define the rules so that less number of 'Packet In' messages are sent to the controller. | Rule Placement Problem | Hard |
| 23 | **Are the fields in an OpenFlow rule fixed or configurable?** | The fields are fixed in a particular version of OpenFlow. | OpenFlow Protocol | Medium |
| 24 | **Describe the 'Hard Time Out' mechanism for flow rules in SDN.** | All rules are deleted from the switch at a particular hard time, which can be done by resetting the switch for example. | Flow Rule Timeouts | Medium |
| 25 | **Describe the 'Soft Time Out' mechanism for flow rules in SDN.** | If no flow is received associated with a particular rule for a timeout interval of time, then this particular rule is deleted. | Flow Rule Timeouts | Medium |
| 26 | **What is the fundamental difference between SDN and OpenFlow?** | SDN is a technology or a concept, while OpenFlow is a protocol that is used to communicate between the data plane and control plane. | SDN vs OpenFlow | Hard |
| 27 | **Name two popular open-source software implementations for OpenFlow switches.** | Indigo, LINC, Pantou, or Open vSwitch. | OpenFlow Implementations | Medium |
| 28 | **How does SDN help in minimizing operational costs and delays?** | Operation cost and delay that are caused due to link failure can be significantly minimized using SDN. | SDN Benefits | Easy |
| 29 | **What kind of memory is required for flow tables in SDN switches due to its speed?** | Ternary Content Addressable Memory (TCAM). | Rule Placement Problem | Medium |
| 30 | **What is the role of the centralized controller in SDN regarding flow rules?** | The controller basically takes care of defining the flow rules based on which the streams of packets that are coming to each of the switches are processed. | SDN Controller | Easy |

---

## Lecture 34 : Software Defined Networking- Part- II (Lecture 34)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What is the primary protocol used for the Southbound API communication in SDN?** | OpenFlow protocol. | SDN Architecture | Easy |
| 2 | **What is the purpose of the Northbound API in SDN?** | To communicate between the control layer and the application layer. | SDN Architecture | Easy |
| 3 | **What is the 'east westbound API' concept in SDN?** | This terminology comes into picture when we are talking about not a single controller but multiple controllers in the control layer. | SDN Architecture | Medium |
| 4 | **What is the main function of controllers in SDN regarding flow rules?** | Controllers define the flow rule according to the application specific requirements. | SDN Controller | Easy |
| 5 | **What is the typical delay for rule placement in a switch's flow table if not already existing?** | About three to five milliseconds. | Rule Placement | Medium |
| 6 | **Why is minimizing rule placement delay important in SDN?** | Otherwise, there will be a huge control overhead and control-linked delay. | Rule Placement | Medium |
| 7 | **Approximately how many requests can a single-threaded SDN controller handle per second?** | Roughly about 200 requests in a second. | SDN Controller Performance | Medium |
| 8 | **Describe the logical connection between an SDN controller and switches.** | The controllers are logically connected to the switches in a one-hop distance, though physically they can be multiple hops away. | SDN Controller | Easy |
| 9 | **What is the basic characteristic of a 'flat architecture' for controller placement?** | The switch and the controller are just logically one hop away. The switch sends a 'packet in' message to the controller if it doesn't have the flow rule. | Controller Architectures | Medium |
| 10 | **How does a 'hierarchical or tree architecture' arrange SDN controllers?** | Controllers are placed hierarchically and connected to different switches in a tree-like fashion. | Controller Architectures | Easy |
| 11 | **What is a key characteristic of the 'ring architecture' for SDN controller placement?** | Controllers are placed in a ring-like fashion, but a particular switch is connected to only one controller in this version. | Controller Architectures | Medium |
| 12 | **What is the primary benefit of using a 'mesh architecture' for SDN controller placement?** | It increases reliability and improves the fault tolerance of the network. | Controller Architectures | Medium |
| 13 | **Differentiate between 'distributed' and 'centralized' control decisions in SDN.** | Distributed: Each sub-network is controlled by a different controller. Centralized: A network is controlled by a single controller. | Control Decisions | Medium |
| 14 | **What is the role of a 'backup controller' in SDN?** | If the primary controller is down, the backup controller takes over, having a replica of the main controller to ensure uninterrupted network management. | Control Decisions | Easy |
| 15 | **How can SDN enhance network security?** | One can have enhanced level of security in the network by taking help of firewall, proxy, HTTP, and IDS. | SDN Security | Medium |
| 16 | **What is the difference between a simulator and an emulator for SDN experimentation?** | Simulators simulate the entire thing (packet flows, network, nodes). Emulators can be connected to the real network where real traffic can flow through. | SDN Experimentation | Medium |
| 17 | **Name a popular software used to create virtual networks with OpenFlow-enabled switches for SDN experimentation.** | Mininet. | SDN Experimentation Tools | Easy |
| 18 | **Which programming language does Mininet run on?** | Python. | SDN Experimentation Tools | Easy |
| 19 | **Name two popular controller configuration software used in SDN.** | OpenDaylight and ONOS (also POX, NOX, Floodlight). | SDN Experimentation Tools | Easy |
| 20 | **What is the core motivation behind SDN?** | To separate out the control logic from the data logic (data plane) to make the network efficient. | SDN Basics | Easy |
| 21 | **What is a significant trade-off or challenge in SDN regarding control messages?** | More number of control packets are going to flow through the network, increasing control message overhead. | SDN Challenges | Medium |
| 22 | **What two particular issues does the performance of SDN primarily depend on?** | The rule placement and the controller placement in the network. | SDN Performance | Medium |
| 23 | **What is the goal of 'unified network management' in SDN?** | To have an unified network management architectural framework using SDN while leveraging the global view of the network. | SDN Benefits | Medium |
| 24 | **What is the next topic to be discussed after this lecture on SDN?** | How SDN can be used in IoT to make the Internet of Things efficient. | Future Directions | Easy |
| 25 | **What is the role of the control plane in SDN?** | The control logic is separated out to the control plane, which knows what has to be done with a particular flow and controls the overall flow in the network. | SDN Architecture | Easy |
| 26 | **What does a switch do when it receives a packet for which it doesn't have a flow rule?** | It will send a 'packet in' message to the controller. | OpenFlow Protocol | Easy |
| 27 | **What is the main limitation of TCAM memory in the context of rule placement?** | TCAM memory has limitations, which is a trade-off with delay in rule placement. | Rule Placement | Medium |
| 28 | **What kind of applications are now possible for SDN controllers beyond single-threaded ones?** | Multi-threaded applications. | SDN Controller Performance | Easy |
| 29 | **In the context of SDN security, what is 'policy enforcement'?** | Implementing a sequence of flow instructions for a policy chain, such as firewall, IDS, and proxy, to control traffic. | SDN Security | Hard |
| 30 | **What is the primary difference between a remote controller and a local controller in SDN experimentation?** | A remote controller can be situated in a remote place and communicated using IP address and port number, while a local controller is situated locally. | SDN Experimentation | Medium |

---

## Lecture 35 : Software Defined IoT Networking- Part- I (Lecture 35)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What is one fundamental problem solved by integrating SDN into IoT?** | Intelligent routing decision making. | SDN-IoT Integration | Easy |
| 2 | **How does SDN simplify information handling in IoT?** | It simplifies information collection, analysis, and decision making. | SDN-IoT Integration | Easy |
| 3 | **What aspect of network management is improved by SDN in IoT?** | Visibility of network resources and simplified network management based on user/application requirements. | SDN-IoT Integration | Medium |
| 4 | **What kind of analysis and decision-making is enhanced by SDN in IoT?** | Intelligent traffic pattern analysis and coordinated decisions through the controller. | SDN-IoT Integration | Medium |
| 5 | **What is the overall impact of SDN on IoT network intelligence and efficiency?** | More intelligence is infused into the network, improving its efficiency. | SDN-IoT Integration | Easy |
| 6 | **Name two tiers in the tiered segmentation of IoT networks.** | Context-aware tier, Network tier, Application tier. | IoT Architecture | Easy |
| 7 | **What is a key challenge in programming traditional sensor nodes?** | Real-time programming of each sensor node is typically not feasible. | Sensor Network Challenges | Easy |
| 8 | **Describe a characteristic of sensor node architectures from different vendors.** | They follow vendor-specific architectures, lacking a single standard. | Sensor Network Challenges | Medium |
| 9 | **Why are heavy computations difficult to perform at traditional sensor nodes?** | Sensor nodes are resource-constrained. | Sensor Network Challenges | Easy |
| 10 | **What limitation does limited memory impose on traditional sensor networks?** | Cannot insert too many control programs. | Sensor Network Challenges | Medium |
| 11 | **What is the role of the SDN controller in an integrated IoT network?** | It controls different aspects, improves orchestration, and enhances service logic. | SDN Controller Role | Medium |
| 12 | **How does SDN enable control over IoT end devices like sensors and actuators?** | It provides centralized control. | SDN Controller Role | Easy |
| 13 | **What is the purpose of rule placement in an SDN-integrated IoT network, especially for access devices?** | To handle issues like mobility and heterogeneity of end devices. | SDN Controller Role | Hard |
| 14 | **Where is traffic engineering typically managed in an SDN-integrated IoT network?** | At the transport network level. | SDN Controller Role | Medium |
| 15 | **What functions are handled at the data center networks in an SDN-integrated IoT setup?** | Flow classification and enhanced security. | SDN Controller Role | Medium |
| 16 | **What is the name of the protocol proposed by Low et al. in 2012 for sensor networks?** | Sensor OpenFlow protocol. | SDN-WSN Protocols | Easy |
| 17 | **Name the two ways Sensor OpenFlow protocol handles data forwarding.** | Value-centric data forwarding and ID-centric data forwarding. | Sensor OpenFlow | Medium |
| 18 | **Explain value-centric data forwarding in Sensor OpenFlow.** | Data is forwarded if the sensor data exceeds a certain threshold value. | Sensor OpenFlow | Medium |
| 19 | **Explain ID-centric data forwarding in Sensor OpenFlow.** | Data is forwarded based on the ID of the source node. | Sensor OpenFlow | Medium |
| 20 | **What is a limitation of the Sensor OpenFlow protocol mentioned in the lecture?** | Real-life implementation of such a method is not yet available. | Sensor OpenFlow | Medium |
| 21 | **What is the name of the protocol proposed by Bera et al. in 2016?** | Soft WSN protocol. | SDN-WSN Protocols | Easy |
| 22 | **Name two major component solutions of the Soft WSN protocol.** | Sensor device management and topology management. | Soft WSN | Medium |
| 23 | **What does sensor device management in Soft WSN comprise?** | Sensor management, delay management, and active sleep management. | Soft WSN | Hard |
| 24 | **How did Soft WSN compare to traditional WSN in terms of packet delivery ratio?** | It showed much improved packet delivery ratio. | Soft WSN Performance | Easy |
| 25 | **How did Soft WSN affect the number of replicated data packets compared to traditional WSN?** | It reduced the number of replicated data packets. | Soft WSN Performance | Medium |
| 26 | **Why does Soft WSN have a higher number of control packets in the network?** | Each time a node receives a new packet, it asks the controller for adequate forwarding logic. | Soft WSN Performance | Hard |
| 27 | **What is the name of the SDN-integrated WSN platform published in INFOCOM 2015?** | SDN-WISE. | SDN-WSN Protocols | Easy |
| 28 | **What key feature does SDN-WISE propose for rule placement at sensor nodes?** | A flow table for rule placement is available at the sensor nodes. | SDN-WISE | Medium |
| 29 | **How can nodes be programmed in real-time in SDN-WISE?** | Any programming language can be used through API to program the nodes in real time. | SDN-WISE | Medium |
| 30 | **What protocol do sensor nodes typically run in the SDN-WISE work?** | The 802.15.4 protocol. | SDN-WISE | Hard |

---

# Week 8

## Lecture 36 : Software Defined IoT Networking- II (Lecture 36)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What are some key problems in traditional mobile wireless networks that SDN aims to address?** | Scalability issues, static over-provisioning, inflexibility to manage mobile traffic, difficult management leading to misconfigurations, slow service introduction, and high CAPEX and OPEX. | Traditional Mobile Networks | Easy |
| 2 | **What are the two important aspects of SDN that make it suitable for mobile networks?** | The flow table paradigm (for end-to-end communication over multiple technologies) and logically centralized control (for efficient base station coordination and addressing intercellular interference). | SDN in Mobile Networks | Medium |
| 3 | **How does SDN's flow table paradigm benefit mobile networks?** | It is well-suited for end-to-end communication over multiple technologies such as Wi-Fi, 3G, and 4G. | SDN Benefits | Easy |
| 4 | **What is the advantage of logically centralized control in SDN for mobile networks?** | It is particularly useful for efficient base station coordination for addressing intercellular interference. | SDN Benefits | Easy |
| 5 | **What is 'path management' in the context of SDN for mobile networks?** | It concerns data that can be routed based on service requirements without depending on the core routing policies. | SDN Benefits | Medium |
| 6 | **How does network virtualization, enabled by SDN, help in mobile networks?** | It abstracts physical resources from network services, providing seamless connectivity and service differentiation among users. | SDN Benefits | Medium |
| 7 | **What problem does the SDWMN solution primarily aim to address in traditional mobile networks?** | Interference from other nodes (e.g., between eNodeB signals). | SDWMN | Easy |
| 8 | **Name the two key units in the SDWMN architecture responsible for interference management and mobile traffic management.** | The Virtualized Radio Resource Management Unit (VRRMU) for interference and the Access Network Discovery and Service Function (ANDSF) unit for mobile traffic management. | SDWMN Architecture | Medium |
| 9 | **What are the key benefits of adopting SDN in mobile networks?** | Centralized control of devices manufactured by multiple vendors, higher rate of integration of new services, and abstracted network control and management. | SDN Benefits | Easy |
| 10 | **List some challenges for rule placement at access devices in SDN-based mobile networks.** | General OpenFlow does not support wireless networks, users are mobile, the network is highly dynamic, frequent changes in rule placement are required, and there is a presence of heterogeneous devices. | Rule Placement Challenges | Medium |
| 11 | **Describe the core concept of ODIN for rule placement in SDN-based mobile networks.** | It is an agent-based solution where an 'Odin agent' is placed at access points to communicate with an 'Odin master' at the controller. | ODIN | Medium |
| 12 | **What are the two main parts of the UbiFlow solution?** | Mobility management and flow scheduling. | UbiFlow | Easy |
| 13 | **What aspects does UbiFlow's mobility management address?** | Scalable control of access points and fault tolerance. | UbiFlow | Medium |
| 14 | **Explain the three components of UbiFlow's flow scheduling.** | Network partitioning (fragmenting the network into multiple partitions), network matching (checking which partition should handle a packet), and load balancing (distributing load evenly across partitions). | UbiFlow | Hard |
| 15 | **What is the primary goal of MobiFlow?** | To provide mobility-aware flow rule placement for mobile-based IoT systems. | MobiFlow | Easy |
| 16 | **How does MobiFlow achieve proactive rule placement?** | By predicting the location of the end-users at the next time instant based on their movement history. | MobiFlow | Medium |
| 17 | **What technique does MobiFlow use for location prediction?** | The order K Markov predictor, which takes the last K location instances to predict the next location. | MobiFlow | Medium |
| 18 | **What method does MobiFlow use for optimal access point selection for flow rule placement?** | A linear programming-based solution. | MobiFlow | Medium |
| 19 | **What are the main benefits of MobiFlow compared to conventional rule placement schemes?** | Minimized control message overhead and reduced energy consumption. | MobiFlow Benefits | Easy |
| 20 | **How are rule placement schemes handled for the backbone network in SDN-based IoT?** | Existing rule placement schemes for wired networks can be used, as backbone networks often have similar topology and architecture. | Backbone Network | Easy |
| 21 | **What is an important issue in backbone networks due to the dynamic nature of IoT, and what can be integrated to address it?** | Load balancing is an important issue, and dynamic resource allocation can be integrated. | Backbone Network | Medium |
| 22 | **In data center networks with SDN, what are the two types of flows observed?** | Mice flows (small, short-lived) and Elephant flows (large, long-lived). | Data Center Networking | Easy |
| 23 | **How are 'mice flows' typically handled in SDN-based data center networks?** | Wildcard rules can be placed to deal with these flows. | Data Center Networking | Medium |
| 24 | **How are 'elephant flows' typically handled in SDN-based data center networks?** | Exact match of the rules is required. | Data Center Networking | Medium |
| 25 | **What is a prerequisite for inserting flow rules at switches to adequately forward data in SDN-based data center networks?** | Classifying the flows (as mice or elephant) before inserting the flow rules. | Data Center Networking | Easy |
| 26 | **How can anomaly detection be performed in an IoT network using SDN/OpenFlow?** | By monitoring each flow in the network or by collecting different port statistics at the different switches. | Anomaly Detection | Medium |
| 27 | **Name an experimental platform that supports both wired and wireless networks for SDN-based IoT.** | Mininet-WiFi. | Experimental Platforms | Easy |
| 28 | **What protocols does Mininet-WiFi support for wired and wireless networks?** | Ethernet protocol for wired and the 802.11 class of protocols for wireless. | Experimental Platforms | Medium |
| 29 | **Which platform is mentioned for helping with controller placement in SDN-based IoT?** | The ONOS platform. | Experimental Platforms | Easy |
| 30 | **What are the three specific SDN solutions mentioned for mobile IoT networks in this lecture?** | ODIN, UbiFlow, and MobiFlow. | SDN Solutions | Easy |

---

## Lecture 37 : Cloud Computing-Fundamental (Lecture 37)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What is the fundamental concept behind cloud computing, analogous to utilities like electricity or water?** | Computing as a utility. | Fundamentals | Easy |
| 2 | **How does cloud computing address the need for infrastructure deployment, similar to how electricity or water utilities work?** | Users do not need to deploy the necessary infrastructure; they subscribe and pay for usage. | Fundamentals | Easy |
| 3 | **What are the three main types of resources considered 'computing' in the context of 'computing as a utility'?** | Hardware resources (servers, workstations, processors, memory, storage), software resources, and development platforms. | Fundamentals | Medium |
| 4 | **List the evolutionary stages of computing that led to cloud computing.** | Cluster computing, Grid computing, Utility computing, Cloud computing. | Evolution | Medium |
| 5 | **What is the primary characteristic of 'cluster computing'?** | Having some kind of computing nodes connected together in the form of a cluster to accomplish some computational job. | Evolution | Easy |
| 6 | **According to NIST, what is cloud computing defined as?** | A model for enabling convenient on-demand network access to a shared pool of configurable computing resources (e.g., network, infrastructure, servers, storage, applications). | Definition | Hard |
| 7 | **Name the five essential characteristics of cloud computing.** | Broad network access, Rapid elasticity, Measured services, On-demand self-service, Resource pooling. | Essential Characteristics | Medium |
| 8 | **Explain 'Broad network access' as an essential characteristic of cloud computing.** | Cloud resources should be available over the network (e.g., internet) and support standard mechanisms for information retrieval using traditional interfaces (e.g., thick clients, thin clients, mobile phones, laptops). | Essential Characteristics | Medium |
| 9 | **What does 'Rapid elasticity' in cloud computing refer to?** | Cloud resource allocations should be rapid, elastic, and automatic, allowing dynamic allocation and release of facilities for scaling in and scaling out of resources. | Essential Characteristics | Medium |
| 10 | **How are 'Measured services' implemented in cloud computing?** | Resources and their uses would be recorded and monitored, and the cloud service provider sends a bill to the end user based on units of usage. | Essential Characteristics | Easy |
| 11 | **Describe 'On-demand self-service' in the context of cloud computing.** | Whenever required, the user should be able to get access to these resources through a self-service manner, with the cloud providing server time and network storage automatically. | Essential Characteristics | Medium |
| 12 | **What is 'Resource pooling' in cloud computing?** | A multi-tenancy model where multiple end users share available resources, which are automatically made available and pooled from all available sources, allocated according to user demand. | Essential Characteristics | Medium |
| 13 | **List three business advantages of using cloud computing.** | Without any upfront infrastructure investment, real-time infrastructure availability, more efficient resource utilization, usage-based costing, reduced time to market, improved agility. | Business Advantages | Easy |
| 14 | **What is 'Multitenancy' in cloud computing?** | Sharing of resources and costs across a large pool of users. | General Characteristics | Easy |
| 15 | **What are the four main components of cloud computing from a user's perspective?** | Clients (thin, thick, mobile), Services (web apps, platforms), Storage (databases, data storage), Infrastructure (virtualized). | Components | Medium |
| 16 | **Name the three most popular cloud service models.** | Software as a Service (SaaS), Platform as a Service (PaaS), Infrastructure as a Service (IaaS). | Service Models | Easy |
| 17 | **What does 'Software as a Service (SaaS)' provide to users?** | Facility to execute service providers' applications at the users' end, with applications available as services accessed via different types of client devices (e.g., web browsers, apps). | Service Models | Medium |
| 18 | **Give two commercial examples of Software as a Service (SaaS).** | Google Apps, Salesforce, Learn.com. | Service Models | Easy |
| 19 | **What does 'Platform as a Service (PaaS)' offer to consumers?** | The development platform is made available to the consumers as facilities to execute consumer-created and acquired applications onto the cloud infrastructure. | Service Models | Medium |
| 20 | **Provide two commercial examples of Platform as a Service (PaaS).** | Windows Azure, Google App Engine. | Service Models | Easy |
| 21 | **What does 'Infrastructure as a Service (IaaS)' entail?** | Most computing infrastructure like network, storage, operating system to be made available as facilities through the internet, accessing these facilities as computational resources dynamically on a pay-per-use basis. | Service Models | Medium |
| 22 | **Name two commercial examples of Infrastructure as a Service (IaaS).** | Amazon EC2, GoGrid, Iland, Rackspace Cloud Servers. | Service Models | Easy |
| 23 | **List the four main cloud deployment models discussed.** | Public cloud, Private cloud, Hybrid cloud, Community cloud. | Deployment Models | Medium |
| 24 | **Describe a 'Public Cloud' and give an example.** | Set up for the use of any person or industry, typically owned by an organization who offers the cloud service. Examples: Amazon Web Services, Google Compute Engine, Microsoft Azure. | Deployment Models | Medium |
| 25 | **What is a 'Private Cloud' and what is its primary advantage?** | Typically restricted to a single organization, with cloud functionalities made available only within the organization. Advantage: Total control over the system and the data. | Deployment Models | Medium |
| 26 | **What is a 'Hybrid Cloud'?** | Combines the facilities of two or more types of unique cloud types (e.g., private, community, or public cloud), pooling resources from different infrastructures. | Deployment Models | Medium |
| 27 | **What defines a 'Community Cloud'?** | Typically restricted to certain communities (e.g., medical community, hospital community, security community), where only the users of that community can access its services. | Deployment Models | Medium |
| 28 | **What is the key difference in resource sharing between a public cloud and a private cloud?** | In public cloud, resources are publicly shared (multiple customers), while in private cloud, resources are privately shared (few customers, typically users of the organization). | Deployment Models | Hard |
| 29 | **What is an 'Inter-Cloud'?** | A 'cloud of clouds' where multiple different clouds are put together, unified through the internet, and interoperate between each other to offer joint cloud services to users. | Deployment Models | Hard |
| 30 | **Why is cloud computing considered an important enabling technology for the Internet of Things (IoT)?** | It helps deal with heterogeneous resources and data, enables fast processing without much infrastructure involvement, and offers computing facilities on a pay-per-use model. | Cloud in IoT | Medium |

---

## Lecture 38 : Cloud Computing-Service Model (Lecture 38)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What are the three core service models in cloud computing?** | Software as a Service (SaaS), Platform as a Service (PaaS), and Infrastructure as a Service (IaaS). | Cloud Service Models | Easy |
| 2 | **According to Amazon, what does Infrastructure as a Service (IaaS) contain?** | The basic building blocks for cloud IT, typically providing access to networking features, computers (virtual or dedicated hardware), and data storage space. | IaaS | Medium |
| 3 | **What is the primary benefit of Platform as a Service (PaaS) for organizations?** | It removes the need for organizations to manage the underlying infrastructure (hardware and OS), allowing focus on application deployment and management. | PaaS | Medium |
| 4 | **How does Amazon define Software as a Service (SaaS)?** | SaaS provides a completed product that is run and managed by the service provider, typically referring to end-user applications. | SaaS | Medium |
| 5 | **Name four features provided by Infrastructure as a Service (IaaS).** | Servers (for computation), Storage, Network, Operating System. | IaaS | Easy |
| 6 | **In a virtualized server model for IaaS, what manages the interaction between the hardware layer and the VM layer?** | Hypervisor. | IaaS | Medium |
| 7 | **How does IaaS benefit new businesses?** | New businesses can kickstart without having to invest in computing hardware. | IaaS | Easy |
| 8 | **Give an example of a business scenario where IaaS is suitable due to fluctuating computing demands.** | Businesses like Flipkart or Amazon during festive seasons, needing more infrastructure temporarily. | IaaS | Medium |
| 9 | **What is a key advantage of IaaS regarding resource allocation?** | Dynamic scaling of required infrastructure resources, allowing large allocation or release in a short span of time without performance variation. | IaaS | Medium |
| 10 | **What level of control do clients have over virtualized infrastructure resources in IaaS?** | Total control, allowing them to preconfigure facilities, virtualize resources, and monitor their running status. | IaaS | Medium |
| 11 | **Name one challenge or limitation of Infrastructure as a Service (IaaS) related to compliance.** | Regulatory approval may be required for outsourced storage and processing. | IaaS | Medium |
| 12 | **How might network conditions impact IaaS performance?** | Network latency may degrade the level of expected performance. | IaaS | Easy |
| 13 | **What is the primary role of Platform as a Service (PaaS) for developers?** | It provides the platform which allows developers to create applications that can be offered as services via the internet. | PaaS | Easy |
| 14 | **What two key aspects does PaaS provide for developed applications?** | Abstraction and security. | PaaS | Medium |
| 15 | **Name three features of PaaS that support application development.** | Server-side scripting, database management, and offering different tools for design and development of software. | PaaS | Medium |
| 16 | **How does PaaS support users in creating software applications?** | It allows users to create software applications using offered tools and provides pre-configured features that customers can subscribe to. | PaaS | Medium |
| 17 | **What is a business advantage of PaaS related to development tools?** | Easy access to development and deployment tools, and freedom from managing them individually. | PaaS | Medium |
| 18 | **Who is the typical user of Software as a Service (SaaS)?** | End-user applications. | SaaS | Easy |
| 19 | **How is SaaS typically accessed, and what acts as the client?** | Over the internet, using a web browser as a thin client. | SaaS | Easy |
| 20 | **What kind of pricing model does SaaS typically support?** | A fully pay-as-you-go model. | SaaS | Easy |
| 21 | **What is multi-tenancy in the context of SaaS?** | The ability to accommodate users from multiple companies at the same time, an architectural shift from isolated single-tenant applications. | SaaS | Hard |
| 22 | **Compare traditional software and SaaS regarding installation and maintenance.** | Traditional: Customers install, manage, and maintain. SaaS: Customers simply use over the internet. | SaaS Comparison | Medium |
| 23 | **What is the difference between traditional software and SaaS concerning cross-platform support?** | Traditional software requires cross-platform support; SaaS has no concern for it. | SaaS Comparison | Medium |
| 24 | **What is a limitation of SaaS regarding control?** | Supporting centralized control. | SaaS | Easy |
| 25 | **What is a limitation of SaaS related to adaptability?** | Limited flexibility. | SaaS | Easy |
| 26 | **What are key concerns regarding data in the SaaS model?** | Data security and privacy concerns. | SaaS | Easy |
| 27 | **In traditional computing, who manages the Operating System? How about in IaaS?** | Traditional: User manages OS. IaaS: User manages OS (service provider manages virtualization, server, storage, networking). | Service Model Comparison | Hard |
| 28 | **In IaaS, who manages the Operating System? How about in PaaS?** | IaaS: User manages OS. PaaS: Service provider manages OS (user only manages applications and data). | Service Model Comparison | Hard |
| 29 | **In PaaS, who manages applications and data? How about in SaaS?** | PaaS: User manages applications and data. SaaS: Service provider manages everything (including applications and data). | Service Model Comparison | Hard |
| 30 | **What are the three deployment models for IaaS?** | Public cloud, private cloud, and hybrid cloud. | IaaS | Medium |

---

## Lecture 39 : Cloud Computing-Service Management and Security (Lecture 39)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What is the primary focus of this lecture series on cloud computing for IoT?** | Service management and security issues in cloud computing for IoT. | Introduction | Easy |
| 2 | **What is the aim of service management in cloud computing?** | To provide equal importance to desired outcomes of customers through optimal performance, ensuring satisfaction with minimum risk and no extra cost. | Service Management | Medium |
| 3 | **Give an example of risk mitigation in cloud service management.** | If a computing resource becomes unavailable, a risk mitigation technique should dynamically provision an additional physical resource mapped to the virtual one the customer was using, without the customer noticing. | Service Management | Medium |
| 4 | **List three types of services that should be offered in cloud computing.** | Usage monitoring and billing, clear service description, high availability of networks and connectivity, ease of access, service selection portals, service guarantees, rapid fulfillment/decommissioning, secure environment. | Service Management | Easy |
| 5 | **Define Service Level Agreement (SLA) in cloud computing.** | A non-functional requirement expected from the cloud service provider, acting as a roadmap with clearly defined deliverables, describing the quality, utility, and warranty of services. | Service Management | Easy |
| 6 | **What are the three core components used for billing in cloud computing?** | Accounting records (tracking resource use), resource prices (unit cost), and billing rules (policy for billing based on consumption). | Service Management | Medium |
| 7 | **How does hardware differ between traditional data centers and cloud computing?** | Traditional data centers use heterogeneous hardware with network computing and remote servers. Cloud computing uses off-premise resources with virtually hosted solutions, heterogeneous hardware, software, and networks available on the cloud. | Comparison | Medium |
| 8 | **Name two differences between traditional IT infrastructure and cloud computing, besides hardware.** | Resilience and elasticity, flexibility and scalability, automation, running costs (cloud has running costs vs. one-time/periodic), security (cloud has more security). | Comparison | Easy |
| 9 | **What does 'resilience' mean in the context of cloud resources?** | The ability of the system to handle failures or issues without the users noticing, taking care of problems in the background. | Cloud Characteristics | Easy |
| 10 | **List the four customer population metrics that influence the economics of scaling in cloud computing.** | Number of unique customer sets, duty cycle of the customer set, relative displacement duty cycle, and load of the customer set. | Economics of Cloud | Hard |
| 11 | **Provide three economic incentives for using cloud computing.** | Lowering infrastructure and computing costs, CapEx-free computing, faster project deployment fostering innovation, scaling up/down as required, lower maintenance costs, resiliency and redundancy. | Economics of Cloud | Medium |
| 12 | **What are the key demands of a cloud database management system (DBMS)?** | Efficiency, fault tolerance, adaptivity to heterogeneity, operational comfort on encrypted data, and the ability to interface with different products and solutions. | Database Management | Medium |
| 13 | **Name two Database as a Service (DBaaS) platforms mentioned for cloud integration.** | Microsoft Azure SQL Database, Amazon Web Services (DynamoDB, Relational Database Service), Google Cloud SQL, Google App Engine Data Store, ClearDB, Database.com. | Database Management | Easy |
| 14 | **Why is data security particularly important in cloud computing?** | Data is stored on geographically distributed servers and platforms, often without the user knowing its physical location, leading to a loss of control over information on the public cloud. | Cloud Security | Medium |
| 15 | **List three specific concerns regarding security in a cloud platform.** | Loss of data, seizing of the account, service traffic hindrance, vulnerability of APIs. | Cloud Security | Easy |
| 16 | **What is the general solution to cloud security issues?** | Implementing counter security solutions, platforms, APIs, and software to protect from theft, leakage, or accidental deletion of data by providing security policies. | Cloud Security | Easy |
| 17 | **What are the three main levels of infrastructure security in cloud computing?** | Network level security, Host level security, and Application level security. | Cloud Security | Easy |
| 18 | **What are the network-level security concerns for data in transit to and from a cloud service provider?** | Achieving confidentiality and integrity of data in transit. | Cloud Security - Network Level | Medium |
| 19 | **What is the 'Blue Pill attack' and which cloud component does it target?** | A specific type of attack on the hypervisor, which is a core component of IaaS platforms, tasked with managing virtual machines. | Cloud Security - Host Level | Hard |
| 20 | **Who is responsible for application-level security in a SaaS model?** | The SaaS cloud service provider is primarily responsible for the security of deliverable applications. | Cloud Security - Application Level | Easy |
| 21 | **Who is responsible for application-level security in an IaaS model?** | The IaaS customer is responsible for arranging their own security mechanisms for applications. | Cloud Security - Application Level | Easy |
| 22 | **What are the three primary objectives of data security?** | Confidentiality (data available only to intended stakeholders), Integrity (data not tampered with), and Availability (data available as per SLA). | Data Security | Medium |
| 23 | **Define 'data at rest' in the context of data security.** | Data that is used for long-term use, doesn't change fast, and will be stored in the server for future use. | Data Security | Easy |
| 24 | **What is the purpose of Identity and Access Management (IAM) in cloud security?** | To allow legitimate persons to retrieve legitimate resources at legitimate times for legitimate reasons. | IAM | Medium |
| 25 | **What does an IAM module instigate, administer, and record?** | User identities and access permissions. | IAM | Easy |
| 26 | **Name three features of an Identity and Access Management (IAM) module.** | Single access control interface, increased security, access control over resource level, improvement of operational efficiency, organizations attaining access control and operation security, improvement of regulatory compliance management. | IAM | Medium |
| 27 | **List three access control layers in the cloud.** | Cloud access, server level access, service level access, database access (direct/indirect), VM access, access to objects within a virtual machine. | Access Control | Medium |
| 28 | **Differentiate between 'trust' and 'reputation' in cloud computing.** | Trust is the independent expectancy between two entities for a specific context at a given time. Reputation is the belief of an entity's standing in the community. | Trust & Reputation | Medium |
| 29 | **Name two modes of trust establishment for customers selecting a cloud provider.** | Accomplishment of Service Level Agreements (SLAs), application of audit standards, measuring and rating, questionnaires for self-assessment. | Trust & Reputation | Easy |
| 30 | **What is a consequence of a threat to the user authentication process in the cloud?** | It can lead to the divulging of confidential data to a fake user. | Authentication | Easy |

---

## Lecture 40 : Cloud Computing- Case Studies (Lecture 40)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What are the key reasons to use cloud simulation platforms before actual deployment?** | To assess technology, evaluate different solutions, understand performance implications, and study new features. | Cloud Simulation | Easy |
| 2 | **What three core qualities must cloud simulation tools ensure for performance evaluation?** | Reliability, scalability, and repeatability. | Cloud Simulation | Medium |
| 3 | **Name three purposes of cloud simulators.** | Facilitate pre-deployment tests, study how new features perform, and allow customers to evaluate services at no additional cost. | Cloud Simulation | Easy |
| 4 | **List at least three cloud simulation platforms mentioned.** | CloudSim, CloudAnalyst, GreenCloud, iCanCloud, GroudSim, DCSim. | Cloud Simulation | Easy |
| 5 | **What programming language is CloudSim based on?** | Java. | CloudSim | Easy |
| 6 | **Who developed CloudSim and at which university?** | Professor Rajkumar Buyya's team at the University of Melbourne. | CloudSim | Easy |
| 7 | **Name two advantages of using CloudSim.** | Time effectiveness and flexibility/applicability (supporting diverse cloud environments). | CloudSim | Medium |
| 8 | **Describe the three main layers of CloudSim's architecture.** | User code layer (machine/app specs), CloudSim layer (cloud environment modeling), and Core engine layer (event scheduling, entity creation, clock management). | CloudSim | Medium |
| 9 | **What is a 'cloudlet' in CloudSim's user interface structure?** | A small physical server which creates virtual machines. | CloudSim | Medium |
| 10 | **List two types of modules/models available in CloudSim for cloud computing environments.** | Modules for data centers, virtual machines, applications, users, or network topology. | CloudSim | Easy |
| 11 | **What does the Core Engine layer in CloudSim's architecture primarily handle?** | Event scheduling, entity creation, component interaction, and clock management. | CloudSim | Hard |
| 12 | **What is CloudAnalyst built on top of?** | CloudSim. | CloudAnalyst | Easy |
| 13 | **What is the primary purpose of CloudAnalyst?** | To study the behavior of geographically distributed large-scale cloud applications under different deployment configurations. | CloudAnalyst | Medium |
| 14 | **Name two features that make CloudAnalyst user-friendly and powerful.** | Easy to use (due to GUI) and high level of configurability. | CloudAnalyst | Easy |
| 15 | **What are the two main components of the CloudAnalyst architecture?** | CloudSim extensions (for metrics) and the Graphical User Interface (GUI). | CloudAnalyst | Medium |
| 16 | **What is the primary focus of the GreenCloud simulator?** | Energy awareness and monitoring energy consumption in cloud data centers. | GreenCloud | Easy |
| 17 | **GreenCloud was developed as an extension of which existing network simulator?** | ns-2 (packet-level network simulator). | GreenCloud | Medium |
| 18 | **Name two features of GreenCloud that highlight its purpose.** | Monitors energy consumption of network and devices, and enables improved power management schemes. | GreenCloud | Medium |
| 19 | **Name two open-source cloud platforms.** | OpenStack, CloudStack, or Eucalyptus. | Cloud Platforms | Easy |
| 20 | **Name two commercial cloud platforms.** | Amazon Web Services, Microsoft Azure, or Google App Engine. | Cloud Platforms | Easy |
| 21 | **What is a key difference in security implementation between open-source and commercial cloud platforms?** | Open-source: security implemented by the user. Commercial: security implemented by the service provider. | Cloud Platforms | Medium |
| 22 | **What type of cloud deployment is typical for open-source cloud platforms?** | Private on-premise. | Cloud Platforms | Easy |
| 23 | **Which service model does OpenStack primarily support?** | Infrastructure as a Service (IaaS). | OpenStack | Easy |
| 24 | **What is OpenStack managed by?** | The OpenStack Foundation. | OpenStack | Easy |
| 25 | **Name two core components of OpenStack and their functions.** | Nova (compute) and Neutron (networking). | OpenStack | Hard |
| 26 | **What two primary service models does Microsoft Azure support?** | Infrastructure as a Service (IaaS) and Platform as a Service (PaaS). | Microsoft Azure | Easy |
| 27 | **What is a key benefit of Azure's PaaS offering for clients?** | Clients can focus on application development rather than worrying about hardware and infrastructure. | Microsoft Azure | Medium |
| 28 | **Name two types of services offered by Microsoft Azure.** | Computing services and storage services. | Microsoft Azure | Easy |
| 29 | **What does EC2 stand for in Amazon EC2?** | Elastic Compute Cloud. | Amazon EC2 | Easy |
| 30 | **How does Amazon EC2 handle persistent storage?** | Through Amazon Elastic Block Store (EBS) and Simple Storage Service (S3). | Amazon EC2 | Medium |

---

# Week 9

## Lecture 41 : Cloud Computing- Practical (Lecture 41)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What is OpenStack?** | An open-source software platform for generating your own cloud, a joint project of NASA and Rackspace Hosting. | OpenStack Basics | Easy |
| 2 | **When was OpenStack first released?** | 2010 | OpenStack Basics | Easy |
| 3 | **Name some major companies contributing to OpenStack development.** | Cisco, IBM, HP, Red Hat. | OpenStack Basics | Medium |
| 4 | **What is unique about OpenStack compared to other cloud developing software?** | It is completely free and the only completely free open-source cloud developing software available. | OpenStack Basics | Easy |
| 5 | **How are OpenStack versions named?** | In alphabetical order. | OpenStack Basics | Easy |
| 6 | **What is the function of Horizon in OpenStack?** | It is the GUI interface/dashboard section, providing an overview of other components. | OpenStack Components | Easy |
| 7 | **Which OpenStack component handles authentication and authorization?** | Keystone. | OpenStack Components | Easy |
| 8 | **What is Nova's role in OpenStack?** | It is the compute service, used for launching virtual machine instances. | OpenStack Components | Easy |
| 9 | **What is Glance used for in OpenStack?** | It is the image service, used for discovering, registering, and retrieving VM images, and creating snapshots. | OpenStack Components | Medium |
| 10 | **Which OpenStack component provides full object storage?** | Swift. | OpenStack Components | Easy |
| 11 | **What is the primary function of Neutron in OpenStack?** | It is the networking part of the system, providing networking services and allowing users to create and modify networks (Network as a Service). | OpenStack Components | Medium |
| 12 | **What type of storage does Cinder provide in OpenStack?** | Block storage (pluggable type). | OpenStack Components | Easy |
| 13 | **Which OpenStack component provides orchestration?** | Heat. | OpenStack Components | Easy |
| 14 | **What is the purpose of Ceilometer in OpenStack?** | It is the billing section, used to monitor resource usage (what, how long) for cloud service providers. | OpenStack Components | Medium |
| 15 | **What is DevStack used for in OpenStack?** | A script-based method for easily installing OpenStack, where installation steps are pre-written. | OpenStack Installation | Easy |
| 16 | **What command is used to install OpenStack using DevStack?** | `stack.sh` | OpenStack Installation | Medium |
| 17 | **What command is used to uninstall OpenStack using DevStack?** | `unstack.sh` | OpenStack Installation | Medium |
| 18 | **What is the first step shown in the practical demonstration for launching an instance?** | Creating a key pair. | OpenStack Practical | Easy |
| 19 | **Why is a key pair required when launching an OpenStack instance?** | For authentication and authorization to access the instance. | OpenStack Practical | Medium |
| 20 | **What are the main steps involved in launching an instance in OpenStack?** | Give a name, select an image, select a flavor, choose a network, select a security group, and select a key pair. | OpenStack Practical | Medium |
| 21 | **Why might an OpenStack instance not be pingable from the outside world immediately after launch?** | It might not be connected to an external IP, and security rules might not be set to allow ICMP. | OpenStack Networking | Medium |
| 22 | **What is the role of a router in OpenStack networking?** | To connect different networks, such as an instance's network to the public network, enabling inter-communication. | OpenStack Networking | Medium |
| 23 | **How do you connect an internal network to a router in OpenStack?** | Go to the router, select 'Interface,' and add the desired network. | OpenStack Networking | Medium |
| 24 | **What is a 'floating IP' in OpenStack?** | An external IP address associated with an instance, allowing it to be accessed from the outside world. | OpenStack Networking | Medium |
| 25 | **What security rule needs to be added to allow pinging an instance?** | ICMP rule. | OpenStack Networking | Easy |
| 26 | **What security rule needs to be added to allow SSH access to an instance?** | SSH rule. | OpenStack Networking | Easy |
| 27 | **What is the format for specifying a network address when creating a subnet in OpenStack?** | CIDR notation (e.g., `10.0.4.0/24`). | OpenStack Networking | Medium |
| 28 | **What is the default login and password for a CirrOS instance shown in the practical?** | Login: `cirros`, Password: `gocubsgo`. | OpenStack Practical | Hard |
| 29 | **If two instances are on different networks within OpenStack, how can they communicate?** | By connecting both networks to a common router. | OpenStack Networking | Medium |
| 30 | **What is the purpose of 'flavors' when launching an OpenStack instance?** | To define the virtual hardware resources (CPU, RAM, disk) allocated to the instance. | OpenStack Practical | Medium |

---

## Lecture 42 : Sensor-Cloud- I (Lecture 42)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What is Sensor-Cloud technology?** | It is the integration of sensor networks and cloud technology to offer sensing as a service. | Sensor-Cloud Introduction | Easy |
| 2 | **How does 'sensing as a service' in Sensor-Cloud relate to traditional cloud computing?** | It is analogous to offering computing facilities, infrastructure, software, or platform as a service (IaaS, SaaS, PaaS) in traditional cloud computing. | Sensor-Cloud Concepts | Medium |
| 3 | **What is the core idea behind Sensor-Cloud for IoT environments?** | To offer sensors, sensed data, or sensing to end-users as a service. | Sensor-Cloud Introduction | Easy |
| 4 | **Is Sensor-Cloud merely about getting sense data to the cloud or simple virtualization of sensors?** | No, it is neither just dumping data to the cloud nor simple virtualization; it involves additional attributes and benefits. | Sensor-Cloud Concepts | Medium |
| 5 | **What are the three main units found in every sensor node in a traditional sensor network?** | A sensing unit, a processing unit, and a communication unit. | Traditional Sensor Networks | Easy |
| 6 | **What is the primary role of the sensing unit in a sensor node?** | To sense the physical phenomena occurring in the environment of its operation. | Traditional Sensor Networks | Easy |
| 7 | **What is the role of the communication unit in a sensor node?** | To send data forward to the next hop neighbor for final delivery to the sink. | Traditional Sensor Networks | Easy |
| 8 | **Describe the typical data flow from sensor nodes to processing in a traditional sensor network.** | Sensor nodes sense data, send it to a sink (centralized unit), which then either processes the data itself or sends it to a server for further processing. | Traditional Sensor Networks | Medium |
| 9 | **What type of communication is typical between the sink and other sensor nodes in a network?** | Typically multi-hop, but can be single-hop if the sensor node (source) and the sink are sufficiently close. | Traditional Sensor Networks | Medium |
| 10 | **List some applications of sensor networks.** | Target tracking, wildlife monitoring, healthcare, industrial applications, smart homes, smart city, agriculture, vehicular networks. | Traditional Sensor Networks | Easy |
| 11 | **How does cloud computing provide computational platforms?** | It provides an architecture for computational platforms that can be used on-demand to get access to computational resources whenever required, on a pay-per-use basis. | Cloud Computing Recap | Easy |
| 12 | **What is 'elasticity' in cloud computing?** | The ability to very easily scale computational resources up or down as per requirements, without actually buying additional resources. | Cloud Computing Recap | Medium |
| 13 | **What does 'self-service' mean in the context of cloud computing?** | The resources can be accessed by users themselves, on-demand, often through a simple interface. | Cloud Computing Recap | Medium |
| 14 | **Name the three traditional types of cloud computing services.** | Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). | Cloud Computing Recap | Easy |
| 15 | **Provide an example of Software as a Service (SaaS).** | Microsoft Office 365. | Cloud Computing Recap | Easy |
| 16 | **Provide an example of Platform as a Service (PaaS).** | Windows Azure. | Cloud Computing Recap | Easy |
| 17 | **What is the key concept of virtualization in cloud computing?** | Physically one computer might hold resources, but these resources can be shared and accessed by many virtual computers, reducing cost and increasing throughput. | Cloud Computing Recap | Medium |
| 18 | **How does encapsulation relate to virtualization technology?** | Virtualization technology basically provides a one-stop solution, a complete computing environment. | Cloud Computing Recap | Medium |
| 19 | **What does 'independence' mean for a virtual terminal in virtualization?** | A virtual terminal runs independent of the underlying hardware. | Cloud Computing Recap | Medium |
| 20 | **How does portability apply to virtual terminals in virtualization?** | A user's computational resources through a virtual terminal can be mapped to actual physical resources, and when not used, those physical resources can be made available to another user. | Cloud Computing Recap | Medium |
| 21 | **What is a significant limitation regarding procurement in traditional sensor networks?** | The overall price of procurement is quite high, requiring users to buy and deploy their own sensor nodes and networks. | Traditional Sensor Networks Limitations | Medium |
| 22 | **Besides procurement, what are other limitations of traditional sensor networks?** | Challenges with deployment (right way/place), maintenance, and battery lifetime. | Traditional Sensor Networks Limitations | Medium |
| 23 | **How does Sensor-Cloud differ from traditional sensor networks regarding the user base?** | Traditional sensor networks typically involve a single user, while Sensor-Cloud benefits are experienced more when talking about multiple users. | Sensor-Cloud vs. Traditional SN | Medium |
| 24 | **How does Sensor-Cloud improve upon device dedication compared to traditional sensor networks?** | In traditional networks, devices are dedicated to a single user; Sensor-Cloud allows multiple applications to be served by different sensors. | Sensor-Cloud vs. Traditional SN | Medium |
| 25 | **What key features does Sensor-Cloud introduce beyond mere integration of cloud computing and sensor networks?** | Pay-per-use facility, virtualization of the sensor node, and an intermediary layer between the sensor node and the end-user. | Sensor-Cloud Features | Hard |
| 26 | **Name the different types of actors or roles in a Sensor-Cloud environment.** | Sensor Owners, Sensor Cloud Service Provider (SCSP), and End Users. | Sensor-Cloud Architecture | Medium |
| 27 | **What is the primary role of the Sensor Cloud Service Provider (SCSP)?** | The SCSP is the sensing service provider, often taking a managerial role, handling maintenance, and servicing requests. | Sensor-Cloud Architecture | Medium |
| 28 | **List some key functionalities seen in a 'real view' of Sensor-Cloud.** | Dynamic scaling, on-demand physical sensor scheduling, energy management, Quality of Service (QoS), and application-specific real-time data aggregation. | Sensor-Cloud Functionalities | Hard |
| 29 | **Name some key components/roles involved in the Sensor-Cloud sequence diagram.** | User Organization, Sensor ML Interpreter, Virtual Sensor Manager, Virtual Sensor Controller, and Resource Manager. | Sensor-Cloud Architecture | Hard |
| 30 | **Based on the target tracking case study, what is the main advantage of Sensor-Cloud for an organization needing sensing data?** | The organization can get sensing service without actually owning the sensors, avoiding costly network setup and maintenance overheads. | Sensor-Cloud Benefits | Medium |

---

## Lecture 43 : Sensor-Cloud- II (Lecture 43)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What is Sensor Cloud?** | Integration of sensor networks and cloud computing, leveraging virtualization to offer 'Sensors as a Service'. | Sensor Cloud Basics | Easy |
| 2 | **What are the two main technologies integrated in Sensor Cloud?** | Sensor networks and cloud computing. | Sensor Cloud Basics | Easy |
| 3 | **What is the primary advantage of sensor networks in Sensor Cloud?** | Data acquisition and dissemination. | Sensor Cloud Advantages | Easy |
| 4 | **What is the primary advantage of cloud computing in Sensor Cloud?** | Information storage and data storage. | Sensor Cloud Advantages | Easy |
| 5 | **How does Sensor Cloud offer 'Sensors as a Service'?** | Through virtualization capabilities, creating virtual instances of sensors available to users. | Sensor Cloud Concepts | Medium |
| 6 | **Name three types of users/stakeholders in Sensor Cloud architecture.** | End users, sensor owners, sensor cloud service provider. | Sensor Cloud Architecture | Easy |
| 7 | **What is the role of a sensor owner in Sensor Cloud?** | Procures, owns, and makes sensors available for use. | Sensor Cloud Roles | Easy |
| 8 | **What is the primary concern of a Sensor Cloud Service Provider?** | Supervision and management of sensor services. | Sensor Cloud Roles | Easy |
| 9 | **What are the three main management issues in building Sensor Cloud infrastructure?** | Optimal composition of virtual sensor nodes, data caching, and optimal pricing. | Sensor Cloud Issues | Medium |
| 10 | **What does 'optimal composition of virtual sensors' refer to?** | How many virtual instances to create, which physical sensors map to which virtual sensors, and how virtual sensors are grouped for applications. | Virtual Sensor Composition | Medium |
| 11 | **Is there always a one-to-one mapping between physical and virtual sensors in Sensor Cloud?** | No, it is not a one-to-one mapping. | Virtual Sensor Composition | Easy |
| 12 | **What is CoV1 in the context of virtual sensor composition?** | Optimal composition of virtual sensors where physical sensors are homogenous and located in one geographical region. | Virtual Sensor Composition | Medium |
| 13 | **What is CoV2 in the context of virtual sensor composition?** | Optimal composition of virtual sensors where physical sensors are heterogeneous and geographically distributed across multiple locations. | Virtual Sensor Composition | Medium |
| 14 | **Why is composition of virtual sensors non-traditional compared to IaaS or SaaS?** | It involves virtualization of different types of things (sensors, which are resource-constrained and dynamic), not just software or infrastructure. | Virtual Sensor Composition | Hard |
| 15 | **List reasons why composition of virtual sensors is complex due to sensor characteristics.** | Sensors are resource-constrained (energy, communication, computation), have dynamic conditions, and can fail. | Virtual Sensor Composition | Medium |
| 16 | **How does cumulative energy consumption compare between CoV1 and CoV2?** | CoV2 incurs greater energy consumption compared to CoV1. | Virtual Sensor Performance | Medium |
| 17 | **How does network lifetime compare between CoV1 and CoV2?** | Network lifetime increases with CoV1 (homogenous sensors in one geographic location) compared to CoV2. | Virtual Sensor Performance | Medium |
| 18 | **Why is data caching important in Sensor Cloud, especially for applications like environmental monitoring?** | Data (e.g., temperature) doesn't change too frequently, so caching avoids unnecessary sensing, saving energy and resources. | Data Caching | Medium |
| 19 | **What are the two types of caches introduced in Sensor Cloud?** | Internal cache and external cache. | Data Caching | Easy |
| 20 | **What is the role of an external cache in Sensor Cloud?** | A separate server or hardware that periodically collects and stores data, making it available to end-users without always probing physical sensors. | Data Caching | Medium |
| 21 | **What is the role of an internal cache in Sensor Cloud?** | Handles end-user requests, decides if data should be provided directly or re-cached from external cache, and resides inside the sensor cloud. | Data Caching | Medium |
| 22 | **How does using a caching mechanism impact total energy consumption in Sensor Cloud?** | Total energy consumption decreases significantly. | Data Caching Performance | Easy |
| 23 | **How does using a caching mechanism impact network lifetime in Sensor Cloud?** | Network lifetime improves a lot. | Data Caching Performance | Easy |
| 24 | **What is a limitation of existing cloud pricing schemes (IaaS, SaaS, PaaS) when applied to Sensor Cloud?** | They deal with homogeneity of services and lack schemes for 'Sensors as a Service'. | Pricing | Medium |
| 25 | **What are the two components of the proposed dynamic pricing mechanism in Sensor Cloud?** | Pricing attributed to hardware (sensor) and pricing attributed to infrastructure. | Pricing | Medium |
| 26 | **What are the goals of an optimal pricing scheme in Sensor Cloud?** | Maximize profit for the sensor cloud service provider, maximize profit for the sensor owner, and maximize satisfaction of end users. | Pricing | Medium |
| 27 | **In a Sensor Cloud pricing scenario, what costs might an end-user pay for beyond the source sensor's hardware?** | Hardware cost of intermediate hops (if owned by different owners), and infrastructure cost (base station, servers, switches). | Pricing | Hard |
| 28 | **What mechanism might be in place for price determination in a Sensor Cloud marketplace?** | Negotiation or bargaining, in an oligopolistic marketplace scenario. | Pricing | Medium |
| 29 | **How does Sensor Cloud relate to Internet of Things (IoT)?** | Sensor Cloud is a very important technology for enabling and making the implementation of IoT efficient. | Sensor Cloud & IoT | Easy |
| 30 | **Do Sensor Cloud, Fog Computing, and regular Cloud Computing replace each other?** | No, all three technologies are required at different times for different scenarios to build the Internet of Things. | Sensor Cloud & Related Tech | Medium |

---

## Lecture 44 : Fog Computing- I (Lecture 44)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **Why is cloud computing important for IoT devices?** | IoT devices, sensors, and RFID devices send much data that needs to be handled and processed by the cloud. | Cloud Computing in IoT | Easy |
| 2 | **What is the main problem with cloud computing in an IoT environment?** | Latency. | Cloud Computing Problems | Easy |
| 3 | **Describe the components of latency in an IoT-Cloud interaction.** | Time for event sensing (T1), data sent to cloud (T2), processing (T3), response sent back (T4). Total = T1+T2+T3+T4. | Latency | Medium |
| 4 | **How does sending all IoT data to the cloud impact bandwidth?** | A lot of data floats over the network, consuming bandwidth unnecessarily. | Cloud Computing Problems | Medium |
| 5 | **How does sending all IoT data to the cloud impact the energy consumption of devices?** | It unnecessarily consumes the limited energy resident in IoT devices, as communication consumes most energy. | Cloud Computing Problems | Medium |
| 6 | **What technology was introduced by Cisco to address cloud limitations in IoT?** | Fog Computing. | Fog Computing Basics | Easy |
| 7 | **What is the primary goal of Fog Computing regarding cloud facilities and IoT devices?** | To bring the cloud facilities closer to the IoT device layer. | Fog Computing Basics | Easy |
| 8 | **Conceptually, where does Fog Computing fit between IoT devices and the cloud?** | It acts as a middleware or a middle layer. | Fog Computing Architecture | Easy |
| 9 | **What kind of processing and storage does Fog Computing perform?** | Some computation, processing, and at least transient storage happens before data is sent to the cloud. | Fog Computing Functionality | Medium |
| 10 | **What is the main benefit of intermediate processing and storage in Fog Computing?** | Quicker decision making. | Fog Computing Benefits | Easy |
| 11 | **By 2020, what percentage of the world's data was estimated to come from sensors?** | 40%. | IoT Data Statistics | Medium |
| 12 | **What percentage of the world's data was generated only during the period of the last two years (as per estimates)?** | 90%. | IoT Data Statistics | Medium |
| 13 | **How many bytes of data are estimated to be produced every day?** | About 2.5 quintillion bytes. | IoT Data Statistics | Medium |
| 14 | **How many IoT devices were estimated to be online by 2020?** | More than 30 billion. | IoT Device Statistics | Medium |
| 15 | **Why is Fog Computing needed in the context of IoT?** | Cloud is insufficient to handle the requirements of IoT due to issues with data volume, latency, and bandwidth. | Need for Fog Computing | Easy |
| 16 | **How does the physical location of cloud servers impact latency?** | Cloud servers might be physically located even continents away, introducing large latency in communication. | Cloud Computing Problems | Medium |
| 17 | **What unit is used to describe the 'unusual volumes of data' produced by IoT devices?** | Exabytes (10^18 bytes). | Data Volume | Medium |
| 18 | **What must happen to raw IoT data before it is sent to the cloud for storage and processing?** | It has to be filtered and preprocessed. | Data Handling | Medium |
| 19 | **What is the general equation for latency in an IoT-Cloud system?** | Latency = Time (device to cloud) + Time (data analysis) + Time (cloud to device). | Latency Calculation | Hard |
| 20 | **What can happen if edge devices send time-sensitive data to the cloud and wait for a response?** | It can lead to many unwanted results, as a millisecond can make a huge difference for real-time data. | Latency Impact | Medium |
| 21 | **How is bandwidth calculated in the context of data transmission?** | As the bit rate of data during transmission. | Bandwidth | Easy |
| 22 | **What is the consequence if all IoT devices send all their generated data to the cloud?** | The traffic generated will be gigantic, consuming almost all bandwidth and making handling very hard. | Cloud Computing Problems | Medium |
| 23 | **Besides technical issues, what other concern do firms have about sending all data online to the cloud?** | The data may be confidential, which firms do not want to share online. | Data Security | Easy |
| 24 | **How does Fog Computing help prevent major accidents like machine failure?** | By reducing latency and enabling appropriate action at the right time. | Fog Computing Benefits | Medium |
| 25 | **What is crucial for IoT data regarding security?** | IoT data must be secured and protected from intruders, monitored 24/7, and appropriate action taken before attacks cause harm. | Data Security | Medium |
| 26 | **What must be guaranteed for data generated from IoT devices used to solve real-time problems?** | Integrity and availability of data, as unavailability or tampering can be hazardous. | Operational Reliability | Medium |
| 27 | **How can data be divided based on sensitivity for processing?** | Time-sensitive data, less time-sensitive data, and non-time-sensitive data. | Data Classification | Easy |
| 28 | **Where should extremely time-sensitive data be analyzed?** | Very near to the data source. | Fog Computing Functionality | Medium |
| 29 | **Where should data that is not time-sensitive be analyzed?** | In the cloud. | Data Handling | Easy |
| 30 | **List conditions when Fog Computing should be used.** | If data needs analysis within a fraction of a second, huge number of devices, devices separated by large geographical distance, or devices subjected to extreme conditions. | Fog Computing Use Cases | Hard |

---

## Lecture 45 : Fog Computing- II (Lecture 45)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What is the primary relationship between Fog Computing and Cloud Computing?** | Fog is complementary to cloud; it is not a substitute. | Core Concepts | Easy |
| 2 | **How does Fog Computing extend cloud services?** | By bringing cloud capabilities (processing, storage) closer to IoT devices. | Core Concepts | Easy |
| 3 | **Describe the basic architectural flow in a Fog Computing environment.** | IoT devices -> Fog layer (Fog nodes) -> Cloud. | Architecture | Easy |
| 4 | **What is a key characteristic of storage in a Fog node?** | Storage is transient, not permanent, unlike in the case of cloud. | Fog Node Characteristics | Medium |
| 5 | **How do Fog nodes contribute to quicker decision-making?** | By processing data close to the IoT devices (at the edge), which helps in reducing the time for executing decisions. | Fog Node Characteristics | Medium |
| 6 | **Name three examples of devices that can act as Fog nodes.** | Routers, embedded servers, switches, video surveillance cameras. | Fog Node Characteristics | Easy |
| 7 | **What type of data is processed immediately by the nearest Fog node?** | Time-sensitive data, such as in surveillance applications, where decisions cannot be delayed. | Data Processing | Easy |
| 8 | **Where is non-time-sensitive data typically sent for storage and analysis in a Fog architecture?** | Directly to the cloud for storage and longer-term analysis, as time is not an issue. | Data Processing | Easy |
| 9 | **What happens to less time-sensitive data at the Fog layer before being sent to the cloud?** | It is aggregated at the Fog node, and that aggregated data is sent as a summary for historical analysis and storage to the cloud. | Data Processing | Medium |
| 10 | **What is the primary advantage of Fog Computing regarding data transmission time?** | Reduction in latency, from sensing to processing, storage, and response. | Advantages | Easy |
| 11 | **How does Fog Computing impact network bandwidth and cloud storage?** | It reduces bandwidth consumption and saves storage at the cloud because not everything is sent to the cloud. | Advantages | Medium |
| 12 | **Explain how Fog Computing enhances privacy for industries.** | Every industry can analyze their own data locally, storing confidential data in local servers, and only sending non-confidential data to the cloud. | Advantages | Medium |
| 13 | **What advantage of Fog Computing allows nodes to join and leave the network at any time?** | Supporting mobility, a true feature of any pervasive computing system. | Advantages | Easy |
| 14 | **Name two applications of Fog Computing in healthcare.** | Real-time health analytics for monitoring patients with chronic illness or during medical emergencies. | Applications | Easy |
| 15 | **How does Fog Computing contribute to railway system safety?** | Through real-time monitoring of railway tracks on a day-to-day basis, improving overall safety and reliability. | Applications | Medium |
| 16 | **Why is Fog Computing beneficial for pipeline optimization?** | It enables real-time monitoring of pressure, flow, and compressors in gas/oil lines, handling terabytes of data locally to avoid high latency and potential leakages. | Applications | Hard |
| 17 | **What is a significant challenge of Fog Computing related to power?** | Power consumption is higher than centralized cloud due to additional nodes, especially for low-power IoT devices, requiring careful management. | Challenges | Medium |
| 18 | **What makes data security a crucial challenge in Fog platforms?** | The data generated is distributed, making it difficult to provide an authentication and authorization system for all nodes. | Challenges | Medium |
| 19 | **What is required for reliability in a Fog network, especially concerning node failures?** | Maintaining data integrity and availability for millions of nodes, with autonomous fault detection and tolerance so that the failure of a node does not affect the network. | Challenges | Hard |
| 20 | **What is the typical analysis duration for data processed by a Fog node closest to IoT devices?** | Fractions of a second. | Data Processing Metrics | Easy |
| 21 | **What is the typical analysis duration for data processed by a Fog aggregate node?** | Seconds to minutes. | Data Processing Metrics | Easy |
| 22 | **What is the typical IoT data storage duration in a Fog node?** | Transient, in the order of hours. | Data Storage Metrics | Easy |
| 23 | **What is the typical IoT data storage duration in the cloud?** | Months to years. | Data Storage Metrics | Easy |
| 24 | **Describe the geographical coverage of a Fog node closest to devices.** | Very local. | Geographical Coverage | Easy |
| 25 | **What is the main problem faced by cloud when handling IoT data that Fog Computing solves?** | The primary problem is high latency, which Fog Computing reduces significantly. | Core Concepts | Easy |
| 26 | **How does Fog Computing improve business agility?** | It allows for faster acceptance of customer needs, which can be programmed very fast into the network, improving customer satisfaction. | Advantages | Medium |
| 27 | **What kind of environments can Fog platforms be deployed in?** | Remote places and harsh environmental conditions, such as open environments with snowfall, rainfall, or hill storms. | Advantages | Medium |
| 28 | **What is a limitation of statistically configured data processing frameworks in Fog Computing?** | These frameworks cannot provide proper scalability and flexibility, especially when nodes are mobile and can connect and leave the network whenever necessary. | Challenges | Hard |
| 29 | **What is the role of an 'aggregate fog node'?** | It analyzes less time-sensitive data after aggregation, sends decisions or actions to the device through the nearest node, and sends summaries to the cloud for storage and future analysis. | Fog Node Characteristics | Medium |
| 30 | **What is the overall benefit of Fog Computing for safety-critical platforms like industrial settings?** | Faster processing reduces decision-making time, minimizing unwanted accidents by enabling quick execution of actions determined through analysis close to the point of sensing. | Advantages | Hard |

---

# Week 10

## Lecture 46 : Smart Cities and Smart Homes- I (Lecture 46)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What makes a city 'smart' in the context of this lecture?** | A city is made smart by using Information and Communication Technologies (ICT) to provide services to citizens in a better, improved, and seamless manner. | Smart Cities Definition | Easy |
| 2 | **Name three core components of urban infrastructure that exist in any city.** | Office buildings, residential areas, hospitals, schools, transportation, police, traffic control, waste management, banking. (Any three) | Urban Infrastructure | Easy |
| 3 | **What IoT technologies are essential for transforming cities into smart cities?** | Sensors, sensor networks, actuators, RFID, NFC, Z-Wave, and other communication technologies. | IoT in Smart Cities | Medium |
| 4 | **What is a primary objective of developing smart cities regarding services?** | Offering advanced levels of services to different citizens, often seamlessly and automatically, based on subscription. | Smart City Objectives | Easy |
| 5 | **List three reasons for the need for smart cities.** | Ever-growing urban population, depleting natural resources, and climate/environment change. | Need for Smart Cities | Easy |
| 6 | **According to the lecture's analogy, what represents the 'skeleton, skin, and organs' of a city?** | Buildings, industries, people, transportation, logistics, hospitals, police, banks, schools. | Smart City Analogy | Medium |
| 7 | **In the smart city analogy, what provides 'life' (brains, nerves, sensory organs, cognition) to the city?** | Embedded intelligence, digital communication networks, sensors, actuators, tags, and smart software. | Smart City Analogy | Medium |
| 8 | **What is the focus of 'Smart Economy' in a smart city?** | Improving the economic infrastructure by fostering startups, indigenous diaspora, venture capitalists, academia, and interconnectedness for information and services. | Smart Economy | Medium |
| 9 | **How does ICT contribute to 'Smart Governance'?** | By interconnecting government agencies, citizens, officials, public services, emergency services, banking, and finance, enabling smart information exchange and services. | Smart Governance | Medium |
| 10 | **What are the key aspects of 'Smart People' in a smart city context?** | Interconnecting education, healthcare, population, transportation, shopping, banking, media, safety, and social networks to provide citizens with needed information and services. | Smart People | Medium |
| 11 | **Give an example of how 'Smart Mobility' can improve daily life.** | Providing real-time information on transport options (train, bus, EV), congestion, costs, and connecting with emergency services for accidents. | Smart Mobility | Medium |
| 12 | **What components are interconnected in a 'Smart Environment'?** | Government agencies, localities, population, waste management, waste disposal, agriculture, forest monitoring, pollution monitoring, disaster management, green constructions, and smart energy. | Smart Environment | Medium |
| 13 | **Name three benefits of a 'Smart Home'.** | Health monitoring, conservation of resources (electricity, water, fuel), and enhanced security and safety. | Smart Homes | Easy |
| 14 | **How do 'Smart Parking Lots' address urban parking problems?** | By providing real-time information on available parking spots via mobile devices, auto-rotation to empty slots, auto-charging, and detection of vacant lots. | Smart Parking Lots | Medium |
| 15 | **List two ways 'Smart Vehicles' can assist drivers.** | Driver assistance during bad weather/low visibility, detection of bad driving/DUI, auto-alert generation during crashes, and self-diagnostics. (Any two) | Smart Vehicles | Medium |
| 16 | **What are the advantages of 'Smart Health' in a smart city?** | Low-cost portable at-home medical diagnostic kits, remote checkups/diagnosis, on-body sensors for monitoring, and auto-alert generation for medical emergencies. | Smart Health | Medium |
| 17 | **How does 'Pollution and Calamity Monitoring' benefit a smart city?** | Monitoring weather/man-made calamities, generating alerts for above-threshold pollutants in air/water, and providing advisories (e.g., air quality index). | Smart Environment Monitoring | Medium |
| 18 | **What is a key feature of 'Smart Energy' systems?** | Smart metering systems, programmable meters, smart grid, smart energy allocation and distribution, and incorporation of traditional and renewable energy sources. | Smart Energy | Medium |
| 19 | **Describe two applications of 'Smart Agriculture'.** | Automatic detection of plant water stress, crop health monitoring, auto-detection of crop infection, auto-application of fertilizers/pesticides, scheduling harvesting, and arranging transfer of harvests. (Any two) | Smart Agriculture | Medium |
| 20 | **What are the four main technological focus areas for IoT in smart cities?** | Data collection, data transmission, data storage, and data analysis. | IoT Technology Stack | Easy |
| 21 | **Why is 'Security and Privacy' a major IoT challenge in smart cities?** | Exposure to attacks, privacy leaks, vulnerability due to open infrastructure, and risks of data leakage from multi-tenancy. | IoT Challenges | Hard |
| 22 | **What does 'Heterogeneity' refer to as an IoT challenge in smart cities?** | The challenge of integrating varying hardware platforms, specifications, radio specifications, software platforms, and accommodating diverse user requirements. | IoT Challenges | Medium |
| 23 | **Give an example of a 'Reliability' challenge in smart city IoT.** | Unreliable communication due to vehicle mobility or device failures. | IoT Challenges | Easy |
| 24 | **What are some challenges associated with 'Large Scale Deployment' in smart cities?** | Delays due to deployment itself, delays due to mobility of deployed nodes, and the distribution of devices affecting monitoring tasks. | IoT Challenges | Medium |
| 25 | **What 'Legal and Social Issues' arise in smart cities, especially concerning user data?** | Services based on user-provided information may be subject to local/national/international laws, and individual/informed consent is required for using humans as data sources. | IoT Challenges | Hard |
| 26 | **What are the characteristics of 'Big Data Issues' in a real-time smart city environment?** | Huge volumes of data, high speeds, various types of data (media, text), the need for cleaning/purification, real-time analysis, and corresponding actuation. | IoT Challenges | Hard |
| 27 | **What specific challenges are mentioned for 'Sensor Networks' in smart cities?** | Deployment challenges, choice of different sensors for sensing, and energy planning (duty cycling) for devices consuming different energy levels. | IoT Challenges | Medium |
| 28 | **How does a smart city improve citizen participation in governance?** | By using ICT tools to increase citizen participation in good governance. | Smart Governance | Easy |
| 29 | **What is the role of 'interconnectivity' in a smart city's services?** | It enables different blocks and components (e.g., school, hospital, police) to communicate and share information, offering seamless and automatic services to citizens. | Smart City Interconnectivity | Medium |
| 30 | **What is the primary difference between a traditional city and a smart city regarding infrastructure?** | A smart city's urban system uses ICT tools to make its infrastructure interactive, efficient, and more accessible than a traditional city. | Smart City vs. Traditional City | Easy |

---

## Lecture 47 : Smart Cities and Smart Homes- II (Lecture 47)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What are the initial components of a smart city that generate data?** | Transport, railways, schools, hospitals, and other IoT devices. | Smart Cities Introduction | Easy |
| 2 | **What are the key characteristics (Vs) of data generated in smart cities?** | Volume (gigantic), Velocity (high), and Variety (multimedia, text, etc.). | Smart City Data | Easy |
| 3 | **Why is simple data availability insufficient for smart city citizens?** | Data needs processing and fusion to provide better insight and be truly useful. | Data Processing Need | Medium |
| 4 | **Define data fusion in the context of smart cities.** | Combining information from multiple sensor sources to enhance decision-making. | Data Fusion Definition | Easy |
| 5 | **What is the primary goal of data fusion in smart city environments?** | Optimum utilization of massively collected data from different sources across different platforms. | Data Fusion Purpose | Medium |
| 6 | **Name one challenge related to data imperfection in data fusion.** | Uncertainty and inaccuracies due to inherent device limitations (e.g., sensors). | Data Fusion Challenge | Easy |
| 7 | **What does 'ambiguity' refer to as a challenge in data fusion?** | Data having outliers (far from similar points) or missing data points. | Data Fusion Challenge | Medium |
| 8 | **Explain the 'conflicts' challenge in data fusion.** | Data collected from different sensors about the same thing might be conflicting or contradicting. | Data Fusion Challenge | Medium |
| 9 | **What is the 'alignment' challenge in data fusion?** | It arises when sensor data frames need to be converted to a singular frame prior to transmission. | Data Fusion Challenge | Hard |
| 10 | **How does data fusion improve intelligence compared to single-source data?** | Collective data is richer, generating better intelligence and insight. | Data Fusion Opportunity | Easy |
| 11 | **What is 'optimal amalgamation' in data fusion?** | Optimally integrating data to gain more insight, ideally in real-time for meaningful decisions. | Data Fusion Opportunity | Medium |
| 12 | **How can data fusion be beneficial for low-power, low-precision sensors?** | It enhances the collective information content obtained from multiple such sensors. | Data Fusion Opportunity | Medium |
| 13 | **List the four stages of data fusion.** | Decision level, Feature level, Pixel level, Single level. | Data Fusion Stages | Medium |
| 14 | **What happens at the 'decision level' in data fusion?** | Coming up with an ensemble of decisions. | Data Fusion Stages | Easy |
| 15 | **Describe 'feature level' fusion.** | Fusion of information prior to decision making, integrating different features. | Data Fusion Stages | Medium |
| 16 | **Where does 'pixel level' fusion occur?** | Fusion of information at the imaging device level itself. | Data Fusion Stages | Easy |
| 17 | **What is 'single level' fusion?** | Fusion of information at the sensor node or within the local area network itself. | Data Fusion Stages | Medium |
| 18 | **Name two categories of mathematical methods used for data fusion.** | Probability-based schemes (e.g., Bayesian analysis) and AI-based schemes (e.g., ANN, ML, DNN, CNN). | Data Fusion Methods | Medium |
| 19 | **What is the role of Artificial Intelligence (AI) in smart cities regarding sensors and actuators?** | To make highly accurate decision-making possible between sensors and actuators. | AI in Smart Cities | Easy |
| 20 | **Name two types of sensors used in autonomous vehicles for environmental interaction.** | Lidar, ultrasonic sensors, GPS, and cameras. | Autonomous Vehicles | Easy |
| 21 | **What is the difference in scope between Lidar and ultrasonic sensors for autonomous vehicles?** | Lidar gives a bigger picture of obstructions, while ultrasonic sensors give a small-scale picture. | Autonomous Vehicles | Medium |
| 22 | **How does smart parking benefit drivers directly?** | It shortens parking search time. | Smart Parking Benefits | Easy |
| 23 | **List two environmental benefits of smart parking.** | Reduces traffic congestion, reduces pollution (by keeping lingering vehicles off the road), and reduces fuel consumption. | Smart Parking Benefits | Medium |
| 24 | **What are the three functional layers of smart parking?** | Information collection, System deployment, and Service dissemination. | Smart Parking Layers | Medium |
| 25 | **Name two methods for information collection in smart parking.** | Sensors (individual, networked), parking meters, and crowd sensing (smartphones). | Smart Parking Information Collection | Medium |
| 26 | **Compare stationary and mobile sensors for smart parking information sensing.** | Stationary sensors require large numbers; mobile sensors require fewer and collect information along the route. | Smart Parking Sensing | Hard |
| 27 | **Name two energy-efficient solutions for smart cities.** | Lightweight protocols, schedule optimization, predicting models for energy consumption, cloud-based approach, or low-power cognitive management framework. | Energy Management | Medium |
| 28 | **List three renewable sources for energy harvesting in smart cities.** | Sun, wind, heat, vibration, or RF sources. | Energy Harvesting | Easy |
| 29 | **Give an example of dedicated energy harvesting for IoT devices.** | Solar panels deployed near sensor nodes (e.g., in agricultural fields) to power them. | Energy Harvesting | Medium |
| 30 | **What factors determine the amount of energy harvested?** | The distance between the device and the source, the sensitivity of the harvesting circuit, and the environment. | Energy Harvesting | Hard |

---

## Lecture 48 : Smart Cities and Smart Homes- III (Lecture 48)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What is the primary focus of this lecture (Part III) regarding smart environments?** | Smart Homes. | Smart Homes Introduction | Easy |
| 2 | **How do smart homes integrate technology?** | By integrating ICT technologies to make homes 'smart'. | Smart Homes Introduction | Easy |
| 3 | **Give an example of an activity that can be made smarter in a smart home.** | Automated cooking (e.g., device fetching food from fridge, microwaving, serving). | Smart Home Applications | Medium |
| 4 | **List two benefits of a smart home environment.** | Better healthcare, improved activity efficiency, personalized and safe home space. | Smart Home Benefits | Easy |
| 5 | **What are the key components of a smart home infrastructure?** | Sensors, actuators, robotic devices, and intelligent networking infrastructure. | Smart Home Infrastructure | Medium |
| 6 | **Name two major corporations investing in smart home systems.** | GE, Cisco, Google, Microsoft. | Smart Home Industry | Easy |
| 7 | **What does a smart home environment provide in terms of cost and efficiency?** | Productive and cost-effective environment, maximizes occupant effectiveness, efficient management with minimum lifetime costs. | Smart Home Benefits | Medium |
| 8 | **List the five main components of a smart home system.** | Sensor networks, intelligent control, intelligent management, communication network infrastructure, smart features & automatic responses. | Smart Home Components | Hard |
| 9 | **What is a Home Area Network (HAN) analogous to?** | Local Area Network (LAN) or Personal Area Network (PAN) but specifically for a home. | Home Area Network | Easy |
| 10 | **What is the primary function of a multiprotocol gateway in a HAN?** | To bridge non-IP networks to IP networks, supporting different protocols. | HAN Elements | Medium |
| 11 | **What are the advantages of a wired Home Area Network?** | Easy integration with existing infrastructure (telephone, cable), low cost. | Wired HAN | Medium |
| 12 | **What is the main limitation of a wired Home Area Network?** | Restricted mobility for users. | Wired HAN | Easy |
| 13 | **Name three wireless technologies used in Home Area Networks.** | WiFi, Zigbee, Z-Wave, 6LoWPAN, EnOcean. | Wireless HAN | Medium |
| 14 | **What unique characteristic does EnOcean technology offer for wireless HANs?** | It harvests energy and is battery-free. | Wireless HAN Technologies | Medium |
| 15 | **What does UPnP stand for and what is its primary function?** | Universal Plug and Play; an application layer protocol standard for web-based applications, enabling zero-configuration networking and automatic discovery. | HAN Standards (UPnP) | Hard |
| 16 | **Which companies created the DLNA (Digital Living Network Alliance)?** | Sony, Intel, and Microsoft. | HAN Standards (DLNA) | Medium |
| 17 | **What is the purpose of DLNA in a smart home?** | Connects cable-based networks with wireless networks for increased sharing of media content. | HAN Standards (DLNA) | Medium |
| 18 | **What types of existing communication infrastructure does the KNX standard utilize?** | Power lines, coaxial cables, twisted pair, RF. | HAN Standards (KNX) | Medium |
| 19 | **What is a key component of every device in a LONWORKS network?** | A Neuron chip, which includes a transceiver and application electronics. | HAN Standards (LONWORKS) | Hard |
| 20 | **Which IEEE standard defines the physical and MAC layers for Zigbee?** | IEEE 802.15.4. | HAN Standards (Zigbee) | Medium |
| 21 | **What are the main goals of Zigbee technology in terms of cost and energy?** | Aims at low cost and low energy devices. | HAN Standards (Zigbee) | Easy |
| 22 | **How does the X10 standard enable remote control?** | Over power lines and existing electrical wirings. | HAN Standards (X10) | Medium |
| 23 | **What are the typical applications for X10 technology due to its low speed and data rate?** | Control of lighting, appliance networks, and security sensors. | HAN Standards (X10) | Medium |
| 24 | **Describe the architecture of Domonet.** | Uses XML for description, web services for control, follows a service-oriented architecture, uses a central gateway and tech managers. | HAN Architectures (Domonet) | Hard |
| 25 | **What is a key characteristic of the Jini architecture regarding its central node?** | It constructs an organized distribution system without a central node. | HAN Architectures (Jini) | Medium |
| 26 | **Why is Jini architecture considered portable?** | It is based on the Java environment, using JVM and bytecode, making applications portable wherever JVM is installed. | HAN Architectures (Jini) | Hard |
| 27 | **What is the Hydra Project primarily focused on?** | Developing middleware for embedded intelligent systems in IoT environments, especially for devices with limited resources. | HAN Initiatives (Hydra) | Medium |
| 28 | **In the Hydra protocol stack, what acts as a proxy between the device and the middleware?** | An embedded Hydra client within each device. | HAN Initiatives (Hydra) | Hard |
| 29 | **What does the Amigo initiative aim to achieve in networked home environments?** | Ambient intelligence systems with user-friendly interfaces, interoperability, and automatic discovery of devices and services. | HAN Initiatives (Amigo) | Medium |
| 30 | **What is the difference between a wired and wireless HAN in terms of user mobility?** | Wired HAN restricts mobility, while wireless HAN improves it. | HAN Comparison | Easy |

---

## Lecture 49 : Connected Vehicles- I (Lecture 49)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What is the primary goal of connected vehicles?** | To make communication possible between different vehicles, between a vehicle and a pedestrian user, and between a vehicle and roadside infrastructure. | Connected Vehicles Introduction | Easy |
| 2 | **How do connected vehicles differ from standalone vehicles with embedded sensors?** | Standalone vehicles have embedded sensors but connected vehicles enable communication between different entities (vehicles, pedestrians, infrastructure). | Connected Vehicles Introduction | Easy |
| 3 | **List three types of communication possible in a connected vehicle scenario.** | Vehicle-to-vehicle (V2V), vehicle-to-pedestrian (V2P), and vehicle-to-infrastructure (V2I). | Connected Vehicles Communication | Easy |
| 4 | **What are some historical precursors to connected vehicles mentioned in the lecture?** | Vehicular communication, Intelligent Transportation Systems (ITS), Vehicular Ad Hoc Networks (VANETs), and Vehicular Sensor Networks (VSNs). | Connected Vehicles History | Medium |
| 5 | **Name three key challenges in building connected vehicles.** | Security, privacy, scalability, reliability, quality of service, and the lack of any singular global standard for connectivity. | Connected Vehicles Challenges | Medium |
| 6 | **Why is privacy a significant concern in connected vehicles?** | Vehicular data could be leaked, revealing sensitive information like location, which could pose security or safety threats to users. | Connected Vehicles Challenges | Medium |
| 7 | **Explain the scalability challenge in connected vehicles.** | It involves managing a large number of highly mobile devices, with vehicles constantly entering and leaving cities, especially during peak hours, requiring tracking and management. | Connected Vehicles Challenges | Hard |
| 8 | **What is the relationship between connected vehicles, vehicular cloud, and IoT?** | Connected vehicles are conceptualized as part of the vehicular cloud, and both are considered enablers of the Internet of Things (IoT). | Connected Vehicles Ecosystem | Medium |
| 9 | **List three stakeholders of connected vehicles.** | Academia, law enforcement bodies, automobile companies, government agencies, standardization groups, and cloud service providers. | Connected Vehicles Stakeholders | Easy |
| 10 | **Define V2X (Vehicle-to-Everything).** | V2X is part of the future Intelligent Transportation System, enabling vehicles to wirelessly share diverse information with other vehicles, pedestrians, or fixed infrastructures. | V2X | Easy |
| 11 | **What are the benefits of V2X in terms of traffic management and safety?** | V2X allows for traffic management, ensuring on-road and off-road safety, and mobility for travelling. | V2X Benefits | Easy |
| 12 | **What kind of architecture does V2X typically follow?** | A distributed architecture where contents are widely distributed over the network, often using content-centric communication. | V2X Architecture | Medium |
| 13 | **Why is TCP/IP not ideal for V2X implementation?** | TCP/IP is designed for single pair communication, is location-dependent, identifies only endpoint addresses, and restricts the mobility of different nodes. | TCP/IP vs. CCN | Medium |
| 14 | **What is the core focus of Content-Centric Networking (CCN)?** | CCN focuses on the data itself rather than the actual location of the data. | Content-Centric Networking | Easy |
| 15 | **How does CCN handle data requests compared to TCP/IP?** | In CCN, a query for data is broadcasted, and whoever has that data sends it. TCP/IP fetches data from a specific, located database. | Content-Centric Networking | Medium |
| 16 | **Describe the naming convention in Content-Centric Networks.** | Data is hierarchically named (e.g., x.y.z), allowing access to a particular part of the data without needing the entire conversation. | Content-Centric Networking | Medium |
| 17 | **List two advantages of CCN for highly mobile environments.** | It enables scalable and efficient data dissemination, allows for low data traffic through network caching, and works well without needing to track source/destination/intermediate hops. | Content-Centric Networking | Medium |
| 18 | **What are the two main protocols used in Vehicular Ad Hoc Networks (VANETs)?** | Dedicated Short Range Communication (DSRC) and Wireless Access in Vehicular Environments (WAVE) protocol. | VANETs Protocols | Easy |
| 19 | **How does VANET topology differ from typical mobile ad hoc networks (MANETs)?** | VANETs have a highly dynamic topology where vehicles are highly mobile, continuously changing positions, and connections are constantly breaking and making. | VANETs Features | Medium |
| 20 | **Why do VANETs have less restriction on energy and computational power compared to standalone IoT devices?** | Vehicles have stored energy sources and computational sources that are much higher. | VANETs Features | Easy |
| 21 | **What makes mobility patterns in VANETs predictable?** | Vehicles are restricted within roads, and the road structure limits and makes their mobility patterns predictable. | VANETs Features | Medium |
| 22 | **Name three safety applications of VANETs.** | Emergency braking, lane change warning, collision avoidance, and hazard notification. | VANETs Applications | Easy |
| 23 | **Give two examples of efficiency applications for VANETs.** | Congestion management, electronic toll collection, and parking availability. | VANETs Applications | Easy |
| 24 | **How is routing performed in Content-Centric Networking within VANETs?** | Routing is based on the name of the content, not its location. Individual content name prefixes are advertised by routers. | CCN in VANETs | Medium |
| 25 | **What is a Forwarding Information Base (FIB) in CCN?** | A base built by routers that advertise content name prefixes, used for routing based on the name of the content. | CCN in VANETs | Medium |
| 26 | **What is the 'Content Store' in CCN and its function?** | It acts as a cache where uniquely identified named data chunks are stored, allowing subsequent requests for stored data to be served from it, reducing network load. | CCN in VANETs | Medium |
| 27 | **Describe the three layers of the 'Body and Brain' architecture for connected vehicles.** | The Sense and Execution Layer, the Network and Transmission Layer, and the Decision Layer. | Body and Brain Architecture | Easy |
| 28 | **What components are found in the Sense and Execution Layer of the Body and Brain architecture?** | Intelligent nodes, sensors (ladar, radar, proximity), actuators (steering, brakes, lights), and different radios. | Body and Brain Architecture | Medium |
| 29 | **What is the primary role of the Network and Transmission Layer in the Body and Brain architecture?** | It is the communication layer, primarily using an in-vehicle bus system and various communication components, sitting between the sensing and decision layers. | Body and Brain Architecture | Medium |
| 30 | **How do the administrative and supervisory nodes function in the Decision Layer?** | The administrative node monitors transmitted information, while the supervisory node sends commands to the network and transmission layer for actuators. | Body and Brain Architecture | Hard |

---

## Lecture 50 : Connected Vehicles- II (Lecture 50)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What defines an "intelligent" connected vehicle?** | Intelligent connected vehicles involve the implementation of software, analytics, and machine learning for inferences, predictions, and intelligent decision-making based on data from embedded hardware and historical records. | ICV Basics | Easy |
| 2 | **What are the primary sources of data for intelligent decision-making in ICVs?** | Data is obtained from embedded hardware (sensors, actuators) and historical data collected from different vehicles and sites. | ICV Data Sources | Easy |
| 3 | **Describe a scenario where cooperative intelligence in ICVs can prevent collisions.** | Vehicles on a road can cooperatively help each other avoid collisions, for example, when one vehicle attempts to pass another, by sharing data and making intelligent decisions. | ICV Scenarios | Medium |
| 4 | **How can ICVs address blind spots at city intersections?** | ICVs can cooperate by sharing sensor data to detect vehicles or pedestrians hidden by buildings or parked cars, preventing collisions that would otherwise occur due to blind spots. | ICV Scenarios | Medium |
| 5 | **What spectrum band did the US DOT and FCC allocate for intelligent connected vehicles?** | 75 MHz in the 5850-5925 MHz band. | ICV Technology | Easy |
| 6 | **Which communication technology primarily supports the 75 MHz band for ICVs?** | DSRC (Dedicated Short-Range Communications). | ICV Technology | Easy |
| 7 | **Name two IEEE standards for DSRC implementation in ICVs.** | IEEE 802.11p and IEEE 1609. | ICV Standards | Medium |
| 8 | **Name two SAE standards related to ICV implementations.** | SAE J2735 and SAE J2945. | ICV Standards | Medium |
| 9 | **What is the purpose of the IEEE 1609.0 draft standard?** | It is a draft standard for WAVE (Wireless Access in Vehicular Environments) architecture. | ICV Standards | Hard |
| 10 | **What does IEEE 1609.2 cover in the DSRC protocol stack?** | It covers security services for applications and management of messages, cutting across all layers of the stack. | DSRC Protocol Stack | Medium |
| 11 | **What are the bottom two layers of the DSRC protocol stack?** | IEEE 802.11 Physical (PHY) and IEEE 802.11p MAC (Media Access Control). | DSRC Protocol Stack | Medium |
| 12 | **What is the function of IEEE 1609.4 in the DSRC protocol stack?** | It defines the DSRC WAVE MAC (Media Access Control). | DSRC Protocol Stack | Medium |
| 13 | **What transport layer protocols are typically used in the DSRC stack?** | IPv6 and TCP/UDP. | DSRC Protocol Stack | Easy |
| 14 | **What was the focus of Phase 1 in Intelligent Connected Vehicle development?** | Infotainment service availability with remote information processing, based on 2G/3G technology. | ICV Development Phases | Medium |
| 15 | **What was the focus of Phase 2 in Intelligent Connected Vehicle development?** | Intelligent Transportation Service, utilizing 4G LTE or DSRC technology. | ICV Development Phases | Medium |
| 16 | **What was the ultimate goal of Phase 3 in Intelligent Connected Vehicle development?** | To connect all vehicles to the cloud. | ICV Development Phases | Easy |
| 17 | **How do ICVs enable a "Forward Collision Warning" scenario?** | Vehicles share information regarding speed, direction, and braking status to cooperatively estimate collision courses and prevent accidents. | ICV Scenarios | Medium |
| 18 | **What does "V2P" stand for in the context of ICV scenarios?** | Vehicle-to-Pedestrian, often related to vulnerable road user safety. | ICV Scenarios | Easy |
| 19 | **What are the three main types of communication in Vehicular Ad Hoc Networks (VANETs)?** | In-vehicle communication, Ad-hoc communication (Vehicle-to-Vehicle), and Infrastructure-based communication (Vehicle-to-Infrastructure). | VANETs | Easy |
| 20 | **What are OBUs and ADAS units in in-vehicle communication?** | OBUs (On-Board Units) are fixed on vehicles. ADAS (Advanced Driver Assistance System) units comprise various sensors (cameras, proximity, engine, radar) and actuators. | In-Vehicle Communication | Medium |
| 21 | **Name three communication technologies typically used for in-vehicle communication.** | Controller Area Network (CAN), Vehicular Power Line Network (VPLN), and Ethernet. | In-Vehicle Communication | Medium |
| 22 | **In ad-hoc communication, what is the role of intermediate vehicles?** | Intermediate vehicles can act as relays for messages, facilitating Vehicle-to-Vehicle (V2V) communication. | Ad-hoc Communication | Easy |
| 23 | **What is the primary communication mode for ad-hoc communication in VANETs?** | V2V (Vehicle-to-Vehicle) or V2I (Vehicle-to-Infrastructure) using the DSRC stack (IEEE 802.11p). | Ad-hoc Communication | Medium |
| 24 | **How do RSUs (Road Side Units) connect to the internet in the infrastructure domain?** | RSUs connect to the internet by means of gateways. | Infrastructure Communication | Easy |
| 25 | **How do vehicles communicate with the internet when RSUs are present?** | Vehicles communicate with the internet via V2I interfaces through the RSUs. | Infrastructure Communication | Easy |
| 26 | **How do vehicles communicate with each other or the internet when RSUs are *not* present?** | They communicate through cellular networks like 3G or 4G LTE. | Infrastructure Communication | Medium |
| 27 | **List three advantages of V2X communication.** | Increases traffic safety, increases driver safety, optimizes travel time, improves fuel efficiency, and enables easier driving in low visibility or unfavorable weather conditions. | V2X Advantages | Easy |
| 28 | **List three disadvantages of V2X communication.** | Isolation of privacy, loss of data control, collection of personal data, secondary use of data, use by unauthorized entities, and tracking of movements. | V2X Disadvantages | Easy |
| 29 | **What does "secondary use of data" mean as a disadvantage of V2X?** | It refers to the data collected from vehicles being used for purposes other than its original intent, potentially by unauthorized entities. | V2X Disadvantages | Medium |
| 30 | **What is the significance of IEEE 1609.11 in the context of WAVE standards?** | It defines the Over-The-Air Data Exchange Protocol for Intelligent Transportation Systems (ITS). | ICV Standards | Hard |

---

# Week 11

## Lecture 51: Smart Grid- I (Lecture 51)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What is the primary goal of a Smart Grid?** | To make the traditional electrical grid smart through the use of advanced information and communication technologies (ICT tools). | Smart Grid Definition | Easy |
| 2 | **Describe the typical flow of electricity and communication in a traditional electrical grid.** | Unidirectional flow of electricity from centralized power plants to consumers, and unidirectional communication from source to end consumers. | Traditional Grid | Easy |
| 3 | **How is a Smart Grid characterized in terms of its system type?** | It is a cyber-physical system, where the cyber (internet/network) part is tightly intertwined with the physical system. | Smart Grid Characteristics | Medium |
| 4 | **According to NIST, what are the key features of a modernized grid?** | Enables bi-directional flow of energy and uses two-way communication and control capabilities, leading to new functionalities and applications. | Smart Grid Definition | Medium |
| 5 | **List three general benefits of a Smart Grid over a traditional grid.** | More efficient electricity transmission, quicker restoration after disturbances, reduced operations and management costs. | Smart Grid Benefits | Easy |
| 6 | **How does a Smart Grid help with peak demand?** | It helps reduce peak demand, which can lower electricity rates by moderating distribution over the entire day. | Smart Grid Benefits | Medium |
| 7 | **What is a key advantage of Smart Grid regarding renewable energy sources?** | Better integration of customer-owned power generation systems, including renewable energy systems like solar and wind, allowing surplus energy to be fed back to the main grid. | Renewable Energy | Medium |
| 8 | **How does Smart Grid address security concerns?** | It provides improved security, addressing issues like power theft and vulnerability to different attacks. | Smart Grid Benefits | Medium |
| 9 | **What information can customers access in a Smart Grid regarding their energy usage?** | Updated information of their energy usage in real-time, allowing them to monitor and program their consumption. | Customer Benefits | Easy |
| 10 | **How do smart appliances function in a Smart Grid to benefit consumers?** | They can be programmed to run during off-peak hours to lower energy bills, responding to signals from the energy service provider. | Customer Benefits | Medium |
| 11 | **How do pricing options differ for consumers in a Smart Grid compared to a traditional grid?** | Smart Grid allows for different pricing levels and costs at different times of the day, week, or month, unlike the single rate in traditional grids. | Customer Benefits | Medium |
| 12 | **How does Smart Grid improve reliability for other stakeholders regarding power outages?** | It reduces the possibilities of blackouts (complete power cut-off) and brownouts (reduced voltage levels for a few hours). | Stakeholder Benefits | Medium |
| 13 | **Define 'blackout' in the context of electrical grids.** | A complete power cut-off for longer durations of time, where power consumption is no longer possible. | Grid Terminology | Easy |
| 14 | **Define 'brownout' in the context of electrical grids.** | Reduced levels of voltage for a few hours, often due to intentionally or unintentionally lower electricity load in the grid. | Grid Terminology | Easy |
| 15 | **Explain the 'self-healing behavior' property of a Smart Grid.** | If something goes wrong (e.g., a component or subsystem breaks down), the system can heal itself and continue to function as usual without much interruption. | Smart Grid Properties | Medium |
| 16 | **What is 'load forecasting' in a Smart Grid and its benefit?** | The ability to forecast the overall electrical load, allowing for appropriate power distribution and reducing blackout/brownout times. | Smart Grid Properties | Medium |
| 17 | **What two types of flows are present in a Smart Grid architecture?** | Energy flows (electrical flow) and information flows (communication flow). | Smart Grid Architecture | Easy |
| 18 | **Name three key components found within a Smart Home in a Smart Grid context.** | Smart meters, smart appliances, and home power generation systems (e.g., solar panels). | Smart Home | Easy |
| 19 | **What is the primary role of a smart meter in a Smart Home?** | It acts as the smart grid interface between the consumer and the energy service provider, operating digitally to allow automated and complex information transfer. | Smart Home | Medium |
| 20 | **What is the function of Home Energy Management Systems (HEMS) in a Smart Home?** | They allow consumers to track energy use, monitor real-time information and price signals, and create settings to automatically use power when prices are lowest. | Smart Home | Medium |
| 21 | **What can consumers do with surplus energy generated by their home power management systems in a Smart Grid?** | They can feed it back into the grid, potentially acting as energy generators and earning additional money. | Smart Home | Medium |
| 22 | **Give two examples of renewable energy sources mentioned in the context of Smart Grid.** | Wind and solar power. | Renewable Energy | Easy |
| 23 | **Explain 'Time of Use Pricing' as a consumer engagement method.** | Consumers are encouraged to consume energy during off-peak hours when the energy load is less, benefiting both consumers (lower rates) and service providers (better load management). | Consumer Engagement | Medium |
| 24 | **What is 'Net Metering' and how does it benefit consumers?** | With smart meters, consumers are paid if they supply excess generated energy to the grid (higher price during on-peak, lower during off-peak), and their final bill depends on inflow and outflow. | Consumer Engagement | Hard |
| 25 | **What types of financial incentives can energy service providers offer to consumers in a Smart Grid?** | Participation incentives for shifting appliance operation to off-peak hours, or for using stored energy from batteries or plug-in hybrid electric vehicles. | Consumer Engagement | Medium |
| 26 | **What is the fundamental difference in communication between a Smart Grid and a traditional electrical grid?** | Traditional grid has unidirectional communication; Smart Grid has bi-directional communication. | Comparison | Easy |
| 27 | **What alternative names are sometimes used for Smart Grid, highlighting its advanced nature?** | 'Electricity with brain,' 'energy internet,' or 'electro net.' | Smart Grid Terminology | Easy |
| 28 | **What is the role of ICT tools in making a traditional electrical grid 'smart'?** | Advanced information and communication technologies (ICT tools) are used to achieve higher reliability, efficiency, and overall smartness in power systems. | Smart Grid Technology | Medium |
| 29 | **How does Smart Grid improve the management of distributed energy sources?** | It allows for improved management of distributed sources of energy, their storage, and use, including microgrids and renewable sources. | Smart Grid Benefits | Medium |
| 30 | **What is the overarching vision of a Smart Grid?** | To transform the traditional power grid into a new cyber-physical system using ICT tools to make it more efficient, secure, and useful to consumers. | Smart Grid Vision | Easy |

---

## Lecture 52: Smart Grid- II (Lecture 52)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What are two facets of a smart grid discussed in the lecture?** | Smart home and consumer engagement. | Smart Grid Basics | Easy |
| 2 | **What is a key drawback of traditional operation centers in electrical grids?** | Limited control capabilities, no means to detect oscillation, limited information about energy flow, or grid instability due to excess generation. | Traditional Grid Drawbacks | Medium |
| 3 | **How does a smart grid operation center improve reliability and minimize blackouts?** | By providing information and control on the transmission system. | Smart Grid Operation Center | Easy |
| 4 | **What are PMUs and what is their primary function in a smart grid?** | Phasor Management Units. They sample voltage and current at a fixed rate to provide a snapshot of the active power system, increasing sampling rate for dynamic scenarios. | PMUs | Medium |
| 5 | **How do multiple PMUs contribute to advanced grid management?** | They can be networked to form a 'phasor network,' providing connected information to SCADA systems for further analytics. | PMUs & Phasor Network | Hard |
| 6 | **Describe the 'self-healing capability' of smart grid operation centers.** | It dampens unwanted power oscillations, avoids unwanted current flows, and reroutes power to prevent overloading. | Self-Healing Grid | Medium |
| 7 | **What does 'distributed intelligence' imply in a smart grid?** | The energy distribution system is equipped with smart devices, sensor-based devices, and IoT devices. | Distributed Intelligence | Easy |
| 8 | **How does distributed intelligence help in power outage management?** | Along with smart meters, it helps identify the source of a power outage automatically using sensor data. | Distributed Intelligence | Medium |
| 9 | **Explain how distributed intelligence optimizes reactive power in the system.** | It maintains the proper level of reactive power, protecting and controlling feeder lines, by managing devices that store and release energy. | Distributed Intelligence | Hard |
| 10 | **What are PEVs?** | Plug-in Electrical Vehicles. | PEVs | Easy |
| 11 | **How do PEVs interact with the smart grid infrastructure for charging?** | They connect to charging stations, and owners pay based on the amount of charge consumed, similar to gas stations. | PEVs & Charging | Medium |
| 12 | **What are two benefits of PEVs in the context of a smart grid?** | Reducing dependency on oil and being a clean energy source (when running on electricity). | PEVs Benefits | Medium |
| 13 | **How can PEVs be utilized to support the grid during peak and off-peak hours?** | Consumers are encouraged to charge PEVs during off-peak hours, and PEVs can also be used as an energy source during on-peak hours. | PEVs & Grid Support | Hard |
| 14 | **What are the two types of flows in a smart grid?** | Flow of energy and flow of information. | Smart Grid Flows | Easy |
| 15 | **List the main components of the communication aspect of a smart grid.** | Smart appliances, smart meters, gateways, Data Aggregator Units (DAUs), and Meter Data Management System (MDMS). | Smart Grid Communication | Medium |
| 16 | **What is the primary communication protocol used by gateways in a smart grid?** | WiFi (802.11). | Communication Protocols | Easy |
| 17 | **What is the role of a smart meter in smart grid communication?** | It forwards energy consumption information from home appliances to gateways and forwards billing/control information from gateways to home appliances. | Smart Meters | Medium |
| 18 | **What is the function of Data Aggregation Units (DAUs)?** | They aggregate energy consumption or energy request data from a certain geographical area, acting as a clustering approach. | DAUs | Medium |
| 19 | **Explain the crucial role of the Meter Data Management System (MDMS) in a smart grid.** | It acts as a centralized coordinator for smart grid communication, handled by service providers, part of the operation center, and decides the price per unit energy to be paid by consumers at different times. | MDMS | Hard |
| 20 | **Why is security 'very crucial' in a smart grid?** | Because it is a cyber-physical system, and cyber-based systems are vulnerable to various attacks. | Smart Grid Security | Easy |
| 21 | **Name three types of vulnerabilities in a smart grid.** | Integrity, availability, dynamic system attacks, physical threats, or complex and coordinated attacks. | Smart Grid Security | Medium |
| 22 | **Describe a Data Injection Attack (DIA) and its potential impact on a smart grid.** | An attacker manipulates system measurements (e.g., false data) to make it seem like congestion or thermal limits are not reached, inducing large fluctuations, tripping lines, disconnecting generators, or causing blackouts. | Security Attacks (Integrity) | Hard |
| 23 | **How can an attacker financially benefit by compromising the integrity of a smart grid system?** | By manipulating electricity prices, one can buy energy at a lower price and make high profits, or even steal electricity. | Security Attacks (Integrity) | Medium |
| 24 | **What is a Denial of Service (DoS) attack in the context of smart grid security?** | An attack that compromises the availability of the system. | Security Attacks (Availability) | Easy |
| 25 | **How does cloud technology augment smart grid capabilities?** | By providing storage for vast amounts of information and enabling advanced applications for energy management, information management, and security management. | Cloud Integration | Medium |
| 26 | **Explain how cloud applications enhance energy management in a smart grid.** | They enable efficient scheduling of customer requests, integrate/analyze information from multiple smart meters to balance real-time demand/energy curves, and share real-time energy usage/pricing information. | Cloud for Energy Management | Hard |
| 27 | **How does cloud computing facilitate information management in a smart grid?** | It provides computing and storage mechanisms for processing information from different components, sharing supply/demand conditions, and enabling real-time distribution data management and parallel processing. | Cloud for Information Management | Medium |
| 28 | **What role do private cloud platforms play in smart grid security?** | They are suitable for scaling out and processing millions of user data, allowing electrical utilities to quickly and efficiently deal with malicious software, and developing information security and protection systems. | Cloud for Security Management | Hard |
| 29 | **What are the two types of 'cloud' conceptually discussed in the context of cloud-integrated smart grids?** | Cloud data storage and cloud energy storage. | Cloud Integration | Medium |
| 30 | **Name one communication protocol used for smart grid appliances mentioned in the lecture.** | C-Bus, DECT, EnOcean, Universal Power Line Bus, Thread, Zigbee, or Simple Cable Solution (SCS). | Communication Protocols | Easy |

---

## Lecture 53: Industrial Internet of Things- I (Lecture 53)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What is IIoT?** | Industrial Internet of Things, a specialized form of IoT focusing on industrial systems and processes. | IIoT Basics | Easy |
| 2 | **How does IIoT differ from the existing IoT?** | IIoT has a different scope and specificities, focusing on industrial problems and efficiency, unlike consumer-level IoT. | IIoT vs. IoT | Easy |
| 3 | **According to Paul Howarth, what is the current status of IoT as a concept?** | IoT as a concept has crossed the chasm from slide ware to reality with many industries implementing IoT solutions. | IoT Context | Medium |
| 4 | **What is the main aim of IoT?** | To interconnect different smart objects globally, allowing them to be uniquely identified and interoperate. | IoT Basics | Easy |
| 5 | **What is the primary focus of Industrial Internet of Things (IIoT)?** | Industrial systems, industrial automation, enterprise systems, enterprise planning, and product life cycle. | IIoT Focus | Easy |
| 6 | **From which two main concepts does IIoT borrow features?** | Existing Internet of Things (IoT) and the vision of Industry 4.0. | IIoT Scope | Medium |
| 7 | **What is Industry 4.0?** | A framework for automation and data exchange in manufacturing technologies, incorporating cyber-physical systems, IoT, and cloud computing. | Industry 4.0 | Medium |
| 8 | **What is the well-known outcome of Industry 4.0?** | The Smart Factory. | Industry 4.0 | Easy |
| 9 | **What is the difference in scope between IoT and IIoT?** | IoT focuses on consumer-level services/products, while IIoT focuses on the enterprise level. | IIoT vs. IoT | Medium |
| 10 | **Name three integral components for building IIoT solutions.** | Machine learning, big data technology, M2M (machine-to-machine) communication, automation. | IIoT Components | Medium |
| 11 | **How is machine learning used in IIoT?** | Learning from existing data to make things predictive and improve future processes. | IIoT Components | Easy |
| 12 | **Define Machine-to-Machine (M2M) communication.** | Two machines directly talking to each other, communicating to accomplish a task without human intervention. | M2M Communication | Easy |
| 13 | **What approach does IIoT take regarding existing manufacturing/industrial systems?** | Wrap and reuse approach rather than rip and replace approach, meaning re-engineering existing systems with sensors/actuators instead of building from scratch. | IIoT Implementation | Medium |
| 14 | **What characterized the First Industrial Revolution?** | Mechanized production. | Industrial Revolutions | Easy |
| 15 | **What characterized the Second Industrial Revolution?** | Mass production. | Industrial Revolutions | Easy |
| 16 | **What characterized the Third Industrial Revolution?** | Internet and automation in manufacturing. | Industrial Revolutions | Easy |
| 17 | **In which industrial revolution is IIoT featured?** | The Fourth Industrial Revolution. | Industrial Revolutions | Easy |
| 18 | **IIoT combines which generations of industrial automation and internet evolution?** | Fourth generation of industrial automation and second generation of internet evolution. | IIoT Evolution | Medium |
| 19 | **What is the difference between the first and second generations of the internet?** | First generation connects different computers; second generation connects different things/machines. | Internet Evolution | Medium |
| 20 | **How does cloud computing support IIoT?** | Offers computational environments, infrastructure, platforms, software, and huge data storage without requiring industries to purchase them. | Cloud Computing | Medium |
| 21 | **What types of entities are interconnected in an IIoT network?** | Physical objects, different systems/subsystems, platforms, applications, and people. | IIoT Network | Medium |
| 22 | **List four broad requirements for building IIoT.** | Hardware and software connectivity, a cloud platform, application development, and big data analytics. | IIoT Requirements | Medium |
| 23 | **What is the 'anything connectivity' dimension added to 'any time, anywhere' in IIoT access?** | Anything can be accessed at any time from anywhere. | IIoT Requirements | Easy |
| 24 | **What is the goal of building a 'virtualized version of a physical plant' through IIoT systems?** | To create a virtualized plant corresponding to a physical industrial plant, where sensors provide data and instructions can be sent to embedded systems for operations. | IIoT Concepts | Hard |
| 25 | **Why is minimizing latency crucial in IIoT, especially for applications like a welding machine?** | Latency corresponds to data transmission time; high latency can lead to errors (e.g., more welding than required) due to delayed instructions or feedback, impacting precision. | IIoT Design Considerations | Medium |
| 26 | **Why is interoperability important in IIoT network topology?** | Different devices with different specifications, manufactured by different vendors, need to interoperate and form a cohesive network. | IIoT Design Considerations | Medium |
| 27 | **What is the primary focus difference between IoT and IIoT regarding operations?** | IoT focuses on individual convenience; IIoT focuses on efficiency, safety, and security of industrial operations. | IIoT vs. IoT | Medium |
| 28 | **How does the usage of M2M communication differ between IoT and IIoT?** | M2M use in IoT is limited and not very exclusive; IIoT extensively uses M2M communication for automated industrial operations. | M2M vs. IoT/IIoT | Medium |
| 29 | **What is the primary focus of M2M communication compared to IoT?** | M2M focuses on device-to-device communication; IoT focuses more on overall system integration of system components. | M2M vs. IoT | Medium |
| 30 | **What is service management in IIoT?** | The implementation and management of the quality of service which meets the end user demand and increases the overall quality of service. | IIoT Services | Easy |

---

## Lecture 54: Industrial Internet of Things- II (Lecture 54)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What are the primary goals of IIoT implementation in the manufacturing industry?** | Reduce operational costs, improve worker productivity, reduce workplace injuries, optimize resources, reduce waste, and achieve end-to-end automation. | IIoT Applications - Manufacturing | Easy |
| 2 | **How can IIoT solutions benefit the healthcare sector?** | Continuous patient monitoring (on-body sensors), improved treatment outcomes, reduced treatment costs, improved disease detection, improved data accuracy, and better drug inventory control. | IIoT Applications - Healthcare | Easy |
| 3 | **What is a key building block for IIoT in transportation, and what does it involve?** | Intelligent Transportation Systems (ITS) or connected vehicles, involving vehicle-to-sensor, vehicle-to-vehicle, vehicle-to-internet, and vehicle-to-road infrastructure connectivity. | IIoT Applications - Transportation | Medium |
| 4 | **What technology enables vehicle-to-vehicle (V2V) and vehicle-to-road infrastructure (V2I) communication in ITS?** | Dedicated Short Range Communication (DSRC). | IIoT Applications - Transportation | Medium |
| 5 | **How does IIoT contribute to safety in the mining industry?** | RFID/WiFi/Zigbee/Bluetooth sensors for early warning of disasters, monitoring air quality, detecting poisonous gases (SOx, NOx, CO), and oxygen levels. | IIoT Applications - Mining | Medium |
| 6 | **What IIoT elements are used in firefighting infrastructure for safety?** | RFID tags on devices, sensors for automatic diagnosis, early warning, emergency rescue, and real-time monitoring. | IIoT Applications - Firefighting | Easy |
| 7 | **Provide two examples of IIoT applications mentioned in the lecture.** | UAVs for oil pipeline inspection, monitoring food safety using sensors, minimizing worker exposure to hazardous materials, or unmanned marine vehicles for data collection. | IIoT Examples | Easy |
| 8 | **How do IIoT-based digital ecosystems differ from traditional industrial supply chains?** | Digital ecosystems progress faster, adapt quickly to external changes, and shift business focus from products to outcomes, unlike linear traditional supply chains. | IIoT Concepts | Medium |
| 9 | **What is the impact of IIoT on the workforce, particularly regarding job creation?** | IIoT reforms and redefines worker skills, creating new jobs requiring new skill sets (e.g., precision agriculture, digital healthcare, digital mines) rather than cutting jobs. | IIoT Impact | Medium |
| 10 | **Describe the role and capabilities of robots in the IIoT domain.** | Robots can sense, think, act, perform repetitive tasks, are more intelligent, can work under human supervision, and can be reprogrammed to learn faster. | IIoT Components - Robots | Medium |
| 11 | **What is a fundamental challenge in IIoT related to physical assets?** | Identification of objects or things, associating identifiers to them. | IIoT Challenges | Easy |
| 12 | **What data-related challenge is significant in IIoT deployments?** | Managing huge amounts of data. | IIoT Challenges | Easy |
| 13 | **What infrastructure-related challenge must be addressed when deploying IIoT solutions?** | Integrating existing infrastructure into new IIoT infrastructure and enabling data storage. | IIoT Challenges | Medium |
| 14 | **Why is safety considered a fundamental and crucial problem in the industrial sector for IIoT?** | Worker health and safety are primary concerns across various industries (healthcare, mining, transportation, steel), requiring regulatory compliance and environmental protection. | IIoT Challenges - Safety | Medium |
| 15 | **List some specific hazards that IIoT solutions aim to mitigate in industrial environments.** | Handling hazardous substances, oxygen deficiency, particulate matters, radiation, and physiological stress. | IIoT Challenges - Safety | Medium |
| 16 | **What are the key aspects of standardization required for IIoT development?** | Improving interoperability (including semantic interoperability for data semantics) and allowing products/services to perform better. | IIoT Challenges - Standardization | Medium |
| 17 | **What are the two most important concerns regarding security and privacy in IIoT?** | Information security and data privacy protection. | IIoT Challenges - Security & Privacy | Easy |
| 18 | **Provide an example of a privacy concern in IIoT within the healthcare industry.** | Medical data of patients must not be tampered with or altered by unauthorized persons. | IIoT Challenges - Security & Privacy | Medium |
| 19 | **Provide an example of a privacy concern in IIoT within the food industry.** | Deterioration of food items being sent to a company should be kept confidential to protect the company's reputation. | IIoT Challenges - Security & Privacy | Medium |
| 20 | **What factors can hinder the successful adoption of IIoT solutions?** | Lack of vision/leadership, lack of understanding of values among management/employees, costly sensors, and inadequate infrastructure. | IIoT Challenges - Adoption | Medium |
| 21 | **Why is miniaturization of sensors crucial for IIoT?** | It helps reduce overall cost and energy consumption, allowing for smaller, more efficient sensors (e.g., name-spaced sensors) that perform well. | IIoT Challenges - Technology | Medium |
| 22 | **What specific issues in manufacturing are addressed by IIoT to improve operational efficiency?** | Predictive maintenance, savings on scheduled repairs, reduced maintenance costs, and reduced number of breakdowns. | IIoT Challenges - Manufacturing | Medium |
| 23 | **What is a primary benefit of IIoT regarding device interaction?** | Improving the connectivity among devices. | IIoT Benefits | Easy |
| 24 | **How does IIoT impact efficiency and scalability in industrial processes?** | It improves efficiency and allows for easy scaling up of industrial processes and overall productivity. | IIoT Benefits | Easy |
| 25 | **Name two operational benefits provided by IIoT solutions.** | Reduction in operation time and efficient remote diagnosis. | IIoT Benefits | Easy |
| 26 | **What is a key research trend in IIoT related to device interaction?** | Improving communication among different things or objects. | IIoT Research Trends | Easy |
| 27 | **What is a key research trend in IIoT related to power consumption?** | Developing energy-efficient techniques to reduce power consumption by sensors. | IIoT Research Trends | Easy |
| 28 | **What type of middleware development is a research trend in IIoT for better data understanding?** | Developing context-aware Internet of Things middleware. | IIoT Research Trends | Medium |
| 29 | **What is a research trend concerning the capabilities of smart objects in IIoT?** | Creating smart objects with larger memory, processing, and reasoning capabilities. | IIoT Research Trends | Medium |
| 30 | **What are the requirements for sensors in IIoT systems to further their use in industry?** | Very small-sized, less expensive, and easily accessible sensors. | IIoT Components - Sensors | Easy |

---

## Lecture 55: Data Handling and Analytics- I (Lecture 55)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **Why is data handling and analytics crucial in IoT systems?** | IoT systems are heavily data-intensive, producing huge amounts of data that need proper handling and analysis to make things much more efficient and address problems. | IoT Data Importance | Easy |
| 2 | **What is the primary purpose of 'data handling'?** | Data handling ensures that data is stored properly, archived properly, and disposed of in a safe and secure manner during and after the conclusion of a project. | Data Handling Basics | Easy |
| 3 | **How does IoT data relate to 'Big Data'?** | IoT systems produce data with features analogous to the features of Big Data, meaning they are extraordinarily big in different ways. | IoT and Big Data | Easy |
| 4 | **Define Big Data according to one of its definitions.** | Big Data technologies describe a new generation of technologies and architectures designed to economically extract value from very large volumes of a very wide variety of data by enabling high velocity capture, discovery and/or analysis. | Big Data Definition | Medium |
| 5 | **What are the two main challenges posed by Big Data?** | Data is huge in size and flows at large velocities, requiring real-time handling. These data are typically unstructured, making traditional relational database technologies unusable. | Big Data Challenges | Medium |
| 6 | **Differentiate between Structured and Unstructured Data.** | Structured data is easily organized and stored in relational databases (20% of total data). Unstructured data does not abide by any predefined relational model, is very huge in size, and traditional RDBMS techniques are unusable (>80% of total data). | Data Types | Medium |
| 7 | **Give examples of Structured Data.** | Library information systems, student information systems, accounting information systems. | Structured Data Examples | Easy |
| 8 | **Give examples of Unstructured Data.** | Text fields, video, audio, speech, YouTube data, telescope data, most sensor data, camera streams. | Unstructured Data Examples | Easy |
| 9 | **List the 'Seven Vs' characteristics of Big Data.** | Volume, Velocity, Variety, Variability, Veracity, Visualization, and Value. | Big Data Characteristics | Easy |
| 10 | **Explain 'Volume' as a characteristic of Big Data.** | Big Data is characterized by large quantities of data, often more than terabytes of images, video, etc. (e.g., 72 hours of video uploaded to YouTube every minute). | Big Data - Volume | Easy |
| 11 | **Explain 'Velocity' as a characteristic of Big Data.** | Concerns the speed of generation of the data. Data processing time is decreasing, requiring new technologies to handle high velocity data (e.g., 140 million tweets/day, NYSE captures 1 TB/session). | Big Data - Velocity | Easy |
| 12 | **Explain 'Variety' as a characteristic of Big Data.** | Refers to the category to which the data belongs, with most data being unstructured or semi-structured (e.g., text, images, audio, video, web, GPS, sensor data, SMS, documents, PDFs, flash). | Big Data - Variety | Easy |
| 13 | **Explain 'Variability' as a characteristic of Big Data.** | Refers to data whose meaning is constantly changing depending on the context (e.g., language processing, hashtags, geospatial data, multimedia sensor events). | Big Data - Variability | Medium |
| 14 | **Explain 'Veracity' as a characteristic of Big Data.** | Refers to the biases, noise, and abnormality that exist in the data. It's important for programs involving automated decision-making or feeding data into unsupervised machine learning algorithms. | Big Data - Veracity | Medium |
| 15 | **Explain 'Visualization' as a characteristic of Big Data.** | Concerns how to present the data pictorially or in an easily understandable format, enabling decision-makers to see analytics visually and identify new patterns. | Big Data - Visualization | Easy |
| 16 | **Explain 'Value' as a characteristic of Big Data.** | Means extracting useful business information from the scattered info. It includes a large volume and variety of data, easy access, and quality analytics that enable informed decisions. | Big Data - Value | Easy |
| 17 | **List the essential characteristics of Cloud computing as a data handling technology.** | On-demand self-service, broad network access, resource pooling, rapid elasticity, and measured service. | Cloud Computing | Medium |
| 18 | **Name the three basic service models of Cloud computing.** | Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). | Cloud Service Models | Easy |
| 19 | **How do IoT devices contribute to data handling challenges?** | Sensors embedded in different devices and machines generate a lot of data, which needs to be transmitted to remote servers via the internet and handled accordingly. | IoT Data Generation | Easy |
| 20 | **What are the four main stages of data flow from generation to analysis?** | Generation, Acquisition, Storage, and Analysis. | Data Flow | Easy |
| 21 | **What are the key steps involved in 'Data Acquisition'?** | Data collection (from log files, sensors), data transportation (to a storage system), and data preprocessing (to remove noise, redundancy, inconsistency). | Data Acquisition | Medium |
| 22 | **What is the purpose of data preprocessing?** | To remove noise, redundancy, and inconsistency from collected data. It involves integration (combining data from various sources), cleaning (removing inaccuracies), and redundancy mitigation. | Data Preprocessing | Medium |
| 23 | **When is NoSQL database technology particularly useful for data storage?** | NoSQL is very useful for handling the kind of unstructured data exhibited by Big Data and IoT systems, where traditional relational databases (SQL) are not sufficient. | NoSQL Databases | Medium |
| 24 | **Name the three different types of NoSQL databases mentioned.** | Key-value database, column-oriented database, and document-oriented database. | NoSQL Types | Easy |
| 25 | **What is Hadoop?** | Hadoop is a software framework for distributed processing of large datasets across large clusters of computers. It's an open-source implementation for Google's GFS and MapReduce. | Hadoop Definition | Medium |
| 26 | **What are the main building blocks (components) of Hadoop?** | Hadoop Common, HDFS (Hadoop Distributed File System), MapReduce, and YARN (Yet Another Resource Negotiator). | Hadoop Components | Medium |
| 27 | **In HDFS, what is the role of the Name Node?** | The Name Node is a centralized node which maintains the metadata information about the different files storing the data. | HDFS - Name Node | Easy |
| 28 | **In HDFS, what is the role of the Data Node?** | The Data Node is a distributed node that stores the actual data in the form of files, which are again divided into blocks, and each of these blocks is replicated. | HDFS - Data Node | Easy |
| 29 | **How does Hadoop ensure reliability in data storage?** | In HDFS, the actual data stored in Data Nodes is fragmented into blocks, and these blocks are replicated, consequently providing more reliability in the storage of data. | Hadoop Reliability | Medium |
| 30 | **Describe the master-slave architecture in Hadoop concerning Job Tracker and Task Tracker.** | The Job Tracker (master) runs with the Name Node, receives user jobs, and decides how many tasks will run. The Task Tracker (slave) runs on each Data Node, receives tasks from the Job Tracker, and reports its progress. | Hadoop Architecture | Hard |

---

# Week 12

## Lecture 56: Data Handling and Analytics- II (Lecture 56)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What is data analytics?** | The process of examining data sets to draw conclusions about the information they contain, often with the aid of specialized systems and software. | Data Analytics | Easy |
| 2 | **What is the primary purpose of data analytics in commercial industries and research?** | To enable organizations to make more informed business decisions and for scientists/researchers to verify or disprove scientific models, theories, and hypotheses. | Data Analytics | Easy |
| 3 | **What are the two broad forms of analysis mentioned for data?** | Qualitative analysis and Quantitative analysis. | Types of Analysis | Easy |
| 4 | **Define qualitative analysis.** | Deals with the analysis of data that are categorical in nature, not described through numerical values but by descriptive contexts such as text. | Qualitative Analysis | Medium |
| 5 | **Define quantitative analysis.** | Refers to the process by which numerical methods can be used to analyze numerical data. | Quantitative Analysis | Medium |
| 6 | **List methods for gathering qualitative data.** | Interviews, videos, audio recordings, field notes, industry manuals. | Qualitative Analysis | Medium |
| 7 | **What statistical methods are often involved with quantitative analysis?** | Statistical models, analysis of variance (ANOVA), data dispersion, analysis of relationship between variables (contingency and correlation), regression analysis, statistical significance, precision, and error limits. | Quantitative Analysis | Hard |
| 8 | **How do qualitative and quantitative data differ in terms of observation and measurement?** | Qualitative data can be mostly observed, whereas quantitative data can be measured. | Data Types Comparison | Easy |
| 9 | **How do qualitative and quantitative data differ in terms of descriptions and numbers?** | Qualitative data involves descriptions; quantitative data involves numbers. | Data Types Comparison | Easy |
| 10 | **What is the emphasis in qualitative data versus quantitative data?** | In qualitative data, the emphasis is on quality; in quantitative data, the emphasis is on quantity. | Data Types Comparison | Easy |
| 11 | **Give examples of qualitative data.** | Colour, smell, taste. | Data Types | Easy |
| 12 | **Give examples of quantitative data.** | Volume, weight. | Data Types | Easy |
| 13 | **What is one advantage of data analytics related to identifying trends?** | It allows for the identification of important trends. | Data Analytics Advantages | Easy |
| 14 | **How can data analytics help businesses identify performance issues?** | It helps businesses identify performance problems that require some sort of action. | Data Analytics Advantages | Easy |
| 15 | **How does data analytics aid decision-making?** | Analytics can be performed in a visual manner, which can help in faster and better decision making. | Data Analytics Advantages | Easy |
| 16 | **What competitive advantage can data analytics provide?** | Analytics can provide a company with an edge over their competitors. | Data Analytics Advantages | Easy |
| 17 | **Define a statistical model.** | A mathematical equation that is formulated to form the relationship between variables, illustrating how a set of random variables is related to another set of random variables. | Statistical Models | Medium |
| 18 | **How is a statistical model represented?** | As an ordered pair (X, P), where X denotes the set of all possible observations and P refers to the set of probability distributions on X. | Statistical Models | Medium |
| 19 | **What are the two broad categories of statistical models?** | Complete models and incomplete models. | Statistical Models | Easy |
| 20 | **Differentiate between complete and incomplete statistical models.** | Complete models have the same number of variables as the number of equations; incomplete models do not have matching numbers of variables and equations. | Statistical Models | Medium |
| 21 | **What are the steps required to build a statistical model?** | Gather the data, perform descriptive methods, think about what are the predictors, build the model, and then interpret the results. | Statistical Models | Hard |
| 22 | **What is ANOVA (Analysis of Variance)?** | A parametric statistical technique that can be used to compare two or more data sets (populations of samples). | ANOVA | Medium |
| 23 | **What are the key requirements for performing ANOVA?** | A continuous response variable, at least one categorical factor (e.g., age, gender) with at least two or more levels (e.g., location one, location two), and data from approximately normally distributed populations. | ANOVA | Hard |
| 24 | **What are the three properties required to perform ANOVA?** | Independence of case (random sample), normality (normal distribution of each group), and homogeneity (variance between groups should be the same). | ANOVA | Hard |
| 25 | **Name the three types of ANOVA mentioned.** | One-way analysis (one fixed factor), two-way analysis (two factors), and k-way analysis (k factor variables). | ANOVA | Medium |
| 26 | **What is data dispersion?** | A measure of statistical dispersion, a non-negative real number that is zero if all the data are the same and increases as the data becomes more diverse. | Data Dispersion | Medium |
| 27 | **List examples of dispersion measures.** | Range, average absolute deviation, variance, and standard deviation. | Data Dispersion | Medium |
| 28 | **What is a contingency table and what does correlation investigate?** | A contingency table is a matrix format table that displays the multivariate frequency distribution of variables. Correlation investigates the relationship between two continuous variables. | Contingency & Correlation | Medium |
| 29 | **What does Pearson's correlation coefficient measure?** | The strength of association between two continuous variables. | Correlation | Medium |
| 30 | **What is the primary purpose of regression analysis?** | To estimate the relationship among different variables, focusing on the relationship between a dependent variable and one or more independent variables. | Regression Analysis | Medium |

---

## Lecture 57: Case Study: Agriculture (Lecture 57)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What is the primary application of IoT discussed in this case study?** | Smart irrigation in agriculture. | AgriSens Overview | Easy |
| 2 | **What is the name of the smart irrigation management system developed in the case study?** | AgriSens system. | AgriSens Overview | Easy |
| 3 | **What is the public URL for the AgriSens system?** | agrisys.iitkgp.ac.in | AgriSens Overview | Easy |
| 4 | **What specific aspect of agriculture does the AgriSens system primarily focus on?** | Smart water management using IoT. | AgriSens Objectives | Easy |
| 5 | **What is the main objective of the AgriSens system regarding water usage and crop yield?** | To use less water for getting more yield in terms of crop productivity. | AgriSens Objectives | Easy |
| 6 | **What two key soil conditions does AgriSens monitor to automate irrigation?** | Soil moisture content and stagnant water level. | Sensor Data | Easy |
| 7 | **When does the AgriSens system autonomously trigger irrigation?** | When the water level or soil moisture level goes down below a certain threshold. | Automation | Easy |
| 8 | **What is an example of a control signal sent by AgriSens to initiate irrigation?** | Switching the pump on. | Automation | Easy |
| 9 | **Name the three main layers of the AgriSens system architecture.** | Sensing layer, remote processing layer, and application layer. | System Architecture | Medium |
| 10 | **What types of components are primarily found in the sensing layer of AgriSens?** | Different types of sensors (e.g., soil moisture, water level). | System Architecture | Easy |
| 11 | **What is the function of the remote processing layer in the AgriSens architecture?** | To receive data from sensors, run analytics, and process it. | System Architecture | Medium |
| 12 | **What is the purpose of the application layer in the AgriSens system?** | To make processed data available to different applications. | System Architecture | Medium |
| 13 | **Which specific sensor was developed in the lab for monitoring water level in the field for AgriSens?** | A custom-developed water level sensor. | Sensor Hardware | Medium |
| 14 | **Which commercial soil moisture sensor was procured and used in the AgriSens system?** | EC-05 soil moisture sensor. | Sensor Hardware | Medium |
| 15 | **How is the soil moisture sensor typically installed in the field for AgriSens?** | It is dug inside the surface of the earth (mud level). | Sensor Deployment | Easy |
| 16 | **What are the four main units of the AgriSens sensor node design, besides sensors and actuators?** | Processing unit, memory unit, wireless communication unit, and power management unit. | Sensor Node Design | Hard |
| 17 | **What wireless technology is used for communication by the AgriSens sensor node?** | Zigbee. | Communication | Easy |
| 18 | **What are the main components of the AgriSens remote server?** | A repository, a web server, and multi-user servers. | Remote Server | Medium |
| 19 | **How does the multi-user server in AgriSens inform farmers about field conditions?** | Using SMS technology. | Farmer Interaction | Easy |
| 20 | **Describe the grid layout used for sensor deployment in the AgriSens field demo.** | A 6x5 grid, with each element being 3x3 square meters. | Field Deployment | Medium |
| 21 | **How are the sensor nodes in the AgriSens field deployment powered?** | Solar powered. | Sensor Node Power | Easy |
| 22 | **What type of architecture is employed for sensor deployment in AgriSens?** | Cluster-based architecture. | Communication Architecture | Medium |
| 23 | **What communication technology facilitates intra-cluster communication (node to cluster head) in AgriSens?** | Zigbee communication. | Communication | Easy |
| 24 | **What communication technology is used for data transmission from the cluster head to the control room (servers) in AgriSens?** | GPRS communication. | Communication | Easy |
| 25 | **What specific actuators are used to automate irrigation in the AgriSens system?** | Solenoid valves and the pump. | Automation | Medium |
| 26 | **What kind of information can a user monitor remotely through the AgriSens web interface?** | Field conditions, sensor health, and historical data. | Web Interface | Medium |
| 27 | **Name the three types of data plots presented as results from the AgriSens system.** | Soil moisture variation, water level variation, and packet delivery ratio. | Data Analysis | Medium |
| 28 | **What are the three phases of crop growth mentioned in the context of soil moisture and water level variations?** | Vegetative phase, reproductive phase, and maturity phase. | Crop Science | Medium |
| 29 | **What was the typical range for the packet delivery ratio observed in the AgriSens system?** | Between 90% to 100%. | System Reliability | Easy |
| 30 | **List some environmental factors that can cause packet drops in the AgriSens system.** | Noises, interference due to airflow, temperature, solar radiation, and rainfall. | System Reliability | Hard |

---

## Lecture 58: Case Study: Healthcare (Lecture 58)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What is the primary application of IoT discussed in the lecture regarding healthcare?** | The use of IoT for healthcare, particularly for monitoring the physiological condition of human beings. | Healthcare IoT | Easy |
| 2 | **Name some types of sensors used to monitor physiological conditions in healthcare IoT.** | Body temperature sensor, blood pressure sensor, pulse oximeter sensor, ECG sensor, EMG sensor. | Healthcare IoT Sensors | Easy |
| 3 | **Besides the sensor itself, what are the other key components of an IoT sensor node?** | A processing unit, a communication unit, and a power unit. | IoT Sensor Nodes | Medium |
| 4 | **Describe the general data flow from sensing to processing in an IoT healthcare system.** | Sensing -> Communication of sensed data -> Local processing or remote processing and dissemination of results. | Healthcare IoT Architecture | Medium |
| 5 | **How can collected patient data be used to enable preventive care in IoT healthcare?** | By collecting data over time and analyzing it to understand if a critical element is going to come in the future for that particular patient. | Benefits of Healthcare IoT | Medium |
| 6 | **How do sensors help in understanding the effects of therapy on a patient in a hospital setting?** | By monitoring the patient's condition while they are under different types of medications and fitted with devices. | Benefits of Healthcare IoT | Medium |
| 7 | **What are two key advantages of automating healthcare monitoring with IoT sensors and connectivity?** | Reduces manual intervention (attention of doctors) and reduces the chances of errors. | Benefits of Healthcare IoT | Easy |
| 8 | **What is the overall impact of automation in healthcare IoT on efficiency and cost?** | Increases efficiency while reducing the cost of operation and maintenance of a healthcare system. | Benefits of Healthcare IoT | Easy |
| 9 | **What are the three main layers of an IoT healthcare system discussed?** | Sensing layer, Aggregator layer, and Processing layer (which includes the cloud platform). | Healthcare IoT Architecture | Medium |
| 10 | **Give examples of devices or technologies found in the sensing layer of IoT healthcare.** | Physiological sensors, RFIDs, sensor networks, Google Glass, and Fitbit tracker. | Healthcare IoT Architecture | Medium |
| 11 | **What is the primary function of the aggregator layer in IoT healthcare?** | Aggregates data received from the sensors of the sensing layer, putting them together, and sending a reduced number of data forward. | Healthcare IoT Architecture | Medium |
| 12 | **What devices typically act as data aggregators in IoT healthcare?** | Smartphones, tablets, or PDAs (Personal Digital Assistants). | Healthcare IoT Architecture | Easy |
| 13 | **What is another name for the data aggregator, especially in a body area network (BAN)?** | Local Processing Unit (LPU). | Healthcare IoT Terminology | Easy |
| 14 | **What are the responsibilities of the processing layer and cloud platform in IoT healthcare?** | Storing and processing the collected data, and analyzing it to determine what action should be taken. | Healthcare IoT Architecture | Medium |
| 15 | **What is the core idea behind 'remote healthcare' in the context of IoT?** | Wireless IoT solutions bring healthcare to patients, rather than bringing patients to healthcare facilities. | Remote Healthcare | Easy |
| 16 | **What significant advantage does IoT-based physiological sensing offer over traditional methods for monitoring?** | Enables real-time, round-the-clock monitoring of patient conditions. | Benefits of Healthcare IoT | Medium |
| 17 | **Provide an example of preventive care for senior citizens using IoT healthcare.** | Fall detection, where an emergency situation (like falling) is detected and family members are alerted. | Preventive Care | Medium |
| 18 | **How can machine learning tools be utilized in IoT healthcare systems?** | To track trends, predict future events, detect anomalies, and prevent adverse conditions. | Machine Learning in Healthcare | Medium |
| 19 | **What is the primary goal of the Ambusens system?** | To address the shortcomings of the existing healthcare infrastructure, with a particular focus on ambulatory healthcare, using IoT communication and sensing technologies. | Ambusens System | Medium |
| 20 | **How does Ambusens address the problem of the 'manual operating system' in traditional healthcare?** | It uses wearable sensing technologies and wireless sensors to bring healthcare closer to the patients, reducing the need for physical presence at healthcare centers. | Ambusens System Challenges Addressed | Medium |
| 21 | **How does Ambusens improve emergency response in ambulatory healthcare?** | It provides instant real-time monitoring capabilities and provision for remote feedback and monitoring by skilled personnel, helping deal with complications during transit. | Ambusens System Challenges Addressed | Medium |
| 22 | **What problem does Ambusens solve regarding real-time monitoring during patient transfer?** | It tracks the dynamic changes of the patient's condition over time, significantly reducing the latency of medical care, unlike traditional methods where the patient's condition is not monitored during transit. | Ambusens System Challenges Addressed | Medium |
| 23 | **How does Ambusens address the issue of physical medical records being vulnerable to loss or wear and tear?** | It incorporates a cloud-based digital record-keeping system. | Ambusens System Challenges Addressed | Easy |
| 24 | **Name some health parameters monitored by the Ambusens system.** | Heart rate, electrocardiogram (ECG), temperature, and galvanic skin response. | Ambusens System | Medium |
| 25 | **What communication technologies are used in the Ambusens sensing layer to send data to the local hub?** | Bluetooth and Zigbee. | Ambusens System Architecture | Easy |
| 26 | **What were some challenges faced in the aggregation layer of the Ambusens project?** | Power management, data rate tuning (e.g., 1024 Hz for ECG fidelity), and noise (especially due to patient movement and ambulance jerking). | Ambusens System Challenges | Hard |
| 27 | **What is the main challenge with using cloud computing for medical data in Ambusens, and how is it addressed?** | Privacy concerns due to sensitive medical data; addressed by a novel identity masking module that suppresses part of a patient's identity before sending it to the cloud. | Ambusens System Challenges | Hard |
| 28 | **What evidence supports the scalability of the Ambusens system?** | As the number of clients increases, the mean delay remains constant. | Ambusens System Features | Medium |
| 29 | **What functionalities does the Ambusens web-based interface provide for doctors and paramedics?** | Recording medical data, a feedback system, and advanced data visualization/graphing tools for understanding patterns and trends. | Ambusens System Features | Medium |
| 30 | **In the mobile ambulatory scenario, what device replaces the laptop as the local hub in the Ambusens system, and why?** | An Android device (e.g., smartphone or tablet) to provide mobility support and ubiquitous connectivity. | Ambusens System Deployment | Medium |

---

## Lecture 59: Activity Monitoring (Case Study ) - I (Lecture 59)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What is the primary purpose of activity monitoring?** | To understand what we are doing, why it's required, and its necessity in daily life or special scenarios. | Introduction | Easy |
| 2 | **What does the developed app for activity monitoring primarily capture?** | Sensor behavior during human activities, not the activities themselves directly. | Case Study Basics | Easy |
| 3 | **How are smartphone sensor values used in the case study's activity monitoring system?** | Transmitted over the network to a remote server for various applications. | Case Study Architecture | Easy |
| 4 | **Name two applications of transmitted sensor values from smartphones.** | Normal activity monitoring and fall detection. | Applications | Easy |
| 5 | **Besides smartphones, what other types of sensors can be used for activity monitoring?** | Offline non-smartphone sensors like standard accelerometers or IMU-based sensors integrated with a processor board. | Sensor Types | Medium |
| 6 | **What is the common name for non-smartphone based activity monitors?** | Wearables. | Terminology | Easy |
| 7 | **Describe the physical form factor of typical wearables like Fitbits.** | Small watch-like devices, thinner and tinier than a standard watch. | Wearables | Easy |
| 8 | **List three reasons for the popularity of wearable sensors.** | Very efficient, low power consuming, and generate reliable data. | Wearables Advantages | Medium |
| 9 | **Name four fields where activity monitoring sensors have found applications.** | Medical field, childcare, elderly care, entertainment industry, security. | Applications | Easy |
| 10 | **How can activity trackers benefit hospitalized patients, specifically regarding falls?** | They can detect falls, reducing the time before someone finds the patient and thus the recovery duration. | Medical Applications | Medium |
| 11 | **What specific functions can activity trackers embedded in bracelets perform for patients?** | Detect falls and changes in biomedical parameters like pulse rate and heartbeat. | Medical Applications | Medium |
| 12 | **How can activity monitoring be applied in childcare?** | To monitor a child's activities, alerting parents automatically if the child falls or has an accident. | Childcare Applications | Medium |
| 13 | **What are two key advantages of activity trackers for elderly care, besides their monitoring capability?** | They are very small (hardly noticed) and not very power hungry (long battery life). | Elderly Care Applications | Medium |
| 14 | **How are activity monitors used in the entertainment industry, particularly for CGI in action movies?** | Actors wear them in front of a green screen to track activities and generate CGI scenes (e.g., with changing backgrounds, dinosaurs). | Entertainment Applications | Medium |
| 15 | **Provide an example of how activity monitors can be used for security.** | Detecting unauthorized entry into 'no person zones' or restricted areas by sensing activity where none should be present. | Security Applications | Medium |
| 16 | **Beyond specific applications, what overarching benefit does activity monitoring offer in IoT-based scenarios for daily life?** | It provides for a better quality of life and safeguards humans against various accidents. | IoT & General Benefits | Medium |
| 17 | **How does activity monitoring safeguard humans against accidents?** | By providing quicker response and emergency action. | General Benefits | Easy |
| 18 | **How can an accelerometer on a driver's wrist detect an accident?** | A sudden, massive jump in accelerometer readings (e.g., from 2 units to 100 units) indicates a big physical shock or impact. | Accident Detection | Hard |
| 19 | **What actions can an activity monitoring system take upon detecting an abnormal activity like an accident?** | Alert emergency numbers and family members, notifying them of the person's present or last known location. | Emergency Response | Easy |
| 20 | **What is a key outcome of continuous activity monitoring regarding human behavior?** | Daily observation of human behavior and identification of repetitive patterns and activities. | Advantages | Easy |
| 21 | **Why is continuous monitoring and training of an activity system necessary for reliable results?** | Individual activity patterns (walking, running, body language) vary due to factors like height, weight, and injuries, requiring personalized training. | Challenges/Refinement | Hard |
| 22 | **List two practical advantages of modern activity monitoring sensors.** | Easy integration and fast equipping time, along with long-term monitoring due to low power consumption. | Advantages | Medium |
| 23 | **Name three types of sensors or devices that can be used for activity monitoring.** | Smartphones, accelerometers (with processor/WiFi), gyroscopes, GPS. | Sensor Types | Medium |
| 24 | **What are the trade-offs of increasing the number of sensors in an activity monitoring device?** | Increased power consumption, higher cost, and greater volume of data generated. | Sensor Limitations | Medium |
| 25 | **What two main categories of human activities can activity monitoring devices distinguish?** | Actions (e.g., running, jumping, lying, sitting) and gestures (e.g., holding legs, moving hands). | Activity Types | Easy |
| 26 | **Compare the processing intensity of video/image-based activity monitoring versus smartphone-based monitoring.** | Video/image-based monitoring is 'very processing intensive,' while smartphone-based monitoring generates 'a lot of data.' | Monitoring Methods Comparison | Hard |
| 27 | **List three methods used to analyze data collected from activity monitoring sensors.** | Statistical analysis, Machine Learning based analysis, and Deep Learning based approaches. | Data Analysis | Easy |
| 28 | **What are the two main architectural approaches for activity monitoring?** | In-place (on-device processing) and Network-based. | Architectures | Easy |
| 29 | **Describe two characteristics of an 'in-place' activity monitoring system.** | It is power hungry/intensive (due to on-device processing) and generally requires no network connection. | In-place Architecture | Medium |
| 30 | **What types of processing are network-based activity monitoring systems best suited for, and what unique analytical capability do they offer?** | Larger and processing-intensive methods like deep learning, computer vision, and machine learning tasks; they also enable group-based analytics. | Network-based Architecture | Hard |

---

## Lecture 60:  Activity Monitoring  (Case Study) - II (Lecture 60)

| # | Front (Question / Concept) | Back (Answer / Definition) | Topic | Difficulty |
| :---: | :--- | :--- | :---: | :---: |
| 1 | **What are the three main components of the smartphone-based activity monitoring system demonstrated?** | A smartphone, a remote server, and a network. | System Architecture | Easy |
| 2 | **What is the primary function of the accelerometer in a smartphone for activity monitoring?** | It measures accelerations and generates higher impulse responses in case of jerks. | Sensors | Easy |
| 3 | **Which smartphone sensor provides magnetic readings with respect to true north?** | The compass or magnetometer. | Sensors | Easy |
| 4 | **What information does the gyroscope provide regarding the smartphone's state?** | It gives the orientation of the smartphone, recording changes like tilt or angle. | Sensors | Easy |
| 5 | **Besides accelerometers, magnetometers, and gyroscopes, what other basic sensor is found in almost all smartphones for location?** | GPS. | Sensors | Easy |
| 6 | **What two network connection types can be used to transmit data from a smartphone to a remote location?** | A cellular connection or a WiFi connection. | Connectivity | Easy |
| 7 | **What Python library function and framework were used to create the web socket server for the demonstration?** | The `autobahn` library function for web sockets and the `twisted` framework. | Server Technology | Medium |
| 8 | **What three fields are present in the Android app used for transmitting data to the server?** | Username, the IP address of the server, and the port. | Application Interface | Easy |
| 9 | **When the smartphone is kept on a level area, what approximate reading does the Z-axis of the accelerometer typically show, and what does it signify?** | A reading of ten, which signifies its distance from the ground. | Accelerometer Data | Medium |
| 10 | **What happens to the accelerometer's X-axis reading (blue line) when the smartphone is tilted in the demonstration?** | The blue line (X-axis) goes up. | Accelerometer Data | Medium |
| 11 | **What is one basic primary application mentioned that can be derived from observing accelerometer readings for level testing?** | It can be used as a level tester to check whether levels are correct. | Applications | Easy |
| 12 | **How can activity detection (e.g., sitting, standing, lying down) be achieved using smartphone sensors beyond just monitoring?** | By combining these sensors with various machine learning algorithms, trained on prior or historical data for supervised learning. | Advanced Applications | Medium |
| 13 | **What critical application in medical patient monitoring can be developed using this framework, as discussed in the previous lecture?** | Fall detection. | Medical Applications | Easy |
| 14 | **Describe the feedback mechanism proposed by the server after a fall has been detected.** | The server will ask the phone user whether they have actually fallen or not. If the user is in a condition to respond and says no, it's fine. If the user is not in a condition to respond, emergency services can be alerted. | Fall Detection Logic | Hard |
| 15 | **What is the main advantage of using smartphones for activity monitoring, as highlighted in the lecture?** | Almost everyone uses a smartphone nowadays, allowing the use of inbuilt sensors for data transmission. | Advantages | Easy |
| 16 | **Where is the decision-making proposed to occur in the smartphone-based activity monitoring system?** | At the server end. | System Architecture | Easy |
| 17 | **What type of network was chosen for the demonstration purpose to connect the smartphone and the server?** | A local WiFi network. | Demonstration Setup | Easy |
| 18 | **What are the two buttons available in the Android app for controlling data transmission?** | Initiate and Stop. | Application Interface | Easy |
| 19 | **What data fields are logged onto the server during the demonstration, specifically for accelerometer values?** | Date, Time, and accelerometer values (X, Y, Z). (A third field was intentionally left blank). | Data Logging | Medium |
| 20 | **How is the plotting function for accelerometer data run on the server side?** | On a separate thread, while data is being uploaded over the network from the smartphone on another thread. | Data Visualization | Medium |
| 21 | **What does the lecture state about the processing of accelerometer data before plotting in the demonstration?** | The data is plotted as it is coming into the server, without filtering or any delay elements added. | Data Processing | Medium |
| 22 | **When the smartphone is tilted such that the Z-axis goes down, what happens to the Y-axis reading?** | The Y-axis reading goes up. | Accelerometer Data | Hard |
| 23 | **What is the primary difference between basic activity monitoring and activity detection using ML algorithms?** | Basic monitoring just logs sensor values; activity detection uses ML to infer specific actions like sitting, standing, or lying down. | Concepts | Medium |
| 24 | **What kind of data is required to train machine learning algorithms for activity detection?** | Prior or historical data for supervised learning. | Machine Learning | Easy |
| 25 | **What types of environments are mentioned where this smartphone-based activity monitoring can be integrated with IoT technologies?** | Smart homes, smart offices, smart buildings, and transportation. | Integration | Easy |
| 26 | **What is the role of the internal clock of the smartphone in this activity monitoring system?** | It is used in combination with the sensors and the network attaching capability. | System Components | Medium |
| 27 | **What is the significance of the 'connected' message that pops up on the smartphone app after initiating a connection?** | It indicates that the smartphone has successfully established a connection with the server. | System Feedback | Easy |
| 28 | **What does the lecture imply about the power of modern smartphones compared to traditional PCs?** | Smartphones are as good as, and in some cases even more powerful than, traditional PCs. | Technology Trends | Easy |
| 29 | **What is the overall limitation mentioned for the potential applications of this framework?** | It is limited by the user's imagination. | Future Scope | Easy |
| 30 | **What is the purpose of the 'blank' field intentionally kept in the data logged onto the server?** | The transcript states 'third fields we have kept intentionally blank' for this demonstration purpose, implying it's a placeholder or not used in this specific demo. | Data Logging | Hard |

---

