import { Shield, Zap, Scale } from "lucide-react";

interface Capability {
    title: string;
    description: string;
}

interface PlatformCapabilitiesProps {
    capabilities: Capability[];
}

export function PlatformCapabilities({ capabilities }: PlatformCapabilitiesProps) {
    // Helper to pick an icon based on title keywords (simple heuristic for better visuals)
    const getIcon = (title: string) => {
        const lower = title.toLowerCase();
        if (lower.includes("security") || lower.includes("privacy")) return Shield;
        if (lower.includes("scalability") || lower.includes("throughput")) return Scale;
        return Zap; // Default
    };

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">
                        Enterprise-Grade Capabilities
                    </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {capabilities.map((cap, idx) => {
                        const Icon = getIcon(cap.title);
                        return (
                            <div key={idx} className="flex gap-4 items-start p-2">
                                <div className="mt-1 h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                                    <Icon className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">{cap.title}</h3>
                                    <p className="text-muted-foreground text-sm">
                                        {cap.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
