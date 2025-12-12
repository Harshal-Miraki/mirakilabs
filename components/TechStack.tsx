"use client";

import { motion } from "framer-motion";
import {
    SiNextdotjs,
    SiReact,
    SiTypescript,
    SiTailwindcss,
    SiPython,
    SiTensorflow,
    SiPytorch,
    SiDocker,
    SiKubernetes,
    SiAmazon,
    SiPostgresql,
    SiMongodb,
    SiOpenai,
    SiNvidia
} from "react-icons/si";
import GradientText from "./GradientText";

const technologies = [
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "React", icon: SiReact, color: "text-blue-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "Python", icon: SiPython, color: "text-yellow-300" },
    { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-500" },
    { name: "PyTorch", icon: SiPytorch, color: "text-red-500" },
    { name: "OpenAI", icon: SiOpenai, color: "text-green-400" },
    { name: "NVIDIA", icon: SiNvidia, color: "text-green-500" },
    { name: "Docker", icon: SiDocker, color: "text-blue-500" },
    { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-600" },
    { name: "AWS", icon: SiAmazon, color: "text-yellow-500" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-300" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } as any },
};

export function TechStack() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-3xl opacity-30" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-3xl opacity-30" />
            </div>

            <div className="container mx-auto max-w-7xl px-6">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                            {/* Powered by */}
                            <GradientText
                                colors={["#0052cc", "#00cc66", "#0052cc"]}
                                animationSpeed={3}
                                showBorder={false}
                                className="inline-block ml-2 p-1 m-0"
                            >
                                Powered by
                                Modern Tech
                            </GradientText>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            We utilize the latest frameworks and AI technologies to build robust, scalable, and high-performance solutions.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6"
                >
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-sm hover:bg-white/10 dark:hover:bg-white/10 transition-colors duration-300"
                        >
                            <div className={`text-4xl mb-3 ${tech.color} drop-shadow-lg`}>
                                <tech.icon />
                            </div>
                            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                                {tech.name}
                            </span>

                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
