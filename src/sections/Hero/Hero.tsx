"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { HeroBackgroundCarousel } from "./components/HeroBackgroundCarousel";

export interface HeroProps {
  title: string;
  subtitle: string;
  images: string[];
  whatsappUrl: string;
}

export function Hero({ title, subtitle, images, whatsappUrl }: HeroProps) {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[84svh] items-center overflow-hidden pt-24"
    >
      <HeroBackgroundCarousel images={images} />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,250,243,0.98)_0%,rgba(251,250,243,0.86)_38%,rgba(251,250,243,0.34)_78%)]" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[#fbfaf3] to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="mb-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-[#b93838]">
            <FontAwesomeIcon icon={faLeaf} className="h-4 w-4" />
            Agroexportación fresca
          </span>
          <h1
            id="hero-title"
            className="max-w-3xl text-5xl font-black leading-[0.96] text-[#123828] sm:text-6xl lg:text-7xl"
          >
            {title}.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#41584b] sm:text-xl">
            {subtitle}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#153c2d] px-6 text-sm font-bold text-white shadow-lg shadow-[#153c2d]/14 transition hover:bg-[#214f3d] focus-visible:ring-2 focus-visible:ring-[#b93838] focus-visible:ring-offset-4 focus-visible:ring-offset-[#fbfaf3]"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="h-4 w-4" />
              Contactar
            </a>
            <a
              href="#productos"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md border border-[#153c2d]/22 bg-white/72 px-6 text-sm font-bold text-[#153c2d] backdrop-blur transition hover:border-[#b93838]/55 hover:text-[#b93838] focus-visible:ring-2 focus-visible:ring-[#b93838] focus-visible:ring-offset-4 focus-visible:ring-offset-[#fbfaf3]"
            >
              Ver Productos
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
