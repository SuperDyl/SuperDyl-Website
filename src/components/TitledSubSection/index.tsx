import React, { FunctionComponent, ReactNode, memo } from "react";
import { StickyHeader2, TitledSubSectionContainer } from "./styles";

interface TitledSubSectionProps {
	header: string;
	children?: ReactNode;
	className?: string;
}

const TitledSubSection: FunctionComponent<TitledSubSectionProps> = ({
	children,
	header,
	className,
}) => {
	return (
		<TitledSubSectionContainer className={className}>
			<StickyHeader2>{header}</StickyHeader2>
			{children}
		</TitledSubSectionContainer>
	);
};

export default memo(TitledSubSection);
