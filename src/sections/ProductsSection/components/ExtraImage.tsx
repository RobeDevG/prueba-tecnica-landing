"use client";

import Image from "next/image";
import { ImageSkeleton } from "@/components/skeletons/ImageSkeleton";
import { useImageLoadState } from "@/hooks/useImageLoadState";

export interface ExtraImageProps {
  src: string;
  alt: string;
  onOpen: (src: string) => void;
}

export function ExtraImage({ src, alt, onOpen }: ExtraImageProps) {
  const { isLoaded, markAsLoaded } = useImageLoadState();

  return (
    <button
      type="button"
      onClick={() => onOpen(src)}
      className="overflow-hidden rounded-xl border border-[#153c2d]/10 bg-white/70"
      aria-label={`Abrir imagen extra de ${alt}`}
    >
      <div className="relative aspect-4/3 w-full">
        {!isLoaded ? (
          <div className="absolute inset-0 rounded-xl bg-white/70 p-3">
            <ImageSkeleton className="h-full" />
          </div>
        ) : null}
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 30vw"
          className={`object-contain p-3 transition ${isLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={markAsLoaded}
        />
      </div>
    </button>
  );
}
