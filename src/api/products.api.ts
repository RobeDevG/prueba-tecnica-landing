import { getProductsMock } from "@/mock/landing.mock";
import type { Product } from "@/domain/landing";

export interface ProductsApiContract {
  getProducts: () => Promise<Product[]>;
}

export const ProductsApi: ProductsApiContract = {
  getProducts: getProductsMock,
};
