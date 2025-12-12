import { getAutomationBySlug } from "@/lib/automation";
import { notFound } from "next/navigation";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { PainPoints } from "@/components/solutions/PainPoints";
import { ValueMetrics } from "@/components/solutions/ValueMetrics";
import { SolutionFeatures } from "@/components/solutions/SolutionFeatures";
import { HowItWorks } from "@/components/solutions/HowItWorks";
import { TechIntegrations } from "@/components/solutions/TechIntegrations";
import { PlatformCapabilities } from "@/components/solutions/PlatformCapabilities";
import { DeploymentPricing } from "@/components/solutions/DeploymentPricing";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function AutomationPage({ params }: PageProps) {
    const { slug } = await params;
    const item = getAutomationBySlug(slug);

    if (!item) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background">
            <SolutionHero
                title={item.title}
                description={item.description}
                longDescription={item.longDescription}
                icon={<item.icon className="h-16 w-16 text-foreground" />}
            />

            <PainPoints painPoints={item.painPoints} />

            <ValueMetrics outcomes={item.outcomes} />

            <SolutionFeatures features={item.coreFeatures} />

            <HowItWorks data={item.howItWorks} />

            <TechIntegrations integrations={item.integrations} />

            <PlatformCapabilities capabilities={item.capabilities} />

            <DeploymentPricing
                pricing={item.pricing}
                deployment={item.deployment}
            />
        </main>
    );
}
