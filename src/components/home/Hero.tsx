
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { BookConsultationButton } from "../shared/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-4 lg:pt-10 lg:pb-4">
      <Container className="flex min-h-[calc(100svh-5rem)] items-center py-24 lg:py-16">
        <div className="grid w-full items-center justify-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 xl:gap-20">
          {/* Content */}
          <div className="max-w-xl">
            <p className="mb-7 text-sm font-medium text-primary">
              Dental care in Bopal, Ahmedabad
            </p>

            <h1 className="max-w-xl font-(--font-display) text-[3.5rem] leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
              Dental Care,
              <br />
              <span className="text-primary">Thoughtfully Done.</span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Experienced dental care with clear guidance, personalized
              treatment plans, and a calm clinical environment.
            </p>

            <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
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

            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="text-2xl font-semibold tracking-tight text-foreground">
                  7+
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Years experience
                </p>
              </div>

              <div className="h-8 w-px bg-border" />

              <div>
                <p className="text-base font-medium text-foreground sm:text-lg">
                  [BDS / MDS]
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Qualification
                </p>
              </div>
            </div>
          </div>

          {/* Doctor Image */}
          <div className="flex justify-start lg:justify-end">
            <div className="relative aspect-5/6 w-full max-w-md overflow-hidden bg-muted lg:max-w-sm xl:max-w-md">
              <Image
                src="/images/doctor/hero.jpg"
                alt="Dr. [Doctor Name] providing dental care"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
