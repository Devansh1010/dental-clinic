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
                    <div className="order-2 flex justify-start lg:order-1">
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
                    <div className="order-1 max-w-2xl lg:order-2">
                        <p className="mb-5 text-sm font-medium text-primary">
                            Meet the Dentist
                        </p>

                        <h2 className="max-w-xl font-(--font-display) text-4xl leading-none tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                            Experienced care, grounded in understanding.
                        </h2>

                        <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                            Dr. [Doctor Name] combines clinical expertise with a
                            thoughtful and personalized approach, taking time to
                            understand each patient&apos;s concerns before recommending
                            the next step.
                        </p>

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