"use client";

import { motion } from "framer-motion";
import { Cpu, Activity, Gauge, Monitor, Settings, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

export default function AutomationPage() {
    return (
        <div className="min-h-screen bg-background selection:bg-brand-blue/20">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
                {/* Dynamic Background */}
                <div className="absolute inset-0 bg-background">
                    <div className="absolute top-0 left-0 w-full h-[500px] bg-brand-blue/5 blur-[120px] rounded-full mix-blend-screen" />
                    <div className="absolute bottom-0 right-0 w-full h-[500px] bg-brand-green/5 blur-[120px] rounded-full mix-blend-screen" />
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
                            <span className="flex h-2 w-2 rounded-full bg-brand-green animate-pulse" />
                            <span className="text-sm font-medium text-muted-foreground">Industrial Automation 4.0</span>
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                            Powering the Future of <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-green">
                                Automated Industry
                            </span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                            Transform your manufacturing with our comprehensive suite of automation solutions. From precision control to intelligent monitoring, we engineer efficiency at every level.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact">
                                <button className="px-8 py-4 rounded-full bg-linear-to-r from-brand-blue to-brand-green text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/30 flex items-center gap-2 group">
                                    Get Started
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                            <button onClick={() => document.getElementById('technologies')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 font-semibold hover:bg-white/10 transition-colors">
                                Explore Technologies
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Technologies Grid */}
            <section id="technologies" className="py-24 relative">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 gap-24"
                    >
                        {/* PLC Section */}
                        <motion.div variants={fadeInUp} className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                            <div className="flex-1 space-y-8">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-blue-500/10 to-cyan-500/10 text-blue-500 mb-4">
                                    <Cpu className="w-8 h-8" />
                                </div>
                                <h2 className="text-4xl font-bold">Programmable Logic Controllers (PLC)</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    The brain of your automation system. Our PLC solutions offer robust reliability, high-speed processing, and seamless connectivity for complex industrial processes.
                                </p>
                                <ul className="space-y-4">
                                    {['High-speed processing', 'Modular scalability', 'IoT ready architecture', 'Advanced security protocols'].map((item) => (
                                        <li key={item} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-brand-green" />
                                            <span className="text-foreground/80">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex-1 w-full relative group">
                                <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-transparent blur-3xl opacity-20 -z-10 group-hover:opacity-30 transition-opacity duration-500" />
                                <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm aspect-video">
                                    <Image
                                        src="https://ik.imagekit.io/rdwxgbmgm/automation/Siemens-PLC.png"
                                        alt="PLC System"
                                        fill
                                        className="object-contain"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-br from-black/0 via-black/0 to-black/40 z-10" />
                                </div>
                            </div>
                        </motion.div>

                        {/* SCADA Section */}
                        <motion.div variants={fadeInUp} className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
                            <div className="flex-1 space-y-8">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-green-500/10 to-emerald-500/10 text-brand-green mb-4">
                                    <Activity className="w-8 h-8" />
                                </div>
                                <h2 className="text-4xl font-bold">SCADA Systems</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Visualize, monitor, and control your entire facility in real-time. Our SCADA solutions provide deep insights and data-driven decision making capabilities.
                                </p>
                                <ul className="space-y-4">
                                    {['Real-time visualization', 'Historical data analysis', 'Remote accessibility', 'Automated reporting'].map((item) => (
                                        <li key={item} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-brand-green" />
                                            <span className="text-foreground/80">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex-1 w-full relative group">
                                <div className="absolute inset-0 bg-linear-to-br from-brand-green/20 to-transparent blur-3xl opacity-20 -z-10 group-hover:opacity-30 transition-opacity duration-500" />
                                <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm aspect-video">
                                    <Image
                                        src="https://ik.imagekit.io/rdwxgbmgm/automation/scada.jpg"
                                        alt="SCADA System"
                                        fill
                                        className="object-contain"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-br from-black/0 via-black/0 to-black/40 z-10" />
                                </div>
                            </div>
                        </motion.div>

                        {/* VFD & SDrive Section */}
                        <motion.div variants={fadeInUp} className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                            <div className="flex-1 space-y-8">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-orange-500/10 to-red-500/10 text-orange-500 mb-4">
                                    <Gauge className="w-8 h-8" />
                                </div>
                                <h2 className="text-4xl font-bold">VFD & SDrive Technology</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Optimize motor performance and energy efficiency with our advanced Variable Frequency Drives and Soft Starters. Precise control for every application.
                                </p>
                                <ul className="space-y-4">
                                    {['Energy efficiency optimization', 'Smooth start/stop control', 'Motor protection', 'Harmonic mitigation'].map((item) => (
                                        <li key={item} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-brand-green" />
                                            <span className="text-foreground/80">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex-1 w-full relative group">
                                <div className="absolute inset-0 bg-linear-to-br from-orange-500/20 to-transparent blur-3xl opacity-20 -z-10 group-hover:opacity-30 transition-opacity duration-500" />
                                <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm aspect-video">
                                    <Image
                                        src="https://ik.imagekit.io/rdwxgbmgm/automation/DRIVE.png"
                                        alt="VFD System"
                                        fill
                                        className="object-contain"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-br from-black/0 via-black/0 to-black/40 z-10" />
                                </div>
                            </div>
                        </motion.div>

                        {/* HMI Section */}
                        <motion.div variants={fadeInUp} className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
                            <div className="flex-1 space-y-8">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-purple-500/10 to-pink-500/10 text-purple-500 mb-4">
                                    <Monitor className="w-8 h-8" />
                                </div>
                                <h2 className="text-4xl font-bold">Human Machine Interface (HMI)</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Intuitive interfaces that bridge the gap between operators and machines. High-resolution touchscreens with user-friendly dashboards.
                                </p>
                                <ul className="space-y-4">
                                    {['Multi-touch capability', 'Customizable dashboards', 'Alarm management', 'Remote access support'].map((item) => (
                                        <li key={item} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-brand-green" />
                                            <span className="text-foreground/80">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex-1 w-full relative group">
                                <div className="absolute inset-0 bg-linear-to-br from-purple-500/20 to-transparent blur-3xl opacity-20 -z-10 group-hover:opacity-30 transition-opacity duration-500" />
                                <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm aspect-video">
                                    <Image
                                        src="https://ik.imagekit.io/rdwxgbmgm/automation/HMI2.png"
                                        alt="HMI System"
                                        fill
                                        className="object-contain"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-br from-black/0 via-black/0 to-black/40 z-10" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Servo Systems Section */}
                        <motion.div variants={fadeInUp} className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                            <div className="flex-1 space-y-8">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-yellow-500/10 to-amber-500/10 text-yellow-500 mb-4">
                                    <Settings className="w-8 h-8" />
                                </div>
                                <h2 className="text-4xl font-bold">Servo Motors & Drives</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Achieve unparalleled precision and speed with our high-performance Servo systems. Perfect for robotics, cnc, and complex motion tasks.
                                </p>
                                <ul className="space-y-4">
                                    {['High-precision positioning', 'Dynamic response', 'Compact design', 'Integrated safety features'].map((item) => (
                                        <li key={item} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-brand-green" />
                                            <span className="text-foreground/80">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex-1 w-full relative group">
                                <div className="absolute inset-0 bg-linear-to-br from-yellow-500/20 to-transparent blur-3xl opacity-20 -z-10 group-hover:opacity-30 transition-opacity duration-500" />
                                <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm aspect-video">
                                    <Image
                                        src="https://ik.imagekit.io/rdwxgbmgm/automation/SIMOTICS-S-1FK7-2.png"
                                        alt="Servo Motor System"
                                        fill
                                        className="object-contain"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-br from-black/0 via-black/0 to-black/40 z-10" />
                                </div>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-muted/30" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl mx-auto space-y-8"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold">Ready to Automate?</h2>
                        <p className="text-xl text-muted-foreground">Let's discuss how our automation solutions can revolutionize your production line.</p>
                        <Link href="/contact">
                            <button className="px-10 py-5 rounded-full bg-linear-to-r from-brand-blue to-brand-green text-white font-bold text-lg hover:opacity-90 transition-all shadow-xl shadow-brand-blue/20 hover:scale-105 active:scale-95">
                                Talk to an Expert
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
