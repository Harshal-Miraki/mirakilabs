import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface PainPoint {
    id: string;
    title: string;
    description: string;
    icon?: LucideIcon;
}

interface PainPointsProps {
    painPoints: PainPoint[];
}

export function PainPoints({ painPoints }: PainPointsProps) {
    return (
        <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">
                        Problems We Solve
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Addressing the critical challenges that hold your operations back.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {painPoints.map((point, index) => (
                        <div
                            key={point.id}
                            className="bg-card border p-6 rounded-xl hover:shadow-md transition-shadow"
                        >
                            <div className="h-10 w-10 rounded-lg bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 flex items-center justify-center mb-4">
                                <span className="text-xl font-bold">!</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
                            <p className="text-muted-foreground text-sm">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
