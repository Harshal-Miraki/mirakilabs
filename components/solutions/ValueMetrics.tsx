interface Outcome {
    id: string;
    value: string;
    label: string;
    description: string;
}

interface ValueMetricsProps {
    outcomes: Outcome[];
}

export function ValueMetrics({ outcomes }: ValueMetricsProps) {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">
                        Tangible Outcomes
                    </h2>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {outcomes.map((outcome) => (
                        <div
                            key={outcome.id}
                            className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-linear-to-b before:from-brand-blue before:to-transparent"
                        >
                            <div className="text-4xl font-extrabold text-foreground mb-1 tracking-tight">
                                {outcome.value}
                            </div>
                            <div className="text-lg font-semibold text-brand-blue mb-2">
                                {outcome.label}
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {outcome.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
