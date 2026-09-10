import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/shared/Container";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "How much does a consultation cost?",
        answer:
            "[Add the clinic's consultation fee here.] Treatment costs vary depending on your dental needs and the treatment recommended after examination.",
    },
    {
        question: "Will my treatment be painful?",
        answer:
            "The level of discomfort depends on the treatment and your individual condition. The dentist will explain what to expect and discuss appropriate ways to keep you comfortable throughout the procedure.",
    },
    {
        question: "What happens during my first visit?",
        answer:
            "Your first visit begins with understanding your concerns and examining your dental health. The dentist will then explain the findings and discuss the treatment options that may be appropriate for you.",
    },
    {
        question: "Will I understand the treatment before it starts?",
        answer:
            "Yes. The recommended treatment, available options, and what the procedure involves should be explained clearly before treatment begins, so you can make an informed decision.",
    },
    {
        question: "How long will my treatment take?",
        answer:
            "Treatment time varies depending on the procedure and your individual dental condition. After examination, you'll be given a clearer idea of the expected number of visits and treatment timeline.",
    },
    {
        question: "Do I have to decide on treatment during my first visit?",
        answer:
            "[Confirm the clinic's actual policy.] Patients should have the opportunity to understand their options and discuss any questions before deciding how they would like to proceed.",
    },
];

export function FAQPreview() {
    return (
        <section className="bg-background py-24 sm:py-28 lg:py-32">
            <Container>
                <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 xl:gap-28">
                    {/* Introduction */}
                    <div>
                        <h2 className="max-w-xl font-(--font-display) text-4xl leading-none tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                            Questions, answered clearly.
                        </h2>

                        <p className="mt-6 max-w-md text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                            A few things patients often want to know before
                            their first visit.
                        </p>
                    </div>

                    {/* FAQ */}
                    <div>
                        <Accordion className="border-t border-border">
                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={faq.question}
                                    value={`faq-${index}`}
                                    className="border-b border-border"
                                >
                                    <AccordionTrigger className="gap-6 py-6 text-left text-base font-medium tracking-tight text-foreground hover:no-underline sm:py-7 sm:text-lg">
                                        <span>{faq.question}</span>
                                    </AccordionTrigger>

                                    <AccordionContent className="max-w-2xl pb-7 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>

                        <div className="mt-7">
                            <Link
                                href="/faq"
                                className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
                            >
                                View all FAQs

                                <ArrowUpRight
                                    className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    strokeWidth={1.5}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}