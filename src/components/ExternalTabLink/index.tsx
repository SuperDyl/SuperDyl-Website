import React, { memo, FunctionComponent, ReactNode } from "react";
import { ExternalLink } from "../SharedStyles";

interface ExternalTabLinkProps {
	className?: string;
	children?: ReactNode;
	href: string;
	overrideParent?: boolean;
}

export const ExternalTabLink: FunctionComponent<ExternalTabLinkProps> = ({
	children,
	className,
	href,
	overrideParent,
}) => {
	return (
		<ExternalLink
			className={className}
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			onClick={(e: React.FormEvent) => {
				if (overrideParent) {
					e.preventDefault();
					const newTab = window.open(href, "_blank", "noopener,noreferrer");
					if (newTab !== null) {
						newTab.opener = null;
					}
				}
			}}
		>
			{children}
		</ExternalLink>
	);
};

export default memo(ExternalTabLink);
