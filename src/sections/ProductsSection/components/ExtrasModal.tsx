"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Product, ProductPropertyIcon } from "@/domain/landing";
import { ExtraImage } from "./ExtraImage";
import { ImagePreview } from "./actions/ImagePreview";
import {
  faBoxOpen,
  faCalendarDays,
  faDroplet,
  faLocationDot,
  faRulerCombined,
  faSeedling,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface ExtrasModalProps {
  product: Product;
  palettePrimary: string;
  borderColor: string;
  extras: NonNullable<Product["extras"]>;
  onClose: () => void;
}

const propertyIcons: Record<ProductPropertyIcon, IconDefinition> = {
  origin: faLocationDot,
  season: faCalendarDays,
  variety: faSeedling,
  caliber: faRulerCombined,
  flavor: faDroplet,
  presentation: faBoxOpen,
};

export function ExtrasModal({ product, palettePrimary, borderColor, extras, onClose }: ExtrasModalProps) {
  const extraImages = extras.images?.length ? extras.images : [];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="fixed inset-0 z-70 flex items-end justify-center bg-black/40 px-0 py-0 sm:items-center sm:px-5 sm:py-6">
      <div
        className="relative w-full max-w-4xl rounded-t-2xl bg-[#fbfaf3] p-5 shadow-2xl sm:max-h-[88svh] sm:overflow-y-auto sm:rounded-2xl sm:p-7"
        style={{ borderColor, backgroundColor: "#fbfaf3" }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#153c2d]/15 bg-white/80 text-[#153c2d] transition hover:text-[#b93838]"
          aria-label="Cerrar extras"
        >
          <FontAwesomeIcon icon={faXmark} className="h-4 w-4" />
        </button>

        <h4 className="pr-12 text-2xl font-black text-[#153c2d]">Extras de {product.title}</h4>
        <div className="mt-6 space-y-3">
          {extras.items.map((item) => (
            <div
              key={`${product.id}-${item.label}`}
              className="grid grid-cols-[28px_1fr] gap-x-4 rounded-lg border border-[#153c2d]/10 bg-white/70 p-4"
            >
              <FontAwesomeIcon
                icon={propertyIcons[item.icon]}
                className="mt-1 h-4 w-4"
                style={{ color: palettePrimary }}
                aria-hidden
              />
              <div>
                <p className="text-sm font-bold text-[#314a3d]">{item.label}</p>
                <p className="text-sm text-[#1d3429]">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-7">
          {extraImages.length === 0 ? (
            <p className="text-sm text-[#486052]">No hay imágenes extras.</p>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {extraImages.map((image) => (
                <ExtraImage key={image} src={image} alt={product.title} onOpen={setSelectedImage} />
              ))}
            </div>
          )}
        </div>

        {selectedImage ? <ImagePreview src={selectedImage} alt={product.title} onClose={() => setSelectedImage(null)} /> : null}
      </div>
    </div>
  );
}