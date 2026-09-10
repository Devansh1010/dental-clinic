import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/shared/Container";

export function DoctorPreview() {
    return (
        <section className="bg-background py-24 sm:py-28 lg:py-32">
            <Container>
                <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 xl:gap-28">
                    {/* Doctor Image */}
                    <div className="flex justify-start">
                        <div className="relative aspect-3/4 w-full max-w-sm overflow-hidden bg-muted">
                            <Image
                                src="/images/doctor/doctor.jpg"
                                alt="Dr. [Doctor Name]"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 380px"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="max-w-2xl">
                        <p className="mb-5 text-sm font-medium text-primary">
                            Meet the Dentist
                        </p>

                        <h2 className="max-w-xl font-(--font-display) text-4xl leading-none tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                            Experienced care, grounded in understanding.
                        </h2>

                        <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                            Dr. [Doctor Name] brings over 7 years of professional
                            experience to every consultation, combining clinical
                            expertise with a thoughtful and personalized approach
                            to patient care.
                        </p>

                        {/* Credentials */}
                        <div className="mt-9 flex flex-wrap gap-x-10 gap-y-6">
                            <div>
                                <p className="text-xl font-semibold tracking-tight text-foreground">
                                    7+
                                </p>
                                <p className="mt-1 text-xs text-muted-foreground">
                                    Years experience
                                </p>
                            </div>

                            <div>
                                <p className="text-base font-medium text-foreground sm:text-lg">
                                    [BDS / MDS]
                                </p>
                                <p className="mt-1 text-xs text-muted-foreground">
                                    Qualification
                                </p>
                            </div>

                            <div>
                                <p className="text-base font-medium text-foreground sm:text-lg">
                                    [Specialization]
                                </p>
                                <p className="mt-1 text-xs text-muted-foreground">
                                    Area of practice
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