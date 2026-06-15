"use client";

import { useCallback, useState } from "react";

export interface ImageLoadState {
  isLoaded: boolean;
  markAsLoaded: () => void;
}

export function useImageLoadState(): ImageLoadState {
  const [isLoaded, setIsLoaded] = useState(false);

  const markAsLoaded = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return {
    isLoaded,
    markAsLoaded,
  };
}
