import { Container } from "@/components/shared/Container";

const approachPoints = [
  {
    number: "01",
    title: "Listen first",
    description:
      "We start by understanding what brought you in, what concerns you most, and what you hope to achieve.",
  },
  {
    number: "02",
    title: "Explain clearly",
    description:
      "We explain what we find, the available options, and what each treatment involves before you decide.",
  },
  {
    number: "03",
    title: "Treat thoughtfully",
    description:
      "Your treatment plan is shaped around your dental needs, priorities, and comfort.",
  },
];

export function PatientApproach() {
  return (
    <section className="border-t border-border bg-background py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          {/* Statement */}
          <div>
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
              How We Care
            </p>

            <h2 className="max-w-3xl font-(--font-display) text-4xl leading-[0.95] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
              Dental Care That Begins With Listening.
            </h2>
          </div>

          {/* Supporting content */}
          <div className="flex items-end lg:pb-2">
            <p className="max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Before recommending treatment, we take the time to understand
              what brought you in, what concerns you most, and what you hope to
              achieve.
            </p>
          </div>
        </div>

        {/* Approach points */}
        <div className="mt-20 border-t border-border lg:mt-28">
          <div className="grid md:grid-cols-3 md:divide-x md:divide-border">
            {approachPoints.map((point) => (
              <div
                key={point.number}
                className="border-b border-border py-8 last:border-b-0 md:border-b-0 md:px-8 md:py-10 first:md:pl-0 last:md:pr-0 lg:px-10"
              >
                <span className="text-[10px] font-medium tracking-[0.18em] text-primary">
                  {point.number}
                </span>

                <h3 className="mt-6 font-(--font-display) text-2xl tracking-[-0.015em] text-foreground">
                  {point.title}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}