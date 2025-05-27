import React, { memo, FunctionComponent, ReactNode } from "react";
import {
	LinkContainer,
	StyledArrow,
	StyledExternalLink,
	StyledLocalLink,
	TeaserContainer,
} from "./styles";
import { RequiredUrlProps } from "../../constants";

type TeaserProps = {
	className?: string;
	children?: ReactNode;
	linkText: string;
} & RequiredUrlProps;

const Teaser: FunctionComponent<TeaserProps> = ({
	className,
	children,
	url,
	linkText,
	isExternal = false,
	isLocal = false,
}) => {
	return (
		<TeaserContainer className={className}>
			{children}
			<hr />
			<LinkContainer>
				{isExternal ? (
					<StyledExternalLink href={url}>{linkText}</StyledExternalLink>
				) : (
					<StyledLocalLink to={url}>
						{linkText}
						<StyledArrow />
					</StyledLocalLink>
				)}
			</LinkContainer>
		</TeaserContainer>
	);
};

export default memo(Teaser);
