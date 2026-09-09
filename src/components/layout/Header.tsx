"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

import { BookConsultationButton } from "../shared/Button";

const navigation = [
  {
    label: "Treatments",
    href: "/treatments",
  },
  {
    label: "Doctor",
    href: "/doctor",
  },
  {
    label: "The Clinic",
    href: "/clinic",
  },
  {
    label: "Patient Stories",
    href: "/patient-stories",
  },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-border bg-(--background)/95 backdrop-blur-md"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-20 max-w-360 items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16">
          {/* Logo */}
          <Link
            href="/"
            className="group flex flex-col leading-none"
            aria-label="Dental Clinic home"
          >
            <span className="font-(--font-display) text-2xl tracking-[-0.02em] text-(--text-primary)">
              Dental
            </span>

            <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.25em] text-(--text-secondary)">
              Clinic
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-(--text-secondary) transition-colors duration-300 hover:text-(--text-primary)"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <BookConsultationButton
              className="py-6 px-4"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="flex size-10 items-center justify-center text-(--text-primary) lg:hidden"
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="size-5" strokeWidth={1.5} />
          </button>
        </div>
      </header>

      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navigation={navigation}
      />
    </>
  );
}