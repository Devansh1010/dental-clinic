
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { BookConsultationButton } from "@/components/shared/Button";

const patientStories = [
  {
    quote:
      "[Real patient review will be placed here. Keep the patient's original voice wherever possible.]",
    name: "[Patient Name]",
    treatment: "[Treatment]",
    source: "[Google / Other Review Source]",
  },
  {
    quote:
      "[Real patient review will be placed here. A short, natural review is completely fine.]",
    name: "[Patient Name]",
    treatment: "[Treatment]",
    source: "[Google / Other Review Source]",
  },
  {
    quote:
      "[Real patient review will be placed here. Avoid rewriting the review into marketing language.]",
    name: "[Patient Name]",
    treatment: "[Treatment]",
    source: "[Google / Other Review Source]",
  },
];

const cases = [
  {
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
      <section className="bg-background pb-20 pt-32 sm:pb-24 sm:pt-40 lg:pb-28 lg:pt-44">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-24">
            <div>
              <h1 className="max-w-3xl font-(--font-display) text-5xl leading-[0.95] tracking-[-0.03em] text-foreground sm:text-6xl lg:text-7xl">
                Real experiences.
                <br />
                Real treatment journeys.
              </h1>
            </div>

            <p className="max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Hear from patients about their experience at the clinic and
              explore selected examples of dental treatment.
            </p>
          </div>
        </Container>
      </section>

      {/* Patient Reviews */}
      <section className="bg-muted py-20 sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <h2 className="max-w-md font-(--font-display) text-4xl leading-none tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                What patients say.
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                Real patient experiences can help you understand what to expect
                from a visit to the clinic.
              </p>
            </div>

            <div className="border-t border-border">
              {patientStories.map((story) => (
                <article
                  key={`${story.name}-${story.treatment}`}
                  className="border-b border-border py-8 sm:py-10"
                >
                  <blockquote className="max-w-3xl text-lg leading-7 text-foreground sm:text-xl sm:leading-8">
                    “{story.quote}”
                  </blockquote>

                  <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">
                      {story.name}
                    </span>

                    <span aria-hidden="true">·</span>

                    <span>{story.treatment}</span>

                    <span aria-hidden="true">·</span>

                    <span>{story.source}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Treatment Cases */}
      <section className="bg-background py-20 sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-20">
            <div>
              <h2 className="max-w-2xl font-(--font-display) text-4xl leading-none tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                A closer look at selected treatments.
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
              These cases show how treatment can differ depending on the
              patient&apos;s dental condition, needs, and goals.
            </p>
          </div>

          <div className="mt-14 grid gap-14 sm:mt-16 lg:grid-cols-2 lg:gap-10">
            {cases.map((item) => (
              <article key={item.title}>
                <div className="relative aspect-4/3 overflow-hidden bg-muted">
                  <Image
                    src={item.image}
                    alt={`${item.title} treatment case`}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-[1.015]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                <div className="mt-6">
                  <p className="text-sm font-medium text-primary">
                    {item.treatment}
                  </p>

                  <h3 className="mt-2 font-(--font-display) text-3xl leading-tight tracking-[-0.02em] text-foreground sm:text-4xl">
                    {item.title}
                  </h3>

                  <div className="mt-7 border-t border-border">
                    <div className="grid gap-2 border-b border-border py-5 sm:grid-cols-[110px_1fr] sm:gap-8">
                      <p className="text-xs font-medium text-muted-foreground">
                        Concern
                      </p>

                      <p className="text-sm leading-6 text-foreground sm:text-base sm:leading-7">
                        {item.concern}
                      </p>
                    </div>

                    <div className="grid gap-2 border-b border-border py-5 sm:grid-cols-[110px_1fr] sm:gap-8">
                      <p className="text-xs font-medium text-muted-foreground">
                        Approach
                      </p>

                      <p className="text-sm leading-6 text-foreground sm:text-base sm:leading-7">
                        {item.approach}
                      </p>
                    </div>

                    <div className="grid gap-2 py-5 sm:grid-cols-[110px_1fr] sm:gap-8">
                      <p className="text-xs font-medium text-muted-foreground">
                        Outcome
                      </p>

                      <p className="text-sm leading-6 text-foreground sm:text-base sm:leading-7">
                        {item.outcome}
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="group mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground"
                  >
                    Discuss your treatment needs
                    <ArrowUpRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={1.5}
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Results Disclaimer */}
      <section className="bg-muted py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <h2 className="max-w-md font-(--font-display) text-3xl leading-none tracking-[-0.02em] text-foreground sm:text-4xl">
              Every patient is different.
            </h2>

            <div className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
              <p>
                Treatment results depend on individual dental health, treatment
                requirements, biology, and other clinical factors. The cases
                shown here are examples of treatment provided by the clinic and
                should not be understood as a guarantee of a particular result.
              </p>

              <p className="mt-5">
                During a consultation, the dentist can assess your specific
                needs and explain what treatment options may be appropriate for
                you.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-background py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-(--font-display) text-4xl leading-none tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Let&apos;s take the next step.
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Have a dental concern or want to understand your treatment
              options? Start with a consultation.
            </p>

            <div className="mt-9 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
              <BookConsultationButton className="rounded-md px-6 py-6" />

              <Link
                href="/treatments"
                className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
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
