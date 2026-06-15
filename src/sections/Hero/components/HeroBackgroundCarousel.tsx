"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ImageSkeleton } from "@/components/skeletons/ImageSkeleton";
import { useAutoplayIndex } from "@/hooks/useAutoplayIndex";
import { useImageLoadState } from "@/hooks/useImageLoadState";

export interface HeroBackgroundCarouselProps {
  images: string[];
}

export function HeroBackgroundCarousel({ images }: HeroBackgroundCarouselProps) {
  const activeIndex = useAutoplayIndex(images.length, 5200);

  return (
    <AnimatePresence initial={false}>
      <HeroBackgroundSlide
        key={`${activeIndex}-${images[activeIndex]}`}
        src={images[activeIndex]}
        priority={activeIndex === 0}
      />
    </AnimatePresence>
  );
}

function HeroBackgroundSlide({ src, priority }: { src: string; priority: boolean }) {
  const { isLoaded, markAsLoaded } = useImageLoadState();

  return (
    <motion.div
      className="absolute inset-0 bg-[#eef2df]"
      initial={{ opacity: 0, scale: 1.035 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {!isLoaded ? (
        <div className="absolute inset-0 bg-[#eef2df] p-8 sm:p-14 lg:p-20">
          <ImageSkeleton className="h-full" />
        </div>
      ) : null}
      <Image
        src={src}
        alt=""
        fill
        priority={priority}
        sizes="100vw"
        className="object-contain object-right-bottom p-8 sm:p-14 lg:p-20"
        onLoad={markAsLoaded}
      />
    </motion.div>
  );
}
