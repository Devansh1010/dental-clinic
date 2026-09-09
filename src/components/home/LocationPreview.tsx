import Link from "next/link";
import { ArrowUpRight, MapPin, Phone, Clock } from "lucide-react";
import { Container } from "@/components/shared/Container";

export function LocationPreview() {
  return (
    <section className="border-t border-border bg-background py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch lg:gap-20">
          {/* Map */}
          <div className="relative min-h-90 overflow-hidden bg-muted sm:min-h-120 lg:min-h-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin
                  className="mx-auto size-7 text-primary"
                  strokeWidth={1.5}
                />

                <p className="mt-4 font-(--font-display) text-2xl text-foreground">
                  Clinic Location
                </p>

                <p className="mt-2 text-sm text-muted-foreground">
                  Map will be added here
                </p>
              </div>
            </div>
          </div>

          {/* Location & Contact */}
          <div className="flex flex-col justify-center">
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
              Visit the Clinic
            </p>

            <h2 className="max-w-xl font-(--font-display) text-4xl leading-[0.95] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
              Visit Us in Bopal.
            </h2>

            <p className="mt-7 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Conveniently located in Bopal, Ahmedabad. Find the clinic,
              contact us, or get directions for your visit.
            </p>

            <div className="mt-10 border-y border-border">
              <div className="flex gap-5 py-6">
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

              <div className="flex gap-5 border-t border-border py-6">
                <Phone
                  className="mt-0.5 size-5 shrink-0 text-primary"
                  strokeWidth={1.5}
                />

                <div>
                  <p className="text-sm font-medium text-foreground">
                    Contact
                  </p>

                  <a
                    href="tel:[Phone Number]"
                    className="mt-1 inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    [Phone Number]
                  </a>
                </div>
              </div>

              <div className="flex gap-5 border-t border-border py-6">
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