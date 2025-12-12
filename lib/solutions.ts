import { Beaker, Settings, Building2, MessageSquare, Layers, Server, MapPin, Video, Flame, ShieldCheck, Shield, Cpu, Zap, Droplets, Eye, Sparkles, Wrench, ShoppingCart, TrendingUp, DollarSign, BarChart3, Truck, PieChart, Workflow } from "lucide-react";

export interface Solution {
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    icon: any;
    features: string[];
    // New Sections
    painPoints: {
        id: string;
        title: string;
        description: string;
        icon?: any;
    }[];
    outcomes: {
        id: string;
        value: string;
        label: string;
        description: string;
        icon?: any;
    }[];
    coreFeatures: {
        id: string;
        title: string;
        description: string;
        image?: string; // Placeholder for now
        icon?: any;
    }[];
    howItWorks: {
        title: string;
        steps: {
            step: number;
            title: string;
            description: string;
        }[];
    };
    integrations: {
        category: string;
        items: string[];
    }[];
    capabilities: {
        title: string;
        description: string;
    }[];
    pricing: {
        model: string;
        description: string;
        features: string[];
    }[];
    deployment: {
        options: string[]; // e.g., "Cloud", "On-Premise", "Hybrid"
        details: string;
    };
}

export const solutions: Solution[] = [
    {
        slug: "raw-mix",
        title: "Raw Mix Optimization",
        description: "AI-Driven Cement Raw Mix Quality Control",
        longDescription:
            "Our Raw Mix solution leverages advanced AI and machine learning to optimize cement raw mix composition in real-time. By analyzing chemical composition data and process parameters, we help cement plants achieve consistent quality while reducing material costs and energy consumption.",
        icon: Beaker,
        features: [
            "Real-time chemical composition analysis",
            "Automated dosing recommendations",
            "Quality prediction and control",
            "Raw material cost optimization",
            "Integration with XRF analyzers",
            "Historical trend analysis",
        ],
        painPoints: [
            { id: "1", title: "Inconsistent Quality", description: "Variations in raw material composition lead to unpredictable clinker quality." },
            { id: "2", title: "High Material Costs", description: "Over-usage of expensive additives to compensate for quality variance." },
            { id: "3", title: "Energy Waste", description: "Suboptimal mix designs require higher kiln temperatures, wasting fuel." },
            { id: "4", title: "Manual Errors", description: "Reliance on manual calculations and delayed lab results reduces responsiveness." },
        ],
        outcomes: [
            { id: "1", value: "15%", label: "Cost Reduction", description: "in raw material procurement" },
            { id: "2", value: "30%", label: "Quality Consistency", description: "improvement in standard deviation" },
            { id: "3", value: "5%", label: "Energy Savings", description: "reduction in kiln fuel consumption" },
            { id: "4", value: "24/7", label: "Real-time Control", description: "continuous process optimization" },
        ],
        coreFeatures: [
            { id: "1", title: "Predictive Quality Control", description: "Forecast clinker quality parameters (LSF, SM, AM) hours in advance." },
            { id: "2", title: "Automated Setpoint Optimization", description: "AI agents adjust way-feeder setpoints automatically to maintain targets." },
            { id: "3", title: "Cost-Optimal Recipes", description: "Dynamically calculate the cheapest mix that meets quality constraints." },
            { id: "4", title: "Scenario Simulation", description: "Test different raw material combinations virtually before usage." }
        ],
        howItWorks: {
            title: "Closed-Loop Optimization Flow",
            steps: [
                { step: 1, title: "Data Ingest", description: "Real-time integration with XRF analyzers and weigh feeders." },
                { step: 2, title: "AI Analysis", description: "Models predict future quality based on current chemistry and lags." },
                { step: 3, title: "Optimization", description: "Algorithm solves for optimal feeder settings to minimize cost." },
                { step: 4, title: "Execution", description: "New setpoints are sent to the PLC for immediate adjustment." },
            ],
        },
        integrations: [
            { category: "Analyzers", items: ["Thermo Fisher", "PANalytical", "Bruker"] },
            { category: "Control Systems", items: ["Siemens PCS7", "ABB 800xA", "Rockwell"] },
        ],
        capabilities: [
            { title: "Scalability", description: "Handle multiple production lines simultaneously." },
            { title: "Security", description: "Industrial-grade encryption and on-premise deployment options." },
            { title: "MLOps", description: "Continuous model retraining with new process data." },
        ],
        pricing: [
            { model: "Subscription", description: "Annual license based on production capacity.", features: ["24/7 Support", "Quarterly Model Updates"] },
            { model: "Perpetual", description: "One-time license with annual maintenance.", features: ["On-premise installation", "Custom training"] },
        ],
        deployment: {
            options: ["On-Premise", "Private Cloud", "Hybrid"],
            details: "Deployed on edge servers within the plant network for low latency and data sovereignty.",
        },
    },
    {
        slug: "predictive-maintenance",
        title: "Predictive Maintenance",
        description: "ML-Based Equipment Failure Prediction",
        longDescription:
            "Prevent costly downtime with our AI-powered Predictive Maintenance solution. By analyzing sensor data, vibration patterns, and historical maintenance records, we predict equipment failures before they occur, enabling proactive maintenance scheduling and reducing unplanned outages.",
        icon: Settings,
        features: [
            "Equipment health monitoring",
            "Failure prediction models",
            "Maintenance scheduling optimization",
            "Vibration and sensor analytics",
            "Spare parts inventory optimization",
            "ROI tracking and reporting",
        ],
        painPoints: [
            { id: "1", title: "Unplanned Downtime", description: "Unexpected equipment failures halt production and cause revenue loss." },
            { id: "2", title: "High Maintenance Costs", description: "Reactive repairs are significantly more expensive than planned maintenance." },
            { id: "3", title: "Spare Parts Shortages", description: "Lack of critical spares when breakdowns occur extends downtime." },
            { id: "4", title: "Data Overload", description: "Too many sensor alerts leading to alarm fatigue for operators." },
        ],
        outcomes: [
            { id: "1", value: "50%", label: "Downtime Reduction", description: "decrease in unplanned outages" },
            { id: "2", value: "25%", label: "Maintenance Savings", description: "reduction in annual maintenance budget" },
            { id: "3", value: "10x", label: "ROI", description: "return on investment within first year" },
            { id: "4", value: "20%", label: "Asset Life Extension", description: "prolonged useful life of critical machinery" },
        ],
        coreFeatures: [
            { id: "1", title: "Anomaly Detection", description: "Identify subtle deviations in vibration and temperature patterns." },
            { id: "2", title: "Remaining Useful Life (RUL)", description: "Estimate days until failure for critical components." },
            { id: "3", title: "Root Cause Analysis", description: "Pinpoint the specific sub-component causing the issue." },
            { id: "4", title: "Fleet-Wide Benchmarking", description: "Compare asset performance across different sites." }
        ],
        howItWorks: {
            title: "From Sensor to Insight",
            steps: [
                { step: 1, title: "Sensor Data Collection", description: "Vibration, temp, and current data streamed from PLCs/IoT." },
                { step: 2, title: "Feature Extraction", description: "Signal processing to extract time and frequency domain features." },
                { step: 3, title: "Inference", description: "Models compare current state against failure signatures." },
                { step: 4, title: "Actionable Alert", description: "Alerts sent to maintenance team with recommended actions." },
            ],
        },
        integrations: [
            { category: "Sensors", items: ["Wireless IoT", "Wired Vibration Probes"] },
            { category: "CMMS", items: ["SAP PM", "IBM Maximo", "Infor EAM"] },
        ],
        capabilities: [
            { title: "Edge Processing", description: "Analyze high-frequency vibration data locally." },
            { title: "Model Library", description: "Pre-trained models for motors, fans, pumps, and gearboxes." },
            { title: "Scalability", description: "Monitor thousands of assets across multiple sites." },
        ],
        pricing: [
            { model: "Per Asset", description: "Pricing based on number of monitored assets.", features: ["Unlimited Users", "Mobile App Access"] },
            { model: "Enterprise Site", description: "Flat fee for entire facility coverage.", features: ["Dedicated Success Manager", "Custom Models"] },
        ],
        deployment: {
            options: ["Cloud", "Edge"],
            details: "Hybrid architecture with edge nodes for data reduction and cloud for aggregation.",
        },
    },
    {
        slug: "fms",
        title: "Facility Management System",
        description: "Comprehensive Maintenance Management",
        longDescription:
            "Our FMS (Facility Management System) provides a complete solution for managing maintenance operations across your facilities. From work order management to asset lifecycle tracking, FMS streamlines maintenance workflows and improves operational efficiency.",
        icon: Building2,
        features: [
            "Work order management",
            "Asset lifecycle tracking",
            "Preventive maintenance scheduling",
            "Vendor and contractor management",
            "Inventory and spare parts control",
            "Mobile workforce management",
        ],
        painPoints: [
            { id: "1", title: "Disorganized Workflows", description: "Paper-based or fragmented systems lead to lost orders and inefficiency." },
            { id: "2", title: "Lack of Visibility", description: "No clear view of asset health or maintenance history." },
            { id: "3", title: "Compliance Risks", description: "Difficulty in proving regulatory compliance during audits." },
            { id: "4", title: "Vendor Mismanagement", description: "Poor tracking of contractor performance and costs." },
        ],
        outcomes: [
            { id: "1", value: "40%", label: "Productivity Boost", description: "increase in technician wrench time" },
            { id: "2", value: "100%", label: "Audit Compliance", description: "full digital trail of all maintenance activities" },
            { id: "3", value: "20%", label: "Inventory Reduction", description: "optimized spare parts stock levels" },
            { id: "4", value: "30%", label: "SLA Improvement", description: "faster response times to work requests" },
        ],
        coreFeatures: [
            { id: "1", title: "Digital Work Orders", description: "Create, assign, and track work orders from mobile devices." },
            { id: "2", title: "Asset Registry", description: "Centralized database of all facility assets and equipment." },
            { id: "3", title: "Vendor Portal", description: "Manage contractors, quotes, and invoices in one place." },
            { id: "4", title: "Budget Tracking", description: "Monitor maintenance spend against allocated cost centers." }
        ],
        howItWorks: {
            title: "Streamlined Operations",
            steps: [
                { step: 1, title: "Request", description: "User submits maintenance request via portal." },
                { step: 2, title: "Triage", description: "Supervisor approves and assigns to technician." },
                { step: 3, title: "Execution", description: "Technician completes work and logs parts used on mobile." },
                { step: 4, title: "Closeout", description: "Work order closed and asset history updated." },
            ],
        },
        integrations: [
            { category: "ERP", items: ["SAP", "Oracle"] },
            { category: "BMS", items: ["Honeywell", "Johnson Controls"] },
        ],
        capabilities: [
            { title: "Mobile First", description: "Native iOS and Android apps for field technicians." },
            { title: "Offline Mode", description: "Full functionality even without internet connectivity." },
            { title: "Multi-Site Support", description: "Manage multiple properties from a single dashboard." },
        ],
        pricing: [
            { model: "Per User", description: "Monthly subscription per named user.", features: ["Cloud Hosting", "Backups"] },
            { model: "Enterprise", description: "Volume licensing for large teams.", features: ["SSO Integration", "API Access"] },
        ],
        deployment: {
            options: ["SaaS"],
            details: "Fully managed cloud solution hosted on AWS.",
        },
    },
    {
        slug: "chatbot",
        title: "Industrial AI Chatbot",
        description: "AI-Powered Industrial Assistant",
        longDescription:
            "Our Industrial AI Chatbot provides instant access to operational data, maintenance procedures, and troubleshooting guides. Trained on your facility's documentation and data, it serves as a 24/7 intelligent assistant for operators and maintenance personnel.",
        icon: MessageSquare,
        features: [
            "Natural language queries",
            "Access to operational data",
            "Troubleshooting assistance",
            "Procedure documentation lookup",
            "Multi-language support",
            "Integration with enterprise systems",
        ],
        painPoints: [
            { id: "1", title: "Knowledge Silos", description: "Critical information locked in pdfs or veteran operators' heads." },
            { id: "2", title: "Slow Response", description: "Time wasted searching for manuals during emergencies." },
            { id: "3", title: "Onboarding Lag", description: "New operators take months to become proficient." },
            { id: "4", title: "Data Fragmentation", description: "Data spread across too many different systems." },
        ],
        outcomes: [
            { id: "1", value: "90%", label: "Faster Resolution", description: "reduction in time to find information" },
            { id: "2", value: "24/7", label: "Expert Support", description: "instant answers anytime, anywhere" },
            { id: "3", value: "50%", label: "Training Reduction", description: "faster ramp-up time for new hires" },
            { id: "4", value: "100%", label: "Consistency", description: "standardized answers based on approved SOPs" },
        ],
        coreFeatures: [
            { id: "1", title: "RAG Architecture", description: "Retrieval Augmented Generation for accurate, cited answers." },
            { id: "2", title: "Data Querying", description: "Ask 'What was the kiln temp at 2 PM?' and get a chart." },
            { id: "3", title: "Action Execution", description: "trigger workflows like 'Create Work Order' via chat." },
            { id: "4", title: "Visual Recognition", description: "Upload a photo of a part to identify it and find manuals." }
        ],
        howItWorks: {
            title: "Cognitive Engine",
            steps: [
                { step: 1, title: "Ingestion", description: "Index manuals, SOPs, and connect to historians." },
                { step: 2, title: "Understanding", description: "User asks question in natural language." },
                { step: 3, title: "Retrieval", description: "System finds relevant docs and data points." },
                { step: 4, title: "Synthesis", description: "LLM generates a precise answer with citations." },
            ],
        },
        integrations: [
            { category: "Messaging", items: ["Microsoft Teams", "Slack", "Web Widget"] },
            { category: "Docs", items: ["SharePoint", "Google Drive", "Confluence"] },
        ],
        capabilities: [
            { title: "Data Privacy", description: "Your data never leaves your private cloud environment." },
            { title: "Context Aware", description: "Remembers previous turns in the conversation." },
            { title: "Multi-Modal", description: "Can interpret images and diagrams from manuals." },
        ],
        pricing: [
            { model: "Token Based", description: "Pay for what you use.", features: ["Custom Fine-tuning"] },
            { model: "Seat Based", description: "Fixed montly price per user.", features: ["Unlimited Queries", "Priority Support"] },
        ],
        deployment: {
            options: ["Private Cloud", "On-Premise LLM"],
            details: "Can run local LLMs (Llama 3) for air-gapped security.",
        },
    },
    {
        slug: "erp-solutions",
        title: "ERP Solutions",
        description: "Enterprise Resource Planning Integration",
        longDescription:
            "Bridge the gap between your operational technology (OT) and enterprise systems with our ERP integration solutions. We connect your industrial data with SAP, Oracle, and other ERP systems to enable data-driven decision-making across your organization.",
        icon: Layers,
        features: [
            "SAP integration",
            "Oracle ERP connectivity",
            "Real-time data synchronization",
            "Custom API development",
            "Data transformation and mapping",
            "Automated reporting workflows",
        ],
        painPoints: [
            { id: "1", title: "Manual Data Entry", description: "Risk of errors and time wasted typing production data into SAP." },
            { id: "2", title: "Delayed Financials", description: "Month-end close takes days due to data lag." },
            { id: "3", title: "Inventory Blindspots", description: "Discrepancy between physical stock and ERP records." },
            { id: "4", title: "IT/OT Gap", description: "Disconnection between shop floor and top floor." },
        ],
        outcomes: [
            { id: "1", value: "100%", label: "Automation", description: "elimination of manual data entry" },
            { id: "2", value: "Real-time", label: "Visibility", description: "production costs visible instantly" },
            { id: "3", value: "99%", label: "Data Accuracy", description: "automated data validation and cleaning" },
            { id: "4", value: "5 Days", label: "Faster Closing", description: "reduction in month-end financial closing time" },
        ],
        coreFeatures: [
            { id: "1", title: "Bi-directional Sync", description: "Production orders down to floor, actuals back to ERP." },
            { id: "2", title: "Universal Connector", description: "Standard adapters for major ERPs and PLCs." },
            { id: "3", title: "Transformation Engine", description: "Complex logic to map tag data to business objects." },
            { id: "4", title: "Audit Trails", description: "Full history of every data point synced for compliance." }
        ],
        howItWorks: {
            title: "Integration Bus",
            steps: [
                { step: 1, title: "Extract", description: "Pull data from source systems (OT or IT)." },
                { step: 2, title: "Transform", description: "Normalize and map data formats." },
                { step: 3, title: "Load", description: "Push clean data to destination system." },
                { step: 4, title: "Verify", description: "Confirm transaction success and log audit trail." },
            ],
        },
        integrations: [
            { category: "ERP", items: ["SAP S/4HANA", "Oracle NetSuite", "Microsoft Dynamics"] },
            { category: "Middleware", items: ["Mulesoft", "Tibco", "Azure Logic Apps"] },
        ],
        capabilities: [
            { title: "High Throughput", description: "Handle millions of transactions per hour." },
            { title: "Reliability", description: "Guaranteed delivery with buffering and retry logic." },
            { title: "Security", description: "Encrypted tunnels and role-based access control." },
        ],
        pricing: [
            { model: "Project Based", description: "One-time implementation fee.", features: ["Requirements Analysis", "Go-Live Support"] },
            { model: "Managed Service", description: "Annual fee for monitoring and maintenance.", features: ["24/7 Monitoring", "Patch Management"] },
        ],
        deployment: {
            options: ["Cloud", "On-Premise"],
            details: "Middleware deployed where it makes sense for your network.",
        },
    },
    {
        slug: "dcim",
        title: "DCIM",
        description: "Data Center Infrastructure Management",
        longDescription:
            "Our DCIM solution provides comprehensive monitoring and management of your data center infrastructure. Track power usage, cooling efficiency, and equipment health in real-time to optimize operations and reduce energy costs.",
        icon: Server,
        features: [
            "Power usage monitoring (PUE)",
            "Cooling efficiency optimization",
            "Capacity planning",
            "Environmental monitoring",
            "Asset management",
            "Energy cost analysis",
        ],
        painPoints: [
            { id: "1", title: "High PUE", description: "Inefficient cooling wasting massive amounts of power." },
            { id: "2", title: "Capacity Risks", description: "Running out of power/cooling/space without warning." },
            { id: "3", title: "Hotspots", description: "Localized overheating damaging servers." },
            { id: "4", title: "Zombie Servers", description: "Running servers that are doing no useful work." },
        ],
        outcomes: [
            { id: "1", value: "1.2", label: "Target PUE", description: "optimize towards world-class efficiency" },
            { id: "2", value: "20%", label: "Energy Savings", description: "reduction in cooling costs" },
            { id: "3", value: "30%", label: "Capacity Reclaim", description: "identify and use stranded power capacity" },
            { id: "4", value: "100%", label: "Uptime", description: "prevent thermal-related outages" },
        ],
        coreFeatures: [
            { id: "1", title: "Thermal Mapping", description: "3D visualization of temperature hotspots." },
            { id: "2", title: "What-If Analysis", description: "Simulate adding new servers before deployment." },
            { id: "3", title: "Rack Management", description: "Drag-and-drop planning for rack space usage." },
            { id: "4", title: "Cable Management", description: "Track cable runs and patch panel connections." }
        ],
        howItWorks: {
            title: "Data Center Optimization",
            steps: [
                { step: 1, title: "Monitor", description: "Rack sensors collect temp, humidity, and power data." },
                { step: 2, title: "Analyze", description: "Determine cooling needs vs actual supply." },
                { step: 3, title: "Control", description: "Adjust CRAC units and airflow automatically." },
                { step: 4, title: "Report", description: "Generate PUE and sustainability reports." },
            ],
        },
        integrations: [
            { category: "Hardware", items: ["Schneider", "Vertiv", "Eaton"] },
            { category: "ITSM", items: ["ServiceNow", "Jira"] },
        ],
        capabilities: [
            { title: "3D Visualization", description: "Digital twin of your data center floor." },
            { title: "Real-time Analytics", description: "Second-by-second power monitoring." },
            { title: "Alerting", description: "Instant notification of environmental breaches." },
        ],
        pricing: [
            { model: "Per Rack", description: "Annual license per rack managed.", features: ["Unlimited Sensors"] },
            { model: "Per Site", description: "Flat fee for entire data center.", features: ["Multi-room support", "API Access"] },
        ],
        deployment: {
            options: ["On-Premise"],
            details: "Secure deployment within the management network.",
        },
    },
    {
        slug: "asset-tracking",
        title: "Asset Tracking",
        description: "Real-Time Industrial Asset Monitoring",
        longDescription:
            "Track and monitor your industrial assets in real-time with our comprehensive asset tracking solution. Using IoT sensors, RFID, and GPS technology, we provide complete visibility into asset location, condition, and utilization across your facilities.",
        icon: MapPin,
        features: [
            "Real-time location tracking",
            "Asset utilization analytics",
            "Geofencing and alerts",
            "Condition monitoring",
            "Maintenance history tracking",
            "Mobile asset scanning",
        ],
        painPoints: [
            { id: "1", title: "Lost Assets", description: "Time wasted searching for tools and mobile equipment." },
            { id: "2", title: "Underutilization", description: "Buying new equipment while existing ones sit idle." },
            { id: "3", title: "Theft & Shrinkage", description: "Assets disappearing from facilities." },
            { id: "4", title: "Compliance", description: "Inability to prove asset location for audits." },
        ],
        outcomes: [
            { id: "1", value: "100%", label: "Visibility", description: "always know where everything is" },
            { id: "2", value: "15%", label: "CapEx Reduction", description: "optimize fleet size based on usage" },
            { id: "3", value: "90%", label: "Search Time", description: "reduction in time spent looking for tools" },
            { id: "4", value: "0%", label: "Lost Items", description: "elimination of asset shrinkage" },
        ],
        coreFeatures: [
            { id: "1", title: "Live Map", description: "Real-time position on facility floor plan." },
            { id: "2", title: "Geofencing", description: "Alerts when assets leave authorized zones." },
            { id: "3", title: "Check-in/Check-out", description: "Digital log of who has what item." },
            { id: "4", title: "Condition Monitoring", description: "Track shock, vibration, or temperature for sensitive cargo." }
        ],
        howItWorks: {
            title: "RTLS Technology",
            steps: [
                { step: 1, title: "Tagging", description: "Attach BLE/UWB tags to critical assets." },
                { step: 2, title: "Triangulation", description: "Gateways detect tag signals and calculate position." },
                { step: 3, title: "Rendering", description: "Display location on dashboard map." },
                { step: 4, title: "Analytics", description: "Calculate utilization and movement heatmaps." },
            ],
        },
        integrations: [
            { category: "Hardware", items: ["Zebra", "Impinj", "Aruba"] },
            { category: "ERP/EAM", items: ["SAP", "Oracle", "Maximo"] },
        ],
        capabilities: [
            { title: "Indoor/Outdoor", description: "Seamless transition from GPS to indoor positioning." },
            { title: "High Accuracy", description: "Sub-meter precision with UWB technology." },
            { title: "Battery Mgmt", description: "Alerts for low tag batteries." },
        ],
        pricing: [
            { model: "Subscription", description: "Includes hardware and software.", features: ["Tag replacement included"] },
            { model: "Caas", description: "Hardware as a service.", features: ["Zero upfront cost"] },
        ],
        deployment: {
            options: ["Cloud", "On-Premise"],
            details: "Flexible options depending on security needs.",
        },
    },

    {
        slug: "smart-rack",
        title: "Smart Rack",
        description: "IT Hardware Infrastructure Service",
        longDescription: "Our Smart Rack solution provides intelligent management for IT hardware infrastructure. It combines physical security, cooling optimization, and power management into a compact, smart enclosure system designed for edge computing and distributed IT environments.",
        icon: Cpu,
        features: [
            "Biometric access control",
            "In-rack cooling systems",
            "Smart PDU integration",
            "Environmental monitoring sensors",
            "Remote management interface",
            "Fire suppression integration"
        ],
        painPoints: [
            { id: "1", title: "Unauthorized Access", description: "Risk of physical data breaches in distributed locations." },
            { id: "2", title: "Overheating", description: "Equipment failure due to poor airflow management." },
            { id: "3", title: "Power Inefficiency", description: "Lack of visibility into power consumption at the rack level." },
            { id: "4", title: "Space Constraints", description: "Difficulty expanding IT footprint in limited spaces." }
        ],
        outcomes: [
            { id: "1", value: "100%", label: "Physical Security", description: "secured access with audit trails" },
            { id: "2", value: "30%", label: "Cooling Efficiency", description: "reduction in cooling energy costs" },
            { id: "3", value: "24/7", label: "Monitoring", description: "continuous remote visibility" },
            { id: "4", value: "50%", label: "Space Saving", description: "optimized vertical density for equipment" }
        ],
        coreFeatures: [
            { id: "1", title: "Smart Locking", description: "Remote unlock and biometric authentication." },
            { id: "2", title: "Active Cooling", description: "Self-contained cooling units for high-density loads." },
            { id: "3", title: "Asset Management", description: "RFID tracking of installed equipment." },
            { id: "4", title: "Energy Metering", description: "Per-outlet power metering for precise billing." }
        ],
        howItWorks: {
            title: "Rack Intelligence",
            steps: [
                { step: 1, title: "Install", description: "Deploy smart rack in edge location." },
                { step: 2, title: "Connect", description: "Link to central management network." },
                { step: 3, title: "Secure", description: "Enroll authorized personnel for access." },
                { step: 4, title: "Monitor", description: "Track health and security centrally." }
            ]
        },
        integrations: [
            { category: "DCIM", items: ["Schneider EcoStruxure", "Nlyte"] },
            { category: "Security", items: ["Active Directory", "LDAP"] }
        ],
        capabilities: [
            { title: "Self-Contained", description: "No raised floor or room cooling required." },
            { title: "Modular", description: "Scales from one rack to rows." }
        ],
        pricing: [
            { model: "Per Unit", description: "Hardware purchase + software subscription.", features: ["Remote Management"] },
            { model: "Lease", description: "Monthly opex model.", features: ["Hardware refresh included"] }
        ],
        deployment: {
            options: ["Edge", "Data Center"],
            details: "Ideal for server rooms, branch offices, and edge deployments."
        }
    },
    {
        slug: "bms",
        title: "BMS",
        description: "Building Management System",
        longDescription: "Our Building Management System (BMS) centralizes control of your facility's infrastructure. Monitor and manage HVAC, lighting, elevators, and energy systems from a single interface to ensure occupant comfort and operational efficiency.",
        icon: Building2,
        features: [
            "HVAC control and scheduling",
            "Smart lighting management",
            "Energy consumption tracking",
            "Indoor air quality monitoring",
            "Occupancy based controls",
            "Predictive building maintenance"
        ],
        painPoints: [
            { id: "1", title: "Wasted Energy", description: "Lights and AC running in empty rooms." },
            { id: "2", title: "Comfort Complaints", description: "Inconsistent temperatures leading to occupant dissatisfaction." },
            { id: "3", title: "Siloed Systems", description: "Unable to correlate HVAC performance with energy bills." },
            { id: "4", title: "Regulatory Fines", description: "Penalties for not meeting ESG or carbon emission targets." }
        ],
        outcomes: [
            { id: "1", value: "25%", label: "Energy Savings", description: "through smart scheduling and sensors" },
            { id: "2", value: "40%", label: "Maintenance Efficiency", description: "proactive alerts prevents failures" },
            { id: "3", value: "AAA", label: "Comfort Rating", description: "consistent environment for occupants" },
            { id: "4", value: "15%", label: "Carbon Footprint", description: "reduction in CO2 emissions facility-wide" }
        ],
        coreFeatures: [
            { id: "1", title: "Digital Twin", description: "3D model of building operations." },
            { id: "2", title: "Automated Rules", description: "Logic-based controls (e.g., if fire alarm, stop HVAC)." },
            { id: "3", title: "Energy Dashboard", description: "Real-time view of consumption vs targets." },
            { id: "4", title: "Mobile Control", description: "Adjust setpoints and schedules from your smartphone." }
        ],
        howItWorks: {
            title: "Centralized Control",
            steps: [
                { step: 1, title: "Integrate", description: "Connect to field controllers (BACnet/Modbus)." },
                { step: 2, title: "Aggregate", description: "Pull data into central server." },
                { step: 3, title: "Analyze", description: "Optimize setpoints based on external factors." },
                { step: 4, title: "Control", description: "Send commands back to equipment." }
            ]
        },
        integrations: [
            { category: "Protocols", items: ["BACnet", "Modbus", "LonWorks"] },
            { category: "IoT", items: ["LoRaWAN sensors", "Zigbee"] }
        ],
        capabilities: [
            { title: "Web Interface", description: "Access from any browser or mobile device." },
            { title: "Historical Data", description: "Years of trend logs for analysis." }
        ],
        pricing: [
            { model: "Square Footage", description: "Pricing based on managed floor area.", features: ["Unlimited Points"] },
            { model: "Site License", description: "Flat fee for campus deployments.", features: ["Enterprise Reporting"] }
        ],
        deployment: {
            options: ["On-Premise", "Cloud"],
            details: "Secure server deployment with remote access options."
        }
    },
    {
        slug: "cctv",
        title: "CCTV Surveillance",
        description: "Intelligent Video Security",
        longDescription: "State-of-the-art CCTV surveillance system enhanced with AI analytics. Beyond simple recording, our solution offers facial recognition, intrusion detection, and behavioral analysis to proactively secure your perimeter and assets.",
        icon: Video,
        features: [
            "AI video analytics",
            "Facial recognition",
            "License plate recognition",
            "Perimeter intrusion detection",
            "Cloud storage & backup",
            "Mobile live viewing"
        ],
        painPoints: [
            { id: "1", title: "Security Blindspots", description: "Passive recording doesn't stop crimes in progress." },
            { id: "2", title: "Storage Costs", description: "Storing terabytes of footage that is rarely viewed." },
            { id: "3", title: "False Alarms", description: "Motion sensors triggered by animals or weather." },
            { id: "4", title: "Slow Investigation", description: "Hours spent manually reviewing footage after an incident." }
        ],
        outcomes: [
            { id: "1", value: "95%", label: "Detection Rate", description: "accurate identification of threats" },
            { id: "2", value: "60%", label: "Storage Reduction", description: "smart recording on events only" },
            { id: "3", value: "24/7", label: "Peace of Mind", description: "continuous automated vigilance" },
            { id: "4", value: "Instant", label: "Searchability", description: "find specific events in seconds with AI" }
        ],
        coreFeatures: [
            { id: "1", title: "Edge Analytics", description: "Process video on the camera to reduce bandwidth." },
            { id: "2", title: "Smart Search", description: "Find 'person in red shirt' in seconds." },
            { id: "3", title: "Heatmaps", description: "Visualize foot traffic patterns." },
            { id: "4", title: "Privacy Masking", description: "Automatically blur faces or screens for GDPR compliance." }
        ],
        howItWorks: {
            title: "Smart Surveillance",
            steps: [
                { step: 1, title: "Capture", description: "High-definition cameras record scene." },
                { step: 2, title: "Analyze", description: "AI engine processes frames for objects/threats." },
                { step: 3, title: "Alert", description: "Notify security team of confirmed events." },
                { step: 4, title: "Store", description: "Save evidential footage to secure archive." }
            ]
        },
        integrations: [
            { category: "VMS", items: ["Milestone", "Genetec"] },
            { category: "Access Control", items: ["Lenel", "Honeywell"] }
        ],
        capabilities: [
            { title: "Night Vision", description: "IR and thermal options for total darkness." },
            { title: "PTZ Tracking", description: "Auto-track moving subjects." }
        ],
        pricing: [
            { model: "Per Camera", description: "License fee per video channel.", features: ["Remote Access"] },
            { model: "VSaaS", description: "Video surveillance as a service.", features: ["Cloud Storage Included"] }
        ],
        deployment: {
            options: ["Hybrid Cloud", "NVR/DVR"],
            details: "Local recording with cloud archiving for critical events."
        }
    },
    {
        slug: "fire-alarm",
        title: "Fire Alarm System",
        description: "Advanced Safety & Warning Systems",
        longDescription: "A comprehensive Fire Alarm solution integrating advanced detection technology with rapid response systems. Our addressable fire systems ensure enabling quick localization of hazards and integrated evacuation protocols to maximize safety.",
        icon: Flame,
        features: [
            "Addressable smoke detection",
            "Heat and flame sensors",
            "Voice evacuation systems",
            "Emergency lighting control",
            "Fire suppression triggering",
            "Remote monitoring app"
        ],
        painPoints: [
            { id: "1", title: "Slow Response", description: "Delayed detection allows fires to spread." },
            { id: "2", title: "False Alarms", description: "Disruptions caused by dust or steam." },
            { id: "3", title: "Maintenance Issues", description: "Unknown faulty detectors compromising safety." },
            { id: "4", title: "Integration Gaps", description: "Fire systems not talking to access control for unlocking doors." }
        ],
        outcomes: [
            { id: "1", value: "<10s", label: "Detection Time", description: "rapid identification of smoke/fire" },
            { id: "2", value: "100%", label: "Coverage", description: "comprehensive protection of facility" },
            { id: "3", value: "0", label: "False Alarms", description: "advanced multi-criteria sensors" },
            { id: "4", value: "100%", label: "Integration", description: "seamless automated evacuation triggers" }
        ],
        coreFeatures: [
            { id: "1", title: "Pinpoint Location", description: "Know exactly which detector triggered." },
            { id: "2", title: "Self-Testing", description: "Detectors report their own sensitivity levels." },
            { id: "3", title: "Mass Notification", description: "Broadcast alerts to SMS and PA systems." },
            { id: "4", title: "Drill Management", description: "Schedule and track fire drill performance." }
        ],
        howItWorks: {
            title: "Safety Loop",
            steps: [
                { step: 1, title: "Detect", description: "Sensors identify smoke, heat, or CO." },
                { step: 2, title: "Verify", description: "Panel confirms signal to prevent false alarms." },
                { step: 3, title: "Alert", description: "Sounders and strobes activate." },
                { step: 4, title: "Action", description: "Unlock doors, recall elevators, call fire dept." }
            ]
        },
        integrations: [
            { category: "BMS", items: ["HVAC Shutdown", "Fan Control"] },
            { category: "Access Control", items: ["Door Release"] }
        ],
        capabilities: [
            { title: "Redundancy", description: "Loop wiring ensures operation if wire is cut." },
            { title: "Battery Backup", description: "24-hour standby power." }
        ],
        pricing: [
            { model: "Project", description: "Hardware and installation costs.", features: ["Commissioning"] },
            { model: "AMC", description: "Annual maintenance contract.", features: ["Quarterly Testing"] }
        ],
        deployment: {
            options: ["On-Premise"],
            details: "Standard hardwired installation compatible with building codes."
        }
    },
    {
        slug: "access-control",
        title: "Access Control",
        description: "Secure Entry Management",
        longDescription: "Manage who goes where and when with our enterprise Access Control solution. utilizing smart cards, biometrics, and mobile credentials to secure your physical perimeter and sensitive internal zones while maintaining a seamless flow for authorized personnel.",
        icon: ShieldCheck,
        features: [
            "Biometric reading (finger/face)",
            "Mobile credentials (NFC/BLE)",
            "Visitor management system",
            "Mustering & headcount",
            "Anti-passback enforcement",
            "Lockdown capabilities"
        ],
        painPoints: [
            { id: "1", title: "Lost Keys", description: "Security risks from lost physical keys." },
            { id: "2", title: "Unauthorized Entry", description: "Tailgating and piggybacking risks." },
            { id: "3", title: "Audit Gaps", description: "No record of who entered sensitive rooms." },
            { id: "4", title: "Slow Onboarding", description: "Manual provisioning of badges for new hires takes too long." }
        ],
        outcomes: [
            { id: "1", value: "100%", label: "Traceability", description: "digital log of every entry/exit" },
            { id: "2", value: "0", label: "Lost Keys", description: "move to digital credentials" },
            { id: "3", value: "Sec", label: "Instant Revoke", description: "remove access rights immediately" },
            { id: "4", value: "Zero", label: "Wait Time", description: "instant mobile credential issuance" }
        ],
        coreFeatures: [
            { id: "1", title: "Role Based Access", description: "Assign rights based on employee job function." },
            { id: "2", title: "Time Schedules", description: "Restrict access to working hours only." },
            { id: "3", title: "Remote Unlocking", description: "Grant entry from the reception desk." },
            { id: "4", title: "Visitor Kiosk", description: "Self-service check-in for guests with QR code issuing." }
        ],
        howItWorks: {
            title: "Secured Flow",
            steps: [
                { step: 1, title: "authenticate", description: "User presents card, phone, or face." },
                { step: 2, title: "Authorize", description: "Controller checks permissions." },
                { step: 3, title: "Actuate", description: "Electric strike unlocks the door." },
                { step: 4, title: "Log", description: "Event saved to history database." }
            ]
        },
        integrations: [
            { category: "HR Database", items: ["Workday", "SAP HR"] },
            { category: "CCTV", items: ["Video verification of events"] }
        ],
        capabilities: [
            { title: "Touchless", description: "Hygienic wave-to-unlock options." },
            { title: "Scalability", description: "Unlimited doors and credentials." }
        ],
        pricing: [
            { model: "Per Door", description: "License per controlled portal.", features: ["Software Updates"] },
            { model: "Biometrics", description: "Add-on for biometric readers.", features: ["Liveness Detection"] }
        ],
        deployment: {
            options: ["Cloud Managed", "On-Premise"],
            details: "Controllers at the door communicating with central server."
        }
    },
    {
        slug: "gss",
        title: "GSS",
        description: "General Security Services",
        longDescription: "Our GSS (General Security Services) offering combines manned guarding with technology. We provide trained security personnel equipped with the latest monitoring tools to ensure vital asset protection, patrol management, and emergency response.",
        icon: Shield,
        features: [
            "Manned guarding coordination",
            "Digital patrol logging",
            "Incident reporting app",
            "Visitor screening",
            "Emergency response teams",
            "Keyholding services"
        ],
        painPoints: [
            { id: "1", title: "Unreliable Guards", description: "Sleeping on duty or missed patrols." },
            { id: "2", title: "Poor Reporting", description: "Paper logs that are illegible or lost." },
            { id: "3", title: "Slow Response", description: "Communication gaps during emergencies." },
            { id: "4", title: "High Turnover", description: "Constant churn of guard staff leading to training gaps." }
        ],
        outcomes: [
            { id: "1", value: "100%", label: "Patrol Verified", description: "GPS tracked guard tours" },
            { id: "2", value: "Instant", label: "Incident Data", description: "real-time digital reports" },
            { id: "3", value: "24/7", label: "Coverage", description: "holistic physical security" },
            { id: "4", value: "Top Rated", label: "Staff Retention", description: "better tools improve job satisfaction" }
        ],
        coreFeatures: [
            { id: "1", title: "Guard Tour System", description: "NFC checkpoints to verify patrols." },
            { id: "2", title: "Lone Worker", description: "Panic buttons and tilt sensors for guard safety." },
            { id: "3", title: "Dispatch", description: "Control room software to direct units." },
            { id: "4", title: "Vehicle Patrols", description: "Track patrol vehicles with dashcam integration." }
        ],
        howItWorks: {
            title: "Tech-Enabled Guarding",
            steps: [
                { step: 1, title: "Deploy", description: "Guards stationed at strategic posts." },
                { step: 2, title: "Patrol", description: "Scan checkpoints using mobile app." },
                { step: 3, title: "Report", description: "Log incidents with photos and voice notes." },
                { step: 4, title: "Review", description: "Management analyzes performance data." }
            ]
        },
        integrations: [
            { category: "CCTV", items: ["Video walls for guards"] },
            { category: "Access Control", items: ["Manage badges"] }
        ],
        capabilities: [
            { title: "Vetted Staff", description: "Background checked and trained personnel." },
            { title: "Mobile App", description: "All-in-one tool for the officer on duty." }
        ],
        pricing: [
            { model: "Hourly", description: "Per guard hour charges.", features: ["Includes equipment"] },
            { model: "Contract", description: "Monthly fixed fee for defined scope.", features: ["SLA Guarantees"] }
        ],
        deployment: {
            options: ["On-Site"],
            details: "Personnel deployed directly to client facilities."
        }
    },
    {
        slug: "energy-management",
        title: "Energy Management System",
        description: "Optimize Energy Consumption",
        longDescription: "Our Energy Management System (EMS) helps industrial facilities monitor, analyze, and optimize energy usage in real-time. Compliant with ISO 50001, it provides granular visibility into consumption patterns to identify waste and reduce carbon footprint.",
        icon: Zap,
        features: [
            "Real-time energy monitoring",
            "Peak load shedding",
            "Carbon footprint tracking",
            "Bill auditing and verification",
            "ISO 50001 compliance reporting",
            "Equipment efficiency analysis"
        ],
        painPoints: [
            { id: "1", title: "Rising Costs", description: "Unpredictable energy bills eating into margins." },
            { id: "2", title: "Invisible Waste", description: "No way to know which machine is wasting power." },
            { id: "3", title: "Compliance Pressure", description: "Difficulty meeting sustainability reporting standards." },
            { id: "4", title: "Peak Penalties", description: "High demand charges due to unmanaged startup loads." }
        ],
        outcomes: [
            { id: "1", value: "15%", label: "Bill Reduction", description: "average saving on annual energy costs" },
            { id: "2", value: "100%", label: "Transparency", description: "granular data down to machine level" },
            { id: "3", value: "CO2", label: "Reporting", description: "automated sustainability compliance" },
            { id: "4", value: "ROI", label: "< 12 Months", description: "rapid payback through identified savings" }
        ],
        coreFeatures: [
            { id: "1", title: "Smart Metering", description: "Integration with IoT power meters." },
            { id: "2", title: "Tariff Analysis", description: "Optimize usage based on time-of-use pricing." },
            { id: "3", title: "Alerts", description: "Notify when specific equipment exceeds baseline." },
            { id: "4", title: "Baseload Tracking", description: "Identify energy use during non-production hours." }
        ],
        howItWorks: {
            title: "Energy Intelligence",
            steps: [
                { step: 1, title: "Connect", description: "Install networked meters on key DBs." },
                { step: 2, title: "Monitor", description: "Collect voltage, current, and PF data." },
                { step: 3, title: "Analyze", description: "Identify anomalies and waste patterns." },
                { step: 4, title: "Optimize", description: "Adjust schedules and fix inefficient equipment." }
            ]
        },
        integrations: [
            { category: "Hardware", items: ["Schneider", "Siemens", "Socomec"] },
            { category: "SCADA", items: ["Ignition", "Wonderware"] }
        ],
        capabilities: [
            { title: "Forecasting", description: "Predict next month's bill." },
            { title: "Power Quality", description: "Harmonic analysis and alerts." }
        ],
        pricing: [
            { model: "SaaS", description: "Subscription per meter point.", features: ["Cloud Reports"] },
            { model: "Turnkey", description: "Hardware + Software package.", features: ["Installation Included"] }
        ],
        deployment: {
            options: ["Cloud", "On-Premise"],
            details: "Secure edge gateway for local buffering."
        }
    },
    {
        slug: "water-management",
        title: "Water Management System",
        description: "Smart Water Usage Monitoring",
        longDescription: "Ensure sustainable water usage with our smart Water Management System. Detect leaks, monitor flow rates in real-time, and manage water treatment processes efficiently to reduce waste and ensure compliance with environmental regulations.",
        icon: Droplets,
        features: [
            "Leak detection algorithms",
            "Real-time flow monitoring",
            "Quality parameter tracking (pH, TDS)",
            "Pump station optimization",
            "Effluent treatment monitoring",
            "Water balance reporting"
        ],
        painPoints: [
            { id: "1", title: "Hidden Leaks", description: "Underground leaks going undetected for months." },
            { id: "2", title: "Quality Variances", description: "Inconsistent process water affecting product quality." },
            { id: "3", title: "Regulatory Fines", description: "Exceeding discharge limits." },
            { id: "4", title: "Pump Failures", description: "Cavitation and dry run damaging pumps." }
        ],
        outcomes: [
            { id: "1", value: "20%", label: "Water Saving", description: "reduction in total plant consumption" },
            { id: "2", value: "Instant", label: "Leak Alerts", description: "prevent massive water loss events" },
            { id: "3", value: "100%", label: "Compliance", description: "automated EPA/local board reporting" },
            { id: "4", value: "30%", label: "Energy Cut", description: "optimized pumping efficiency" }
        ],
        coreFeatures: [
            { id: "1", title: "Smart Flowmeters", description: "Ultrasonic and electromagnetic sensor data." },
            { id: "2", title: "Quality Watch", description: "Real-time pH, DO, and turbidity logging." },
            { id: "3", title: "Digital Twin", description: "Hydraulic modeling of the pipe network." },
            { id: "4", title: "Predictive Maint", description: "Monitor pump vibration and amps." }
        ],
        howItWorks: {
            title: "Smart Water Cycle",
            steps: [
                { step: 1, title: "Measure", description: "Flow and level sensors collect data." },
                { step: 2, title: "Transmit", description: "LoRaWAN/NB-IoT sends data to cloud." },
                { step: 3, title: "Analyze", description: "AI checks for balance and anomalies." },
                { step: 4, title: "Control", description: "Automated valve actuation to stop flows." }
            ]
        },
        integrations: [
            { category: "Sensors", items: ["Endress+Hauser", "Krohne", "SICK"] },
            { category: "PLC", items: ["Allen-Bradley", "Siemens"] }
        ],
        capabilities: [
            { title: "Wireless", description: "Battery powered sensors for remote pipes." },
            { title: "Rainwater", description: "Harvesting system integration." }
        ],
        pricing: [
            { model: "Flow Point", description: "Per monitored flow meter.", features: ["Mobile App"] },
            { model: "Enterprise", description: "Unlimited points.", features: ["Custom Dashboards"] }
        ],
        deployment: {
            options: ["Cloud"],
            details: "IoT-first architecture."
        }
    },
    {
        slug: "vision-ai",
        title: "Vision AI",
        description: "Computer Vision for Quality Control",
        longDescription: "Automate quality inspection and safety monitoring with Vision AI. Using advanced deep learning models, our cameras detect defects, verify assembly, and monitor PPE compliance in real-time, surpassing human accuracy and speed.",
        icon: Eye,
        features: [
            "Defect detection",
            "Assembly verification",
            "PPE compliance monitoring",
            "Barcode and OCR reading",
            "Dimensional measurement",
            "Hazard zone monitoring"
        ],
        painPoints: [
            { id: "1", title: "Manual Errors", description: "Fatigue leads to missed defects by human inspectors." },
            { id: "2", title: "Speed Bottlenecks", description: "Inspection cannot keep up with production line speed." },
            { id: "3", title: "Safety Incidents", description: "Workers entering hazardous zones unnoticed." },
            { id: "4", title: "Traceability", description: "No visual record of shipped product condition." }
        ],
        outcomes: [
            { id: "1", value: "99.9%", label: "Accuracy", description: "defect detection rate" },
            { id: "2", value: "10x", label: "Speed", description: "faster than manual inspection" },
            { id: "3", value: "0", label: "Safety Breaches", description: "immediate shutdown on hazard entry" },
            { id: "4", value: "100%", label: "Record", description: "image stored for every item produced" }
        ],
        coreFeatures: [
            { id: "1", title: "Deep Learning", description: "Custom trained models for specific defects." },
            { id: "2", title: "Edge Inference", description: "Processing on-device for millisecond latency." },
            { id: "3", title: "No-Code Trainer", description: "Teach the AI new defects with simple UI." },
            { id: "4", title: "Integration", description: "Ejector signal to PLC for bad parts." }
        ],
        howItWorks: {
            title: "Visual Intelligence",
            steps: [
                { step: 1, title: "Image", description: "Industrial camera captures product." },
                { step: 2, title: "Process", description: "Edge GPU runs neural network." },
                { step: 3, title: "Decide", description: "Pass/Fail verdict generated." },
                { step: 4, title: "Act", description: "Robot arm or divertor sorts the item." }
            ]
        },
        integrations: [
            { category: "Cameras", items: ["Basler", "Cognex", "Hikvision"] },
            { category: "Robots", items: ["UR", "Fanuc", "Kuka"] }
        ],
        capabilities: [
            { title: "High Speed", description: "Up to 100 parts per second." },
            { title: "Microscopic", description: "Detect sub-millimeter defects." }
        ],
        pricing: [
            { model: "Per Line", description: "License per inspection station.", features: ["Hardware Included"] },
            { model: "Model training", description: "Fee for custom defect datasets.", features: ["Accuracy Guarantee"] }
        ],
        deployment: {
            options: ["Edge"],
            details: "NVIDIA Jetson or IPC based."
        }
    },
    {
        slug: "golden-batch",
        title: "Golden Batch AI",
        description: "Replicate Perfect Production Runs",
        longDescription: "Achieve consistent peak performance by replicating your 'Golden Batch' every time. Our AI analyzes historical best runs to determine the optimal set of process parameters (temperatures, pressures, speeds) and dynamically guides operators to maintain those conditions.",
        icon: Sparkles,
        features: [
            "Ideal profile modeling",
            "Real-time deviation alerts",
            "Dynamic setpoint recommendation",
            "Batch-to-batch consistency analysis",
            "Yield optimization",
            "Cycle time reduction"
        ],
        painPoints: [
            { id: "1", title: "Variability", description: "Product quality changes with shift operators." },
            { id: "2", title: "Yield Loss", description: "Sub-optimal settings waste raw materials." },
            { id: "3", title: "Knowledge Gap", description: "New operators don't know the 'art' of the machine." },
            { id: "4", title: "Slow Changeover", description: "Time lost dialing in settings for new products." }
        ],
        outcomes: [
            { id: "1", value: "20%", label: "Throughput", description: "increase in production rate" },
            { id: "2", value: "50%", label: "Scrap Reduction", description: "less off-spec product" },
            { id: "3", value: "Standardized", label: "Operations", description: "shift-independent quality" },
            { id: "4", value: "Real-time", label: "Guidance", description: "turn-by-turn navigation for operators" }
        ],
        coreFeatures: [
            { id: "1", title: "Profile Learning", description: "ML identifies what made the best batch 'best'." },
            { id: "2", title: "Live Overlay", description: "Show current vs golden trace on HMI." },
            { id: "3", title: "Root Cause", description: "Explain why deviation is occurring." },
            { id: "4", title: "Context", description: "Adjusts for ambient temp and raw material changes." }
        ],
        howItWorks: {
            title: "Perfect Execution",
            steps: [
                { step: 1, title: "Mine", description: "Analyze history to find Golden Batches." },
                { step: 2, title: "Model", description: "Create reference trajectory profiles." },
                { step: 3, title: "Monitor", description: "Technician sees live comparison." },
                { step: 4, title: "Control", description: "AI suggests adjustments to stay on track." }
            ]
        },
        integrations: [
            { category: "Historians", items: ["OSIsoft PI", "AspenTech"] },
            { category: "Batch Systems", items: ["Rockwell FactoryTalk Batch"] }
        ],
        capabilities: [
            { title: "Multi-Product", description: "Unique golden profiles for every SKU." },
            { title: "Self-Learning", description: "Updates golden profile as new records are set." }
        ],
        pricing: [
            { model: "Subscription", description: "Annual license per line.", features: ["Monthly Reports"] },
            { model: "Pilot", description: "3-month trial on one unit.", features: ["Data Analysis"] }
        ],
        deployment: {
            options: ["On-Premise", "Cloud"],
            details: "Flexible deployment to match historian location."
        }
    },
    {
        slug: "gearbox-monitoring",
        title: "Gearbox Monitoring",
        description: "Vibration Analysis & Health",
        longDescription: "Prevent catastrophic gearbox failures with our dedicated Gearbox Monitoring solution. Combining high-frequency vibration analysis with oil quality sensors, we provide early warning of bearing wear, gear tooth damage, and misalignment.",
        icon: Wrench,
        features: [
            "Spectrum analysis (FFT)",
            "Bearing envelope analysis",
            "Oil particle counting integration",
            "Misalignment detection",
            "Temperature trending",
            "Automated ISO reports"
        ],
        painPoints: [
            { id: "1", title: "Catastrophic Failure", description: "Gearbox seizing stops the entire line." },
            { id: "2", title: "Long Lead Times", description: "Replacement gearboxes take months to arrive." },
            { id: "3", title: "Unnecessary Changes", description: "Changing oil or bearings too early based on schedule." },
            { id: "4", title: "Remote Assets", description: "Hard to inspect gearboxes in cranes or wind turbines." }
        ],
        outcomes: [
            { id: "1", value: "6 Months", label: "Warning", description: "early detection of developing faults" },
            { id: "2", value: "30%", label: "Life Extension", description: "address minor issues before they escalate" },
            { id: "3", value: "100%", label: "Remote View", description: "monitor from control room" },
            { id: "4", value: "ISO", label: "Compliance", description: "vibration within ISO 10816 limits" }
        ],
        coreFeatures: [
            { id: "1", title: "Envelope Analysis", description: "Isolate bearing fault frequencies." },
            { id: "2", title: "Order Tracking", description: "Analyze variable speed drives correctly." },
            { id: "3", title: "Oil Health", description: "Correlate vibration with oil quality." },
            { id: "4", title: "Expert System", description: "Auto-diagnosis: 'Outer Race Defect detected'." }
        ],
        howItWorks: {
            title: "Drive Train Health",
            steps: [
                { step: 1, title: "Sense", description: "High-freq accelerometers on housing." },
                { step: 2, title: "Sample", description: "20kHz sampling rate captures transients." },
                { step: 3, title: "Process", description: "FFT extracts frequency signatures." },
                { step: 4, title: "Diagnose", description: "Match peaks to gear mesh frequencies." }
            ]
        },
        integrations: [
            { category: "Sensors", items: ["IFM", "PCB Piezotronics"] },
            { category: "Control", items: ["Safety shutdown integration"] }
        ],
        capabilities: [
            { title: "Wireless", description: "Easy retrofit with battery sensors." },
            { title: "High Temp", description: "Sensors rated for harsh environments." }
        ],
        pricing: [
            { model: "Per Gearbox", description: "Monitoring fee per asset.", features: ["Expert Review"] },
            { model: "Hardware", description: "Sensor kit purchase.", features: ["Lifetime Warranty"] }
        ],
        deployment: {
            options: ["Edge"],
            details: "Local processing essential for high-frequency data."
        }
    },
    // ========== ENTERPRISE AI SOLUTIONS ==========
    {
        slug: "inventory-management",
        title: "Inventory Management Agent",
        description: "AI-Driven Stock Optimization",
        longDescription: "Our Inventory Management Agent utilizes advanced machine learning to predict stock levels, optimize reorder points, and reduce carrying costs. It integrates seamlessly with your ERP to ensure you never run out of critical items while minimizing waste.",
        icon: ShoppingCart,
        features: [
            "Real-time stock tracking",
            "Predictive reordering",
            "Dead stock analysis",
            "Multi-location synchronization",
            "Automated purchase orders",
            "Shelf-life monitoring"
        ],
        painPoints: [
            { id: "1", title: "Stockouts", description: "Lost sales due to missing inventory." },
            { id: "2", title: "Overstock", description: "Capital tied up in excess goods." },
            { id: "3", title: "Shrinkage", description: "Unaccounted inventory loss." },
            { id: "4", title: "Manual Counts", description: "Time-consuming and error-prone stocktakes." }
        ],
        outcomes: [
            { id: "1", value: "30%", label: "Reduction", description: "in inventory carrying costs" },
            { id: "2", value: "99%", label: "Accuracy", description: "in stock level tracking" },
            { id: "3", value: "Auto", label: "Ordering", description: "automated PO generation" },
            { id: "4", value: "Zero", label: "Stockouts", description: "for critical items" }
        ],
        coreFeatures: [
            { id: "1", title: "AI Forecasting", description: "Predict demand spikes." },
            { id: "2", title: "Barcode/RFID", description: "Seamless scanner integration." },
            { id: "3", title: "Supplier Portal", description: "Direct collaboration with vendors." },
            { id: "4", title: "Mobile App", description: "Manage stock from the floor." }
        ],
        howItWorks: {
            title: "Smart Inventory",
            steps: [
                { step: 1, title: "Connect", description: "Sync with ERP and WMS." },
                { step: 2, title: "Analyze", description: "AI reviews usage patterns." },
                { step: 3, title: "Optimize", description: "Suggest optimal stock levels." },
                { step: 4, title: "Automate", description: "Trigger reorders automatically." }
            ]
        },
        integrations: [
            { category: "ERP", items: ["SAP", "Oracle", "Microsoft Dynamics"] },
            { category: "WMS", items: ["Manhattan", "Blue Yonder"] }
        ],
        capabilities: [
            { title: "Scalable", description: "Handles millions of SKUs." },
            { title: "Cloud Native", description: "Accessible from anywhere." }
        ],
        pricing: [
            { model: "SaaS", description: "Monthly subscription per user.", features: ["Unlimited SKUs"] },
            { model: "Enterprise", description: "Custom deployment.", features: ["Dedicated Support"] }
        ],
        deployment: {
            options: ["Cloud", "On-Premise"],
            details: "Fast implementation."
        }
    },
    {
        slug: "demand-forecasting",
        title: "Demand Forecasting",
        description: "Predictive Market Insights",
        longDescription: "Stay ahead of the market with our AI-powered Demand Forecasting tool. By analyzing historical data, market trends, and external factors, we provide highly accurate predictions to guide your production and procurement strategies.",
        icon: TrendingUp,
        features: [
            "Machine learning models",
            "Seasonality detection",
            "Promotion impact analysis",
            "New product forecasting",
            "Scenario planning",
            "Trend visualization"
        ],
        painPoints: [
            { id: "1", title: "Uncertainty", description: "Guesswork leading to poor planning." },
            { id: "2", title: "Waste", description: "Overproduction due to optimistic forecasts." },
            { id: "3", title: "Lost Revenue", description: "Underestimating demand for hot products." },
            { id: "4", title: "Spreadsheets", description: "Manual, fragile forecasting processes." }
        ],
        outcomes: [
            { id: "1", value: "85%", label: "Accuracy", description: "forecast precision" },
            { id: "2", value: "20%", label: "Revenue", description: "uplift from better availability" },
            { id: "3", value: "Less", label: "Waste", description: "reduced obsolescence" },
            { id: "4", value: "Fast", label: "Planning", description: "minutes instead of weeks" }
        ],
        coreFeatures: [
            { id: "1", title: "Auto-ML", description: "Selects best model for each SKU." },
            { id: "2", title: "External Data", description: "Incorporates weather, holidays, etc." },
            { id: "3", title: "Collaboration", description: "Sales and ops planning tools." },
            { id: "4", title: "Alerts", description: "Notify on significant deviations." }
        ],
        howItWorks: {
            title: "Future Ready",
            steps: [
                { step: 1, title: "Ingest", description: "Load historical sales data." },
                { step: 2, title: "Train", description: "Models learn patterns and trends." },
                { step: 3, title: "Predict", description: "Generate future demand curves." },
                { step: 4, title: "Act", description: "Adjust production plans." }
            ]
        },
        integrations: [
            { category: "Sales", items: ["Salesforce", "HubSpot"] },
            { category: "Data", items: ["Snowflake", "Databricks"] }
        ],
        capabilities: [
            { title: "Granular", description: "Forecast by SKU, store, or region." },
            { title: "Real-time", description: "Updates as new data arrives." }
        ],
        pricing: [
            { model: "Standard", description: "Core forecasting features.", features: ["Weekly Updates"] },
            { model: "Advanced", description: "Real-time AI models.", features: ["Hourly Updates"] }
        ],
        deployment: {
            options: ["Cloud Only"],
            details: "Leverages scalable compute."
        }
    },
    {
        slug: "pricing-agent",
        title: "Pricing Agent",
        description: "Dynamic Price Optimization",
        longDescription: "Maximize your margins with our autonomous Pricing Agent. It continuously analyzes competitor pricing, demand elasticity, and inventory levels to recommend the optimal price for every product in real-time.",
        icon: DollarSign,
        features: [
            "Competitor monitoring",
            "Elasticity modeling",
            "Rule-based guardrails",
            "Flash sale management",
            "Markdown optimization",
            "A/B price testing"
        ],
        painPoints: [
            { id: "1", title: "Margin Erosion", description: "Pricing too low unnecessarily." },
            { id: "2", title: "Lost Sales", description: "Pricing too high for the market." },
            { id: "3", title: "Slow Reaction", description: "Lagging behind competitor moves." },
            { id: "4", title: "Complexity", description: "Managing thousands of price points." }
        ],
        outcomes: [
            { id: "1", value: "5%", label: "Margin", description: "improvement on average" },
            { id: "2", value: "Real", label: "Time", description: "instant price updates" },
            { id: "3", value: "Auto", label: "Pilot", description: "fully autonomous operation" },
            { id: "4", value: "Smart", label: "Discounts", description: "optimized clearance" }
        ],
        coreFeatures: [
            { id: "1", title: "Scraper", description: "Monitor thousands of competitor sites." },
            { id: "2", title: "Strategy", description: "Define goals (max profit vs volume)." },
            { id: "3", title: "Approval", description: "Workflow for major price changes." },
            { id: "4", title: "Analytics", description: "Measure impact of price moves." }
        ],
        howItWorks: {
            title: "Dynamic Pricing",
            steps: [
                { step: 1, title: "Monitor", description: "Track market conditions." },
                { step: 2, title: "Analyze", description: "Calculate optimal price point." },
                { step: 3, title: "Recommend", description: "Suggest new price." },
                { step: 4, title: "Update", description: "Push to e-commerce/ERP." }
            ]
        },
        integrations: [
            { category: "Commerce", items: ["Shopify", "Magento", "WooCommerce"] },
            { category: "ERP", items: ["SAP", "Oracle"] }
        ],
        capabilities: [
            { title: "High Volume", description: "Millions of price updates per day." },
            { title: "Global", description: "Multi-currency support." }
        ],
        pricing: [
            { model: "Tiered", description: "Based on SKU count.", features: ["Daily Scrapes"] },
            { model: "Performance", description: "% of margin uplift.", features: ["Risk Free"] }
        ],
        deployment: {
            options: ["SaaS"],
            details: "API-first integration."
        }
    },
    {
        slug: "sales-analysis",
        title: "Sales Analysis Agent",
        description: "Deep Sales Intelligence",
        longDescription: "Uncover hidden revenue opportunities with our Sales Analysis Agent. It digests vast amounts of sales data to identify trends, high-performing segments, and churn risks, providing actionable insights to your sales team.",
        icon: BarChart3,
        features: [
            "Revenue attribution",
            "Customer segmentation",
            "Churn prediction",
            "Pipeline velocity tracking",
            "Rep performance scorecard",
            "Cross-sell recommendations"
        ],
        painPoints: [
            { id: "1", title: "Blind Spots", description: "Not knowing why deals are lost." },
            { id: "2", title: "Inefficiency", description: "Sales reps chasing bad leads." },
            { id: "3", title: "Churn", description: "Losing customers unexpectedly." },
            { id: "4", title: "Reporting", description: "Hours spent building manual reports." }
        ],
        outcomes: [
            { id: "1", value: "2x", label: "Visibility", description: "into pipeline health" },
            { id: "2", value: "15%", label: "Win Rate", description: "improvement via insights" },
            { id: "3", value: "User", label: "Friendly", description: "natural language queries" },
            { id: "4", value: "Auto", label: "Nudge", description: "reminders for follow-ups" }
        ],
        coreFeatures: [
            { id: "1", title: "NLP", description: "Ask questions like 'Show Q3 trends'." },
            { id: "2", title: "Visuals", description: "Interactive dashboards." },
            { id: "3", title: "Mobile", description: "Access insights on the go." },
            { id: "4", title: "Forecast", description: "AI-driven revenue projection." }
        ],
        howItWorks: {
            title: "Data to Deal",
            steps: [
                { step: 1, title: "Connect", description: "Link CRM and financial data." },
                { step: 2, title: "Crunch", description: "AI processes millions of rows." },
                { step: 3, title: "Insight", description: "Highlight risks and opportunities." },
                { step: 4, title: "Guide", description: "Suggest next best actions." }
            ]
        },
        integrations: [
            { category: "CRM", items: ["Salesforce", "Dynamics 365", "Pipedrive"] },
            { category: "BI", items: ["PowerBI", "Tableau"] }
        ],
        capabilities: [
            { title: "Customizable", description: "Build your own metrics." },
            { title: "Secure", description: "Role-based access control." }
        ],
        pricing: [
            { model: "Seat", description: "Per sales rep.", features: ["Personal Dashboard"] },
            { model: "Manager", description: "Team view.", features: ["Coaching Tools"] }
        ],
        deployment: {
            options: ["Cloud"],
            details: "SOC2 Compliant."
        }
    },
    {
        slug: "supply-chain-optimization",
        title: "Supply Chain Optimization AI",
        description: "End-to-End Logistics AI",
        longDescription: "Optimize your entire value chain from raw materials to last-mile delivery. Our AI simulates scenarios, optimizes routes, and balances inventory across the network to ensure efficiency and resilience.",
        icon: Truck,
        features: [
            "Network design optimization",
            "Transportation management",
            "Supplier risk assessment",
            "Carbon footprint tracking",
            "Route optimization",
            "Container loading plans"
        ],
        painPoints: [
            { id: "1", title: "Disruptions", description: "Vulnerability to global events." },
            { id: "2", title: "Cost", description: "Rising freight and logistics expenses." },
            { id: "3", title: "Visibility", description: "Black holes in shipment tracking." },
            { id: "4", title: "Sustainability", description: "Pressure to reduce emissions." }
        ],
        outcomes: [
            { id: "1", value: "15%", label: "Cost", description: "reduction in logistics spend" },
            { id: "2", value: "30%", label: "Faster", description: "delivery to customers" },
            { id: "3", value: "Green", label: "Chain", description: "lower carbon emissions" },
            { id: "4", value: "Resilient", label: "Ops", description: "backup plans ready" }
        ],
        coreFeatures: [
            { id: "1", title: "Digital Twin", description: "Simulate supply chain scenarios." },
            { id: "2", title: "Control Tower", description: "Real-time visibility hub." },
            { id: "3", title: "AI Routing", description: "Dynamic route planning." },
            { id: "4", title: "Risk Map", description: "Monitor global geopolitical risks." }
        ],
        howItWorks: {
            title: "Flow Masters",
            steps: [
                { step: 1, title: "Map", description: "Digitize your supply network." },
                { step: 2, title: "Monitor", description: "Track shipments in real-time." },
                { step: 3, title: "Optimize", description: "AI suggests efficient paths." },
                { step: 4, title: "Resolve", description: "Auto-correct for delays." }
            ]
        },
        integrations: [
            { category: "Carriers", items: ["FedEx", "DHL", "Maersk"] },
            { category: "ERP", items: ["SAP", "Oracle"] }
        ],
        capabilities: [
            { title: "Global", description: "Supports complex international trade." },
            { title: "Real-time", description: "Live satellite tracking." }
        ],
        pricing: [
            { model: "Volume", description: "Based on shipment volume.", features: ["Optimization Engine"] },
            { model: "Enterprise", description: "Unlimited usage.", features: ["Custom Modeling"] }
        ],
        deployment: {
            options: ["Cloud", "Hybrid"],
            details: "High availability."
        }
    },
    {
        slug: "visualization-reporting",
        title: "Visualization and Reporting Agent",
        description: "Automated Insights Generation",
        longDescription: "Turn raw data into compelling stories automatically. Our agent connects to your data sources and generates meaningful visualizations, slide decks, and PDF reports, saving your team hours of manual work.",
        icon: PieChart,
        features: [
            "Automated chart generation",
            "Natural language narration",
            "Interactive dashboards",
            "Scheduled email reports",
            "Data storytelling",
            "Export to PPT/PDF"
        ],
        painPoints: [
            { id: "1", title: "Time Consuming", description: "Hours wasted formatting slides." },
            { id: "2", title: "Static Data", description: "Reports outdated by the time they are read." },
            { id: "3", title: "Complexity", description: "Hard to decipher complex spreadsheets." },
            { id: "4", title: "Inconsistency", description: "Different teams reporting different numbers." }
        ],
        outcomes: [
            { id: "1", value: "90%", label: "Faster", description: "report generation time" },
            { id: "2", value: "Clear", label: "Insights", description: "easy to understand visuals" },
            { id: "3", value: "Live", label: "Data", description: "always up-to-date" },
            { id: "4", value: "Self", label: "Service", description: "anyone can build reports" }
        ],
        coreFeatures: [
            { id: "1", title: "Generative AI", description: "Text-to-chart interface." },
            { id: "2", title: "Templates", description: "Industry standard best practices." },
            { id: "3", title: "Drill Down", description: "Click into charts for details." },
            { id: "4", title: "Alerts", description: "Notify when KPIs miss targets." }
        ],
        howItWorks: {
            title: "See Clearly",
            steps: [
                { step: 1, title: "Connect", description: "Plug in your data sources." },
                { step: 2, title: "Ask", description: "Tell the agent what to show." },
                { step: 3, title: "Generate", description: "See instant visualizations." },
                { step: 4, title: "Share", description: "Distribute to stakeholders." }
            ]
        },
        integrations: [
            { category: "Databases", items: ["SQL", "BigQuery", "Redshift"] },
            { category: "Apps", items: ["Slack", "Teams", "Email"] }
        ],
        capabilities: [
            { title: "Beautiful", description: "Designer-quality output." },
            { title: "Interpretable", description: "AI explains the 'why'." }
        ],
        pricing: [
            { model: "User", description: "Per creator license.", features: ["Unlimited Viewers"] },
            { model: "Team", description: "Shared workspace.", features: ["Agency Features"] }
        ],
        deployment: {
            options: ["SaaS"],
            details: "Secure sharing."
        }
    },
    {
        slug: "workflow-automation",
        title: "Workflow Automation",
        description: "Intelligent Process Automation",
        longDescription: "Streamline your business operations with intelligent workflow automation. Connect your apps, automate repetitive tasks, and let AI handle the complex logic, freeing your team for high-value work.",
        icon: Workflow,
        features: [
            "Drag-and-drop builder",
            "Multi-step logic",
            "AI-powered decisions",
            "Human-in-the-loop",
            "Error handling & retries",
            "Webhook triggers"
        ],
        painPoints: [
            { id: "1", title: "Repetition", description: "Boring manual data entry." },
            { id: "2", title: "Errors", description: "Fat-finger mistakes in processes." },
            { id: "3", title: "Silos", description: "Apps not talking to each other." },
            { id: "4", title: "Slowness", description: "Bottlenecks waiting for humans." }
        ],
        outcomes: [
            { id: "1", value: "10x", label: "Efficiency", description: "faster process execution" },
            { id: "2", value: "Zero", label: "Errors", description: "in automated tasks" },
            { id: "3", value: "24/7", label: "Ops", description: "processes run whilst you sleep" },
            { id: "4", value: "Scale", label: "Easy", description: "handle usage spikes" }
        ],
        coreFeatures: [
            { id: "1", title: "Connectors", description: "Library of 1000+ app integrations." },
            { id: "2", title: "AI Agent", description: "Can read emails and PDFs." },
            { id: "3", title: "Logs", description: "Detailed execution history." },
            { id: "4", title: "Triggers", description: "Time, event, or webhook based." }
        ],
        howItWorks: {
            title: "Auto Pilot",
            steps: [
                { step: 1, title: "Trigger", description: "Event starts the flow." },
                { step: 2, title: "Action", description: "System performs tasks." },
                { step: 3, title: "Logic", description: "Branching based on data." },
                { step: 4, title: "Complete", description: "Update all systems." }
            ]
        },
        integrations: [
            { category: "Apps", items: ["Slack", "Gmail", "Jira", "Trello"] },
            { category: "Dev", items: ["GitHub", "AWS Lambda"] }
        ],
        capabilities: [
            { title: "Complex", description: "Handles nested loops and variables." },
            { title: "Secure", description: "Encrypted credentials." }
        ],
        pricing: [
            { model: "Starter", description: "1000 runs/month.", features: ["Basic Apps"] },
            { model: "Pro", description: "Unlimited runs.", features: ["Premium Apps"] }
        ],
        deployment: {
            options: ["Cloud", "On-Premise Agent"],
            details: "For local network access."
        }
    },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
    return solutions.find((solution) => solution.slug === slug);
}
