import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/shared/Container";

const treatments = [
  {
    problem: "Looking after your oral health?",
    title: "General Dentistry",
    description:
      "Routine dental care focused on maintaining your oral health and addressing common dental concerns.",
  },
  {
    problem: "A tooth is hurting?",
    title: "Root Canal Treatment",
    description:
      "Treatment for damaged or infected teeth, with the goal of relieving discomfort and preserving your natural tooth.",
  },
  {
    problem: "Missing a tooth?",
    title: "Dental Implants",
    description:
      "A long-term option for replacing missing teeth and restoring everyday function and appearance.",
  },
  {
    problem: "Want to improve your smile?",
    title: "Cosmetic Dentistry",
    description:
      "Treatments designed to enhance the appearance of your smile while keeping the result natural.",
  },
];

export function TreatmentsPreview() {
  return (
    <section className="bg-background py-24 sm:py-28 lg:py-32">
      <Container>
        {/* Introduction */}
        {/* Introduction */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-3xl">
            <h2 className="font-(--font-display) text-4xl leading-none tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Care for your smile, from prevention to restoration.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Whether you&apos;re dealing with a dental concern or
              looking to improve your smile, we&apos;ll help you
              understand the right options for your needs.
            </p>
          </div>

          {/* All treatments */}
          <div className="shrink-0 lg:pb-1">
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
        </div>

        {/* Treatments */}
        <div className="mt-14 grid gap-px overflow-hidden bg-border border border-border md:grid-cols-2">
          {treatments.map((treatment) => (
            <Link
              key={treatment.title}
              href="/treatments"
              className="group bg-background p-7 transition-colors duration-300 hover:bg-muted sm:p-9 lg:p-10"
            >
              <div className="flex items-start justify-between gap-6">
                <p className="text-sm text-muted-foreground">
                  {treatment.problem}
                </p>

                <ArrowUpRight
                  className="size-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="mt-10 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                {treatment.title}
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                {treatment.description}
              </p>

              <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                Explore treatment
                <ArrowUpRight
                  className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
              </span>
            </Link>
          ))}
        </div>


      </Container>
    </section>
  );
}