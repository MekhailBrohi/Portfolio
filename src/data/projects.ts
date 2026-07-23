export type Project = {
  slug: string;
  title: string;
  date: string;
  tag: string;
  blurb: string;
  purpose: string;
  technologies: string[];
  parts: { name: string; note: string }[];
  notes: string[];
  imageCount: number;
};

export const projects: Project[] = [
  {
    slug: "rc-car",
    title: "RC Car (ESP32 Based)",
    date: "December 2025",
    tag: "Robotics",
    blurb:
      "A PS4-controlled car on a hand-built cardboard chassis — my first real dive into the ESP32.",
    purpose:
      "Designing and building an RC car using an ESP32 microcontroller. The goal was to learn how to use the ESP32 and build a project that could help build the foundational skills to code and implement the ESP32 into future projects.",
    technologies: [
      "ESP32",
      "C++ / Arduino IDE",
      "L298N Motor Driver",
      "PS4 Controller Input",
      "DC Motor Control",
    ],
    parts: [
      {
        name: "ESP32 Microcontroller",
        note: "Acts as the control unit of the car, processing input signals and sending control signals to the motor driver.",
      },
      {
        name: "L298N Motor Driver Module",
        note: "Interfaces between the ESP32 and the motors.",
      },
      {
        name: "TT DC Gear Motors",
        note: "Provides the mechanical motion for the vehicle's wheels.",
      },
      {
        name: "Rocker Switches",
        note: "Controls power flow, conveniently turning the RC car on/off.",
      },
      {
        name: "Dual 4x AA Battery Packs",
        note: "Supplies power to the motors and ESP32.",
      },
      {
        name: "PS4 Controller",
        note: "Serves as the wireless input device.",
      },
      {
        name: "Wheels",
        note: "Attached to the TT motors to move the car.",
      },
    ],
    notes: [
      "Chassis made from cardboard, reinforced with popsicle sticks to withstand the weight of components. Inspired by the ladder frame chassis design.",
      "Hardware consisted of connecting 4 TT motors to the L298N motor shield, which was then connected to the ESP32 through a breadboard. A separate battery pack was used for both the ESP32 and the motors.",
    ],
    imageCount: 3,
  },
  {
    slug: "workbench-power-supply",
    title: "Workbench Power Supply",
    date: "January 2026",
    tag: "Power Electronics",
    blurb:
      "A repurposed ATX PSU turned into a fused, multi-rail bench supply with a custom enclosure.",
    purpose:
      "Building an affordable workbench power supply by repurposing an ATX PC power supply unit. The goal was to learn how DC power supply units function and to acquire skills in wiring, circuit protection, soldering, and voltage management.",
    technologies: [
      "ATX PSU Conversion",
      "DC Voltage Regulation",
      "Circuit Protection",
      "Soldering & Wiring",
      "Enclosure Fabrication",
    ],
    parts: [
      {
        name: "430W ATX Power Supply Unit",
        note: "Serves as the primary power source, converting AC wall power into 3.3V, 5V, and 12V DC outputs.",
      },
      {
        name: "Terminal Block",
        note: "Distributes voltage rails in an organized and secure manner.",
      },
      {
        name: "Banana Binding Posts",
        note: "Provide safe and convenient external output connections.",
      },
      {
        name: "18 AWG & 20 AWG Wire",
        note: "Used for wiring and connections.",
      },
      {
        name: "Inline Fuses & Fuse Holders",
        note: "Protects voltage rails from overcurrent and reduces fire risk.",
      },
      {
        name: "Rocker Switch",
        note: "Controls PSU activation.",
      },
      {
        name: "LED Indicators",
        note: "Indicates the power supply's standby and power-on mode.",
      },
      {
        name: "50W 8Ω Power Resistor (Dummy Load)",
        note: "Provides a minimum load to keep the PSU on.",
      },
    ],
    notes: [
      "Stripped and organized ATX PSU output wires using crimp lugs, then routed voltage rails, ground lines, and control signal lines through a terminal block for structured power distribution.",
      "Designed and assembled a custom enclosure frame to securely mount all components, keeping the wiring organized, along with a front interface panel.",
    ],
    imageCount: 3,
  },
  {
    slug: "automated-light-switch",
    title: "Automated Light Switch",
    date: "February 2026",
    tag: "Home Automation",
    blurb:
      "Two servos and an ESP32 that flips a real light switch on Alexa voice command over Wi-Fi.",
    purpose:
      "Building an automated light switch using two servo motors connected to an ESP32 that can communicate with Alexa. The goal was to learn how to use different devices with the ESP32 and create a project that combines the ESP32's Bluetooth and Wi-Fi features.",
    technologies: [
      "ESP32",
      "Wi-Fi & Bluetooth Integration",
      "Alexa Voice Control",
      "Servo Motor Control",
      "MOSFET Switching",
    ],
    parts: [
      {
        name: "ESP32 Microcontroller",
        note: "Serves as the main controller, communicating via Wi-Fi and Bluetooth, receiving signals from Alexa and triggering servo movement.",
      },
      {
        name: "2x Servo Motors",
        note: "Mechanically press/flip the light switch.",
      },
      {
        name: "4x AA Battery Pack",
        note: "Powers the servos separately to provide consistent voltage.",
      },
      {
        name: "IRLZ44N MOSFET",
        note: "Extends battery life by cutting power when the servos are idle.",
      },
      {
        name: "10kΩ Resistor (Gate Pulldown)",
        note: "Ensures the MOSFET stays off during ESP32 boot and prevents random servo activations.",
      },
      {
        name: "220Ω Resistor (Gate Series)",
        note: "Protects the ESP32 pin and reduces switching noise.",
      },
      {
        name: "Breadboard",
        note: "Base of the project, allowing for clean wiring.",
      },
      {
        name: "Rocker Switch",
        note: "Manual control to turn servo power on and off.",
      },
    ],
    notes: [
      "Connected the ESP32, battery pack, MOSFET, and resistors onto the breadboard, then tested power delivery and ESP32 communication before attaching the servos.",
      "Mounted the breadboard, battery pack, and rocker switch onto a painted cardboard frame and prepared loose wiring for the final servo motor connections.",
    ],
    imageCount: 3,
  },
  {
    slug: "brushless-motor",
    title: "3 Phase Brushless Motor",
    date: "March 2026",
    tag: "Electromagnetics",
    blurb:
      "A brushless motor wound from scratch, spun by an Arduino PWM controller I built myself.",
    purpose:
      "Building a 3 phase brushless motor from scratch and creating a PWM controller for it. The goal was to understand how brushless motors work, how they differ from brushed motors, and how a PWM controller works.",
    technologies: [
      "Arduino",
      "PWM Motor Control",
      "Brushless Motor Design",
      "Electromagnetic Coil Winding",
      "Rectifier Circuits",
    ],
    parts: [
      {
        name: "Arduino Microcontroller",
        note: "Serves as the PWM control unit for the brushless motor.",
      },
      {
        name: "3 Empty Spools",
        note: "Act as the stator structure used to hold the motor coils in place.",
      },
      {
        name: "Enamel Copper Wire",
        note: "Used to create the copper coils that generate the electromagnetic field when current passes through them.",
      },
      {
        name: "Breadboard",
        note: "Used to connect the Arduino and the motor control circuit.",
      },
      {
        name: "Power Supply",
        note: "Provides external power to the motor circuit.",
      },
      {
        name: "Potentiometer",
        note: "Used as an adjustable input to control motor speed or power level.",
      },
      {
        name: "Magnets",
        note: "Used to create the magnetic interaction between the rotor and the energized coils.",
      },
      {
        name: "Washers",
        note: "Act as the rotor body, holding the magnets and spinning around the stainless steel shaft.",
      },
      {
        name: "Stainless Steel Rod",
        note: "Acts as the motor shaft, allowing the rotor to spin through the bearing holders.",
      },
      {
        name: "3 Rectifier Diodes",
        note: "Help control current flow and protect the circuit from voltage spikes caused by the motor coils.",
      },
      {
        name: "IRLZ44N MOSFET",
        note: "Works as an electronic switch that allows the Arduino to control higher current going to the motor coils.",
      },
      {
        name: "KP08 Bearing Holder",
        note: "Supports the stainless steel rod and allows the motor shaft to rotate smoothly.",
      },
      {
        name: "Iron Nails / Stainless Steel Wire Brush",
        note: "Serves as the iron core inside the copper coils.",
      },
    ],
    notes: [],
    imageCount: 3,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
