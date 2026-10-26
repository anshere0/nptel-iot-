# Week 06: Python Programming for IoT & Scientific Computing

**Course**: Introduction to Internet of Things — NPTEL / IIT Kharagpur  
**Instructor**: Prof. Sudip Misra  
**Slide Reference**: `Week-6.pdf` (Introduction to Python Programming Part I & IoT Data Scripting)  
**Assigned MCQs**: Current 2026 Session Week 6 (15 Questions) & Historical Question Banks

---

## 1. Overview & Syllabus Mapping

Week 6 equips students with the software scripting and network programming foundation required to bridge low-level physical sensors with high-level cloud and fog computing engines. While bare-metal microcontrollers (such as the Arduino Uno) are programmed in C/C++, IoT gateways and Single Board Computers (such as the Raspberry Pi) rely predominantly on **Python**. In this module, we dissect Python's execution model, its built-in data structures (with critical emphasis on mutability vs immutability), control flow, scientific data processing libraries (**NumPy**, **SciPy**, **Matplotlib**), and low-level **network socket programming** (TCP vs UDP socket lifecycles).

```
┌────────────────────────────────────────────────────────────────────────┐
│                   PYTHON IN THE IOT ARCHITECTURE                       │
├─────────────────────┬──────────────────┬───────────────┬───────────────┤
│ Gateway Scripting   │ Scientific Math  │ Visualization │ Network Comms │
│ Hardware I/O / GPIO │ NumPy / SciPy    │ Matplotlib    │ Python Sockets│
│ Data Serialization  │ Matrix Filtering │ Time-Series   │ TCP / UDP     │
└─────────────────────┴──────────────────┴───────────────┴───────────────┘
```

---

## 2. Why Python in IoT Systems?

1. **Rapid Prototyping & Productivity**: High-level syntax, dynamic typing, and automatic memory management eliminate boilerplate pointer manipulation and manual memory allocations common in embedded C.
2. **Rich Embedded & Sensor Libraries**: Native Python packages (`RPi.GPIO`, `Adafruit_DHT`, `smbus2`, `spidev`) allow direct interfacing with I2C, SPI, and GPIO buses in a few lines of code.
3. **Seamless Cloud & Network Integration**: Extensive networking libraries (`requests`, `paho-mqtt`, `socket`, `asyncio`) facilitate frictionless communication with cloud endpoints and brokers.
4. **Data Analytics Pipeline Compatibility**: Python serves as the lingua franca for data science and machine learning (NumPy, Pandas, Scikit-learn, TensorFlow), enabling algorithms to execute directly on edge gateways without language switching.

---

## 3. Core Syntax & Data Structures

### 3.1 Mutability vs. Immutability

Understanding whether a Python data structure is **mutable** (can be modified in place) or **immutable** (cannot be changed once created in memory) is a frequent NPTEL exam trap:

| Data Type | Mutability | Definition & Syntax | Key Behavioral Characteristics |
| :--- | :--- | :--- | :--- |
| **`int`, `float`** | **Immutable** | `x = 10`, `y = 3.14` | Reassigning creates a new object in memory. |
| **`str` (String)** | **Immutable** | `s = "IoT System"` | Cannot modify characters via indexing (`s[0] = 'M'` raises `TypeError`). |
| **`tuple`** | **Immutable** | `t = (1, 2, "temp")` | Fixed sequence enclosed in parentheses `()`. Cannot append, extend, or alter elements. |
| **`list`** | **Mutable** | `l = [10, 20, 30]` | Ordered sequence enclosed in square brackets `[]`. Supports `.append()`, `.pop()`, slicing. |
| **`dict` (Dictionary)**| **Mutable** | `d = {"sensor": "DHT22", "pin": 4}` | Unordered (pre-3.7) or insertion-ordered key-value hash map enclosed in `{}`. Keys must be **immutable** (hashable). |
| **`set`** | **Mutable** | `s = {1, 2, 3, 2} -> {1, 2, 3}` | Unordered collection of unique items. Discards duplicate values automatically. |
| **`frozenset`** | **Immutable** | `fs = frozenset([1, 2, 3])` | An immutable set; can be used as a dictionary key or set member. |

### 3.2 List Operations and Comprehensions

Lists represent dynamically resizable arrays commonly used to buffer incoming sensor data streams:

```python
# List slicing: list[start:stop:step] (stop index is exclusive!)
readings = [21.5, 22.0, 21.8, 23.4, 25.1, 24.8]
sample = readings[1:4]  # Returns [22.0, 21.8, 23.4]

# List comprehension: Concise mathematical transformation
# Convert Celsius readings to Fahrenheit: (C * 9/5) + 32
f_readings = [(c * 9/5) + 32 for c in readings if c > 22.0]
```

### 3.3 Dictionaries & Hash Map Mechanics

Dictionaries map unique keys to values, forming the standard representation of JSON payloads in Python:

```python
telemetry = {
    "device_id": "sensor_node_01",
    "temperature": 24.5,
    "humidity": 60.2,
    "status": "ACTIVE"
}

# Safe key retrieval with default fallback
battery = telemetry.get("battery_level", 100.0)  # Returns 100.0 without KeyError
```

---

## 4. Control Structures and Functions

### 4.1 Conditional Branching & Loops

- **Indentation Rule**: Python strictly enforces 4-space indentation for code block delineation instead of curly braces `{}`.
- **Loop Control Statements**:
  - `break`: Terminates the nearest enclosing loop prematurely.
  - `continue`: Skips the remainder of the current loop iteration and immediately evaluates the loop condition for the next cycle.
  - `pass`: A null operation / placeholder where code is syntactically required but no action is taken.

```python
for temp in readings:
    if temp > 30.0:
        print("CRITICAL OVERHEAT: Triggering emergency shutdown!")
        break
    elif temp < 10.0:
        # Ignore noisy sub-zero anomalies
        continue
    else:
        pass  # Nominal operating range
```

### 4.2 Function Scope & Parameter Passing

- **Keyword `def`**: Defines a reusable function block.
- **Pass-by-Object-Reference**: In Python, all arguments are passed by object reference. If you pass a mutable object (such as a list) into a function and modify its elements in-place, the change is reflected in the caller's environment. If you pass an immutable object (such as an integer or string), reassigning it inside the function creates a local variable and leaves the caller's variable unaffected.
- **Global Variables**: To reassign a variable defined at module scope from inside a function, the `global` keyword must be explicitly declared.

---

## 5. Scientific Computing: NumPy, SciPy & Matplotlib

In IoT edge computing, gateways must compute rolling statistics, Fourier transforms, and kalman filter estimations on high-frequency sensor streams.

```
┌────────────────────────────────────────────────────────┐
│               SCIENTIFIC PYTHON ECOSYSTEM              │
├────────────────────────────────────────────────────────┤
│ Matplotlib / Pyplot : Graphical visualization of data  │
├────────────────────────────────────────────────────────┤
│ SciPy               : Advanced DSP, optimization, stats│
├────────────────────────────────────────────────────────┤
│ NumPy               : High-speed homogenous C-arrays   │
└────────────────────────────────────────────────────────┘
```

### 5.1 NumPy (Numerical Python)

- **The Problem with Python Lists**: Standard Python lists store pointers to scattered objects in heap memory. Iterating over lists involves substantial type-checking and cache-miss overhead.
- **NumPy's `ndarray`**: Stores homogenous data in contiguous blocks of memory.
  - *Vectorized Operations*: Operations are performed element-wise in compiled C code without explicit Python `for` loops.
  - *Mathematical Precision*: Supports multidimensional matrix algebra, linear algebra, and fast random number generators.

```python
import numpy as np

# Create a 1D NumPy array from sensor readings
raw_adc = np.array([512, 520, 508, 515, 530])

# Vectorized voltage conversion (no for-loop required!)
voltage = (raw_adc / 1024.0) * 5.0

# Fast statistical reductions
mean_v = np.mean(voltage)
std_v = np.std(voltage)
```

### 5.2 Matplotlib for Telemetry Visualization

The `matplotlib.pyplot` module provides a procedural plotting interface modeled after MATLAB:

```python
import matplotlib.pyplot as plt

time_stamps = [1, 2, 3, 4, 5]
temperatures = [22.1, 22.8, 23.5, 23.2, 24.0]

plt.plot(time_stamps, temperatures, marker='o', color='r', linestyle='--')
plt.title("Sensor Node 1: Temperature vs Time")
plt.xlabel("Time (seconds)")
plt.ylabel("Temperature (°C)")
plt.grid(True)
plt.savefig("telemetry_plot.png")
```

---

## 6. Low-Level Network Socket Programming

A **socket** is the fundamental operating system abstraction representing an endpoint for bidirectional network communications across an IP network. Python provides low-level socket APIs via the standard `socket` module.

```
         TCP SERVER SOCKET                      TCP CLIENT SOCKET
         ─────────────────                      ─────────────────
             socket()                                socket()
                │                                       │
             bind()                                     │
                │                                       │
             listen()                                   │
                │                                       │
             accept() <──── [ 3-Way TCP Handshake ] ──> connect()
                │                                       │
             recv()   <──────── Data Exchange ────────> send()
                │                                       │
             close()                                 close()
```

### 6.1 Socket Types & Address Families

- **Address Families**:
  - `socket.AF_INET`: Specifies **IPv4** addressing (expects a tuple: `(host_ip_string, port_int)`).
  - `socket.AF_INET6`: Specifies **IPv6** addressing.
- **Socket Types**:
  - `socket.SOCK_STREAM`: Specifies **TCP (Transmission Control Protocol)**. Provides connection-oriented, reliable, sequenced, flow-controlled byte streams.
  - `socket.SOCK_DGRAM`: Specifies **UDP (User Datagram Protocol)**. Provides connectionless, unreliable, unsequenced, lightweight datagram packets.

### 6.2 TCP Server-Client Implementation Lifecycle

#### The TCP Server Workflow
1. `s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)`: Instantiate the TCP socket.
2. `s.bind((host, port))`: Associate the socket with a local network IP address and port number.
3. `s.listen(backlog)`: Put the socket into listening mode, specifying the maximum length of the pending connection queue.
4. `conn, addr = s.accept()`: **Blocks** until a remote client connects. Returns a *new* socket object (`conn`) dedicated to the client, along with the client's network address tuple (`addr`).
5. `data = conn.recv(1024)`: Reads incoming byte streams from the dedicated client socket.
6. `conn.sendall(data)`: Sends reply bytes.
7. `conn.close()` & `s.close()`: Tears down the socket connections.

#### The TCP Client Workflow
1. `s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)`: Instantiate client socket.
2. `s.connect((server_ip, server_port))`: Initiates the TCP 3-way handshake with the server.
3. `s.sendall(b"Hello Server")`: Transmits raw byte sequence.
4. `data = s.recv(1024)`: Receives server response.
5. `s.close()`: Closes socket.

### 6.3 UDP Socket Workflow

Because UDP is connectionless, there is **no `listen()` or `accept()`**, and clients do not call `connect()`:
- Server: Creates socket (`SOCK_DGRAM`), calls `bind()`, and immediately calls `data, addr = s.recvfrom(1024)`.
- Client: Creates socket (`SOCK_DGRAM`), and directly calls `s.sendto(data, (server_ip, server_port))`.

---

## 7. Important Vocabulary & Full Forms

- **IDE**: Integrated Development Environment
- **REPL**: Read-Eval-Print Loop (Interactive Python Shell)
- **CISC / RISC**: Complex / Reduced Instruction Set Computer
- **TCP**: Transmission Control Protocol
- **UDP**: User Datagram Protocol
- **AF_INET**: Address Family - Internet (IPv4)
- **SOCK_STREAM**: Socket type for sequenced, reliable TCP streams
- **SOCK_DGRAM**: Socket type for connectionless UDP datagrams
- **ndarray**: N-dimensional homogenous array in NumPy

---

## 8. MCQ Traps & Distractor Analysis

> [!WARNING]
> **Trap 1: Tuple Immutability**  
> *Distractor*: "`t = (10, 20); t[0] = 30` successfully modifies the first element of the tuple."  
> *Truth*: Tuples are strictly **immutable**. Attempting item assignment raises a fatal `TypeError: 'tuple' object does not support item assignment`.

> [!WARNING]
> **Trap 2: `socket.accept()` Return Value**  
> *Distractor*: "`s.accept()` returns the incoming payload data bytes sent by the client."  
> *Truth*: `s.accept()` returns a **tuple of `(conn, address)`**, where `conn` is a brand-new socket object dedicated to communicating with that specific client, and `address` is the client's IP and port.

> [!WARNING]
> **Trap 3: TCP vs UDP Socket Types**  
> *Distractor*: "`socket.SOCK_STREAM` is used to create low-overhead UDP datagram sockets."  
> *Truth*: `SOCK_STREAM` is **TCP**. `SOCK_DGRAM` is **UDP** (datagram).

---

## 9. High-Yield Recall Summary

- **Mutability**: Lists, Dictionaries, Sets are **mutable**; Integers, Floats, Strings, Tuples, Frozensets are **immutable**.
- **Dictionary Keys**: Must be immutable/hashable types (strings, numbers, tuples). Lists cannot be dictionary keys.
- **NumPy `ndarray`**: Fast, contiguous, homogeneous memory structure enabling vectorized operations without Python loops.
- **TCP Sockets**: `AF_INET`, `SOCK_STREAM`; Lifecycle: `socket` $\rightarrow$ `bind` $\rightarrow$ `listen` $\rightarrow$ `accept` $\rightarrow$ `recv`/`send`.
- **UDP Sockets**: `AF_INET`, `SOCK_DGRAM`; No connection handshake; uses `recvfrom` and `sendto`.
