import React, { memo, FunctionComponent, ReactNode, useMemo } from "react";
import {
	OuterContainer,
	TopContainer,
	BottomContainer,
	TopExternalLink,
	TopLocalLink,
} from "./styles";
import { OptionalUrlProps } from "../../constants";

export type TileProps = {
	className?: string;
	children?: ReactNode;
	topText: string;
} & OptionalUrlProps;

const Tile: FunctionComponent<TileProps> = ({
	children,
	topText,
	url = undefined,
	isExternal = false,
	isLocal = false,
}) => {
	const top = useMemo(() => {
		if (url === undefined) {
			return <TopContainer>{topText}</TopContainer>;
		}
		if (isLocal) {
			return <TopLocalLink to={url}>{topText}</TopLocalLink>;
		}
		if (isExternal) {
			return <TopExternalLink href={url}>{topText}</TopExternalLink>;
		}
	}, []);

	return (
		<OuterContainer>
			{top}
			<BottomContainer>{children}</BottomContainer>
		</OuterContainer>
	);
};

export default memo(Tile);
