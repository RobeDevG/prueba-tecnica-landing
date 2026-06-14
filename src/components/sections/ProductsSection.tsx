"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxOpen,
  faCalendarDays,
  faDroplet,
  faLocationDot,
  faRulerCombined,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import type { Product, ProductPropertyIcon } from "@/domain/landing";
import { useImagePalette } from "@/hooks/useImagePalette";
import { hexToRgba } from "@/services/palette.service";

export interface ProductProps {
  image: string;
  images?: string[];
  title: string;
  subtitle: string;
  properties: Product["properties"];
  even: boolean;
}

export interface ProductsSectionProps {
  products: Product[];
}

const propertyIcons: Record<ProductPropertyIcon, IconDefinition> = {
  origin: faLocationDot,
  season: faCalendarDays,
  variety: faSeedling,
  caliber: faRulerCombined,
  flavor: faDroplet,
  presentation: faBoxOpen,
};

export function ProductsSection({ products }: ProductsSectionProps) {
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
          <span className="text-sm font-bold uppercase tracking-[0.16em] text-[#b93838]">
            Productos
          </span>
          <h2
            id="productos-title"
            className="mt-3 text-4xl font-black leading-tight text-[#153c2d] sm:text-5xl"
          >
            Selección lista para crecer.
          </h2>
        </motion.div>

        <div className="space-y-10 lg:space-y-14">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              even={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  index,
  even,
}: {
  product: Product;
  index: number;
  even: boolean;
}) {
  const productImages = product.images?.length ? product.images : [product.image];
  const palette = useImagePalette(productImages[0]);
  const background = hexToRgba(palette.primary, 0.08);
  const borderColor = hexToRgba(palette.primary, 0.16);

  return (
    <motion.article
      className="grid overflow-hidden rounded-lg border md:grid-cols-2"
      style={{ backgroundColor: background, borderColor }}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      aria-labelledby={`${product.id}-title`}
    >
      <motion.div
        className={`order-1 flex flex-col justify-center px-5 py-8 sm:px-8 lg:px-12 ${
          even ? "md:order-1" : "md:order-2"
        }`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } },
        }}
      >
        <motion.span
          className="text-sm font-black uppercase tracking-[0.16em]"
          style={{ color: palette.secondary }}
          variants={fadeSlideVariant}
        >
          {String(index + 1).padStart(2, "0")} · {product.subtitle.split(" ")[0]}
        </motion.span>
        <motion.h3
          id={`${product.id}-title`}
          className="mt-4 text-4xl font-black leading-tight text-[#153c2d] sm:text-5xl"
          variants={fadeSlideVariant}
        >
          {product.title}
        </motion.h3>
        <motion.p className="mt-4 max-w-xl text-base leading-7 text-[#486052]" variants={fadeSlideVariant}>
          {product.subtitle}
        </motion.p>
        <motion.dl className="mt-7 divide-y" style={{ borderColor }} variants={fadeSlideVariant}>
          {product.properties.map((property) => (
            <div
              className="grid grid-cols-[28px_1fr] gap-x-4 py-3 sm:grid-cols-[30px_1fr_1fr]"
              key={`${product.id}-${property.label}`}
            >
              <dt className="contents">
                <FontAwesomeIcon
                  icon={propertyIcons[property.icon]}
                  className="mt-1 h-4 w-4"
                  style={{ color: palette.secondary }}
                  aria-hidden
                />
                <span className="text-sm font-bold text-[#314a3d]">{property.label}</span>
              </dt>
              <dd className="col-start-2 text-sm font-semibold text-[#1d3429] sm:col-start-3">
                {property.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>

      <motion.div
        className={`order-2 flex min-h-[320px] items-center justify-center p-4 sm:min-h-[420px] sm:p-8 ${
          even ? "md:order-2" : "md:order-1"
        }`}
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
      >
        <ProductImageCarousel images={productImages} alt={product.title} />
      </motion.div>
    </motion.article>
  );
}

function ProductImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % images.length);
    }, 4200);

    return () => window.clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="relative aspect-[4/3] w-full max-w-[560px]">
      <AnimatePresence initial={false}>
        <motion.div
          key={images[activeIndex]}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.035 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <Image
            src={images[activeIndex]}
            alt={alt}
            fill
            sizes="(max-width: 768px) 90vw, 42vw"
            className="object-contain"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

const fadeSlideVariant: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
