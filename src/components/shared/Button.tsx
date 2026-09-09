import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface BookConsultationButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export function BookConsultationButton({
  className,
  children = "Book a Consultation",
}: BookConsultationButtonProps) {
  return (
    <Button className={className}>
      <Link href="/contact" className="flex items-center justify-center gap-2">
        {children}
        <ArrowUpRight className="size-4" strokeWidth={1.5} />
      </Link>
    </Button>
  );
}