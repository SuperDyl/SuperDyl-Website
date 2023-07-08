import React, { memo, FunctionComponent, ReactNode, ReactElement } from "react";
import { TileProps } from "../Tile";
import { TileGridContainer } from "./styles";
import { mobileWidth, tabletWidth } from "../../constants";

interface TileGridProps {
	className?: string;
	children?: ReactElement<TileProps> | ReactElement<TileProps>[];
}

const TileGrid: FunctionComponent<TileGridProps> = ({
	className,
	children,
}) => {
	return (
		<TileGridContainer
			className={className}
			$columnGroups={[
				{ minWidth: `${mobileWidth}px`, columns: 2 },
				{ minWidth: `${tabletWidth}px`, columns: 4 },
			]}
		>
			{children}
		</TileGridContainer>
	);
};

export default memo(TileGrid);
