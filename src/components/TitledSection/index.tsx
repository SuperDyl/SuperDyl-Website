import React, { FunctionComponent, memo } from "react";
import { TitledSectionContainer, StickyHeader1 } from "./styles";

interface TitledSectionProps {
	header: string;
	children?: JSX.Element | JSX.Element[];
	className?: string;
}

const TitledSection: FunctionComponent<TitledSectionProps> = ({
	children,
	header,
	className,
}) => {
	return (
		<TitledSectionContainer className={className}>
			<StickyHeader1>{header}</StickyHeader1>
			{children}
		</TitledSectionContainer>
	);
};

export default memo(TitledSection);
