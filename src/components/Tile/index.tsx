import React, { memo, FunctionComponent, ReactNode } from "react";
import { LocalLinkContainer, TileContainer } from "./styles";
import { LocalLink } from "../SharedStyles";

export interface TileProps {
	className?: string;
	children?: ReactNode;
	url: string;
}

const Tile: FunctionComponent<TileProps> = ({ className, children, url }) => {
	if (url !== undefined) {
		return <LocalLinkContainer to={url}>{children}</LocalLinkContainer>;
	}

	return <TileContainer className={className}>{children}</TileContainer>;
};

export default memo(Tile);
