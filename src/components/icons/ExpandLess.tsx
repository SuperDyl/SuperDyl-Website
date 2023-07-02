import React, { FunctionComponent, memo } from "react";
import { StyledSVG } from "../SharedStyles";

interface ExpandLessProps {
	className?: string;
}

const ExpandLess: FunctionComponent<ExpandLessProps> = ({ className }) => {
	return (
		<StyledSVG
			xmlns="http://www.w3.org/2000/svg"
			height="48"
			viewBox="0 -1100 960 960"
			width="48"
			className={className}
		>
			<path d="m283-345-43-43 240-240 240 239-43 43-197-197-197 198Z" />
		</StyledSVG>
	);
};

export default memo(ExpandLess);
