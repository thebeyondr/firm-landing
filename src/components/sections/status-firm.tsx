"use client";

import { Logo, TokenLogo } from "@/components/brand-assets";
import { cn } from "@/lib/utils";
import statusLogo from "@/assets/status-logo.svg";
import { motion } from "motion/react";

const features = [
	{
		title: "Native liquidity",
		description:
			"FIRM is the default stable unit across Status apps, concentrating liquidity instead of fragmenting it across many stables.",
	},
	{
		title: "Gasless UX",
		description:
			"Users earn gas through Karma and participation, so they can transact in your app without ever touching a bridge UI.",
	},
	{
		title: "Composable design",
		description:
			"NFT vaults, user-set rates, and native yield make FIRM easy to plug into new DeFi, game economies, or onchain social features.",
	},
];

export function StatusFirmSection({ className }: { className?: string }) {
	return (
		<section
			className={cn(
				"relative isolate overflow-hidden bg-[#0b0e14] py-20 sm:py-24",
				"before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_25%_35%,rgba(113,64,253,0.2),transparent_55%),radial-gradient(circle_at_80%_25%,rgba(18,90,255,0.2),transparent_52%)] before:pointer-events-none before:-z-10",
				className,
			)}
		>
			<div className="container mx-auto px-6">
				<div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
					{/* Content */}
					<div className="flex flex-col gap-8">
						<div className="space-y-4">
							<h2 className="text-3xl font-heading font-bold leading-tight text-white sm:text-4xl lg:text-[34px]">
								Built for Status apps and games
							</h2>
							<p className="text-base leading-relaxed text-white/70 sm:text-lg">
								Status Network is a gasless Ethereum L2 optimized for social apps, games, and
								communities. FIRM gives builders a native stablecoin that fits that world: no surprise
								governance changes, sustainable yield, and tight integration with Status primitives.
							</p>
						</div>

						<div className="grid gap-4 sm:grid-cols-2">
							{features.map((feature) => (
								<div
									key={feature.title}
									className="rounded-xl border border-white/5 bg-white/5 px-4 py-4 shadow-[0_16px_40px_-18px_rgba(0,0,0,0.55)] backdrop-blur-sm"
								>
									<div className="inline-flex items-center rounded-sm bg-linear-to-r from-[#8040ff] to-[#3b7bff] px-3 py-1 text-sm font-semibold text-white shadow-[0_6px_20px_rgba(59,123,255,0.35)]">
										{feature.title}
									</div>
									<p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
										{feature.description}
									</p>
								</div>
							))}
						</div>

						<div className="flex flex-col gap-3 rounded-2xl border border-white/5 bg-white/5 p-6 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.6)] backdrop-blur-md">
							<div className="flex items-center gap-3">
								<span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white shadow-[0_0_18px_rgba(255,255,255,0.28)]">
									<Logo className="h-6 w-6 text-white" />
								</span>
								<div>
									<p className="text-sm text-white/60">Status Discover</p>
									<p className="font-semibold text-white">Launch apps with gasless UX</p>
								</div>
							</div>
							<div className="flex flex-wrap items-center gap-3">
								<a
									href="https://hub.status.network/discover"
									target="_blank"
									rel="noreferrer"
									className={cn(
										"inline-flex items-center gap-2 rounded-md bg-[#2156fc] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(33,86,252,0.45)] transition",
										"hover:bg-[#1b49d8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0e14] focus-visible:ring-[#6fa2ff]",
										"active:translate-y-px",
									)}
								>
									Use status apps
								</a>
								<span className="text-sm text-white/50">Gasless by default, composable by design.</span>
							</div>
						</div>
					</div>

					{/* Visual cluster */}
					<div className="relative isolate overflow-hidden rounded-3xl border border-white/5 bg-[radial-gradient(circle_at_40%_50%,rgba(113,64,253,0.18),transparent_55%),radial-gradient(circle_at_70%_40%,rgba(11,93,255,0.2),transparent_60%),linear-gradient(180deg,rgba(12,17,26,0.92),rgba(12,17,26,0.72))] p-10 shadow-[0_30px_120px_-50px_rgba(0,0,0,0.85)]">
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.04),transparent_42%)]" />
						<div className="relative mx-auto flex w-full max-w-[640px] items-center justify-center gap-0 sm:gap-2">
							<motion.div
								className="relative aspect-square w-[42vw] min-w-[140px] max-w-[220px] sm:w-[220px] sm:max-w-[240px] md:w-[260px] md:max-w-[270px] translate-x-2 sm:translate-x-4 md:translate-x-6"
								animate={{ scale: [1, 1.03, 1], opacity: [0.94, 1, 0.94] }}
								transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
							>
								<div className="absolute inset-0 rounded-full bg-linear-to-br from-[#8a4bff] via-[#6c4bff] to-[#2c2ad9] opacity-85" />
								<div className="absolute inset-[10%] rounded-full bg-linear-to-br from-[#9d5bff] via-[#8b4dff] to-[#5637f0]" />
								<div className="absolute inset-[22%] flex items-center justify-center">
									<img
										src={statusLogo}
										alt="Status"
										className="h-full w-full drop-shadow-[0_0_40px_rgba(113,64,253,0.55)]"
										loading="lazy"
									/>
								</div>
							</motion.div>

							<motion.div
								className="relative aspect-square w-[42vw] min-w-[140px] max-w-[220px] sm:w-[220px] sm:max-w-[240px] md:w-[260px] md:max-w-[270px] -translate-x-2 sm:-translate-x-4 md:-translate-x-6"
								animate={{ scale: [1, 1.03, 1], opacity: [0.94, 1, 0.94] }}
								transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
							>
								<div className="absolute inset-0 rounded-full bg-linear-to-br from-[#1d62ff] via-[#0f55f5] to-[#0a3dcc] opacity-90" />
								<div className="absolute inset-[10%] rounded-full bg-linear-to-br from-[#2c6bff] via-[#1459f0] to-[#0d3fbf]" />
								<div className="absolute inset-[22%] flex items-center justify-center text-white drop-shadow-[0_0_36px_rgba(11,93,255,0.6)]">
									<TokenLogo className="h-full w-full" />
								</div>
							</motion.div>
						</div>
						<div className="mt-8 grid gap-3 sm:grid-cols-2">
							<div className="rounded-lg border border-white/5 bg-white/5 px-4 py-3 text-sm text-white/80 shadow-[0_10px_32px_-18px_rgba(0,0,0,0.6)]">
								FIRM pairs with Status gasless UX so users never preload ETH. Perfect for social and games.
							</div>
							<div className="rounded-lg border border-white/5 bg-white/5 px-4 py-3 text-sm text-white/80 shadow-[0_10px_32px_-18px_rgba(0,0,0,0.6)]">
								Native yield and NFT vaults keep liquidity concentrated while staying composable.
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

