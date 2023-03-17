import React, { FunctionComponent, memo } from "react";
import { Header2 } from "../SharedStyles";
import { TitledSubSectionContainer } from "./styles";

interface TitledSubSectionProps {
	header: string;
	children?: JSX.Element | JSX.Element[];
	className?: string;
}

const TitledSubSection: FunctionComponent<TitledSubSectionProps> = ({
	children,
	header,
	className,
}) => {
	return (
		<TitledSubSectionContainer className={className}>
			<Header2>{header}</Header2>
			{children}
		</TitledSubSectionContainer>
	);
};

export default memo(TitledSubSection);
