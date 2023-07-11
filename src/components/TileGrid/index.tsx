import React, { memo, FunctionComponent, ReactNode, ReactElement } from "react";
import { TileProps } from "../Tile";
import { ColumnGroup, TileGridContainer } from "./styles";
import { mobileWidth, tabletWidth } from "../../constants";

interface TileGridProps {
	className?: string;
	children?: ReactElement<TileProps> | ReactElement<TileProps>[];
	columnGroups?: ColumnGroup[];
}

const TileGrid: FunctionComponent<TileGridProps> = ({
	className,
	children,
	columnGroups = [
		{ minWidth: `${mobileWidth}px`, columns: 2 },
		{ minWidth: `${tabletWidth}px`, columns: 4 },
	],
}) => {
	return (
		<TileGridContainer
			className={className}
			$columnGroups={columnGroups}
		>
			{children}
		</TileGridContainer>
	);
};

export default memo(TileGrid);
