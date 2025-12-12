import { Check } from "lucide-react";

interface PricingModel {
    model: string;
    description: string;
    features: string[];
}

interface DeploymentInfo {
    options: string[];
    details: string;
}

interface DeploymentPricingProps {
    pricing: PricingModel[];
    deployment: DeploymentInfo;
}

export function DeploymentPricing({ pricing, deployment }: DeploymentPricingProps) {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Deployment Options */}
                    <div className="lg:col-span-1 space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight mb-6">
                                Flexible Deployment
                            </h2>
                            <p className="text-muted-foreground mb-8">
                                Whether you need the security of on-premise or the scalability of the cloud, we support your architecture.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {deployment.options.map((opt) => (
                                    <span key={opt} className="px-3 py-1 rounded-full bg-background border text-sm font-medium shadow-xs">
                                        {opt}
                                    </span>
                                ))}
                            </div>
                            <p className="text-sm text-muted-foreground italic border-l-2 pl-4">
                                "{deployment.details}"
                            </p>
                        </div>
                    </div>

                    {/* Pricing Models */}
                    <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
                        {pricing.map((plan, idx) => (
                            <div key={idx} className="bg-background border rounded-2xl p-6 shadow-xs hover:shadow-md transition-shadow">
                                <h3 className="text-lg font-semibold text-brand-green mb-2">
                                    {plan.model} Model
                                </h3>
                                <p className="text-muted-foreground text-sm mb-6 h-10">
                                    {plan.description}
                                </p>
                                <ul className="space-y-3">
                                    {plan.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-center gap-3 text-sm">
                                            <Check className="h-4 w-4 text-blue-500 shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
