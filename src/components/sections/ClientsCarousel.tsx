"use client";

import Image from "next/image";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import type { Client } from "@/domain/landing";

export interface ClientsCarouselProps {
  title: string;
  clients: Client[];
}

export function ClientsCarousel({ title, clients }: ClientsCarouselProps) {
  const visibleClients = clients.slice(0, 5);
  const loopClients = [...visibleClients, ...visibleClients, ...visibleClients];
  const [emblaRef] = useEmblaCarousel(
    {
      align: "start",
      dragFree: true,
      loop: true,
      skipSnaps: true,
    },
    [
      AutoScroll({
        playOnInit: true,
        speed: 0.7,
        startDelay: 500,
        stopOnFocusIn: true,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  if (visibleClients.length === 0) {
    return null;
  }

  return (
    <motion.section
      id="clientes"
      aria-labelledby="clientes-title"
      className="overflow-hidden bg-[#f4f1e6] py-16 sm:py-20"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.16em] text-[#b93838]">
            Aliados comerciales
          </span>
          <h2
            id="clientes-title"
            className="mt-3 text-3xl font-black leading-tight text-[#153c2d] sm:text-4xl"
          >
            {title}
          </h2>
        </div>
      </div>

      <div className="client-marquee mt-11" aria-label="Cinco clientes destacados">
        <div className="client-embla" ref={emblaRef}>
          <div className="client-track">
            {loopClients.map((client, index) => {
              const isDuplicate = index >= visibleClients.length;

              return (
                <article
                  className="client-card"
                  key={`${client.id}-${index}`}
                  aria-hidden={isDuplicate}
                >
                  <Image
                    src={client.logo}
                    alt={isDuplicate ? "" : client.name}
                    width={210}
                    height={80}
                    className="max-h-14 w-auto object-contain"
                  />
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
