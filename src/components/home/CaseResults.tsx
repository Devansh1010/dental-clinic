import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/shared/Container";

const cases = [
  {
    title: "Smile restoration",
    treatment: "Cosmetic Dentistry",
    description:
      "A treatment plan focused on improving the appearance of the smile while keeping the result natural.",
    image: "/images/patients/case-01.jpg",
  },
  {
    title: "Replacing a missing tooth",
    treatment: "Dental Implants",
    description:
      "Implant treatment planned to restore function and provide a stable, natural-looking replacement.",
    image: "/images/patients/case-02.jpg",
  },
];

export function CaseResults() {
  return (
    <section className="bg-background py-24 sm:py-28 lg:py-32">
      <Container>
        {/* Intro */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <h2 className="max-w-2xl font-(--font-display) text-4xl leading-none tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              See the difference thoughtful treatment can make.
            </h2>
          </div>

          <div className="flex flex-col justify-between">
            <p className="max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Explore selected treatment cases to understand how different dental
              concerns can be approached. Every treatment plan is individual, and
              results vary from patient to patient.
            </p>

            <div className="mt-8 self-end pt-5">
              <Link
                href="/patient-stories"
                className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
              >
                View all patient cases
                <ArrowUpRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Cases */}
        <div className="mt-14 grid gap-12 sm:mt-16 lg:grid-cols-2 lg:gap-8">
          {cases.map((item) => (
            <Link
              key={item.title}
              href="/patient-stories"
              className="group block"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-muted">
                <Image
                  src={item.image}
                  alt={`${item.title} — ${item.treatment} treatment case`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.015]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="mt-6">
                <p className="text-sm font-medium text-primary">
                  {item.treatment}
                </p>

                <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                  {item.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                  View case
                  <ArrowUpRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.5}
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}