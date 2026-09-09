import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { BookConsultationButton } from "@/components/shared/Button";

const patientStories = [
  {
    number: "01",
    quote:
      "[Real patient review will be placed here. Keep the patient's original voice wherever possible.]",
    name: "[Patient Name]",
    treatment: "[Treatment]",
    source: "[Google / Other Review Source]",
  },
  {
    number: "02",
    quote:
      "[Real patient review will be placed here. A short, natural review is completely fine.]",
    name: "[Patient Name]",
    treatment: "[Treatment]",
    source: "[Google / Other Review Source]",
  },
  {
    number: "03",
    quote:
      "[Real patient review will be placed here. Avoid rewriting the review into marketing language.]",
    name: "[Patient Name]",
    treatment: "[Treatment]",
    source: "[Google / Other Review Source]",
  },
];

const cases = [
  {
    number: "01",
    title: "Smile Restoration",
    treatment: "Cosmetic Dentistry",
    concern:
      "[Brief description of the patient's concern or treatment objective.]",
    approach:
      "[Brief explanation of the treatment approach. Replace with verified clinical information.]",
    outcome:
      "[Brief description of the outcome. Avoid exaggerated or guaranteed claims.]",
    image: "/images/patients/case-01.jpg",
  },
  {
    number: "02",
    title: "Tooth Replacement",
    treatment: "Dental Implants",
    concern:
      "[Brief description of the patient's concern or treatment objective.]",
    approach:
      "[Brief explanation of the treatment approach. Replace with verified clinical information.]",
    outcome:
      "[Brief description of the outcome. Avoid exaggerated or guaranteed claims.]",
    image: "/images/patients/case-02.jpg",
  },
];

export default function PatientStoriesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-background pb-24 pt-32 sm:pb-32 sm:pt-40 lg:pb-40 lg:pt-44">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-end lg:gap-24">
            <div>
              <p className="mb-6 flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
                <span className="h-px w-10 bg-primary" />
                Patient Stories
              </p>

              <h1 className="max-w-4xl font-(--font-display) text-5xl leading-[0.9] tracking-[-0.035em] text-foreground sm:text-6xl md:text-7xl lg:text-[5rem]">
                Real Experiences.
                <br />
                Real Treatment Journeys.
              </h1>
            </div>

            <p className="max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8 lg:pb-2">
              Hear directly from patients about their experiences and explore
              selected treatment cases from the clinic.
            </p>
          </div>
        </Container>
      </section>

      {/* Patient Reviews */}
      <section className="border-t border-border bg-muted py-24 sm:py-32 lg:py-40">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
                Patient Reviews
              </p>

              <h2 className="max-w-xl font-(--font-display) text-4xl leading-[0.95] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
                Hear From Those We&apos;ve Cared For.
              </h2>

              <p className="mt-7 max-w-md text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Real experiences can help you understand what it feels like to
                be cared for at the clinic.
              </p>
            </div>

            <div className="border-t border-border">
              {patientStories.map((story) => (
                <article
                  key={story.number}
                  className="border-b border-border py-9 sm:py-12"
                >
                  <div className="flex items-start justify-between gap-6">
                    <span className="text-[10px] font-medium tracking-[0.18em] text-primary">
                      {story.number}
                    </span>

                    <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                      {story.source}
                    </span>
                  </div>

                  <blockquote className="mt-8 max-w-3xl font-(--font-display) text-2xl leading-[1.15] tracking-[-0.015em] text-foreground sm:text-3xl lg:text-4xl">
                    “{story.quote}”
                  </blockquote>

                  <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">
                      {story.name}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-border" />

                    <span>{story.treatment}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Treatment Cases */}
      <section className="border-t border-border bg-background py-24 sm:py-32 lg:py-40">
        <Container>
          <div className="mb-14 max-w-3xl sm:mb-20">
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
              Treatment Cases
            </p>

            <h2 className="font-(--font-display) text-4xl leading-[0.95] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
              Selected Treatment Results.
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Explore selected treatment cases to understand the approach and
              outcomes of different procedures. Every treatment plan is
              individual, and outcomes can vary from patient to patient.
            </p>
          </div>

          <div className="grid gap-16 lg:grid-cols-2 lg:gap-8">
            {cases.map((item) => (
              <article key={item.number} className="group">
                <div className="relative aspect-4/3 overflow-hidden bg-muted">
                  <Image
                    src={item.image}
                    alt={`${item.title} treatment case`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                <div className="mt-7">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[10px] font-medium tracking-[0.18em] text-primary">
                      CASE {item.number}
                    </span>

                    <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                      {item.treatment}
                    </span>
                  </div>

                  <h3 className="mt-4 font-(--font-display) text-3xl tracking-[-0.02em] text-foreground sm:text-4xl">
                    {item.title}
                  </h3>

                  <div className="mt-8 border-t border-border">
                    <div className="grid gap-2 border-b border-border py-5 sm:grid-cols-[120px_1fr] sm:gap-8">
                      <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                        Patient Concern
                      </p>

                      <p className="text-sm leading-6 text-foreground sm:text-base sm:leading-7">
                        {item.concern}
                      </p>
                    </div>

                    <div className="grid gap-2 border-b border-border py-5 sm:grid-cols-[120px_1fr] sm:gap-8">
                      <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                        Approach
                      </p>

                      <p className="text-sm leading-6 text-foreground sm:text-base sm:leading-7">
                        {item.approach}
                      </p>
                    </div>

                    <div className="grid gap-2 py-5 sm:grid-cols-[120px_1fr] sm:gap-8">
                      <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                        Outcome
                      </p>

                      <p className="text-sm leading-6 text-foreground sm:text-base sm:leading-7">
                        {item.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* What Cases Show */}
      <section className="border-t border-border bg-muted py-24 sm:py-32 lg:py-40">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
                A Note on Results
              </p>

              <h2 className="max-w-xl font-(--font-display) text-4xl leading-[0.95] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
                Every Smile Has a Different Starting Point.
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Treatment results depend on individual dental health, treatment
                requirements, biology, and other clinical factors. The cases
                shown here are examples of treatment provided by the clinic
                and should not be understood as a guarantee of a particular
                result.
              </p>

              <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                During your consultation, the dentist can assess your specific
                needs and explain what may be appropriate for you.
              </p>
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
              Your Treatment Journey Starts With Understanding.
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-primary-foreground/75 sm:text-lg sm:leading-8">
              Tell us what you&apos;d like help with, and we&apos;ll help you understand
              the next step in your care.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <BookConsultationButton className="rounded-md bg-background px-6 py-6 text-foreground hover:bg-background/90" />

              <Link
                href="/treatments"
                className="group inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-primary-foreground"
              >
                Explore Treatments
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