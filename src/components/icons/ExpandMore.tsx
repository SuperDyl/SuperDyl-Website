import React, { memo } from "react";
import { StyledSVG } from "../SharedStyles";

const ExpandMore = () => {
	return (
		<StyledSVG
			xmlns="http://www.w3.org/2000/svg"
			height="48"
			viewBox="0 -1100 960 960"
			width="48"
		>
			<path d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z" />
		</StyledSVG>
	);
};

export default memo(ExpandMore);