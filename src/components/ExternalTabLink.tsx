import React, { memo, FunctionComponent, ReactNode } from "react";
import { ExternalLink } from "./SharedStyles";

interface ExternalTabLinkProps {
	className?: string;
	children?: ReactNode;
	href: string;
}

export const ExternalTabLink: FunctionComponent<ExternalTabLinkProps> = ({
	children,
	className,
	href,
}) => {
	return (
		<ExternalLink
			className={className}
			href={href}
			target="_blank"
			rel="noopener noreferrer"
		>
			{children}
		</ExternalLink>
	);
};

export default memo(ExternalTabLink);
