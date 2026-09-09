import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/shared/Container";

export function ClinicPreview() {
  return (
    <section className="border-t border-border bg-background py-24 sm:py-32 lg:py-40">
      <Container>
        {/* Heading */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
              The Clinic
            </p>

            <h2 className="max-w-3xl font-(--font-display) text-4xl leading-[0.95] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
              A Space Designed Around Your Comfort.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8 lg:pb-1">
            A modern dental environment in Bopal, Ahmedabad, designed to make
            your visit feel considered from the moment you arrive.
          </p>
        </div>

        {/* Images */}
        <div className="mt-14 grid gap-4 sm:mt-20 lg:grid-cols-[1.5fr_1fr] lg:gap-6">
          {/* Main Image */}
          <div className="relative aspect-4/3 overflow-hidden bg-muted lg:aspect-auto lg:h-155">
            <Image
              src="/images/clinic/reception.jpg"
              alt="Reception area of the dental clinic"
              fill
              className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>

          {/* Secondary Image */}
          <div className="relative aspect-4/3 overflow-hidden bg-muted lg:h-155 lg:aspect-auto">
            <Image
              src="/images/clinic/treatment-room.jpg"
              alt="Treatment room at the dental clinic"
              fill
              className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              sizes="(max-width: 1024px) 40vw, 35vw"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex flex-col gap-5 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-6 text-muted-foreground">
            Explore the clinic, treatment spaces, and practical information
            about visiting us.
          </p>

          <Link
            href="/clinic"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-foreground"
          >
            Explore the Clinic
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