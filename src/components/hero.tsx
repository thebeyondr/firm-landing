import { cubicBezier, motion, useReducedMotion } from "motion/react";
import { Banner } from "./banner";
import { BrandStar, Logotype } from "./brand-assets";
import { StatCard } from "./stat-card";

const ASSETS = {
	BANNER_STAR: "https://www.figma.com/api/mcp/asset/c9784cf6-6bc5-4434-8065-6bc0a0f92a27",
	HERO_DECOR: "https://www.figma.com/api/mcp/asset/076b1a34-5e83-4fb3-b0f6-891bb3143a47",
	YUSF_BADGE: "https://www.figma.com/api/mcp/asset/0f761361-9992-4331-984d-a652c4c89bcf",
	DISCORD: "https://www.figma.com/api/mcp/asset/3b513d49-6277-488d-9091-813581b0834c",
	GITHUB: "https://www.figma.com/api/mcp/asset/21603fc3-7f12-4426-ac9e-d9413b28fa52",
	TWITTER: "https://www.figma.com/api/mcp/asset/aa62c3a3-522e-4d22-801a-ac4f17c2a20c",
};

interface BannerDisplayProps {
	bannerText?: string;
	bannerLink?: { text: string; href: string };
	bannerExpiry?: string | number;
	stats?: {
		value: string;
		label: string;
		footer?: string;
	}[];
}

export function Hero({
	bannerText = "yUSF is live on Status",
	bannerLink = { text: "Get FIRM", href: "#" },
	bannerExpiry,
	stats = [], // Default to empty array to show pending state
}: BannerDisplayProps) {
	const shouldReduceMotion = useReducedMotion();
	const hasStats = stats && stats.length > 0;

	return (
		<div className="relative flex min-h-screen flex-col bg-[#151821] text-white overflow-hidden isolate">
			<Banner text={bannerText} link={bannerLink} expiryTime={bannerExpiry} />

			<div className="absolute inset-0 pointer-events-none z-0">
				<motion.div
					initial={{ y: shouldReduceMotion ? 0 : -100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 2, ease: cubicBezier(0, 0.55, 0.45, 1) }}
					className="flex justify-center lg:-mt-32 xl:-mt-8 will-change-transform h-[160px] md:h-[320px] lg:h-[540px]"
				>
					<Logotype
						fill="#2156FC"
						className="h-full w-full aspect-[76.69/24] opacity-[0.25] pointer-events-none select-none"
					/>
				</motion.div>
			</div>

			<div className="relative z-10 flex-1 flex flex-col">
				<div className="container mx-auto max-w-[1280px] px-6 md:px-12 lg:px-24 pt-12 xl:pt-20">

					<div className="mt-18 lg:mt-42 xl:mt-60 flex flex-col-reverse items-start gap-16 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
						{/* Left Content */}
						<div className="flex max-w-[520px] flex-col gap-8">
							<div className="flex flex-col gap-3">
								<motion.h1
									initial={{ y: shouldReduceMotion ? 0 : 20, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
									className="font-heading text-5xl font-semibold leading-[1.05] tracking-tight md:text-[64px] text-[#e1e2e5]"
								>
									Your money <br /> should be <span className="text-brand-yellow uppercase">firm</span>
								</motion.h1>
								<motion.p
									initial={{ y: shouldReduceMotion ? 0 : 20, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
									className="font-sans text-lg xl:text-xl font-normal leading-tight tracking-normal xl:tracking-[-0.75px] text-[#e1e3e7] md:text-[24px]"
								>
									Native stablecoin where you earn by using apps, and yield comes from{" "}
									<span className="font-semibold text-white">real borrowing</span>,{" "}
									<span className="font-semibold text-white">not printed points.</span>
								</motion.p>
							</div>

							<motion.button
								initial={{ y: shouldReduceMotion ? 0 : 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
								whileHover={{ y: -4, transition: { duration: 0.2, delay: 0 } }}
								whileTap={{ scale: 0.96, y: 0, transition: { duration: 0.1, delay: 0 } }}
								style={{ touchAction: "manipulation" }}
								className="group bg-[#1447e6] border-2 border-white/20 hover:border-white/40 text-lg font-semibold px-4 py-3 h-auto shadow-[0_0_20px_rgba(20,71,230,0.3)] hover:shadow-[0_0_25px_rgba(20,71,230,0.5)] flex items-center gap-3 w-fit tracking-[-0.01em] cursor-pointer"
							>
								Make your bags FIRM
								<div className="relative" aria-hidden="true">
									<BrandStar className="size-6 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300" />
									<div className="absolute inset-0 bg-white/40 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								</div>
							</motion.button>

							<motion.div
								initial={{ y: shouldReduceMotion ? 0 : 10, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
								className="flex items-center gap-1 -ml-2"
							>
								{/* TODO: Change these to custom hugeicon svgs */}
								{[
									{ id: "discord", src: ASSETS.DISCORD, alt: "Discord" },
									{ id: "github", src: ASSETS.GITHUB, alt: "GitHub" },
									{ id: "twitter", src: ASSETS.TWITTER, alt: "Twitter" },
								].map((social) => (
									<motion.a
										key={social.id}
										href="#"
										whileHover={{ y: -2, backgroundColor: "rgba(116, 134, 180, 0.1)" }}
										whileTap={{ scale: 0.95 }}
										className="p-3 rounded-[4px] transition-colors flex items-center justify-center min-w-[48px] min-h-[48px] group/social"
									>
										<img src={social.src} alt={social.alt} className="size-8 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
									</motion.a>
								))}
							</motion.div>
						</div>

						{/* Right Visual */}
						<div className="relative flex shrink-0 items-center justify-center aspect-square">

							{/* Rotating Badge Container */}
							<div className="relative z-10 xl:size-[220px] size-[180px]">
								{/* Rotating Circular Text */}
								<motion.div
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
									className="absolute -inset-8 xl:-inset-12 z-0"
								>
									<motion.div
										animate={{ rotate: 360 }}
										transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
										className="size-full"
									>
										<svg viewBox="0 0 100 100" className="size-full overflow-visible">
											<defs>
												<path
													id="circlePath"
													d="M 50, 50 m -43, 0 a 43, 43 0 1, 1 86, 0 a 43, 43 0 1, 1 -86, 0"
												/>
											</defs>
											<text className="fill-[#a9b1c8] font-sans text-[3.6px] uppercase tracking-[0.4em] font-semibold">
												<textPath href="#circlePath" startOffset="0%">
													• $USF — A Native Stablecoin on Status • $USF — A Native Stablecoin on Status										</textPath>
											</text>
										</svg>
									</motion.div>
								</motion.div>

								{/* Static Token */}
								<motion.img
									initial={{ scale: 0.9, opacity: 0, y: 20 }}
									animate={{ scale: 1, opacity: 1, y: 0 }}
									transition={{
										type: "spring",
										stiffness: 120,
										damping: 24,
										mass: 1.5,
										delay: 0.4,
									}}
									src={ASSETS.YUSF_BADGE}
									alt="yUSF Native Stablecoin"
									className="relative z-10 size-full object-contain"
								/>
							</div>
						</div>
					</div>
				</div>

				{/* Stats Section */}
				<div className="mt-16 md:mt-32 mb-24 md:mb-48 w-full xl:max-w-[1440px] xl:mx-auto px-6 md:px-12 xl:px-0">
					<div className={`grid gap-4 md:gap-4 items-stretch ${hasStats
						? "grid-cols-1 md:grid-cols-[auto_1fr_1fr_auto] lg:grid-cols-[auto_1fr_1fr_1fr_auto]"
						: "grid-cols-1 md:grid-cols-[auto_1fr_1fr_auto]"
						}`}>
						{/* Left Decorative Yellow Frame */}
						<motion.div
							whileHover={hasStats ? { scale: 1.02, backgroundColor: "#FFB800" } : {}}
							className="hidden md:block w-12 md:w-6 xl:w-16 bg-brand-yellow self-stretch relative overflow-hidden group/frame"
							aria-hidden="true"
						>
							<div className="absolute inset-0 bg-white/20 opacity-0 group-hover/frame:opacity-100 transition-opacity duration-300" />
						</motion.div>
						<div className="md:hidden flex items-end gap-3 mb-2" aria-hidden="true">
							<div className="w-12 h-12 bg-brand-yellow" />
							<div className="flex-1 h-px bg-white/10 mb-1" />
						</div>

						{hasStats ? (
							stats.map((stat, i) => (
								<StatCard
									key={i}
									value={stat.value}
									label={stat.label}
									footer={stat.footer}
									icon={i === 0 ? BrandStar : undefined}
								/>
							))
						) : (
							<div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
								<div className="relative group bg-[#1d2029]/40 backdrop-blur-[2px] border border-white/5 p-4 md:p-6 xl:pb-8 flex flex-col xl:justify-end min-h-[140px] md:min-h-[223px] transition-colors duration-300 stat-card-clip overflow-hidden isolate">
									<div className="relative z-10 flex flex-col gap-3">
										<p className="text-base md:text-lg lg:text-xl xl:text-lg text-[#e7e9ef]/80 font-sans font-medium tracking-tight leading-tight max-w-[240px] xl:max-w-[280px]">
											Thanks for being early. We need some time to gather stats here. <br />
											Until then, stay <span className="text-brand-yellow uppercase font-bold">firm</span>.
										</p>
									</div>
									<div className="absolute inset-0 flex items-center justify-center opacity-[0.03] -z-10">
										<BrandStar className="size-32 md:size-56 lg:size-52 -rotate-12 -mt-12" />
									</div>
								</div>
								<div className="relative group bg-[#1d2029]/20 backdrop-blur-[1px] border border-white/5 p-4 md:p-6 flex-col min-h-[140px] md:min-h-[223px] transition-colors duration-300 stat-card-clip overflow-hidden isolate hidden md:flex opacity-50">
									<div className="relative z-10 flex flex-col gap-1 md:gap-2 opacity-20">
										<div className="w-24 h-8 bg-white/10 rounded-sm" />
										<div className="w-32 h-4 bg-white/10 rounded-sm" />
									</div>
								</div>
							</div>
						)}

						{/* Right Decorative Yellow Frame */}
						<motion.div
							whileHover={hasStats ? { scale: 1.01, backgroundColor: "#FFB800" } : {}}
							className="hidden md:block w-48 md:w-4 lg:w-6 xl:w-52 bg-brand-yellow self-stretch relative overflow-hidden group/frame"
							aria-hidden="true"
						>
							<div className="absolute inset-0 bg-white/20 opacity-0 group-hover/frame:opacity-100 transition-opacity duration-300" />
						</motion.div>
						<div className="md:hidden flex items-start gap-3 mt-2" aria-hidden="true">
							<div className="flex-1 h-px bg-white/10 mt-1" />
							<div className="w-24 h-12 bg-brand-yellow" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}


