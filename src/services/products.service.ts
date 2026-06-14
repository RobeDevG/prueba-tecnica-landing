import { ProductsApi } from "@/api/products.api";

export async function getProducts() {
  const products = await ProductsApi.getProducts();

  return products.map((product) => ({
    ...product,
    properties: product.properties.filter((property) => property.value.trim().length > 0),
  }));
}
