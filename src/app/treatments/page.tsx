import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/shared/Container";
import { BookConsultationButton } from "@/components/shared/Button";

const treatments = [
  {
    number: "01",
    problem: "Looking after your oral health?",
    title: "General Dentistry",
    description:
      "Routine dental care focused on maintaining your oral health and addressing common dental concerns.",
    image: "/images/treatments/general-dentistry.jpg",
  },
  {
    number: "02",
    problem: "A tooth is hurting?",
    title: "Root Canal Treatment",
    description:
      "Treatment for damaged or infected teeth, with the aim of relieving discomfort and preserving your natural tooth.",
    image: "/images/treatments/root-canal.jpg",
  },
  {
    number: "03",
    problem: "Missing a tooth?",
    title: "Dental Implants",
    description:
      "A treatment option for replacing missing teeth and restoring everyday function and appearance.",
    image: "/images/treatments/dental-implants.jpg",
  },
  {
    number: "04",
    problem: "Want to improve your smile?",
    title: "Cosmetic Dentistry",
    description:
      "Treatments focused on improving the appearance of your smile while considering your individual features and goals.",
    image: "/images/treatments/cosmetic-dentistry.jpg",
  },
];

const concerns = [
  {
    number: "01",
    title: "Tooth pain or sensitivity",
    description:
      "Persistent pain, sensitivity, or discomfort may need a professional dental assessment.",
  },
  {
    number: "02",
    title: "Missing or damaged teeth",
    description:
      "Explore options for restoring function, appearance, and confidence.",
  },
  {
    number: "03",
    title: "Concerns about your smile",
    description:
      "Discuss cosmetic options based on the changes you'd like to see.",
  },
  {
    number: "04",
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
    title: "Proceed",
    description:
      "Once you understand your options, you can decide how you'd like to move forward.",
  },
];

export default function TreatmentsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-background pb-24 pt-32 sm:pb-32 sm:pt-40 lg:pb-40 lg:pt-44">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-24">
            <div>
              <p className="mb-6 flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
                <span className="h-px w-10 bg-primary" />
                Treatments
              </p>

              <h1 className="max-w-4xl font-(--font-display) text-5xl leading-[0.9] tracking-[-0.035em] text-foreground sm:text-6xl md:text-7xl lg:text-[5rem]">
                Care for Your Dental Health, From Prevention to Restoration.
              </h1>
            </div>

            <p className="max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8 lg:pb-2">
              Explore the treatments available at the clinic and understand
              how they may help with different dental concerns.
            </p>
          </div>
        </Container>
      </section>

      {/* Treatments */}
      <section className="border-t border-border bg-muted py-24 sm:py-32 lg:py-40">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
                Our Treatments
              </p>

              <h2 className="max-w-xl font-(--font-display) text-4xl leading-[0.95] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
                Start With What You Need Help With.
              </h2>
            </div>

            <div className="border-t border-border">
              {treatments.map((treatment) => (
                <Link
                  key={treatment.number}
                  href={`/treatments#${treatment.title
                    .toLowerCase()
                    .replaceAll(" ", "-")}`}
                  className="group grid gap-6 border-b border-border py-8 sm:grid-cols-[64px_1fr_180px] sm:items-center sm:gap-8 sm:py-10"
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

      {/* Patient Concerns */}
      <section className="border-t border-border bg-background py-24 sm:py-32 lg:py-40">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
                Common Concerns
              </p>

              <h2 className="max-w-xl font-(--font-display) text-4xl leading-[0.95] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
                Not Sure What You Need?
              </h2>

              <p className="mt-7 max-w-md text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                You don&apos;t need to know the name of a treatment before speaking
                with the dentist. Start with what you&apos;re experiencing.
              </p>
            </div>

            <div className="border-t border-border">
              {concerns.map((concern) => (
                <div
                  key={concern.number}
                  className="grid gap-4 border-b border-border py-7 sm:grid-cols-[56px_1fr] sm:gap-8 sm:py-8"
                >
                  <span className="text-[10px] font-medium tracking-[0.18em] text-primary">
                    {concern.number}
                  </span>

                  <div>
                    <h3 className="font-(--font-display) text-2xl tracking-[-0.015em] text-foreground sm:text-3xl">
                      {concern.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                      {concern.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Treatment Approach */}
      <section className="border-t border-border bg-muted py-24 sm:py-32 lg:py-40">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-24">
            <div>
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
                Our Approach
              </p>

              <h2 className="max-w-2xl font-(--font-display) text-4xl leading-[0.95] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
                Understand First. Treat With Purpose.
              </h2>
            </div>

            <div>
              <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Treatment should begin with understanding your dental health
                and your priorities. The goal is to help you make an informed
                decision about your care.
              </p>

              <div className="mt-12 border-t border-border">
                {process.map((item) => (
                  <div
                    key={item.number}
                    className="grid gap-4 border-b border-border py-7 sm:grid-cols-[56px_1fr] sm:gap-8 sm:py-8"
                  >
                    <span className="text-[10px] font-medium tracking-[0.18em] text-primary">
                      {item.number}
                    </span>

                    <div>
                      <h3 className="font-(--font-display) text-2xl tracking-[-0.015em] text-foreground sm:text-3xl">
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

      {/* Need Help */}
      <section className="border-t border-border bg-background py-24 sm:py-32 lg:py-40">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-20">
            <div>
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
                Need Guidance?
              </p>

              <h2 className="max-w-3xl font-(--font-display) text-4xl leading-[0.95] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
                Start With a Conversation.
              </h2>

              <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                If you&apos;re unsure which treatment is right for you, a
                consultation can help you understand your dental health and
                available options.
              </p>
            </div>

            <BookConsultationButton className="w-fit rounded-md px-6 py-6" />
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
              Let&apos;s Find the Right Next Step.
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-primary-foreground/75 sm:text-lg sm:leading-8">
              Tell us what you&apos;d like help with, and we&apos;ll help you understand
              what to do next.
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