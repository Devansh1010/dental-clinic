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

    <Sheet open={open} onOpenChange={(value) => !value && onClose()}>
      <SheetContent
        side="right"
        className="w-full max-w-sm border-border bg-background px-6 sm:px-8"
      >
        <SheetHeader>
          <SheetTitle className="text-left">
            <span className="font-(--font-display) text-2xl">
              Dental
            </span>

            <span className="ml-2 text-[9px] font-(--font-body) uppercase tracking-[0.25em] text-(--text-secondary)">
              Clinic
            </span>
          </SheetTitle>
        </SheetHeader>

        <nav className="mt-20 flex flex-col" aria-label="Mobile navigation">
          {navigation.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="border-b border-border py-5 font-(--font-display) text-3xl text-(--text-primary)"
            >
              <span className="mr-4 text-xs font-(--font-body) text-(--text-secondary)">
                0{index + 1}
              </span>

              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="mt-auto">
          <BookConsultationButton className="rounded-md px-5 py-6" />


          <p className="mt-5 text-center text-xs leading-5 text-(--text-secondary)">
            Have a question? We are here to help.
          </p>
        </div>
      </SheetContent>
    </Sheet>

  );
}