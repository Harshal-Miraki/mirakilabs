import { BrainCircuit, Network, Cpu, Settings, RefreshCw } from "lucide-react";
import { ArchitectureLayers } from "@/components/ArchitectureLayers";
import GradientText from "@/components/GradientText";

const product = {
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
            title: "Structure",
            description: "Our AI engine processes real-time data to identify optimization opportunities.",
            icon: Cpu,
        },
        {
            title: "Analyze",
            description: "Automated commands are sent back to machinery for immediate adjustment.",
            icon: Settings,
        },
        {
            title: "Optimize",
            description: "Continuous learning algorithms improve efficiency over time.",
            icon: RefreshCw,
        },
    ],
};

export default function CatylistPage() {
    const Icon = product.icon;

    return (
        <div className="min-h-screen bg-background mt-6 pt-24 pb-12">
            <div className="container mx-auto px-4">
                {/* Section 1: Product Header (Split Layout) */}
                <div className="grid gap-12 lg:grid-cols-2 items-center mb-24">
                    {/* Left: Title & Description */}
                    <div className="space-y-6">
                        <h1
                            className="text-4xl font-bold tracking-tight lg:text-6xl text-left
                            bg-gradient-to-r from-[#0052cc] via-[#00cc66] to-[#0052cc]
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

                    {/* Right: Product Image */}
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border bg-muted/50">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>

                {/* Section 2: Core Features */}
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

                {/* Section 3: How It Works */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold tracking-tight text-center mb-16">How It Works</h2>
                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="absolute top-12 left-[12.5%] w-[75%] h-0.5 bg-gradient-to-r from-transparent via-border to-transparent hidden lg:block" />

                        <div className="grid gap-8 lg:grid-cols-4 relative">
                            {product.howItWorks.map((step, index) => {
                                const StepIcon = step.icon;
                                return (
                                    <div key={index} className="relative flex flex-col items-center text-center group">
                                        {/* Step Number Badge */}
                                        <div className="absolute -top-6 bg-background px-2 text-xs font-bold text-muted-foreground border rounded-full z-20">
                                            Step {index + 1}
                                        </div>

                                        {/* Icon Circle */}
                                        <div className="w-24 h-24 rounded-full bg-background border-2 border-muted group-hover:border-brand-blue transition-colors flex items-center justify-center mb-6 z-10 shadow-sm group-hover:shadow-md group-hover:scale-110 duration-300">
                                            <StepIcon className="h-10 w-10 text-muted-foreground group-hover:text-brand-blue transition-colors" />
                                        </div>

                                        {/* Content */}
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

                {/* Section 3.5: Architecture Layers */}
                <ArchitectureLayers />

                {/* Section 4: Stats Section */}
                <div className="mt-12 mb-20 py-8 px-4 sm:px-8 rounded-2xl bg-[#e3effc] dark:bg-[#1E1E1E] border">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">10+</div>
                            <div className="text-sm sm:text-base font-semibold text-foreground">Industrial Protocols</div>
                            <div className="text-xs sm:text-sm text-muted-foreground">Supported out of the box</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">99.9%</div>
                            <div className="text-sm sm:text-base font-semibold text-foreground">Uptime SLA</div>
                            <div className="text-xs sm:text-sm text-muted-foreground">Enterprise reliability</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">40%</div>
                            <div className="text-sm sm:text-base font-semibold text-foreground">Cost Reduction</div>
                            <div className="text-xs sm:text-sm text-muted-foreground">Average savings</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">&lt; 10ms</div>
                            <div className="text-sm sm:text-base font-semibold text-foreground">Response Time</div>
                            <div className="text-xs sm:text-sm text-muted-foreground">Real-time control</div>
                        </div>
                    </div>
                </div>


                {/* Section 5: Platform Overview (Split Layout) */}
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                    {/* Left: Image */}
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border bg-muted/50 order-2 lg:order-1">
                        <img
                            src={product.platformOverview.image}
                            alt={product.platformOverview.title}
                            className="object-contain w-full h-full"
                        />
                    </div>

                    {/* Right: Info */}
                    <div className="space-y-8 order-1 lg:order-2">
                        <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
                            {product.platformOverview.title}
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {product.platformOverview.description}
                        </p>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">Key Capabilities</h3>
                            <ul className="space-y-3">
                                {product.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="mt-1.5 h-2 w-2 rounded-full bg-brand-green shrink-0" />
                                        <span className="text-muted-foreground">{feature.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
