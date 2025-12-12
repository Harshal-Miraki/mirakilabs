"use client";

import React from "react";
import GradientText from "@/components/GradientText";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ArrowLeft, Send } from "lucide-react";

export default function ComingSoon() {
    return (
        // Added z-50 and bg-background to ensure it sits on top and covers other content if necessary
        <div className="flex flex-col items-center justify-center mt-16 md:mt-24 min-h-[80vh] w-full bg-background overflow-hidden py-10">
            <div className="flex flex-col items-center gap-6 md:gap-8 px-4 text-center max-w-4xl mx-auto animate-in fade-in zoom-in duration-700">
                <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={6}
                    showBorder={true}
                    className="text-4xl sm:text-5xl md:text-8xl font-bold p-4 py-6"
                >
                    Coming Soon
                </GradientText>

                <p className="text-base sm:text-lg md:text-2xl text-muted-foreground max-w-2xl mt-2 md:mt-4 px-2">
                    We are crafting something extraordinary. Something that redefines the future of industrial AI. Stay tuned.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-xs sm:max-w-md mt-6 md:mt-8">
                    <Input
                        type="email"
                        placeholder="Enter your email address"
                        className="bg-background/50 backdrop-blur-sm border-primary/20 focus-visible:ring-primary/50 h-10 md:h-12 text-sm md:text-base"
                    />
                    <Button size="lg" className="shrink-0 aspect-square h-10 w-10 md:h-12 md:w-12 p-0 mx-auto sm:mx-0">
                        <Send className="h-4 w-4 md:h-5 md:w-5" />
                        <span className="sr-only">Notify Me</span>
                    </Button>
                </div>

                <div className="mt-12">
                    <Button asChild variant="secondary" size="lg" className="group rounded-full px-8">
                        <Link href="/">
                            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                            Return to Home
                        </Link>
                    </Button>
                </div>

            </div>
        </div>
    );
}
