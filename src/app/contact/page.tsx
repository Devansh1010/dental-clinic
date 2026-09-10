
import Link from "next/link";
import { ArrowUpRight, Clock3, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { BookConsultationButton } from "@/components/shared/Button";

const contactDetails = [
  {
    icon: Phone,
    label: "Call",
    value: "[Clinic Phone Number]",
    href: "tel:[CLINIC_PHONE]",
  },
  {
    icon: MapPin,
    label: "Visit",
    value: "[Complete Clinic Address], Bopal, Ahmedabad",
    href: "#location",
  },
  {
    icon: Clock3,
    label: "Hours",
    value: "[Mon–Sat · 10:00 AM – 8:00 PM]",
    href: "#hours",
  },
];

const consultationTopics = [
  "General dental concern",
  "Tooth pain or sensitivity",
  "Dental implants",
  "Cosmetic dentistry",
  "Routine dental check-up",
  "Something else",
];

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-background pb-20 pt-32 sm:pb-24 sm:pt-40 lg:pb-28 lg:pt-44">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-24">
            <div>
              <h1 className="max-w-3xl font-(--font-display) text-5xl leading-[0.95] tracking-[-0.03em] text-foreground sm:text-6xl lg:text-7xl">
                Let&apos;s Talk About
                <br />
                Your Dental Care.
              </h1>
            </div>

            <p className="max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Have a dental concern, need a consultation, or simply want to
              understand your options? Get in touch with the clinic.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact + Form */}
      <section className="bg-muted py-20 sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            {/* Contact Details */}
            <div>
              <h2 className="max-w-md font-(--font-display) text-4xl leading-none tracking-tight text-foreground sm:text-5xl">
                Get in touch with the clinic.
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                If you already know what you need, you can contact the clinic
                directly. If you&apos;re unsure, simply tell us what you&apos;re
                experiencing.
              </p>

              <div className="mt-10 border-t border-border">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon;

                  return (
                    <div
                      key={detail.label}
                      className="border-b border-border py-6"
                    >
                      <div className="flex items-start gap-4">
                        <Icon
                          className="mt-0.5 size-5 shrink-0 text-primary"
                          strokeWidth={1.5}
                        />

                        <div>
                          <p className="text-sm font-medium text-foreground">
                            {detail.label}
                          </p>

                          {detail.href.startsWith("tel:") ? (
                            <a
                              href={detail.href}
                              className="mt-1 block text-sm leading-6 text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                            >
                              {detail.value}
                            </a>
                          ) : (
                            <Link
                              href={detail.href}
                              className="mt-1 block text-sm leading-6 text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                            >
                              {detail.value}
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Link
                href="#location"
                className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-foreground"
              >
                View clinic location
                <ArrowUpRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
              </Link>
            </div>

            {/* Consultation Form */}
            <div className="bg-background p-7 sm:p-10 lg:p-12">
              <div className="max-w-2xl">
                <h2 className="font-(--font-display) text-3xl leading-tight tracking-[-0.02em] text-foreground sm:text-4xl">
                  Request a consultation.
                </h2>

                <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                  Share a few details and the clinic can get back to you about
                  the next step.
                </p>

                <form className="mt-10 space-y-7">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-medium text-foreground"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="h-12 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-xs font-medium text-foreground"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="Your phone number"
                      className="h-12 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
                    />
                  </div>

                  {/* Treatment */}
                  <div>
                    <label
                      htmlFor="interest"
                      className="mb-2 block text-xs font-medium text-foreground"
                    >
                      What would you like help with?
                    </label>

                    <select
                      id="interest"
                      name="interest"
                      required
                      defaultValue=""
                      className="h-12 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none focus:border-primary"
                    >
                      <option value="" disabled>
                        Select an option
                      </option>

                      {consultationTopics.map((topic) => (
                        <option key={topic} value={topic}>
                          {topic}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <label
                      htmlFor="time"
                      className="mb-2 block text-xs font-medium text-foreground"
                    >
                      Preferred Time
                    </label>

                    <input
                      id="time"
                      name="time"
                      type="text"
                      placeholder="e.g. Weekday evening"
                      className="h-12 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs font-medium text-foreground"
                    >
                      Anything you&apos;d like us to know?
                      <span className="ml-2 font-normal text-muted-foreground">
                        Optional
                      </span>
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us briefly about your concern..."
                      className="w-full resize-none border-b border-border bg-transparent px-0 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
                    />
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex h-12 items-center justify-center gap-2 bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      Request a Consultation
                      <ArrowUpRight
                        className="size-4"
                        strokeWidth={1.5}
                      />
                    </button>

                    <p className="mt-4 max-w-md text-[11px] leading-5 text-muted-foreground">
                      By submitting this form, you&apos;re requesting contact
                      from the clinic. This does not confirm an appointment.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Location */}
      <section
        id="location"
        className="bg-background py-20 sm:py-28 lg:py-32"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-24">
            <div>
              <h2 className="max-w-md font-(--font-display) text-4xl leading-none tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Find the clinic in Bopal.
              </h2>

              <div className="mt-8 space-y-7">
                <div>
                  <p className="text-xs font-medium text-foreground">
                    Address
                  </p>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
                    [Complete Clinic Address]
                    <br />
                    Bopal, Ahmedabad, Gujarat
                  </p>
                </div>

                <div id="hours">
                  <p className="text-xs font-medium text-foreground">
                    Clinic Hours
                  </p>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    [Monday – Saturday]
                    <br />
                    [10:00 AM – 8:00 PM]
                  </p>
                </div>
              </div>

              <Link
                href="#"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground"
              >
                Get Directions
                <ArrowUpRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
              </Link>
            </div>

            {/* Replace with actual Google Maps embed */}
            <div className="relative aspect-video overflow-hidden bg-muted sm:aspect-16/8">
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
                    Google Maps will be added here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
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
                href="tel:[CLINIC_PHONE]"
                className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
              >
                Call the Clinic
                <ArrowUpRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
