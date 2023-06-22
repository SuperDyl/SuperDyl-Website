import React, { memo, FunctionComponent } from "react";
import { Blocker, ScrollBlock } from "./styles";

type Callback = () => void;

interface ScreenBlockerProps {
	className?: string;
	onClick?: Callback;
}

const ScreenBlocker: FunctionComponent<ScreenBlockerProps> = ({
	className,
	onClick,
}) => {
	return (
		<>
			<ScrollBlock />
			<Blocker
				className={className}
				onClick={onClick}
			/>
		</>
	);
};

export default memo(ScreenBlocker);
