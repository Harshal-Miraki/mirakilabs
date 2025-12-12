import { BrainCircuit, MapPin, Rocket, Database, Layers, Scan, Signal, BarChart3, RefreshCw, Cpu, Network, Lock, FileText, CheckCircle, Truck, Settings, Play, MonitorCheck } from "lucide-react";

export interface Product {
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    icon: any;
    features: {
        title: string;
        description: string;
    }[];
    image: string;
    problemSolved: string;
    platformOverview: {
        title: string;
        description: string;
        image: string;
    };
    howItWorks: {
        title: string;
        description: string;
        icon: any;
    }[];
}

export const products: Product[] = [
    {
        slug: "catylist",
        title: "Catylist",
        description: "Industrial Automation Engine",
        longDescription:
            "Catylist is a powerful industrial automation engine designed to streamline your operations. It integrates seamlessly with your existing infrastructure to provide real-time monitoring, control, and optimization of your industrial processes.",
        icon: BrainCircuit,
        features: [
            {
                title: "Real-time process monitoring",
                description: "Gain instant visibility into your production lines with millisecond-precision data updates.",
            },
            {
                title: "Advanced control algorithms",
                description: "Optimize output and reduce waste using our proprietary AI-driven control logic.",
            },
            {
                title: "Seamless integration",
                description: "Connect effortlessly with your existing PLCs, SCADA systems, and industrial IoT devices.",
            },
            {
                title: "Predictive maintenance",
                description: "Anticipate equipment failures before they happen with machine learning-powered alerts.",
            },
        ],
        image: "https://ik.imagekit.io/rdwxgbmgm/track%20one/track-1.png",
        problemSolved: "Eliminates operational inefficiencies and reduces downtime by providing intelligent, real-time control over industrial processes.",
        platformOverview: {
            title: "Comprehensive Automation Platform",
            description: "Catylist provides a unified interface for all your automation needs, from device management to complex process orchestration.",
            image: "https://ik.imagekit.io/rdwxgbmgm/track%20one/track-2.png",
        },
        howItWorks: [
            {
                title: "Connect",
                description: "Integrate Catylist with your existing industrial hardware and sensors.",
                icon: Network,
            },
            {
                title: "Analyze",
                description: "Our AI engine processes real-time data to identify optimization opportunities.",
                icon: Cpu,
            },
            {
                title: "Control",
                description: "Automated commands are sent back to machinery for immediate adjustment.",
                icon: Settings,
            },
            {
                title: "Optimize",
                description: "Continuous learning algorithms improve efficiency over time.",
                icon: RefreshCw,
            },
        ],
    },
    {
        slug: "trackone",
        title: "TrackOne",
        description: "Industrial Automation Engine",
        longDescription:
            "TrackOne offers comprehensive tracking and visibility for your industrial assets. From raw materials to finished goods, TrackOne ensures you always know where your assets are and their current status.",
        icon: MapPin,
        features: [
            {
                title: "Asset tracking",
                description: "Monitor the precise location and movement of your assets in real-time across your facility.",
            },
            {
                title: "Supply chain visibility",
                description: "Get a bird's-eye view of your entire supply chain to identify bottlenecks and optimize flow.",
            },
            {
                title: "Inventory optimization",
                description: "Maintain optimal stock levels and reduce carrying costs with automated inventory tracking.",
            },
            {
                title: "Automated reporting",
                description: "Generate detailed reports on asset utilization and movement without manual data entry.",
            },
        ],
        image: "https://ik.imagekit.io/rdwxgbmgm/track%20one/track-1.png",
        problemSolved: "Solves the challenge of asset visibility and inventory accuracy, preventing loss and optimizing supply chain logistics.",
        platformOverview: {
            title: "End-to-End Asset Visibility",
            description: "Gain complete control over your assets with real-time tracking, historical data analysis, and automated alerts.",
            image: "https://ik.imagekit.io/rdwxgbmgm/track%20one/track-2.png",
        },
        howItWorks: [
            {
                title: "Tag",
                description: "Attach RFID or IoT tags to your assets and inventory.",
                icon: Scan,
            },
            {
                title: "Track",
                description: "Sensors capture location and status data as assets move through the facility.",
                icon: Signal,
            },
            {
                title: "Monitor",
                description: "View real-time positions and history on the TrackOne dashboard.",
                icon: MonitorCheck,
            },
            {
                title: "Report",
                description: "Generate automated insights for better decision making.",
                icon: BarChart3,
            },
        ],
    },
    {
        slug: "workbench",
        title: "WorkBench",
        description: "Unified workspace solutions",
        longDescription:
            "WorkBench provides a unified workspace for your engineering and operations teams. It brings together data, tools, and collaboration features into a single, intuitive interface.",
        icon: Rocket,
        features: [
            {
                title: "Unified dashboard",
                description: "Access all your critical tools and data streams from a single, customizable glass pane.",
            },
            {
                title: "Team collaboration",
                description: "Enable seamless communication and file sharing between engineering and operations teams.",
            },
            {
                title: "Integrated IDE",
                description: "Develop, test, and deploy industrial scripts and logic directly within the platform.",
            },
            {
                title: "Custom workflows",
                description: "Design and automate complex business processes with a drag-and-drop workflow builder.",
            },
        ],
        image: "https://ik.imagekit.io/rdwxgbmgm/track%20one/track-1.png",
        problemSolved: "Overcomes the fragmentation of tools and data, enabling teams to collaborate effectively and work more efficiently.",
        platformOverview: {
            title: "Collaborative Engineering Environment",
            description: "A centralized hub for your teams to design, build, and manage industrial projects with ease.",
            image: "https://ik.imagekit.io/rdwxgbmgm/track%20one/track-2.png",
        },
        howItWorks: [
            {
                title: "Integrate",
                description: "Connect your various software tools and data sources to WorkBench.",
                icon: Network,
            },
            {
                title: "Customize",
                description: "Create custom dashboards and workflows tailored to your team's needs.",
                icon: Settings,
            },
            {
                title: "Collaborate",
                description: "Invite team members to work together on projects in real-time.",
                icon: CheckCircle,
            },
            {
                title: "Deploy",
                description: "Push changes and updates to your production environment securely.",
                icon: Rocket,
            },
        ],
    },
    {
        slug: "sap",
        title: "SAP Integration",
        description: "SAP integration solutions",
        longDescription:
            "Our SAP integration solutions ensure that your industrial data flows seamlessly into your SAP ERP system. We bridge the gap between OT and IT, enabling data-driven decision-making across your enterprise.",
        icon: Database,
        features: [
            {
                title: "Bidirectional sync",
                description: "Ensure data consistency by synchronizing changes between your shop floor and SAP in real-time.",
            },
            {
                title: "Real-time connectivity",
                description: "Establish a robust, low-latency link between your industrial assets and SAP modules.",
            },
            {
                title: "Automated mapping",
                description: "Automatically map industrial tags to SAP business objects, reducing manual configuration.",
            },
            {
                title: "Secure transfer",
                description: "Protect your sensitive operational data with enterprise-grade encryption during transit.",
            },
        ],
        image: "https://ik.imagekit.io/rdwxgbmgm/track%20one/track-1.png",
        problemSolved: "Bridges the gap between operational technology (OT) and information technology (IT), ensuring data consistency and accessibility.",
        platformOverview: {
            title: "Seamless ERP Integration",
            description: "Connect your shop floor directly to your top floor with our robust and secure SAP integration connectors.",
            image: "https://ik.imagekit.io/rdwxgbmgm/track%20one/track-2.png",
        },
        howItWorks: [
            {
                title: "Map",
                description: "Define the mapping between your industrial data tags and SAP fields.",
                icon: FileText,
            },
            {
                title: "Connect",
                description: "Establish a secure connection between the shop floor and SAP.",
                icon: Lock,
            },
            {
                title: "Sync",
                description: "Data is automatically synchronized in real-time or batches.",
                icon: RefreshCw,
            },
            {
                title: "Verify",
                description: "Automated checks ensure data integrity and consistency.",
                icon: CheckCircle,
            },
        ],
    },
    {
        slug: "erp-solution",
        title: "ERP Solution",
        description: "Enterprise resource planning",
        longDescription:
            "Our ERP Solution is tailored for the manufacturing industry. It covers everything from production planning and scheduling to quality management and financials.",
        icon: Layers,
        features: [
            {
                title: "Production planning",
                description: "Optimize production schedules to maximize throughput and meet delivery deadlines.",
            },
            {
                title: "Quality management",
                description: "Track quality metrics at every stage of production to ensure compliance and reduce defects.",
            },
            {
                title: "Financial accounting",
                description: "Manage costs, revenue, and profitability with integrated financial tools designed for manufacturing.",
            },
            {
                title: "Supply chain management",
                description: "Streamline procurement, warehousing, and logistics to ensure smooth operations.",
            },
        ],
        image: "https://ik.imagekit.io/rdwxgbmgm/track%20one/track-1.png",
        problemSolved: "Provides a tailored ERP solution that addresses the specific needs of the manufacturing industry, replacing generic, ill-fitting systems.",
        platformOverview: {
            title: "Manufacturing-Centric ERP",
            description: "Manage your entire manufacturing lifecycle with a solution designed to handle the complexities of modern production.",
            image: "https://ik.imagekit.io/rdwxgbmgm/track%20one/track-2.png",
        },
        howItWorks: [
            {
                title: "Plan",
                description: "Create detailed production schedules based on demand and capacity.",
                icon: FileText,
            },
            {
                title: "Execute",
                description: "Manage work orders and track production progress in real-time.",
                icon: Play,
            },
            {
                title: "Monitor",
                description: "Track quality and performance metrics throughout the process.",
                icon: BarChart3,
            },
            {
                title: "Deliver",
                description: "Coordinate logistics and ensure timely delivery to customers.",
                icon: Truck,
            },
        ],
    },
];

export function getProductBySlug(slug: string): Product | undefined {
    return products.find((product) => product.slug === slug);
}
