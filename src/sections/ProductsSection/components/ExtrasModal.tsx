"use client";

import { useCallback, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import type { Product } from "@/domain/landing";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import { ExtraImage } from "./ExtraImage";
import { ImagePreview } from "./ImagePreview";
import { ProductPropertyList } from "./ProductPropertyList";

export interface ExtrasModalProps {
  product: Product;
  palettePrimary: string;
  borderColor: string;
  extras: NonNullable<Product["extras"]>;
  onClose: () => void;
}

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

export function ExtrasModal({
  product,
  palettePrimary,
  borderColor,
  extras,
  onClose,
}: ExtrasModalProps) {
  const extraImages = extras.images ?? [];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const closePreview = useCallback(() => setSelectedImage(null), []);

  useBodyScrollLock(true);
  useEscapeKey(selectedImage ? closePreview : onClose);

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

          <ProductPropertyList
            idPrefix={`${product.id}-extras`}
            items={extras.items}
            iconColor={palettePrimary}
            borderColor={borderColor}
            className="mt-6"
          />

          <div className="mt-7">
            {extraImages.length === 0 ? (
              <p className="text-sm text-[#486052]">No hay imágenes extras.</p>
            ) : (
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {extraImages.map((image, index) => (
                  <ExtraImage
                    key={`${image}-${index}`}
                    src={image}
                    alt={product.title}
                    onOpen={setSelectedImage}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {selectedImage ? <ImagePreview src={selectedImage} alt={product.title} onClose={closePreview} /> : null}
      </motion.div>
    </motion.div>
  );
}
