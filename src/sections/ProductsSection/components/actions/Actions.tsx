import type { Product } from "@/domain/landing";
import { ContactAction } from "./ContactAction";
import { DetailsAction } from "./DetailsAction";
import { ExtrasAction } from "./ExtrasAction";

export interface ProductActionsProps {
  product: Product;
  whatsappUrl: string;
  palettePrimary: string;
  borderColor: string;
}

export function ProductActions({ product, whatsappUrl, palettePrimary, borderColor }: ProductActionsProps) {
  const detailsUrl = product.detailsUrl ?? "#";
  const extras = product.extras;

  return (
    <div className="mt-7 flex flex-wrap gap-3">
      <ContactAction whatsappUrl={whatsappUrl} />
      <DetailsAction detailsUrl={detailsUrl} />
      {extras ? (
        <ExtrasAction
          product={product}
          palettePrimary={palettePrimary}
          borderColor={borderColor}
          extras={extras}
        />
      ) : null}
    </div>
  );
}