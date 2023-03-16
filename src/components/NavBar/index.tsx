import React, { FunctionComponent, memo } from "react";
import { NavBarContainer, NavItem } from "./styles";

interface NavBarProps {
	className?: string;
	navItems: {
		to: string;
		text: string;
	}[];
}

const NavBar: FunctionComponent<NavBarProps> = ({ className, navItems }) => {
	return (
		<NavBarContainer className={className}>
			{navItems.map(({ to, text }) => (
				<NavItem
					to={to}
					key={to}
				>
					{text}
				</NavItem>
			))}
		</NavBarContainer>
	);
};

export default memo(NavBar);
