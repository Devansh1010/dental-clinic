import Link from "next/link";
import { ArrowUpRight, Clock3, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { BookConsultationButton } from "@/components/shared/Button";

const contactDetails = [
  {
    icon: Phone,
    label: "Call the Clinic",
    value: "[Clinic Phone Number]",
    href: "tel:[CLINIC_PHONE]",
  },
  {
    icon: MapPin,
    label: "Visit the Clinic",
    value: "[Complete Clinic Address], Bopal, Ahmedabad",
    href: "#location",
  },
  {
    icon: Clock3,
    label: "Clinic Hours",
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
      <section className="bg-background pb-20 pt-32 sm:pb-28 sm:pt-40 lg:pb-36 lg:pt-44">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-24">
            <div>
              <p className="mb-6 flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
                <span className="h-px w-10 bg-primary" />
                Get in Touch
              </p>

              <h1 className="max-w-4xl font-(--font-display) text-5xl leading-[0.9] tracking-[-0.035em] text-foreground sm:text-6xl md:text-7xl lg:text-[5rem]">
                Let&apos;s Talk About
                <br />
                Your Dental Care.
              </h1>
            </div>

            <p className="max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8 lg:pb-2">
              Tell us what you&apos;d like help with, and the clinic will get back
              to you to discuss the next step.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact + Form */}
      <section className="border-t border-border bg-muted py-20 sm:py-28 lg:py-36">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
            {/* Contact Details */}
            <div>
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
                Contact the Clinic
              </p>

              <h2 className="max-w-md font-(--font-display) text-4xl leading-[0.95] tracking-[-0.02em] text-foreground sm:text-5xl">
                Choose the Way That Feels Easiest.
              </h2>

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
                          className="mt-0.5 size-4 text-primary"
                          strokeWidth={1.5}
                        />

                        <div>
                          <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                            {detail.label}
                          </p>

                          {detail.href.startsWith("tel:") ? (
                            <a
                              href={detail.href}
                              className="mt-2 block text-base font-medium text-foreground underline-offset-4 hover:underline"
                            >
                              {detail.value}
                            </a>
                          ) : (
                            <Link
                              href={detail.href}
                              className="mt-2 block text-base font-medium text-foreground underline-offset-4 hover:underline"
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

              <p className="mt-8 max-w-sm text-sm leading-6 text-muted-foreground">
                If you&apos;re unsure which treatment you need, that&apos;s completely
                fine. Simply tell us what you&apos;re experiencing and we&apos;ll help
                you understand the next step.
              </p>
            </div>

            {/* Consultation Form */}
            <div className="bg-background p-7 sm:p-10 lg:p-12">
              <div className="max-w-2xl">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-primary">
                  Request a Consultation
                </p>

                <h2 className="mt-4 font-(--font-display) text-3xl tracking-[-0.02em] text-foreground sm:text-4xl">
                  Tell Us What You&apos;d Like Help With.
                </h2>

                <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                  Share a few details and the clinic can get back to you about
                  your enquiry.
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
                      By submitting this form, you&apos;re requesting contact from
                      the clinic. This does not confirm an appointment.
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
        className="border-t border-border bg-background py-20 sm:py-28 lg:py-36"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
                Visit Us
              </p>

              <h2 className="max-w-md font-(--font-display) text-4xl leading-[0.95] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
                Find Us in Bopal.
              </h2>

              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                    Address
                  </p>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-foreground">
                    [Complete Clinic Address]
                    <br />
                    Bopal, Ahmedabad, Gujarat
                  </p>
                </div>

                <div id="hours">
                  <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                    Clinic Hours
                  </p>

                  <p className="mt-2 text-sm leading-6 text-foreground">
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

            {/* Map Placeholder */}
            <div className="relative min-h-90 overflow-hidden bg-muted sm:min-h-120">
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

      {/* Final CTA */}
      <section className="border-t border-border bg-primary py-24 sm:py-32 lg:py-40">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
              Your Next Step
            </p>

            <h2 className="font-(--font-display) text-5xl leading-[0.92] tracking-tight text-primary-foreground sm:text-6xl lg:text-7xl">
              Start With a Conversation.
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-primary-foreground/75 sm:text-lg sm:leading-8">
              You don&apos;t need to have everything figured out. Tell us what&apos;s
              concerning you, and we&apos;ll help you understand where to begin.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <BookConsultationButton className="rounded-md bg-background px-6 py-6 text-foreground hover:bg-background/90" />

              <a
                href="tel:[CLINIC_PHONE]"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-primary-foreground"
              >
                Call the Clinic
                <ArrowUpRight className="size-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}