import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/shared/Container";

export function DoctorPreview() {
    return (
        <section className="border-t border-border bg-background py-24 sm:py-32 lg:py-40">
            <Container>
                <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24">
                    {/* Doctor Image */}
                    <div className="relative">
                        <div className="relative aspect-4/5 overflow-hidden bg-muted">
                            <Image
                                src="/images/doctor/doctor.jpg"
                                alt="Dr. [Doctor Name]"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 45vw"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="max-w-2xl">
                        <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
                            Meet the Dentist
                        </p>

                        <h2 className="font-(--font-display) text-4xl leading-[0.95] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
                            Experienced Care, With You at the Center.
                        </h2>

                        <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                            Dr. [Doctor Name] brings over 7 years of professional experience
                            to every consultation, combining clinical expertise with a
                            thoughtful and personalized approach to patient care.
                        </p>

                        {/* Credentials */}
                        <div className="mt-10 grid max-w-xl grid-cols-2 border-y border-border sm:grid-cols-3">
                            <div className="py-6 pr-6">
                                <p className="font-(--font-display) text-3xl text-foreground">
                                    7+
                                </p>
                                <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                                    Years Experience
                                </p>
                            </div>

                            <div className="border-l border-border py-6 pl-6 pr-6">
                                <p className="font-(--font-display) text-xl text-foreground sm:text-2xl">
                                    [BDS / MDS]
                                </p>
                                <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                                    Qualification
                                </p>
                            </div>

                            <div className="border-l border-border py-6 pl-6">
                                <p className="font-(--font-display) text-xl text-foreground sm:text-2xl">
                                    [Specialization]
                                </p>
                                <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                                    Area of Practice
                                </p>
                            </div>
                        </div>

                        {/* Link */}
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
    );
}