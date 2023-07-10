import React, { memo, FunctionComponent, ReactNode } from "react";
import {
	StyledBottomRightContainer,
	StyledLayout,
	StyledTopLeftContainer,
} from "./styles";
import { MC_PAGES } from "../../constants";

interface TopLeftContainerProps {
	className?: string;
	children?: ReactNode;
}
export const TopLeftContainer: FunctionComponent<TopLeftContainerProps> = ({
	className,
	children,
}) => {
	return (
		<StyledTopLeftContainer className={className}>
			{children}
		</StyledTopLeftContainer>
	);
};

interface BottomRightContainerProps {
	className?: string;
	children?: ReactNode;
}
export const BottomRightContainer: FunctionComponent<
	BottomRightContainerProps
> = ({ className, children }) => {
	return (
		<StyledBottomRightContainer className={className}>
			{children}
		</StyledBottomRightContainer>
	);
};

interface MiniLayoutProps {
	className?: string;
	children: [
		React.ReactElement<TopLeftContainerProps>,
		React.ReactElement<BottomRightContainerProps>
	];
	activeLink?: MC_PAGES;
}
const MiniLayout: FunctionComponent<MiniLayoutProps> = ({
	className,
	children,
	activeLink,
}) => {
	return (
		<StyledLayout
			className={className}
			activeLink={activeLink}
		>
			{children}
		</StyledLayout>
	);
};

export default memo(MiniLayout);
