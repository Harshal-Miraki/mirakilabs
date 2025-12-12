"use client";

import Link from "next/link";
import { ChevronRight, Sparkles, Cpu, Database, Settings, Zap, Shield, BarChart3, Network, Cloud } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SolutionHeroProps {
    title: string;
    description: string;
    longDescription: string;
    icon: ReactNode;
}

// Solution-related icons for orbiting
const orbitIcons = {
    inner: [
        { Icon: Cpu, label: "Processing", color: "text-brand-blue" },
        { Icon: Database, label: "Data", color: "text-brand-green" },
        { Icon: Settings, label: "Control", color: "text-yellow-500" },
    ],
    outer: [
        { Icon: Zap, label: "Performance", color: "text-brand-blue" },
        { Icon: Shield, label: "Security", color: "text-purple-500" },
        { Icon: BarChart3, label: "Analytics", color: "text-brand-green" },
        { Icon: Network, label: "Integration", color: "text-orange-500" },
        { Icon: Cloud, label: "Cloud", color: "text-cyan-500" },
    ]
};

export function SolutionHero({ title, description, longDescription, icon }: SolutionHeroProps) {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-background">
            {/* Dynamic Background - Grid and Blurs */}
            <div className="absolute inset-0 bg-grid-white/[0.02]" style={{ backgroundSize: '50px 50px' }} />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-green/10 blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-blue/10 blur-[100px] rounded-full pointer-events-none opacity-50 mix-blend-screen" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="max-w-3xl"
                    >
                        {/* Icon Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue mb-6 border border-brand-blue/20">
                            <Sparkles className="h-4 w-4" />
                            <span className="text-sm font-medium">Enterprise Grade Solution</span>
                        </div>

                        {/* Title with Gradient */}
                        <div className="mb-6">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-green">
                                    {title}
                                </span>
                            </h1>
                        </div>

                        {/* Description */}
                        <p className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light tracking-tight">
                            {description}
                        </p>
                        <p className="text-lg text-foreground/70 leading-relaxed max-w-xl mb-10">
                            {longDescription}
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4">
                            <Button size="lg" className="rounded-full px-8 text-base h-12 shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/40 transition-shadow">
                                Request Demo
                                <ChevronRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="lg" className="rounded-full px-8 text-base h-12 bg-background/50 backdrop-blur-sm">
                                View Documentation
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Side Visual - Orbiting Circles */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:flex items-center justify-center h-[450px]"
                    >
                        {/* Orbit Paths */}
                        <div className="absolute w-[200px] h-[200px] rounded-full border border-black/10 dark:border-white/10" />
                        <div className="absolute w-[340px] h-[340px] rounded-full border border-black/10 dark:border-white/10" />

                        {/* Center - Main Icon */}
                        <div className="absolute z-10 flex items-center justify-center w-28 h-28 rounded-full bg-white dark:bg-zinc-900 shadow-2xl border border-black/5 dark:border-white/10">
                            {icon}
                        </div>

                        {/* Inner Orbiting Icons */}
                        <div
                            className="absolute w-[200px] h-[200px]"
                            style={{
                                animation: "orbit-spin 20s linear infinite",
                            }}
                        >
                            {orbitIcons.inner.map((item, index) => {
                                const angle = (360 / 3) * index;
                                const radian = (angle * Math.PI) / 180;
                                const x = 100 * Math.cos(radian);
                                const y = 100 * Math.sin(radian);
                                const IconComponent = item.Icon;
                                return (
                                    <div
                                        key={index}
                                        className="absolute w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-zinc-800 shadow-lg border border-black/10 dark:border-white/20"
                                        style={{
                                            left: `calc(50% + ${x}px - 24px)`,
                                            top: `calc(50% + ${y}px - 24px)`,
                                            animation: "orbit-spin 20s linear infinite reverse",
                                        }}
                                        title={item.label}
                                    >
                                        <IconComponent className={`w-6 h-6 ${item.color}`} />
                                    </div>
                                );
                            })}
                        </div>

                        {/* Outer Orbiting Icons */}
                        <div
                            className="absolute w-[340px] h-[340px]"
                            style={{
                                animation: "orbit-spin 30s linear infinite reverse",
                            }}
                        >
                            {orbitIcons.outer.map((item, index) => {
                                const angle = (360 / 5) * index;
                                const radian = (angle * Math.PI) / 180;
                                const x = 170 * Math.cos(radian);
                                const y = 170 * Math.sin(radian);
                                const IconComponent = item.Icon;
                                return (
                                    <div
                                        key={index}
                                        className="absolute w-14 h-14 flex items-center justify-center rounded-full bg-white dark:bg-zinc-800 shadow-lg border border-black/10 dark:border-white/20"
                                        style={{
                                            left: `calc(50% + ${x}px - 28px)`,
                                            top: `calc(50% + ${y}px - 28px)`,
                                            animation: "orbit-spin 30s linear infinite",
                                        }}
                                        title={item.label}
                                    >
                                        <IconComponent className={`w-7 h-7 ${item.color}`} />
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* CSS Animation */}
            <style jsx>{`
                @keyframes orbit-spin {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
        </section>
    );
}
