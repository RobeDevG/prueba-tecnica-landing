"use client";

import { motion, type Variants } from "framer-motion";
import type { Product } from "@/domain/landing";
import { useImagePalette } from "@/hooks/useImagePalette";
import { hexToRgba } from "@/services/palette.service";
import { ProductActions } from "./actions/Actions";
import { ProductCardHeader } from "./ProductCardHeader";
import { ProductImageCarousel } from "./ProductImageCarousel";
import { ProductPropertyList } from "./ProductPropertyList";

export interface ProductCardProps {
	product: Product;
	index: number;
	even: boolean;
	whatsappUrl: string;
}

export function ProductCard({ product, index, even, whatsappUrl }: ProductCardProps) {
	const productImages = product.images?.length ? product.images : [product.image];
	const palette = useImagePalette(productImages[0]);
	const background = hexToRgba(palette.primary, 0.08);
	const borderColor = hexToRgba(palette.primary, 0.16);

	return (
		<motion.article
			className="grid overflow-hidden rounded-lg border md:grid-cols-2"
			style={{ backgroundColor: background, borderColor }}
			initial={{ opacity: 0, y: 34 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.25 }}
			transition={{ duration: 0.7, ease: "easeOut" }}
			aria-labelledby={`${product.id}-title`}
		>
			<motion.div
				className={`order-2 flex flex-col justify-center px-5 py-8 sm:px-8 lg:px-12 ${
					even ? "md:order-1" : "md:order-2"
				}`}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.25 }}
				variants={{
					hidden: {},
					visible: { transition: { staggerChildren: 0.08 } },
				}}
			>
				<ProductCardHeader
					id={`${product.id}-title`}
					index={index}
					title={product.title}
					subtitle={product.subtitle}
					accentColor={palette.secondary}
					variants={fadeSlideVariant}
				/>
				<motion.div variants={fadeSlideVariant}>
					<ProductPropertyList
						idPrefix={product.id}
						items={product.properties}
						iconColor={palette.secondary}
						borderColor={borderColor}
					/>
				</motion.div>
				<ProductActions
					product={product}
					whatsappUrl={whatsappUrl}
					palettePrimary={palette.primary}
					borderColor={borderColor}
				/>
			</motion.div>

			<motion.div
				className={`order-1 flex min-h-80 items-center justify-center p-4 sm:min-h-105 sm:p-8 ${
					even ? "md:order-2" : "md:order-1"
				}`}
				initial={{ opacity: 0, scale: 0.96 }}
				whileInView={{ opacity: 1, scale: 1 }}
				viewport={{ once: true, amount: 0.25 }}
				transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
			>
				<ProductImageCarousel images={productImages} alt={product.title} />
			</motion.div>
		</motion.article>
	);
}

const fadeSlideVariant: Variants = {
	hidden: { opacity: 0, y: 16 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
