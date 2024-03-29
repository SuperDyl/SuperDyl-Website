import React, { FunctionComponent, memo } from "react";
import { StyledSVG } from "../SharedStyles";

interface AltRightArrowProps {
	className?: string;
}

const AltRightArrow: FunctionComponent<AltRightArrowProps> = ({
	className,
}) => {
	return (
		<StyledSVG
			xmlns="http://www.w3.org/2000/svg"
			height="48"
			viewBox="0 -1100 960 960"
			width="48"
			className={className}
		>
			<path d="m561-242-43-42 168-168H160v-60h526L517-681l43-42 241 241-240 240Z" />
		</StyledSVG>
	);
};

export default memo(AltRightArrow);
