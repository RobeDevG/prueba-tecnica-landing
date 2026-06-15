"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ImageSkeleton } from "@/components/skeletons/ImageSkeleton";

export interface HeroBackgroundCarouselProps {
  images: string[];
}

export function HeroBackgroundCarousel({ images }: HeroBackgroundCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % images.length);
    }, 5200);

    return () => window.clearInterval(intervalId);
  }, [images.length]);

  useEffect(() => {
    setIsLoaded(false);
  }, [activeIndex]);

  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={`${activeIndex}-${images[activeIndex]}`}
        className="absolute inset-0 bg-[#eef2df]"
        initial={{ opacity: 0, scale: 1.035 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {!isLoaded ? <div className="absolute inset-0 bg-[#eef2df] p-8 sm:p-14 lg:p-20"><ImageSkeleton className="h-full" /></div> : null}
        <Image
          src={images[activeIndex]}
          alt=""
          fill
          priority={activeIndex === 0}
          sizes="100vw"
          className="object-contain object-bottom-right p-8 sm:p-14 lg:p-20"
          onLoad={() => setIsLoaded(true)}
        />
      </motion.div>
    </AnimatePresence>
  );
}