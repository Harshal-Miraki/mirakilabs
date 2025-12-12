"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Briefcase,
    User,
    Mail,
    Phone,
    MapPin,
    Calendar,
    Building2,
    Clock,
    DollarSign,
    Link2,
    FileText,
    Send,
    CheckCircle,
    Loader2,
    Sparkles,
    Heart,
    Rocket,
    Users,
    Target,
    Zap,
    ChevronLeft,
    ChevronRight,
    Check,
    ArrowRight
} from "lucide-react";
import JobModal from "@/components/ui/JobModal";
import { jobOpenings } from "@/lib/job-openings";
import Link from "next/link";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz8IamTZOMz3raarzJTABevC5WE3M7sXnJ2sBYcfGL28CS7nnls8QyFzzqP0RJk0gkl/exec";

const positions = [
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "AI/ML Engineer",
    "Data Scientist",
    "DevOps Engineer",
    "Product Manager",
    "UI/UX Designer",
    "Sales Executive",
    "Marketing Specialist",
    "Technical Writer",
    "Internship",
    "Other"
];

const noticePeriods = [
    "Immediate",
    "15 Days",
    "30 Days",
    "45 Days",
    "60 Days",
    "90 Days",
    "Currently Serving Notice"
];

const benefits = [
    {
        icon: Rocket,
        title: "Innovation First",
        description: "Work on cutting-edge Industrial AI & Automation technologies",
        className: "md:col-span-2"
    },
    {
        icon: Users,
        title: "Collaborative Culture",
        description: "Join a team of passionate engineers and problem solvers",
        className: ""
    },
    {
        icon: Target,
        title: "Growth Opportunities",
        description: "Continuous learning and career advancement paths",
        className: ""
    },
    {
        icon: Zap,
        title: "Impact at Scale",
        description: "Your work directly impacts major industries globally",
        className: "md:col-span-2"
    }
];

interface FormData {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    dob: string;
    whyJoin: string;
    position: string;
    experience: string;
    currentCompany: string;
    currentTitle: string;
    noticePeriod: string;
    currentCTC: string;
    expectedCTC: string;
    resumeLink: string;
    portfolioLink: string;
}

interface FormErrors {
    [key: string]: string;
}

export default function CareersPage() {
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        dob: "",
        whyJoin: "",
        position: "",
        experience: "",
        currentCompany: "",
        currentTitle: "",
        noticePeriod: "",
        currentCTC: "",
        expectedCTC: "",
        resumeLink: "",
        portfolioLink: ""
    });

    const [fieldErrors, setFieldErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [selectedJob, setSelectedJob] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);

    const formSteps = [
        { id: 1, title: "Personal", icon: User },
        { id: 2, title: "Job Details", icon: Briefcase },
        { id: 3, title: "Salary", icon: DollarSign },
        { id: 4, title: "Documents", icon: FileText },
        { id: 5, title: "About You", icon: Heart }
    ];

    const totalSteps = formSteps.length;

    // Validation function
    const validateStep = (step: number): boolean => {
        const errors: FormErrors = {};

        if (step === 1) {
            if (!formData.fullName.trim()) {
                errors.fullName = "Full name is required";
            }
            if (!formData.email.trim()) {
                errors.email = "Email is required";
            } else if (!formData.email.includes("@")) {
                errors.email = "Please enter a valid email";
            }
            if (!formData.phone.trim()) {
                errors.phone = "Phone number is required";
            }
            if (!formData.location.trim()) {
                errors.location = "Location is required";
            }
            if (!formData.dob) {
                errors.dob = "Date of birth is required";
            }
        }

        if (step === 2) {
            if (!formData.position) {
                errors.position = "Position is required";
            }
            if (!formData.experience.trim()) {
                errors.experience = "Experience is required";
            }
            if (!formData.noticePeriod) {
                errors.noticePeriod = "Notice period is required";
            }
        }

        if (step === 3) {
            if (!formData.currentCTC.trim()) {
                errors.currentCTC = "Current CTC is required";
            }
            if (!formData.expectedCTC.trim()) {
                errors.expectedCTC = "Expected CTC is required";
            }
        }

        if (step === 4) {
            if (!formData.resumeLink.trim()) {
                errors.resumeLink = "Resume link is required";
            } else if (!isValidUrl(formData.resumeLink)) {
                errors.resumeLink = "Please enter a valid URL";
            }
        }

        if (step === 5) {
            if (!formData.whyJoin.trim()) {
                errors.whyJoin = "Please tell us why you want to join";
            } else if (formData.whyJoin.trim().length < 20) {
                errors.whyJoin = "Please write at least 20 characters";
            }
        }

        setFieldErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const isValidUrl = (url: string): boolean => {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    };

    const nextStep = () => {
        if (validateStep(currentStep)) {
            if (currentStep < totalSteps) {
                setCurrentStep(prev => prev + 1);
                setError("");
            }
        } else {
            setError("Please fill in all required fields correctly");
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(prev => prev - 1);
            setFieldErrors({});
            setError("");
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (fieldErrors[name]) {
            setFieldErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const openJobModal = (job: any) => {
        setSelectedJob(job);
        setIsModalOpen(true);
    };

    const closeJobModal = () => {
        setIsModalOpen(false);
        setSelectedJob(null);
    };

    const handleApplyClick = () => {
        closeJobModal();
        const formElement = document.getElementById('application-form');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateStep(currentStep)) {
            setError("Please fill in all required fields correctly");
            return;
        }

        setIsSubmitting(true);
        setError("");

        try {
            const payload = {
                fullName: formData.fullName,
                email: formData.email,
                phone: formData.phone,
                location: formData.location,
                dob: formData.dob,
                whyWork: formData.whyJoin,
                position: formData.position,
                experience: formData.experience,
                currentCompany: formData.currentCompany,
                currentTitle: formData.currentTitle,
                noticePeriod: formData.noticePeriod,
                currentCTC: formData.currentCTC,
                expectedCTC: formData.expectedCTC,
                resumeLink: formData.resumeLink,
                portfolioLink: formData.portfolioLink
            };

            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload)
            });

            setIsSubmitted(true);
        } catch (err) {
            setError("Something went wrong. Please try again later.");
            console.error("Form submission error:", err);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 flex items-center justify-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center max-w-lg"
                >
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-brand-green/20 to-brand-blue/20 mb-8">
                        <CheckCircle className="w-12 h-12 text-brand-green" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
                            Application Submitted!
                        </span>
                    </h1>
                    <p className="text-lg text-muted-foreground mb-8">
                        Thank you for your interest in joining Miraki Labs. We&apos;ve received your application and will review it carefully. Our team will get back to you soon!
                    </p>
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-green text-white font-semibold hover:opacity-90 transition-opacity"
                    >
                        Back to Home
                    </a>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
            {/* Hero Section */}
            <section className="relative pt-32 pb-32 overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-brand-blue/20 via-background to-background" />
                <div className="absolute inset-0 -z-10">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-blue/30 rounded-full blur-[128px]"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 4
                        }}
                        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-green/30 rounded-full blur-[128px]"
                    />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center max-w-5xl mx-auto"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8 hover:bg-white/10 transition-colors cursor-default"
                        >
                            <Sparkles className="w-4 h-4 text-brand-blue" />
                            <span className="text-sm font-medium bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
                                We are expanding our team
                            </span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-tight">
                            Shape the Future of <br />
                            <span className="bg-gradient-to-r from-brand-blue via-brand-green to-brand-blue bg-clip-text text-transparent bg-300% animate-gradient">
                                Industrial AI
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
                            Join a team of visionaries, engineers, and problem solvers building the next generation of automation technology.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                    const element = document.getElementById('open-positions');
                                    element?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="px-8 py-4 rounded-full bg-foreground text-background font-bold text-lg hover:opacity-90 transition-opacity flex items-center gap-2"
                            >
                                View Open Positions
                                <ChevronRight className="w-5 h-5" />
                            </motion.button>
                            <Link href="/about-us">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 font-bold text-lg hover:bg-white/10 transition-colors"
                                >
                                    Read Our Story
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="container mx-auto px-4 pb-32">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Join Miraki Labs?</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            We offer more than just a job. We offer a platform to build, innovate, and grow.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                className={`group relative overflow-hidden p-8 rounded-3xl bg-white/50 dark:bg-card/30 backdrop-blur-md border border-black/5 dark:border-white/10 hover:border-brand-blue/50 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-blue/10 ${benefit.className}`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-blue/10 to-brand-green/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-brand-blue/20">
                                        <benefit.icon className="w-7 h-7 text-brand-blue group-hover:text-brand-green transition-colors duration-500" />
                                    </div>
                                    <h3 className="font-bold text-2xl mb-3 group-hover:text-brand-blue transition-colors duration-300">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-muted-foreground text-lg leading-relaxed">{benefit.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Openings Section */}
            <section className="container mx-auto px-4 pb-32" id="open-positions">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-blue/10 to-brand-green/10 border border-brand-blue/20 mb-4">
                                <Briefcase className="w-4 h-4 text-brand-blue" />
                                <span className="text-sm font-medium text-brand-blue">Current Openings</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold">
                                Join Our World-Class Team
                            </h2>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        {jobOpenings && jobOpenings.length > 0 ? (
                            jobOpenings.map((job, index) => (
                                <motion.div
                                    key={job.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                    onClick={() => openJobModal(job)}
                                    className="group relative p-6 md:p-8 rounded-2xl bg-card/40 backdrop-blur-sm border border-white/5 hover:border-brand-blue/30 transition-all duration-300 cursor-pointer overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="text-xl md:text-2xl font-bold group-hover:text-brand-blue transition-colors duration-300">
                                                    {job.title}
                                                </h3>
                                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-brand-blue/10 text-brand-blue border border-brand-blue/20">
                                                    {job.department || "General"}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                <span className="flex items-center gap-1.5">
                                                    <MapPin className="w-4 h-4" />
                                                    {job.location || "Not specified"}
                                                </span>
                                                <span className="flex items-center gap-1.5">
                                                    <Clock className="w-4 h-4" />
                                                    {job.type || "Full Time"}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 group-hover:rotate-[-45deg]">
                                                <ArrowRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <div className="text-center py-12">
                                <p className="text-muted-foreground text-lg">No job openings available at the moment.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Application Form Section */}
            <section className="container mx-auto px-4 pb-32" id="application-form">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-card/10 backdrop-blur-xl shadow-2xl shadow-brand-blue/5"
                    >
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[100px] -z-10" />
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-green/10 rounded-full blur-[100px] -z-10" />

                        <div className="p-8 md:p-12 lg:p-16">
                            {/* Form Header */}
                            <div className="text-center mb-12">

                                <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Apply?</h2>
                                <p className="text-xl text-muted-foreground">Take the first step towards your future at Miraki Labs.</p>
                            </div>

                            {/* Step Indicator */}
                            <div className="mb-12">
                                <div className="flex items-center justify-between relative max-w-3xl mx-auto">
                                    <div className="absolute top-6 left-0 right-0 h-1 bg-white/5 rounded-full mx-10">
                                        <div
                                            className="h-full bg-gradient-to-r from-brand-blue to-brand-green rounded-full transition-all duration-500"
                                            style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
                                        />
                                    </div>

                                    {formSteps.map((step) => (
                                        <div key={step.id} className="flex flex-col items-center relative z-10 group cursor-default">
                                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 border-[3px] ${currentStep > step.id
                                                ? 'bg-brand-green border-brand-green text-white scale-110'
                                                : currentStep === step.id
                                                    ? 'bg-background border-brand-blue text-brand-blue shadow-lg shadow-brand-blue/20 scale-125'
                                                    : 'bg-background border-white/10 text-muted-foreground'
                                                }`}>
                                                {currentStep > step.id ? (
                                                    <Check className="w-6 h-6" />
                                                ) : (
                                                    <step.icon className={`w-5 h-5 ${currentStep === step.id ? 'animate-pulse' : ''}`} />
                                                )}
                                            </div>
                                            <span className={`text-xs mt-3 font-semibold uppercase tracking-wider transition-colors duration-300 hidden sm:block ${currentStep >= step.id ? 'text-foreground' : 'text-muted-foreground/50'
                                                }`}>
                                                {step.title}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Step 1: Personal Information */}
                                {currentStep === 1 && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="bg-card border border-border/50 rounded-2xl p-6 md:p-8"
                                    >
                                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                            <User className="w-5 h-5 text-brand-blue" />
                                            Personal Information
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium flex items-center gap-2">
                                                    <User className="w-4 h-4 text-muted-foreground" />
                                                    Full Name <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="fullName"
                                                    value={formData.fullName}
                                                    onChange={handleChange}
                                                    placeholder="John Doe"
                                                    className={`w-full px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all ${fieldErrors.fullName ? 'border-red-500 ring-2 ring-red-500/20' : 'border-border'}`}
                                                />
                                                {fieldErrors.fullName && (
                                                    <p className="text-red-500 text-xs mt-1">{fieldErrors.fullName}</p>
                                                )}
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium flex items-center gap-2">
                                                    <Mail className="w-4 h-4 text-muted-foreground" />
                                                    Email Address <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="john@example.com"
                                                    className={`w-full px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all ${fieldErrors.email ? 'border-red-500 ring-2 ring-red-500/20' : 'border-border'}`}
                                                />
                                                {fieldErrors.email && (
                                                    <p className="text-red-500 text-xs mt-1">{fieldErrors.email}</p>
                                                )}
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium flex items-center gap-2">
                                                    <Phone className="w-4 h-4 text-muted-foreground" />
                                                    Phone Number <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="+91 98765 43210"
                                                    className={`w-full px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all ${fieldErrors.phone ? 'border-red-500 ring-2 ring-red-500/20' : 'border-border'}`}
                                                />
                                                {fieldErrors.phone && (
                                                    <p className="text-red-500 text-xs mt-1">{fieldErrors.phone}</p>
                                                )}
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium flex items-center gap-2">
                                                    <MapPin className="w-4 h-4 text-muted-foreground" />
                                                    Current Location <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="location"
                                                    value={formData.location}
                                                    onChange={handleChange}
                                                    placeholder="Mumbai, India"
                                                    className={`w-full px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all ${fieldErrors.location ? 'border-red-500 ring-2 ring-red-500/20' : 'border-border'}`}
                                                />
                                                {fieldErrors.location && (
                                                    <p className="text-red-500 text-xs mt-1">{fieldErrors.location}</p>
                                                )}
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium flex items-center gap-2">
                                                    <Calendar className="w-4 h-4 text-muted-foreground" />
                                                    Date of Birth <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="date"
                                                    name="dob"
                                                    value={formData.dob}
                                                    onChange={handleChange}
                                                    className={`w-full px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all ${fieldErrors.dob ? 'border-red-500 ring-2 ring-red-500/20' : 'border-border'}`}
                                                />
                                                {fieldErrors.dob && (
                                                    <p className="text-red-500 text-xs mt-1">{fieldErrors.dob}</p>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {/* Step 2: Job Application Details */}
                                {currentStep === 2 && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="bg-card border border-border/50 rounded-2xl p-6 md:p-8"
                                    >
                                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                            <Briefcase className="w-5 h-5 text-brand-blue" />
                                            Job Application Details
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium flex items-center gap-2">
                                                    <Target className="w-4 h-4 text-muted-foreground" />
                                                    Position Applied For <span className="text-red-500">*</span>
                                                </label>
                                                <select
                                                    name="position"
                                                    value={formData.position}
                                                    onChange={handleChange}
                                                    className={`w-full px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all ${fieldErrors.position ? 'border-red-500 ring-2 ring-red-500/20' : 'border-border'}`}
                                                >
                                                    <option value="">Select a position</option>
                                                    {positions.map(pos => (
                                                        <option key={pos} value={pos}>{pos}</option>
                                                    ))}
                                                </select>
                                                {fieldErrors.position && (
                                                    <p className="text-red-500 text-xs mt-1">{fieldErrors.position}</p>
                                                )}
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium flex items-center gap-2">
                                                    <Clock className="w-4 h-4 text-muted-foreground" />
                                                    Years of Experience <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="experience"
                                                    value={formData.experience}
                                                    onChange={handleChange}
                                                    placeholder="e.g., 3 years"
                                                    className={`w-full px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all ${fieldErrors.experience ? 'border-red-500 ring-2 ring-red-500/20' : 'border-border'}`}
                                                />
                                                {fieldErrors.experience && (
                                                    <p className="text-red-500 text-xs mt-1">{fieldErrors.experience}</p>
                                                )}
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium flex items-center gap-2">
                                                    <Building2 className="w-4 h-4 text-muted-foreground" />
                                                    Current Company
                                                </label>
                                                <input
                                                    type="text"
                                                    name="currentCompany"
                                                    value={formData.currentCompany}
                                                    onChange={handleChange}
                                                    placeholder="Company name"
                                                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium flex items-center gap-2">
                                                    <Briefcase className="w-4 h-4 text-muted-foreground" />
                                                    Current Job Title
                                                </label>
                                                <input
                                                    type="text"
                                                    name="currentTitle"
                                                    value={formData.currentTitle}
                                                    onChange={handleChange}
                                                    placeholder="e.g., Software Developer"
                                                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium flex items-center gap-2">
                                                    <Clock className="w-4 h-4 text-muted-foreground" />
                                                    Notice Period <span className="text-red-500">*</span>
                                                </label>
                                                <select
                                                    name="noticePeriod"
                                                    value={formData.noticePeriod}
                                                    onChange={handleChange}
                                                    className={`w-full px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all ${fieldErrors.noticePeriod ? 'border-red-500 ring-2 ring-red-500/20' : 'border-border'}`}
                                                >
                                                    <option value="">Select notice period</option>
                                                    {noticePeriods.map(period => (
                                                        <option key={period} value={period}>{period}</option>
                                                    ))}
                                                </select>
                                                {fieldErrors.noticePeriod && (
                                                    <p className="text-red-500 text-xs mt-1">{fieldErrors.noticePeriod}</p>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {/* Step 3: Compensation */}
                                {currentStep === 3 && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="bg-card border border-border/50 rounded-2xl p-6 md:p-8"
                                    >
                                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                            <DollarSign className="w-5 h-5 text-brand-blue" />
                                            Compensation Details
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium flex items-center gap-2">
                                                    <DollarSign className="w-4 h-4 text-muted-foreground" />
                                                    Current CTC (LPA) <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="currentCTC"
                                                    value={formData.currentCTC}
                                                    onChange={handleChange}
                                                    placeholder="e.g., 8 LPA"
                                                    className={`w-full px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all ${fieldErrors.currentCTC ? 'border-red-500 ring-2 ring-red-500/20' : 'border-border'}`}
                                                />
                                                {fieldErrors.currentCTC && (
                                                    <p className="text-red-500 text-xs mt-1">{fieldErrors.currentCTC}</p>
                                                )}
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium flex items-center gap-2">
                                                    <DollarSign className="w-4 h-4 text-muted-foreground" />
                                                    Expected CTC (LPA) <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="expectedCTC"
                                                    value={formData.expectedCTC}
                                                    onChange={handleChange}
                                                    placeholder="e.g., 12 LPA"
                                                    className={`w-full px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all ${fieldErrors.expectedCTC ? 'border-red-500 ring-2 ring-red-500/20' : 'border-border'}`}
                                                />
                                                {fieldErrors.expectedCTC && (
                                                    <p className="text-red-500 text-xs mt-1">{fieldErrors.expectedCTC}</p>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {/* Step 4: Documents & Links */}
                                {currentStep === 4 && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="bg-card border border-border/50 rounded-2xl p-6 md:p-8"
                                    >
                                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                            <FileText className="w-5 h-5 text-brand-blue" />
                                            Documents & Links
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium flex items-center gap-2">
                                                    <FileText className="w-4 h-4 text-muted-foreground" />
                                                    Resume Link (Google Drive/Dropbox) <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="url"
                                                    name="resumeLink"
                                                    value={formData.resumeLink}
                                                    onChange={handleChange}
                                                    placeholder="https://drive.google.com/..."
                                                    className={`w-full px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all ${fieldErrors.resumeLink ? 'border-red-500 ring-2 ring-red-500/20' : 'border-border'}`}
                                                />
                                                {fieldErrors.resumeLink && (
                                                    <p className="text-red-500 text-xs mt-1">{fieldErrors.resumeLink}</p>
                                                )}
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium flex items-center gap-2">
                                                    <Link2 className="w-4 h-4 text-muted-foreground" />
                                                    Portfolio/LinkedIn Link
                                                </label>
                                                <input
                                                    type="url"
                                                    name="portfolioLink"
                                                    value={formData.portfolioLink}
                                                    onChange={handleChange}
                                                    placeholder="https://linkedin.com/in/..."
                                                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all"
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {/* Step 5: About You */}
                                {currentStep === 5 && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="bg-card border border-border/50 rounded-2xl p-6 md:p-8"
                                    >
                                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                            <Heart className="w-5 h-5 text-brand-blue" />
                                            Tell Us About Yourself
                                        </h3>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium flex items-center gap-2">
                                                Why do you want to work with us? <span className="text-red-500">*</span>
                                            </label>
                                            <textarea
                                                name="whyJoin"
                                                value={formData.whyJoin}
                                                onChange={handleChange}
                                                rows={5}
                                                placeholder="Share what excites you about Miraki Labs and how you can contribute to our mission..."
                                                className={`w-full px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all resize-none ${fieldErrors.whyJoin ? 'border-red-500 ring-2 ring-red-500/20' : 'border-border'}`}
                                            />
                                            {fieldErrors.whyJoin && (
                                                <p className="text-red-500 text-xs mt-1">{fieldErrors.whyJoin}</p>
                                            )}
                                        </div>
                                    </motion.div>
                                )}

                                {/* Error Message */}
                                {error && (
                                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm">
                                        {error}
                                    </div>
                                )}

                                {/* Navigation Buttons */}
                                <div className="flex items-center justify-between gap-4 pt-4">
                                    <motion.button
                                        type="button"
                                        onClick={prevStep}
                                        disabled={currentStep === 1}
                                        whileHover={{ scale: currentStep === 1 ? 1 : 1.02 }}
                                        whileTap={{ scale: currentStep === 1 ? 1 : 0.98 }}
                                        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${currentStep === 1
                                            ? 'bg-muted text-muted-foreground cursor-not-allowed opacity-50'
                                            : 'bg-card border border-border hover:border-brand-blue text-foreground hover:text-brand-blue'
                                            }`}
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                        Previous
                                    </motion.button>

                                    {currentStep < totalSteps ? (
                                        <motion.button
                                            type="button"
                                            onClick={nextStep}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-green text-white font-semibold shadow-lg shadow-brand-blue/20 hover:opacity-90 transition-opacity"
                                        >
                                            Next Step
                                            <ChevronRight className="w-5 h-5" />
                                        </motion.button>
                                    ) : (
                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                            className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-green text-white font-semibold shadow-lg shadow-brand-blue/20 hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    Submitting...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5" />
                                                    Submit Application
                                                </>
                                            )}
                                        </motion.button>
                                    )}
                                </div>

                                {currentStep === totalSteps && (
                                    <p className="text-center text-sm text-muted-foreground">
                                        By submitting this form, you agree to our{" "}
                                        <a href="/policy" className="text-brand-blue hover:underline">Privacy Policy</a>
                                        {" "}and{" "}
                                        <a href="/terms" className="text-brand-blue hover:underline">Terms of Service</a>.
                                    </p>
                                )}
                            </form>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Job Modal */}
            {isModalOpen && selectedJob && (
                <JobModal
                    isOpen={isModalOpen}
                    onClose={closeJobModal}
                    title={selectedJob.title}
                    description={selectedJob.description || ""}
                    requirements={selectedJob.requirements || []}
                    responsibilities={selectedJob.responsibilities || []}
                    benefits={selectedJob.benefits || []}
                    onApply={handleApplyClick}
                />
            )}
        </div>
    );
}