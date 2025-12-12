import { Cpu, Activity, Gauge, Monitor, Settings, Zap, Repeat, BarChart3, ShieldCheck, Server, Network } from "lucide-react";
import { Solution } from "./solutions";

export const automations: Solution[] = [
    {
        slug: "plc",
        title: "Programmable Logic Controllers (PLC)",
        description: "Rugged Industrial Control",
        longDescription: "Our PLC solutions provide the backbone for industrial automation. Designed for harsh environments, they offer reliable, high-speed control for machines and processes, scalable from micro-automation to complex plant-wide systems.",
        icon: Cpu,
        features: [
            "High-speed logic processing",
            "Modular I/O expandability",
            "Integrated safety functions",
            "Multi-protocol communication",
            "Hot-swappable modules",
            "Cybersecurity enabled"
        ],
        painPoints: [
            { id: "1", title: "Downtime", description: "Unreliable legacy controllers causing frequent stops." },
            { id: "2", title: "Scalability", description: "Inability to add new sensors or actuators." },
            { id: "3", title: "Integration", description: "Data silos due to proprietary protocols." },
            { id: "4", title: "Speed", description: "Slow scan times affecting production throughput." }
        ],
        outcomes: [
            { id: "1", value: "99.99%", label: "Uptime", description: "redundancy options available" },
            { id: "2", value: "1ms", label: "Response", description: "ultra-fast scan cycles" },
            { id: "3", value: "IEC", label: "61131-3", description: "standard programming languages" },
            { id: "4", value: "IoT", label: "Ready", description: "native MQTT and OPC UA support" }
        ],
        coreFeatures: [
            { id: "1", title: "Logic Control", description: "Deterministic execution of control algorithms." },
            { id: "2", title: "Motion Control", description: "Integrated axis control for positioning." },
            { id: "3", title: "Safety", description: "SIL3/PLe certified safety logic." },
            { id: "4", title: "Data Logging", description: "On-board storage for critical data." }
        ],
        howItWorks: {
            title: "Industrial Brain",
            steps: [
                { step: 1, title: "Input", description: "Read status from sensors and switches." },
                { step: 2, title: "Process", description: "Execute user program logic." },
                { step: 3, title: "Output", description: "Drive actuators, motors, and valves." },
                { step: 4, title: "Communicate", description: "Send data to HMI/SCADA." }
            ]
        },
        integrations: [
            { category: "Protocols", items: ["Modbus", "EtherNet/IP", "Profinet"] },
            { category: "Hardware", items: ["All standard industrial I/O"] }
        ],
        capabilities: [
            { title: "Redundancy", description: "Hot-standby CPU support." },
            { title: "Environment", description: "-40°C to +70°C operating range." }
        ],
        pricing: [
            { model: "Micro", description: "Machine-level control.", features: ["Compact"] },
            { model: "Enterprise", description: "Plant-wide distributed control.", features: ["Redundant"] }
        ],
        deployment: {
            options: ["Cabinet"],
            details: "DIN-rail mounted industrial standard."
        }
    },
    {
        slug: "scada",
        title: "SCADA Systems",
        description: "Supervisory Control & Data Acquisition",
        longDescription: "Gain a bird's-eye view of your entire operation with our high-performance SCADA systems. Visualize real-time data, manage alarms, and control remote processes from a centralized, intuitive interface.",
        icon: Activity,
        features: [
            "Real-time visualization",
            "Advanced alarm management",
            "Historical data trending",
            "Web-based access",
            "Automated reporting",
            "Database integration"
        ],
        painPoints: [
            { id: "1", title: "Blind Spots", description: "Lack of visibility into remote sites." },
            { id: "2", title: "Slow Reaction", description: "Operators noticing alarms too late." },
            { id: "3", title: "Data Loss", description: "Manual recording errors." },
            { id: "4", title: "Compliance", description: "Missing audit trails for regulatory needs." }
        ],
        outcomes: [
            { id: "1", value: "100%", label: "Visibility", description: "total plant awareness" },
            { id: "2", value: "50%", label: "Faster", description: "response to critical alarms" },
            { id: "3", value: "Zero", label: "Paper", description: "fully digital reporting" },
            { id: "4", value: "Global", label: "Access", description: "monitor from anywhere safely" }
        ],
        coreFeatures: [
            { id: "1", title: "HMI/UI", description: "High-fidelity graphics and dashboards." },
            { id: "2", title: "Historian", description: "High-speed time-series database." },
            { id: "3", title: "Alarming", description: "ISA 18.2 compliant alarm system." },
            { id: "4", title: "Scripts", description: "Python/VBScript for custom logic." }
        ],
        howItWorks: {
            title: "Centralized Control",
            steps: [
                { step: 1, title: "Acquire", description: "Poll data from PLCs and RTUs." },
                { step: 2, title: "Process", description: "Scale, limit check, and alarm generation." },
                { step: 3, title: "Visualize", description: "Update operator screens." },
                { step: 4, title: "Archive", description: "Store to SQL/Historian." }
            ]
        },
        integrations: [
            { category: "IT", items: ["SQL Server", "Oracle", "SAP"] },
            { category: "OT", items: ["OPC UA", "MQTT", "DNP3"] }
        ],
        capabilities: [
            { title: "Unlimited Tags", description: "Scalable license model." },
            { title: "Mobility", description: "HTML5 native mobile clients." }
        ],
        pricing: [
            { model: "License", description: "Per server/tag count.", features: ["Development Tools"] },
            { model: "SaaS", description: "Cloud-hosted SCADA.", features: ["Managed Service"] }
        ],
        deployment: {
            options: ["On-Premise", "Cloud", "Hybrid"],
            details: "Flexible architecture."
        }
    },
    {
        slug: "vfd",
        title: "Variable Frequency Drives (VFD)",
        description: "Motor Control & Efficiency",
        longDescription: "Maximize energy savings and extend motor life with our advanced VFD solutions. Precise speed and torque control for pumps, fans, and conveyors, coupled with intelligent diagnostics to prevent downtime.",
        icon: Gauge,
        features: [
            "Energy saving mode",
            "PID control loop",
            "Soft start/stop",
            "Motor protection",
            "Harmonic filtering",
            "Regenerative braking"
        ],
        painPoints: [
            { id: "1", title: "High Energy Bills", description: "Motors running at 100% speed unnecessarily." },
            { id: "2", title: "Wear & Tear", description: "Mechanical shock from direct-on-line starts." },
            { id: "3", title: "Process Control", description: "Inaccurate flow or pressure control." },
            { id: "4", title: "Noise", description: "Excessive vibration and acoustic noise." }
        ],
        outcomes: [
            { id: "1", value: "40%", label: "Energy Cut", description: "typical savings on fan/pump apps" },
            { id: "2", value: "3x", label: "Life", description: "extension for mechanical components" },
            { id: "3", value: "Precise", label: "Control", description: "maintain exact process variables" },
            { id: "4", value: "Smart", label: "IoT", description: "predictive maintenance data" }
        ],
        coreFeatures: [
            { id: "1", title: "Vector Control", description: "High torque at low speeds." },
            { id: "2", title: "Safe Torque Off", description: "Integrated functional safety." },
            { id: "3", title: "PLC Inside", description: "Basic logic capability onboard." },
            { id: "4", title: "Fieldbus", description: "Native Ethernet connectivity." }
        ],
        howItWorks: {
            title: "Efficient Drive",
            steps: [
                { step: 1, title: "Rectify", description: "Convert AC input to DC bus." },
                { step: 2, title: "Invert", description: "Create variable frequency AC output." },
                { step: 3, title: "Control", description: "Adjust speed matching demand." },
                { step: 4, title: "Protect", description: "Monitor current and temp." }
            ]
        },
        integrations: [
            { category: "Motors", items: ["Induction", "PM Motors", "SynRM"] },
            { category: "Network", items: ["EtherNet/IP", "Profinet", "Modbus TCP"] }
        ],
        capabilities: [
            { title: "High Power", description: "Low voltage up to medium voltage drives." },
            { title: "Clean Power", description: "Active front end for low harmonics." }
        ],
        pricing: [
            { model: "Product", description: "Per unit drive cost.", features: ["Commissioning App"] },
            { model: "System", description: "Panel built solutions.", features: ["Bypass Logic"] }
        ],
        deployment: {
            options: ["Wall", "Cabinet"],
            details: "IP20 to IP66 ratings available."
        }
    },
    {
        slug: "hmi",
        title: "Human Machine Interface (HMI)",
        description: "Operator Visualization",
        longDescription: "Empower your operators with intuitive, rugged HMI panels. From basic machine control to advanced multi-touch dashboards, our HMIs provide the window into your process, ensuring clarity and ease of use.",
        icon: Monitor,
        features: [
            "Multi-touch capacitive screens",
            "Data logging and trending",
            "Remote access VNC",
            "Alarm handling",
            "Recipe management",
            "PDF viewer & media player"
        ],
        painPoints: [
            { id: "1", title: "Complexity", description: "Confusing interfaces leading to operator error." },
            { id: "2", title: "Durability", description: "Consumer tablets failing in factory heat/dust." },
            { id: "3", title: "Visibility", description: "Poor readability in bright or dim lighting." },
            { id: "4", title: "Lag", description: "Slow screen updates frustrating users." }
        ],
        outcomes: [
            { id: "1", value: "Intuitive", label: "UX", description: "reduce training time" },
            { id: "2", value: "IP66", label: "Protection", description: "water and dust resistant front" },
            { id: "3", value: "Connect", label: "Any", description: "drivers for 300+ controllers" },
            { id: "4", value: "Mobile", label: "Ready", description: "mirror screen to phone/tablet" }
        ],
        coreFeatures: [
            { id: "1", title: "Vector Graphics", description: "Crisp scaling on any size." },
            { id: "2", title: "Gestures", description: "Swipe, pinch, zoom support." },
            { id: "3", title: "Industrial PC", description: "Open Windows/Linux options." },
            { id: "4", title: "Edge Gateway", description: "MQTT publisher functionality." }
        ],
        howItWorks: {
            title: "Operator Window",
            steps: [
                { step: 1, title: "Connect", description: "Link to machine PLC." },
                { step: 2, title: "Design", description: "Build screens with drag-drop editor." },
                { step: 3, title: "Interact", description: "Operator controls machine via touch." },
                { step: 4, title: "Log", description: "Save alarm history to USB/SD." }
            ]
        },
        integrations: [
            { category: "PLC", items: ["Siemens", "Allen-Bradley", "Mitsubishi"] },
            { category: "Cloud", items: ["AWS IoT", "Azure"] }
        ],
        capabilities: [
            { title: "Sunlight Readable", description: "High brightness displays." },
            { title: "Hygienic", description: "Stainless steel bezel options." }
        ],
        pricing: [
            { model: "Panel", description: "Hardware unit price.", features: ["Runtime License"] },
            { model: "Software", description: "Development software.", features: ["Unlimited Tags"] }
        ],
        deployment: {
            options: ["Panel Mount", "VESA"],
            details: "Standard cutouts."
        }
    },
    {
        slug: "servo",
        title: "Servo Drive & Motor",
        description: "Precision Motion Control",
        longDescription: "Achieve sub-micron accuracy and dynamic performance with our Servo systems. Perfect for robotics, heavy-duty CNC, and packaging machinery where speed and position control are critical.",
        icon: Settings, // Fallback icon, could use something more 'motion' like
        features: [
            "High-resolution feedback",
            "Electronic camming",
            "Vibration suppression",
            "Auto-tuning",
            "Absolute encoders",
            "Integrated safety"
        ],
        painPoints: [
            { id: "1", title: "Inaccuracy", description: "Product tolerance failures." },
            { id: "2", title: "Slop", description: "Mechanical backlash affecting quality." },
            { id: "3", title: "Setup", description: "Difficult tuning processes." },
            { id: "4", title: "Sync", description: "Multi-axis coordination issues." }
        ],
        outcomes: [
            { id: "1", value: "Micron", label: "Precision", description: "exact positioning" },
            { id: "2", value: "Dynamic", label: "Response", description: "rapid acceleration" },
            { id: "3", value: "Compact", label: "Size", description: "high power density" },
            { id: "4", value: "Safe", label: "Motion", description: "STO, SS1, SS2 built-in" }
        ],
        coreFeatures: [
            { id: "1", title: "Auto-tune", description: "One-button stiffness adjustment." },
            { id: "2", title: "EtherCAT", description: "Real-time communication bus." },
            { id: "3", title: "23-bit", description: "High res encoder standard." },
            { id: "4", title: "Direct Drive", description: "Rotary capabilities." }
        ],
        howItWorks: {
            title: "Precision Move",
            steps: [
                { step: 1, title: "Command", description: "Motion controller sends profile." },
                { step: 2, title: "Drive", description: "Amplifier powers the motor coils." },
                { step: 3, title: "Feedback", description: "Encoder reports actual position." },
                { step: 4, title: "Correct", description: "Loop closes error instantly." }
            ]
        },
        integrations: [
            { category: "Controllers", items: ["Beckhoff", "Omron", "Siemens"] },
            { category: "Mechanical", items: ["Gearboxes", "Linear Actuators"] }
        ],
        capabilities: [
            { title: "Multi-Axis", description: "Shared DC bus systems." },
            { title: "Single Cable", description: "Power and feedback in one." }
        ],
        pricing: [
            { model: "Axis", description: "Per servo axis cost.", features: ["Cables included"] },
            { model: "Kit", description: "Motor + Drive package.", features: ["Sizing support"] }
        ],
        deployment: {
            options: ["Cabinet"],
            details: "Heat sink considerations."
        }
    }
];

export function getAutomationBySlug(slug: string): Solution | undefined {
    return automations.find((automation) => automation.slug === slug);
}
