import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/shared/Container";

const cases = [
  {
    number: "01",
    title: "Smile Restoration",
    treatment: "Cosmetic Dentistry",
    image: "/images/patients/case-01.jpg",
  },
  {
    number: "02",
    title: "Tooth Replacement",
    treatment: "Dental Implants",
    image: "/images/patients/case-02.jpg",
  },
];

export function CaseResults() {
  return (
    <section className="border-t border-border bg-muted py-24 sm:py-32 lg:py-40">
      <Container>
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
              Treatment Results
            </p>

            <h2 className="max-w-3xl font-(--font-display) text-4xl leading-[0.95] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
              Selected Treatment Results.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8 lg:pt-10">
            Explore selected treatment cases to understand the approach and
            outcomes of different procedures. Every treatment plan is
            individual and outcomes can vary from patient to patient.
          </p>
        </div>

        {/* Cases */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:mt-24">
          {cases.map((item) => (
            <Link
              key={item.number}
              href="/patient-stories"
              className="group"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-background">
                <Image
                  src={item.image}
                  alt={`${item.title} treatment case`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>

              <div className="mt-5 flex items-start justify-between gap-6">
                <div>
                  <span className="text-[10px] font-medium tracking-[0.18em] text-primary">
                    {item.number}
                  </span>

                  <h3 className="mt-2 font-(--font-display) text-2xl text-foreground sm:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.treatment}
                  </p>
                </div>

                <span className="mt-1 flex size-9 shrink-0 items-center justify-center border border-border transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowUpRight className="size-4" strokeWidth={1.5} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Link */}
        <div className="mt-8 flex justify-end">
          <Link
            href="/patient-stories"
            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
          >
            View all treatment results
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