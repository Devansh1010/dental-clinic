import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface BookConsultationButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export function BookConsultationButton({
  className,
  onClick,
  children = "Book a Consultation",
}: BookConsultationButtonProps) {
  return (
    <Button
      className={className}
      onClick={onClick}
    >
      <Link href="/contact" className="flex items-center justify-center gap-2">
        {children}
        <ArrowUpRight className="size-4" strokeWidth={1.5} />
      </Link>
    </Button>
  );
}