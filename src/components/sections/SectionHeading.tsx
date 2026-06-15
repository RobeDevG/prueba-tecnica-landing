import type { ReactNode } from "react";

export interface SectionHeadingProps {
  eyebrow: ReactNode;
  title: ReactNode;
  id: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  id,
  align = "left",
  className = "",
  titleClassName = "",
}: SectionHeadingProps) {
  const alignmentClasses = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`${alignmentClasses} ${className}`.trim()}>
      <span className="text-sm font-bold uppercase tracking-[0.16em] text-[#b93838]">
        {eyebrow}
      </span>
      <h2
        id={id}
        className={`mt-3 text-4xl font-black leading-tight text-[#153c2d] sm:text-5xl ${titleClassName}`.trim()}
      >
        {title}
      </h2>
    </div>
  );
}