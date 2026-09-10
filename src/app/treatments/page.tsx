import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { BookConsultationButton } from "@/components/shared/Button";

const treatments = [
  {
    problem: "Looking after your oral health?",
    title: "General Dentistry",
    description:
      "Routine dental care focused on maintaining your oral health and addressing common dental concerns.",
    image: "/images/treatments/general-dentistry.jpg",
    href: "/treatments/general-dentistry",
  },
  {
    problem: "A tooth is hurting?",
    title: "Root Canal Treatment",
    description:
      "Treatment for damaged or infected teeth, with the aim of relieving discomfort and preserving your natural tooth.",
    image: "/images/treatments/root-canal.jpg",
    href: "/treatments/root-canal",
  },
  {
    problem: "Missing a tooth?",
    title: "Dental Implants",
    description:
      "A treatment option for replacing missing teeth and restoring everyday function and appearance.",
    image: "/images/treatments/dental-implants.jpg",
    href: "/treatments/dental-implants",
  },
  {
    problem: "Want to improve your smile?",
    title: "Cosmetic Dentistry",
    description:
      "Treatments focused on improving the appearance of your smile while considering your individual features and goals.",
    image: "/images/treatments/cosmetic-dentistry.jpg",
    href: "/treatments/cosmetic-dentistry",
  },
];

const concerns = [
  {
    title: "Tooth pain or sensitivity",
    description:
      "Persistent pain, sensitivity, or discomfort may need a professional dental assessment.",
  },
  {
    title: "Missing or damaged teeth",
    description:
      "Explore options for restoring function and appearance based on your individual needs.",
  },
  {
    title: "Concerns about your smile",
    description:
      "Discuss cosmetic options based on the changes you'd like to see.",
  },
  {
    title: "Routine dental care",
    description:
      "Regular examinations and preventive care can help you maintain your oral health.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We begin by understanding your concern and examining your dental health.",
  },
  {
    number: "02",
    title: "Explain",
    description:
      "The findings and relevant treatment options are explained clearly.",
  },
  {
    number: "03",
    title: "Plan",
    description:
      "A treatment approach is discussed based on your individual clinical needs.",
  },
  {
    number: "04",
    title: "Decide",
    description:
      "Once you understand your options, you can decide how you'd like to move forward.",
  },
];

export default function TreatmentsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-background pb-20 pt-32 sm:pb-24 sm:pt-40 lg:pb-28 lg:pt-44">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-24">
            <div>
              <h1 className="max-w-3xl font-(--font-display) text-5xl leading-[0.95] tracking-[-0.03em] text-foreground sm:text-6xl lg:text-7xl">
                Dental care for
                <br />
                what you need.
              </h1>
            </div>

            <p className="max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Explore the treatments available at the clinic and find the
              right place to start based on your dental concern.
            </p>
          </div>
        </Container>
      </section>

      {/* Treatments */}
      <section className="bg-muted py-20 sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <h2 className="max-w-md font-(--font-display) text-4xl leading-none tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Treatment options for different dental needs.
              </h2>

              <p className="mt-6 max-w-sm text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                You don&apos;t need to know the name of a treatment before you
                visit. Start with the concern you&apos;re experiencing.
              </p>
            </div>

            <div className="border-t border-border">
              {treatments.map((treatment) => (
                <Link
                  key={treatment.title}
                  href={treatment.href}
                  className="group grid gap-6 border-b border-border py-8 sm:grid-cols-[1fr_180px] sm:items-center sm:gap-8 sm:py-10"
                >
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {treatment.problem}
                    </p>

                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                      {treatment.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                      {treatment.description}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                      Explore treatment
                      <ArrowUpRight
                        className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        strokeWidth={1.5}
                      />
                    </span>
                  </div>

                  <div className="relative hidden aspect-4/3 overflow-hidden bg-background sm:block">
                    <Image
                      src={treatment.image}
                      alt={`${treatment.title} treatment`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="180px"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Common Concerns */}
      <section className="bg-background py-20 sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <h2 className="max-w-md font-(--font-display) text-4xl leading-none tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Start with what you&apos;re experiencing.
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Not sure which treatment you need? That&apos;s okay. Your
                consultation begins with understanding the problem first.
              </p>
            </div>

            <div className="border-t border-border">
              {concerns.map((concern) => (
                <div
                  key={concern.title}
                  className="grid gap-3 border-b border-border py-7 sm:grid-cols-[1fr_1.4fr] sm:gap-10 sm:py-8"
                >
                  <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
                    {concern.title}
                  </h3>

                  <p className="max-w-lg text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                    {concern.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Treatment Process */}
      <section className="bg-muted py-20 sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <h2 className="max-w-md font-(--font-display) text-4xl leading-none tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Understand first. Treat with purpose.
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Good treatment starts with understanding your dental health,
                your concerns, and the options available to you.
              </p>
            </div>

            <div className="border-t border-border">
              {process.map((item) => (
                <div
                  key={item.number}
                  className="grid gap-4 border-b border-border py-7 sm:grid-cols-[48px_1fr] sm:gap-8 sm:py-8"
                >
                  <span className="text-xs font-medium text-primary">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
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
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-background py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-(--font-display) text-4xl leading-none tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Let&apos;s take the next step.
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              If you&apos;re unsure where to start, a consultation can help you
              understand your dental health and available treatment options.
            </p>

            <div className="mt-9 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
              <BookConsultationButton className="rounded-md px-6 py-6" />

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
              >
                Contact the Clinic
                <ArrowUpRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}