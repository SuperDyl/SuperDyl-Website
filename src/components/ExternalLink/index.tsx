import React, {
	memo,
	FunctionComponent,
	ReactNode,
	AnchorHTMLAttributes,
} from "react";
import { StyledExternalLink } from "./styles";
import { useOverrideParentLink } from "../hooks";
import ExternalArrow from "../icons/ExternalArrow";

interface LocalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	className?: string;
	children?: ReactNode;
	href: string;
	overrideParent?: boolean;
}

const ExternalLink: FunctionComponent<LocalLinkProps> = ({
	className,
	children,
	href,
	overrideParent = false,
	...props
}) => {
	const override = useOverrideParentLink(href, false);

	return (
		<StyledExternalLink
			className={className}
			href={href}
			onClick={(e: React.FormEvent) => {
				if (overrideParent) override(e);
			}}
			{...props}
		>
			{children}
			<ExternalArrow />
		</StyledExternalLink>
	);
};

export default memo(ExternalLink);
