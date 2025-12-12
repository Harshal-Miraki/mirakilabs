"use client";

import { motion } from "framer-motion";
import GradientText from "./GradientText";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion";
import {
    HelpCircle,
    MessageCircle,
    Lightbulb,
    BookOpen,
    Headphones,
    CheckCircle2,
    Shield
} from "lucide-react";

const faqs = [
    {
        question: "What industries do you serve?",
        answer: "We specialize in industrial AI solutions for manufacturing, energy, logistics, and process industries. Our solutions are adaptable to any sector that relies on equipment, sensors, and operational data."
    },
    {
        question: "How long does implementation take?",
        answer: "Implementation timelines vary based on project scope. Typically, a pilot project can be deployed in 4-6 weeks, while full-scale enterprise solutions may take 3-6 months for complete integration."
    },
    {
        question: "Do you provide ongoing support?",
        answer: "Yes, we offer comprehensive support packages including 24/7 monitoring, regular model updates, training sessions for your team, and dedicated account management to ensure long-term success."
    },
    {
        question: "What ROI can we expect?",
        answer: "Our clients typically see 20-40% reduction in downtime, 15-30% improvement in operational efficiency, and significant cost savings within the first year of implementation."
    },
    {
        question: "How do you ensure data security?",
        answer: "We implement enterprise-grade security measures including end-to-end encryption, on-premise deployment options, SOC 2 compliance, and strict data governance policies to protect your sensitive operational data."
    },
    {
        question: "Can your solutions integrate with existing systems?",
        answer: "Absolutely. Our solutions are designed to be system-agnostic and can integrate with most ERP, SCADA, MES, and IoT platforms through standard APIs and custom connectors."
    }
];

// FAQ-related icons for orbiting
const faqIcons = {
    inner: [
        { Icon: HelpCircle, label: "Questions", color: "text-brand-blue" },
        { Icon: MessageCircle, label: "Support", color: "text-brand-green" },
        { Icon: Lightbulb, label: "Solutions", color: "text-yellow-500" },
    ],
    outer: [
        { Icon: BookOpen, label: "Documentation", color: "text-brand-blue" },
        { Icon: Headphones, label: "Help Desk", color: "text-purple-500" },
        { Icon: CheckCircle2, label: "Answers", color: "text-brand-green" },
        { Icon: Shield, label: "Security", color: "text-orange-500" },
    ]
};

export function FAQ() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-3xl opacity-30" />
                <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-3xl opacity-30" />
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
                                Frequently Asked Questions
                            </GradientText>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Find answers to common questions about our AI solutions and services.
                        </p>
                    </motion.div>
                </div>

                {/* Content - Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Side - Orbiting Circles Animation */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative flex items-center justify-center h-[400px] md:h-[450px]"
                    >
                        {/* Orbit Paths */}
                        <div className="absolute w-[200px] h-[200px] rounded-full border border-black/10 dark:border-white/10" />
                        <div className="absolute w-[320px] h-[320px] rounded-full border border-black/10 dark:border-white/10" />

                        {/* Center - Company Logo */}
                        <div className="absolute z-10 flex items-center justify-center w-28 h-28 rounded-full bg-white dark:bg-zinc-900 shadow-2xl border border-black/5 dark:border-white/10">
                            <img
                                src="/assets/miraki-logo.png"
                                alt="Miraki Labs"
                                className="w-20 h-20 object-contain"
                            />
                        </div>

                        {/* Inner Orbiting Icons */}
                        <div
                            className="absolute w-[200px] h-[200px]"
                            style={{
                                animation: "spin 20s linear infinite",
                            }}
                        >
                            {faqIcons.inner.map((item, index) => {
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
                                            animation: "spin 20s linear infinite reverse",
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
                            className="absolute w-[320px] h-[320px]"
                            style={{
                                animation: "spin 30s linear infinite reverse",
                            }}
                        >
                            {faqIcons.outer.map((item, index) => {
                                const angle = (360 / 4) * index;
                                const radian = (angle * Math.PI) / 180;
                                const x = 160 * Math.cos(radian);
                                const y = 160 * Math.sin(radian);
                                const IconComponent = item.Icon;
                                return (
                                    <div
                                        key={index}
                                        className="absolute w-14 h-14 flex items-center justify-center rounded-full bg-white dark:bg-zinc-800 shadow-lg border border-black/10 dark:border-white/20"
                                        style={{
                                            left: `calc(50% + ${x}px - 28px)`,
                                            top: `calc(50% + ${y}px - 28px)`,
                                            animation: "spin 30s linear infinite",
                                        }}
                                        title={item.label}
                                    >
                                        <IconComponent className={`w-7 h-7 ${item.color}`} />
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Right Side - Accordion */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Accordion type="single" collapsible className="w-full space-y-2">
                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="border border-black/5 dark:border-white/10 rounded-xl px-4 bg-white/5 dark:bg-white/5 backdrop-blur-sm hover:bg-white/10 dark:hover:bg-white/10 transition-colors"
                                >
                                    <AccordionTrigger className="text-base font-medium hover:no-underline">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </motion.div>
                </div>
            </div>

            {/* CSS Animation */}
            <style jsx>{`
                @keyframes spin {
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
