import { Share2 } from "lucide-react";

interface IntegrationCategory {
    category: string;
    items: string[];
}

interface TechIntegrationsProps {
    integrations: IntegrationCategory[];
}

export function TechIntegrations({ integrations }: TechIntegrationsProps) {
    return (
        <section className="py-20 bg-muted/10">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-medium">
                            <Share2 className="w-4 h-4" />
                            <span>Seamless Connectivity</span>
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight">
                            Integrated with Your Ecosystem
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Our solutions are designed to fit perfectly into your existing infrastructure, connecting with your hardware, software, and enterprise systems without disruption.
                        </p>
                    </div>

                    <div className="grid gap-6">
                        {integrations.map((group, idx) => (
                            <div key={idx} className="bg-background border rounded-xl p-6">
                                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                                    {group.category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {group.items.map((item, itemIdx) => (
                                        <span
                                            key={itemIdx}
                                            className="px-3 py-1.5 bg-muted rounded-md text-sm font-medium text-foreground border"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
