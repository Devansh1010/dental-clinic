"use client";

import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { BookConsultationButton } from "../shared/Button";

interface NavigationItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  navigation: NavigationItem[];
}

export function MobileMenu({
  open,
  onClose,
  navigation,
}: MobileMenuProps) {
  return (
    <Sheet
      open={open}
      onOpenChange={(value) => !value && onClose()}
    >
      <SheetContent
        side="right"
        className="flex w-full max-w-sm flex-col border-border bg-background px-6 sm:px-8"
      >
        <SheetHeader className="text-left">
          <SheetTitle className="flex items-baseline">
            <span className="font-(--font-display) text-2xl tracking-[-0.02em] text-foreground">
              Dental
            </span>

            <span className="ml-2 text-[9px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Clinic
            </span>
          </SheetTitle>
        </SheetHeader>

        <nav
          className="mt-12 flex flex-col"
          aria-label="Mobile navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="border-b border-border py-5 text-base font-medium text-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto border-t border-border pt-6">
          <BookConsultationButton className="w-full rounded-md py-6" />

          <p className="mt-4 text-center text-xs leading-5 text-muted-foreground">
            Start with a consultation and understand your options.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}