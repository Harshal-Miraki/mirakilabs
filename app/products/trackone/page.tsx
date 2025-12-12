import { MapPin, Scan, Signal, MonitorCheck, BarChart3, TrendingUp, ShieldCheck, FileText, CreditCard } from "lucide-react";

const product = {
    title: "TrackOne",
    description: "Container Tracking SaaS Platform",
    longDescription:
        "TrackOne is a comprehensive, dual-role SaaS platform that combines advanced container tracking with integrated trade finance solutions. Designed for logistics companies and financial investors, it provides real-time GPS tracking, fleet management, intelligent alerts, and seamless access to trade finance options.",
    icon: MapPin,
    features: [
        {
            title: "Live Container Tracking",
            description: "Real-time GPS tracking with interactive satellite maps and route visualization with polyline tracking.",
        },
        {
            title: "Fleet Management",
            description: "Device management dashboard with 15+ tracked containers, speed and movement tracking for containers in transit.",
        },
        {
            title: "Intelligent Alerts",
            description: "Real-time notifications for critical events with customizable alert thresholds and prioritization.",
        },
        {
            title: "Trade Finance Integration",
            description: "Bill discounting, invoice financing, credit access dashboard, and financial portfolio management.",
        },
    ],
    image: "https://ik.imagekit.io/rdwxgbmgm/Track%20one%20main/Macbook-Air-localhost.png",
    problemSolved: "Solves the challenge of container visibility, inventory accuracy, and working capital by combining real-time tracking with integrated trade finance solutions.",

    // Feature Spotlights
    spotlights: [
        {
            title: "Fleet Command Center",
            description: "Gain complete visibility over your logistics operations. Our fleet management dashboard allows you to monitor the status, location, and condition of every container in your fleet from a single interface. Filter by active, in-transit, or idle states to optimize utilization.",
            image: "https://ik.imagekit.io/rdwxgbmgm/Track%20one%20main/Macbook-Air-localhost%20(1).png",
            features: ["15+ Active Containers Tracked", "Speed & Heading Monitoring", "Battery Status Indicators"],
            align: "right"
        },
        {
            title: "Intelligent Security & Alerts",
            description: "Stay ahead of potential risks with our proactive security system. Set up custom geofences and receive instant alerts for unauthorized movement, route deviations, or tampering attempts. Ensure the safety of high-value cargo with real-time incident reporting.",
            image: "https://ik.imagekit.io/rdwxgbmgm/Track%20one%20main/Macbook-Air-localhost%20(2).png",
            features: ["Geofence Breach Detection", "Theft Prevention Alerts", "Smart Lock Integration"],
            align: "left"
        },
        {
            title: "Advanced Analytics & Reporting",
            description: "Transform raw data into actionable insights. Our comprehensive reporting engine generates detailed logs of trip history, telemetry data, and operational efficiency metrics. Export reports for compliance or internal audits with a single click.",
            image: "https://ik.imagekit.io/rdwxgbmgm/Track%20one%20main/Macbook-Air-localhost%20(5).png",
            features: ["Trip History Logs", "Telemetry Data Visualization", "Downloadable Reports"],
            align: "right"
        },
        {
            title: "Seamless Billing & Finance",
            description: "Streamline your financial operations with our integrated billing module. Manage invoices, track payments, and access detailed interest calculations for financed trips. Transparent pricing ensures you always know your profit margins.",
            image: "https://ik.imagekit.io/rdwxgbmgm/Track%20one%20main/Macbook-Air-localhost%20(4).png",
            features: ["Invoice Management", "Interest Rate Calculation", "Credit Utilization Tracking"],
            align: "left"
        },
        {
            title: "Investor ROI Dashboard",
            description: "For financial investors, TrackOne offers a dedicated view to monitor portfolio performance. Track your total investment, calculated interest, and risk exposure in real-time. Identify high-yield opportunities in the logistics sector backed by verified movement data.",
            image: "https://ik.imagekit.io/rdwxgbmgm/Track%20one%20main/Macbook-Air-localhost%20(7).png",
            features: ["Portfolio Performance Metrics", "Risk Analysis Tools", "ROI Calculator"],
            align: "right"
        }
    ],

    platformOverview: {
        title: "Dual Revenue Strength",
        description: "TrackOne isn't just a tool; it's an ecosystem. By bridging the gap between physical logistics and digital finance, we create value for both operators optimizing supply chains and investors seeking stable returns.",
        image: "https://ik.imagekit.io/rdwxgbmgm/Track%20one%20main/Macbook-Air-localhost%20(6).png",
    },
    howItWorks: [
        {
            title: "Connect",
            description: "Attach GPS trackers to your containers and connect to the TrackOne platform.",
            icon: Scan,
        },
        {
            title: "Track",
            description: "Monitor real-time location, speed, and status as containers move globally.",
            icon: Signal,
        },
        {
            title: "Analyze",
            description: "View dashboards with telemetry data, alerts, and comprehensive reports.",
            icon: MonitorCheck,
        },
        {
            title: "Finance",
            description: "Access trade finance options and discount invoices against goods in transit.",
            icon: BarChart3,
        },
    ],
};

export default function TrackOnePage() {
    return (
        <div className="min-h-screen bg-background mt-6 pt-24 pb-12">
            <div className="container mx-auto px-4">
                {/* Section 1: Hero (Split Layout) */}
                <div className="grid gap-12 lg:grid-cols-2 items-center mb-24">
                    <div className="space-y-6">
                        <h1
                            className="text-4xl font-bold tracking-tight lg:text-6xl text-left
                            bg-linear-to-r from-[#0052cc] via-[#00cc66] to-[#0052cc]
                            bg-clip-text text-transparent"
                        >
                            {product.title}
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {product.longDescription}
                        </p>
                        <div className="flex flex-wrap gap-3 pt-4">
                            {product.features.slice(0, 3).map((feature, index) => (
                                <span key={index} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                                    {feature.title}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border bg-muted/50">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>

                {/* Section 2: Core Features Grid */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Core Features</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {product.features.map((feature, index) => (
                            <div
                                key={index}
                                className="group p-6 rounded-2xl bg-card border hover:border-brand-blue/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="h-10 w-10 rounded-full bg-brand-blue/10 flex items-center justify-center mb-4 group-hover:bg-brand-blue/20 transition-colors">
                                    <div className="h-2.5 w-2.5 rounded-full bg-brand-blue" />
                                </div>
                                <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-brand-blue transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 3: Feature Spotlights (The Enrichment) */}
                <div className="space-y-32 mb-32">
                    {product.spotlights.map((spotlight, index) => (
                        <div key={index} className="grid gap-12 lg:grid-cols-2 items-center">
                            {/* Image Side */}
                            <div className={`relative aspect-video rounded-2xl overflow-hidden shadow-2xl border bg-muted/50 ${spotlight.align === 'right' ? 'lg:order-2' : 'lg:order-1'}`}>
                                <img
                                    src={spotlight.image}
                                    alt={spotlight.title}
                                    className="object-contain w-full h-full"
                                />
                            </div>

                            {/* Content Side */}
                            <div className={`space-y-6 ${spotlight.align === 'right' ? 'lg:order-1' : 'lg:order-2'}`}>
                                <h2 className="text-3xl font-bold tracking-tight lg:text-4xl text-foreground">
                                    {spotlight.title}
                                </h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {spotlight.description}
                                </p>
                                <ul className="space-y-3 pt-2">
                                    {spotlight.features.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <div className="h-2 w-2 rounded-full bg-brand-blue shrink-0" />
                                            <span className="text-muted-foreground font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Section 4: How It Works */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold tracking-tight text-center mb-16">How It Works</h2>
                    <div className="relative">
                        <div className="absolute top-12 left-[12.5%] w-[75%] h-0.5 bg-linear-to-r from-transparent via-border to-transparent hidden lg:block" />
                        <div className="grid gap-8 lg:grid-cols-4 relative">
                            {product.howItWorks.map((step, index) => {
                                const StepIcon = step.icon;
                                return (
                                    <div key={index} className="relative flex flex-col items-center text-center group">
                                        <div className="absolute -top-6 bg-background px-2 text-xs font-bold text-muted-foreground border rounded-full z-20">
                                            Step {index + 1}
                                        </div>
                                        <div className="w-24 h-24 rounded-full bg-background border-2 border-muted group-hover:border-brand-blue transition-colors flex items-center justify-center mb-6 z-10 shadow-sm group-hover:shadow-md group-hover:scale-110 duration-300">
                                            <StepIcon className="h-10 w-10 text-muted-foreground group-hover:text-brand-blue transition-colors" />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-3 group-hover:text-brand-blue transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed px-4">
                                            {step.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Section 5: Stats Section */}
                <div className="mb-20 py-8 px-4 sm:px-8 rounded-2xl bg-[#e3effc] dark:bg-[#1E1E1E] border">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">15+</div>
                            <div className="text-sm sm:text-base font-semibold text-foreground">Containers</div>
                            <div className="text-xs sm:text-sm text-muted-foreground">Tracked simultaneously</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">Real-time</div>
                            <div className="text-sm sm:text-base font-semibold text-foreground">GPS Updates</div>
                            <div className="text-xs sm:text-sm text-muted-foreground">Live satellite tracking</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">$450k+</div>
                            <div className="text-sm sm:text-base font-semibold text-foreground">Available Credit</div>
                            <div className="text-xs sm:text-sm text-muted-foreground">Trade finance access</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">2.4%</div>
                            <div className="text-sm sm:text-base font-semibold text-foreground">Interest Rate</div>
                            <div className="text-xs sm:text-sm text-muted-foreground">Competitive financing</div>
                        </div>
                    </div>
                </div>

                {/* Section 6: Platform Overview (Video/Dual Role) */}
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border bg-muted/50 order-2 lg:order-1">
                        <img
                            src={product.platformOverview.image}
                            alt={product.platformOverview.title}
                            className="object-contain w-full h-full"
                        />
                    </div>
                    <div className="space-y-8 order-1 lg:order-2">
                        <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
                            {product.platformOverview.title}
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {product.platformOverview.description}
                        </p>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">Unique Advantages</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 h-2 w-2 rounded-full bg-brand-green shrink-0" />
                                    <span className="text-muted-foreground">Integrated Logistics & Finance</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 h-2 w-2 rounded-full bg-brand-green shrink-0" />
                                    <span className="text-muted-foreground">End-to-End Supply Chain Visibility</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
