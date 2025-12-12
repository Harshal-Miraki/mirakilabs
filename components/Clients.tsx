"use client";

const clients = [
    { name: "Siemens", logo: "https://ik.imagekit.io/rdwxgbmgm/Partners/Siemens-logo1.png" },
    { name: "Union Bank of India", logo: "https://ik.imagekit.io/rdwxgbmgm/Partners/Union_Bank_of_India_Logo.svg.png" },
    { name: "Partner", logo: "https://ik.imagekit.io/rdwxgbmgm/Partners/images%20(2).png" },
    { name: "Dalmia Bharat Group", logo: "https://ik.imagekit.io/rdwxgbmgm/Partners/dalmia-bharat-group-logo-png_seeklogo-366570.png" },
    { name: "Partner", logo: "https://ik.imagekit.io/rdwxgbmgm/Partners/images%20(1).png" },
    { name: "Partner", logo: "https://ik.imagekit.io/rdwxgbmgm/Partners/images.png" },
    { name: "LG", logo: "https://ik.imagekit.io/rdwxgbmgm/Partners/LG_logo_(2014).svg.png" },
    { name: "SAP", logo: "https://ik.imagekit.io/zu9jitfho/Partners/Tech%20Partners/SAP_2011_logo.svg.png" },

];

export function Clients() {
    return (
        <section className="py-20 bg-background overflow-hidden relative">
            <div className="container mx-auto px-4 mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                    Trusted by Industry Leaders
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Powering the next generation of industrial automation and AI solutions for forward-thinking companies.
                </p>
            </div>

            <div className="relative flex overflow-hidden group/marquee">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

                {/* Marquee Container */}
                <div className="flex gap-16 md:gap-24 py-8 min-w-full">
                    {/* First set of logos */}
                    <MarqueeContent />
                    {/* Duplicate set for seamless loop */}
                    <MarqueeContent aria-hidden="true" />
                </div>
            </div>
        </section>
    );
}

function MarqueeContent({ "aria-hidden": ariaHidden }: { "aria-hidden"?: boolean | "true" | "false" }) {
    return (
        <div
            aria-hidden={ariaHidden}
            className="flex gap-16 md:gap-24 items-center flex-shrink-0 animate-marquee [--duration:50s] [--gap:4rem] md:[--gap:6rem] group-hover/marquee:[animation-play-state:paused]"
        >
            {clients.map((client, index) => (
                <div
                    key={index}
                    className="flex items-center justify-center min-w-[120px]"
                >
                    <img
                        src={client.logo}
                        alt={client.name}
                        className="h-10 md:h-14 w-auto object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 dark:invert dark:hover:invert-0 transition-all duration-300"
                    />
                </div>
            ))}
        </div>
    );
}
