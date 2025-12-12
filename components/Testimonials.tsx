"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import GradientText from "./GradientText";
import { Marquee } from "./ui/marquee";

const testimonials = [
    {
        name: "Michael Chen",
        role: "CTO",
        company: "TechVision Industries",
        quote: "Miraki Labs transformed our manufacturing process with AI-driven insights. Their solutions reduced downtime by 40% and significantly improved our operational efficiency.",
        avatar: "MC"
    },
    {
        name: "Sarah Johnson",
        role: "Operations Director",
        company: "Global Manufacturing Co.",
        quote: "The predictive maintenance system they built has been a game-changer. We've seen dramatic improvements in equipment reliability and cost savings.",
        avatar: "SJ"
    },
    {
        name: "Rajesh Kumar",
        role: "Plant Manager",
        company: "Industrial Dynamics",
        quote: "Working with Miraki Labs was seamless. Their deep understanding of both AI and industrial processes is unmatched. Highly recommended!",
        avatar: "RK"
    },
    {
        name: "Emily Rodriguez",
        role: "VP of Engineering",
        company: "Smart Factory Solutions",
        quote: "The real-time analytics platform has given us unprecedented visibility into our operations. It's like having a crystal ball for our production line.",
        avatar: "ER"
    },
    {
        name: "David Park",
        role: "CEO",
        company: "NextGen Manufacturing",
        quote: "Miraki Labs delivered beyond our expectations. Their AI solutions are not just cutting-edge, they're practical and deliver real ROI.",
        avatar: "DP"
    },
    {
        name: "Lisa Thompson",
        role: "Head of Operations",
        company: "Precision Industries",
        quote: "The team's expertise in AI for industrial applications is exceptional. They understood our challenges and delivered solutions that actually work.",
        avatar: "LT"
    }
];

// Split testimonials into two rows for marquee effect
const firstRow = testimonials.slice(0, 3);
const secondRow = testimonials.slice(3, 6);

// Testimonial Card Component
function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
    return (
        <div className="group relative w-[400px] p-6 rounded-2xl bg-white/5 dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-sm hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 text-brand-blue/20 dark:text-brand-blue/10">
                <Quote className="w-8 h-8" />
            </div>

            {/* Quote */}
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-3 relative z-10">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-blue/20 to-brand-green/20 border border-white/10 flex items-center justify-center text-sm font-bold text-foreground">
                    {testimonial.avatar}
                </div>

                {/* Name & Role */}
                <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                    </p>
                </div>
            </div>

            {/* Hover Gradient Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-blue/5 to-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
    );
}

export function Testimonials() {
    return (
        <section className="py-12 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-3xl opacity-30" />
                <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-3xl opacity-30" />
            </div>

            <div className="container mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                            <GradientText
                                colors={["#0052cc", "#00cc66", "#0052cc"]}
                                animationSpeed={3}
                                showBorder={false}
                                className="inline-block p-1 m-0"
                            >
                                What Our Clients Say
                            </GradientText>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Trusted by industry leaders to deliver transformative AI solutions.
                        </p>
                    </motion.div>
                </div>

                {/* Testimonials Marquee */}
                <div className="relative">
                    {/* Fade effect on edges */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-background to-transparent z-10"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-background to-transparent z-10"></div>

                    {/* Single Row - Faster Scroll */}
                    <Marquee pauseOnHover className="[--duration:30s]">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} testimonial={testimonial} />
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
}
