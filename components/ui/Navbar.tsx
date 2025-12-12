"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { ModeToggle } from "./ModeToggle";
import { Menu, MapPin, BrainCircuit, Package, Weight, Pickaxe, Cable, LoaderPinwheel, X, Building2, Briefcase, Rocket, FileText, Mail, Twitter, Linkedin, ChevronRight, Database, Settings, Layers, Beaker, MessageSquare, Server, Activity, Bot, Cpu, LayoutDashboard, Video, Flame, ShieldCheck, Shield, ChevronDown, Zap, Droplets, Eye, Sparkles, Wrench, Gauge, Monitor, ShoppingCart, TrendingUp, DollarSign, BarChart, Truck, PieChart, Workflow } from "lucide-react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { title } from "process";

// Navigation menu items data structure with icons
const navMenuItems = [
    {
        title: "Products",
        items: [
            {
                title: "Catylist",
                href: "/products/catylist",
                description: "Industrial Automation Engine",
                icon: BrainCircuit,
            },
            {
                title: "TrackOne",
                href: "/products/trackone",
                description: "Industrial Automation Engine",
                icon: MapPin,
            },
            {
                title: "WorkBench",
                href: "/products/workbench",
                description: "Unified workspace solutions",
                icon: Rocket,
                subItems: [
                    {
                        title: "SAP",
                        href: "/products/sap",
                        description: "SAP integration solutions",
                        icon: Database,
                    },
                    {
                        title: "ERP Solution",
                        href: "/products/erp-solution",
                        description: "Enterprise resource planning",
                        icon: Layers,
                    },
                ],
            }
        ],
    },
    {
        title: "Automation",
        type: "link",
        href: "/automation",
    },
    {
        title: "Solutions",
        type: "complex",
        categories: [
            {
                title: "Industrial AI",
                description: "AI & ML powered industrial optimization",
                items: [
                    {
                        title: "Raw Mix",
                        href: "/solutions/raw-mix",
                        description: "AI-driven cement raw mix optimization",
                        icon: Beaker,
                    },
                    {
                        title: "Predictive Maintenance",
                        href: "/solutions/predictive-maintenance",
                        description: "ML-based equipment failure prediction",
                        icon: Activity,
                    },
                    {
                        title: "FMS",
                        href: "/solutions/fms",
                        description: "Facility Management System",
                        icon: Building2,
                    },
                    {
                        title: "Chatbot",
                        href: "/solutions/chatbot",
                        description: "AI-powered industrial assistant",
                        icon: Bot,
                    },
                    {
                        title: "ERP Solutions",
                        href: "/solutions/erp-solutions",
                        description: "Enterprise resource planning",
                        icon: Layers,
                    },
                    {
                        title: "Energy Management System",
                        href: "/solutions/energy-management",
                        description: "Optimize energy consumption",
                        icon: Zap,
                    },
                    {
                        title: "Water Management System",
                        href: "/solutions/water-management",
                        description: "Smart water usage monitoring",
                        icon: Droplets,
                    },
                    {
                        title: "Vision AI",
                        href: "/solutions/vision-ai",
                        description: "Computer vision for quality control",
                        icon: Eye,
                    },
                    {
                        title: "Golden Batch AI",
                        href: "/solutions/golden-batch",
                        description: "Replicate perfect production runs",
                        icon: Sparkles,
                    },
                    {
                        title: "Gear box Monitoring",
                        href: "/solutions/gearbox-monitoring",
                        description: "Vibration analysis & health",
                        icon: Wrench,
                    },
                ]
            },
            {
                title: "Enterprise AI",
                description: "AI agents for business operations",
                items: [
                    {
                        title: "Inventory Management Agent",
                        href: "/solutions/inventory-management",
                        description: "AI-Driven Stock Optimization",
                        icon: ShoppingCart,
                    },
                    {
                        title: "Demand Forecasting",
                        href: "/solutions/demand-forecasting",
                        description: "Predictive Market Insights",
                        icon: TrendingUp,
                    },
                    {
                        title: "Pricing Agent",
                        href: "/solutions/pricing-agent",
                        description: "Dynamic Price Optimization",
                        icon: DollarSign,
                    },
                    {
                        title: "Sales Analysis Agent",
                        href: "/solutions/sales-analysis",
                        description: "Deep Sales Intelligence",
                        icon: BarChart,
                    },
                    {
                        title: "Supply Chain Optimization AI",
                        href: "/solutions/supply-chain-optimization",
                        description: "End-to-End Logistics AI",
                        icon: Truck,
                    },
                    {
                        title: "Visualization & Reporting",
                        href: "/solutions/visualization-reporting",
                        description: "Automated Insights Generation",
                        icon: PieChart,
                    },
                    {
                        title: "Workflow Automation",
                        href: "/solutions/workflow-automation",
                        description: "Intelligent Process Automation",
                        icon: Workflow,
                    },
                ]
            },
            {
                title: "Datacenter Solutions",
                description: "Next-gen infrastructure management",
                items: [
                    {
                        title: "DCIM",
                        href: "/solutions/dcim",
                        description: "Data Center Infrastructure Management",
                        icon: Server,
                    },
                    {
                        title: "Asset Tracking",
                        href: "/solutions/asset-tracking",
                        description: "Real-time industrial asset monitoring",
                        icon: MapPin,
                    },
                    {
                        title: "Smart Rack",
                        href: "/solutions/smart-rack",
                        description: "IT Hardware Infrastructure service",
                        icon: Cpu, // Using Cpu as proxy for Smart Rack/Hardware
                    },
                ]
            },
            {
                title: "IBMS",
                description: "Integrated Building Management System",
                items: [
                    {
                        title: "BMS",
                        href: "/solutions/bms",
                        description: "Building Management System",
                        icon: LayoutDashboard,
                    },
                    {
                        title: "CCTV",
                        href: "/solutions/cctv",
                        description: "Surveillance & Security",
                        icon: Video,
                    },
                    {
                        title: "Fire Alarm",
                        href: "/solutions/fire-alarm",
                        description: "Safety & Warning Systems",
                        icon: Flame,
                    },
                    {
                        title: "Access Control",
                        href: "/solutions/access-control",
                        description: "Secure Entry Management",
                        icon: ShieldCheck,
                    },
                    {
                        title: "GSS",
                        href: "/solutions/gss",
                        description: "General Security Services",
                        icon: Shield,
                    },
                ]
            }
        ]
    },
    {
        title: "Industries",
        items: [
            {
                title: "Cement",
                href: "/industries/cement",
                description: "AI-driven RawMix optimization",
                icon: Pickaxe,
            },
            {
                title: "Electronics",
                href: "/industries/electronics",
                description: "Automation with data insights",
                icon: Cable,
            },
            {
                title: "Tyre",
                href: "/industries/tyre",
                description: "Efficiency and machine health",
                icon: LoaderPinwheel,
            },
            {
                title: "Packaging",
                href: "/industries/packaging",
                description: "Predictive maintenance for machines",
                icon: Package,
            },
            {
                title: "Steel",
                href: "/industries/steel",
                description: "Smart monitoring & analytics.",
                icon: Weight,
            },
        ],
    },
    {
        title: "Why Miraki",
        items: [
            {
                title: "About us",
                href: "/about-us",
                description: "Learn about our mission",
                icon: Building2,
            },
            {
                title: "Careers",
                href: "/careers",
                description: "Join our team",
                icon: Briefcase,
            },
        ],
    },
    {
        title: "Contact",
        type: "link",
        href: "/contact",
    },

];

export function Navbar() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSolutionCategory, setActiveSolutionCategory] = useState("Industrial AI");

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isDark = mounted && (theme === "dark" || theme === "system");

    return (
        <div className="fixed top-0 left-0 right-0 z-50 px-2 pt-2 md:px-4 md:pt-4">
            <nav
                className={cn(
                    "navbar-border relative", // relative positioning context
                    "mx-auto max-w-7xl flex justify-between xl:grid xl:grid-cols-[1fr_auto_1fr] items-center px-4 py-2 md:px-6 md:py-3 rounded-full transition-all duration-300",
                    isScrolled
                        ? "backdrop-blur-md border border-white/10 bg-white/50 dark:bg-black/50"
                        : "backdrop-blur-none border border-transparent bg-transparent"
                )}
            >
                {/* Logo */}
                <div className="flex justify-start">
                    <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2 z-10">
                        {/* Company Logo Image */}
                        <Image
                            src="https://ik.imagekit.io/zu9jitfho/image.png"
                            alt="Miraki Labs Logo"
                            width={40}
                            height={40}
                            className="object-contain bg-transparent"
                        />
                        {/* Text Logo */}
                        <div className="flex items-center gap-1">
                            <span className="text-brand-blue">Miraki</span>
                            <span className="text-brand-green">Labs</span>
                        </div>
                    </Link>
                </div>

                {/* Navigation Menu */}
                <NavigationMenu className="hidden xl:flex justify-self-center" viewport={false}>
                    <NavigationMenuList>
                        {navMenuItems.map((menuItem) => (
                            <NavigationMenuItem key={menuItem.title}>
                                {/* Direct link items (like Contact) */}
                                {menuItem.type === "link" && menuItem.href ? (
                                    <NavigationMenuLink
                                        href={menuItem.href}
                                        className={cn(
                                            navigationMenuTriggerStyle(),
                                            "bg-transparent text-base font-medium transition-all duration-200",
                                            "hover:bg-linear-to-br hover:from-brand-blue/10 hover:to-brand-green/10 hover:text-brand-blue rounded-full px-4 py-2"
                                        )}
                                    >
                                        {menuItem.title}
                                    </NavigationMenuLink>
                                ) : (
                                    /* Dropdown menu items */
                                    <>
                                        <NavigationMenuTrigger
                                            className={cn(
                                                "bg-transparent text-base font-medium transition-all duration-200",
                                                "hover:bg-linear-to-br hover:from-brand-blue/10 hover:to-brand-green/10 hover:text-brand-blue rounded-full px-4 py-2",
                                                "data-[state=open]:bg-linear-to-br data-[state=open]:from-brand-blue/10 data-[state=open]:to-brand-green/10 data-[state=open]:text-brand-blue rounded-full px-4 py-2"
                                            )}
                                        >
                                            {menuItem.title}
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent
                                            className={cn(
                                                "left-1/2 -translate-x-1/2",
                                                "p-0 rounded-xl overflow-hidden bg-linear-to-br from-background/95 to-background/80 shadow-2xl backdrop-blur-md border border-white/10",
                                                "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2",
                                                menuItem.type === "complex" ? "md:w-[750px] lg:w-[950px]" : "w-auto min-w-[450px] md:min-w-[550px]"
                                            )}
                                        >
                                            {menuItem.type === "complex" && menuItem.categories ? (
                                                <div className="flex flex-row h-full min-h-[400px]">
                                                    {/* Left Sidebar (Categories) */}
                                                    <div className="w-1/3 bg-muted/30 border-r border-border/50 p-4 space-y-2">
                                                        {menuItem.categories.map((category) => (
                                                            <div
                                                                key={category.title}
                                                                onMouseEnter={() => setActiveSolutionCategory(category.title)}
                                                                className={cn(
                                                                    "group flex items-center justify-between p-4 rounded-lg cursor-pointer transition-all duration-200",
                                                                    activeSolutionCategory === category.title
                                                                        ? "bg-linear-to-r from-brand-blue/10 to-brand-green/10 text-brand-blue shadow-sm"
                                                                        : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                                                                )}
                                                            >
                                                                <div>
                                                                    <div className="font-semibold text-base">{category.title}</div>
                                                                </div>
                                                                <ChevronRight className={cn(
                                                                    "h-4 w-4 transition-transform duration-200",
                                                                    activeSolutionCategory === category.title ? "text-brand-blue translate-x-1" : "text-muted-foreground/50"
                                                                )} />
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {/* Right Content (Items) */}
                                                    <div className="w-2/3 p-6 bg-linear-to-br from-transparent to-muted/10">
                                                        <div className="h-full">
                                                            {menuItem.categories.map((category) => (
                                                                <div
                                                                    key={category.title}
                                                                    className={cn(
                                                                        "grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-left-2 duration-300",
                                                                        activeSolutionCategory === category.title ? "grid" : "hidden"
                                                                    )}
                                                                >
                                                                    {category.items.map((item) => (
                                                                        <Link
                                                                            key={item.title}
                                                                            href={item.href}
                                                                            className="flex items-start gap-4 p-4 rounded-lg transition-all duration-200 group hover:bg-gradient-to-br hover:from-brand-blue/10 hover:to-brand-green/10 border border-transparent hover:border-brand-blue/10"
                                                                        >
                                                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-blue/10 to-brand-green/10 text-brand-blue group-hover:text-brand-green transition-all duration-200 shadow-sm group-hover:shadow-md">
                                                                                <item.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                                                                            </div>
                                                                            <div className="grow">
                                                                                <div className="flex items-center gap-1">
                                                                                    <p className="text-sm font-semibold leading-none text-foreground group-hover:text-brand-blue transition-colors duration-200">
                                                                                        {item.title}
                                                                                    </p>
                                                                                    <ChevronRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-brand-blue" />
                                                                                </div>
                                                                                <p className="mt-1 text-xs leading-snug text-muted-foreground line-clamp-2">
                                                                                    {item.description}
                                                                                </p>
                                                                            </div>
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                                                    {menuItem.items?.map((item) => {
                                                        const hasSubItems = 'subItems' in item && item.subItems && item.subItems.length > 0;

                                                        if (hasSubItems) {
                                                            return (
                                                                <div key={item.title} className="col-span-1">
                                                                    <Link
                                                                        href={item.href}
                                                                        className="flex items-start gap-4 p-4 rounded-lg transition-all duration-200 group hover:bg-linear-to-br hover:from-brand-blue/10 hover:to-brand-green/10"
                                                                    >
                                                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-brand-blue/10 to-brand-green/10 text-brand-blue group-hover:text-brand-green transition-all duration-200">
                                                                            <item.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                                                                        </div>
                                                                        <div className="grow">
                                                                            <p className="text-base font-semibold leading-none text-foreground group-hover:text-brand-blue transition-colors duration-200">
                                                                                {item.title}
                                                                            </p>
                                                                            <p className="mt-1 text-sm leading-snug text-muted-foreground line-clamp-2">
                                                                                {item.description}
                                                                            </p>
                                                                        </div>
                                                                        <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-brand-blue group-hover:translate-x-1 transition-all duration-200" />
                                                                    </Link>
                                                                    {/* Sub-menu flyout */}
                                                                    <ul className="absolute left-full top-[-16px] ml-4 w-[300px] p-2 bg-popover border border-border/50 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 animate-in slide-in-from-left-4 fade-in before:absolute before:-left-4 before:top-0 before:h-full before:w-4 before:content-['']">
                                                                        {item.subItems.map((subItem) => {
                                                                            const SubIcon = subItem.icon;
                                                                            return (
                                                                                <li key={subItem.title} className="list-none">
                                                                                    <NavigationMenuLink asChild>
                                                                                        <a
                                                                                            href={subItem.href}
                                                                                            className="flex items-start gap-3 p-3 rounded-lg transition-all duration-200 group hover:bg-linear-to-br hover:from-brand-blue/10 hover:to-brand-green/10"
                                                                                        >
                                                                                            {SubIcon && (
                                                                                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-linear-to-br from-brand-blue/10 to-brand-green/10 text-brand-blue group-hover:text-brand-green transition-all duration-200">
                                                                                                    <SubIcon className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                                                                                                </div>
                                                                                            )}
                                                                                            <div className="grow">
                                                                                                <p className="text-sm font-medium leading-none text-foreground group-hover:text-brand-blue transition-colors duration-200">
                                                                                                    {subItem.title}
                                                                                                </p>
                                                                                                <p className="mt-0.5 text-xs leading-snug text-muted-foreground line-clamp-2">
                                                                                                    {subItem.description}
                                                                                                </p>
                                                                                            </div>
                                                                                        </a>
                                                                                    </NavigationMenuLink>
                                                                                </li>
                                                                            );
                                                                        })}
                                                                    </ul>
                                                                </div>
                                                            );
                                                        }

                                                        return (
                                                            <div key={item.title} className="col-span-1">
                                                                <NavigationMenuLink asChild>
                                                                    <a
                                                                        href={item.href}
                                                                        className="flex items-start gap-4 p-4 rounded-lg transition-all duration-200 group hover:bg-linear-to-br hover:from-brand-blue/10 hover:to-brand-green/10"
                                                                    >
                                                                        {item.icon && (
                                                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-brand-blue/10 to-brand-green/10 text-brand-blue group-hover:text-brand-green transition-all duration-200">
                                                                                <item.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                                                                            </div>
                                                                        )}
                                                                        <div className="grow">
                                                                            <p className="text-base font-semibold leading-none text-foreground group-hover:text-brand-blue transition-colors duration-200">
                                                                                {item.title}
                                                                            </p>
                                                                            <p className="mt-1 text-sm leading-snug text-muted-foreground line-clamp-2">
                                                                                {item.description}
                                                                            </p>
                                                                        </div>
                                                                    </a>
                                                                </NavigationMenuLink>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </NavigationMenuContent>
                                    </>
                                )}
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Mobile Menu + Theme Toggle */}
                <div className="flex items-center justify-end gap-2 z-10">
                    {/* Mobile Menu - Only visible on small screens */}
                    <div className="block xl:hidden">
                        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                            <SheetTrigger className="p-2.5 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 rounded-lg transition-all duration-200 active:scale-95">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[85vw] sm:w-[400px] px-0 flex flex-col">
                                <SheetHeader className="px-6 pb-6 border-b">
                                    <SheetTitle>
                                        <Link
                                            href="/"
                                            className="text-2xl font-bold tracking-tighter flex items-center gap-1"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <span className="text-brand-blue">Miraki</span>
                                            <span className="text-brand-green">Labs</span>
                                        </Link>
                                    </SheetTitle>
                                </SheetHeader>

                                <nav className="flex-1 overflow-y-auto py-6">
                                    {navMenuItems.map((menuItem, menuIndex) => (
                                        <div key={menuItem.title} className="px-6">
                                            {menuIndex > 0 && (
                                                <div className="h-px bg-linear-to-r from-transparent via-border to-transparent my-6" />
                                            )}

                                            {/* Direct link items (like Contact) */}
                                            {menuItem.type === "link" && menuItem.href ? (
                                                <a
                                                    href={menuItem.href}
                                                    className="group flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 active:bg-accent transition-all duration-200"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-linear-to-br from-brand-blue/10 to-brand-green/10 group-hover:from-brand-blue/20 group-hover:to-brand-green/20 transition-all duration-200">
                                                        <Mail className="h-5 w-5 text-brand-blue group-hover:scale-110 transition-transform duration-200" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="font-semibold text-base group-hover:text-brand-blue transition-colors">
                                                            {menuItem.title}
                                                        </div>
                                                        <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                                                            Get in touch with us
                                                        </p>
                                                    </div>
                                                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-brand-blue group-hover:translate-x-1 transition-all duration-200" />
                                                </a>
                                            ) : (
                                                /* Dropdown menu items */
                                                <>
                                                    <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4">
                                                        {menuItem.title}
                                                    </h3>
                                                    <ul className="space-y-1">
                                                        {/* Handle complex type with categories (Solutions) */}
                                                        {menuItem.type === "complex" && menuItem.categories ? (
                                                            menuItem.categories.map((category) => (
                                                                <li key={category.title} className="group">
                                                                    <details className="[&_summary::-webkit-details-marker]:hidden">
                                                                        <summary className="list-none cursor-pointer group flex items-center justify-between gap-3 p-3 rounded-lg hover:bg-accent/50 active:bg-accent transition-all duration-200">
                                                                            <div className="flex items-center gap-3">
                                                                                {/* Generic Category Icon */}
                                                                                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-linear-to-br from-brand-blue/10 to-brand-green/10 group-hover:from-brand-blue/20 group-hover:to-brand-green/20 transition-all duration-200">
                                                                                    <Layers className="h-5 w-5 text-brand-blue group-hover:scale-110 transition-transform duration-200" />
                                                                                </div>
                                                                                <div className="font-semibold text-base group-hover:text-brand-blue transition-colors">
                                                                                    {category.title}
                                                                                </div>
                                                                            </div>
                                                                            <ChevronDown className="h-4 w-4 text-muted-foreground group-open:rotate-180 transition-transform duration-200" />
                                                                        </summary>
                                                                        <ul className="pl-6 space-y-1 mt-2 border-l border-border/50 ml-5">
                                                                            {category.items.map((item) => {
                                                                                const Icon = item.icon;
                                                                                return (
                                                                                    <li key={item.title}>
                                                                                        <a
                                                                                            href={item.href}
                                                                                            className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-accent/50 active:bg-accent transition-all duration-200 group/item"
                                                                                            onClick={() => setMobileMenuOpen(false)}
                                                                                        >
                                                                                            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-linear-to-br from-brand-blue/10 to-brand-green/10 group-hover/item:from-brand-blue/20 group-hover/item:to-brand-green/20 transition-all duration-200">
                                                                                                <Icon className="h-4 w-4 text-brand-blue group-hover/item:scale-110 transition-transform duration-200" />
                                                                                            </div>
                                                                                            <div>
                                                                                                <div className="font-medium text-sm group-hover/item:text-brand-blue transition-colors">
                                                                                                    {item.title}
                                                                                                </div>
                                                                                                {item.description && (
                                                                                                    <p className="text-[10px] text-muted-foreground line-clamp-1">
                                                                                                        {item.description}
                                                                                                    </p>
                                                                                                )}
                                                                                            </div>
                                                                                        </a>
                                                                                    </li>
                                                                                );
                                                                            })}
                                                                        </ul>
                                                                    </details>
                                                                </li>
                                                            ))
                                                        ) : (
                                                            /* Standard items (Products, Industries, etc) */
                                                            menuItem.items?.map((item) => {
                                                                const Icon = item.icon;
                                                                const hasSubItems = 'subItems' in item && item.subItems && item.subItems.length > 0;

                                                                if (hasSubItems) {
                                                                    return (
                                                                        <li key={item.title} className="group">
                                                                            <details className="[&_summary::-webkit-details-marker]:hidden">
                                                                                <summary className="list-none cursor-pointer group flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 active:bg-accent transition-all duration-200">
                                                                                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-linear-to-br from-brand-blue/10 to-brand-green/10 group-hover:from-brand-blue/20 group-hover:to-brand-green/20 transition-all duration-200">
                                                                                        <Icon className="h-5 w-5 text-brand-blue group-hover:scale-110 transition-transform duration-200" />
                                                                                    </div>
                                                                                    <div className="flex-1 min-w-0">
                                                                                        <div className="font-semibold text-base group-hover:text-brand-blue transition-colors">
                                                                                            {item.title}
                                                                                        </div>
                                                                                        <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                                                                                            {item.description}
                                                                                        </p>
                                                                                    </div>
                                                                                    <ChevronRight className="h-4 w-4 text-muted-foreground group-open:rotate-90 transition-transform duration-200" />
                                                                                </summary>
                                                                                <ul className="pl-14 space-y-1 mt-1">
                                                                                    {item.subItems.map((subItem) => {
                                                                                        const SubIcon = subItem.icon;
                                                                                        return (
                                                                                            <li key={subItem.title}>
                                                                                                <a
                                                                                                    href={subItem.href}
                                                                                                    className="group/sub flex items-center gap-3 p-2.5 rounded-lg hover:bg-accent/50 active:bg-accent transition-all duration-200"
                                                                                                    onClick={() => setMobileMenuOpen(false)}
                                                                                                >
                                                                                                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-linear-to-br from-brand-blue/10 to-brand-green/10 group-hover/sub:from-brand-blue/20 group-hover/sub:to-brand-green/20 transition-all duration-200">
                                                                                                        <SubIcon className="h-4 w-4 text-brand-blue group-hover/sub:scale-110 transition-transform duration-200" />
                                                                                                    </div>
                                                                                                    <div className="flex-1 min-w-0">
                                                                                                        <div className="font-medium text-sm group-hover/sub:text-brand-blue transition-colors">
                                                                                                            {subItem.title}
                                                                                                        </div>
                                                                                                        <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                                                                                                            {subItem.description}
                                                                                                        </p>
                                                                                                    </div>
                                                                                                </a>
                                                                                            </li>
                                                                                        );
                                                                                    })}
                                                                                </ul>
                                                                            </details>
                                                                        </li>
                                                                    );
                                                                }

                                                                return (
                                                                    <li key={item.title}>
                                                                        <a
                                                                            href={item.href}
                                                                            className="group flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 active:bg-accent transition-all duration-200"
                                                                            onClick={() => setMobileMenuOpen(false)}
                                                                        >
                                                                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-linear-to-br from-brand-blue/10 to-brand-green/10 group-hover:from-brand-blue/20 group-hover:to-brand-green/20 transition-all duration-200">
                                                                                <Icon className="h-5 w-5 text-brand-blue group-hover:scale-110 transition-transform duration-200" />
                                                                            </div>
                                                                            <div className="flex-1 min-w-0">
                                                                                <div className="font-semibold text-base group-hover:text-brand-blue transition-colors">
                                                                                    {item.title}
                                                                                </div>
                                                                                <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                                                                                    {item.description}
                                                                                </p>
                                                                            </div>
                                                                            <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-brand-blue group-hover:translate-x-1 transition-all duration-200" />
                                                                        </a>
                                                                    </li>
                                                                );
                                                            })
                                                        )}
                                                    </ul>
                                                </>
                                            )}
                                        </div>
                                    ))}
                                </nav>

                                <div className="p-6 border-t bg-muted/5">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-muted-foreground">Switch Theme</span>
                                        <ModeToggle />
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

                    {/* Theme Toggle */}
                    <div className="hidden xl:block">
                        <ModeToggle />
                    </div>
                </div>
            </nav>
        </div>
    );
}
