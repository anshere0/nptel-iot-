# Week 07: Raspberry Pi Implementation, GPIO Interfacing & Remote Cloud Logging

**Course**: Introduction to Internet of Things — NPTEL / IIT Kharagpur  
**Instructor**: Prof. Sudip Misra  
**Slide Reference**: `Week-7.pdf` (Implementation of IoT with Raspberry Pi: Part 2 & Remote Data Logging)  
**Assigned MCQs**: Current 2026 Session Week 7 (15 Questions) & Historical Question Banks

---

## 1. Overview & Syllabus Mapping

Week 7 marks the practical transition from constrained 8-bit microcontrollers to high-performance **Single Board Computers (SBCs)** acting as intelligent edge gateways. In this module, we dissect the internal architecture of the **Raspberry Pi**, its **40-pin GPIO** electrical and logical specifications, and the **3.3V logic vulnerability**. We examine single-bus digital sensor interfacing using the **DHT11 / DHT22** temperature and humidity sensors, Python-based hardware automation via `RPi.GPIO` and `Adafruit_DHT`, and the architectural flow of **remote cloud telemetry logging** using RESTful HTTP POST APIs and ThingSpeak cloud channels.

```
┌────────────────────────────────────────────────────────────────────────┐
│                   EDGE GATEWAY TELEMETRY PIPELINE                      │
├─────────────────────┬──────────────────┬───────────────┬───────────────┤
│ Physical Sensing    │ SBC Interfacing  │ Edge Script   │ Cloud Logging │
│ DHT11 / DHT22       │ 40-Pin GPIO      │ Python Script │ ThingSpeak    │
│ 1-Wire Digital Bus  │ 3.3V Logic Rail  │ RPi.GPIO / Lib│ HTTP REST POST│
└─────────────────────┴──────────────────┴───────────────┴───────────────┘
```

---

## 2. Microcontroller (Arduino) vs. Single Board Computer (Raspberry Pi)

Understanding when to deploy a microcontroller versus an SBC is a fundamental architectural decision in IoT system design:

```
┌───────────────────────────────────┐     ┌───────────────────────────────────┐
│ MICROCONTROLLER (e.g. Arduino)    │     │ SINGLE BOARD COMPUTER (R-Pi)      │
├───────────────────────────────────┤     ├───────────────────────────────────┤
│ • Runs bare-metal firmware code   │     │ • Runs full multi-tasking OS      │
│ • No Operating System overhead    │     │ • Linux (Raspbian / Raspberry Pi) │
│ • Real-time deterministic timing  │     │ • Non-deterministic OS scheduling │
│ • Low power (milliamps)           │     │ • Higher power (1–3 Amps @ 5V)    │
│ • Low clock speed (16 MHz)        │     │ • High clock speed (1.2–1.5 GHz)  │
│ • Tiny memory (2 KB SRAM)         │     │ • Large memory (1–8 GB LPDDR4)    │
│ • Integrated 10-bit ADC onboard   │     │ • NO ANALOG INPUTS ONBOARD!       │
│ • Direct sensor/actuator control  │     │ • Network Gateway / Edge Server   │
└───────────────────────────────────┘     └───────────────────────────────────┘
```

---

## 3. Raspberry Pi Hardware Architecture & The 40-Pin GPIO

The Raspberry Pi is built around a Broadcom System-on-Chip (SoC) combining an ARM Cortex multi-core microprocessor, a VideoCore GPU, and system RAM onto a single silicon die.

```
┌────────────────────────────────────────────────────────────────────────┐
│                     RASPBERRY PI 40-PIN GPIO HEADER                    │
│                                                                        │
│   Pin 1  : 3.3V DC Power       [■] [■] : Pin 2  : 5V DC Power          │
│   Pin 3  : GPIO 2 (I2C1 SDA)   [■] [■] : Pin 4  : 5V DC Power          │
│   Pin 5  : GPIO 3 (I2C1 SCL)   [■] [■] : Pin 6  : Ground (GND)         │
│   Pin 7  : GPIO 4 (GPCLK0)     [■] [■] : Pin 8  : GPIO 14 (UART0 TXD)  │
│   Pin 9  : Ground (GND)        [■] [■] : Pin 10 : GPIO 15 (UART0 RXD)  │
│   Pin 11 : GPIO 17             [■] [■] : Pin 12 : GPIO 18 (PCM CLK)    │
│   Pin 13 : GPIO 27             [■] [■] : Pin 14 : Ground (GND)         │
│   Pin 15 : GPIO 22             [■] [■] : Pin 16 : GPIO 23              │
│   Pin 17 : 3.3V DC Power       [■] [■] : Pin 18 : GPIO 24              │
│   Pin 19 : GPIO 10 (SPI MOSI)  [■] [■] : Pin 20 : Ground (GND)         │
│   Pin 21 : GPIO 9  (SPI MISO)  [■] [■] : Pin 22 : GPIO 25              │
│   Pin 23 : GPIO 11 (SPI SCLK)  [■] [■] : Pin 24 : GPIO 8  (SPI CE0)    │
│   Pin 25 : Ground (GND)        [■] [■] : Pin 26 : GPIO 7  (SPI CE1)    │
│   ...                                                                  │
│   Pin 39 : Ground (GND)        [■] [■] : Pin 40 : GPIO 21              │
└────────────────────────────────────────────────────────────────────────┘
```

### 3.1 The 3.3V Electrical Rule (Critical Exam Concept)

> [!CAUTION]
> **ELECTRICAL VULNERABILITY**: All General Purpose Input/Output (GPIO) pins on the Raspberry Pi operate strictly at **3.3 Volts logic level**.  
> The GPIO pins are **NOT 5V TOLERANT!**  
> If an external 5V sensor (such as a 5V Arduino or an unconditioned 5V TTL serial sensor) outputs 5V directly into a Raspberry Pi GPIO pin, the input clamping diodes break down, **permanently destroying the Broadcom SoC**. Interfacing 5V signals requires a resistive voltage divider or a bi-directional logic-level shifter.

### 3.2 Key Hardware Buses & Dedicated Pins

1. **Power Supply Rails**:
   - Pins 1 & 17: Regulated **3.3V** power (draw capacity limited to ~50 mA).
   - Pins 2 & 4: Direct **5V** power rails (connected directly to the USB power input).
   - 8 Ground (GND) pins: Pins 6, 9, 14, 20, 25, 30, 34, 39.
2. **I2C Bus (Inter-Integrated Circuit)**:
   - Pin 3: **SDA** (Data line, GPIO 2) — contains physical 1.8 kΩ pull-up resistor to 3.3V.
   - Pin 5: **SCL** (Clock line, GPIO 3) — contains physical 1.8 kΩ pull-up resistor to 3.3V.
3. **SPI Bus (Serial Peripheral Interface)**:
   - Pin 19 (MOSI), Pin 21 (MISO), Pin 23 (SCLK), Pin 24 (CE0), Pin 26 (CE1).
4. **UART Serial**:
   - Pin 8: **TXD** (Transmit, GPIO 14).
   - Pin 10: **RXD** (Receive, GPIO 15).
5. **Absence of Onboard ADC**:
   - The Raspberry Pi contains **zero analog input pins**! To read an analog sensor (e.g., LDR or analog potentiometer), you must interface an external ADC chip (such as the MCP3008 via SPI or ADS1115 via I2C).

---

## 4. Digital Sensor Interfacing: DHT11 vs. DHT22

The **DHT series** are digital composite sensors that measure ambient temperature and relative humidity using an internal capacitive humidity sensor, an NTC thermistor, and an integrated 8-bit microcontroller.

```
┌─────────────────────────────────┐     ┌─────────────────────────────────┐
│ DHT11 (Blue Casing)             │     │ DHT22 / AM2302 (White Casing)   │
├─────────────────────────────────┤     ├─────────────────────────────────┤
│ • Temp Range: 0°C to 50°C       │     │ • Temp Range: -40°C to +80°C    │
│ • Temp Accuracy: ±2.0°C         │     │ • Temp Accuracy: ±0.5°C         │
│ • Humidity Range: 20% to 80% RH │     │ • Humidity Range: 0% to 100% RH │
│ • Humidity Accuracy: ±5.0% RH   │     │ • Humidity Accuracy: ±2.0% RH   │
│ • Sampling Rate: 1.0 Hz (1/sec) │     │ • Sampling Rate: 0.5 Hz (1/2sec)│
│ • Integer data resolution       │     │ • Decimal precision (0.1 step)  │
└─────────────────────────────────┘     └─────────────────────────────────┘
```

### 4.1 The Single-Bus Proprietary Communication Protocol

- **Physical Wiring**: Sensor requires $V_{CC}$ (3.3V or 5V), Ground (GND), and a single bidirectional **Data line**. The data line requires a **4.7 kΩ to 10 kΩ pull-up resistor** tied to $V_{CC}$ to keep the bus HIGH in idle state.
- **Handshake Sequence**:
  1. *Host Start Signal*: Raspberry Pi pulls data line LOW for at least **18 ms** (DHT11) or **1–10 ms** (DHT22), then pulls it HIGH for 20–40 $\mu\text{s}$.
  2. *Sensor Response*: The DHT pulls the bus LOW for **80 $\mu\text{s}$**, followed by HIGH for **80 $\mu\text{s}$** to confirm readiness.
  3. *Data Stream Transmission*: The sensor transmits **40 continuous data bits** (5 bytes):
     - Byte 1: Integral Relative Humidity (RH)
     - Byte 2: Decimal Relative Humidity
     - Byte 3: Integral Temperature (T)
     - Byte 4: Decimal Temperature
     - Byte 5: **Checksum** (must equal: $\text{Byte 1} + \text{Byte 2} + \text{Byte 3} + \text{Byte 4}$)
  4. *Bit Encoding Mechanism*: Every bit begins with a 50 $\mu\text{s}$ LOW pulse.
     - Bit '0': High-level duration of **26 to 28 $\mu\text{s}$**.
     - Bit '1': High-level duration of **70 $\mu\text{s}$**.

---

## 5. Python Programming with `RPi.GPIO` and `Adafruit_DHT`

### 5.1 GPIO Pin Numbering Modes: BOARD vs. BCM

When writing Python scripts on the Raspberry Pi, you must explicitly declare the pin numbering convention:

```python
import RPi.GPIO as GPIO

# Option 1: GPIO.BOARD
# Refers to the PHYSICAL pin numbers of the 40-pin header (1 through 40).
# Advantage: Hardware wiring does not depend on revision of Broadcom SoC.
GPIO.setmode(GPIO.BOARD)
GPIO.setup(11, GPIO.OUT)  # Refers to physical pin 11

# Option 2: GPIO.BCM
# Refers to the Broadcom SoC channel numbers (GPIO numbers, e.g., GPIO 17).
# Advantage: Matches official chip schematics and software libraries.
GPIO.setmode(GPIO.BCM)
GPIO.setup(17, GPIO.OUT)  # Physical pin 11 corresponds to GPIO 17
```

### 5.2 Sensor Data Acquisition Script

```python
import time
import Adafruit_DHT

# Configure sensor type and BCM pin number
SENSOR_TYPE = Adafruit_DHT.DHT22
GPIO_PIN = 4  # Connect data line to GPIO 4 (Physical Pin 7)

# The read_retry function attempts to read up to 15 times with 2-second delays
humidity, temperature = Adafruit_DHT.read_retry(SENSOR_TYPE, GPIO_PIN)

if humidity is not None and temperature is not None:
    print(f"Temperature = {temperature:.1f}°C | Humidity = {humidity:.1f}%")
else:
    print("Sensor read error: Check physical bus pull-up resistor!")
```

---

## 6. Remote Telemetry Logging & ThingSpeak Cloud Integration

Once the gateway acquires local sensor metrics, it packages and transmits the payload across the wide-area network to an IoT cloud repository.

```
[ DHT22 Sensor ] ──(GPIO)──> [ Raspberry Pi Gateway ] ──(HTTP POST)──> [ ThingSpeak Cloud Server ]
                                                                                   │
                                                                                   ▼
                                                                        [ Interactive Visual Chart ]
```

### 6.1 ThingSpeak Cloud Architecture

- **Platform**: Open IoT analytics platform operated by MathWorks.
- **Channels**: Data is organized into **Channels**. Each channel supports up to **8 data fields**, elevation, latitude, longitude, and status.
- **Security & Access**:
  - *Write API Key*: A 16-character hexadecimal token required in every HTTP payload to authorize writing data to a private channel.
  - *Rate Limiting*: Free public accounts enforce an update throttling interval of **at least 15 seconds** between successive writes.

### 6.2 RESTful HTTP POST Telemetry Script

```python
import time
import requests
import Adafruit_DHT

THINGSPEAK_URL = "https://api.thingspeak.com/update"
WRITE_API_KEY = "YOUR_16_CHAR_WRITE_KEY"
SENSOR = Adafruit_DHT.DHT22
PIN = 4

while True:
    humidity, temperature = Adafruit_DHT.read_retry(SENSOR, PIN)
    
    if humidity is not None and temperature is not None:
        payload = {
            'api_key': WRITE_API_KEY,
            'field1': f"{temperature:.2f}",
            'field2': f"{humidity:.2f}"
        }
        try:
            response = requests.post(THINGSPEAK_URL, data=payload, timeout=10)
            if response.status_code == 200:
                print(f"Data logged successfully. Entry ID: {response.text}")
            else:
                print(f"Server rejected request. Status: {response.status_code}")
        except Exception as e:
            print(f"Network error during POST: {e}")
    
    # Adhere strictly to ThingSpeak 15-second rate limiting
    time.sleep(20)
```

---

## 7. Important Vocabulary & Full Forms

- **SBC**: Single Board Computer
- **SoC**: System-on-Chip
- **GPIO**: General Purpose Input/Output
- **BCM**: Broadcom (chip pin numbering convention)
- **BOARD**: Physical header pin numbering convention
- **I2C**: Inter-Integrated Circuit (SDA / SCL)
- **SPI**: Serial Peripheral Interface (MOSI / MISO / SCLK / CE)
- **UART**: Universal Asynchronous Receiver-Transmitter (TXD / RXD)
- **REST**: Representational State Transfer
- **API**: Application Programming Interface

---

## 8. MCQ Traps & Distractor Analysis

> [!WARNING]
> **Trap 1: Raspberry Pi GPIO Voltage Tolerance**  
> *Distractor*: "Raspberry Pi GPIO pins can directly accept 5V logic inputs from 5V Arduino boards."  
> *Truth*: Raspberry Pi GPIO operates strictly at **3.3 Volts**. Applying 5V directly to a GPIO pin will permanently destroy the SoC.

> [!WARNING]
> **Trap 2: Analog Sensing on Raspberry Pi**  
> *Distractor*: "`GPIO.setup(A0, GPIO.IN)` reads the onboard analog sensor on the Raspberry Pi."  
> *Truth*: The Raspberry Pi has **NO onboard Analog-to-Digital Converter (ADC)**. Reading analog sensors requires an external ADC chip (e.g., MCP3008) connected via SPI/I2C.

> [!WARNING]
> **Trap 3: DHT Sensor Checksum Verification**  
> *Distractor*: "The 5th byte of a DHT sensor transmission contains the parity bit for bit synchronization."  
> *Truth*: The 5th byte contains an **8-bit checksum**, computed as the lower 8 bits of the sum of the preceding 4 bytes: $(\text{Byte 1} + \text{Byte 2} + \text{Byte 3} + \text{Byte 4}) \pmod{256}$.

---

## 9. High-Yield Recall Summary

- **Raspberry Pi**: SBC running full Linux OS; multi-core ARM CPU; Broadcom SoC; requires 5V power supply.
- **GPIO Logic Level**: Strictly **3.3V**; NOT 5V tolerant!
- **Onboard ADC**: **None**. Requires external SPI/I2C ADC for analog readings.
- **Pin Conventions**: `GPIO.BOARD` (physical pin numbers 1–40); `GPIO.BCM` (Broadcom GPIO numbers).
- **DHT11 vs DHT22**: DHT22 has higher precision, wider range (-40 to 80°C, 0–100% RH), and slower sampling rate (0.5 Hz vs 1 Hz).
- **DHT Data Stream**: 40 bits total (16 bits humidity, 16 bits temperature, 8 bits checksum).
- **ThingSpeak**: Cloud analytics repository; updates require Write API Key; rate limited to 1 write every 15 seconds.
