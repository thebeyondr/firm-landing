"use client";

import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useEffect, useState } from "react";

/**
 * Props for the Banner component.
 *
 * @property {string} text - The main text/content displayed in the banner.
 * @property {Object} [link] - (Optional) An object defining the banner call-to-action link.
 * @property {string} link.text - The text label for the link.
 * @property {string} link.href - The URL or path for the link destination.
 * @property {string | number} [expiryTime] - (Optional) An ISO date string or a numeric timestamp.
 *     If provided, the banner will expire (hide) when this time passes.
 */
interface BannerProps {
	text: string;
	link?: {
		text: string;
		href: string;
	};
	expiryTime?: string | number;
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
		<div className="relative z-50 bg-brand-yellow flex w-full items-center justify-center p-0 text-center text-xs md:text-sm font-semibold tracking-tight text-[#2c2416] leading-[1.05]">
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

