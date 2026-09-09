import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { BookConsultationButton } from "@/components/shared/Button";

const spaces = [
  {
    number: "01",
    title: "Reception",
    description:
      "A welcoming first point of contact, designed to make your arrival feel calm and straightforward.",
    image: "/images/clinic/reception.jpg",
  },
  {
    number: "02",
    title: "Treatment Room",
    description:
      "A dedicated clinical environment where your dental care takes place.",
    image: "/images/clinic/treatment-room.jpg",
  },
  {
    number: "03",
    title: "The Clinic",
    description:
      "A modern dental setting designed around the experience of patients and the work of the clinical team.",
    image: "/images/clinic/clinic-wide.jpg",
  },
];

const clinicDetails = [
  {
    number: "01",
    title: "A considered environment",
    description:
      "From the moment you arrive, the clinic is designed to provide a clear and comfortable experience.",
  },
  {
    number: "02",
    title: "A professional clinical setting",
    description:
      "Treatment takes place in a dedicated dental environment where clinical care remains the priority.",
  },
  {
    number: "03",
    title: "A space for conversation",
    description:
      "Your consultation is an opportunity to discuss your concerns, understand your options, and ask questions.",
  },
];

export default function ClinicPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-background pb-24 pt-32 sm:pb-32 sm:pt-40 lg:pb-40 lg:pt-44">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-end lg:gap-24">
            <div>
              <p className="mb-6 flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
                <span className="h-px w-10 bg-primary" />
                The Clinic
              </p>

              <h1 className="max-w-4xl font-(--font-display) text-5xl leading-[0.9] tracking-[-0.035em] text-foreground sm:text-6xl md:text-7xl lg:text-[5rem]">
                A Space Designed
                <br />
                Around Your Comfort.
              </h1>
            </div>

            <p className="max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8 lg:pb-2">
              A modern dental environment in Bopal, Ahmedabad, created to make
              your visit feel considered from the moment you arrive.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured Image */}
      <section className="bg-background pb-24 sm:pb-32 lg:pb-40">
        <Container>
          <div className="relative aspect-16/8 overflow-hidden bg-muted">
            <Image
              src="/images/clinic/clinic-wide.jpg"
              alt="Interior of the dental clinic"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </Container>
      </section>

      {/* Spaces */}
      <section className="border-t border-border bg-muted py-24 sm:py-32 lg:py-40">
        <Container>
          <div className="mb-14 max-w-3xl sm:mb-20">
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
              Inside the Clinic
            </p>

            <h2 className="font-(--font-display) text-4xl leading-[0.95] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
              See Where Your Care Happens.
            </h2>
          </div>

          <div className="grid gap-16 lg:grid-cols-3 lg:gap-8">
            {spaces.map((space) => (
              <article key={space.number}>
                <div className="relative aspect-4/5 overflow-hidden bg-background">
                  <Image
                    src={space.image}
                    alt={`${space.title} at the dental clinic`}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-medium tracking-[0.18em] text-primary">
                      {space.number}
                    </span>

                    <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                      The Clinic
                    </span>
                  </div>

                  <h3 className="mt-4 font-(--font-display) text-3xl tracking-[-0.02em] text-foreground">
                    {space.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                    {space.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Experience */}
      <section className="border-t border-border bg-background py-24 sm:py-32 lg:py-40">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
                The Experience
              </p>

              <h2 className="max-w-xl font-(--font-display) text-4xl leading-[0.95] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
                Thoughtful Care Extends Beyond the Treatment Room.
              </h2>
            </div>

            <div className="border-t border-border">
              {clinicDetails.map((detail) => (
                <div
                  key={detail.number}
                  className="grid gap-4 border-b border-border py-8 sm:grid-cols-[56px_1fr] sm:gap-8 sm:py-10"
                >
                  <span className="text-[10px] font-medium tracking-[0.18em] text-primary">
                    {detail.number}
                  </span>

                  <div>
                    <h3 className="font-(--font-display) text-2xl tracking-[-0.015em] text-foreground sm:text-3xl">
                      {detail.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                      {detail.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Clinic + Doctor */}
      <section className="border-t border-border bg-muted py-24 sm:py-32 lg:py-40">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div className="relative aspect-4/5 overflow-hidden bg-background">
              <Image
                src="/images/doctor/doctor.jpg"
                alt="Dr. [Doctor Name] at the clinic"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div>
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
                Meet Your Dentist
              </p>

              <h2 className="max-w-xl font-(--font-display) text-4xl leading-[0.95] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
                Experienced Care, In a Modern Setting.
              </h2>

              <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                The clinic brings together an experienced dentist and a modern
                clinical environment, with an approach that begins by
                understanding each patient&apos;s individual needs.
              </p>

              <Link
                href="/doctor"
                className="group mt-9 inline-flex items-center gap-2 text-sm font-medium text-foreground"
              >
                Meet the Doctor
                <ArrowUpRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Location */}
      <section className="border-t border-border bg-background py-24 sm:py-32 lg:py-40">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
                Location
              </p>

              <h2 className="max-w-md font-(--font-display) text-4xl leading-[0.95] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
                Visit Us in Bopal.
              </h2>

              <div className="mt-8 flex gap-4">
                <MapPin
                  className="mt-1 size-5 shrink-0 text-primary"
                  strokeWidth={1.5}
                />

                <div>
                  <p className="text-sm font-medium text-foreground">
                    [Complete Clinic Address]
                  </p>

                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    Bopal, Ahmedabad, Gujarat
                  </p>
                </div>
              </div>

              <Link
                href="/contact#location"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground"
              >
                Get Directions
                <ArrowUpRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
              </Link>
            </div>

            <div className="relative aspect-video overflow-hidden bg-muted">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin
                    className="mx-auto size-7 text-primary"
                    strokeWidth={1.5}
                  />

                  <p className="mt-4 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                    Google Maps
                  </p>

                  <p className="mt-2 text-sm text-muted-foreground">
                    Replace with the clinic&apos;s exact location
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-primary py-24 sm:py-32 lg:py-40">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
              Visit the Clinic
            </p>

            <h2 className="font-(--font-display) text-5xl leading-[0.92] tracking-tight text-primary-foreground sm:text-6xl lg:text-7xl">
              A Better Dental Visit Begins With the Right Environment.
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-primary-foreground/75 sm:text-lg sm:leading-8">
              When you&apos;re ready, start with a consultation and take the time
              to understand your dental care.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <BookConsultationButton className="rounded-md bg-background px-6 py-6 text-foreground hover:bg-background/90" />

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-primary-foreground"
              >
                Contact the Clinic
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