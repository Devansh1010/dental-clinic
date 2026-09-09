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
      "Dr. X provided exceptional care and demonstrated outstanding professionalism. I highly recommend this clinic.",
    name: "[Patient Name]",
    treatment: "[Treatment]",
    source: "[Review Source]",
  },
  {
    quote:
      "I was quite nervous before my root canal, but the doctor explained everything and I felt much more comfortable.",
    name: "[Patient Name]",
    treatment: "[Treatment]",
    source: "[Review Source]",
  },
];

export function PatientStories() {
  return (
    <section className="border-t border-border bg-background py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
              Patient Stories
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl font-(--font-display) text-4xl leading-[0.95] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
              Hear From Those We&apos;ve Cared For.
            </h2>

            <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Real experiences can help you understand what to expect from
              your care, from the first conversation through treatment.
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-border lg:mt-24">
          {stories.map((story, index) => (
            <article
              key={`${story.name}-${index}`}
              className="grid gap-6 border-b border-border py-10 lg:grid-cols-[64px_1fr_180px] lg:items-start lg:gap-10 lg:py-12"
            >
              <span className="text-[10px] font-medium tracking-[0.18em] text-primary">
                0{index + 1}
              </span>

              <div>
                <blockquote className="max-w-3xl font-(--font-display) text-2xl leading-tight tracking-[-0.015em] text-foreground sm:text-3xl lg:text-4xl">
                  “{story.quote}”
                </blockquote>

                <div className="mt-6">
                  <p className="text-sm font-medium text-foreground">
                    {story.name}
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    {story.treatment}
                  </p>
                </div>
              </div>

              <div className="lg:pt-1 lg:text-right">
                <span className="text-xs text-muted-foreground">
                  {story.source}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-start lg:justify-end">
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
      </Container>
    </section>
  );
}