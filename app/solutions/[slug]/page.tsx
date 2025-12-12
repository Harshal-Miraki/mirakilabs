import { getSolutionBySlug } from "@/lib/solutions";
import { notFound } from "next/navigation";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { PainPoints } from "@/components/solutions/PainPoints";
import { ValueMetrics } from "@/components/solutions/ValueMetrics";
import { SolutionFeatures } from "@/components/solutions/SolutionFeatures";
import { HowItWorks } from "@/components/solutions/HowItWorks";
import { TechIntegrations } from "@/components/solutions/TechIntegrations";
import { PlatformCapabilities } from "@/components/solutions/PlatformCapabilities";
import { DeploymentPricing } from "@/components/solutions/DeploymentPricing";

interface SolutionPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function SolutionPage({ params }: SolutionPageProps) {
    const { slug } = await params;
    const solution = getSolutionBySlug(slug);

    if (!solution) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background">
            <SolutionHero
                title={solution.title}
                description={solution.description}
                longDescription={solution.longDescription}
                icon={<solution.icon className="h-16 w-16 text-foreground" />}
            />

            <PainPoints painPoints={solution.painPoints} />

            <ValueMetrics outcomes={solution.outcomes} />

            <SolutionFeatures features={solution.coreFeatures} />

            <HowItWorks data={solution.howItWorks} />

            <TechIntegrations integrations={solution.integrations} />

            <PlatformCapabilities capabilities={solution.capabilities} />

            <DeploymentPricing
                pricing={solution.pricing}
                deployment={solution.deployment}
            />
        </main>
    );
}
