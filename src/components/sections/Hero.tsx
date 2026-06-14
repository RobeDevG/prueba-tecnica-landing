"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faLeaf } from "@fortawesome/free-solid-svg-icons";

export interface HeroProps {
  title: string;
  subtitle: string;
  images: string[];
}

export function Hero({ title, subtitle, images }: HeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % images.length);
    }, 5200);

    return () => window.clearInterval(intervalId);
  }, [images.length]);

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[84svh] items-center overflow-hidden pt-24"
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={images[activeIndex]}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.035 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src={images[activeIndex]}
            alt=""
            fill
            priority={activeIndex === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,250,243,0.98)_0%,rgba(251,250,243,0.86)_38%,rgba(251,250,243,0.34)_78%)]" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#fbfaf3] to-transparent" />

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
              href="#productos"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#153c2d] px-6 text-sm font-bold text-white shadow-lg shadow-[#153c2d]/14 transition hover:bg-[#214f3d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b93838]"
            >
              <FontAwesomeIcon icon={faArrowDown} className="h-4 w-4" />
              Ver productos
            </a>
            <a
              href="#contacto"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md border border-[#153c2d]/22 bg-white/72 px-6 text-sm font-bold text-[#153c2d] backdrop-blur transition hover:border-[#b93838]/55 hover:text-[#b93838] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b93838]"
            >
              Contactar
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
