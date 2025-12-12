"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import {
    ShieldCheck,
    Zap,
    Brain,
    TrendingUp,
    Users,
    Globe
} from "lucide-react";
import GradientText from "./GradientText";
import { useState, useEffect } from "react";
import CardSwap, { Card } from "./CardSwap";

const features = [
    {
        icon: Brain,
        title: "Advanced AI Integration",
        description: "We leverage cutting-edge artificial intelligence to automate complex industrial processes and decision-making.",
        gradient: "from-blue-500/20 to-purple-500/20",
        border: "border-blue-500/50"
    },
    {
        icon: Zap,
        title: "Real-time Processing",
        description: "Our systems process data in real-time, ensuring immediate response to critical events and anomalies.",
        gradient: "from-yellow-500/20 to-orange-500/20",
        border: "border-yellow-500/50"
    },
    {
        icon: ShieldCheck,
        title: "Enterprise Security",
        description: "Built with industry-standard security protocols to protect your sensitive operational data and infrastructure.",
        gradient: "from-green-500/20 to-emerald-500/20",
        border: "border-green-500/50"
    },
    {
        icon: TrendingUp,
        title: "Scalable Architecture",
        description: "Solutions designed to grow with your business, handling increasing data loads without compromising performance.",
        gradient: "from-pink-500/20 to-rose-500/20",
        border: "border-pink-500/50"
    },
    {
        icon: Users,
        title: "Expert Support",
        description: "Dedicated team of AI engineers and domain experts ready to assist you at every step of your journey.",
        gradient: "from-cyan-500/20 to-teal-500/20",
        border: "border-cyan-500/50"
    },
    {
        icon: Globe,
        title: "Global Connectivity",
        description: "Seamlessly connect and monitor your distributed assets from anywhere in the world through our cloud platform.",
        gradient: "from-indigo-500/20 to-violet-500/20",
        border: "border-indigo-500/50"
    }
];

export function WhyChooseUs() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setMounted(true);
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const isDark = mounted && (theme === "dark" || theme === "system");

    // Responsive configuration for CardSwap
    const cardConfig = isMobile ? {
        width: 800,
        height: 680,
        cardDistance: 30,
        verticalDistance: 40,
        skewAmount: 2
    } : {
        width: 520,
        height: 420,
        cardDistance: 40,
        verticalDistance: 50,
        skewAmount: 4
    };

    return (
        <section className="relative py-24 px-6 overflow-hidden" id="why-choose-us">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-blue/5 via-transparent to-transparent opacity-50" />
            </div>

            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-16 items-center">

                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center lg:text-left"
                    >
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
                            <GradientText
                                colors={["#0052cc", "#00cc66"]}
                                animationSpeed={3}
                                showBorder={false}
                                className="inline-block p-1 m-0"
                            >
                                Why Choose
                            </GradientText>
                            <GradientText
                                colors={["#0052cc", "#00cc66"]}
                                animationSpeed={3}
                                showBorder={false}
                                className="inline-block p-1 m-0"
                            >
                                Miraki Labs?
                            </GradientText>
                        </h2>

                        <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-8 mx-auto text-center lg:mx-0">
                            We combine deep industry knowledge with state-of-the-art technology to deliver solutions that drive tangible results. Our platform is built for reliability, scalability, and performance.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center lg:justify-center">
                            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                                <div className="w-2 h-2 rounded-full bg-brand-blue" />
                                24/7 Monitoring
                            </div>
                            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                                <div className="w-2 h-2 rounded-full bg-brand-green" />
                                99.9% Uptime
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Card Swap Animation */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative h-[400px] sm:h-[500px] w-full flex items-center justify-center mt-1 lg:mt-0"
                    >
                        {mounted && (
                            <CardSwap
                                width={cardConfig.width}
                                height={cardConfig.height}
                                cardDistance={cardConfig.cardDistance}
                                verticalDistance={cardConfig.verticalDistance}
                                delay={4000}
                                skewAmount={cardConfig.skewAmount}
                                pauseOnHover={true}
                                onCardClick={() => { }}
                            >
                                {features.map((feature, index) => (
                                    <Card
                                        key={index}
                                        customClass={`p-8 flex flex-col justify-center items-center text-center bg-white dark:bg-zinc-900/90 backdrop-blur-xl border ${feature.border} shadow-2xl`}
                                    >
                                        <div className={`absolute inset-0 bg-linear-to-br ${feature.gradient} opacity-20 pointer-events-none`} />

                                        <div className="relative z-10">
                                            <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center mb-6 mx-auto shadow-inner">
                                                <feature.icon className="w-8 h-8 text-foreground" />
                                            </div>

                                            <h3 className="text-4xl md:text-2xl font-bold mb-4 text-black dark:text-white">
                                                {feature.title}
                                            </h3>

                                            <p className="text-muted-foreground text-xl md:text-sm leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </Card>
                                ))}
                            </CardSwap>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
