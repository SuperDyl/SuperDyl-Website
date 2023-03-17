import React, { FunctionComponent, memo } from "react";
import { Header1 } from "../SharedStyles";
import { TitledSectionContainer } from "./styles";

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
			<Header1>{header}</Header1>
			{children}
		</TitledSectionContainer>
	);
};

export default memo(TitledSection);
