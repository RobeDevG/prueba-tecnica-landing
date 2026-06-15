"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Product, ProductPropertyIcon } from "@/domain/landing";
import { ExtraImage } from "./ExtraImage";
import { ImagePreview } from "./actions/ImagePreview";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { useEscapeKey } from "@/hooks/useEscapeKey";
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

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const panelVariants: Variants = {
  hidden: { opacity: 0, y: 56, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 36, scale: 0.98 },
};

export function ExtrasModal({ product, palettePrimary, borderColor, extras, onClose }: ExtrasModalProps) {
  const extraImages = extras.images?.length ? extras.images : [];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useBodyScrollLock(true);
  useEscapeKey(onClose);

  return (
    <motion.div
      className="fixed inset-0 z-70 flex items-end justify-center bg-black/40 px-0 py-0 sm:items-center sm:px-5 sm:py-6"
      onClick={onClose}
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <motion.div
        className="relative flex max-h-[calc(100svh-1.5rem)] w-full max-w-4xl flex-col overflow-hidden overscroll-contain rounded-t-2xl p-5 shadow-2xl sm:max-h-[88svh] sm:rounded-2xl sm:p-7"
        style={{ borderColor, backgroundColor: "#fbfaf3" }}
        onClick={(event) => event.stopPropagation()}
        variants={panelVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${product.id}-extras-title`}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#153c2d]/15 bg-white/80 text-[#153c2d] transition hover:text-[#b93838]"
          aria-label="Cerrar extras"
        >
          <FontAwesomeIcon icon={faXmark} className="h-4 w-4" />
        </button>

        <div className="flex-1 overflow-y-auto pr-1 pt-4">
          <h4 id={`${product.id}-extras-title`} className="pr-12 text-2xl font-black text-[#153c2d]">
            Extras de {product.title}
          </h4>
          <dl className="mt-6 divide-y" style={{ borderColor }}>
            {extras.items.map((item) => (
              <div
                key={`${product.id}-${item.label}`}
                className="grid grid-cols-[28px_1fr] gap-x-4 py-3 sm:grid-cols-[30px_1fr_1fr]"
              >
                <dt className="contents">
                  <FontAwesomeIcon
                    icon={propertyIcons[item.icon]}
                    className="mt-1 h-4 w-4"
                    style={{ color: palettePrimary }}
                    aria-hidden
                  />
                  <span className="text-sm font-bold text-[#314a3d]">{item.label}</span>
                </dt>
                <dd className="col-start-2 text-sm font-semibold text-[#1d3429] sm:col-start-3">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-7">
            {extraImages.length === 0 ? (
              <p className="text-sm text-[#486052]">No hay imágenes extras.</p>
            ) : (
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {extraImages.map((image, index) => (
                  <ExtraImage key={`${image}-${index}`} src={image} alt={product.title} onOpen={setSelectedImage} />
                ))}
              </div>
            )}
          </div>
        </div>

        {selectedImage ? <ImagePreview src={selectedImage} alt={product.title} onClose={() => setSelectedImage(null)} /> : null}
      </motion.div>
    </motion.div>
  );
}
