import { cubicBezier, motion, useReducedMotion } from "motion/react";
import { Banner } from "./banner";
import { BrandStar, Logotype } from "./brand-assets";

const ASSETS = {
	BANNER_STAR: "https://www.figma.com/api/mcp/asset/c9784cf6-6bc5-4434-8065-6bc0a0f92a27",
	HERO_DECOR: "https://www.figma.com/api/mcp/asset/076b1a34-5e83-4fb3-b0f6-891bb3143a47",
	YUSF_BADGE: "https://www.figma.com/api/mcp/asset/0f761361-9992-4331-984d-a652c4c89bcf",
	DISCORD: "https://www.figma.com/api/mcp/asset/3b513d49-6277-488d-9091-813581b0834c",
	GITHUB: "https://www.figma.com/api/mcp/asset/21603fc3-7f12-4426-ac9e-d9413b28fa52",
	TWITTER: "https://www.figma.com/api/mcp/asset/aa62c3a3-522e-4d22-801a-ac4f17c2a20c",
	STAT_BG_1: "https://www.figma.com/api/mcp/asset/29cd6101-5f2f-4bc3-a019-e98455827a81",
	STAT_BG_2: "https://www.figma.com/api/mcp/asset/a7ec4d54-7e23-4e06-84cc-9d2a2d0e48aa",
	STAT_BG_3: "https://www.figma.com/api/mcp/asset/595eabec-6eb1-4770-9dff-0282574245b8",
};

interface HeroProps {
	bannerText?: string;
	bannerLink?: { text: string; href: string };
	bannerExpiry?: string | number;
}

export function Hero({
	bannerText = "yUSF is live on Status",
	bannerLink = { text: "Get FIRM", href: "#" },
	bannerExpiry,
}: HeroProps) {
	const shouldReduceMotion = useReducedMotion();

	return (
		<div className="relative flex min-h-screen flex-col bg-[#151821] text-white overflow-hidden isolate">
			<Banner text={bannerText} link={bannerLink} expiryTime={bannerExpiry} />

			<div className="absolute inset-0 pointer-events-none z-0">
				<motion.div
					initial={{ y: shouldReduceMotion ? 0 : -100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 2, ease: cubicBezier(0, 0.55, 0.45, 1) }}
					className="flex justify-center xl:-mt-24 will-change-transform"
				>
					<Logotype
						fill="#2156FC"
						className="h-[160px] xl:h-[520px] aspect-auto opacity-[0.25] pointer-events-none select-none"
					/>
				</motion.div>
			</div>

			<div className="relative z-10 flex-1 flex flex-col">
				<div className="container mx-auto px-6 md:px-12 lg:px-24 pt-12 xl:pt-20">

					<div className="mt-18 xl:mt-2 flex flex-col-reverse items-start gap-16 lg:flex-row lg:items-center lg:justify-between lg:gap-32">
						{/* Left Content */}
						<div className="flex max-w-[531px] flex-col gap-8">
							<div className="flex flex-col gap-3">
								<motion.h1
									initial={{ y: shouldReduceMotion ? 0 : 20, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
									className="font-heading text-5xl font-semibold leading-[0.95] tracking-tight md:text-[64px] text-[#e1e2e5]"
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
						<div className="relative flex shrink-0 items-center justify-center lg:w-[600px] aspect-square">

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

					{/* Stats Section */}
					<div className="mt-32 mb-32 grid grid-cols-1 md:grid-cols-3 gap-8">
						<StatCard
							value="X.XX% APR"
							label="Avg. Safety Pool reward rate*"
							footer="*Based on recent borrower activity. Rates are variable and not guaranteed."
							bgImg={ASSETS.STAT_BG_1}
						/>
						<StatCard
							value="$X.XXM"
							label="Peak FIRM TVL"
							bgImg={ASSETS.STAT_BG_2}
						/>
						<StatCard
							value="XXX vaults"
							label="Open positions on Status"
							bgImg={ASSETS.STAT_BG_3}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

function StatCard({ value, label, footer, bgImg }: { value: string; label: string; footer?: string; bgImg: string }) {
	return (
		<div className="relative group overflow-hidden bg-transparent p-8 flex flex-col justify-center min-h-[223px]">
			{/* Union Background */}
			<img src={bgImg} alt="" className="absolute inset-0 size-full object-contain group-hover:scale-105 transition-transform duration-500" />

			<div className="relative z-10 flex flex-col gap-2 ml-6">
				<p className="font-heading text-5xl font-light tracking-[-0.96px] text-[#f0f1f3] md:text-[48px]">
					{value}
				</p>
				<p className="font-sans text-lg font-normal text-[#c3cce9] tracking-[-0.36px] md:text-[18px]">
					{label}
				</p>
			</div>

			{footer && (
				<p className="absolute bottom-6 left-12 right-12 text-[13px] text-[#e7e9ef]/80 leading-tight font-sans tracking-wide">
					{footer}
				</p>
			)}
		</div>
	);
}


