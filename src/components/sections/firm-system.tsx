"use client";

import { cn } from "@/lib/utils";
import {
	Chart01Icon,
	Coins01Icon,
	CoinsDollarFreeIcons,
	FlashIcon,
	Home01Icon,
	MinusSignIcon,
	PlusSignIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { animate, AnimatePresence, motion, useMotionValue, useTransform } from "motion/react";
import { useRef, useState } from "react";

const systemItems = [
	{
		title: "Borrow & Mint",
		description: "Mint FIRM against ETH, staked ETH, and Status-aligned assets. Positions are held in NFT vaults for easy transfer.",
		angle: -90,
		icon: CoinsDollarFreeIcons,
	},
	{
		title: "Set Your Rate",
		description: "Choose the interest rate you're willing to pay. Update it anytime to balance between cheap loans and higher yield.",
		angle: -18,
		icon: Chart01Icon,
	},
	{
		title: "Earn Native Yield",
		description: "FIRM holders earn 75% of borrower fees and all liquidation fees, plus governance incentives.",
		angle: 54,
		icon: Coins01Icon,
	},
	{
		title: "Gasless Status L2",
		description: "FIRM lives on a gasless L2. Status uses native yield to cover gas, so you can transact without preloading ETH.",
		angle: 126,
		icon: FlashIcon,
	},
	{
		title: "Redeem Anytime",
		description: "FIRM is always redeemable for $1 worth of collateral, ensuring you can always exit back to hard assets.",
		angle: 198,
		icon: Home01Icon,
	},
];

export function FirmSystem() {
	const [activeIndex, setActiveIndex] = useState(0);
	const accordionRefs = useRef<(HTMLDivElement | null)[]>([]);

	// Motion-driven Star Logic
	const angleMotion = useMotionValue(systemItems[0].angle);
	const flipMotion = useMotionValue(0);

	const handleItemClick = (index: number) => {
		const currentAngle = angleMotion.get();
		let targetAngle = systemItems[index].angle;

		// Shortest path logic: Normalize targetAngle to be within ±180 of currentAngle
		while (targetAngle > currentAngle + 180) targetAngle -= 360;
		while (targetAngle < currentAngle - 180) targetAngle += 360;

		// Flip logic based on direction
		if (targetAngle > currentAngle + 0.1) {
			animate(flipMotion, 0, { type: "spring", stiffness: 300, damping: 30 });
		} else if (targetAngle < currentAngle - 0.1) {
			animate(flipMotion, 180, { type: "spring", stiffness: 300, damping: 30 });
		}

		// Animate along the shortest path
		animate(angleMotion, targetAngle, {
			type: "spring",
			stiffness: 40,
			damping: 15,
			mass: 1,
		});

		setActiveIndex(index);
		setTimeout(() => {
			accordionRefs.current[index]?.scrollIntoView({
				behavior: "smooth",
				block: "nearest",
			});
		}, 50);
	};

	// SVG coordinate space: 1100x700
	const width = 1100;
	const height = 700;
	const cx = width / 2;
	const cy = height / 2;

	// Ellipse dimensions based on Figma (729x465)
	const rx = 364.5;
	const ry = 232.5;

	const starX = useTransform(angleMotion, (a) => cx + rx * Math.cos((a * Math.PI) / 180));
	const starY = useTransform(angleMotion, (a) => cy + ry * Math.sin((a * Math.PI) / 180));

	const tangentRotation = useTransform(angleMotion, (a) => {
		const rad = (a * Math.PI) / 180;
		// Standard ellipse velocity vector: dx/dt = -rx*sin(t), dy/dt = ry*cos(t)
		const dx = -rx * Math.sin(rad);
		const dy = ry * Math.cos(rad);
		return (Math.atan2(dy, dx) * 180) / Math.PI;
	});

	const starRotation = useTransform(
		[tangentRotation, flipMotion],
		([t, f]) => Number(t) + Number(f)
	);

	const starPath = "M58.2713 0.688292C58.5724 -0.22943 59.8706 -0.229431 60.1717 0.688291L65.7816 17.7889C65.8843 18.1021 66.1347 18.3445 66.451 18.437L85.6566 24.0536C86.6157 24.3341 86.6157 25.6927 85.6566 25.9732L66.451 31.5898C66.1347 31.6823 65.8843 31.9248 65.7816 32.2379L60.1717 49.3385C59.8706 50.2563 58.5724 50.2563 58.2713 49.3385L52.6978 32.3488C52.5756 31.9765 52.2474 31.7099 51.858 31.6666L0.889639 26.0073C-0.29655 25.8756 -0.296545 24.1512 0.889645 24.0195L51.858 18.3602C52.2474 18.317 52.5756 18.0503 52.6978 17.678L58.2713 0.688292Z";

	return (
		<section className="relative py-24 bg-[#0d0f14] overflow-hidden min-h-[900px] flex flex-col items-center">
			{/* Starry background effect */}
			<div className="absolute inset-0 opacity-40 pointer-events-none">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1d212b_0%,transparent_70%)]" />
				<div
					className="absolute inset-0 bg-repeat bg-size-[1024px_1024px]"
					style={{
						backgroundImage: `url('https://www.figma.com/api/mcp/asset/41725f10-86cc-4826-b6a9-e39c10ef5bf6')`,
					}}
				/>
			</div>

			<div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
				{/* Visual side */}
				<div className="flex-1 relative w-full max-w-[800px] aspect-1100/700">
					{/* Desktop View */}
					<div className="hidden md:block absolute inset-0">
						<svg
							viewBox={`0 0 ${width} ${height}`}
							className="absolute inset-0 w-full h-full overflow-visible"
						>
							<ellipse
								cx={cx}
								cy={cy}
								rx={rx}
								ry={ry}
								fill="none"
								stroke="white"
								strokeOpacity="0.4"
								strokeWidth="1.5"
								strokeDasharray="4 8"
							/>

							<motion.g
								style={{
									x: starX,
									y: starY,
									rotate: starRotation,
								}}
							>
								<defs>
									<radialGradient id="star-glow-grad">
										<stop offset="0%" stopColor="#F2B341" stopOpacity="0.6" />
										<stop offset="100%" stopColor="#F2B341" stopOpacity="0" />
									</radialGradient>
								</defs>

								<motion.circle
									r="32"
									fill="url(#star-glow-grad)"
									animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
									transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
								/>

								<g transform="translate(-43.5, -25.5) scale(0.8)">
									<path
										d={starPath}
										fill="#F2B341"
										className="drop-shadow-[0_0_12px_rgba(242,179,65,0.9)]"
									/>
								</g>
							</motion.g>

							{systemItems.map((item, i) => {
								const rad = (item.angle * Math.PI) / 180;
								const x = cx + rx * Math.cos(rad);
								const y = cy + ry * Math.sin(rad);
								const isActive = activeIndex === i;

								return (
									<foreignObject
										key={i}
										x={x - 100}
										y={y - 25}
										width="200"
										height="50"
										className="overflow-visible"
									>
										<div className="w-full h-full flex items-center justify-center">
											<button
												onClick={() => handleItemClick(i)}
												className={cn(
													"px-5 py-2.5 rounded-sm border transition-all duration-300 group cursor-pointer",
													isActive
														? "bg-[#1447e6] border-blue-400 shadow-[0_0_25px_rgba(20,71,230,0.5)] scale-110"
														: "bg-[#1a1d26]/80 border-white/10 hover:border-white/30 hover:bg-[#1a1d26]"
												)}
											>
												<span className={cn(
													"font-archivo font-semibold text-base whitespace-nowrap tracking-tight transition-colors",
													isActive ? "text-white" : "text-white/60 group-hover:text-white"
												)}>
													{item.title}
												</span>
											</button>
										</div>
									</foreignObject>
								);
							})}
						</svg>

						<div className="absolute inset-0 pointer-events-none flex items-center justify-center">
							<div className="relative z-10 text-center max-w-[300px] px-6">
								<h2 className="text-2xl font-heading font-semibold text-white mb-2 tracking-tight">
									The FIRM System
								</h2>
								<p className="text-[#a9b1c8] text-sm leading-relaxed">
									Sustainability through real yield and predictable mechanics.
								</p>
							</div>
						</div>
					</div>

					{/* Mobile View - Visual */}
					<div className="md:hidden relative w-full h-[300px] flex items-center justify-center">
						<svg
							className="absolute inset-0 w-full h-full overflow-visible"
							viewBox="0 0 400 300"
						>
							<path
								d="M 50 150 A 150 100 0 1 1 350 150 A 150 100 0 1 1 50 150"
								fill="none"
								stroke="white"
								strokeOpacity="0.2"
								strokeWidth="1.5"
								strokeDasharray="4 8"
							/>

							{/* Simplified mobile star position based on activeIndex - Removed as it doesn't scale well */}
							{systemItems.map((item, i) => {
								const angle = (i * (360 / 5) - 90) * (Math.PI / 180);
								const x = 200 + 150 * Math.cos(angle);
								const y = 150 + 100 * Math.sin(angle);
								const isActive = activeIndex === i;

								return (
									<g key={i} onClick={() => handleItemClick(i)}>
										<circle
											cx={x}
											cy={y}
											r="22"
											fill={isActive ? "#1447e6" : "#1a1d26"}
											className="transition-colors duration-300"
										/>
										<foreignObject x={x - 12} y={y - 12} width="24" height="24">
											<div className="flex items-center justify-center w-full h-full">
												<HugeiconsIcon icon={item.icon} size={16} className="text-white" />
											</div>
										</foreignObject>
									</g>
								);
							})}
						</svg>
						<div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
							<span className="text-white font-heading font-semibold text-lg">FIRM</span>
						</div>
					</div>
				</div>

				{/* Accordion side */}
				<div className="flex-1 w-full max-w-[500px]">
					<div className="mb-8">
						<h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 tracking-tight">
							How FIRM works
						</h2>
						<p className="text-[#a9b1c8] text-base md:text-lg leading-relaxed">
							A self-sustaining loop designed for stability, yield, and alignment.
						</p>
					</div>

					<div className="space-y-3">
						{systemItems.map((item, i) => (
							<div key={i} ref={(el) => { accordionRefs.current[i] = el; }}>
								<AccordionItem
									title={item.title}
									description={item.description}
									icon={item.icon}
									isOpen={activeIndex === i}
									onClick={() => handleItemClick(i)}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

interface AccordionItemProps {
	title: string;
	description: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	icon: any;
	isOpen: boolean;
	onClick: () => void;
}

function AccordionItem({ title, description, icon, isOpen, onClick }: AccordionItemProps) {
	return (
		<div
			className={cn(
				"border rounded-lg transition-all duration-300",
				isOpen
					? "bg-[#1447e6]/10 border-[#1447e6] shadow-[inset_0_0_20px_rgba(20,71,230,0.1)]"
					: "bg-[#1a1d26]/40 border-white/5 hover:border-white/10"
			)}
		>
			<button
				onClick={onClick}
				className="w-full flex items-center justify-between p-4 md:p-6 text-left group"
			>
				<div className="flex items-center gap-4">
					<div className={cn(
						"w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
						isOpen ? "bg-[#1447e6] text-white" : "bg-white/5 text-white/40 group-hover:text-white/60"
					)}>
						<HugeiconsIcon icon={icon} size={20} />
					</div>
					<h3 className={cn(
						"font-heading font-semibold text-lg md:text-xl transition-colors tracking-normal",
						isOpen ? "text-white" : "text-white/70 group-hover:text-white"
					)}>
						{title}
					</h3>
				</div>
				<div className={cn(
					"transition-transform duration-300",
					isOpen ? "rotate-0 text-white" : "text-white/30 group-hover:text-white/50"
				)}>
					{isOpen ? <HugeiconsIcon icon={MinusSignIcon} size={20} /> : <HugeiconsIcon icon={PlusSignIcon} size={20} />}
				</div>
			</button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className="overflow-hidden"
					>
						<div className="px-4 md:px-6 pb-6 md:pb-8 pt-0 ml-14 md:ml-18">
							<p className="text-[#a9b1c8] text-base md:text-lg leading-relaxed max-w-[400px]">
								{description}
							</p>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
