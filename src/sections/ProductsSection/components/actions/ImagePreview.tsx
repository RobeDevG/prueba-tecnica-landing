"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ImageSkeleton } from "@/components/skeletons/ImageSkeleton";
import { useImageLoadState } from "@/hooks/useImageLoadState";

export interface ImagePreviewProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export function ImagePreview({ src, alt, onClose }: ImagePreviewProps) {
  const { isLoaded, markAsLoaded } = useImageLoadState();

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-4">
      <div className="relative max-h-[90svh] w-full max-w-5xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-2 top-2 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#153c2d]"
          aria-label="Cerrar imagen ampliada"
        >
          <FontAwesomeIcon icon={faXmark} className="h-4 w-4" />
        </button>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white">
          {!isLoaded ? <div className="absolute inset-0 p-4"><ImageSkeleton className="h-full" /></div> : null}
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 640px) 92vw, 60vw"
            className="object-contain p-4"
            onLoad={markAsLoaded}
          />
        </div>
      </div>
    </div>
  );
}
