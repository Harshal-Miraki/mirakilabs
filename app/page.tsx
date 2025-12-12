import { Hero } from "@/components/Hero";
import { DashboardMockup } from "@/components/DashboardMockup";
import { Clients } from "@/components/Clients";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { TechStack } from "@/components/TechStack";
import { Testimonials } from "@/components/Testimonials";
import { IndustrialAI } from "@/components/IndustrialAI";
import { FAQ } from "@/components/FAQ";

export default function Home() {
    return (
        <main>
            <Hero />
            <DashboardMockup />
            <Clients />
            <Services />
            <WhyChooseUs />
            <IndustrialAI />
            <TechStack />
            <Testimonials />
            <FAQ />
        </main>
    );
}
