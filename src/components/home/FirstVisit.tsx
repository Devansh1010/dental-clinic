import { Container } from "@/components/shared/Container";

const steps = [
    {
        number: "01",
        title: "Share your concerns",
        description:
            "Tell us what brought you in, what you're experiencing, and what you'd like help with.",
    },
    {
        number: "02",
        title: "Understand your dental health",
        description:
            "The dentist examines your dental health and explains the findings in clear, straightforward terms.",
    },
    {
        number: "03",
        title: "Discuss your options",
        description:
            "You'll understand the available treatment options, what they involve, and what may be appropriate for you.",
    },
    {
        number: "04",
        title: "Decide your next step",
        description:
            "Once you understand your options, you can decide how you'd like to move forward with your care.",
    },
];

export function FirstVisit() {
    return (
        <section className="bg-muted py-24 sm:py-28 lg:py-32">
            <Container>
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 xl:gap-28">
                    {/* Heading */}
                    <div>
                        <h2 className="max-w-xl font-(--font-display) text-4xl leading-none tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                            Your first visit, explained.
                        </h2>

                        <p className="mt-6 max-w-md text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                            Your first visit is about understanding your
                            concerns, assessing your dental health, and
                            discussing the right way forward. You don&apos;t
                            need to arrive with all the answers.
                        </p>
                    </div>

                    {/* Steps */}
                    <div className="grid gap-0">
                        {steps.map((step) => (
                            <div
                                key={step.number}
                                className="grid grid-cols-[40px_1fr] gap-5 border-t border-border py-7 last:border-b sm:grid-cols-[48px_1fr] sm:gap-7 sm:py-8"
                            >
                                <span className="pt-1 text-xs font-medium text-primary">
                                    {step.number}
                                </span>

                                <div>
                                    <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
                                        {step.title}
                                    </h3>

                                    <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}