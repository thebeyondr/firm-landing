import { motion, useReducedMotion } from "motion/react";
import React from "react";

/**
 * StatCard component that displays a numeric value, label, and optional footer/icon.
 * Features an "F" shape cutout using clip-path and supports motion-reduced states.
 */
interface StatCardProps {
	value: string;
	label: string;
	footer?: string;
	icon?: React.ComponentType<{ className?: string }>;
}

export function StatCard({ value, label, footer, icon: Icon }: StatCardProps) {
	const shouldReduceMotion = useReducedMotion();

	return (
		<motion.div
			whileHover={shouldReduceMotion ? {} : { y: -4, backgroundColor: "#232732" }}
			className="relative group bg-[#1d2029]/80 backdrop-blur-sm border border-white/5 p-4 md:p-6 flex flex-col min-h-[140px] md:min-h-[223px] transition-colors duration-300 stat-card-clip"
		>
			<div className="relative z-10 flex flex-col gap-1 md:gap-2">
				<p className="font-heading text-4xl md:text-3xl xl:text-4xl font-light tracking-[-0.03em] text-[#f0f1f3] tabular-nums leading-none">
					{value}
				</p>
				<p className="font-sans text-base md:text-lg font-normal text-[#c3cce9] tracking-[-0.01em] leading-tight opacity-70">
					{label}
				</p>
			</div>

			{Icon && (
				<div className="absolute bottom-4 right-6 md:bottom-6 md:right-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
					<Icon className="size-4 md:size-5" />
				</div>
			)}

			{footer && (
				<p className="absolute bottom-2 left-4 md:bottom-4 md:left-6 w-[60%] md:w-[45%] text-[9px] md:text-xs text-[#e7e9ef]/50 leading-[1.2] md:leading-[1.3] font-sans tracking-tight">
					{footer}
				</p>
			)}
		</motion.div>
	);
}

