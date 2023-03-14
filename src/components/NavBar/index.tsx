import React, { FunctionComponent, memo } from "react";
import { NavBarContainer, NavItem } from "./styles";

interface NavBarProps {
	className?: string;
}

const NavBar: FunctionComponent<NavBarProps> = ({ className }) => {
	return (
		<NavBarContainer className={className}>
			<NavItem to="/">Minecraft</NavItem>
			<NavItem to="/">Blog</NavItem>
			<NavItem to="/">Archive</NavItem>
		</NavBarContainer>
	);
};

export default memo(NavBar);
