import React, { memo, FunctionComponent, ReactNode } from "react";
import {
	ExternalLinkContainer,
	LocalLinkContainer,
	TileContainer,
} from "./styles";
import { OptionalUrlProps } from "../../constants";

export type TileProps = {
	className?: string;
	children?: ReactNode;
} & OptionalUrlProps;

const Tile: FunctionComponent<TileProps> = ({
	className,
	children,
	url = undefined,
	isExternal = false,
	isLocal = false,
}) => {
	if (url === undefined) {
		return <TileContainer className={className}>{children}</TileContainer>;
	}
	if (isExternal) {
		return <ExternalLinkContainer href={url}>{children}</ExternalLinkContainer>;
	}
	if (isLocal) {
		return <LocalLinkContainer to={url}>{children}</LocalLinkContainer>;
	}

	return <></>; //should be unreachable
};

export default memo(Tile);
