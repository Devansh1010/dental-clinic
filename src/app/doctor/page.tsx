
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { BookConsultationButton } from "@/components/shared/Button";

const professionalDetails = [
  {
    label: "Experience",
    value: "7+ years",
  },
  {
    label: "Qualification",
    value: "[BDS / MDS]",
  },
  {
    label: "Practice",
    value: "[Specialization]",
  },
];

const professionalJourney = [
  {
    year: "[YEAR]",
    title: "Dental Education",
    description:
      "[Add the dentist's dental education, institution, and qualification.]",
  },
  {
    year: "[YEAR]",
    title: "Professional Experience",
    description:
      "[Add relevant clinical experience, previous practices, hospitals, or roles.]",
  },
  {
    year: "[YEAR]",
    title: "Advanced Training",
    description:
      "[Add relevant certifications, courses, or advanced clinical training.]",
  },
];

const approachPoints = [
  {
    title: "Listen",
    description:
      "We begin by understanding what brought you in, what concerns you most, and what you hope to achieve.",
  },
  {
    title: "Explain",
    description:
      "We explain what we find and discuss the available options clearly before moving forward.",
  },
  {
    title: "Treat",
    description:
      "Your treatment plan is shaped around your dental needs, priorities, and comfort.",
  },
];

const treatments = [
  "General Dentistry",
  "Root Canal Treatment",
  "Dental Implants",
  "Cosmetic Dentistry",
];

export default function DoctorPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-background pb-20 pt-32 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-40">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-20 xl:grid-cols-[1.05fr_0.75fr]">
            <div className="max-w-2xl">
              <p className="mb-6 text-sm font-medium text-primary">
                Meet the Dentist
              </p>

              <h1 className="max-w-2xl font-(--font-display) text-5xl leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
                Experienced care,
                <br />
                grounded in understanding.
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Dr. [Doctor Name] brings over 7 years of professional
                experience to patient care, with an approach centered around
                clear communication, thoughtful treatment planning, and
                individual needs.
              </p>

              <div className="mt-9">
                <BookConsultationButton className="rounded-md px-5 py-6" />
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="relative aspect-3/4 w-full max-w-sm overflow-hidden bg-muted">
                <Image
                  src="/images/doctor/doctor.jpg"
                  alt="Dr. [Doctor Name]"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Professional Details */}
      <section className="border-y border-border bg-muted">
        <Container>
          <div className="grid md:grid-cols-3">
            {professionalDetails.map((detail, index) => (
              <div
                key={detail.label}
                className={`py-7 md:py-8 ${index > 0 ? "border-t border-border md:border-l md:border-t-0" : ""
                  }`}
              >
                <div className="px-0 md:px-8">
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                    {detail.label}
                  </p>

                  <p className="mt-3 text-lg font-medium tracking-tight text-foreground">
                    {detail.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Professional Background */}
      <section className="bg-background py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-sm font-medium text-primary">
                Professional Background
              </p>

              <h2 className="mt-4 max-w-md font-(--font-display) text-4xl leading-[0.98] tracking-[-0.02em] text-foreground sm:text-5xl">
                A career built around thoughtful dental care.
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                [Add a concise professional biography here. Focus on the
                dentist&apos;s education, clinical experience, areas of
                expertise, and the journey that led to the current practice.]
              </p>

              <div className="mt-12">
                {professionalJourney.map((item) => (
                  <div
                    key={`${item.year}-${item.title}`}
                    className="grid gap-3 border-t border-border py-6 sm:grid-cols-[90px_1fr] sm:gap-8"
                  >
                    <span className="text-xs font-medium text-muted-foreground">
                      {item.year}
                    </span>

                    <div>
                      <h3 className="text-base font-medium text-foreground sm:text-lg">
                        {item.title}
                      </h3>

                      <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Patient Care Approach */}
      <section className="bg-muted py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary">
              Approach to Care
            </p>

            <h2 className="mt-4 font-(--font-display) text-4xl leading-[0.98] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
              Care that begins with listening.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Good dental care is not only about treatment. It is also about
              understanding your concerns, explaining your options, and
              helping you feel comfortable with the decisions you make.
            </p>
          </div>

          <div className="mt-14 grid gap-8 border-t border-border pt-8 md:grid-cols-3 md:gap-10">
            {approachPoints.map((point) => (
              <div key={point.title}>
                <h3 className="text-lg font-medium tracking-tight text-foreground">
                  {point.title}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Areas of Practice */}
      <section className="bg-background py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="text-sm font-medium text-primary">
                Areas of Practice
              </p>

              <h2 className="mt-4 max-w-md font-(--font-display) text-4xl leading-[0.98] tracking-[-0.02em] text-foreground sm:text-5xl">
                Care for different dental needs.
              </h2>
            </div>

            <div>
              <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Explore the treatments available at the clinic, from routine
                dental care to restorative and cosmetic treatments.
              </p>

              <div className="mt-10">
                {treatments.map((treatment) => (
                  <Link
                    key={treatment}
                    href="/treatments"
                    className="group flex items-center justify-between border-t border-border py-5 last:border-b"
                  >
                    <span className="text-base font-medium text-foreground sm:text-lg">
                      {treatment}
                    </span>

                    <ArrowUpRight
                      className="size-4 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                      strokeWidth={1.5}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Clinic */}
      <section className="bg-muted py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            <div className="relative aspect-4/3 overflow-hidden bg-background">
              <Image
                src="/images/clinic/treatment-room.jpg"
                alt="Treatment room at the dental clinic"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
            </div>

            <div className="max-w-md">
              <p className="text-sm font-medium text-primary">The Clinic</p>

              <h2 className="mt-4 font-(--font-display) text-4xl leading-[0.98] tracking-[-0.02em] text-foreground sm:text-5xl">
                A calm environment for your care.
              </h2>

              <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Visit the clinic in Bopal, Ahmedabad and learn more about the
                environment where your care takes place.
              </p>

              <Link
                href="/clinic"
                className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-foreground"
              >
                Explore the Clinic

                <ArrowUpRight
                  className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.5}
                />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-(--font-display) text-4xl leading-[0.98] tracking-[-0.02em] text-primary-foreground sm:text-5xl lg:text-6xl">
                Have a dental concern?
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-primary-foreground/75 sm:text-lg">
                Start with a consultation and understand what may be right
                for you.
              </p>
            </div>

            <BookConsultationButton className="shrink-0 rounded-md bg-background px-5 py-6 text-foreground hover:bg-background/90" />
          </div>
        </Container>
      </section>
    </main>
  );
}
