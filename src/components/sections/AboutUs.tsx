"use client";

import { motion } from "framer-motion";

export interface AboutUsProps {
  title: string;
  subtitle: string;
  content: string;
}

export function AboutUs({ title, subtitle, content }: AboutUsProps) {
  return (
    <motion.section
      id="nosotros"
      aria-labelledby="nosotros-title"
      className="bg-white py-16 sm:py-20 lg:py-24"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <div>
          <span className="text-sm font-bold uppercase tracking-[0.16em] text-[#b93838]">
            AgroIndustrial Peru
          </span>
          <h2
            id="nosotros-title"
            className="mt-3 text-4xl font-black leading-tight text-[#153c2d] sm:text-5xl"
          >
            {title}
          </h2>
        </div>
        <div className="max-w-3xl">
          <p className="text-2xl font-bold leading-snug text-[#243f32]">{subtitle}</p>
          <p className="mt-6 text-lg leading-8 text-[#52685b]">{content}</p>
        </div>
      </div>
    </motion.section>
  );
}
