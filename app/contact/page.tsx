"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    MapPin,
    Mail,
    Phone,
    Send,
    MessageSquare,
    User,
    CheckCircle,
    Loader2
} from "lucide-react";
import OfficeTabs from "@/components/OfficeTabs";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // This would function effectively with the same Google Script or a similar backend
    // For now, we simulate the submission for the UI demo
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-linear-to-b from-background to-muted/20 flex items-center justify-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center max-w-lg"
                >
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-linear-to-br from-brand-blue/20 to-brand-green/20 mb-8">
                        <CheckCircle className="w-12 h-12 text-brand-blue" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="bg-linear-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
                            Message Received!
                        </span>
                    </h1>
                    <p className="text-lg text-muted-foreground mb-8">
                        Thanks for reaching out. We&apos;ll get back to you as soon as possible.
                    </p>
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-brand-blue to-brand-green text-white font-semibold hover:opacity-90 transition-opacity"
                    >
                        Back to Home
                    </a>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-linear-to-b from-background to-muted/20">
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-20 left-1/3 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/3 w-[500px] h-[400px] bg-brand-green/10 rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="bg-linear-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
                                Get in Touch
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                            Have a question about our industrial AI solutions? We&apos;re here to help you transform your business.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="container mx-auto px-4 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Contact Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="bg-card border border-border/50 p-6 rounded-2xl flex items-start gap-4 hover:border-brand-blue/30 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-brand-blue/10 to-brand-green/10 flex items-center justify-center shrink-0">
                                <Mail className="w-6 h-6 text-brand-blue" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                                <p className="text-muted-foreground text-sm mb-2">For sales and general inquiries</p>
                                <a href="mailto:sales@miraki.in" className="text-brand-blue font-medium hover:underline">sales@miraki.in</a>
                            </div>
                        </div>

                        <div className="bg-card border border-border/50 p-6 rounded-2xl flex items-start gap-4 hover:border-brand-blue/30 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-brand-blue/10 to-brand-green/10 flex items-center justify-center shrink-0">
                                <MapPin className="w-6 h-6 text-brand-blue" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                                <p className="text-muted-foreground text-sm mb-2">Our headquarters</p>
                                <p className="text-foreground font-medium">Navi Mumbai, Maharashtra, India</p>
                            </div>
                        </div>

                        <div className="bg-card border border-border/50 p-6 rounded-2xl flex items-start gap-4 hover:border-brand-blue/30 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-brand-blue/10 to-brand-green/10 flex items-center justify-center shrink-0">
                                <Phone className="w-6 h-6 text-brand-blue" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                                <p className="text-muted-foreground text-sm mb-2">Mon-Fri from 9am to 6pm</p>
                                <a href="tel:+919876543210" className="text-brand-blue font-medium hover:underline">+91 98765 43210</a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:col-span-2 bg-card border border-border/50 rounded-2xl p-6 md:p-8"
                    >
                        <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium flex items-center gap-2">
                                        <User className="w-4 h-4 text-muted-foreground" />
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium flex items-center gap-2">
                                        <Mail className="w-4 h-4 text-muted-foreground" />
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="john@company.com"
                                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium flex items-center gap-2">
                                    <MessageSquare className="w-4 h-4 text-muted-foreground" />
                                    Subject
                                </label>
                                <select className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all">
                                    <option>General Inquiry</option>
                                    <option>Sales & Partnerships</option>
                                    <option>Technical Support</option>
                                    <option>Demo Request</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium flex items-center gap-2">
                                    <MessageSquare className="w-4 h-4 text-muted-foreground" />
                                    Message
                                </label>
                                <textarea
                                    rows={5}
                                    required
                                    placeholder="How can we help you?"
                                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all resize-none"
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                className="w-full py-4 rounded-xl bg-linear-to-r from-brand-blue to-brand-green text-white font-semibold text-lg flex items-center justify-center gap-3 hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Sending Message...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
                <OfficeTabs/>
            </section>
        </div>
    );
}
