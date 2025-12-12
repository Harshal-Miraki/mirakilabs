"use client";

import { motion } from "framer-motion";
import {
    Scale,
    Globe,
    Server,
    Brain,
    Database,
    Shield,
    Package,
    AlertTriangle,
    Link2,
    CreditCard,
    XCircle,
    FileWarning,
    Gavel,
    RefreshCw,
    Mail,
    FileText,
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
        title: "Use of Our Website & Services",
        icon: Globe,
        content: "You must be at least 18 years old to use our website or engage with our products/services. You agree to use our website only for lawful purposes and in accordance with applicable laws.",
        subsections: [
            {
                title: "Prohibited Activities",
                content: "You shall not attempt to:",
                items: [
                    "Access restricted server areas or networks",
                    "Interfere with the performance/security of our systems",
                    "Copy, modify, reverse-engineer, or distribute any part of our technology, models, software, or content without written permission"
                ]
            }
        ]
    },
    {
        id: "2",
        title: "Industrial AI & Automation Services",
        icon: Brain,
        content: "Any AI models, dashboards, data pipelines, analytics engines, or automation hardware provided by Miraki Labs are for industrial and enterprise use only.",
        items: [
            "Performance, accuracy, and analytics outputs depend on data quality, operational conditions, and configurations provided by the client",
            "Miraki Labs does not guarantee absolute accuracy of predictions, preventive algorithms, or system recommendations",
            "These should be used as decision-support tools, not as sole decision-making mechanisms"
        ],
        note: "AI recommendations are advisory in nature. Final operational decisions remain the responsibility of the client."
    },
    {
        id: "3",
        title: "Data Usage & Privacy",
        icon: Database,
        content: "By using our website or services, you allow Miraki Labs to collect, store, and process data as outlined in our Privacy Policy.",
        subsections: [
            {
                title: "For Enterprise Clients",
                content: "When using our AI or automation solutions:",
                items: [
                    "Operational, machine, or process data shared with us will remain confidential",
                    "We may anonymize and aggregate data to improve our models and services, unless restricted by contract",
                    "You are responsible for ensuring that you have proper rights and permissions to share any data you provide"
                ]
            }
        ]
    },
    {
        id: "4",
        title: "Intellectual Property",
        icon: Shield,
        content: "All content on this website—including text, design, code, graphics, logos, software, AI models, dashboards, and product documentation—is owned by Miraki Labs.",
        items: [
            "You may not reproduce, distribute, sell, license, or modify any part of our content without written permission",
            "All trademarks, logos, and brand assets belong to Miraki Labs and may not be used without prior approval"
        ]
    },
    {
        id: "5",
        title: "Hardware, Software & Solutions Delivery",
        icon: Package,
        content: "Delivery timelines, support, warranty terms, and SLAs for automation hardware or industrial AI systems will be defined in individual contracts or purchase orders.",
        items: [
            "Miraki Labs is not responsible for delays caused by external suppliers, force majeure events, or client-side constraints",
            "Integration with third-party systems or PLC/SCADA environments requires proper access and cooperation from the client"
        ]
    },
    {
        id: "6",
        title: "Limitation of Liability",
        icon: AlertTriangle,
        content: "To the maximum extent permitted by law, Miraki Labs is not liable for:",
        items: [
            "Loss of production, downtime, or operational disruptions",
            "Data loss due to improper backups, power issues, network failures, or external factors",
            "Any indirect, incidental, or consequential damages",
            "Misuse of hardware or software, or improper installation carried out by third parties"
        ],
        note: "All predictions, recommendations, and analytics outputs from our AI systems are advisory. Operational decisions remain the responsibility of the client."
    },
    {
        id: "7",
        title: "Third-Party Services",
        icon: Link2,
        content: "Our solutions may integrate with third-party APIs, cloud services, hardware, or data sources.",
        note: "Miraki Labs is not responsible for failures or issues caused by third-party services."
    },
    {
        id: "8",
        title: "Payments & Billing",
        icon: CreditCard,
        items: [
            "All payments must be made as per agreed quotations, purchase orders, or invoices",
            "For subscription-based software or dashboarding services, failure to pay may result in suspension of access",
            "Taxes, customs duties, or additional charges must be borne by the client unless explicitly mentioned otherwise"
        ]
    },
    {
        id: "9",
        title: "Termination",
        icon: XCircle,
        content: "Miraki Labs reserves the right to suspend or terminate access to the website or any service if:",
        items: [
            "You violate these Terms",
            "You misuse our platform, hardware, or AI models",
            "You engage in activities that may harm our systems or reputation"
        ]
    },
    {
        id: "10",
        title: "Warranty Disclaimer",
        icon: FileWarning,
        content: "Our website and services are provided on an \"as-is\" and \"as-available\" basis. We do not guarantee:",
        items: [
            "Uninterrupted access",
            "Error-free operation",
            "Compatibility with all devices, networks, or environments"
        ],
        note: "For specific hardware or software warranties, refer to individual product contracts."
    },
    {
        id: "11",
        title: "Governing Law",
        icon: Gavel,
        content: "These Terms shall be governed by and interpreted in accordance with the laws of India.",
        note: "Any disputes will be resolved in the courts located in Mumbai, Maharashtra."
    },
    {
        id: "12",
        title: "Changes to Terms",
        icon: RefreshCw,
        content: "Miraki Labs may update or modify these Terms at any time. The latest version will always be available on this page.",
        note: "Continued use of our website or services indicates acceptance of the updated Terms."
    }
];

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-linear-to-b from-background to-muted/20">
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
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-linear-to-br from-brand-blue to-brand-green mb-6">
                            <Scale className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="bg-linear-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
                                Terms of Service
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-4">
                            Last Updated: December 2025
                        </p>
                        <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Welcome to Miraki Labs. These Terms &amp; Conditions govern your access to and use of our website and any products, software, industrial AI solutions, automation hardware, services, applications, dashboards, or platforms provided by us.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Agreement Notice */}
            <section className="container mx-auto px-4 pb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="bg-linear-to-br from-brand-blue/5 to-brand-green/5 border border-brand-blue/20 rounded-2xl p-6 md:p-8">
                        <div className="flex items-start gap-4">
                            <div className="shrink-0 w-12 h-12 rounded-xl bg-linear-to-br from-brand-blue to-brand-green flex items-center justify-center">
                                <FileText className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold mb-2">Agreement to Terms</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    By accessing or using our website or services, you agree to be bound by these Terms. If you do not agree, please discontinue using our Services.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Terms Sections */}
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
                                <div className="shrink-0 w-12 h-12 rounded-xl bg-linear-to-br from-brand-blue/10 to-brand-green/10 flex items-center justify-center">
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
                                            <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
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
                                                            <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-1" />
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
                        transition={{ duration: 0.5, delay: 1.3 }}
                        className="bg-linear-to-br from-brand-blue to-brand-green rounded-2xl p-8 md:p-10 text-white"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                                <Mail className="w-7 h-7" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold">13. Contact Information</h2>
                        </div>
                        <p className="text-white/90 text-lg mb-6">
                            For questions, support, or legal concerns, contact:
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
