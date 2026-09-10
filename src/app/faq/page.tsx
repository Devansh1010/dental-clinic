
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
          "Your first visit begins with understanding what brought you in and what concerns you have. The dentist will assess your dental health, explain the findings, and discuss the appropriate options for your situation.",
      },
      {
        question: "Do I need to know which treatment I need before booking?",
        answer:
          "No. You can simply explain what you're experiencing or what you'd like to improve. The dentist can guide you after assessing your needs.",
      },
      {
        question: "What should I bring to my appointment?",
        answer:
          "[Add the clinic's confirmed guidance here, such as previous dental records, scans, or relevant medication information.]",
      },
    ],
  },
  {
    title: "Treatment",
    questions: [
      {
        question: "Will my treatment be painful?",
        answer:
          "Discomfort varies depending on the treatment and your individual situation. The dentist will explain what you can expect and discuss appropriate ways of managing discomfort where needed.",
      },
      {
        question: "How long will my treatment take?",
        answer:
          "Treatment time depends on the procedure, your dental condition, and your treatment plan. After an examination, the dentist can give you a more relevant estimate for your case.",
      },
      {
        question: "Will I understand the treatment before it starts?",
        answer:
          "The dentist will explain the findings, available options, and relevant considerations so you can make an informed decision before proceeding.",
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
          "[Replace this with the clinic's confirmed policy.]",
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
          "You can contact the clinic by phone or through the consultation request form. If the clinic uses WhatsApp for enquiries, that can also be provided as a contact option.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-background pb-16 pt-32 sm:pb-20 sm:pt-40 lg:pb-24 lg:pt-44">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-24">
            <h1 className="max-w-3xl font-(--font-display) text-5xl leading-[0.95] tracking-[-0.03em] text-foreground sm:text-6xl lg:text-7xl">
              Questions,
              <br />
              answered clearly.
            </h1>

            <p className="max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Find answers about your first visit, treatments, costs, and the
              clinic before you decide on your next step.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-muted py-16 sm:py-24 lg:py-28">
        <Container>
          <div className="mx-auto max-w-5xl">
            {faqCategories.map((category, categoryIndex) => (
              <section
                key={category.title}
                className={
                  categoryIndex === faqCategories.length - 1
                    ? ""
                    : "mb-14 sm:mb-16"
                }
              >
                <h2 className="mb-5 text-sm font-semibold text-foreground">
                  {category.title}
                </h2>

                <Accordion className="border-t border-border">
                  {category.questions.map((item, index) => (
                    <AccordionItem
                      key={item.question}
                      value={`${category.title}-${index}`}
                      className="border-b border-border"
                    >
                      <AccordionTrigger className="gap-8 py-6 text-left text-base font-medium text-foreground hover:no-underline sm:py-7 sm:text-lg">
                        <span>{item.question}</span>
                      </AccordionTrigger>

                      <AccordionContent className="max-w-3xl pb-7 pr-8 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
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
      <section className="bg-background py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-20">
            <h2 className="max-w-2xl font-(--font-display) text-4xl leading-none tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              You don&apos;t need to have all the answers before you visit.
            </h2>

            <div>
              <p className="max-w-lg text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                If you&apos;re unsure what treatment you need, start by
                explaining your concern. The consultation is an opportunity to
                understand your dental health and discuss the options that may
                be appropriate for you.
              </p>

              <Link
                href="/contact"
                className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-foreground"
              >
                Get in touch
                <ArrowUpRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-muted py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-(--font-display) text-4xl leading-none tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Let&apos;s take the next step.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Still have a question? Contact the clinic or start with a
              consultation.
            </p>

            <div className="mt-8 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
              <BookConsultationButton className="rounded-md px-6 py-6" />

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
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
