import React, { FunctionComponent, ReactNode, ReactElement } from "react";
import { OuterContainer, StyledBottomTile, StyledTopTile } from "./styles";
import { ClickableProps } from "../Clickable";

export const TileTop: FunctionComponent<ClickableProps> = (props) => {
	return <StyledTopTile {...props}></StyledTopTile>;
};

export const TileBottom: FunctionComponent<ClickableProps> = (props) => {
	return <StyledBottomTile {...props}></StyledBottomTile>;
};

export type TileProps = {
	className?: string;
	children: [ReactElement<typeof TileTop>, ReactElement<typeof TileBottom>];
};

export const Tile: FunctionComponent<TileProps> = ({ className, children }) => {
	return <OuterContainer className={className}>{children}</OuterContainer>;
};
