"use client";

import { useState } from "react";
import { ExtrasModal } from "./ExtrasModal";
import type { Product } from "@/domain/landing";

export interface ExtrasActionProps {
  product: Product;
  palettePrimary: string;
  borderColor: string;
  extras: NonNullable<Product["extras"]>;
}

export function ExtrasAction({ product, palettePrimary, borderColor, extras }: ExtrasActionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-[#153c2d]/18 bg-white/70 px-4 text-sm font-bold text-[#153c2d] transition hover:border-[#b93838]/45 hover:text-[#b93838] focus-visible:ring-2 focus-visible:ring-[#b93838] focus-visible:ring-offset-4 focus-visible:ring-offset-[#fbfaf3]"
      >
        EXTRAS
      </button>
      {isOpen ? (
        <ExtrasModal
          product={product}
          palettePrimary={palettePrimary}
          borderColor={borderColor}
          extras={extras}
          onClose={() => setIsOpen(false)}
        />
      ) : null}
    </>
  );
}