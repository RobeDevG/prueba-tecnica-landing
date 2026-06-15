"use client";

import { useEffect, useState } from "react";

export function useAutoplayIndex(itemCount: number, intervalMs: number): number {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (itemCount < 2) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % itemCount);
    }, intervalMs);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [intervalMs, itemCount]);

  return activeIndex;
}
