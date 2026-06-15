"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ImageSkeleton } from "@/components/skeletons/ImageSkeleton";

export interface ProductImageCarouselProps {
  images: string[];
  alt: string;
}

export function ProductImageCarousel({ images, alt }: ProductImageCarouselProps) {
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
    <div className="relative aspect-4/3 w-full max-w-140">
      <AnimatePresence initial={false} mode="wait">
        <ProductImageSlide key={`${activeIndex}-${images[activeIndex]}`} src={images[activeIndex]} alt={alt} />
      </AnimatePresence>
    </div>
  );
}

function ProductImageSlide({ src, alt }: { src: string; alt: string }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0, scale: 1.035 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      {!isLoaded ? (
        <div className="absolute inset-0 rounded-2xl bg-white/70 p-4">
          <ImageSkeleton className="h-full" />
        </div>
      ) : null}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 90vw, 42vw"
        className="object-contain"
        onLoad={() => setIsLoaded(true)}
      />
    </motion.div>
  );
}