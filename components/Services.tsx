"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import MagicBento from "./MagicBento";
import GradientText from "./GradientText";
import Link from "next/link";

export function Services() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted && (theme === "dark" || theme === "system");

    return (
        <section className="relative py-10 md:py-10 px-6 overflow-hidden" id="services">
            {/* Background gradient orbs */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-green/10 rounded-full blur-[150px]" />
            </div>

            <div className="container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-white/10 text-sm text-muted-foreground mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
                        </span>
                        What We Offer
                    </div>

                    {/* Main Title */}
                    <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
                        <GradientText
                            colors={["#0052cc", "#00cc66"]}
                            animationSpeed={3}
                            showBorder={false}
                            className="inline-block"
                        >
                            Our Services
                        </GradientText>
                    </h2>

                    {/* Description */}
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        We deliver cutting-edge AI solutions specifically designed for industrial applications,
                        helping you automate processes, improve quality, and drive innovation.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <MagicBento
                        textAutoHide={false}
                        enableStars={true}
                        enableSpotlight={false}
                        enableBorderGlow={true}
                        disableAnimations={false}
                        particleCount={6}
                        enableTilt={false}
                        glowColor={isDark ? "0, 82, 204" : "0, 82, 204"} // brand-blue
                        clickEffect={true}
                        enableMagnetism={false}
                    />
                </motion.div>
            </div>
        </section>
    );
}
