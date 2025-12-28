export function Logo({
	className,
	fill = "currentColor",
}: {
	className?: string;
	fill?: string;
}) {
	return (
		<div className={`aspect-square w-fit text-white ${className}`}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="100%"
				height="100%"
				viewBox="0 0 24 24"
				fill="none"
			>
				<g fill={fill}>
					<path d="M20.4476 18.3054H11.2263V23.9997H3.55664V12.5472H20.4476V18.3054Z" />
					<path d="M15.282 4.79371L16.2289 7.68064H11.2373V10.918H3.55664V6.09363H11.2257V4.34313L15.282 4.79371Z" />
					<path d="M16.2315 7.68816L16.2289 7.68064H16.2341L16.2315 7.68816Z" />
					<path d="M20.4297 7.68064H16.2341L17.181 4.79371L20.4279 3.84422L17.181 2.89474L16.2315 0L15.282 2.89474L11.2257 3.34503V0H20.4297V7.68064Z" />
					<path d="M11.2257 4.34313L6.73007 3.84422L11.2257 3.34503V4.34313Z" />
				</g>
			</svg>
		</div>
	);
}

export function TokenLogo({ className }: { className?: string }) {
	return (
		<div className={`aspect-square w-fit ${className}`}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="100%"
				height="100%"
				viewBox="0 0 24 24"
				fill="none"
			>
				<g clipPath="url(#clip0_token)">
					<path
						d="M24.0004 12.0002C24.0004 18.6277 18.6277 24.0004 12.0002 24.0004C5.37267 24.0004 0 18.6277 0 12.0002C0 5.37267 5.37267 0 12.0002 0C18.6277 0 24.0004 5.37267 24.0004 12.0002Z"
						fill="#2156FC"
					/>
					<path
						d="M17.218 15.9356H11.5188V19.4547H6.77832V12.3766H17.218V15.9356Z"
						fill="#E9ECF3"
					/>
					<path
						d="M14.0244 7.58399L14.6099 9.36874H11.5255V11.3691H6.77832V8.38745H11.5176V7.30557L14.0244 7.58399Z"
						fill="#E9ECF3"
					/>
					<path
						d="M14.6112 9.37285L14.6099 9.36874H14.6125L14.6112 9.37285Z"
						fill="#E9ECF3"
					/>
					<path
						d="M17.2063 9.36874H14.6125L15.1981 7.58399L17.2047 6.99717L15.1981 6.41044L14.6112 4.62158L14.0244 6.41044L11.5176 6.68866V4.62158H17.2063V9.36874Z"
						fill="#E9ECF3"
					/>
					<path
						d="M11.5176 7.30557L8.73959 6.99717L11.5176 6.68866V7.30557Z"
						fill="#E9ECF3"
					/>
				</g>
				<defs>
					<clipPath id="clip0_token">
						<rect width="24" height="24" fill="white" />
					</clipPath>
				</defs>
			</svg>
		</div>
	);
}

export function Logotype({
	className,
	fill = "#2156FC",
}: {
	className?: string;
	fill?: string;
}) {
	return (
		<div className={`w-fit ${className}`}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="100%"
				height="100%"
				viewBox="0 0 76.69 24"
				fill="none"
			>
				<g fill={fill}>
					<path d="M76.694 24H69.2409V7.45389H67.4931V18.4841H59.9305V7.45389H58.2103V24H50.7572V0.000768443H76.694V24Z" />
					<path d="M16.3966 18.4837H7.45313V23.9988H0V12.8937H16.3966V18.4837Z" />
					<path d="M26.0863 23.9988H18.6332V0H26.0863V23.9988Z" />
					<path d="M46.5088 11.1044H35.9216V12.9106H40.3417L50.0871 23.9988H39.8288L35.9216 19.6368V23.9988H28.4773V11.1044H28.4723V0.0737705H46.5088V11.1044Z" />
					<path d="M16.3966 7.45313H7.45313V11.1051H0V0H16.3966V7.45313Z" />
				</g>
			</svg>
		</div>
	);
}

export function BrandStar({ className, fill = "#EEECE7" }: { className?: string; fill?: string }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			viewBox="0 0 33 18"
			fill="none"
		>
			<path
				d="M22.2445 0L24.4676 6.77665L32.0693 8.99975L24.4676 11.2229L22.2445 17.9995L20.0214 11.2229L0 8.99975L20.0214 6.77665L22.2445 0Z"
				fill={fill}
			/>
		</svg>
	);
}

