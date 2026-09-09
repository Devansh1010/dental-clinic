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
    <section className="border-t border-border bg-background py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          {/* Heading */}
          <div>
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
              Your First Visit
            </p>

            <h2 className="max-w-xl font-(--font-display) text-4xl leading-[0.95] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
              Your First Visit, Explained.
            </h2>
          </div>

          {/* Content */}
          <div>
            <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Your first visit is about understanding your concerns, assessing
              your dental health, and discussing the right way forward. You
              don&apos;t need to arrive with all the answers.
            </p>

            <div className="mt-12 border-t border-border">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="grid gap-4 border-b border-border py-7 sm:grid-cols-[56px_1fr] sm:gap-8 sm:py-8"
                >
                  <span className="text-[10px] font-medium tracking-[0.18em] text-primary">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="font-(--font-display) text-2xl tracking-[-0.015em] text-foreground">
                      {step.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}