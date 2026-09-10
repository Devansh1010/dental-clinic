import { Container } from "@/components/shared/Container";

const approachPoints = [
    {
        title: "Listen first",
        description:
            "We start by understanding what brought you in, what concerns you most, and what you hope to achieve.",
    },
    {
        title: "Explain clearly",
        description:
            "We explain what we find, the available options, and what each treatment involves before you decide.",
    },
    {
        title: "Treat thoughtfully",
        description:
            "Your treatment plan is shaped around your dental needs, priorities, and comfort.",
    },
];

export function PatientApproach() {
    return (
        <section className="bg-muted py-24 sm:py-28 lg:py-32">
            <Container>
                {/* Introduction */}
                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
                    <div>
                        <h2 className="max-w-2xl font-(--font-display) text-4xl leading-none tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                            Dental care that begins with listening.
                        </h2>
                    </div>

                    <div className="flex items-end">
                        <p className="max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                            Before recommending treatment, we take the time to
                            understand what brought you in, what concerns you
                            most, and what you hope to achieve.
                        </p>
                    </div>
                </div>

                {/* Approach */}
                <div className="mt-16 grid gap-10 border-t border-border pt-10 md:grid-cols-3 md:gap-8 lg:mt-20 lg:pt-12">
                    {approachPoints.map((point) => (
                        <div key={point.title} className="max-w-sm">
                            <h3 className="text-base font-semibold tracking-tight text-foreground">
                                {point.title}
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}