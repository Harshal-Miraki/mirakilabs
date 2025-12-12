interface Step {
    step: number;
    title: string;
    description: string;
}

interface HowItWorksProps {
    data: {
        title: string;
        steps: Step[];
    };
}

export function HowItWorks({ data }: HowItWorksProps) {
    return (
        <section className="py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">
                        {data.title}
                    </h2>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[2.25rem] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

                    <div className="grid gap-12 lg:grid-cols-4 relative">
                        {data.steps.map((step, index) => (
                            <div key={step.step} className="relative flex flex-col items-center text-center group">
                                <div className="relative z-10 flex items-center justify-center w-20 h-20 rounded-2xl bg-background border-2 border-muted group-hover:border-brand-blue group-hover:shadow-[0_0_20px_-5px_var(--color-brand-blue)] transition-all duration-300 mb-6">
                                    <span className="text-2xl font-bold text-muted-foreground group-hover:text-brand-blue transition-colors">
                                        {step.step}
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
