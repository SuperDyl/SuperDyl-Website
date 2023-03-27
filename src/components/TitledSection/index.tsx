import React, { FunctionComponent, memo } from "react";
import { TitledSectionContainer, StickyHeader1 } from "./styles";

interface TitledSectionProps {
	header: string;
	children?: JSX.Element | JSX.Element[];
	className?: string;
}

//TODO Allow exporting the header height via function on resize
// the subsection can then use this for changing it's top

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
