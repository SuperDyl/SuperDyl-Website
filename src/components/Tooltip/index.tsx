import React, { memo, FunctionComponent, ReactNode } from "react";
import { CenteringBox, TooltipBox } from "./styles";

interface TooltipProps {
	className?: string;
	children?: ReactNode;
	content: ReactNode;
	visible: boolean;
}

const Tooltip: FunctionComponent<TooltipProps> = ({
	className,
	children,
	content,
	visible,
}) => {
	return (
		<>
			{children}
			<CenteringBox>
				<TooltipBox
					className={className}
					$visible={visible}
				>
					{content}
				</TooltipBox>
			</CenteringBox>
		</>
	);
};

export default Tooltip;
