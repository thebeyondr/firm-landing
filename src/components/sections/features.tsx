import { motion } from "motion/react";
import { StarBorrow, StarEarn, StarAlignStatus } from "@/components/brand-assets";
import { cn } from "@/lib/utils";

const features = [
	{
		title: "BORROW",
		description: "Mint FIRM against ETH and Status-native assets with adjustable rates.",
		icon: StarBorrow,
	},
	{
		title: "EARN",
		description: "Deposit into the Safety Pool and earn yield from real borrowing.",
		icon: StarEarn,
	},
	{
		title: "ALIGN STATUS",
		description: "Borrower fees fund Status apps, liquidity, and public goods.",
		icon: StarAlignStatus,
	},
];

export function Features() {
	return (
		<section className="py-12 lg:py-24 xl:py-32 bg-[#151821] overflow-hidden">
			<div className="container mx-auto max-w-[1280px] px-6 md:px-12">
				<div className="grid grid-cols-1 md:grid-cols-3 relative">
					{features.map((feature, i) => (
						<div key={i} className="relative flex flex-col items-center text-center px-8 py-12 md:py-0">
							{/* Vertical Divider */}
							{i > 0 && (
								<div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-[200px] border-l-3 border-dashed border-white/20" />
							)}

							<motion.div
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								whileHover="hover"
								transition={{
									delay: i * 0.1,
									duration: 0.5,
									ease: "easeOut"
								}}
								viewport={{ once: true, amount: 0.3 }}
								className="flex flex-col items-center group cursor-pointer"
							>
								<div className={cn(
									"h-20 flex items-center justify-center mb-10 transition-transform duration-500",
									i !== 0 && "group-hover:scale-105"
								)}>
									<feature.icon className="w-auto h-auto max-w-[120px]" />
								</div>

								<h3 className="text-xl xl:text-sxl font-heading font-semibold tracking-wide text-white mb-6 tracking-tight">
									{feature.title}
								</h3>

								<p className="text-[#a9b1c8] text-base lg:text-lg leading-relaxed max-w-[280px]">
									{feature.description}
								</p>
							</motion.div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

