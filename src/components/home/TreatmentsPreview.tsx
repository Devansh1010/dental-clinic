import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/shared/Container";

const treatments = [
  {
    number: "01",
    problem: "Looking after your oral health?",
    title: "General Dentistry",
    description:
      "Routine dental care focused on maintaining your oral health and addressing common dental concerns.",
  },
  {
    number: "02",
    problem: "A tooth is hurting?",
    title: "Root Canal Treatment",
    description:
      "Treatment for damaged or infected teeth, with the goal of relieving discomfort and preserving your natural tooth.",
  },
  {
    number: "03",
    problem: "Missing a tooth?",
    title: "Dental Implants",
    description:
      "A long-term option for replacing missing teeth and restoring everyday function and appearance.",
  },
  {
    number: "04",
    problem: "Want to improve your smile?",
    title: "Cosmetic Dentistry",
    description:
      "Treatments designed to enhance the appearance of your smile while keeping the result natural.",
  },
];

export function TreatmentsPreview() {
  return (
    <section className="border-t border-border bg-muted py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-20">
          <div>
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
              Our Treatments
            </p>

            <h2 className="max-w-3xl font-(--font-display) text-4xl leading-[0.95] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
              Care for Your Smile, From Prevention to Restoration.
            </h2>
          </div>

          <p className="max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8 lg:pb-1">
            Whether you&apos;re dealing with a dental concern or looking to improve
            your smile, we&apos;ll help you understand the right options for your
            needs.
          </p>
        </div>

        <div className="mt-16 border-t border-border lg:mt-24">
          {treatments.map((treatment) => (
            <Link
              key={treatment.number}
              href="/treatments"
              className="group grid gap-5 border-b border-border py-8 transition-colors duration-300 hover:bg-background/50 sm:grid-cols-[64px_1fr_auto] sm:items-center sm:gap-8 sm:py-10"
            >
              <span className="text-[10px] font-medium tracking-[0.18em] text-primary">
                {treatment.number}
              </span>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                  {treatment.problem}
                </p>

                <h3 className="mt-2 font-(--font-display) text-2xl tracking-[-0.015em] text-foreground transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
                  {treatment.title}
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
                  {treatment.description}
                </p>
              </div>

              <span className="hidden size-10 items-center justify-center border border-border transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground sm:flex">
                <ArrowUpRight className="size-4" strokeWidth={1.5} />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <Link
            href="/treatments"
            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
          >
            View all treatments
            <ArrowUpRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={1.5}
            />
          </Link>
        </div>
      </Container>
    </section>
  );
}