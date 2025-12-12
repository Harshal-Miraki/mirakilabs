import { LucideIcon, CheckCircle2 } from "lucide-react";

interface CoreFeature {
    id: string;
    title: string;
    description: string;
    image?: string;
    icon?: LucideIcon;
}

interface SolutionFeaturesProps {
    features: CoreFeature[];
}

export function SolutionFeatures({ features }: SolutionFeaturesProps) {
    return (
        <section className="py-20 bg-muted/10">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">
                        Core Use Cases
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Built to handle your most demanding industrial requirements.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="group relative overflow-hidden rounded-2xl border bg-background p-6 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                                <CheckCircle2 className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                            <p className="text-muted-foreground">
                                {feature.description}
                            </p>
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-blue/10 rounded-2xl pointer-events-none transition-colors duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
