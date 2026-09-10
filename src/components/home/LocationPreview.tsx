import Link from "next/link";
import { ArrowUpRight, MapPin, Phone, Clock } from "lucide-react";

import { Container } from "@/components/shared/Container";

export function LocationPreview() {
  return (
    <section className="bg-background py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Map */}
          <div className="relative min-h-90 overflow-hidden bg-muted sm:min-h-110 lg:min-h-130">
            {/* Replace with Google Maps embed */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin
                  className="mx-auto size-7 text-primary"
                  strokeWidth={1.5}
                />

                <p className="mt-4 text-sm font-medium text-foreground">
                  Clinic Location
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  Bopal, Ahmedabad
                </p>
              </div>
            </div>
          </div>

          {/* Location & Contact */}
          <div className="flex flex-col justify-center">
            <h2 className="max-w-xl font-(--font-display) text-4xl leading-none tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Easy to find. Easy to reach.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Located in Bopal, Ahmedabad. Find the clinic, check the visiting
              hours, or get in touch before your appointment.
            </p>

            {/* Details */}
            <div className="mt-10 border-y border-border">
              <div className="flex gap-5 py-5">
                <MapPin
                  className="mt-0.5 size-5 shrink-0 text-primary"
                  strokeWidth={1.5}
                />

                <div>
                  <p className="text-sm font-medium text-foreground">
                    Clinic Address
                  </p>

                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    [Clinic Address], Bopal, Ahmedabad
                  </p>
                </div>
              </div>

              <div className="flex gap-5 border-t border-border py-5">
                <Phone
                  className="mt-0.5 size-5 shrink-0 text-primary"
                  strokeWidth={1.5}
                />

                <div>
                  <p className="text-sm font-medium text-foreground">
                    Phone
                  </p>

                  <a
                    href="tel:[Phone Number]"
                    className="mt-1 inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    [Phone Number]
                  </a>
                </div>
              </div>

              <div className="flex gap-5 border-t border-border py-5">
                <Clock
                  className="mt-0.5 size-5 shrink-0 text-primary"
                  strokeWidth={1.5}
                />

                <div>
                  <p className="text-sm font-medium text-foreground">
                    Clinic Hours
                  </p>

                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    [Clinic Hours]
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
              >
                Contact the Clinic

                <ArrowUpRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
              </Link>

              <a
                href="#"
                className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Get directions

                <ArrowUpRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}