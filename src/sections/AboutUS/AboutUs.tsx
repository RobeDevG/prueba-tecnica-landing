"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/sections/SectionHeading";

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
        <SectionHeading id="nosotros-title" eyebrow="AgroIndustrial Peru" title={title} />
        <div className="max-w-3xl">
          <p className="text-2xl font-bold leading-snug text-[#243f32]">{subtitle}</p>
          <p className="mt-6 text-lg leading-8 text-[#52685b]">{content}</p>
        </div>
      </div>
    </motion.section>
  );
}
