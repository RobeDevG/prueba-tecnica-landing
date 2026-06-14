"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface ClientsCarouselProps {
  title: string;
  logos: string[];
}

export function ClientsCarousel({ title, logos }: ClientsCarouselProps) {
  const loopLogos = [...logos, ...logos];

  return (
    <motion.section
      id="clientes"
      aria-labelledby="clientes-title"
      className="overflow-hidden bg-[#f4f1e6] py-14 sm:py-16"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <h2
          id="clientes-title"
          className="text-center text-3xl font-black text-[#153c2d] sm:text-4xl"
        >
          {title}
        </h2>
      </div>
      <div className="client-marquee mt-10" aria-label="Logos de clientes">
        <div className="client-track">
          {loopLogos.map((logo, index) => {
            const isDuplicate = index >= logos.length;

            return (
              <div
                className="mx-4 flex h-24 w-56 shrink-0 items-center justify-center rounded-md border border-[#153c2d]/10 bg-white px-5 shadow-sm"
                key={`${logo}-${index}`}
                aria-hidden={isDuplicate}
              >
                <Image
                  src={logo}
                  alt={isDuplicate ? "" : logoAltFromPath(logo)}
                  width={210}
                  height={80}
                  className="max-h-16 w-auto object-contain"
                />
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

function logoAltFromPath(path: string) {
  const fileName = path.split("/").pop()?.replace(/\.[^.]+$/, "") ?? "cliente";

  return fileName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
