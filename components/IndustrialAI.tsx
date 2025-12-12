"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Database, Brain, Sparkles, Zap } from "lucide-react";
import Image from "next/image";
import GradientText from "./GradientText";

const tabs = [
    { id: "ml", label: "Machine Learning" },
    { id: "hybrid", label: "Hybrid AI" },
    { id: "generative", label: "Generative AI" },
    { id: "agentic", label: "Agentic AI" }
];

const content = {
    ml: {
        title: "Advanced Analytics & Machine Learning",
        icon: Brain,
        image: "/industrial_ml_dashboard_1764821799072.png",
        description: "Miraki Labs® provides robust, proven AI/ML techniques, including regression, classification, clustering, and time series analysis. But what truly sets us apart is our AI-powered contextualization that automatically enriches data with relevant information and relationships specific to your asset or use case, which enables you to:",
        features: [
            {
                icon: Database,
                title: "Unify Data",
                description: "Break down silos between OT, ET, and IT data and create a single source of truth by integrating data from various sources, including time series, P&IDs, 3D models, and enterprise systems."
            },
            {
                icon: Brain,
                title: "Contextualize Data",
                description: "Automatically map relationships between data in a dynamic industrial Knowledge Graph to ensure humans and AI solutions can easily access accurate data."
            },
            {
                icon: Zap,
                title: "Activate Data",
                description: "Build a strong foundation for easy-to-use Industrial Tools and AI solutions that transform operations and increase production uptime, mitigate risk, and reduce cost."
            },
            {
                icon: Sparkles,
                title: "Gain Deeper Insights",
                description: "Extract valuable insights from historical data to make informed decisions, including predicting equipment failures, detecting anomalies, and optimizing processes."
            }
        ]
    },
    hybrid: {
        title: "Hybrid AI Solutions",
        icon: Sparkles,
        image: "/hybrid_ai_concept_1764821823996.png",
        description: "Combine the power of traditional AI/ML with modern generative AI to create hybrid solutions that leverage the best of both worlds. Our hybrid approach ensures reliability while embracing innovation.",
        features: [
            {
                icon: Brain,
                title: "Best of Both Worlds",
                description: "Integrate traditional ML models with generative AI for enhanced accuracy and creativity in problem-solving."
            },
            {
                icon: Database,
                title: "Data-Driven Decisions",
                description: "Use proven ML techniques while augmenting with generative capabilities for unprecedented insights."
            },
            {
                icon: Zap,
                title: "Scalable Architecture",
                description: "Deploy hybrid solutions that scale with your business needs and adapt to changing requirements."
            },
            {
                icon: Sparkles,
                title: "Innovation Pipeline",
                description: "Continuously improve your AI capabilities by incorporating the latest advances in both traditional and generative AI."
            }
        ]
    },
    generative: {
        title: "Generative AI & LLMs",
        icon: Sparkles,
        image: "/generative_ai_industrial_1764821843356.png",
        description: "Harness the power of Large Language Models and generative AI to automate complex tasks, generate insights, and create intelligent assistants that understand your industrial context.",
        features: [
            {
                icon: Brain,
                title: "Intelligent Automation",
                description: "Use LLMs to automate documentation, report generation, and knowledge extraction from unstructured data."
            },
            {
                icon: Sparkles,
                title: "Natural Language Interface",
                description: "Query your industrial data using natural language, making complex analytics accessible to everyone."
            },
            {
                icon: Database,
                title: "Knowledge Synthesis",
                description: "Combine information from multiple sources to generate comprehensive insights and recommendations."
            },
            {
                icon: Zap,
                title: "Rapid Prototyping",
                description: "Quickly develop and test new AI applications using pre-trained models and fine-tuning techniques."
            }
        ]
    },
    agentic: {
        title: "Agentic AI Systems",
        icon: Zap,
        image: "/agentic_ai_network_1764821864145.png",
        description: "Deploy autonomous AI agents that can reason, plan, and take action on your behalf. Our agentic systems work 24/7 to optimize operations, predict issues, and make intelligent decisions.",
        features: [
            {
                icon: Zap,
                title: "Autonomous Operations",
                description: "AI agents that continuously monitor systems, detect anomalies, and take corrective actions without human intervention."
            },
            {
                icon: Brain,
                title: "Intelligent Planning",
                description: "Agents that can reason about complex scenarios and develop multi-step plans to achieve operational goals."
            },
            {
                icon: Sparkles,
                title: "Adaptive Learning",
                description: "Systems that learn from outcomes and continuously improve their decision-making capabilities."
            },
            {
                icon: Database,
                title: "Multi-Agent Collaboration",
                description: "Coordinate multiple specialized agents to solve complex problems requiring diverse expertise."
            }
        ]
    }
};

export function IndustrialAI() {
    const [activeTab, setActiveTab] = useState("ml");

    return (
        <section className="py-12 sm:py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-blue/5 rounded-full blur-3xl opacity-30" />
            </div>

            <div className="container mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            <GradientText
                                colors={["#0052cc", "#00cc66", "#0052cc"]}
                                animationSpeed={3}
                                showBorder={false}
                                className="inline-block p-1 m-0"
                            >
                                Industrial AI at Every Layer
                            </GradientText>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            From Data Foundation to Actionable Decisions
                        </p>
                    </motion.div>
                </div>
                <div className="ai-wrraper bg-[#f0f2fc] dark:bg-[#1D1E20] p-4 md:p-8 rounded-xl">
                    {/* Tab Navigation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex justify-center mb-16"
                    >
                        <div className="p-1 rounded-full bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-black/5 dark:border-white/10 inline-flex overflow-x-auto max-w-full scrollbar-hide">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`relative px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${activeTab === tab.id
                                        ? "text-foreground shadow-sm"
                                        : "text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5"
                                        }`}
                                >
                                    {activeTab === tab.id && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-white dark:bg-white/10 rounded-full"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{tab.label}</span>
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Tab Content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start"
                        >
                            {/* Left Column: Image */}
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-black/5 dark:border-white/10 aspect-video lg:aspect-auto lg:h-full lg:min-h-[400px]">
                                <Image
                                    src={content[activeTab as keyof typeof content].image}
                                    alt={content[activeTab as keyof typeof content].title}
                                    fill
                                    className="object-cover object-center"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-60" />
                            </div>

                            {/* Right Column: Content */}
                            <div className="flex flex-col justify-center">
                                <div className="mb-8">
                                    <h3 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-3">
                                        {(() => {
                                            const IconComponent = content[activeTab as keyof typeof content].icon;
                                            return IconComponent ? <IconComponent className="w-8 h-8 text-brand-blue" /> : null;
                                        })()}
                                        {content[activeTab as keyof typeof content].title}
                                    </h3>
                                    <p className="text-muted-foreground text-lg leading-relaxed">
                                        {content[activeTab as keyof typeof content].description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 gap-4">
                                    {content[activeTab as keyof typeof content].features.map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="group p-4 rounded-xl bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-300"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 flex items-center justify-center shrink-0">
                                                    <feature.icon className="w-8 h-8 text-brand-blue" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                                        {feature.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
