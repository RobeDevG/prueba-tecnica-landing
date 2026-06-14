"use client";

import { useEffect, useState } from "react";
import type { ImagePalette } from "@/services/palette.service";
import { extractImagePalette } from "@/services/palette.service";

const initialPalette: ImagePalette = {
  primary: "#2f6b4f",
  secondary: "#b83a34",
};

export function useImagePalette(imageSrc: string) {
  const [palette, setPalette] = useState<ImagePalette>(initialPalette);

  useEffect(() => {
    let isMounted = true;

    extractImagePalette(imageSrc)
      .then((nextPalette) => {
        if (isMounted) {
          setPalette(nextPalette);
        }
      })
      .catch(() => {
        if (isMounted) {
          setPalette(initialPalette);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [imageSrc]);

  return palette;
}
