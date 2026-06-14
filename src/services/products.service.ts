import { ProductsApi } from "@/api/products.api";
import type { Product } from "@/domain/landing";

export async function getProducts(): Promise<Product[]> {
  const products = await ProductsApi.getProducts();

  return products.map((product) => ({
    ...product,
    properties: product.properties.filter((property) => property.value.trim().length > 0),
  }));
}
