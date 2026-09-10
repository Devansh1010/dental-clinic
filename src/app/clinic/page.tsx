import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

import { Container } from "@/components/shared/Container";

import { FinalCTA } from "@/components/home/FinalCTA";

const spaces = [
  {
    title: "Reception",
    description:
      "A welcoming first point of contact, designed to make your arrival feel calm and straightforward.",
    image: "/images/clinic/reception.jpg",
  },
  {
    title: "Treatment Room",
    description:
      "A dedicated clinical environment where your dental care takes place.",
    image: "/images/clinic/treatment-room.jpg",
  },
  {
    title: "The Clinic",
    description:
      "A modern dental setting designed around the needs of patients and the clinical team.",
    image: "/images/clinic/clinic-wide.jpg",
  },
];

const clinicDetails = [
  {
    title: "Comfortable from the start",
    description:
      "From arrival through consultation and treatment, the environment is designed to feel clear, calm, and welcoming.",
  },
  {
    title: "Focused on clinical care",
    description:
      "Treatment takes place in a dedicated dental setting where your care and comfort remain the priority.",
  },
  {
    title: "Time to understand",
    description:
      "Your consultation gives you the opportunity to discuss your concerns, understand your options, and ask questions.",
  },
];

export default function ClinicPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-background pb-20 pt-32 sm:pb-24 sm:pt-40 lg:pb-28 lg:pt-44">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
            <div>
              <h1 className="max-w-3xl font-(--font-display) text-5xl leading-[0.95] tracking-[-0.03em] text-foreground sm:text-6xl lg:text-7xl">
                A calm, modern space for your dental care.
              </h1>
            </div>

            <p className="max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Take a closer look at the clinic in Bopal, Ahmedabad, from the
              spaces where you arrive to where your treatment takes place.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured Image */}
      <section className="bg-background pb-24 sm:pb-28 lg:pb-32">
        <Container>
          <div className="relative aspect-16/8 max-h-155 overflow-hidden bg-muted">
            <Image
              src="/images/clinic/clinic-wide.jpg"
              alt="Interior of the dental clinic in Bopal, Ahmedabad"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </Container>
      </section>

      {/* Spaces */}
      <section className="bg-muted py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <h2 className="max-w-xl font-(--font-display) text-4xl leading-none tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Designed for the experience of care.
              </h2>
            </div>

            <p className="max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Every part of the clinic has a role in making your visit feel
              comfortable, clear, and professional.
            </p>
          </div>

          <div className="mt-14 grid gap-10 sm:mt-16 lg:grid-cols-3 lg:gap-6">
            {spaces.map((space) => (
              <article key={space.title}>
                <div className="relative aspect-4/3 overflow-hidden bg-background">
                  <Image
                    src={space.image}
                    alt={`${space.title} at the dental clinic`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>

                <div className="mt-5">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                    {space.title}
                  </h3>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                    {space.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Experience */}
      <section className="bg-background py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <h2 className="max-w-xl font-(--font-display) text-4xl leading-none tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Good dental care starts with feeling comfortable.
              </h2>
            </div>

            <div className="border-t border-border">
              {clinicDetails.map((detail) => (
                <div
                  key={detail.title}
                  className="border-b border-border py-7 sm:py-8"
                >
                  <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
                    {detail.title}
                  </h3>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                    {detail.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Doctor */}
      <section className="bg-muted py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div className="relative aspect-4/5 max-w-lg overflow-hidden bg-background">
              <Image
                src="/images/doctor/doctor.jpg"
                alt="Dr. [Doctor Name] at the dental clinic"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="max-w-xl">
              <h2 className="font-(--font-display) text-4xl leading-none tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Experienced care, in a modern setting.
              </h2>

              <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                The clinic brings together an experienced dentist and a
                patient-focused approach, with time to understand your
                concerns before recommending the next step.
              </p>

              <Link
                href="/doctor"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground"
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
      <section className="bg-background py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-20">
            <div>
              <h2 className="max-w-md font-(--font-display) text-4xl leading-none tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Find us in Bopal.
              </h2>

              <div className="mt-8 flex gap-4">
                <MapPin
                  className="mt-1 size-5 shrink-0 text-primary"
                  strokeWidth={1.5}
                />

                <div>
                  <p className="text-sm font-medium text-foreground">
                    Clinic Address
                  </p>

                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    [Complete Clinic Address]
                    <br />
                    Bopal, Ahmedabad, Gujarat
                  </p>
                </div>
              </div>

              <Link
                href="/contact#location"
                className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-foreground"
              >
                Get Directions
                <ArrowUpRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
              </Link>
            </div>

            <div className="relative aspect-video overflow-hidden bg-muted">
              {/* Replace with the actual Google Maps embed */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin
                    className="mx-auto size-7 text-primary"
                    strokeWidth={1.5}
                  />

                  <p className="mt-3 text-sm font-medium text-foreground">
                    Clinic Location
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Google Maps will be added here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <FinalCTA />
    </main>
  );
}