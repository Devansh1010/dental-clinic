import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "max-w-2xl",
        centered && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-(--accent)">
          {eyebrow}
        </p>
      )}

      <h2 className="font-(--font-display) text-4xl leading-[0.95] tracking-[-0.02em] text-(--text-primary) sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 max-w-xl text-base leading-7 text-(--text-secondary) sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}