"use client";

import { motion } from "framer-motion";
import {
    Shield,
    Database,
    Lock,
    Cookie,
    Clock,
    UserCheck,
    Globe,
    RefreshCw,
    Mail,
    Server,
    Eye,
    FileText,
    Users,
    AlertCircle,
    CheckCircle,
    LucideIcon
} from "lucide-react";

interface Subsection {
    title: string;
    content?: string;
    items?: string[];
    note?: string;
}

interface Section {
    id: string;
    title: string;
    icon: LucideIcon;
    content?: string;
    items?: string[];
    note?: string;
    subsections?: Subsection[];
}

const sections: Section[] = [
    {
        id: "1",
        title: "Information We Collect",
        icon: Database,
        subsections: [
            {
                title: "1.1 Personal Information",
                content: "We may collect the following personal details when you use our website or contact us:",
                items: [
                    "Name",
                    "Email address",
                    "Phone number",
                    "Company name & designation",
                    "Business-related communication",
                    "Inquiry or support messages",
                    "IP address & device details",
                    "Location (approximate)"
                ],
                note: "We do not collect sensitive personal data unless explicitly required and permitted by law."
            },
            {
                title: "1.2 Industrial / Operational Data (For Clients)",
                content: "When using our Industrial AI or Automation solutions, we may collect:",
                items: [
                    "Machine parameters",
                    "PLC/SCADA data",
                    "Production, process & operational data",
                    "Energy consumption data",
                    "Maintenance logs",
                    "Sensor data (temperature, vibration, gas, load, etc.)",
                    "AI model inputs/outputs",
                    "Dashboard usage logs"
                ],
                note: "This data is used strictly for providing, improving, and supporting our solutions."
            },
            {
                title: "1.3 Automatically Collected Information",
                content: "When you visit our website, we may automatically collect:",
                items: [
                    "Browser type",
                    "Operating system",
                    "Clickstream data",
                    "Session behavior (pages visited, time spent)",
                    "Cookies & tracking pixels"
                ],
                note: "This helps improve website performance and user experience."
            }
        ]
    },
    {
        id: "2",
        title: "How We Use Your Information",
        icon: Eye,
        subsections: [
            {
                title: "2.1 To Provide and Enhance Services",
                items: [
                    "Deploying AI models, automation systems, hardware integration",
                    "Improving performance, prediction accuracy & analytics",
                    "System optimization and troubleshooting",
                    "Customizing dashboards and software features"
                ]
            },
            {
                title: "2.2 Communication",
                items: [
                    "Responding to inquiries, demo requests, and support tickets",
                    "Sending proposals, quotes, contract-related communication",
                    "Sharing updates regarding services or maintenance"
                ]
            },
            {
                title: "2.3 Analytics & Research",
                items: [
                    "Improving website performance",
                    "Enhancing AI models and industrial algorithms",
                    "Conducting R&D for better industrial outcomes"
                ]
            },
            {
                title: "2.4 Marketing (With Consent)",
                items: [
                    "Email newsletters",
                    "Updates about new products or features",
                    "Case studies, whitepapers & industrial insights"
                ],
                note: "We will never sell your data to third parties."
            }
        ]
    },
    {
        id: "3",
        title: "How We Store & Protect Your Data",
        icon: Lock,
        content: "We implement strong security measures to protect your information, including:",
        items: [
            "Encrypted data transmission (SSL/HTTPS)",
            "Secure storage systems with restricted access",
            "Role-based access control (RBAC) for internal teams",
            "Network-level security for deployed hardware and cloud platforms",
            "Regular security audits",
            "Backup and disaster recovery mechanisms"
        ],
        note: "However, no system can guarantee 100% security. We work continuously to minimize risks."
    },
    {
        id: "4",
        title: "Data Sharing & Disclosure",
        icon: Users,
        subsections: [
            {
                title: "4.1 With Your Consent",
                content: "For collaborative projects, system integrations, or analytics sharing."
            },
            {
                title: "4.2 With Service Providers",
                content: "Trusted third parties who help us with:",
                items: [
                    "Cloud hosting",
                    "AI compute resources",
                    "Analytics tools",
                    "Email communication",
                    "Hardware logistics"
                ],
                note: "All partners are bound by confidentiality agreements."
            },
            {
                title: "4.3 Compliance with Law",
                content: "We may disclose information if required by:",
                items: [
                    "Government authorities",
                    "Court orders",
                    "Legal obligations"
                ]
            },
            {
                title: "4.4 Internal R&D (Anonymized Data)",
                content: "We may anonymize client data to improve model accuracy and performance.",
                note: "No personally identifiable information or sensitive operational data is ever shared publicly."
            }
        ]
    },
    {
        id: "5",
        title: "Cookies & Tracking",
        icon: Cookie,
        content: "Miraki Labs uses cookies to:",
        items: [
            "Improve browsing experience",
            "Analyze website traffic",
            "Tailor content to user preferences"
        ],
        note: "You may disable cookies in your browser settings, but some website features may not function properly."
    },
    {
        id: "6",
        title: "Data Retention",
        icon: Clock,
        content: "We retain data only as long as necessary to:",
        items: [
            "Provide services",
            "Fulfill legal obligations",
            "Maintain business records",
            "Improve product performance"
        ],
        note: "Once data is no longer required, we securely delete or anonymize it."
    },
    {
        id: "7",
        title: "Data Rights (Based on Applicable Law)",
        icon: UserCheck,
        content: "Depending on your location, you may have rights such as:",
        items: [
            "Right to access your data",
            "Right to correct inaccuracies",
            "Right to request deletion",
            "Right to withdraw consent",
            "Right to data portability",
            "Right to restrict processing"
        ],
        note: "To exercise these rights, email us at info@mirakilabs.com."
    },
    {
        id: "8",
        title: "Children's Privacy",
        icon: AlertCircle,
        content: "Our services are intended for businesses and professionals.",
        note: "We do not knowingly collect personal information from individuals under 18 years of age."
    },
    {
        id: "9",
        title: "International Data Transfers",
        icon: Globe,
        content: "For clients outside India, your data may be processed in regions where our servers or partners operate.",
        note: "We ensure compliance with applicable international data protection standards."
    },
    {
        id: "10",
        title: "Updates to This Privacy Policy",
        icon: RefreshCw,
        content: "Miraki Labs may update this Privacy Policy from time to time.",
        note: "Changes will be posted on this page with a revised \"Last Updated\" date. Continued use of our services means you accept the updated policy."
    }
];

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-20 left-1/4 w-72 h-72 bg-brand-blue/10 rounded-full blur-3xl" />
                    <div className="absolute top-40 right-1/4 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-green mb-6">
                            <Shield className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
                                Privacy Policy
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-4">
                            Last Updated: December 2025
                        </p>
                        <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Miraki Labs (&quot;Company&quot;, &quot;We&quot;, &quot;Us&quot;, &quot;Our&quot;) is committed to protecting the privacy of our website visitors, clients, users, partners, and all individuals (&quot;You&quot;, &quot;Your&quot;).
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Introduction Card */}
            <section className="container mx-auto px-4 pb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="bg-gradient-to-br from-brand-blue/5 to-brand-green/5 border border-brand-blue/20 rounded-2xl p-6 md:p-8">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue to-brand-green flex items-center justify-center">
                                <FileText className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold mb-2">About This Policy</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    This Privacy Policy explains how we collect, use, store, process, and protect your personal data and industrial/operational data when you use our website (mirakilabs.com) or any of our industrial AI, automation hardware, dashboards, or software platforms (&quot;Services&quot;).
                                </p>
                                <p className="text-muted-foreground leading-relaxed mt-3">
                                    By accessing our website or using our Services, you agree to the practices described in this Privacy Policy.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Policy Sections */}
            <section className="container mx-auto px-4 pb-20">
                <div className="max-w-4xl mx-auto space-y-8">
                    {sections.map((section, index) => (
                        <motion.div
                            key={section.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            {/* Section Header */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-green/10 flex items-center justify-center">
                                    <section.icon className="w-6 h-6 text-brand-blue" />
                                </div>
                                <h2 className="text-xl md:text-2xl font-bold">
                                    {section.id}. {section.title}
                                </h2>
                            </div>

                            {/* Section Content */}
                            {section.content && (
                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                    {section.content}
                                </p>
                            )}

                            {/* Direct Items */}
                            {section.items && !section.subsections && (
                                <ul className="space-y-2 mb-4">
                                    {section.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                                            <span className="text-foreground/80">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* Subsections */}
                            {section.subsections && (
                                <div className="space-y-6">
                                    {section.subsections.map((sub, subIdx) => (
                                        <div key={subIdx} className="pl-4 border-l-2 border-brand-blue/20">
                                            <h3 className="font-semibold text-lg mb-2">{sub.title}</h3>
                                            {sub.content && (
                                                <p className="text-muted-foreground mb-3">{sub.content}</p>
                                            )}
                                            {sub.items && (
                                                <ul className="space-y-2 mb-3">
                                                    {sub.items.map((item, itemIdx) => (
                                                        <li key={itemIdx} className="flex items-start gap-3">
                                                            <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-1" />
                                                            <span className="text-foreground/80 text-sm">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                            {sub.note && (
                                                <p className="text-sm text-brand-blue bg-brand-blue/5 rounded-lg px-4 py-2 mt-2">
                                                    {sub.note}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Section Note */}
                            {section.note && !section.subsections && (
                                <p className="text-sm text-brand-blue bg-brand-blue/5 rounded-lg px-4 py-3 mt-4">
                                    {section.note}
                                </p>
                            )}
                        </motion.div>
                    ))}

                    {/* Contact Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.1 }}
                        className="bg-gradient-to-br from-brand-blue to-brand-green rounded-2xl p-8 md:p-10 text-white"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                                <Mail className="w-7 h-7" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold">11. Contact Information</h2>
                        </div>
                        <p className="text-white/90 text-lg mb-6">
                            For queries, requests, or concerns regarding this Privacy Policy:
                        </p>
                        <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                            <p className="text-xl font-semibold mb-3">Miraki Labs</p>
                            <div className="space-y-2">
                                <p className="flex items-center gap-2">
                                    <Mail className="w-5 h-5" />
                                    <a href="mailto:sales@miraki.in" className="hover:underline">sales@miraki.in</a>
                                </p>
                                <p className="flex items-center gap-2">
                                    <Globe className="w-5 h-5" />
                                    <a href="https://mirakilabs.com" target="_blank" rel="noopener noreferrer" className="hover:underline">mirakilabs.com</a>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}