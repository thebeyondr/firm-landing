"use client";

import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useEffect, useState } from "react";

interface BannerProps {
	text: string;
	link?: {
		text: string;
		href: string;
	};
	expiryTime?: string | number; // ISO string or timestamp
}

export function Banner({ text, link, expiryTime }: BannerProps) {
	const [isVisible, setIsVisible] = useState(() => {
		if (expiryTime) {
			const expiryDate = new Date(expiryTime).getTime();
			const now = new Date().getTime();
			return now <= expiryDate;
		}
		return true;
	});

	useEffect(() => {
		if (expiryTime && isVisible) {
			const expiryDate = new Date(expiryTime).getTime();
			const now = new Date().getTime();

			const timeout = setTimeout(() => {
				setIsVisible(false);
			}, expiryDate - now);
			return () => clearTimeout(timeout);
		}
	}, [expiryTime, isVisible]);

	if (!isVisible) return null;

	return (
		<div className="relative z-50 bg-brand-yellow flex w-full items-center justify-center p-0 text-center text-[16px] font-semibold tracking-tight text-[#2c2416] leading-[1.05]">
			<p className="py-2.5 pl-4">{text}</p>
			{link && (
				<a
					href={link.href}
					aria-label={`${link.text} on Status`}
					className="group px-4 hover:bg-[#222734]/5 transition-all duration-300 flex items-center h-full min-h-[44px] ml-1"
				>
					<span className="border-b-2 border-[#222734]/40 group-hover:border-[#222734] transition-colors duration-300 py-0.5 flex items-center gap-1.5">
						{link.text}
						<HugeiconsIcon
							icon={ArrowRight01Icon}
							size={14}
							className="transition-transform duration-300 group-hover:translate-x-0.5"
						/>
					</span>
				</a>
			)}
		</div>
	);
}

