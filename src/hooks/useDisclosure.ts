"use client";

import { useCallback, useState } from "react";

export interface DisclosureState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export function useDisclosure(initialValue = false): DisclosureState {
  const [isOpen, setIsOpen] = useState(initialValue);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((currentValue) => !currentValue);
  }, []);

  return {
    isOpen,
    open,
    close,
    toggle,
  };
}
