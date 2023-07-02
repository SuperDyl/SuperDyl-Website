import React, { memo, FunctionComponent, ReactNode } from "react";
import { HorizontalLine } from "../SharedStyles";
import {
	LinkContainer,
	StyledExternalLink,
	StyledLocalLink,
	TeaserContainer,
} from "./styles";
import AltRightArrow from "../icons/AltRightArrow";

interface TeaserProps {
	className?: string;
	children?: ReactNode;
	url: string;
	linkText: string;
	isExternal?: boolean;
}

const Teaser: FunctionComponent<TeaserProps> = ({
	className,
	children,
	url,
	linkText,
	isExternal = false,
}) => {
	return (
		<TeaserContainer className={className}>
			{children}
			<HorizontalLine />
			<LinkContainer>
				{isExternal ? (
					<StyledExternalLink href={url}>{linkText}</StyledExternalLink>
				) : (
					<StyledLocalLink to={url}>
						{linkText}
						<AltRightArrow />
					</StyledLocalLink>
				)}
			</LinkContainer>
		</TeaserContainer>
	);
};

export default memo(Teaser);
