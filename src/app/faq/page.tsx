import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { BookConsultationButton } from "@/components/shared/Button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    title: "Before Your Visit",
    questions: [
      {
        question: "What happens during my first visit?",
        answer:
          "Your first visit begins with understanding what brought you in and what concerns you have. The dentist will assess your dental health, explain the findings clearly, and discuss the appropriate options for your situation.",
      },
      {
        question: "Do I need to know which treatment I need before booking?",
        answer:
          "No. You don't need to know the name of a treatment before contacting the clinic. You can simply explain what you're experiencing or what you'd like to improve, and the dentist can guide you after assessing your needs.",
      },
      {
        question: "What should I bring to my appointment?",
        answer:
          "[Add the clinic's confirmed guidance here. For example, previous dental records, scans, or medication information if relevant.]",
      },
    ],
  },
  {
    title: "Treatment",
    questions: [
      {
        question: "Will my treatment be painful?",
        answer:
          "The level of discomfort depends on the treatment and your individual situation. The dentist will explain what you can expect before treatment and discuss appropriate ways of managing discomfort where needed.",
      },
      {
        question: "How long will my treatment take?",
        answer:
          "Treatment time varies depending on the procedure, your dental condition, and the treatment plan. After an examination, the dentist can give you a more relevant estimate for your specific case.",
      },
      {
        question: "Will I understand the treatment before it starts?",
        answer:
          "Yes. The aim is to explain the findings, available options, and relevant considerations clearly so you can understand your treatment before deciding how to proceed.",
      },
    ],
  },
  {
    title: "Cost & Decisions",
    questions: [
      {
        question: "How much does a consultation cost?",
        answer:
          "[Add the confirmed consultation fee here.]",
      },
      {
        question: "How much will my treatment cost?",
        answer:
          "Treatment costs depend on your individual dental needs and the procedure involved. After examination, the clinic can explain the recommended treatment and associated costs before you proceed.",
      },
      {
        question: "Do I have to decide on treatment during my first visit?",
        answer:
          "[Replace this with the clinic's actual policy. Do not promise that patients can always delay treatment unless the clinic confirms this.]",
      },
    ],
  },
  {
    title: "The Clinic",
    questions: [
      {
        question: "Where is the clinic located?",
        answer:
          "The clinic is located in Bopal, Ahmedabad. Visit the contact page for the complete address, directions, phone number, and clinic hours.",
      },
      {
        question: "How can I contact the clinic?",
        answer:
          "You can contact the clinic by phone or through the consultation request form. WhatsApp can also be provided if the clinic uses it for patient enquiries.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-background pb-24 pt-32 sm:pb-32 sm:pt-40 lg:pb-40 lg:pt-44">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-end lg:gap-24">
            <div>
              <p className="mb-6 flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
                <span className="h-px w-10 bg-primary" />
                Frequently Asked
              </p>

              <h1 className="max-w-4xl font-(--font-display) text-5xl leading-[0.9] tracking-[-0.035em] text-foreground sm:text-6xl md:text-7xl lg:text-[5rem]">
                Questions,
                <br />
                Answered Clearly.
              </h1>
            </div>

            <p className="max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8 lg:pb-2">
              Everything you may want to know before visiting the clinic or
              deciding on your next step.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-muted py-24 sm:py-32 lg:py-40">
        <Container>
          <div className="mx-auto max-w-5xl">
            {faqCategories.map((category) => (
              <section key={category.title} className="mb-20 last:mb-0 sm:mb-24">
                <div className="mb-8 grid gap-4 sm:grid-cols-[0.35fr_1fr] sm:gap-12">
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
                    {category.title}
                  </p>
                </div>

                <Accordion
                  className="border-t border-border"
                >
                  {category.questions.map((item, index) => (
                    <AccordionItem
                      key={item.question}
                      value={`${category.title}-${index}`}
                      className="border-b border-border"
                    >
                      <AccordionTrigger className="gap-8 py-7 text-left font-(--font-display) text-xl tracking-[-0.01em] text-foreground hover:no-underline sm:py-8 sm:text-2xl">
                        <span>{item.question}</span>
                      </AccordionTrigger>

                      <AccordionContent className="max-w-3xl pb-8 pr-8 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            ))}
          </div>
        </Container>
      </section>

      {/* First Visit */}
      <section className="border-t border-border bg-background py-24 sm:py-32 lg:py-40">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
                Still Unsure?
              </p>

              <h2 className="max-w-xl font-(--font-display) text-4xl leading-[0.95] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
                Your First Visit Is About Understanding.
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                You don&apos;t need to arrive knowing exactly what treatment you
                need. The consultation is an opportunity to discuss your
                concerns, understand your dental health, and learn about the
                options that may be appropriate for you.
              </p>

              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground"
              >
                Learn About Your First Visit
                <ArrowUpRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-primary py-24 sm:py-32 lg:py-40">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
              Have More Questions?
            </p>

            <h2 className="font-(--font-display) text-5xl leading-[0.92] tracking-tight text-primary-foreground sm:text-6xl lg:text-7xl">
              Let&apos;s Talk About Your Dental Care.
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-primary-foreground/75 sm:text-lg sm:leading-8">
              If you couldn&apos;t find what you were looking for, contact the
              clinic and discuss your concerns directly.
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