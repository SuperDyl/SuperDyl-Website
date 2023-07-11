import React, { memo, FunctionComponent, ReactNode, useMemo } from "react";
import { useOverrideParentLink } from "../hooks";
import ExternalLink from "../ExternalLink";

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
	const override = useOverrideParentLink(href, true);

	return (
		<ExternalLink
			className={className}
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			onClick={(e: React.FormEvent) => {
				if (overrideParent) override(e);
			}}
		>
			{children}
		</ExternalLink>
	);
};

export default memo(ExternalTabLink);
