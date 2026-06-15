"use client";

import { motion } from "framer-motion";
import type { Product } from "@/domain/landing";
import { ProductCard } from "./components/Cards";
import { SectionHeading } from "@/components/sections/SectionHeading";

export interface ProductsSectionProps {
  products: Product[];
  whatsappUrl: string;
}

export function ProductsSection({ products, whatsappUrl }: ProductsSectionProps) {
  return (
    <section
      id="productos"
      aria-labelledby="productos-title"
      className="bg-[#fbfaf3] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          className="mb-10 max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <SectionHeading
            id="productos-title"
            eyebrow="Productos"
            title="Selección lista para crecer."
          />
        </motion.div>

        <div className="space-y-10 lg:space-y-14">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              even={index % 2 === 0}
              whatsappUrl={whatsappUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
