import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { BookConsultationButton } from "../shared/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <Container className="relative flex min-h-dvh items-center pt-28 pb-12 lg:min-h-[calc(100svh-80px)] lg:pt-20 lg:pb-10">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 xl:grid-cols-[0.85fr_1.15fr] xl:gap-16">
          {/* Content */}
          <div className="relative z-10 max-w-xl">
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-primary" />

              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
                Dental Care · Bopal, Ahmedabad
              </p>
            </div>

            {/* Heading */}
            <h1 className="max-w-2xl font-(--font-display) text-[3.5rem] leading-[0.9] tracking-[-0.035em] text-foreground sm:text-6xl md:text-7xl lg:text-[4.8rem] xl:text-[5.7rem]">
              Dental Care,
              <br />
              <span className="text-primary">Thoughtfully Done.</span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-md text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Thoughtful dental care led by an experienced dentist, with clear
              explanations and treatment plans shaped around your individual
              needs.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <BookConsultationButton className="rounded-md px-5 py-6" />

              <Link
                href="/doctor"
                className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
              >
                Meet the Doctor

                <ArrowUpRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
              </Link>
            </div>

            {/* Credibility */}
            <div className="mt-10 flex items-center gap-7 border-t border-border pt-5 sm:mt-12">
              <div>
                <p className="font-(--font-display) text-2xl text-foreground">
                  7+
                </p>

                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                  Years Experience
                </p>
              </div>

              <div className="h-8 w-px bg-border" />

              <div>
                <p className="font-(--font-display) text-xl text-foreground sm:text-2xl">
                  [BDS / MDS]
                </p>

                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                  Qualification
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-105 w-full overflow-hidden bg-muted sm:h-115 lg:h-130 xl:h-140">
              <Image
                src="/images/doctor/hero.jpg"
                alt="Dr. [Doctor Name] providing dental care"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />

              <div className="absolute inset-0 bg-linear-to-t from-foreground/10 via-transparent to-transparent" />
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 hidden size-20 border border-border lg:block" />
          </div>
        </div>
      </Container>
    </section>
  );
}