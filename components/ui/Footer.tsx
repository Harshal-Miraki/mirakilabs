import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowUpRight } from "lucide-react";

const products = [
    { name: "Catylist", href: "/products/catylist" },
    { name: "TrackOne", href: "/products/trackone" },
    { name: "WorkBench", href: "/products/workbench" },
    { name: "SAP Integration", href: "/products/sap" },
    { name: "ERP Solution", href: "/products/erp-solution" },
];

const solutions = [
    { name: "Raw Mix", href: "/solutions/raw-mix" },
    { name: "Predictive Maintenance", href: "/solutions/predictive-maintenance" },
    { name: "FMS", href: "/solutions/fms" },
    { name: "Chatbot", href: "/solutions/chatbot" },
    { name: "ERP Solutions", href: "/solutions/erp-solutions" },
    { name: "DCIM", href: "/solutions/dcim" },
    { name: "Asset Tracking", href: "/solutions/asset-tracking" },
];

const company = [
    { name: "About Us", href: "/about-us" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact-us" },
    { name: "Partners", href: "#" },
];

const resources = [
    { name: "Documentation", href: "/coming-soon" },
    { name: "Case Studies", href: "/coming-soon" },
    { name: "Support", href: "/coming-soon" },
];

const socials = [
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    // { name: "Twitter", icon: Twitter, href: "#" },
    // { name: "GitHub", icon: Github, href: "#" },
];

export function Footer() {
    return (
        <footer className="relative bg-[#e3effc] dark:bg-[#1E1E1E] border-t overflow-hidden">
            {/* Subtle Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-blue/[0.02] to-brand-green/[0.02] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Main Footer Content */}
                <div className="py-16 lg:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

                        {/* Brand Section - Takes more space */}
                        <div className="lg:col-span-4 space-y-6">
                            {/* Logo */}
                            <Link href="/" className="inline-block">
                                <Image
                                    src="/miraki-logo.png"
                                    alt="Miraki Labs"
                                    width={280}
                                    height={100}
                                    className="h-12 md:h-20 w-auto"
                                />
                            </Link>

                            {/* Tagline */}
                            <p className="text-muted-foreground leading-relaxed max-w-sm">
                                Pioneering industrial AI solutions that transform manufacturing operations. We create intelligent systems for the factories of tomorrow.
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-3 pt-2 dark:text-white ">
                                <a href="sales@miraki.in" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center group-hover:bg-brand-blue/10 transition-colors">
                                        <Mail className="h-4 w-4" />
                                    </div>
                                    sales@miraki.in
                                </a>
                                <a href="tel:+919876543210" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center group-hover:bg-brand-blue/10 transition-colors">
                                        <Phone className="h-4 w-4" />
                                    </div>
                                    +91 98985 98981
                                </a>
                                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center shrink-0">
                                        <MapPin className="h-4 w-4" />
                                    </div>
                                    <span>Navi Mumbai, Maharashtra, India</span>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-3 pt-4 text-slate-700 ">
                                {socials.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-brand-blue hover:text-white transition-all duration-300"
                                        aria-label={social.name}
                                    >
                                        <social.icon className="h-5 w-5" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Links Grid */}
                        <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                            {/* Products */}
                            <div>
                                <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Products</h4>
                                <ul className="space-y-3">
                                    {products.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                                            >
                                                {item.name}
                                                <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Solutions */}
                            <div>
                                <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Solutions</h4>
                                <ul className="space-y-3">
                                    {solutions.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                                            >
                                                {item.name}
                                                <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Company */}
                            <div>
                                <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Company</h4>
                                <ul className="space-y-3">
                                    {company.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                                            >
                                                {item.name}
                                                <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Resources */}
                            <div>
                                <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Resources</h4>
                                <ul className="space-y-3">
                                    {resources.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                                            >
                                                {item.name}
                                                <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="py-8 border-t border-border/50">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-1">Stay Updated</h4>
                            <p className="text-sm text-muted-foreground">Subscribe to our newsletter for the latest updates on industrial AI.</p>
                        </div>
                        <form className="flex gap-2 w-full md:w-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 md:w-64 px-4 py-2.5 rounded-full bg-muted border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all"
                            />
                            <button
                                type="submit"
                                className="px-6 py-2.5 rounded-full bg-brand-blue text-white text-sm font-medium hover:bg-brand-blue/90 transition-colors shrink-0"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-6 border-t border-border/50">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-muted-foreground">
                        <p>© {new Date().getFullYear()} Miraki Labs. All rights reserved.</p>
                        <div className="flex flex-wrap gap-6">
                            <Link href="/policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
                            {/* <Link href="#" className="hover:text-foreground transition-colors">Cookie Policy</Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
