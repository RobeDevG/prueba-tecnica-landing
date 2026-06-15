import { motion, type Variants } from "framer-motion";

export interface ProductCardHeaderProps {
	id: string;
	index: number;
	title: string;
	subtitle: string;
	accentColor: string;
	variants: Variants;
}

export function ProductCardHeader({
	id,
	index,
	title,
	subtitle,
	accentColor,
	variants,
}: ProductCardHeaderProps) {
	return (
		<>
			<motion.span
				className="text-sm font-black uppercase tracking-[0.16em]"
				style={{ color: accentColor }}
				variants={variants}
			>
				{String(index + 1).padStart(2, "0")} · {subtitle.split(" ")[0]}
			</motion.span>
			<motion.h3
				id={id}
				className="mt-4 text-4xl font-black leading-tight text-[#153c2d] sm:text-5xl"
				variants={variants}
			>
				{title}
			</motion.h3>
			<motion.p className="mt-4 max-w-xl text-base leading-7 text-[#486052]" variants={variants}>
				{subtitle}
			</motion.p>
		</>
	);
}
