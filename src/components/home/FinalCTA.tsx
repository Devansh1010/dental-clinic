import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { BookConsultationButton } from "../shared/Button";

export function FinalCTA() {
  return (
    <section className="bg-muted py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-(--font-display) text-4xl leading-none tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Let&apos;s take the next step.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Whether you have a specific dental concern or simply want to
            understand your options, start with a consultation.
          </p>

          <div className="mt-9 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
            <BookConsultationButton className="rounded-md px-6 py-6" />

            <a
              href="tel:[Phone Number]"
              className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
            >
              Call the Clinic
              <ArrowUpRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.5}
              />
            </a>
          </div>

          <p className="mt-8 text-xs text-muted-foreground">
            Bopal, Ahmedabad · [9:00 AM - 6:00 PM]
          </p>
        </div>
      </Container>
    </section>
  );
}