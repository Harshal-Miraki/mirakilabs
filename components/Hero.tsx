"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { ArrowRight } from "lucide-react";
import GradientText from "./GradientText";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[128px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-green/20 rounded-full blur-[128px]" />
            </div>

            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-white/5 text-sm text-muted-foreground">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
                        </span>
                        Available for new projects
                    </div>

                    <h1 className="font-bold tracking-tight text-foreground text-center">
                        <span className="block text-4xl sm:text-4xl md:text-6xl mb-2">
                            We Create
                        </span>
                        <span className="block text-5xl sm:text-6xl md:text-8xl">
                            <GradientText
                                colors={["#0052cc", "#00cc66"]}
                                animationSpeed={3}
                                showBorder={false}
                                className="inline-block"
                            >
                                AI for Industry
                            </GradientText>
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-center">
                        We build intelligent, custom AI solutions that drive real business impact.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Button size="lg" className="h-12 px-8 text-base">
                            Start a Project <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                            View Our Work
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
