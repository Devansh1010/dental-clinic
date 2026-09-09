import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { BookConsultationButton } from "@/components/shared/Button";

const professionalDetails = [
  {
    value: "7+",
    label: "Years Experience",
  },
  {
    value: "[BDS / MDS]",
    label: "Qualification",
  },
  {
    value: "[Specialization]",
    label: "Area of Practice",
  },
];

const approachPoints = [
  {
    number: "01",
    title: "Listen First",
    description:
      "We begin by understanding what brought you in, what concerns you most, and what you hope to achieve.",
  },
  {
    number: "02",
    title: "Explain Clearly",
    description:
      "Your dental health, treatment options, and what to expect are explained in straightforward terms.",
  },
  {
    number: "03",
    title: "Treat Thoughtfully",
    description:
      "Treatment recommendations are shaped around your dental needs, priorities, and comfort.",
  },
];

const professionalJourney = [
  {
    year: "[YEAR]",
    title: "Dental Education",
    description:
      "[Add the dentist's qualification, institution, and graduation details.]",
  },
  {
    year: "[YEAR]",
    title: "Professional Experience",
    description:
      "[Add relevant clinical experience, previous practices, hospitals, or professional roles.]",
  },
  {
    year: "[YEAR]",
    title: "Advanced Training",
    description:
      "[Add relevant certifications, courses, workshops, or specialized training.]",
  },
  {
    year: "[CURRENT]",
    title: "Current Practice",
    description:
      "Providing personalized dental care to patients at the clinic in Bopal, Ahmedabad.",
  },
];

export default function DoctorPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-background pb-24 pt-32 sm:pb-32 sm:pt-40 lg:pb-40 lg:pt-44">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <div>
              <p className="mb-6 flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
                <span className="h-px w-10 bg-primary" />
                Meet the Dentist
              </p>

              <h1 className="max-w-2xl font-(--font-display) text-5xl leading-[0.9] tracking-[-0.035em] text-foreground sm:text-6xl md:text-7xl lg:text-[5rem]">
                Experienced Care Begins With Understanding.
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

            <div className="relative">
              <div className="relative aspect-4/5 overflow-hidden bg-muted">
                <Image
                  src="/images/doctor/doctor.jpg"
                  alt="Dr. [Doctor Name]"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 hidden size-24 border border-border bg-background lg:block" />
            </div>
          </div>
        </Container>
      </section>

      {/* Professional Details */}
      <section className="border-t border-border bg-muted py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid md:grid-cols-3 md:divide-x md:divide-border">
            {professionalDetails.map((detail) => (
              <div
                key={detail.label}
                className="border-b border-border py-7 last:border-b-0 md:border-b-0 md:px-10 md:py-4 first:md:pl-0 last:md:pr-0"
              >
                <p className="font-(--font-display) text-3xl tracking-[-0.02em] text-foreground sm:text-4xl">
                  {detail.value}
                </p>

                <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                  {detail.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Professional Background */}
      <section className="border-t border-border bg-background py-24 sm:py-32 lg:py-40">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
                Professional Background
              </p>

              <h2 className="max-w-xl font-(--font-display) text-4xl leading-[0.95] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
                A Career Built Around Dental Care.
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                [Add a concise professional biography here. Focus on the
                dentist&apos;s education, clinical experience, areas of
                expertise, and the journey that led to the current practice.]
              </p>

              <div className="mt-14 border-t border-border">
                {professionalJourney.map((item) => (
                  <div
                    key={`${item.year}-${item.title}`}
                    className="grid gap-4 border-b border-border py-8 sm:grid-cols-[100px_1fr] sm:gap-8"
                  >
                    <span className="text-[10px] font-medium tracking-[0.18em] text-primary">
                      {item.year}
                    </span>

                    <div>
                      <h3 className="font-(--font-display) text-2xl tracking-[-0.015em] text-foreground sm:text-3xl">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
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

      {/* Areas of Practice */}
      <section className="border-t border-border bg-muted py-24 sm:py-32 lg:py-40">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
                Areas of Practice
              </p>

              <h2 className="max-w-xl font-(--font-display) text-4xl leading-[0.95] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
                Care for Different Dental Needs.
              </h2>
            </div>

            <div>
              <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Explore the treatments and areas of dentistry available at the
                clinic, from routine dental care to restorative and cosmetic
                treatments.
              </p>

              <div className="mt-12 border-t border-border">
                <Link
                  href="/treatments"
                  className="group flex items-center justify-between gap-6 border-b border-border py-7"
                >
                  <div>
                    <span className="text-[10px] font-medium tracking-[0.18em] text-primary">
                      01
                    </span>

                    <h3 className="mt-2 font-(--font-display) text-2xl text-foreground sm:text-3xl">
                      General Dentistry
                    </h3>
                  </div>

                  <ArrowUpRight
                    className="size-5 shrink-0 text-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.5}
                  />
                </Link>

                <Link
                  href="/treatments"
                  className="group flex items-center justify-between gap-6 border-b border-border py-7"
                >
                  <div>
                    <span className="text-[10px] font-medium tracking-[0.18em] text-primary">
                      02
                    </span>

                    <h3 className="mt-2 font-(--font-display) text-2xl text-foreground sm:text-3xl">
                      Root Canal Treatment
                    </h3>
                  </div>

                  <ArrowUpRight
                    className="size-5 shrink-0 text-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.5}
                  />
                </Link>

                <Link
                  href="/treatments"
                  className="group flex items-center justify-between gap-6 border-b border-border py-7"
                >
                  <div>
                    <span className="text-[10px] font-medium tracking-[0.18em] text-primary">
                      03
                    </span>

                    <h3 className="mt-2 font-(--font-display) text-2xl text-foreground sm:text-3xl">
                      Dental Implants
                    </h3>
                  </div>

                  <ArrowUpRight
                    className="size-5 shrink-0 text-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.5}
                  />
                </Link>

                <Link
                  href="/treatments"
                  className="group flex items-center justify-between gap-6 border-b border-border py-7"
                >
                  <div>
                    <span className="text-[10px] font-medium tracking-[0.18em] text-primary">
                      04
                    </span>

                    <h3 className="mt-2 font-(--font-display) text-2xl text-foreground sm:text-3xl">
                      Cosmetic Dentistry
                    </h3>
                  </div>

                  <ArrowUpRight
                    className="size-5 shrink-0 text-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.5}
                  />
                </Link>
              </div>

              <Link
                href="/treatments"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground"
              >
                Explore all treatments

                <ArrowUpRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Patient Care Approach */}
      <section className="border-t border-border bg-background py-24 sm:py-32 lg:py-40">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
            <div>
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
                Patient Care
              </p>

              <h2 className="max-w-3xl font-(--font-display) text-4xl leading-[0.95] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
                The Treatment Is Important. So Is How You Experience It.
              </h2>
            </div>

            <div className="flex items-end">
              <p className="max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8 lg:pb-2">
                Good dental care starts with understanding. The goal is to
                create an environment where you can ask questions, understand
                your options, and feel comfortable making decisions about your
                care.
              </p>
            </div>
          </div>

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

                  <h3 className="mt-6 font-(--font-display) text-2xl tracking-[-0.015em] text-foreground sm:text-3xl">
                    {point.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground sm:text-base">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Clinic Connection */}
      <section className="border-t border-border bg-muted py-24 sm:py-32 lg:py-40">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
            <div className="relative aspect-4/3 overflow-hidden bg-background">
              <Image
                src="/images/clinic/treatment-room.jpg"
                alt="Treatment room at the dental clinic"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>

            <div>
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
                The Clinic
              </p>

              <h2 className="max-w-xl font-(--font-display) text-4xl leading-[0.95] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
                A Modern Space for Thoughtful Care.
              </h2>

              <p className="mt-7 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Visit the clinic in Bopal, Ahmedabad and learn more about the
                environment where your care takes place.
              </p>

              <Link
                href="/clinic"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground"
              >
                Explore the Clinic

                <ArrowUpRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-primary py-24 sm:py-32 lg:py-40">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
              Begin With a Consultation
            </p>

            <h2 className="font-(--font-display) text-5xl leading-[0.92] tracking-tight text-primary-foreground sm:text-6xl lg:text-7xl">
              Let&apos;s Talk About Your Dental Health.
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-primary-foreground/75 sm:text-lg sm:leading-8">
              Have a concern or considering treatment? Start with a
              conversation and understand what may be right for you.
            </p>

            <div className="mt-9 flex justify-center">
              <BookConsultationButton className="rounded-md bg-background px-6 py-6 text-foreground hover:bg-background/90" />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}