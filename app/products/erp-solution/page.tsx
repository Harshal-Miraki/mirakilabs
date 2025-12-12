import { Layers, FileText, Play, BarChart3, Truck } from "lucide-react";

const product = {
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
};

export default function ERPSolutionPage() {
    const Icon = product.icon;

    return (
        <div className="min-h-screen bg-background pt-24 pb-12">
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

                {/* Section 4: Problem Solved */}
                <div className="mb-24 py-16 px-8 rounded-3xl bg-muted/30 border text-center">
                    <div className="max-w-3xl mx-auto space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight">Problem Solved</h2>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {product.problemSolved}
                        </p>
                    </div>
                </div>

                {/* Section 5: Platform Overview (Split Layout) */}
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                    {/* Left: Image */}
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border bg-muted/50 order-2 lg:order-1">
                        <img
                            src={product.platformOverview.image}
                            alt={product.platformOverview.title}
                            className="object-cover w-full h-full"
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
