import React, { memo, FunctionComponent } from "react";
import { StyledSVG } from "../SharedStyles";

interface ExternalArrowProps {
	className?: string;
}

const ExternalArrow: FunctionComponent<ExternalArrowProps> = ({
	className,
}) => {
	return (
		<StyledSVG
			xmlns="http://www.w3.org/2000/svg"
			width="12"
			height="12"
			viewBox="-1 -4 15 15"
			className={className}
			$strokeWidth="0"
		>
			<title>external link</title>
			<path d="M6 1h5v5L8.86 3.85 4.7 8 4 7.3l4.15-4.16L6 1ZM2 3h2v1H2v6h6V8h1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
		</StyledSVG>
	);
};

export default memo(ExternalArrow);
