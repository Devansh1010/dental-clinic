import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/shared/Container";

export function ClinicPreview() {
  return (
    <section className="bg-muted py-24 sm:py-28 lg:py-32">
      <Container>
        {/* Intro */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <h2 className="max-w-2xl font-(--font-display) text-4xl leading-none tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              A calm, modern space for your dental care.
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              From the reception area to the treatment room, the clinic is
              designed to provide a clean, comfortable environment for every
              visit.
            </p>
          </div>
        </div>

        {/* Images */}
        <div className="mt-14 grid gap-4 sm:mt-16 lg:grid-cols-[1.45fr_0.85fr] lg:gap-5">
          {/* Main image */}
          <div className="relative aspect-4/3 overflow-hidden bg-background lg:aspect-1.25/1">
            <Image
              src="/images/clinic/reception.jpg"
              alt="Reception area of the dental clinic in Bopal, Ahmedabad"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 80vw, 65vw"
            />
          </div>

          {/* Secondary image */}
          <div className="relative aspect-4/3 overflow-hidden bg-background lg:aspect-auto">
            <Image
              src="/images/clinic/treatment-room.jpg"
              alt="Dental treatment room at the clinic"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 80vw, 35vw"
            />
          </div>
        </div>

        {/* Supporting information */}
        <div className="mt-8 grid gap-8 border-t border-border pt-8 sm:grid-cols-[1fr_auto] sm:items-start">
          <div className="grid gap-6 sm:grid-cols-3 sm:gap-10">
            <div>
              <p className="text-sm font-medium text-foreground">
                Modern environment
              </p>
              <p className="mt-2 max-w-xs text-sm leading-6 text-muted-foreground">
                A clean and thoughtfully arranged clinical setting.
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-foreground">
                Patient-focused care
              </p>
              <p className="mt-2 max-w-xs text-sm leading-6 text-muted-foreground">
                Time to understand your concerns before treatment.
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-foreground">
                Bopal, Ahmedabad
              </p>
              <p className="mt-2 max-w-xs text-sm leading-6 text-muted-foreground">
                Conveniently located for patients in and around Bopal.
              </p>
            </div>
          </div>

          <Link
            href="/clinic"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-foreground"
          >
            Visit the Clinic
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