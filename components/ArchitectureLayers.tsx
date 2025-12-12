"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Network, Layers, Brain, Lightbulb, Settings, Code } from "lucide-react";

const architectureLayers = [
    {
        id: "connect",
        label: "Connect",
        title: "Connect Layer",
        icon: Network,
        color: "blue",
        image: "https://ik.imagekit.io/rdwxgbmgm/Catylist/Screenshot%202025-12-05%20154916.png",
        description: "The foundation of our platform. Seamlessly integrate with PLCs, SCADA systems, industrial IoT devices, and legacy equipment. Our connectors support OPC-UA, Modbus, MQTT, and 50+ industrial protocols out of the box.",
        highlights: [
            "50+ Industrial Protocol Support",
            "Real-time Data Ingestion",
            "Edge Device Integration",
            "Legacy System Compatibility"
        ]
    },
    {
        id: "structure",
        label: "Structure",
        title: "Structure Layer",
        icon: Layers,
        color: "green",
        image: "https://ik.imagekit.io/rdwxgbmgm/Catylist/Screenshot%202025-12-05%20155002.png",
        description: "Transform raw data into meaningful information. Our intelligent data pipeline normalizes, contextualizes, and organizes data from multiple sources into a unified industrial knowledge graph.",
        highlights: [
            "Automatic Data Normalization",
            "Industrial Knowledge Graph",
            "Time-series Optimization",
            "Asset Hierarchy Mapping"
        ]
    },
    {
        id: "analyze",
        label: "Analyze",
        title: "Analyze Layer",
        icon: Brain,
        color: "purple",
        image: "https://ik.imagekit.io/rdwxgbmgm/Catylist/Screenshot%202025-12-05%20155142.png",
        description: "Leverage AI and machine learning to uncover hidden patterns and insights. Our analytics engine continuously monitors your operations, detecting anomalies and predicting potential issues before they occur.",
        highlights: [
            "Predictive Analytics",
            "Anomaly Detection",
            "Pattern Recognition",
            "Machine Learning Models"
        ]
    },
    {
        id: "solution",
        label: "Solution",
        title: "Solution Layer",
        icon: Lightbulb,
        color: "orange",
        image: "https://ik.imagekit.io/rdwxgbmgm/Catylist/Screenshot%202025-12-05%20155205.png",
        description: "Convert insights into actionable recommendations. Our solution layer generates intelligent suggestions, automates decision-making, and orchestrates responses across your industrial ecosystem.",
        highlights: [
            "Intelligent Recommendations",
            "Automated Decision Trees",
            "Workflow Orchestration",
            "Alert Management"
        ]
    },
    {
        id: "operate",
        label: "Operate",
        title: "Operate Layer",
        icon: Settings,
        color: "cyan",
        image: "https://ik.imagekit.io/rdwxgbmgm/Catylist/Screenshot%202025-12-05%20155226.png",
        description: "Execute and monitor operations in real-time. The operate layer provides comprehensive dashboards, control interfaces, and monitoring tools to keep your operations running at peak efficiency.",
        highlights: [
            "Real-time Dashboards",
            "Process Control",
            "Performance Monitoring",
            "Operational Intelligence"
        ]
    },
    {
        id: "build",
        label: "Build",
        title: "Build Layer",
        icon: Code,
        color: "pink",
        image: "https://ik.imagekit.io/rdwxgbmgm/Catylist/Screenshot%202025-12-05%20155250.png",
        description: "Extend and customize the platform to your needs. Our developer-friendly APIs, SDKs, and low-code tools enable you to build custom applications, integrations, and workflows tailored to your unique requirements.",
        highlights: [
            "RESTful APIs & SDKs",
            "Low-Code Builder",
            "Custom Integrations",
            "Plugin Architecture"
        ]
    }
];

const colorMap: Record<string, { bg: string; text: string; border: string; hover: string }> = {
    blue: { bg: "bg-blue-500/10", text: "text-blue-500", border: "border-blue-500/30", hover: "hover:bg-blue-500/20" },
    green: { bg: "bg-green-500/10", text: "text-green-500", border: "border-green-500/30", hover: "hover:bg-green-500/20" },
    purple: { bg: "bg-purple-500/10", text: "text-purple-500", border: "border-purple-500/30", hover: "hover:bg-purple-500/20" },
    orange: { bg: "bg-orange-500/10", text: "text-orange-500", border: "border-orange-500/30", hover: "hover:bg-orange-500/20" },
    cyan: { bg: "bg-cyan-500/10", text: "text-cyan-500", border: "border-cyan-500/30", hover: "hover:bg-cyan-500/20" },
    pink: { bg: "bg-pink-500/10", text: "text-pink-500", border: "border-pink-500/30", hover: "hover:bg-pink-500/20" }
};

export function ArchitectureLayers() {
    const [activeLayer, setActiveLayer] = useState("connect");
    const currentLayer = architectureLayers.find(l => l.id === activeLayer)!;
    const colors = colorMap[currentLayer.color];
    const IconComponent = currentLayer.icon;

    return (
        <div className="mb-24">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight mb-4">Platform Architecture</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    A powerful 6-layer architecture designed for seamless industrial integration
                </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-12">
                <div className="p-1.5 rounded-2xl bg-muted/50 backdrop-blur-sm border inline-flex flex-wrap justify-center gap-1">
                    {architectureLayers.map((layer, index) => {
                        const isActive = activeLayer === layer.id;
                        const layerColors = colorMap[layer.color];
                        return (
                            <button
                                key={layer.id}
                                onClick={() => setActiveLayer(layer.id)}
                                className={`relative px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${isActive
                                    ? `${layerColors.bg} ${layerColors.text} ${layerColors.border} border shadow-sm`
                                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                    }`}
                            >
                                <span className={`w-5 h-5 rounded-full ${layerColors.bg} ${layerColors.text} flex items-center justify-center text-xs font-bold`}>
                                    {index + 1}
                                </span>
                                <span className="hidden sm:inline">{layer.label}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeLayer}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                >
                    {/* Left: Large Image */}
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border aspect-video lg:aspect-[4/3]">
                        <img
                            src={currentLayer.image}
                            alt={currentLayer.title}
                            className="w-full h-full object-contain p-5 border"
                        />
                        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" /> */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${colors.bg} ${colors.text} border ${colors.border} text-sm font-semibold mb-2`}>
                                <IconComponent className="w-4 h-4" />
                                Layer {architectureLayers.findIndex(l => l.id === activeLayer) + 1}
                            </div>
                            <h3 className="text-2xl font-bold text-white">{currentLayer.title}</h3>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="space-y-6">
                        <div>
                            <h3 className={`text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-3 ${colors.text}`}>
                                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center`}>
                                    <IconComponent className="w-6 h-6" />
                                </div>
                                {currentLayer.title}
                            </h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                {currentLayer.description}
                            </p>
                        </div>

                        {/* Highlights */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {currentLayer.highlights.map((highlight, index) => (
                                <motion.div
                                    key={highlight}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`flex items-center gap-3 p-3 rounded-xl bg-muted/50 border ${colors.hover} transition-colors`}
                                >
                                    <div className={`w-2 h-2 rounded-full ${colors.bg} ${colors.text}`}>
                                        <div className={`w-full h-full rounded-full ${colors.text.replace('text-', 'bg-')}`} />
                                    </div>
                                    <span className="text-sm font-medium text-foreground">{highlight}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Layer Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
                {architectureLayers.map((layer, index) => {
                    const isActive = activeLayer === layer.id;
                    const layerColors = colorMap[layer.color];
                    return (
                        <button
                            key={layer.id}
                            onClick={() => setActiveLayer(layer.id)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${isActive
                                ? `${layerColors.text.replace('text-', 'bg-')} scale-125`
                                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                }`}
                            aria-label={`Go to ${layer.label} layer`}
                        />
                    );
                })}
            </div>
        </div>
    );
}
