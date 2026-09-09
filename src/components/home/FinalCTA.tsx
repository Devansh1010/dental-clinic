import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { BookConsultationButton } from "../shared/Button";

export function FinalCTA() {
  return (
    <section className="border-t border-border bg-primary py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
            Begin With a Consultation
          </p>

          <h2 className="font-(--font-display) text-5xl leading-[0.92] tracking-tight text-primary-foreground sm:text-6xl lg:text-7xl xl:text-8xl">
            Let&apos;s Talk About Your Dental Health.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-primary-foreground/75 sm:text-lg sm:leading-8">
            Tell us what&apos;s concerning you, and we&apos;ll help you understand
            the next step in your care.
          </p>

          <div className="mt-9 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
            <BookConsultationButton className="rounded-md bg-background px-6 py-6 text-foreground hover:bg-background/90" />

            <a
              href="tel:[Phone Number]"
              className="group inline-flex items-center gap-2 text-sm font-medium text-primary-foreground"
            >
              Call the Clinic
              <ArrowUpRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.5}
              />
            </a>
          </div>

          <p className="mt-8 text-xs text-primary-foreground/60">
            [Add a short practical note here, such as consultation availability
            or booking hours, if useful.]
          </p>
        </div>
      </Container>
    </section>
  );
}