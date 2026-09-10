import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/shared/Container";

const stories = [
  {
    quote:
      "I was quite nervous before my root canal, but the doctor explained everything and I felt much more comfortable.",
    name: "[Patient Name]",
    treatment: "[Treatment]",
    source: "[Review Source]",
  },
  {
    quote:
      "[Real patient review goes here. Keep the patient's natural wording wherever possible.]",
    name: "[Patient Name]",
    treatment: "[Treatment]",
    source: "[Review Source]",
  },
  {
    quote:
      "[Real patient review goes here. Keep the patient's natural wording wherever possible.]",
    name: "[Patient Name]",
    treatment: "[Treatment]",
    source: "[Review Source]",
  },
];

export function PatientStories() {
  return (
    <section className="bg-muted py-24 sm:py-28 lg:py-32">
      <Container>
        {/* Introduction */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-3xl">
            <h2 className="font-(--font-display) text-4xl leading-none tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Real experiences from our patients.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Hearing from other patients can help you understand
              what to expect, from the first conversation through
              treatment.
            </p>
          </div>

          {/* Link */}
          <div className="shrink-0 lg:pb-1">
            <Link
              href="/patient-stories"
              className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
            >
              Read patient stories
              <ArrowUpRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.5}
              />
            </Link>
          </div>
        </div>

        {/* Stories */}
        <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          {stories.map((story, index) => (
            <article
              key={`${story.name}-${index}`}
              className="flex min-h-80 flex-col bg-background p-7 sm:p-9 lg:p-10"
            >
              <blockquote className="text-lg leading-7 tracking-[-0.01em] text-foreground sm:text-xl sm:leading-8">
                “{story.quote}”
              </blockquote>

              <div className="mt-auto pt-10">
                <p className="text-sm font-medium text-foreground">
                  {story.name}
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  {story.treatment}
                  <span className="mx-1.5">·</span>
                  {story.source}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}